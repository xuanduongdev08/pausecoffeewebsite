/* PAUSE COFFEE — Layout dùng chung (header, giỏ hàng, footer) cho mọi trang */
(function () {
  const page = document.body.dataset.page || '';
  const act = (k) => (page === k ? ' active' : '');
  const svg = {
    cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6 5 3H2"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>'
  };

  const catParam = (typeof location !== 'undefined' && new URLSearchParams(location.search).get('cat')) || '';
  const subAct = (k) => (page === 'menu' && catParam === k ? ' active' : '');

  const header = `
  <a class="skip-link" href="#main">Bỏ qua điều hướng</a>
  <header class="site-header" id="siteHeader"><div class="container">
    <a class="brand" href="index.html" aria-label="PAUSE COFFEE — Trang chủ">
      <img src="images/lynk/logo_new.png" alt="Logo PAUSE COFFEE" width="54" height="54">
      <span class="brand-text"><b>PAUSE COFFEE</b><small>Kết nối từng hương vị</small></span>
    </a>
    <ul class="main-nav" id="mainNav">
      <li><a class="nav-link${act('home')}" href="index.html">Trang chủ</a></li>
      <li class="has-sub"><a class="nav-link${act('menu')}" href="menu.html">Thực đơn</a>
        <div class="sub">
          <a class="${subAct('ca-phe')}" href="menu.html?cat=ca-phe">Cà phê</a>
          <a class="${subAct('hat-ca-phe')}" href="menu.html?cat=hat-ca-phe">Hạt cà phê</a>
          <a class="${subAct('nuoc-trai-cay')}" href="menu.html?cat=nuoc-trai-cay">Trà & Nước ép</a>
          <a class="${subAct('banh-ngot')}" href="menu.html?cat=banh-ngot">Bánh ngọt</a>
        </div>
      </li>
      <li><a class="nav-link${act('about')}" href="about.html">Câu chuyện</a></li>
      <li><a class="nav-link${act('gallery')}" href="gallery.html">Không gian</a></li>
      <li><a class="nav-link${act('blog')}" href="blog.html">Tin tức</a></li>
      <li><a class="nav-link${act('reservation')}" href="reservation.html">Đặt bàn</a></li>
      <li><a class="nav-link${act('contact')}" href="contact.html">Liên hệ</a></li>
    </ul>
    <div class="header-actions">
      <a class="icon-btn" href="menu.html?focus=search" aria-label="Tìm kiếm món">${svg.search}</a>
      <button class="icon-btn" id="cartBtn" type="button" aria-label="Mở giỏ hàng">${svg.cart}<span class="cart-badge" id="cartBadge">0</span></button>
      <button class="icon-btn burger" id="burger" type="button" aria-label="Mở menu" aria-expanded="false">${svg.menu}</button>
    </div>
  </div></header>

  <div class="overlay" id="overlay"></div>
  <aside class="drawer" id="drawer" aria-label="Giỏ hàng">
    <div class="drawer-head"><h3>Giỏ hàng của bạn</h3><button class="x-btn" id="drawerClose" type="button" aria-label="Đóng giỏ hàng">✕</button></div>
    <div class="drawer-items" id="drawerItems"></div>
    <div class="drawer-foot">
      <div class="total-row"><span>Tạm tính</span><span id="drawerTotal">0đ</span></div>
      <form id="checkoutForm">
        <input class="input" name="name" placeholder="Họ và tên *" required autocomplete="name">
        <input class="input" name="phone" type="tel" placeholder="Số điện thoại *" required autocomplete="tel">
        <input class="input" name="address" placeholder="Địa chỉ giao hàng (hoặc nhận tại quán)" autocomplete="street-address">
        <button class="btn btn-red" type="submit">Đặt món · Thanh toán khi nhận</button>
      </form>
    </div>
  </aside>
  <div class="toast-wrap" id="toastWrap" aria-live="polite"></div>`;

  const footer = `
  <footer class="site-footer"><div class="container">
    <div class="footer-grid">
      <div>
        <div class="foot-brand"><img src="images/lynk/logo_new.png" alt="PAUSE COFFEE" width="56" height="56"><b>PAUSE COFFEE</b></div>
        <p>Kết nối từng hương vị — từ nông trại cao nguyên đến tách cà phê của bạn. Rang mộc 100%, pha chế thủ công, phục vụ bằng cả trái tim.</p>
      </div>
      <div><h4>Khám phá</h4><ul>
        <li><a href="menu.html">Thực đơn</a></li><li><a href="about.html">Câu chuyện</a></li>
        <li><a href="gallery.html">Không gian</a></li><li><a href="blog.html">Tin tức</a></li>
        <li><a href="reservation.html">Đặt bàn</a></li></ul></div>
      <div><h4>Giờ mở cửa</h4>
        <p><b style="color:#fff">Thứ 2 – Thứ 6</b><br>07:30 – 22:00</p>
        <p style="margin-top:10px"><b style="color:#fff">Thứ 7 & Chủ nhật</b><br>07:00 – 22:30</p></div>
      <div><h4>Liên hệ</h4>
        <p>📍 93 Lê Cao Lãng, P. Phú Thạnh,<br>Q. Tân Phú, TP. Hồ Chí Minh</p>
        <p style="margin-top:8px">☎ <a href="tel:0345699999">0345 699 999</a></p>
        <p>✉ lienhe@pausecoffee.vn</p></div>
    </div>
    <div class="footer-bottom"><span>© 2026 PAUSE COFFEE. Bảo lưu mọi quyền.</span></div>
  </div></footer>`;

  document.body.insertAdjacentHTML('afterbegin', header);
  const f = document.getElementById('site-footer');
  if (f) f.outerHTML = footer; else document.body.insertAdjacentHTML('beforeend', footer);
})();
