# NailTask 网站 Netlify 部署配置指南

## GitHub 仓库

**仓库地址**: https://github.com/ubear11/nailtask-website

---

## 1. 从 GitHub 导入到 Netlify

### 步骤

1. 登录 [Netlify Dashboard](https://app.netlify.com)
2. 点击 **"Add new site"** → **"Import an existing project"**
3. 选择 **GitHub** 并授权访问
4. 搜索并选择仓库: `ubear11/nailtask-website`
5. **构建设置会自动从 `netlify.toml` 读取**:
   - Build command: `pnpm install && pnpm run build`
   - Publish directory: `dist/client`
6. 点击 **"Deploy site"**
7. 等待构建完成（约 2-3 分钟）

### 验证部署成功

部署完成后，访问 Netlify 分配的域名，应该能看到完整的网站首页。

---

## 2. 配置 Identity (用户认证) ⚡ 重要

### 启用 Identity 服务

1. 进入 Netlify Dashboard → 你的站点
2. **Site configuration** → **Identity** → **Enable Identity**

### 配置注册设置

1. Identity → **Registration** → 选择 **"Invite only"**（仅邀请）
2. 这样只有被邀请的用户才能注册

### 邀请管理员用户

1. Identity → **Invite users**
2. 输入管理员邮箱地址
3. 点击 **"Send"**
4. 管理员会收到邀请邮件，点击链接设置密码

---

## 3. 配置 Git Gateway (CMS 内容管理) ⚡ 重要

### 启用 Git Gateway

1. **Site configuration** → **Identity** → **Services**
2. 找到 **"Git Gateway"** → **Enable Git Gateway**
3. 选择 **GitHub** 作为 Git 提供商
4. 授权 Netlify 访问你的 GitHub 仓库

### 如果仓库是私有的

需要生成 GitHub Personal Access Token:
1. 去 GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. 生成新 token，权限选择: `repo` (Full control)
3. 复制 token 粘贴到 Netlify Git Gateway 设置中

---

## 4. 配置外部 OAuth 提供商 (可选但推荐)

### 配置 GitHub OAuth

1. 去 [GitHub Developer Settings](https://github.com/settings/developers) → OAuth Apps
2. 创建新 OAuth App:
   - **Application name**: `NailTask CMS`
   - **Homepage URL**: `https://你的域名.netlify.app`
   - **Authorization callback URL**: `https://api.netlify.com/auth/done`
3. 复制 **Client ID** 和 **Client Secret**
4. 回到 Netlify → **Site configuration** → **Identity** → **External providers**
5. 点击 **Add provider** → 选择 **GitHub**
6. 填入 Client ID 和 Client Secret
7. 保存

### 配置 Google OAuth

1. 去 [Google Cloud Console](https://console.cloud.google.com)
2. 创建项目或选择现有项目
3. **APIs & Services** → **Credentials** → **Create Credentials** → **OAuth Client ID**
4. 应用类型: **Web application**
5. **Authorized redirect URIs**: `https://api.netlify.com/auth/done`
6. 复制 **Client ID** 和 **Client Secret**
7. 回到 Netlify → **Site configuration** → **Identity** → **External providers**
8. 点击 **Add provider** → 选择 **Google**
9. 填入凭据并保存

---

## 5. 配置表单通知 ⚡ 重要

### 启用邮件通知

1. **Site configuration** → **Forms**
2. 等待第一次表单提交后，"contact" 表单会自动出现
3. 或者访问 `/contact` 提交一次测试表单
4. 点击表单名称 → **Form notifications**
5. **Add notification** → **Email notification**
6. 配置:
   - **Email to notify**: `你的管理员邮箱`
   - **Subject**: `[NailTask] 新的网站询盘`
7. 保存

### 其他通知选项

- **Slack 通知**: 连接 Slack workspace
- **Webhook**: 发送到自定义 API（如 CRM）
- **Zapier**: 连接其他应用

---

## 6. 验证所有功能

### ✅ 测试 CMS 登录

1. 访问 `https://你的域名.netlify.app/admin/`
2. 应该看到登录弹窗
3. 使用邀请注册的邮箱密码登录
4. 成功后应该看到 CMS 管理界面

### ✅ 测试邀请流程

1. Identity → Invite users → 输入新邮箱
2. 检查邮箱收到邀请
3. 点击 "Accept the invite"
4. **应该弹出设置密码的对话框** ← 这是之前修复的 BUG
5. 设置密码后自动登录

### ✅ 测试表单提交

1. 访问 `https://你的域名.netlify.app/contact`
2. 填写并提交表单
3. 检查管理员邮箱是否收到通知
4. 检查 Netlify Dashboard → Forms 是否有新提交

### ✅ 测试 Git Gateway

1. 在 CMS 中创建一篇新博客文章
2. 保存并发布
3. 检查 GitHub 仓库是否有新的提交

---

## 7. 常见问题排查

### Q: Accept invite 后没有弹窗？

**A:** 确保:
1. 已启用 Identity 服务
2. 主网站已加载 Netlify Identity Widget
3. 清除浏览器缓存后重试

### Q: CMS 页面空白？

**A:** 检查:
1. Identity 已启用
2. Git Gateway 已启用
3. 浏览器控制台是否有错误
4. 尝试刷新页面

### Q: Git Gateway 报错？

**A:**
1. 确保 Identity 已启用
2. 确保 Git Gateway 已启用
3. 如果是私有仓库，确保已配置 GitHub Token
4. 检查仓库分支名是否是 `main`

### Q: 表单提交没有收到通知？

**A:**
1. 确保在 Forms 设置中添加了邮件通知
2. 检查垃圾邮件文件夹
3. 先提交一次表单让 Netlify 识别表单
4. 等待几分钟后再检查

### Q: 构建失败？

**A:** 检查构建日志，确保:
1. Node.js 版本 >= 22
2. 所有依赖正确安装
3. 没有 TypeScript 类型错误

---

## 8. 自定义域名配置 (可选)

1. **Site configuration** → **Domain management** → **Add a domain**
2. 输入你的域名
3. 按照提示配置 DNS 记录
4. 等待 DNS 传播（最多 48 小时）
5. 启用 HTTPS（自动配置 Let's Encrypt 证书）

---

## 联系支持

如有问题，请联系:
- 技术支持: info@smartnailing.com
- Netlify 文档: https://docs.netlify.com
- Same 支持: support@same.new
