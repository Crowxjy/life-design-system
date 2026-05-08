---
version: alpha
name: Airbnb
description: 一个温暖、宽容的消费级市场，以干净的白色画布和 Airbnb Rausch (#ff385c) 为基础，这是承载每个主要 CTA、搜索按钮圆球和评分圆点的单一品牌视觉焦点。字体使用 Airbnb Cereal VF，字重适中 —— 标题字号在 22–28px，字重为 500/600，而不是金融科技和企业系统常用的沉重的 700+ 字重；该品牌更依赖摄影和充足的留白，而不是排版上的视觉冲击力。顶部导航栏中有三个产品入口（房源、体验、服务），带有手绘的 32px 图标符号和“NEW”徽章，标志着市场扩张而不是功能的堆砌。药丸状的搜索栏 (`{rounded.full}`)、圆润的房源卡片 (`{rounded.lg}` ~14px) 和 32px 的按钮圆角让人感觉友好和人性化 —— 除了正文网格，几乎没有任何生硬的直角。

colors:
  primary: "#ff385c"
  primary-active: "#e00b41"
  primary-disabled: "#ffd1da"
  primary-error-text: "#c13515"
  primary-error-text-hover: "#b32505"
  luxe: "#460479"
  plus: "#92174d"
  ink: "#222222"
  body: "#3f3f3f"
  muted: "#6a6a6a"
  muted-soft: "#929292"
  hairline: "#dddddd"
  hairline-soft: "#ebebeb"
  border-strong: "#c1c1c1"
  canvas: "#ffffff"
  surface-soft: "#f7f7f7"
  surface-card: "#ffffff"
  surface-strong: "#f2f2f2"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  legal-link: "#428bff"
  star-rating: "#222222"
  scrim: "#000000"

typography:
  display-xl:
    fontFamily: "'Airbnb Cereal VF', Circular, -apple-system, system-ui, Roboto, 'Helvetica Neue', sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.43
    letterSpacing: 0
  display-lg:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.18
    letterSpacing: -0.44px
  display-md:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 21px
    fontWeight: 700
    lineHeight: 1.43
    letterSpacing: 0
  display-sm:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: -0.18px
  title-md:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  title-sm:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  rating-display:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -1px
  body-md:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  caption:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.29
    letterSpacing: 0
  caption-sm:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.23
    letterSpacing: 0
  badge:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: 0
  micro-label:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: 0
  uppercase-tag:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 8px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0.32px
    textTransform: uppercase
  button-md:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  button-sm:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.29
    letterSpacing: 0
  link:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  nav-link:
    fontFamily: "'Airbnb Cereal VF', Circular, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0

rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 14px
  lg: 20px
  xl: 32px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  base: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 64px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: 14px 24px
    height: 48px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
  button-primary-disabled:
    backgroundColor: "{colors.primary-disabled}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: 13px 23px
    height: 48px
  button-tertiary-text:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
  button-pill-rausch:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.full}"
    padding: 10px 20px
  search-orb:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    height: 48px
  icon-button-circle:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    height: 32px
  icon-button-outline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    height: 40px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 80px
  product-tab-active:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.none}"
  product-tab-inactive:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.nav-link}"
  search-bar-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: 14px 24px
    height: 64px
  search-field-segment:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    padding: 8px 24px
  category-strip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.button-sm}"
  category-tab-active:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.none}"
  property-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
  property-card-photo:
    rounded: "{rounded.md}"
  experience-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.md}"
  city-link-block:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.title-sm}"
  rating-display-card:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.rating-display}"
  guest-favorite-badge:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.badge}"
    rounded: "{rounded.full}"
    padding: 4px 10px
  new-tag:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.uppercase-tag}"
    rounded: "{rounded.full}"
    padding: 2px 6px
  amenity-row:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: 12px 0
  reviews-card:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
  host-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 24px
  reservation-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 24px
  date-picker-day:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
  date-picker-day-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.full}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 14px 12px
    height: 56px
  footer-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: 48px 80px
  footer-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
  legal-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption-sm}"
---

## 概述 (Overview)

Airbnb 是一个宽容、以摄影为主导的消费级市场的典型代表。基础画布是**纯白色**（`{colors.canvas}` — #ffffff），标题和正文使用深色近乎黑色的墨水色（`{colors.ink}` — #222222），并使用单一的 **Rausch**（`{colors.primary}` — #ff385c）作为视觉焦点，承载每个主要 CTA（行为呼唤）、搜索按钮圆球、心形收藏状态以及内联品牌链接。在主线营销中没有次要品牌色 —— **Luxe 紫色**（`{colors.luxe}` — #460479）和 **Plus 洋红色**（`{colors.plus}` — #92174d）作为子品牌强调色，仅出现在 Airbnb Luxe / Plus 环境中。

字体使用 **Airbnb Cereal VF**（Airbnb 获得许可的定制可变字体），并以 **Circular** 作为历史内部备用字体，底层则是系统字体栈。Cereal 的字重适中 —— 标题渲染为 22–28px，字重 500–600，而不是金融或企业系统所倾向的沉重 700+ 字重。首页的焦点 H1（“未来假期的灵感”）只有 28px / 700，这在典型的 SaaS 页面上会显得很小；但在这里它之所以有效，是因为布局依赖摄影（城市拼贴、房源卡片）来提供视觉分量，而不是依靠字体的粗细。

形状语言是**柔和的**。按钮有 8px 的圆角（`{rounded.sm}`），房源卡片约为 14px（`{rounded.md}`），搜索栏是完全的药丸形状（`{rounded.full}`），心愿单的心形和搜索圆球是圆形的（`{rounded.full}`），分类条的圆角为 32px（`{rounded.xl}`）。除了正文网格本身，几乎没有任何生硬的直角 —— 每个交互元素都是圆润的。

**主要特征：**
- 单一强调色：`{colors.primary}`（#ff385c — "Rausch"）承载了每个主 CTA、搜索圆球、心形收藏状态和品牌文字标志。使用非常克制 —— 大多数页面是 90% 的白色 + 墨水色，只有一两处 Rausch 颜色点缀。
- 定制可变字体：`Airbnb Cereal VF`。标题字重在 500–700 之间，正文字重为 400。适中的字重是有意为之的 —— 系统依赖摄影来增加视觉分量。
- 三个产品的顶部导航栏：房源、体验、服务 —— 每个都有一个手绘的 32px 图标，其中两个较新的产品带有“NEW”徽章（`{component.new-tag}`）。活动标签下方使用下划线（`{component.product-tab-active}`）。
- 药丸状全局搜索栏：白色表面，完全圆角（`{rounded.full}`），由 1px 细线划分为地点 / 时间 / 人员（Where / When / Who）几个部分，末端以一个圆形的 Rausch 搜索圆球（`{component.search-orb}`）结束。
- 房源卡片以照片为主：按特定宽高比的矩形，带有 `{rounded.md}` 圆角裁剪，可滑动的图片轮播，左上角悬浮“房客最爱（Guest favorite）”徽章，右上角为心形图标，下方则是 4-5 行元数据。
- 编辑风格的下拉菜单（页脚、语言选择器）是在白色画布上干净的文本列 —— 没有卡片表面，没有阴影。
- 设计系统将层级限制在单一阴影层（`box-shadow: rgba(0,0,0,0.02) 0 0 0 1px, rgba(0,0,0,0.04) 0 2px 6px, rgba(0,0,0,0.1) 0 4px 8px`）—— 悬停时浮动的卡片以及搜索/账户下拉菜单使用此阴影。
- 8px 基础间距系统，主要部分间距为 `{spacing.section}`（64px）—— 宽敞但又不像编辑杂志那样空旷；市场密度要求每次滚动能看到更多卡片。

## 颜色 (Colors)

### 品牌与强调色 (Brand & Accent)
- **Rausch** (`{colors.primary}` — #ff385c)：唯一的品牌色。用于主 CTA 背景（预订、继续）、搜索圆球、房源卡片上的心形收藏状态以及内联品牌链接。这是消费旅游中最具辨识度的颜色。
- **Rausch Active** (`{colors.primary-active}` — #e00b41)：按下/指针按下状态变体 —— 饱和度略高。用于 `{component.button-primary-active}`。
- **Rausch Disabled** (`{colors.primary-disabled}` — #ffd1da)：淡色调，用于禁用的 CTA。
- **Luxe Purple** (`{colors.luxe}` — #460479)：Airbnb Luxe 的子品牌强调色。仅出现在 Luxe 品牌的界面内 —— 从不在主线营销中出现。
- **Plus Magenta** (`{colors.plus}` — #92174d)：Airbnb Plus 的子品牌强调色。作用域与 Luxe 相同 —— 仅限子产品。

### 表面 (Surface)
- **Canvas** (`{colors.canvas}` — #ffffff)：每个公开页面的默认底层。Airbnb 在公共 Web 端没有深色模式。
- **Surface Soft** (`{colors.surface-soft}` — #f7f7f7)：最浅的填充色 —— 用于禁用字段、子导航悬停背景和内联搜索过滤器栏。
- **Surface Strong** (`{colors.surface-strong}` — #f2f2f2)：略重的填充色 —— 圆形图标按钮表面（如面包屑返回箭头和列表工具栏按钮）。

### 细线与边框 (Hairlines & Borders)
- **Hairline** (`{colors.hairline}` — #dddddd)：默认的 1px 边框色调 —— 搜索栏分隔线、表格分隔线、页脚列分隔线、卡片 1px 边框。
- **Hairline Soft** (`{colors.hairline-soft}` — #ebebeb)：用于长滚动编辑正文分隔符的较浅的分隔线。
- **Border Strong** (`{colors.border-strong}` — #c1c1c1)：较粗的描边，用于禁用的轮廓按钮和获得焦点后的表单输入框轮廓。

### 文本 (Text)
- **Ink** (`{colors.ink}` — #222222)：浅色表面上的主要文本颜色。显示标题、正文段落、主导航链接和大多数内联链接文本。绝对不是纯黑色。
- **Body** (`{colors.body}` — #3f3f3f)：次要的运行文本颜色，用于长篇评论和设施文案中，在这些地方使用墨水色（Ink）会显得过于沉重。
- **Muted** (`{colors.muted}` — #6a6a6a)：城市链接块内的副标题（“别墅出租”、“别墅出租”）、非活动产品选项卡标签、页脚类别副标签、“查看全部”链接。
- **Muted Soft** (`{colors.muted-soft}` — #929292)：禁用的链接文本。使用极其克制。
- **Star Rating** (`{colors.star-rating}` — #222222)：与墨水色相同的 Token —— Airbnb 的星形图标和“4.81”评分数字均使用墨水色呈现，而不是黄色/金色，这是深思熟虑的品牌选择（黄色星星在旅游语境下显得廉价）。
- **On Primary** (`{colors.on-primary}` — #ffffff)：Rausch CTA 上的白色文本。

### 语义色 (Semantic)
- **Error** (`{colors.primary-error-text}` — #c13515)：用于表单验证的内联错误文本。有别于 Rausch —— 稍微深一些、饱和度更高的红色。
- **Error Hover** (`{colors.primary-error-text-hover}` — #b32505)：在链接悬停时变暗。
- **Legal Link Blue** (`{colors.legal-link}` — #428bff)：法律文案（隐私、条款）内的内联链接。仅在法律子区域内使用。

### 遮罩 / 蒙层 (Scrim)
- **Scrim** (`{colors.scrim}` — #000000 且不透明度为 50%)：全局模态背景色调 —— 日期选择器、登录对话框、语言选择器。存储为基础十六进制值；不透明度在渲染时应用。

## 排版 / 字体排印 (Typography)

### 字体家族 (Font Family)
系统对所有内容（标题、正文、导航、字幕、微文案）均使用 **Airbnb Cereal VF**。后备字体顺序为 `Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif`。**Circular** 是一直保留作为首个非可变后备字体的历史内部字体；系统字体栈在它之后进行兜底。

没有单独的标题字体家族。可变字体承载了整个缩放比例。

### 层级结构 (Hierarchy)

| Token | 大小 (Size) | 字重 (Weight) | 行高 (Line Height) | 字间距 (Letter Spacing) | 用途 (Use) |
|---|---|---|---|---|---|
| `{typography.rating-display}` | 64px | 700 | 1.1 | -1px | 房源详情评分显示 ("4.81") |
| `{typography.display-xl}` | 28px | 700 | 1.43 | 0 | 首页 h1 ("Inspiration for future getaways") |
| `{typography.display-lg}` | 22px | 500 | 1.18 | -0.44px | 房源详情 h1 ("Close to Fethiye Aliyah Bali Beach…") |
| `{typography.display-md}` | 21px | 700 | 1.43 | 0 | 房源详情内的部分标题 ("What this place offers") |
| `{typography.display-sm}` | 20px | 600 | 1.20 | -0.18px | 子部分标题 ("Things to know") |
| `{typography.title-md}` | 16px | 600 | 1.25 | 0 | 城市链接块标题 ("Wilmington", "Athens") |
| `{typography.title-sm}` | 16px | 500 | 1.25 | 0 | 页脚列标题 ("Support", "Hosting", "Airbnb") |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | 房源文案中的默认连续文本 |
| `{typography.body-sm}` | 14px | 400 | 1.43 | 0 | 卡片元数据行、日期、价格、距离文本 |
| `{typography.caption}` | 14px | 500 | 1.29 | 0 | 搜索字段片段标签 ("Where", "When", "Who") |
| `{typography.caption-sm}` | 13px | 400 | 1.23 | 0 | 页脚法律声明行 ("© 2026 Airbnb, Inc.") |
| `{typography.badge}` | 11px | 600 | 1.18 | 0 | "Guest favorite" 浮动徽章文本 |
| `{typography.micro-label}` | 12px | 700 | 1.33 | 0 | 卡片设施微标签 ("Inline 6") |
| `{typography.uppercase-tag}` | 8px | 700 | 1.25 | 0.32px (大写) | 产品导航标签上的 "NEW" 徽章 |
| `{typography.button-md}` | 16px | 500 | 1.25 | 0 | 主要 CTA 按钮标签 |
| `{typography.button-sm}` | 14px | 500 | 1.29 | 0 | 药丸按钮标签 (分类条) |
| `{typography.link}` | 14px | 400 | 1.43 | 0 | 内联正文链接 |
| `{typography.nav-link}` | 16px | 600 | 1.25 | 0 | 顶部产品导航标签 (Homes, Experiences, Services) |

### 原则 (Principles)
标题字重保持适中。首页 H1（28px / 700）故意做得很小 —— 它隐藏在搜索栏下方，因此摄影和城市链接网格承载了视觉层级。房源详情 H1（22px / 500）甚至更安静；它上方的房源照片横幅发挥了主要作用。

整个系统中唯一在排版上比较显眼的地方是房源页面上的**评分显示**（`{typography.rating-display}` — 64px / 700）。这是系统唯一信任单纯使用字体来传达层级结构的地方 —— 评分数字是最高级别的信任信号，因此它们获得了最响亮的处理。

### 关于替代字体的说明 (Note on Font Substitutes)
如果 Airbnb Cereal VF 和 Circular 不可用，**Inter** 是最接近的开源替代品。将显示标题的行高向下调整约 2% 以匹配 Cereal 稍微紧凑的大写字母高度；否则比例将干净地过渡。

## 布局 (Layout)

### 间距系统 (Spacing System)
- **基础单位 (Base unit)：** 4px（包含 2px 的微小步进）。
- **Tokens：** `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.base}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 64px。
- **内边距/部分间距 (Section padding - vertical)：** `{spacing.section}` (64px) 用于主要页面带块；比典型的 SaaS 营销页面 (80–96px) 更紧凑，因为市场页面需要每次滚动展示更高密度的卡片。
- **卡片内部边距 (Card internal padding)：** `{spacing.lg}` (24px) 用于 `{component.host-card}` 和 `{component.reservation-card}`；`{spacing.base}` (16px) 用于房源卡片元数据块；`{spacing.sm}` (8px) 用于说明 / 日期行间距。
- **间隙 (Gutters)：** `{spacing.base}` (16px) 用于首页城市网格中的卡片之间；`{spacing.lg}` (24px) 用于页脚列内部间隙；`{spacing.xs}` (4px) 用于密集的分类条分隔符。

### 网格与容器 (Grid & Container)
- **最大内容宽度：** 在首页和编辑类页面上约为 1280px 并居中。房源详情页将上限控制在接近 1080px，以保持照片横幅和预订栏的可读性。
- **城市链接网格（首页页脚）：** 桌面端为 6 列网格，每个单元格包含一个采用 `{typography.title-md}` 的城市名称和一个采用 `{typography.body-sm}` 且弱化显示（muted）的类别子标签。
- **房源详情：** 2 列结构，左侧为照片 / 设施正文（约占 64% 宽度），右侧为粘性预订卡片（`{component.reservation-card}`）（约占 32%）。
- **页脚：** 桌面端为 3 列链接列表（支持 / 托管 / Airbnb），移动端折叠为 1 列。

### 留白哲学 (Whitespace Philosophy)
系统为编辑类区块留出了 64px 的垂直呼吸空间，但压缩了卡片网格 —— 房源和城市链接卡片之间仅相距 16px。这种对比是有意为之的：页面给人以“开放的首屏焦点，下方密集的市场”的阅读感，既强化了市场属性，又不会在首屏以过多信息压垮访客。

## 层级 / 阴影 (Elevation)

系统本质上只有**一层阴影**，外加平面的基础层。

- **平面（无阴影）：** 正文、首屏横幅、页脚、所有编辑区块 —— 占了 95% 的表面。
- **卡片悬浮浮动：** `box-shadow: rgba(0, 0, 0, 0.02) 0 0 0 1px, rgba(0, 0, 0, 0.04) 0 2px 6px 0, rgba(0, 0, 0, 0.1) 0 4px 8px 0` —— 悬停时应用于房源卡片、静止时的搜索栏以及下拉菜单（账户菜单、语言选择器、日期选择器）。这是整个系统中唯一的阴影定义。
- **模态遮罩（Modal scrim）：** 以 50% 不透明度渲染的 `{colors.scrim}` —— 全局模态背景。用于日期选择器、登录对话框、语言选择器。

没有渐进的层级 / 阴影层 —— 系统要么有这一层阴影，要么就没有。深度来自于摄影、白色背景上的白色表面分离以及圆角裁剪，而不是来自于多层阴影。

## 组件 (Components)

### 按钮 (Buttons)

**`button-primary`** — Rausch 填充色，白色文本，8px 圆角，14×24px 内边距，48px 高度，字重 500。整个系统中最常见的 CTA：“预订”、“继续”、“搜索”、账户流程主要操作。

**`button-primary-active`** — 按下状态。背景切换为 `{colors.primary-active}`。没有形变，阴影不改变。

**`button-primary-disabled`** — 浅色 Rausch 色调 #ffd1da，带白色文本。鼠标指针为不可用状态（not-allowed）。

**`button-secondary`** — 白色填充，墨水色文本和 1px 墨水色轮廓。8px 圆角。用于“保存”、“取消”以及在 Rausch 表面上的反向 CTA。

**`button-tertiary-text`** — 纯墨水色文本，无表面，无边框。悬停时有下划线。用于“显示更多”类型的链接和模态框关闭标签。

**`button-pill-rausch`** — 药丸状的 Rausch CTA，用于精选单元格（如：“成为房东”副 CTA）—— 9999px 圆角，10×20px 内边距，14px 标签。

### 搜索表面 (Search Surface)

**`search-bar-pill`** — 标志性的全局搜索栏。白色填充，9999px 圆角，64px 高度，1px 细线外加 1px 阴影的边框。内部通过垂直细线规则分为多个 `{component.search-field-segment}` 单元格（地点 / 时间 / 人员）。每个片段都在占位符线上方持有一个 `{typography.caption}` 的大写说明标签。

**`search-orb`** — 搜索栏右侧边缘的圆形 Rausch 搜索圆球。48×48px，完全圆润，居中的白色放大镜图标。这是主页上最亮眼的单色点缀。

### 顶部导航栏 (Top Navigation)

**`top-nav`** — 白色表面，80px 高度，1px 底部细线。Airbnb 文字标志左对齐，三个产品选项卡（房源 / 体验 / 服务）居中，账户工具（房东链接、语言地球仪、账户菜单）右对齐。

**`product-tab-active`** — 使用 `{typography.nav-link}` 的墨水色标签，32px 手绘图标，图标-标签对下方有 2px 墨水色下划线规则。

**`product-tab-inactive`** — 弱化的标签，带插图的图标，无下划线。点击后变为活动状态。

**`new-tag`** — 一个微小的圆角药丸徽章（`{rounded.full}`），锚定在图标的右上角，承载采用 `{typography.uppercase-tag}`（8px / 700，带 0.32px 字间距，大写）的大写 "NEW" 标签。用于“体验”和“服务”以表示最近推出。

### 房源卡片 (Listing Cards)

**`property-card`** — 以照片为主的卡片。1:1 宽高比图像，带 `{rounded.md}` 圆角裁剪，图像轮播点叠加层，左上角悬浮“房客最爱”徽章（`{component.guest-favorite-badge}`），右上角为心形图标（默认轮廓状态为 `{component.icon-button-circle}`，保存后填充 Rausch 色）。图像下方：4–5 行元数据 —— 标题（`{typography.title-md}`）、距离 / 日期（`{typography.body-sm}` 弱化）和价格（“每晚 $X”）右对齐。

**`property-card-photo`** — 照片板本身，作为单独的 Token，因为某些表面（心愿单、搜索结果）仅复用照片而没有元数据块。

**`experience-card`** — 用于体验房源的更高宽高比（4:5）的卡片。相同的 `{rounded.md}` 裁剪，左上角悬浮 "NEW" 徽章，右上角心形图标，下方单行标题。

**`guest-favorite-badge`** — 白色圆角药丸（`{rounded.full}`），11px / 600 字重。覆盖在照片上，并应用了系统中唯一的阴影层以增加层级高度。

### 房源详情 (Listing Detail)

**`rating-display-card`** — 标志性的房源详情亮点。一个 64px / 700 的评分数字（“4.81”），左右两侧由微小的月桂花环 SVG 装饰作为侧翼。评分下方：“房客最爱”标语和一行墨水色的统计数据列。这是整个系统中最大的字体字重。

**`amenity-row`** — 1 列的设施图标 + 采用 `{typography.body-md}` 的墨水色标签列表。12px 行间距，行与行之间没有边框；部分由上方和下方的 1px 细线分隔符闭合。

**`reviews-card`** — 2 列网格的评论摘录。每列包含一个作者行（头像、姓名、日期）在一个 3 行摘录上方，带有“显示更多”三级链接。

**`host-card`** — 白色卡片，带 `{rounded.md}` 圆角和 24px 内边距，包含房东头像、姓名、“超赞房东”徽章、回复率统计数据以及“联系房东”`{component.button-secondary}` 按钮。

**`reservation-card`** — 房源详情页上的粘性右侧栏卡片。白色表面，`{rounded.md}` 圆角，1px 细线边框，1px 阴影层提升，24px 内边距。包含：每晚价格（`{typography.display-md}` 墨水色）、日期范围选择器、房客人数步进器、全宽的“预订”主 CTA，以及下方采用 `{typography.body-sm}` 的费用明细栈。

### 日期选择器 (Date Picker)

**`date-picker-day`** — 一个 40×40px 的圆形单元格，带有采用 `{typography.body-sm}` 的日期数字。默认状态为透明填充，墨水色文本。

**`date-picker-day-selected`** — 墨水色填充，白色文本，全圆角（`{rounded.full}`）。所选两天之间的范围状态带有连接它们的 `{colors.surface-soft}` 菱形背景。

### 表单 (Forms)

**`text-input`** — 白色表面，1px 细线轮廓，`{rounded.sm}` 8px 圆角，56px 高度，14×12px 内边距。顶部堆叠标签（在 `{typography.caption}` 弱化中），占位符文本在 `{typography.body-md}` 弱化中。聚焦时，边框加粗至 2px 墨水色，边框颜色翻转为 `{colors.ink}` —— 无发光，无光环。

### 页脚 (Footer)

**`footer-light`** — 白色表面（与页面画布相匹配 —— Airbnb 没有高对比度页脚），48×80px 内边距。三列链接块（支持 / 托管 / Airbnb），由宽敞的 24px 间隙分隔。每列以 `{typography.title-sm}` 墨水色标签作为标题，并堆叠 `{component.footer-link}` 行，采用 `{typography.body-sm}` 墨水色。

**`legal-band`** — 页脚列下方的底部条带，带有版权行、语言选择器（地球仪图标 + “English (US)”链接）、货币选择器和社交图标（Facebook、X、Instagram）。所有文本均采用 `{typography.caption-sm}` 弱化色 `{colors.muted}`。

## 响应式行为 (Responsive Behavior)

| 名称 (Name) | 宽度 (Width) | 主要变化 (Key Changes) |
|---|---|---|
| Mobile (移动端) | < 744px | 顶部导航折叠为 logo + 汉堡菜单；产品选项卡隐藏在面板后；搜索栏折叠为单个可点击的药丸；房源卡片单列堆叠；城市网格单列；房源详情预订卡片折叠为粘性底部栏。 |
| Tablet (平板端) | 744–1128px | 顶部导航保留产品选项卡，但搜索栏变窄；房源卡片双列；城市网格 2-3 列；预订卡片在较窄宽度下保持右侧粘性栏。 |
| Desktop (桌面端) | 1128–1440px | 带有三个居中产品选项卡的完整顶部导航；全药丸宽度的搜索栏，所有 3 个分段均可见；房源卡片 4 列；城市网格 6 列；房源详情 2 列结构，带有预订侧栏。 |
| Wide (宽屏端) | > 1440px | 房源/搜索页面的内容宽度上限为 1440px，编辑页面约为 1280px；两边间距吸收剩余空间。 |

### 触摸目标 (Touch Targets)
- 主 CTA 至少 48×48px（高于 WCAG AAA 标准）。
- 搜索圆球为 48×48px 圆形 —— 页面上被点击最多的元素。
- 心形保存按钮为 32×32px 圆形 —— 处于 AAA 边缘，但在照片卡片内通过宽敞的 12px 内边距进行了补偿。
- 日期选择器日期单元格为 40×40px 圆形。

### 折叠策略 (Collapsing Strategy)
- 在 744px 以下，顶部产品选项卡折叠为汉堡面板。
- 搜索栏的 3 个分段折叠为单次点击入口，在移动设备上打开全屏搜索覆盖层。
- 房源和城市链接网格在每个断点处干净利落地减少列数 —— 从不重新排列行；始终减少列。
- 房源详情页的预订卡片在移动设备上从粘性右侧栏切换为粘性底部栏，仅承载“预订” CTA + 每晚价格摘要。

## 已知缺失 (Known Gaps)

- **悬停状态颜色：** 按照全局无悬停策略，有意不记录 —— Airbnb 实际的房源卡片 `:hover` 样式是一种微妙的高度提升，但精确提取并不可靠。
- **加载状态 / 骨架屏：** 在提取的表面上不可见。
- **地图视图样式：** 搜索结果地图使用带有自定义 Rausch 标记的 Mapbox 调色瓦片；未在此捕获。
- **表单输入错误状态：** 错误文本颜色（`{colors.primary-error-text}`）已被记录，但在验证失败时，完整的输入轮廓 + 辅助文本组合在捕获的表面上不可见。
- **子品牌调色板：** Luxe（`{colors.luxe}`）和 Plus（`{colors.plus}`）被记录为 Tokens，但它们的完整子系统（排版覆盖、表面处理）位于单独的子域上，未在此捕获。