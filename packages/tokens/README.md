# @life-ds/tokens

Life Design System 的设计令牌 (Design Tokens) 核心包。

该包通过调用 Figma API 自动提取最新的设计变量，并将其转换为跨端可用的 CSS Variables。它是构建 Life Design System Web 组件和相关界面的基石，确保了设计语言的高度一致性。

## 安装

```bash
npm install @life-ds/tokens
```

## 使用

将 CSS 文件直接引入到你的入口文件（如 `main.tsx`, `index.js` 或 `index.html`）中：

```javascript
// 在 JS/TS 中引入
import '@life-ds/tokens/life-ds-tokens.css';
```

或者在 HTML 中：

```html
<link rel="stylesheet" href="node_modules/@life-ds/tokens/life-ds-tokens.css">
```

> **注意：** 推荐通过 `@life-ds/components-web` 的 CLI 工具 (`npx @life-ds/components-web init`) 来自动提取并引入所有的设计资产。

## 包含的 Token 范围

- **颜色 (Colors)**: 包括主色、中性色、成功/警告/危险状态色、文本色、背景色、边框色等。支持 Light/Dark 主题切换。
- **排版 (Typography)**: 字体族 (Font Family)、字号 (Font Size)、行高 (Line Height) 等文字相关的定义。
- **间距与尺寸 (Spacing & Sizing)**: 统一的间距比例。
- **圆角 (Border Radius)**: 统一的圆角变量。
- **阴影与特效 (Effects)**: 预定义的阴影 (Box Shadow) 变量。

## 开发者脚本

如果你是 Life Design System 的维护者，需要从 Figma 更新 Token，请执行以下步骤：

1. 在项目根目录创建 `.env.local` 文件，并添加 `FIGMA_TOKEN=你的Figma个人访问令牌`。
2. 运行同步命令：

```bash
# 在 monorepo 根目录下运行
npm run sync-tokens
```

这会自动执行位于 `scripts/` 下的 Node.js 脚本，连接 Figma 并生成最新的 `life-ds-tokens.css`。
