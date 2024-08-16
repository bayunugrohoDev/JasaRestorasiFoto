const fs = require('fs');
const path = require('path');

// Helper function to create a directory if it doesn't exist
function ensureDir(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

// Create components directory
const componentsDir = path.join('components');
ensureDir(componentsDir);

// Create the Header component
const headerComponent = `
export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold">Joki Tugas Teknik Sipil</h1>
        <p className="mt-4">Siap untuk membantu mengerjakan berbagai soal teknik sipil</p>
        <div className="mt-8">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Pelajari lebih lanjut</button>
          <button className="ml-4 border border-white text-white py-2 px-4 rounded">Kontak</button>
        </div>
      </div>
    </header>
  );
}
`;
fs.writeFileSync(path.join(componentsDir, 'Header.js'), headerComponent);

// Create the Skills component
const skillsComponent = `
export default function Skills() {
  const skills = [
    { title: 'Statika', description: 'Kelas peris...rangka batang' },
    { title: 'Mekanika Bahan', description: 'Tekan, ...unit load' },
    { title: 'Beton', description: 'Balok tulangan tunggal ...2 sisi' },
    // add other skills here
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Keahlian</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded shadow-md">
              <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
fs.writeFileSync(path.join(componentsDir, 'Skills.js'), skillsComponent);

// Create the Pricing component
const pricingComponent = `
export default function Pricing() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Biaya</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="p-8 bg-white rounded shadow-md">
            <h3 className="text-2xl font-bold">Gratis</h3>
            <p className="mt-4">0 rb / soal</p>
            <ul className="mt-4 text-left">
              <li>✔ Tanya-tanya rumus dan software</li>
            </ul>
            <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded">Hubungi WA</button>
          </div>
          <div className="p-8 bg-white rounded shadow-md">
            <h3 className="text-2xl font-bold">Hemat</h3>
            <p className="mt-4">10 rb / soal</p>
            <ul className="mt-4 text-left">
              <li>✔ Tanya-tanya rumus dan software</li>
              <li>✔ Joki tugas</li>
            </ul>
            <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded">Hubungi WA</button>
          </div>
        </div>
      </div>
    </section>
  );
}
`;
fs.writeFileSync(path.join(componentsDir, 'Pricing.js'), pricingComponent);

// Create the Testimonials component
const testimonialsComponent = `
export default function Testimonials() {
  const testimonials = [
    { text: 'Wahhh... 🙏🙏🙏', user: 'Pengguna jasa' },
    { text: 'Jangan kapok ya... 😊', user: 'Pengguna jasa' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Testimoni</h2>
        <div className="mt-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded shadow-md">
              <p>{testimonial.text}</p>
              <p className="mt-2 text-gray-500">— {testimonial.user}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
fs.writeFileSync(path.join(componentsDir, 'Testimonials.js'), testimonialsComponent);

// Create the FAQ component
const faqComponent = `
export default function FAQ() {
  const faqs = [
    {
      question: 'Apakah cara pengerjaannya bisa disamakan dengan perhitungan dari contoh yang dilampirkan?',
      answer: 'Bervariasi antara 50% sampai 90%...'
    },
    // add other FAQs here
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Tanya Jawab</h2>
        <div className="mt-8">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-bold">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
fs.writeFileSync(path.join(componentsDir, 'FAQ.js'), faqComponent);

// Create the main page
const pagesDir = path.join('app');
ensureDir(pagesDir);

const pageContent = `
import Header from '../components/Header';
import Skills from '../components/Skills';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <div>
      <Header />
      <Skills />
      <Pricing />
      <Testimonials />
      <FAQ />
    </div>
  );
}
`;
fs.writeFileSync(path.join(pagesDir, 'page.js'), pageContent);

console.log('Next.js components and pages have been generated successfully!');
