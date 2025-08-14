import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-3xl">
      <h1 className="text-4xl font-extrabold text-foreground mb-6 text-center">
        Kebijakan Privasi
      </h1>
      <p className="text-muted-foreground mb-4">
        Terakhir diperbarui: 27 Oktober 2023
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-3">1. Pengantar</h2>
        <p className="text-muted-foreground">
          Selamat datang di FQLabs. Kami sangat menghargai privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi informasi Anda saat Anda mengunjungi situs web kami.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-3">2. Informasi yang Kami Kumpulkan</h2>
        <p className="text-muted-foreground mb-2">
          Kami dapat mengumpulkan informasi pribadi yang Anda berikan secara sukarela kepada kami, seperti nama, alamat email, nomor telepon, dan detail pesan saat Anda:
        </p>
        <ul className="list-disc list-inside text-muted-foreground ml-4">
          <li>Mengisi formulir kontak.</li>
          <li>Berlangganan newsletter kami.</li>
          <li>Berinteraksi dengan layanan kami.</li>
        </ul>
        <p className="text-muted-foreground mt-2">
          Kami juga dapat mengumpulkan informasi non-pribadi secara otomatis saat Anda mengunjungi situs kami, seperti alamat IP, jenis browser, waktu akses, dan halaman yang dilihat, melalui cookie dan teknologi pelacakan serupa.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-3">3. Bagaimana Kami Menggunakan Informasi Anda</h2>
        <p className="text-muted-foreground mb-2">
          Informasi yang kami kumpulkan dapat digunakan untuk:
        </p>
        <ul className="list-disc list-inside text-muted-foreground ml-4">
          <li>Menyediakan, mengoperasikan, dan memelihara situs web kami.</li>
          <li>Meningkatkan, mempersonalisasi, dan memperluas situs web kami.</li>
          <li>Memahami dan menganalisis bagaimana Anda menggunakan situs web kami.</li>
          <li>Mengembangkan produk, layanan, fitur, dan fungsionalitas baru.</li>
          <li>Berkomunikasi dengan Anda, baik secara langsung maupun melalui salah satu mitra kami, termasuk untuk layanan pelanggan, untuk memberi Anda pembaruan dan informasi lain yang berkaitan dengan situs web, dan untuk tujuan pemasaran dan promosi.</li>
          <li>Mengirim email kepada Anda.</li>
          <li>Mencegah penipuan.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-3">4. Pengungkapan Informasi Anda</h2>
        <p className="text-muted-foreground">
          Kami tidak menjual, memperdagangkan, atau menyewakan informasi identifikasi pribadi pengguna kepada pihak lain. Kami dapat membagikan informasi demografis agregat yang tidak terkait dengan informasi identifikasi pribadi apa pun mengenai pengunjung dan pengguna dengan mitra bisnis kami, afiliasi tepercaya, dan pengiklan untuk tujuan yang diuraikan di atas.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-3">5. Keamanan Data</h2>
        <p className="text-muted-foreground">
          Kami menerapkan langkah-langkah keamanan yang sesuai untuk melindungi dari akses tidak sah, perubahan, pengungkapan, atau penghancuran informasi pribadi Anda, nama pengguna, kata sandi, informasi transaksi, dan data yang disimpan di Situs kami.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-3">6. Perubahan pada Kebijakan Privasi Ini</h2>
        <p className="text-muted-foreground">
          FQLabs memiliki kebijaksanaan untuk memperbarui kebijakan privasi ini kapan saja. Ketika kami melakukannya, kami akan merevisi tanggal "terakhir diperbarui" di bagian atas halaman ini. Kami mendorong Pengguna untuk sering memeriksa halaman ini untuk setiap perubahan agar tetap terinformasi tentang bagaimana kami membantu melindungi informasi pribadi yang kami kumpulkan.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-3">7. Persetujuan Anda</h2>
        <p className="text-muted-foreground">
          Dengan menggunakan Situs kami, Anda menyetujui kebijakan privasi ini. Jika Anda tidak setuju dengan kebijakan ini, mohon jangan gunakan Situs kami.
        </p>
      </section>
    </div>
  );
}