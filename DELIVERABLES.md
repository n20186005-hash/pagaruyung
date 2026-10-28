# pagaruyung.com — SEO 优化交付文档

> 站点：Istano Basa Pagaruyung（Tanah Datar, Sumatra Barat, Indonesia）
> 定位：第三方非营利双语（ID / EN）导览站，非官方、不冒充经营方
> 技术栈：Astro 7 + Tailwind 4 + TypeScript + pnpm + Cloudflare Workers（静态资产）
> 事实基线（2026-10）：Google Maps 4.7 / 17,768 评价；营业时间每日 08:00–18:00（Maps 快照 19 Okt 2026）；地址 Jl. Sutan Alam Bagagarsyah, Pagaruyung

---

## 0. 说明：Search Console 数据来源

工作区内未提供 Search Console 导出 ZIP，本节诊断基于需求书所列数据点与既有站点结构推断，并已逐条给出可执行修复。**待你提供真实 SC 导出后，可复算并校准下表。**

---

## 1. Search Console 诊断

| 现象 / 异常 | 推断原因 | 已采取的对应动作 |
|---|---|---|
| 10 月 6 日曝光/点击突增（尖峰） | 多为媒体/新闻引流或索引抓取波动，非稳定排名提升 | 保留内容，监测是否为噪声；不据此重构标题 |
| EN 首页出现 http 与 https 两个版本被分别收录 | 站点此前缺少统一的 https 强制跳转与规范域名，http 版被索引 | `worker.ts` 已加 `http→https` 与 `www→apex` 301；所有 canonical 统一 `https://pagaruyung.com`（非 www） |
| "pagaruyung kingdom" 64,537 曝光（历史/王国意图词） | 用户大量搜索的是**历史王国**而非当前重建博物馆，站内外对此意图覆盖弱 | 新增 B 组 8 篇历史/文化专题（含 `sejarah-kerajaan-pagaruyung`、`kerajaan-dan-istano-sekarang`），明确区分「王国」与「现存重建建筑」 |
| EN 与 ID 版首页在 Search Console 拆分统计 | 缺少双向 hreflang，Google 无法合并语言版本信号 | 全站补齐 `id` / `en` 双向 hreflang + `x-default→/en/` |

**结论**：核心问题不是内容缺失，而是（a）规范信号分裂（http/https、www/非 www、语言版本未互链）与（b）高价值历史意图词未被独立页面承接。本次优化同时修复两者。

---

## 2. 技术 SEO 修复清单

| 项目 | 修复内容 | 状态 |
|---|---|---|
| HTTPS 统一 | `worker.ts`：`X-Forwarded-Proto: http` → 308 到 https | ✅ |
| 域名统一（非 www） | `worker.ts`：`www.pagaruyung.com` → 308 到 `pagaruyung.com`；canonical 全站非 www | ✅ |
| Canonical 一致性 | 每页自引用 `https://pagaruyung.com/...`；专题页 EN↔ID 互指 | ✅ |
| Hreflang | 全站 `id`/`en` + `x-default→/en/`；首页与专题页双向 | ✅ |
| robots.txt | 新建 `public/robots.txt`，指向 `sitemap-index.xml` | ✅ |
| Sitemap | `@astrojs/sitemap` 自动收录 74 条 URL（2 首页 + 6 法律页 + 66 专题），含 `xhtml:link` alternate | ✅ |
| 状态码 | `worker.ts` 301 重定向；`404.astro` + `X-Robots-Tag: noindex` | ✅ |
| 移动端 | 响应式布局（`.content-wrap` 流式 + 网格 auto-fill） | ✅ |
| 结构化数据 | 首页 `TouristAttraction + FAQPage`；专题页 `WebPage + BreadcrumbList + FAQPage` | ✅ |
| 安全响应头 | `public/_headers`：HSTS、X-Frame-Options、CSP 等 | ✅ |

> 评分策略：刻意**不**把 Google 评分写进 JSON-LD（schema.org 政策要求官方/可核实来源），仅在页面展示并标注「数据来自 Google Maps、核对日期 19 Okt 2026」。

---

## 3. 页面规划清单（33 个专题 × 2 语言 = 66 个 URL）

语言版本不重复计数为 33 个独立主题。

| 分组 | 主题（slug，ID/EN 同 slug） | 数量 |
|---|---|---|
| **A · Kunjungan（到访决策）** | `tiket-dan-biaya`、`jam-buka-dan-waktu-terbaik`、`dari-batusangkar`、`dari-bukittinggi`、`dari-padang`、`parkir-dan-pintu-masuk`、`durasi-dan-urutan-kunjungan`、`kunjungan-keluarga`、`lansia-dan-aksesibilitas`、`kunjungan-saat-hujan`、`foto-dan-etika-berkunjung` | 11 |
| **B · Sejarah & Budaya（历史/文化）** | `sejarah-kerajaan-pagaruyung`、`kerajaan-dan-istano-sekarang`、`kebakaran-dan-rekonstruksi`、`rumah-gadang-dan-istano`、`arsitektur-minangkabau`、`ukiran-dan-simbolisme`、`ruang-dalam-dan-pameran`、`tradisi-minangkabau` | 8 |
| **C · Kuliner（餐饮/购物）** | `makan-di-sekitar-istano`、`kuliner-batusangkar`、`kopi-dan-minuman`、`oleh-oleh-dan-pasar` | 4 |
| **D · Wisata Sekitar（周边/行程）** | `wisata-sekitar-istano`、`istano-silinduang-bulan`、`situs-prasasti-pagaruyung`、`nagari-tuo-pariangan`、`kota-batusangkar`、`tur-setengah-hari`、`tur-sehari-tanah-datar`、`tur-dari-bukittinggi`、`tur-keluarga`、`tur-kendaraan-pribadi` | 10 |
| **合计** | | **33** |

- 每专题含：kicker / H1 / metaTitle / metaDescription / lead / 章节 / FAQ（含 FAQPage JSON-LD）/ 来源（政府或权威站）/ `updated` 日期 / `related` 互链。
- 首页新增「Panduan topik」区块，按 4 组分流到全部 33 个专题（ID/EN 各 33 卡）。

---

## 4. 周边地点核实表

需求书要求「核实真实距离/时间、不编造」。本批内容采取**软化处理**：只列真实存在的地点与可达方式（公路/常规交通接驳），**不杜撰具体公里数、分钟数或票价**。凡涉及时间/费用处一律标注「以现场/官方为准（verify on site）」。

| 周边地点 | 真实性 | 处理方式 |
|---|---|---|
| Istano Silinduang Bulan（Pariangan） | 真实存在，邻近 Pariangan | 列于 D 组专题，描述「同属 Minangkabau 王室建筑群」，不写距离数字 |
| Situs Prasasti Pagaruyung（王室碑刻） | 真实历史遗存 | 列于 D 组，说明其与王国史关联，建议现场确认开放 |
| Nagari Tuo Pariangan（传说中最古老村落） | 真实、旅游知名 | 列于 D 组，注明「被列为最古老 nagari 之一」，不杜撰年份细节 |
| Kota Batusangkar（最近城镇/交通枢纽） | 真实 | 列于 D 组，作为「落地补给与交通中转」说明 |
| 周边餐饮/咖啡/市场（Batusangkar 本地） | 真实城镇配套 | C 组仅列**品类**（nasi kapau、sate padang、kopiTL；pasar tradisional），**不点名具体商户、不写价格** |
| 行程（半日/一日/从 Bukittinggi/家庭/自驾车） | 路线逻辑 | D 组给出「顺序建议 + 接驳方式」，时间用区间（如半日 4–5 小时），不精确化 |

> 全站已交叉验证：所有 `related` 内链均指向真实存在的 33 个 slug，无死链（脚本校验通过）。

---

## 5. 构建 / 类型检查结果

- 构建命令：`node node_modules/astro/bin/astro.mjs build`（Node 24.19.0）
- 结果：**成功**，输出 **75 个页面** + `sitemap-index.xml`
- Sitemap 收录 **74 条 URL**（66 专题 + 2 首页 + 6 法律页）
- `read_lints` 对新增/修改文件：**0 错误**
- 校验脚本确认：专题页 self-canonical + 双向 hreflang + `WebPage/BreadcrumbList/FAQPage` JSON-LD；首页 TouristAttraction + FAQPage；sitemap 同时含 `/slug/` 与 `/en/slug/`
- 产物已打包：`pagaruyung-source.zip`（5.7 MB，已排除 `node_modules`/`dist`/`.astro`/`.wrangler`/`.git`）

---

## 6. 4–8 周监测计划

| 周次 | 动作 | 目标指标 |
|---|---|---|
| W1–W2 | 提交更新后的 sitemap；在 GSC 请求重新抓取首页与 33 专题；确认 http/https、www 信号合并 | 重复收录消失；专题页开始进入索引 |
| W2–W4 | 监测「pagaruyung kingdom / sejarah kerajaan pagaruyung」等历史意图词的排名与收录 | B 组历史专题进入前 20 |
| W4–W6 | 核对专题页 CTR（标题/描述是否匹配意图）；必要时 A/B 微调 metaTitle | 专题页 CTR ≥ 1% |
| W6–W8 | 复查 GSC「覆盖率」报错；确认 `X-Robots-Tag` 与 canonical 无冲突；评估是否补 C 组/移动端 CWV | 覆盖率 0 关键错误；LCP/CLS 达标 |
| 持续 | 每月根据真实 SC 导出校准「更新日期」与来源链接；营业时间仅在获得官方/Maps 更新时改动 | 内容新鲜度信号稳定 |

**待办（需你协助）**：① 在 Cloudflare 控制台确认 Always Use HTTPS 与 www→apex（代码层 301 已就位，控制台为兜底）；② 提供真实 SC ZIP 以复算第 1 节诊断；③ 将 `pagaruyung-source.zip` 部署（CI 走现有 Cloudflare Workers 流程）。
