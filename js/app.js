/* PAUSE COFFEE — logic phía client (giỏ hàng, quick view, slider, animation). Không cần backend. */
(function () {
  'use strict';
  const D = window.LYNK_DATA;
  const CART_KEY = 'lynk_cart', ORDERS_KEY = 'lynk_orders', RES_KEY = 'lynk_reservations';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const money = (n) => new Intl.NumberFormat('vi-VN').format(n) + 'đ';
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const read = (k) => { try { return JSON.parse(localStorage.getItem(k)) || []; } catch (e) { return []; } };
  const write = (k, v) => localStorage.setItem(k, JSON.stringify(v));
  const catName = (id) => (D.categories.find((c) => c.id === id) || {}).name || '';

  /* ---------- toast ---------- */
  function toast(msg) {
    const wrap = $('#toastWrap'); if (!wrap) return;
    const t = document.createElement('div'); t.className = 'toast'; t.innerHTML = msg; wrap.appendChild(t);
    setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 400); }, 2800);
  }

  /* ---------- cart ---------- */
  const getCart = () => read(CART_KEY);
  function saveCart(c) { write(CART_KEY, c); renderCart(); }
  function add(id, size = 'M', qty = 1) {
    const p = D.products.find((x) => x.id === id); if (!p) return;
    let price = p.price;
    if (p.has_size) { const s = p.sizes.find((x) => x.size === size) || p.sizes[0]; price = s.price; size = s.size; } else size = null;
    const cart = getCart(); const i = cart.findIndex((x) => x.id === id && x.size === size);
    if (i > -1) cart[i].quantity += qty; else cart.push({ id, name: p.name, image: p.image, price, size, quantity: qty });
    saveCart(cart); toast('✓ Đã thêm <b>' + esc(p.name) + '</b> vào giỏ');
    const b = $('#cartBadge'); if (b) { b.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.6)' }, { transform: 'scale(1)' }], { duration: 400 }); }
  }
  function qtyChange(i, d) { const c = getCart(); if (!c[i]) return; c[i].quantity += d; if (c[i].quantity <= 0) c.splice(i, 1); saveCart(c); }
  function removeItem(i) { const c = getCart(); c.splice(i, 1); saveCart(c); }
  function renderCart() {
    const cart = getCart();
    const count = cart.reduce((s, x) => s + x.quantity, 0), total = cart.reduce((s, x) => s + x.price * x.quantity, 0);
    const badge = $('#cartBadge'); if (badge) { badge.textContent = count; badge.style.display = count ? 'flex' : 'none'; }
    const tot = $('#drawerTotal'); if (tot) tot.textContent = money(total);
    const box = $('#drawerItems'); if (!box) return;
    if (!cart.length) {
      box.innerHTML = '<div class="cart-empty"><div class="em">☕</div><p><b>Giỏ hàng đang trống</b></p><p>Hãy chọn một thức uống yêu thích nhé!</p><a class="btn btn-red" style="margin-top:18px" href="menu.html">Xem thực đơn</a></div>';
      return;
    }
    box.innerHTML = cart.map((it, i) => `
      <div class="cart-item"><img src="${esc(it.image)}" alt="${esc(it.name)}">
        <div class="ci-info"><h5>${esc(it.name)}</h5>${it.size ? '<small>Size ' + it.size + '</small>' : ''}
          <div class="ci-price">${money(it.price)}</div>
          <div class="qty"><button type="button" data-q="${i}" data-d="-1" aria-label="Giảm">−</button><b>${it.quantity}</b><button type="button" data-q="${i}" data-d="1" aria-label="Tăng">+</button></div>
        </div>
        <button class="ci-del" type="button" data-del="${i}" aria-label="Xóa món">✕</button></div>`).join('');
  }
  const openCart = () => {
    document.body.classList.add('cart-open');
    $('#drawer')?.classList.add('active');
    $('#overlay')?.classList.add('active');
    renderCart();
  };
  const closeAll = () => {
    document.body.classList.remove('cart-open', 'modal-open', 'menu-open');
    $('#drawer')?.classList.remove('active');
    $('#overlay')?.classList.remove('active');
    $('#mainNav')?.classList.remove('open');
    $('#burger')?.classList.remove('open');
    $('#burger')?.setAttribute('aria-expanded', 'false');
    $$('.modal.active').forEach((m) => m.classList.remove('active'));
  };

  /* ---------- modal helpers ---------- */
  function modal(id, html) {
    let m = document.getElementById(id);
    if (!m) {
      m = document.createElement('div');
      m.className = 'modal';
      m.id = id;
      m.setAttribute('role', 'dialog');
      m.setAttribute('aria-modal', 'true');
      document.body.appendChild(m);
      m.addEventListener('click', (e) => {
        if (e.target === m || e.target.closest('[data-close]')) closeAll();
      });
    }
    m.innerHTML = html;
    document.body.classList.add('modal-open');
    requestAnimationFrame(() => m.classList.add('active'));
    return m;
  }

  function quickView(id) {
    const p = D.products.find((x) => x.id === id); if (!p) return;
    let size = p.has_size ? p.sizes[0].size : null, price = p.has_size ? p.sizes[0].price : p.price;
    const m = modal('qvModal', `<div class="modal-box"><button class="x-btn" data-close aria-label="Đóng">✕</button>
      <div class="qv"><img src="${esc(p.image)}" alt="${esc(p.name)}" style="object-position:${p.pos || 'center'}">
        <div class="qv-body"><span class="p-cat">${esc(catName(p.category_id))}</span><h3>${esc(p.name)}</h3>
          <div class="qv-price" id="qvPrice">${money(price)}</div><p style="color:#6b6b6b;margin-bottom:6px">${esc(p.desc)}</p>
          ${p.has_size ? '<b style="font-size:12px;letter-spacing:.1em;text-transform:uppercase">Chọn kích cỡ</b><div class="size-row">' + p.sizes.map((s, i) => `<button type="button" class="size-btn${i === 0 ? ' on' : ''}" data-size="${s.size}" data-price="${s.price}">${s.size} · ${money(s.price)}</button>`).join('') + '</div>' : '<div style="height:18px"></div>'}
          <button class="btn btn-red" id="qvAdd" type="button">Thêm vào giỏ</button></div></div></div>`);
    $$('.size-btn', m).forEach((b) => b.addEventListener('click', () => { $$('.size-btn', m).forEach((x) => x.classList.remove('on')); b.classList.add('on'); size = b.dataset.size; $('#qvPrice', m).textContent = money(+b.dataset.price); }));
    $('#qvAdd', m).addEventListener('click', () => { add(p.id, size || 'M', 1); m.classList.remove('active'); });
  }

  /* ---------- shared renderers ---------- */
  function productCard(p, i = 0) {
    const eye = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>';
    return `<article class="product-card reveal d${(i % 4) + 1}">
      <div class="p-thumb" data-qv="${p.id}"><img loading="lazy" src="${esc(p.image)}" alt="${esc(p.name)}" style="object-position:${p.pos || 'center'}">
        ${p.badge ? '<span class="p-badge">' + esc(p.badge) + '</span>' : ''}<span class="p-view">${eye}</span></div>
      <div class="p-body"><span class="p-cat">${esc(catName(p.category_id))}</span>
        <h3 class="p-title" data-qv="${p.id}">${esc(p.name)}</h3><p class="p-desc">${esc(p.desc)}</p>
        <div class="p-foot"><span class="p-price">${money(p.price)}</span><button class="btn-add" type="button" data-add="${p.id}">+ Thêm</button></div></div></article>`;
  }
  const fillProducts = (el, list) => { el.innerHTML = list.map(productCard).join(''); observe(el); };

  /* ---------- reveal + counters ---------- */
  let io;
  function observe(root = document) {
    if (!io) {
      io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); if (e.target.dataset.count) countUp(e.target); } }), { threshold: .12, rootMargin: '0px 0px -40px 0px' });
    }
    $$('.reveal:not(.in), [data-count]:not([data-done])', root).forEach((el) => io.observe(el));
  }
  function countUp(el) {
    el.dataset.done = '1'; const end = parseFloat(el.dataset.count), dec = el.dataset.dec ? 1 : 0, suf = el.dataset.suffix || '', t0 = performance.now();
    (function tick(t) { const k = Math.min((t - t0) / 1600, 1), v = end * (1 - Math.pow(1 - k, 3)); el.innerHTML = v.toFixed(dec).replace('.', ',') + '<em>' + suf + '</em>'; if (k < 1) requestAnimationFrame(tick); })(t0);
  }

  /* ---------- hero slider ---------- */
  function slider() {
    const hero = $('.hero'); if (!hero) return;
    const slides = $$('.slide', hero), dots = $('.dots', hero), bar = $('.hero-progress', hero); let cur = 0, timer; const gap = 6500;
    dots.innerHTML = slides.map((_, i) => `<button type="button" aria-label="Slide ${i + 1}"></button>`).join('');
    const ds = $$('button', dots);
    function go(n) {
      cur = (n + slides.length) % slides.length;
      slides.forEach((s, i) => s.classList.toggle('active', i === cur)); ds.forEach((d, i) => d.classList.toggle('on', i === cur));
      bar.style.transition = 'none'; bar.style.width = '0'; void bar.offsetWidth; bar.style.transition = `width ${gap}ms linear`; bar.style.width = '100%';
      clearTimeout(timer); timer = setTimeout(() => go(cur + 1), gap);
    }
    const prevBtn = $('.prev', hero); if (prevBtn) prevBtn.addEventListener('click', () => go(cur - 1));
    const nextBtn = $('.next', hero); if (nextBtn) nextBtn.addEventListener('click', () => go(cur + 1));
    ds.forEach((d, i) => d.addEventListener('click', () => go(i)));
    let sx = 0; hero.addEventListener('touchstart', (e) => (sx = e.touches[0].clientX), { passive: true });
    hero.addEventListener('touchend', (e) => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) go(cur + (dx < 0 ? 1 : -1)); });
    go(0);
  }

  /* ---------- checkout & reservation ---------- */
  function submitOrder(fd) {
    const cart = getCart(); if (!cart.length) return toast('Giỏ hàng đang trống!');
    const total = cart.reduce((s, x) => s + x.price * x.quantity, 0), code = 'LY' + Math.floor(100000 + Math.random() * 900000);
    const order = { code, name: fd.get('name'), phone: fd.get('phone'), address: fd.get('address') || 'Nhận tại quán', items: cart, total, at: new Date().toLocaleString('vi-VN') };
    const all = read(ORDERS_KEY); all.unshift(order); write(ORDERS_KEY, all); localStorage.removeItem(CART_KEY); renderCart(); closeAll();
    modal('okModal', `<div class="modal-box success-box"><div class="big">🎉</div><span class="p-cat">Đặt món thành công</span><h3 style="font-size:30px;margin:6px 0">Cảm ơn bạn!</h3>
      <p style="color:#7a6b5d">Đơn <b style="color:#c49b63">#${code}</b> đã được ghi nhận. Barista đang chuẩn bị thức uống cho bạn.</p>
      <div class="sum">👤 <b>${esc(order.name)}</b><br>📞 ${esc(order.phone)}<br>💰 Tổng cộng: <b style="color:#c49b63">${money(total)}</b> (thanh toán khi nhận)</div>
      <button class="btn btn-red" data-close type="button">Tiếp tục thưởng thức</button></div>`);
  }
  function submitReservation(fd) {
    const r = Object.fromEntries(fd.entries()); r.at = new Date().toLocaleString('vi-VN');
    const all = read(RES_KEY); all.unshift(r); write(RES_KEY, all);
    modal('resModal', `<div class="modal-box success-box"><div class="big">🗓️</div><span class="p-cat">Đã xác nhận đặt bàn</span><h3 style="font-size:30px;margin:6px 0">Hẹn gặp bạn!</h3>
      <p style="color:#7a6b5d">Bàn của <b>${esc(r.name)}</b> lúc <b style="color:#c49b63">${esc(r.time)}</b> ngày <b>${esc(r.date)}</b> (${esc(r.guests)} khách) đã được giữ.</p>
      <button class="btn btn-red" style="margin-top:20px" data-close type="button">Hoàn tất</button></div>`);
  }

  /* ---------- init ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    renderCart(); slider(); observe();
    const hd = $('#siteHeader'); const onScroll = () => hd.classList.toggle('scrolled', scrollY > 10); onScroll(); addEventListener('scroll', onScroll, { passive: true });
    const burger = $('#burger'), nav = $('#mainNav'), ov = $('#overlay');
    burger?.addEventListener('click', (e) => {
      e.stopPropagation();
      const o = nav.classList.toggle('open');
      burger.classList.toggle('open', o);
      burger.setAttribute('aria-expanded', o);
      document.body.classList.toggle('menu-open', o);
      ov?.classList.toggle('active', o);
    });
    nav?.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if (a) {
        const href = a.getAttribute('href');
        setTimeout(closeAll, 80);
        if (href && href.startsWith('menu.html?') && location.pathname.includes('menu.html')) {
          e.preventDefault();
          window.location.href = href;
        }
      }
    });
    $('#cartBtn')?.addEventListener('click', openCart);
    $('#drawerClose')?.addEventListener('click', closeAll);
    ov?.addEventListener('click', closeAll);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAll(); });
    document.addEventListener('click', (e) => {
      const a = e.target.closest('[data-add]'); if (a) return add(+a.dataset.add);
      const q = e.target.closest('[data-qv]'); if (q) return quickView(+q.dataset.qv);
      const c = e.target.closest('[data-q]'); if (c) return qtyChange(+c.dataset.q, +c.dataset.d);
      const d = e.target.closest('[data-del]'); if (d) return removeItem(+d.dataset.del);
    });
    $('#checkoutForm').addEventListener('submit', (e) => { e.preventDefault(); submitOrder(new FormData(e.target)); e.target.reset(); });
    $$('form[data-reserve]').forEach((f) => f.addEventListener('submit', (e) => { e.preventDefault(); submitReservation(new FormData(f)); f.reset(); }));
    $$('input[type=date]').forEach((i) => { const t = new Date().toISOString().slice(0, 10); i.min = t; if (!i.value) i.value = t; });
  });

  window.Lynk = { add, quickView, fillProducts, productCard, observe, money, esc, modal, toast, catName };
})();
