import type { Handler } from "@netlify/functions";

/**
 * CRM Integration API Endpoint
 *
 * Receives lead data from the contact form and forwards it to configured CRM.
 * Supports: Okki CRM, Enterprise Email, Custom API
 *
 * Usage: POST /api/crm-lead
 * Body: { name, company, email, phone, product_interest, estimated_quantity, country, message, source }
 */

interface LeadData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  product_interest?: string;
  estimated_quantity?: string;
  country?: string;
  subject?: string;
  message?: string;
  source?: string;
  timestamp?: string;
}

// Okki CRM integration
async function pushToOkki(lead: LeadData, apiEndpoint: string): Promise<Response> {
  const okkiPayload = {
    customer_name: lead.name,
    company_name: lead.company || "",
    email: lead.email,
    phone: lead.phone || "",
    country: lead.country || "",
    source: lead.source || "website",
    remark: [
      lead.product_interest ? `Product Interest: ${lead.product_interest}` : "",
      lead.estimated_quantity ? `Est. Quantity: ${lead.estimated_quantity}` : "",
      lead.subject ? `Subject: ${lead.subject}` : "",
      lead.message ? `Message: ${lead.message}` : "",
    ]
      .filter(Boolean)
      .join("\n"),
    created_at: lead.timestamp || new Date().toISOString(),
  };

  return fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OKKI_API_KEY || ""}`,
    },
    body: JSON.stringify(okkiPayload),
  });
}

// Email notification
async function sendEmailNotification(
  lead: LeadData,
  notificationEmail: string
): Promise<void> {
  // Uses Netlify's built-in form notification or a custom email service
  // This is a placeholder for email integration (SendGrid, Mailgun, etc.)
  console.log(
    `[CRM] New lead notification → ${notificationEmail}`,
    JSON.stringify(lead)
  );
}

// Custom API integration
async function pushToCustomAPI(
  lead: LeadData,
  apiEndpoint: string
): Promise<Response> {
  return fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.CRM_API_KEY || ""}`,
    },
    body: JSON.stringify({
      ...lead,
      timestamp: lead.timestamp || new Date().toISOString(),
    }),
  });
}

const handler: Handler = async (event) => {
  // CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  // Handle preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const lead: LeadData = JSON.parse(event.body || "{}");

    // Basic validation
    if (!lead.name || !lead.email) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: "Missing required fields: name, email",
        }),
      };
    }

    lead.timestamp = new Date().toISOString();
    lead.source = lead.source || "website-contact-form";

    // Determine CRM provider from environment variables
    const crmProvider = process.env.CRM_PROVIDER || "disabled";
    const crmEndpoint = process.env.CRM_API_ENDPOINT || "";
    const notificationEmail =
      process.env.CRM_NOTIFICATION_EMAIL || "";

    const results: string[] = [];

    switch (crmProvider) {
      case "okki":
        if (crmEndpoint) {
          const okkiRes = await pushToOkki(lead, crmEndpoint);
          results.push(`Okki CRM: ${okkiRes.status}`);
        }
        break;

      case "email":
        if (notificationEmail) {
          await sendEmailNotification(lead, notificationEmail);
          results.push(`Email notification sent to ${notificationEmail}`);
        }
        break;

      case "custom":
        if (crmEndpoint) {
          const customRes = await pushToCustomAPI(lead, crmEndpoint);
          results.push(`Custom API: ${customRes.status}`);
        }
        break;

      default:
        results.push("CRM integration disabled — lead logged only");
        break;
    }

    // Always log the lead for debugging
    console.log("[CRM Lead]", JSON.stringify(lead));

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: "Lead captured successfully",
        details: results,
      }),
    };
  } catch (error) {
    console.error("[CRM Error]", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};

export { handler };
