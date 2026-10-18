/* Skrip bersama landing page produk. Pengaturan per halaman ada di window.LP (lihat bagian atas tiap index.html):
   checkout = link checkout (kosong = tombol beli tetap ke WhatsApp admin), pixel = ID Meta Pixel (kosong = tanpa pelacak). */
(function () {
  var LP = window.LP || {};
  var q = new URLSearchParams(location.search);

  // Teruskan UTM (dari link bio atau iklan) ke halaman checkout, supaya sumber penjualan terbaca di Scalev.
  var teruskan = {};
  ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"].forEach(function (k) {
    var v = q.get(k);
    if (v) teruskan[k] = v.slice(0, 120);
  });

  var adaCheckout = /^https:\/\//.test(LP.checkout || "");
  document.querySelectorAll("a[data-checkout]").forEach(function (a) {
    try {
      var u = new URL(adaCheckout ? LP.checkout : a.href);
      if (adaCheckout || /myscalev\.com$/.test(u.hostname)) {
        Object.keys(teruskan).forEach(function (k) { u.searchParams.set(k, teruskan[k]); });
      }
      a.href = u.toString();
    } catch (e) {}
  });
  if (adaCheckout) {
    document.querySelectorAll("[data-wa-saja]").forEach(function (el) { el.hidden = true; });
  }

  // Meta Pixel (opsional)
  if (/^\d{8,20}$/.test(LP.pixel || "")) {
    !function (f, b, e, v, n, t, x) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v; x = b.getElementsByTagName(e)[0]; x.parentNode.insertBefore(t, x); }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    window.fbq("init", LP.pixel);
    window.fbq("track", "PageView");
    var p = document.getElementById("privasi");
    if (p) p.textContent = "Halaman ini memakai Meta Pixel untuk mengukur kunjungan dan klik.";
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest ? e.target.closest("a[data-checkout], a[data-lead]") : null;
    if (!a || !window.fbq) return;
    if (a.hasAttribute("data-checkout")) window.fbq("track", "InitiateCheckout", { content_name: LP.produk || "" });
    else window.fbq("track", "Lead", { content_name: LP.produk || "" });
  });

  // Tombol beli menempel di bawah: muncul setelah tombol utama di atas tidak terlihat, sembunyi di bagian penutup.
  var lekat = document.querySelector(".lekat");
  var utama = document.getElementById("cta-utama");
  var akhir = document.querySelector(".akhir");
  if (lekat && utama && "IntersectionObserver" in window) {
    var lewatUtama = false, diAkhir = false;
    var atur = function () { lekat.classList.toggle("tampil", lewatUtama && !diAkhir); };
    new IntersectionObserver(function (en) {
      lewatUtama = !en[0].isIntersecting && en[0].boundingClientRect.top < 0; atur();
    }).observe(utama);
    if (akhir) new IntersectionObserver(function (en) {
      diAkhir = en[0].isIntersecting || en[0].boundingClientRect.top < 0; atur();
    }).observe(akhir);
  }
})();
