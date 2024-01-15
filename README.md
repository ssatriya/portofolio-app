This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1.  Clone the repository:

    ```bash
    git clone https://github.com/ssatriya/portofolio-app.git

    ```

2.  Open the project:

    ```bash
    cd portofolio-app
    npm install
    ```

3.  Start the project
    ```bash
    npm run dev
    ```

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
