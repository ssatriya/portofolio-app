This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

Route:

- "/" - homepage, hanya menampilkan tombol untuk menuju halaman Admin.
- "/admin" - admin, halaman dimana user dapat mengisi profile dan portofolio.
- "/web" - web, halaman untuk menampilkan portofolio kepada publik.

Skema penyimpanan data:

Data profile & portofolio disimpan ke dalam LocalStorage browser dengan key "porto". Data di dalam LocalStorage akan diperbarui sesuai dengan pembaruan dihalaman admin ('/admin')

Desain:

Aplikasi dibuat dengan desain dari referensi yang diberikan melalui Figma. Saya menggunakan `ShadCN UI` sebagai UI Component. Detail desain seperti komponen input mengikuti desain default ShadCN UI yang menurut saya cukup mirip dengan referensi desain. Sisanya saya mencoba untuk membuat tampilkan sesuai dengan referensi.

Saya menambahkan animasi menggunakan `Framer Motion` pada bagian group field yang memiliki fitur expand - collaps. Kemudian saya tambahkan juga komponent navbar dan footer sebagai pelengkap. Dibagian kanan navbar terdapat tombol menuju halaman portofolio publik ('/web') untuk melihat hasil portofolio.

Misc:

Saya menyimpan `state` dari field collapes/expand ke dalam LocalStorage dengan tujuan user bisa dengan mudah fokus pada field yang ingin mereka isi saat pertama kali app di load.
