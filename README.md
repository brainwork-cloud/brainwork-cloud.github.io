# Link bio @nopal.brainwork

Halaman: https://brainwork-cloud.github.io/ (GitHub Pages, otomatis tayang ±1-2 menit setelah file diubah).

## Link untuk tiap platform
Pakai satu halaman yang sama, bedakan sumbernya supaya kelihatan di analitik landing page (UTM):

| Taruh di | Link |
|---|---|
| Bio Instagram | `https://brainwork-cloud.github.io/` |
| Bio TikTok | `https://brainwork-cloud.github.io/?src=tiktok` |
| Bio Threads | `https://brainwork-cloud.github.io/?src=threads` |
| Deskripsi YouTube | `https://brainwork-cloud.github.io/?src=youtube` |

Link ke Pack Prompt, Strategi Kilat Sosmed, dan Kelas NolKaryawan otomatis diberi `utm_source` (platform di atas), `utm_medium=bio`, dan `utm_campaign` (nama produk).

## Mengubah isi
Semua ada di `index.html`:
- **Harga**: cari `class="harga"` di tiap produk (Strategi Kilat Sosmed dan Kelas NolKaryawan harganya naik bertahap, jadi perlu diperbarui).
- **Produk baru**: salin satu blok `<li class="anak">`, ganti judul, deskripsi, harga, link, dan `data-utm`.
- **WhatsApp admin**: bagian `class="kontak"`; pesan pembuka ada di parameter `text=` (sudah di-encode).

## Mengukur klik (opsional)
Di bagian bawah `index.html`, isi `ANALITIK = { ga4: "G-XXXX", metaPixel: "123..." }`. Setiap klik tombol dikirim sebagai event `klik_link` (GA4) / `KlikLink` (Meta Pixel) beserta nama tombol dan sumber platform. Kalau kosong, halaman tidak memasang pelacak apa pun, dan catatan privasi di bawah halaman menyesuaikan otomatis.

## Catatan
- Repo ini juga domain utama akun: proyek lain tetap jalan di sub-alamat, mis. `/skalarium/` dan `/brainwork-konten/`.
- Gaya bahasa mengikuti BRAND.md Brainwork: aku/kamu, tanpa em dash.
