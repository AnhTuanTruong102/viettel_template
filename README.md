# Viettel với Next.js 13!
  
  <p>
Viettel template sử dụng Next.js 13, Tailwind CSS, Prisma, MongoDB, NextAuth, Framer Motion. Hỗ trợ đăng nhập bằng Google và Facebook, tải lên hình ảnh với Cloudinary CDN, chọn vị trí, tích hợp bản đồ, tự động điền quốc gia và truy xuất danh sách bằng server components.
  </p>
<br />

<!-- Mục lục -->
## :notebook_with_decorative_cover: Mục lục

- [Giới thiệu Dự án](#star2-gioi-thieu-du-an)
  - [Công nghệ Sử dụng](#space_invader-cong-nghe-su-dung)
  - [Biến Môi Trường](#key-bien-moi-truong)
- [Bắt đầu](#toolbox-bat-dau)
  - [Yêu cầu Hệ thống](#bangbang-yeu-cau-he-thong)
  - [Cài đặt](#gear-cai-dat)
  - [Triển khai](#triangular_flag_on_post-trien-khai)

<!-- Giới thiệu Dự án -->

## :star2: Giới thiệu Dự án

![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
![forthebadge](https://forthebadge.com/images/badges/for-you.svg)
![forthebadge](https://forthebadge.com/images/badges/powered-by-coffee.svg)

### :space_invader: Công nghệ Sử dụng

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://#/">Typescript</a></li>
    <li><a href="https://nextjs.org/">Next.js</a></li>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://tailwindcss.com/">TailwindCSS</a></li>
    <li><a href="https://www.prisma.io">Prisma</a></li>
  </ul>
</details>

<details>
<summary>CSDL</summary>
  <ul>
  <li><a href="https://firebase.google.com">Mongodb</a></li>
  <li><a href="https://cloudinary.com/">Cloudinary</a></li>
  </ul>
</details>

## :toolbox: Bắt đầu

### :bangbang: Yêu cầu Hệ thống
- Cài đặt Node.js trên máy tính của bạn <a href='https://nodejs.org/en/'>TẠI ĐÂY</a>  
- Đăng ký tài khoản Cloudinary <a href='https://cloudinary.com/'>TẠI ĐÂY</a>  
- Đăng ký Google Cloud Platform <a href='https://console.cloud.google.com/'>TẠI ĐÂY</a>  
- Đăng ký Meta for Developers <a href='https://developers.facebook.com'>TẠI ĐÂY</a>  
- Lấy API Key của Lookup <a href='https://extreme-ip-lookup.com/'>TẠI ĐÂY</a>

<!-- Biến Môi Trường -->

### :key: Biến Môi Trường

Để chạy dự án này, bạn cần thêm các biến môi trường sau vào tệp `.env` của bạn:

`DATABASE_URL`

`GOOGLE_CLIENT_ID`

`GOOGLE_CLIENT_SECRET`

`FACEBOOK_ID`

`FACEBOOK_SECRET`

`NEXTAUTH_SECRET`

`NEXTAUTH_URL`

`NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`

`NEXT_PUBLIC_LOOKUP_KEY`

Dự án này đã được khởi tạo bằng [Create React App](https://github.com/facebook/create-react-app).

### :gear: Cài đặt

![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![](https://img.shields.io/badge/next.js-20232A?style=for-the-badge&logo=next.js&logoColor=61DAFB)

Cài đặt `my-project` bằng npm:

```
npx create-next-app@latest my-project --typescript --eslint
```

```
cd my-project
```

Cài đặt các thư viện phụ thuộc.

### :test_tube: Cài đặt Tailwind CSS với Next.js

#### Cài đặt Tailwind CSS

![](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

```bash
npm install -D tailwindcss postcss autoprefixer
```

```bash
npx tailwindcss init -p
```

#### Cấu hình đường dẫn template

Thêm các đường dẫn đến tất cả tệp template trong `tailwind.config.js`.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

#### Thêm các chỉ thị Tailwind vào CSS
Thêm các chỉ thị `@tailwind` vào `./styles/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Clone dự án

```bash
git clone https://github.com/
```

```bash
cd viettel_template
```

Cài đặt các thư viện phụ thuộc:

```bash
npm install
```

Khởi động server:

```bash
npm run dev
```

<hr />

Đây là một dự án [Next.js](https://nextjs.org/) được khởi tạo bằng [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

<hr />

Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt để xem kết quả.

Bạn có thể bắt đầu chỉnh sửa trang bằng cách sửa đổi tệp `pages/index.js`. Trang sẽ tự động cập nhật khi bạn chỉnh sửa tệp.

[API routes](https://nextjs.org/docs/api-routes/introduction) có thể được truy cập tại [http://localhost:3000/api/hello](http://localhost:3000/api/hello). Bạn có thể chỉnh sửa endpoint này trong tệp `pages/api/hello.js`.

Thư mục `pages/api` được ánh xạ tới `/api/*`. Các tệp trong thư mục này được xử lý như [API routes](https://nextjs.org/docs/api-routes/introduction) thay vì các trang React.

### Tìm hiểu thêm

Để tìm hiểu thêm về Next.js, hãy xem các tài nguyên sau:

- [Tài liệu Next.js](https://nextjs.org/docs) - tìm hiểu về Next.js và API.
- [Học Next.js](https://nextjs.org/learn) - hướng dẫn sử dụng Next.js.

Bạn có thể kiểm tra [Kho lưu trữ GitHub của Next.js](https://github.com/vercel/next.js/)



<!-- Deployment -->

### :triangular_flag_on_post: Deployment

Để triển khai dự án này chạy

Kiểm tra [Next.js deployment documentation](https://nextjs.org/docs/deployment) để biết thêm chi tiết.


