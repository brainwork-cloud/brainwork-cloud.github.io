# Link bio & landing page @nopal.brainwork

Semua tayang di GitHub Pages (otomatis ±1-2 menit setelah file diubah):

| Halaman | Alamat | File |
|---|---|---|
| Link bio | https://brainwork-cloud.github.io/ | `index.html` |
| Pack 50 Prompt AI + Template UMKM (Rp 28 rb) | https://brainwork-cloud.github.io/pack-prompt/ | `pack-prompt/index.html` |
| Strategi Kilat Sosmed (Rp 148 rb) | https://brainwork-cloud.github.io/strategi-kilat/ | `strategi-kilat/index.html` |
| Kelas offline NolKaryawan (mulai Rp 2,5 jt) | https://brainwork-cloud.github.io/nolkaryawan/ | `nolkaryawan/index.html` |

Gaya dan skrip bersama landing page ada di `aset/lp.css` dan `aset/lp.js`.

## Link untuk tiap platform
Pakai satu halaman bio yang sama, bedakan sumbernya supaya kelihatan di analitik (UTM):

| Taruh di | Link |
|---|---|
| Bio Instagram | `https://brainwork-cloud.github.io/` |
| Bio TikTok | `https://brainwork-cloud.github.io/?src=tiktok` |
| Bio Threads | `https://brainwork-cloud.github.io/?src=threads` |
| Deskripsi YouTube | `https://brainwork-cloud.github.io/?src=youtube` |

Tombol produk di bio otomatis diberi `utm_source` (platform di atas), `utm_medium=bio`, dan `utm_campaign` (nama produk). Landing page meneruskan UTM itu ke halaman checkout Scalev, jadi sumber penjualan terbaca.

## Mengubah isi
**Landing page:** pengaturan ada di bagian atas tiap `index.html`, di baris `window.LP = { ... }`:
- `checkout`: link checkout Scalev. **Pack Prompt masih kosong**, jadi tombol belinya membuka WhatsApp Admin Nazwa (dengan catatan "Pembayaran dibantu admin lewat WhatsApp"). Begitu link diisi, semua tombol beli otomatis pindah ke checkout dan catatan itu hilang.
- `pixel`: ID Meta Pixel. Kelas NolKaryawan memakai Pixel NolKaryawan (PageView, InitiateCheckout saat klik bayar, Lead saat klik daftar antrean). Kosong = tanpa pelacak.

**Jadwal Kelas NolKaryawan:** saat ini tertulis "segera diumumkan" dengan tombol daftar antrean WhatsApp. Kalau tanggal sudah pasti, ganti teks di bagian `id="harga"` (kotak "Jadwal & lokasi") dan FAQ "Kapan jadwal berikutnya?".

**Harga:** cari `harga-hero` dan `tangga-harga` di tiap halaman, plus `class="harga"` di bio. Strategi Kilat naik mengikuti followers IG (250 rb followers jadi Rp 199 rb): pindahkan label "Sekarang" (`class="kini"`) ke baris berikutnya.

**Bio:** produk baru = salin satu blok `<li class="anak">`. WhatsApp admin ada di `class="kontak"` (pesan pembuka di parameter `text=`, sudah di-encode).

## Mengukur klik di bio (opsional)
Di bagian bawah `index.html`, isi `ANALITIK = { ga4: "G-XXXX", metaPixel: "123..." }`. Setiap klik dikirim sebagai event `klik_link` (GA4) / `KlikLink` (Meta Pixel). Kalau kosong, halaman tidak memasang pelacak, dan catatan privasi di bawah halaman menyesuaikan otomatis.

## Catatan
- Repo ini juga domain utama akun: proyek lain tetap jalan di sub-alamat, mis. `/skalarium/` dan `/brainwork-konten/`.
- Halaman lama di Netlify (`0karyawan`, `nopalbrainwork`, `nolkaryawan`) tidak lagi dipakai link bio.
- Gaya bahasa mengikuti BRAND.md Brainwork: aku/kamu, tanpa em dash, ungu #7B2FBE, emas #F5C107, hitam #0A0A0F, Poppins.
