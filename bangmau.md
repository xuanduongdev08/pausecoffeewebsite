# BẢNG MÀU VÀ TÔNG MÀU CHỦ ĐẠO 
> **Dự án:** XDTHECOFFEEHOUSE — Coffee Shop Laravel  
> **Phiên bản:** Laravel E-Commerce & Admin Management  
> **File cấu hình & stylesheet liên quan:** `resources/views/layouts/admin.blade.php`, `resources/views/layouts/shop.blade.php`, `public/css/style.css`, `public/css/style_custom.css`, `public/css/cafeai.css`, `public/css/review.css`.

---

## 1. Triết lý Thiết kế & Tông màu Chủ đạo

Website **XDTHECOFFEEHOUSE** sử dụng hệ thống màu sắc theo triết lý **"Coffee Lounge & Warm Gold"** (Không gian quán cà phê ấm cúng, sang trọng và đậm vị):

* **Tông màu chủ đạo (Primary Theme):** **Nâu Cà Phê (Coffee Brown) & Vàng Đồng (Warm Gold / Bronze)**.
* **Storefront (Khách hàng):** Phong cách **Dark Coffee Lounge** — Nền tối huyền bí (`#151111` / `#030202`), mô phỏng không gian quán cà phê về đêm sang trọng, giúp tôn lên hình ảnh sản phẩm thức uống và bánh ngọt với điểm nhấn vàng đồng sáng rực (`#c49b63`).
* **Admin Portal (Trang quản trị):** Phong cách **Coffee & Cream** — Sidebar sử dụng dải màu chuyển hạt cà phê rang (`#1e130c` $\rightarrow$ `#2c1810` $\rightarrow$ `#6f4e37`), trong khi không gian làm việc chính dùng tone kem sữa sáng (`#f8f9fa`) để tăng tối đa độ tập trung và sự thoải mái khi xử lý dữ liệu.
* **CaféAI & Tiện ích:** Phối màu caramel và bọt sữa latte (`#8b5a2b`, `#d4b483`, `#fdf6ec`) tạo cảm giác thân thiện, mời gọi tương tác.

---

## 2. Bảng Màu Chi Tiết (Full Color Palette)

### 2.1. Màu Nhấn Thương Hiệu (Brand & Accent Colors)

| Tên màu | Mã Hex | Mã RGB | Vai trò & Ứng dụng |
| :--- | :---: | :---: | :--- |
| **Warm Gold / Coffee Bronze** | `#c49b63` | `rgb(196, 155, 99)` | **Màu nhấn chủ đạo (Primary Accent):** Nút bấm chính (`.btn-primary`), link hover, tab đang chọn, icon nổi bật, viền avatar profile, nút SweetAlert confirm. |
| **Light Gold / Honey Accent** | `#d4b483` | `rgb(212, 180, 131)` | **Nhấn phụ (Secondary Accent):** Màu hover nhẹ, viền phụ trong chatbox CaféAI. |
| **Golden Star / Cart Badge** | `#ffd700` / `#f8b500` | `rgb(255, 215, 0)` | **Màu điểm nhấn phụ:** Đánh giá sao sản phẩm (`.stars`), huy hiệu số lượng giỏ hàng (`.bag`). |

---

### 2.2. Nhóm Màu Nâu Cà Phê (Coffee Shades)

| Tên màu | Mã Hex | Mã RGB | Vai trò & Ứng dụng |
| :--- | :---: | :---: | :--- |
| **Espresso Dark Roast** | `#1e130c` | `rgb(30, 19, 12)` | Nền trên của Sidebar Admin, màu nền sâu nhất của bảng màu cà phê. |
| **Warm Mocha** | `#2c1810` | `rgb(44, 24, 16)` | Đoạn giữa gradient của Sidebar Admin, tạo chiều sâu cho thanh điều hướng. |
| **Classic Coffee Brown** | `#6f4e37` | `rgb(111, 78, 55)` | Chân Sidebar Admin, tiêu đề Review, chữ sản phẩm ngưng kinh doanh, gradient card đánh giá. |
| **Roasted Coffee Bean** | `#8b5a2b` | `rgb(139, 90, 43)` | Màu chính trong CaféAI (`--cafe-primary`), icon và viền hạt dẻ. |
| **Caramel Brown** | `#8b6f47` | `rgb(139, 111, 71)` | Gradient thẻ thống kê đánh giá sao (`.rating-summary`), nút hover phụ. |
| **Dark Mocha Badge** | `#4e342e` | `rgb(78, 52, 46)` | Nền nhãn "Ngưng kinh doanh" (`.suspended-badge`). |

---

### 2.3. Nhóm Màu Nền (Backgrounds & Surfaces)

| Tên màu | Mã Hex | Mã RGB | Vai trò & Ứng dụng |
| :--- | :---: | :---: | :--- |
| **Deep Coffee Black** | `#151111` | `rgb(21, 17, 17)` | **Nền Storefront (Body):** Nền toàn trang khách hàng kết hợp ảnh nền hoa văn cà phê `bg_4.jpg`, nền thanh cuộn Navbar khi scroll. |
| **Pure Dark Night** | `#030202` | `rgb(3, 2, 2)` | Nền các section tối đặc biệt (`.ftco-bg-dark`). |
| **Footer Roasted Dark** | `#120f0f` | `rgb(18, 15, 15)` | Nền Footer toàn trang khách hàng. |
| **Matte Dark Coffee** | `#0b0b0b` / `#1a1a1a` | `rgb(11, 11, 11)` | Nền trang thông tin cá nhân (Profile page), card hiệu ứng Glassmorphism. |
| **Latte Cream Light** | `#f8f9fa` | `rgb(248, 249, 250)` | **Nền chính Admin Portal:** Không gian nội dung quản trị (Tables, Cards, Dashboard). |
| **Milk Foam White** | `#fdf6ec` / `#f5efe6` | `rgb(253, 246, 236)` | Nền CaféAI Chatbox, màu chữ nổi bật trên nền nâu đậm Sidebar. |
| **Pure White** | `#ffffff` | `rgb(255, 255, 255)` | Topbar Admin, nền ô nhập form đăng nhập/đăng ký, nền Modal. |

---

### 2.4. Nhóm Màu Chữ & Typography (Text Colors)

| Tên màu | Mã Hex | Mã RGB | Vị trí áp dụng |
| :--- | :---: | :---: | :--- |
| **Headings White** | `#ffffff` | `rgb(255, 255, 255)` | Tiêu đề chính (`h1` - `h5`), font Josefin Sans & Poppins trên nền tối Storefront. |
| **Body Muted Gray** | `#bfbfbf` / `#808080` | `rgb(191, 191, 191)` | Văn bản mô tả sản phẩm, phụ chú, body text ở Storefront. |
| **Sub-title Uppercase** | `#d4d4d4` | `rgb(212, 212, 212)` | Tiêu đề phụ dạng in hoa giãn cách chữ (`.ftco-sub-title`). |
| **Admin Text Dark** | `#212529` / `#2d2522` | `rgb(33, 37, 41)` | Chữ hiển thị bảng dữ liệu, nhãn form, báo cáo trong giao diện Admin. |
| **CaféAI Text Dark** | `#3a2d1f` | `rgb(58, 45, 31)` | Chữ tin nhắn hội thoại của khách hàng trong CaféAI. |

---

### 2.5. Nhóm Màu Trạng Thái Nghiệp Vụ (Semantic & Status Colors)

| Trạng thái | Mã Hex | Mã RGB | Ứng dụng trong hệ thống |
| :--- | :---: | :---: | :--- |
| **Thành công (Success)** | `#28a745` / `#2e7d32` | `rgb(40, 167, 69)` | Đơn hàng hoàn thành, thông báo thành công, trạng thái online của bot CaféAI. |
| **Cảnh báo / Pending (Warning)** | `#ffc107` / `#f8b500` | `rgb(255, 193, 7)` | Đang pha chế, chờ xác nhận thanh toán, đánh giá 5 sao. |
| **Nguy hiểm / Hủy đơn (Danger)** | `#dc3545` / `#e74c3c` | `rgb(220, 53, 69)` | Hủy đơn hàng, hết hàng (Out of stock badge), thông báo lỗi, chấm đỏ thông báo sidebar. |
| **Tạm ngưng (Suspended)** | `#4e342e` & `#af8f6f` | `rgb(78, 52, 46)` | Badge "Ngưng kinh doanh" kèm viền màu vàng đồng xám. |
| **Đường viền mờ (Borders)** | `rgba(196, 155, 99, 0.2)` | — | Viền phân cách card, viền ảnh avatar, viền header & footer cao cấp. |

---

## 3. Khai Báo Biến CSS Chuẩn (CSS Variables Specification)

Dưới đây là các biến CSS đang được nạp và áp dụng trực tiếp trong mã nguồn hệ thống:

### 3.1. Dành cho Hệ thống Quản trị (Admin System Layout)
*(Khai báo tại [admin.blade.php](file:///d:/cfshopnew/coffeeshop-laravel/resources/views/layouts/admin.blade.php#L22-L30))*

```css
:root {
    --coffee-dark: #1e130c;        /* Nâu đen hạt cà phê */
    --coffee: #6f4e37;             /* Nâu cà phê cổ điển */
    --coffee-light: #8b6f47;       /* Nâu caramel sáng */
    --coffee-pale: #c49b63;        /* Vàng đồng nhạt (Accent) */
    --coffee-cream: #f5efe6;       /* Kem sữa nhạt */
    --sidebar-w: 260px;
    --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### 3.2. Dành cho Trợ lý Trò chuyện CaféAI
*(Khai báo tại [cafeai.css](file:///d:/cfshopnew/coffeeshop-laravel/public/css/cafeai.css#L9-L23))*

```css
:root {
    --cafe-primary: #8b5a2b;       /* Nâu đậm hạt dẻ */
    --cafe-primary-light: #c49b63; /* Vàng đồng */
    --cafe-primary-dark: #6f4e37;  /* Nâu sẫm */
    --cafe-accent: #c49b63;        /* Màu nhấn tương tác */
    --cafe-accent-light: #d4b483;  /* Vàng nhạt */
    --cafe-cream: #fdf6ec;         /* Bọt sữa cà phê */
    --cafe-text: #3a2d1f;          /* Nâu đậm đọc văn bản */
    --cafe-text-light: #7a6b5d;    /* Nâu xám cho phụ đề */
    --cafe-border: #e8e0d5;        /* Viền thanh lịch */
    --cafe-success: #2e7d32;       /* Xanh lá thảo mộc */
    --cafe-bg: #f5f0eb;            /* Nền box chat */
    --cafe-shadow: 0 10px 30px rgba(139, 90, 43, 0.2);
}
```

### 3.3. Hiệu Ứng Nổi Bật (Key Gradients)

* **Gradient Nút Bấm CaféAI:**
  ```css
  background: linear-gradient(135deg, #9c6f44 0%, #c49b63 100%);
  ```
* **Gradient Sidebar Admin:**
  ```css
  background: linear-gradient(180deg, #1e130c 0%, #2c1810 40%, #6f4e37 100%);
  ```
* **Gradient Card Đánh Giá (Rating Summary):**
  ```css
  background: linear-gradient(135deg, #6f4e37 0%, #8b6f47 100%);
  ```

---

## 4. Bảng Tra Cứu Nhanh (Color Quick Reference)

| Mã Màu (HEX) | Minh họa màu | Nhóm màu | Cách gọi tên quen thuộc |
| :---: | :---: | :--- | :--- |
| `#c49b63` | 🟨 Vàng đồng ấm | Accent / Primary Button | **Gold Brand Color** |
| `#1e130c` | ⬛ Nâu đen sẫm | Dark Surface | **Dark Espresso** |
| `#2c1810` | 🟫 Nâu ấm | Sidebar Gradient | **Warm Mocha** |
| `#6f4e37` | 🟫 Nâu cà phê | Brand Typography / Borders | **Coffee Brown** |
| `#8b5a2b` | 🟫 Nâu hạt dẻ | AI Assistant Primary | **Nutty Coffee** |
| `#151111` | ⬛ Đen nâu đêm | Storefront Body Background | **Midnight Coffee** |
| `#f8f9fa` | ⬜ Xám trắng sữa | Admin Main Workspace | **Soft Milk Cream** |
| `#ffd700` | 🟨 Vàng rực | Rating Stars & Badges | **Gold Star / Honey** |
| `#dc3545` | 🟥 Đỏ cảnh báo | Error & Out of stock | **Alert Red** |
| `#28a745` | 🟩 Xanh lá | Order Completed | **Success Green** |

---
*Tài liệu được khởi tạo tự động dựa trên phân tích toàn diện mã nguồn CSS & Blade Templates của hệ thống XDTHECOFFEEHOUSE.*
