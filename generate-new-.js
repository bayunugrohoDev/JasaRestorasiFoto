const fs = require('fs');
const path = require('path');

const directories = [
  'app',
  'app/components',
  'app/styles',
];

const files = [
  {
    path: 'app/layout.js',
    content: `export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Restorasi Fotoku</title>
        <meta name="description" content="Jasa Restorasi Foto Terpercaya, Profesional, dan Termurah" />
      </head>
      <body className="bg-gray-100 text-gray-800">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
`,
  },
  {
    path: 'app/components/Header.js',
    content: `import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold">Restorasi Fotoku</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#services">Layanan</Link></li>
            <li><Link href="#portfolio">Portofolio</Link></li>
            <li><Link href="#pricing">Harga</Link></li>
            <li><Link href="#faq">FAQ</Link></li>
            <li><Link href="#contact">Kontak</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
`,
  },
  {
    path: 'app/components/HeroSection.js',
    content: `export default function HeroSection() {
  return (
    <section className="bg-cover bg-center h-screen text-white flex items-center justify-center"
      style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
      <div className="text-center bg-black bg-opacity-50 p-10 rounded-lg">
        <h2 className="text-4xl font-bold mb-4">Jasa Restorasi Foto Terpercaya, Profesional, dan Termurah</h2>
        <p className="text-lg mb-6">Kami memberikan layanan restorasi foto terbaik dengan teknologi canggih dan harga terjangkau.</p>
        <a href="#contact" className="bg-blue-500 text-white px-4 py-2 rounded">Pesan Sekarang</a>
      </div>
    </section>
  );
}
`,
  },
  {
    path: 'app/components/Services.js',
    content: `export default function Services() {
  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Siapa Saja yang Bisa Menggunakan Layanan Ini?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Kalangan Penyidik</h3>
            <p>Restorasi foto untuk keperluan investigasi dengan memperjelas rekaman CCTV.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Kalangan Pribadi</h3>
            <p>Memperjelas foto orang tua yang telah meninggal atau foto kenangan lainnya.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
`,
  },
  {
    path: 'app/components/Portfolio.js',
    content: `export default function Portfolio() {
  return (
    <section id="portfolio" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Portofolio Restorasi Foto</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img src="/path-to-before-after-image.jpg" alt="Before After" className="mb-4"/>
            <p className="text-center">Before & After</p>
          </div>
        </div>
      </div>
    </section>
  );
}
`,
  },
  {
    path: 'app/components/Pricing.js',
    content: `export default function Pricing() {
  return (
    <section id="pricing" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Harga Jasa Restorasi Foto</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Harga Satuan</h3>
            <p>Rp 150.000 - Rp 250.000 per foto</p>
            <p>Waktu penyelesaian 3 sampai 9 jam.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Paket Ekonomis</h3>
            <p>450 ribu untuk 3 foto.</p>
            <p>Waktu penyelesaian 3 sampai 10 jam.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Paket Eksekutif</h3>
            <p>550 ribu untuk 4 foto.</p>
            <p>Waktu penyelesaian 7 sampai 10 jam.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
`,
  },
  {
    path: 'app/components/FAQ.js',
    content: `export default function FAQ() {
  return (
    <section id="faq" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">FAQ</h2>
        <div className="space-y-4">
          <details className="p-4 bg-gray-100 rounded-lg shadow">
            <summary className="font-semibold">Jika hasil restorasi kurang bagus, adakah gratis revisi?</summary>
            <p className="mt-2">Iya, ada revisi gratis sebanyak 1 kali yang bisa dimanfaatkan bagi konsumen.</p>
          </details>
          <details className="p-4 bg-gray-100 rounded-lg shadow">
            <summary className="font-semibold">Apakah bisa merestorasi foto dengan wajah yang sudah hancur sama sekali?</summary>
            <p className="mt-2">Bisa, kami dapat melakukan restorasi foto dengan maksimal kerusakan 98 persen.</p>
          </details>
          <details className="p-4 bg-gray-100 rounded-lg shadow">
            <summary className="font-semibold">Apakah bisa memperbaiki foto yang buram ketika akan dicetak menjadi foto yang super tajam?</summary>
            <p className="mt-2">Iya, kami bisa memperbaiki foto yang buram menjadi foto yang tajam dengan menambahkan kepadatan pixel.</p>
          </details>
        </div>
      </div>
    </section>
  );
}
`,
  },
  {
    path: 'app/components/Contact.js',
    content: `export default function Contact() {
  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Kontak yang Dapat Dihubungi</h2>
        <p className="mb-4">WA: 6281229136836</p>
        <p className="mb-8">Email: restorasifotoku@gmail.com</p>
        <a href="https://wa.me/6281229136836" className="bg-blue-500 text-white px-6 py-2 rounded">Hubungi Kami</a>
      </div>
    </section>
  );
}
`,
  },
  {
    path: 'app/page.js',
    content: `import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Portfolio />
      <Pricing />
      <FAQ />
      <Contact />
    </>
  );
}
`,
  },
  {
    path: 'app/styles/globals.css',
    content: `@tailwind base;
@tailwind components;
@tailwind utilities;
`,
  },
];

// Buat direktori
directories.forEach(dir => {
  const fullPath = path.join(__dirname, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`Directory created: ${fullPath}`);
  }
});

// Buat file dan isi konten
files.forEach(file => {
  const fullPath = path.join(__dirname, file.path);
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, file.content);
    console.log(`File created: ${fullPath}`);
  } else {
    console.log(`File already exists: ${fullPath}`);
  }
});
