/* PAUSE COFFEE — dữ liệu tĩnh (thay cho database). Chỉnh sửa tại đây để cập nhật nội dung website. */
(function () {
  const IMG = 'images/';
  const LYNK = 'images/lynk/';

  const categories = [
    { id: 1, name: 'Cà phê', slug: 'ca-phe', image: IMG + 'menu-1.jpg', desc: 'Phin truyền thống & Espresso' },
    { id: 2, name: 'Hạt cà phê', slug: 'hat-ca-phe', image: IMG + 'menu-5.jpg', desc: 'Rang mộc, nguyên chất' },
    { id: 3, name: 'Trà & Nước ép', slug: 'nuoc-trai-cay', image: LYNK + 'hero-iced.jpg', desc: 'Thanh mát, trái cây tươi' },
    { id: 4, name: 'Bánh ngọt', slug: 'banh-ngot', image: IMG + 'dessert-8.jpg', desc: 'Nướng mới mỗi ngày' }
  ];

  const sz = (m, l, xl) => [{ size: 'M', price: m }, { size: 'L', price: l }, { size: 'XL', price: xl }];

  const products = [
    { id: 1, category_id: 1, name: 'Cappuccino Bọt Sữa', price: 59000, image: IMG + 'menu-1.jpg', badge: 'Bán chạy', rating: 4.9,
      desc: 'Espresso đậm vị hòa cùng sữa nóng và lớp bọt sữa mịn như nhung, điểm xuyết nghệ thuật latte.', has_size: true, sizes: sz(49000, 59000, 69000) },
    { id: 2, category_id: 1, name: 'Phin Sữa Đá Sài Gòn', price: 39000, image: IMG + 'menu-3.jpg', badge: 'Signature', rating: 5.0,
      desc: 'Robusta Đắk Lắk pha phin truyền thống, quyện sữa đặc béo ngậy cùng đá mát lạnh.', has_size: true, sizes: sz(35000, 39000, 45000) },
    { id: 3, category_id: 1, name: 'Cà Phê Đen Phin Mộc', price: 35000, image: LYNK + 'hero-phin.jpg', badge: 'Đậm vị', rating: 4.8,
      desc: 'Hương vị nguyên bản của cà phê rang mộc, hậu vị đắng thanh, ngọt dịu nơi cuống họng.', has_size: true, sizes: sz(30000, 35000, 40000) },
    { id: 4, category_id: 1, name: 'Caramel Macchiato', price: 65000, image: IMG + 'drink-9.jpg', badge: 'Mới', rating: 4.9,
      desc: 'Espresso, sữa tươi đánh nóng và sốt caramel ngọt dịu rưới thủ công theo từng lớp.', has_size: true, sizes: sz(55000, 65000, 75000) },
    { id: 5, category_id: 1, name: 'Cold Brew Ủ Lạnh 24H', price: 55000, image: IMG + 'menu-6.jpg', badge: 'Đặc biệt', rating: 4.9,
      desc: 'Arabica Cầu Đất ủ lạnh suốt 24 giờ, hương trái cây tự nhiên, thanh tao và ít axit.', has_size: true, sizes: sz(50000, 55000, 65000) },
    { id: 6, category_id: 1, name: 'Cà Phê Muối Kem Dẻo', price: 45000, image: LYNK + 'CAPHEMUOI.jpg', badge: 'Hot trend', rating: 5.0,
      desc: 'Cà phê phin đậm đà phủ lớp kem muối béo mặn bồng bềnh, vị lạ mà nghiện.', has_size: true, sizes: sz(39000, 45000, 52000), pos: '88% 50%' },
    { id: 7, category_id: 2, name: 'Hạt Arabica Cầu Đất 250g', price: 135000, image: IMG + 'menu-5.jpg', badge: 'Thượng hạng', rating: 4.9,
      desc: 'Thu hoạch ở độ cao 1.600m, hương hoa quả phong phú, vị chua thanh thoát và ngọt hậu.', has_size: false },
    { id: 8, category_id: 2, name: 'Hạt Robusta Honey 250g', price: 110000, image: IMG + 'menu-7.jpg', badge: 'Rang mộc', rating: 4.8,
      desc: 'Sơ chế mật ong (Honey process) giữ trọn độ ngọt tự nhiên và thể chất dày dặn.', has_size: false },
    { id: 9, category_id: 2, name: 'Hạt Liberica Đặc Sản 250g', price: 125000, image: IMG + 'menu-9.jpg', badge: 'Hiếm', rating: 5.0,
      desc: 'Dòng cà phê quý hiếm với hương mít chín, hoa quả nhiệt đới và hậu vị khói nhẹ độc đáo.', has_size: false },
    { id: 10, category_id: 3, name: 'Trà Đào Cam Sả', price: 49000, image: IMG + 'drink-6.jpg', badge: 'Thanh mát', rating: 4.8,
      desc: 'Trà đen ủ lạnh, đào giòn ngọt, cam tươi và sả thơm nhẹ — giải nhiệt tức thì.', has_size: true, sizes: sz(42000, 49000, 55000) },
    { id: 11, category_id: 3, name: 'Nước Cam Vắt Tươi', price: 52000, image: IMG + 'drink-1.jpg', badge: 'Healthy', rating: 4.7,
      desc: '100% cam tươi vắt tại quầy, không đường hóa học, dồi dào vitamin C.', has_size: true, sizes: sz(45000, 52000, 59000) },
    { id: 12, category_id: 3, name: 'Trà Vải Nhiệt Đới', price: 49000, image: IMG + 'drink-10.jpg', badge: 'Yêu thích', rating: 4.9,
      desc: 'Vị ngọt thanh của vải chín mọng quyện cùng trà hoa nhài thơm ngát.', has_size: true, sizes: sz(42000, 49000, 55000) },
    { id: 13, category_id: 4, name: 'Tiramisu Truyền Thống', price: 45000, image: IMG + 'dessert-8.jpg', badge: 'Hảo hạng', rating: 5.0,
      desc: 'Mascarpone mềm mịn, cốt bánh Savoiardi ngấm Espresso thơm lừng, rắc ca cao nguyên chất.', has_size: false },
    { id: 14, category_id: 4, name: 'Croissant Bơ Pháp', price: 35000, image: IMG + 'dessert-7.jpg', badge: 'Nướng tươi', rating: 4.9,
      desc: 'Bánh sừng bò ngàn lớp thơm bơ Pháp, giòn rụm bên ngoài, mềm ẩm bên trong.', has_size: false },
    { id: 15, category_id: 4, name: 'Cheesecake Việt Quất', price: 52000, image: IMG + 'dessert-4.jpg', badge: 'Best seller', rating: 4.9,
      desc: 'Phô mai nướng béo ngậy phủ mứt việt quất chua ngọt, đế bánh quy bơ giòn tan.', has_size: false },
    { id: 16, category_id: 4, name: 'Mousse Dâu Hoa Hồng', price: 48000, image: IMG + 'dessert-1.jpg', badge: 'Ngọt ngào', rating: 4.8,
      desc: 'Mousse dâu tây mịn tan trong miệng, trang trí cánh hoa hồng — món quà cho người thương.', has_size: false }
  ];

  const blogs = [
    { id: 1, title: 'Nghệ thuật thưởng thức cà phê phin — nhịp thở chậm của người Việt', date: '15/10/2026', category: 'Văn hóa cà phê',
      image: LYNK + 'hero-phin.jpg',
      excerpt: 'Ngồi nhìn từng giọt cà phê chầm chậm rơi không chỉ là cách chiết xuất hương vị, mà là một nốt lặng giữa cuộc sống tất bật.',
      content: '<p>Chiếc phin nhôm mộc mạc đã trở thành biểu tượng của văn hóa cà phê Việt. Khác với nhịp “take-away” hối hả, cà phê phin dạy ta sự kiên nhẫn.</p><p>Bí quyết nằm ở độ mịn vừa phải của bột, nước sôi 92–95°C và 30 giây ủ bột đầu tiên để khí CO₂ thoát ra, đánh thức hương thơm tiềm ẩn.</p><p>Nhấp một ngụm cà phê đắng nồng hòa sữa béo — đó là lúc bạn cảm nhận trọn vẹn nhịp sống thanh bình của Sài Gòn.</p>' },
    { id: 2, title: 'Từ Cầu Đất đến tách cà phê: hành trình của những hạt mộc', date: '28/09/2026', category: 'Nguồn gốc hạt',
      image: IMG + 'bg_1.jpg',
      excerpt: 'Độ cao 1.600m cùng sương mù quanh năm đã tôi luyện nên hạt Arabica Cầu Đất danh tiếng như thế nào?',
      content: '<p>Cầu Đất (Đà Lạt) được mệnh danh là thiên đường Arabica của Việt Nam. Đất đỏ bazan màu mỡ và khí hậu mát lạnh tạo điều kiện lý tưởng cho cây cà phê.</p><p>Hạt Arabica Cầu Đất nổi tiếng với vị chua thanh như táo xanh, hương hoa nồng nàn và hậu ngọt kéo dài. PAUSE COFFEE thu mua trực tiếp từ các vườn canh tác thuận tự nhiên.</p>' },
    { id: 3, title: 'Phân biệt Arabica và Robusta: chọn gu cà phê chuẩn vị cho riêng bạn', date: '10/09/2026', category: 'Kiến thức barista',
      image: IMG + 'menu-7.jpg',
      excerpt: 'Bạn thích vị đắng đậm đà của Robusta hay vị chua thanh nhã, thơm nồng của Arabica?',
      content: '<p><b>Robusta:</b> hạt tròn nhỏ, caffeine cao gấp đôi, đắng đậm, thể chất dày, thoảng hương sô-cô-la đen. Hoàn hảo cho cà phê sữa đá.</p><p><b>Arabica:</b> hạt dài dẹt, caffeine nhẹ, chua thanh tự nhiên, hương hoa cỏ phong phú. Nguyên liệu chính của Espresso, Latte và Cold Brew.</p>' }
  ];

  const gallery = [
    { title: 'Góc cửa sổ đón nắng', category: 'indoor', image: LYNK + 'hero-phin.jpg' },
    { title: 'Quầy pha chế & không gian chính', category: 'indoor', image: IMG + 'about.jpg' },
    { title: 'Quầy barista rang xay', category: 'indoor', image: IMG + 'bg_3.jpg' },
    { title: 'Góc làm việc thư giãn', category: 'indoor', image: IMG + 'gallery-4.jpg' },
    { title: 'Cappuccino nghệ thuật', category: 'coffee', image: IMG + 'menu-1.jpg' },
    { title: 'Phin sữa đá mát lạnh', category: 'coffee', image: IMG + 'menu-3.jpg' },
    { title: 'Bộ sưu tập thức uống đá', category: 'coffee', image: LYNK + 'hero-iced.jpg' },
    { title: 'Tiramisu ca cao', category: 'dessert', image: IMG + 'dessert-8.jpg' },
    { title: 'Croissant nướng bơ', category: 'dessert', image: IMG + 'dessert-7.jpg' },
    { title: 'Cheesecake việt quất', category: 'dessert', image: IMG + 'dessert-4.jpg' }
  ];

  const testimonials = [
    { name: 'Nguyễn Minh Tuấn', role: 'Giảng viên kiến trúc', text: 'Không gian rất dễ chịu, phin sữa đá ở PAUSE COFFEE có hậu vị ngọt thanh đúng chất rang mộc mà tôi tìm kiếm bấy lâu.' },
    { name: 'Trần Mai Phương', role: 'Food blogger', text: 'Cà phê muối và Tiramisu là combo điểm 10! Nhân viên nhã nhặn, nhạc êm, rất hợp để làm việc hoặc hẹn bạn bè.' },
    { name: 'Lê Hoàng Quân', role: 'Content creator', text: 'Cold Brew ủ 24h thực sự đỉnh, uống vào cảm nhận rõ hương trái cây tự nhiên chứ không hề gắt cổ.' }
  ];

  window.LYNK_DATA = { categories, products, blogs, gallery, testimonials };
})();
