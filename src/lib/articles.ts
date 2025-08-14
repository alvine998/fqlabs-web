export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
};

const articles: Article[] = [
  {
    slug: "pentingnya-website-untuk-bisnis-modern",
    title: "Pentingnya Website untuk Bisnis Modern",
    description: "Di era digital ini, memiliki website bukan lagi pilihan, melainkan keharusan bagi setiap bisnis.",
    date: "2023-10-26",
    content: `
      <p class="mb-4">Di era digital yang serba cepat ini, memiliki kehadiran online yang kuat adalah kunci kesuksesan bagi setiap bisnis, besar maupun kecil. Website bukan lagi sekadar 'tambahan' tetapi telah menjadi fondasi utama strategi pemasaran dan operasional.</p>
      <h2 class="text-2xl font-bold mb-3">Mengapa Website Penting?</h2>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Kredibilitas dan Profesionalisme:</strong> Sebuah website yang dirancang dengan baik meningkatkan kredibilitas bisnis Anda di mata calon pelanggan.</li>
        <li><strong>Aksesibilitas 24/7:</strong> Pelanggan dapat mengakses informasi tentang produk atau layanan Anda kapan saja, di mana saja.</li>
        <li><strong>Jangkauan Pasar Lebih Luas:</strong> Website memungkinkan Anda menjangkau audiens global, melampaui batasan geografis.</li>
        <li><strong>Pemasaran Efektif:</strong> Website adalah platform sentral untuk semua aktivitas pemasaran digital Anda, dari SEO hingga iklan berbayar.</li>
        <li><strong>Interaksi Pelanggan:</strong> Melalui formulir kontak, chat, atau bagian komentar, Anda dapat berinteraksi langsung dengan pelanggan.</li>
      </ul>
      <p class="mb-4">Investasi dalam pengembangan website adalah investasi jangka panjang untuk pertumbuhan dan keberlanjutan bisnis Anda. Pastikan website Anda responsif, cepat, dan mudah dinavigasi untuk memberikan pengalaman terbaik bagi pengunjung.</p>
      <p>FQLabs siap membantu Anda membangun website profesional yang sesuai dengan kebutuhan bisnis Anda.</p>
    `,
  },
  {
    slug: "strategi-seo-dasar-untuk-pemula",
    title: "Strategi SEO Dasar untuk Pemula",
    description: "Pelajari dasar-dasar Search Engine Optimization (SEO) untuk meningkatkan visibilitas website Anda di mesin pencari.",
    date: "2023-11-15",
    content: `
      <p class="mb-4">Search Engine Optimization (SEO) adalah praktik mengoptimalkan website Anda agar mendapatkan peringkat lebih tinggi di hasil pencarian mesin seperti Google. Untuk pemula, memahami dasar-dasar SEO adalah langkah pertama yang krusial.</p>
      <h2 class="text-2xl font-bold mb-3">Tips SEO Dasar:</h2>
      <ol class="list-decimal list-inside mb-4 space-y-2">
        <li><strong>Penelitian Kata Kunci:</strong> Temukan kata kunci yang relevan dengan bisnis Anda dan yang sering dicari oleh target audiens.</li>
        <li><strong>Konten Berkualitas Tinggi:</strong> Buat konten yang informatif, relevan, dan menarik bagi pembaca Anda.</li>
        <li><strong>Optimasi On-Page:</strong> Pastikan judul halaman, meta deskripsi, dan heading (H1, H2, dll.) mengandung kata kunci target.</li>
        <li><strong>Mobile-Friendly:</strong> Pastikan website Anda responsif dan tampil baik di perangkat seluler.</li>
        <li><strong>Kecepatan Website:</strong> Website yang cepat dimuat akan memberikan pengalaman pengguna yang lebih baik dan disukai mesin pencari.</li>
        <li><strong>Backlink Berkualitas:</strong> Dapatkan tautan dari website lain yang memiliki otoritas tinggi ke website Anda.</li>
      </ol>
      <p class="mb-4">Menerapkan strategi SEO membutuhkan waktu dan kesabaran, tetapi hasilnya akan sangat berharga dalam jangka panjang untuk menarik lalu lintas organik ke website Anda.</p>
      <p>FQLabs dapat membantu Anda dalam strategi SEO untuk meningkatkan peringkat website Anda.</p>
    `,
  },
  {
    slug: "memilih-platform-ecommerce-yang-tepat",
    title: "Memilih Platform E-commerce yang Tepat",
    description: "Panduan untuk memilih platform e-commerce terbaik yang sesuai dengan kebutuhan bisnis online Anda.",
    date: "2024-01-01",
    content: `
      <p class="mb-4">Memulai bisnis e-commerce bisa menjadi langkah yang menguntungkan, tetapi memilih platform yang tepat adalah keputusan krusial yang akan memengaruhi operasional dan pertumbuhan Anda.</p>
      <h2 class="text-2xl font-bold mb-3">Faktor yang Perlu Dipertimbangkan:</h2>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Skalabilitas:</strong> Apakah platform dapat tumbuh bersama bisnis Anda?</li>
        <li><strong>Fitur:</strong> Apakah ia menawarkan fitur yang Anda butuhkan (manajemen inventaris, pembayaran, pengiriman, dll.)?</li>
        <li><strong>Kemudahan Penggunaan:</strong> Seberapa mudah platform tersebut untuk diatur dan dikelola?</li>
        <li><strong>Biaya:</strong> Pertimbangkan biaya bulanan, biaya transaksi, dan biaya pengembangan.</li>
        <li><strong>Dukungan Pelanggan:</strong> Apakah ada dukungan yang memadai jika Anda mengalami masalah?</li>
        <li><strong>Integrasi:</strong> Bisakah platform terintegrasi dengan alat lain yang Anda gunakan (CRM, email marketing)?</li>
      </ul>
      <p class="mb-4">Beberapa platform populer termasuk Shopify, WooCommerce (untuk WordPress), Magento, dan BigCommerce. Setiap platform memiliki kelebihan dan kekurangannya sendiri. Lakukan riset mendalam dan pertimbangkan kebutuhan spesifik bisnis Anda sebelum membuat keputusan.</p>
      <p>FQLabs dapat memberikan konsultasi untuk membantu Anda memilih dan membangun toko online yang optimal.</p>
    `,
  },
];

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}