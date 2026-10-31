/* ============================================================
   推廣易 Phase 1 — 前端 mock 數據 + 狀態 + 共用工具
   （純 FE，無後端；狀態存 localStorage，刷新唔會甩）
   ============================================================ */
(function () {
  'use strict';

  /* ---------- 著數易交入嚟嘅 coupon 庫存 ---------- */
  const DEALS = [
    { id: 'c1', shop: '阿財冰室 · 深水埗',  title: '堂食 9 折',        cond: '每單滿 $80 · 平日 2–6pm', rebate: 120, stock: 200, cat: '餐飲', tone: 'tone-a' },
    { id: 'c2', shop: '旺記燒味 · 旺角',    title: '叉燒飯送凍飲',    cond: '全日',                  rebate: 80,  stock: 64,  cat: '餐飲', tone: 'tone-b' },
    { id: 'c3', shop: 'Café Kumo · 銅鑼灣', title: '咖啡買一送一',    cond: '星期一至五',            rebate: 150, stock: 40,  cat: '飲品', tone: 'tone-d' },
    { id: 'c4', shop: '麵家小館 · 觀塘',    title: '滿 $100 減 $20',  cond: '晚市',                  rebate: 100, stock: 120, cat: '餐飲', tone: 'tone-c' },
    { id: 'c5', shop: '靚靚美甲 · 尖沙咀',  title: '美甲 8 折',       cond: '預約制',                rebate: 300, stock: 30,  cat: '美容', tone: 'tone-e' },
    { id: 'c6', shop: 'FitGym 健身室',      title: '試堂 $50',        cond: '首次體驗',              rebate: 200, stock: 50,  cat: '健身', tone: 'tone-f' },
    { id: 'c7', shop: '甜一甜品 · 荃灣',    title: '雙人甜品套餐 75 折', cond: '星期一至四',         rebate: 130, stock: 88,  cat: '餐飲', tone: 'tone-a' },
    { id: 'c8', shop: '洗車王 · 元朗',      title: '洗車減 $40',      cond: '任何時段',              rebate: 90,  stock: 150, cat: '生活', tone: 'tone-f' },
  ];

  /* ---------- Mission 任務 ---------- */
  const MISSIONS = [
    { id: 'm1', title: '分享著數 5 次',        done: 2, target: 5, reward: 50 },
    { id: 'm2', title: '邀請 3 個朋友入會',    done: 1, target: 3, reward: 100 },
    { id: 'm3', title: '自己用 1 張 coupon',   done: 1, target: 1, reward: 30 },
    { id: 'm4', title: '帶 1 個客到店核銷',    done: 2, target: 1, reward: 60 },
  ];

  /* ---------- 里程碑階梯 ---------- */
  const MILESTONES = [
    { n: 1,  reward: '固定 rebate（$10 / 積分）', cond: '到店核銷 + 過退貨窗', reached: true  },
    { n: 3,  reward: '額外 bonus +$30',          cond: '達成里程碑自動發',    reached: false },
    { n: 10, reward: '更大 bonus +$150 · 解鎖高級會員', cond: '達成里程碑自動發', reached: false },
    { n: 25, reward: '入大抽獎 / 實體獎品',      cond: '達成里程碑自動發',    reached: false },
  ];

  /* ---------- VIP 等級 ---------- */
  const TIERS = [
    { name: '銅章', need: 0,  rate: '2%', color: '#b07b4f' },
    { name: '銀章', need: 10, rate: '3%', color: '#8a8f98' },
    { name: '金章', need: 25, rate: '5%', color: '#d4a017' },
    { name: '鑽石', need: 50, rate: '7%', color: '#7ec8e3' },
  ];

  /* ---------- 初始 rebate 賬 ---------- */
  const SEED_LEDGER = [
    { id: 'r1', icon: '🍜', title: '阿財冰室 · 堂食 9 折',  via: '經 @hkfoodie', pts: 120,  status: 'hold', reason: '等退貨窗關閉' },
    { id: 'r2', icon: '🍛', title: '旺記燒味 · 叉燒飯送凍飲', via: '經 @hkfoodie', pts: 80,   status: 'ok',   reason: '已入賬' },
    { id: 'r3', icon: '🎁', title: '邀請朋友入會',           via: 'mission',     pts: 100,  status: 'ok',   reason: '已入賬' },
    { id: 'r4', icon: '💅', title: '靚靚美甲 · 退款 reverse', via: '經 @hkfoodie', pts: -60,  status: 'bad',  reason: '退款 reverse' },
  ];

  /* ---------- 輕量商戶 referral 報表種子 ---------- */
  const SEED_REFERRALS = [
    { user: '@hkfoodie',     brought: 41, redeemed: 33, status: 'active' },
    { user: '@深水埗搵食',   brought: 33, redeemed: 27, status: 'active' },
    { user: '@週末去邊食',   brought: 19, redeemed: 12, status: 'hold' },
    { user: '@mia_hk',       brought: 27, redeemed: 18, status: 'active' },
  ];

  /* ---------- 儲存 ---------- */
  const K_USER = 'tgy_user';
  const K_STATE = 'tgy_state';

  function defaultState() {
    return {
      points: 2480,
      tickets: 1,
      referred: 2,                 // 累計帶客
      tier: 1,                     // index into TIERS (銀章)
      missionProgress: { m1: 2, m2: 1, m3: 1, m4: 2 },
      missionClaimed: {},
      ledger: SEED_LEDGER.slice(),
      links: [],                   // 用戶分享過嘅 link
      merchantLinks: [],           // 商戶出過嘅 link
      referrals: SEED_REFERRALS.slice(),
      coupons: DEALS.slice(),
    };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(K_STATE);
      if (raw) {
        const s = JSON.parse(raw);
        // merge with defaults so new fields never break old storage
        return Object.assign(defaultState(), s);
      }
    } catch (_) {}
    const s = defaultState();
    saveState(s);
    return s;
  }
  function saveState(s) { try { localStorage.setItem(K_STATE, JSON.stringify(s)); } catch (_) {} }

  function getUser() {
    try { return JSON.parse(localStorage.getItem(K_USER)); } catch (_) { return null; }
  }
  function setUser(u) { try { localStorage.setItem(K_USER, JSON.stringify(u)); } catch (_) {} }
  function clearUser() { try { localStorage.removeItem(K_USER); } catch (_) {} }
  function logout() { clearUser(); location.href = 'index.html'; }

  /* ---------- 共用工具 ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, (ch) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[ch]));
  }
  function fmt(n) { return Number(n || 0).toLocaleString('en-HK'); }
  function money(n) { return '$' + fmt(n); }

  let toastTimer = null;
  function toast(msg) {
    let el = document.getElementById('toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'toast';
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2000);
  }

  function copyText(t) {
    const done = () => toast('已複製 link ✓');
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(t).then(done).catch(() => fallback());
    } else fallback();
    function fallback() {
      const ta = document.createElement('textarea');
      ta.value = t; document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); done(); } catch (_) { toast('複製失敗，請手動抄'); }
      document.body.removeChild(ta);
    }
  }

  /* ---------- 假 QR（seeded，唔係真 QR，純展示） ---------- */
  function drawQR(canvas, seed) {
    if (!canvas) return;
    const N = 25, ctx = canvas.getContext('2d');
    canvas.width = N; canvas.height = N;
    let h = 2166136261;
    for (const ch of String(seed)) h = ((h ^ ch.charCodeAt(0)) * 16777619) >>> 0;
    const rnd = () => ((h = (h * 1103515245 + 12345) >>> 0) / 4294967296);
    ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, N, N);
    ctx.fillStyle = '#1b1412';
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) if (rnd() > .52) ctx.fillRect(x, y, 1, 1);
    const finder = (x, y) => {
      ctx.fillStyle = '#fff'; ctx.fillRect(x - 1, y - 1, 9, 9);
      ctx.fillStyle = '#1b1412'; ctx.fillRect(x, y, 7, 7);
      ctx.fillStyle = '#fff'; ctx.fillRect(x + 1, y + 1, 5, 5);
      ctx.fillStyle = '#1b1412'; ctx.fillRect(x + 2, y + 2, 3, 3);
    };
    finder(0, 0); finder(N - 7, 0); finder(0, N - 7);
  }

  /* ---------- 生成 share link ---------- */
  function slug(name) {
    const s = String(name || 'user').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return s ? s.slice(0, 12) : 'user' + Math.floor(Math.random() * 9000 + 1000);
  }
  function makeShareUrl(handle, couponId) {
    const u = getUser();
    const h = handle || (u && u.handle) || 'user';
    return `tgy.hk/r/${slug(h)}${couponId ? '?c=' + couponId : ''}`;
  }
  function makeTrackingId() {
    return 'U-' + Math.floor(10000 + Math.random() * 89999);
  }

  window.TGY = {
    DEALS, MISSIONS, MILESTONES, TIERS,
    getUser, setUser, logout,
    loadState, saveState, defaultState,
    esc, fmt, money, toast, copyText, drawQR,
    makeShareUrl, makeTrackingId, slug,
  };
})();
