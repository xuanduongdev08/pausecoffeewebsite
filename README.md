# PAUSECOFFEE — Static Web Storefront

Website giới thiệu và đặt món trực tuyến thương hiệu PAUSECOFFEE (thiết kế theo phong cách Highlands Coffee).

## Cấu trúc thư mục
- `index.html`: Trang chủ (Hero slider, danh mục, sản phẩm nổi bật, câu chuyện, đánh giá, CTA)
- `menu.html`: Thực đơn (Bộ lọc danh mục, tìm kiếm, sắp xếp giá/đánh giá)
- `about.html`: Câu chuyện thương hiệu PAUSE
- `gallery.html`: Không gian quán & Thư viện ảnh (có xem ảnh phóng to Lightbox)
- `blog.html`: Tin tức & Kiến thức cà phê (đọc bài viết dạng modal)
- `reservation.html`: Đặt bàn trước trực tuyến
- `contact.html`: Liên hệ & Bản đồ quán
- `css/style.css`: Hệ thống giao diện (Design System chuẩn Highlands Coffee)
- `js/data.js`: Dữ liệu tĩnh (danh mục, sản phẩm, tin tức, hình ảnh)
- `js/layout.js`: Header, Topbar, Giỏ hàng drawer, Footer dùng chung
- `js/app.js`: Xử lý tương tác (Giỏ hàng, Slider, Modal, Animation, Đặt món/đặt bàn lưu `localStorage`)
- `images/`: Hình ảnh sản phẩm, không gian quán và logo
- `vercel.json`: Cấu hình deploy Vercel

## Cách chạy thử trên máy (Local)
1. Dùng bất kỳ công cụ static server hoặc mở Live Server trong VS Code.
2. Hoặc mở PowerShell tại thư mục này và chạy:
   ```bash
   php -S 127.0.0.1:5500
   ```
   Sau đó truy cập: http://127.0.0.1:5500

## Cách Deploy miễn phí 24/7 lấy link gửi cho bạn / thầy cô
- **Cách 1 (Netlify Drop - 30 giây có link ngay):** Truy cập https://app.netlify.com/drop và kéo toàn bộ thư mục `pausecoffeeshop-new` thả vào web.
- **Cách 2 (Vercel CLI):** Mở terminal tại thư mục này và chạy `npx vercel --prod`.
