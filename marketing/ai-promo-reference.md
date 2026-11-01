# 推廣易 — AI 影片宣傳 Reference

> 用途：俾未來任何 AI marketing 工作（自己、agent、agency、AI 影片工具）做統一 reference。
> 一句定位：**推廣易 = 著數易嘅帶客引擎。商戶出 link，人人可分享，帶到客自動分佣。**

---

## 0 · 品牌基礎（做片前必讀）

| 項目 | 值 |
|---|---|
| 一句 slogan | 分享著數，帶到客自動分佣 |
| 用戶向 hook | 順手 share 條 link，朋友用咗你就賺 |
| 商戶向 hook | 廣告費變佣金，有客先俾錢 |
| 品牌色 | 紅 `#d32f2f`（推廣易）· 黃 `#f7d100`（著數易，只喺連接位出現） |
| 字體 | Noto Sans HK（標題 800–900）· DM Mono（數字 / 標籤 / 字幕） |
| Tone | 廣東話、貼地、直接、唔吹水。強調「自動」「有成效先俾」「唔使自己燒錢」 |
| 片尾 CTA | 「即刻開戶 → 分享著數賺錢」或「商戶免費開戶」 |

**兩個品牌一定要同時交代：**
- 著數易（黃）= 優惠 + 核銷 + 佣金（已有）
- 推廣易（紅）= 分享 + 回贈 + 任務（新增）

**核心流程（每條片都要俾觀眾睇到）：**
```
你分享 link → 朋友領券 → 到店核銷 → 你自動賺 rebate / 積分
```

**真 UI 來源：** 我哋有個真嘅 FE demo 喺 `phase1/`（`index.html` / `dashboard.html` / `merchant.html`）。UI 鏡頭一律用 screen record，**唔好用 AI 生成 UI 文字**（AI 會出亂碼字）。

---

## 1 · 三個影片概念

### Concept A —「順手一 share」（15s · 用戶向 · 9:16）

**目的：** 拉新用戶。目標令觀眾諗「咁易？我都想試」。

**Hook（0–2s）：** 手機彈通知「+120 分已入賬」。

**劇本（VO 廣東話 + 字幕）：**

| 時間 | 畫面 | 字幕 | VO |
|---|---|---|---|
| 0–2s | 手機特寫，紅 app 彈「+120 分已入賬」 | +120 分 | （冇 VO，彈通知音效） |
| 2–5s | 手指撳「分享」，link 彈出，轉發去 WhatsApp | 分享 = 賺錢 | 你日日 share meme，有冇諗過 share coupon 都賺到錢？ |
| 5–9s | 分屏：左朋友喺茶餐廳掃 QR，右你手機彈 +120 分 | 朋友用咗 → 你賺 | 朋友經你條 link 到店核銷，你自動袋 rebate。 |
| 9–12s | 你行街睇手機笑，積分數字上漲 | 自動分佣 | 唔使 sell，唔使等，自動入賬。 |
| 12–15s | Logo + slogan + CTA | 分享著數，帶到客自動分佣 | 即刻開戶，開始賺。 |

**AI 提示詞（shot 5–9s 分屏）：**
```
Split-screen. LEFT: a young Hong Kong couple in a bright cha chaan teng,
scanning a QR code at the cashier, warm afternoon window light, shallow
depth of field, candid documentary style. RIGHT: extreme close-up of a
smartphone screen showing a red-themed reward app notification "+120 分"
with a red progress bar, clean flat UI. 9:16 vertical, cinematic color,
realistic, no text artifacts.
```
> 提示：右邊 UI 唔好靠 AI 生成，用 phase1 dashboard 真 screen record 疊上去。

---

### Concept B —「帶客引擎」（30s · 品牌 / 商戶向 · 16:9）

**目的：** 解釋成個平台點運作，用喺商戶 pitch、開會、官網頭條。

**結構：痛點 → 方案 → 流程 → 收入 → CTA**

| 段 | 時間 | 畫面 | VO |
|---|---|---|---|
| 痛點 | 0–6s | 商戶睇住廣告帳單皺眉；KOL 收錢但唔知帶咗幾多客 | 請 KOL 幾千蚊，帶到幾多客？冇人知。 |
| 方案 | 6–12s | 手機放大，著數易 coupon 掛上 tracking 變推廣易 link | 推廣易：著數易嘅帶客引擎。 |
| 流程 | 12–20s | 四格動畫：分享 → 領券 → 核銷 → 分佣（紅黃對應） | 商戶出 link，人人分享，客人到店核銷，帶客者自動分佣。 |
| 收入 | 20–25s | 商戶報表數字上升；「有成效先俾」tag | 廣告費變佣金，有客先俾錢，唔使燒錢補貼。 |
| CTA | 25–30s | Logo + 「商戶免費開戶」 | 免費開戶，先聚量。 |

**AI 提示詞（流程四格 shot）：**
```
4-panel motion graphic, flat vector illustration, clean thick strokes.
Panel 1: hand holding phone with a red share-link icon. Panel 2: friend
tapping a yellow coupon ticket. Panel 3: cashier scanning a QR code at a
restaurant counter. Panel 4: a red reward coin dropping into a wallet.
Red #d32f2f and warm yellow #f7d100 on warm off-white background, DM Mono
style labels under each panel, smooth 60fps motion, 16:9.
```

---

### Concept C —「廣告費 → 佣金」（15s · 商戶向 · 1:1 / 9:16）

**目的：** 俾中小商戶一個「改使錢方式」嘅理由。

| 時間 | 畫面 | 字幕 |
|---|---|---|
| 0–3s | 商戶掟一疊現金入「廣告」黑洞 | 而家：俾咗錢，唔知有冇用 |
| 3–8s | 畫面反轉，同樣嘅錢變成「佣金」，跟住每個核銷先扣 | 轉用推廣易：有客核銷先俾 |
| 8–12s | referral 報表，每個帶客者一目了然 | 邊個帶咗幾多客，報表一眼睇晒 |
| 12–15s | Logo + 「商戶免費開戶」 | 免費入門，先聚量 |

**AI 提示詞（0–3s 黑洞 shot）：**
```
A shop owner's hands dropping banknotes into a dark abstract "void" shaped
like a billboard, money vanishing into shadow, moody side lighting, slow
motion, shallow depth of field, metaphor, cinematic, 9:16.
```

---

## 2 · AI 製作流程（建議 workflow）

1. **錄真 UI** — 開 `phase1/`，用手機/瀏覽器錄：
   - 用戶流程：登入 → 著數揀 coupon → 分享 → 獎勵儀表板
   - 商戶流程：出 link → referral 報表
2. **AI 生成 b-roll** — 人物 / 街景 / 餐廳 / 生活感鏡頭（下面 prompt bank 有）。工具：Sora / Veo 3 / Runway Gen-4 / Kling。
3. **VO** — 廣東話 TTS：ElevenLabs（揀香港粵語 voice）、MiniMax、Azure zh-HK。
4. **剪接** — CapCut / 剪映：UI 錄影做「真」，AI b-roll 做「氛圍」，卡節奏（BPM 120–128）。
5. **字幕 + 音樂** — 大字幕（safe zone 內）、DM Mono 數字、輕快 royalty-free 音樂。

---

## 3 · AI 提示詞庫（prompt bank）

### 通用 prefix（片頭人物 / 街景）
```
Hong Kong, candid documentary style, warm natural light, shallow depth of
field, realistic skin texture, no text overlays, cinematic color grade.
```

### Lifestyle b-roll（可重複用）
```
- A young person scrolling their phone on a bus, smiling at a red reward
  notification, golden hour light through the window, Hong Kong double-decker.
- Friends sharing a meal in a dai pai dong, one showing a coupon on their
  phone to the other, steam rising from food, lively, night market neon.
- A cashier at a small HK restaurant tapping a phone screen to redeem a
  coupon, quick candid movement, fluorescent + warm mixed lighting.
- Close-up of a smartphone hand tapping a red "分享" button, shallow depth
  of field, slow push-in, minimal clean background.
```

### 負面提示詞（negative prompt，全部片都加）
```
blurry text, garbled text, extra fingers, deformed hands, watermark, logo,
low quality, oversaturated, plastic skin, fake UI, jittery, cluttered frame
```

### 風格 tokens（揀一個用）
- `flat vector motion graphic` — 適合流程解說（Concept B 四格）
- `candid documentary` — 適合生活感 / 用戶故事
- `cinematic metaphor` — 適合商戶痛點（Concept C 黑洞）

---

## 4 · 平台規格

| 平台 | 比例 | 時長 | 字幕 |
|---|---|---|---|
| IG Reels / TikTok / YT Shorts | 9:16 | 15–30s | 大字幕，safe zone（上下留 220px） |
| YouTube / 官網 | 16:9 | 30–60s | 中字幕 |
| WhatsApp status / 朋友圈 | 9:16 | 15s | 大字幕，靜音都要睇得明（所以字幕好重要） |

**硬規矩：** 每條片第一秒就要 hook；靜音播放都要有完整字幕；最後 2 秒出 logo + CTA。

---

## 5 · 文案庫（copy bank）

### Hooks（開頭字幕）
- 你日日 share meme，有冇諗過 share coupon 都賺到錢？
- 俾咗錢，唔知有冇用？
- 順手一 share，錢就嚟。
- 廣告費，變佣金。

### Captions / 帖文
- 分享著數 = 賺錢。朋友用咗你就袋，自動入賬，唔使 sell。👉 即刻開戶
- 商戶注意：KOL 收錢但唔知帶幾多客？推廣易有客核銷先俾錢。
- 著數易嘅帶客引擎，正式啟動。

### Hashtags
`#推廣易 #著數易 #香港著數 #分享賺錢 #passiveincome #hkjetso #帶客分佣 #餐飲優惠`

---

## 6 · 注意 / 避免（做片別踩）

- ❌ 唔好用 AI 生成 UI 介面文字（會出亂碼）——用 phase1 真錄影。
- ❌ 唔好講「保證賺幾多錢」（假承諾、合規風險）。
- ❌ 唔好只出著數易黃色、或只出推廣易紅色——兩個品牌要一齊交代關係。
- ✅ 數字用 DM Mono，等「+120 分」「2/3 個客」呢啲真實感數字有辨識度。
- ✅ 片尾 CTA 一定要有（用戶：開戶；商戶：免費開戶）。
