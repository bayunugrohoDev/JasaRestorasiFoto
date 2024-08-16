import React from "react";
import Section from "./ui/Section";

const FAQ = () => {
  return (
    <section id="faq" className="bg-white py-12">
      <Section
        title={"FAQ"}
        subtitle={
          <p>
            Berikut beberapa pertanyaan yang sering diajukan oleh pelanggan kami
            terkait layanan restorasi foto.
          </p>
        }
      >
         <div className="space-y-4 text-left">
          <details className="bg-gray-100 shadow p-4 rounded-lg">
            <summary className="font-semibold">Jika hasil restorasi kurang bagus, adakah gratis revisi?</summary>
            <p className="mt-2">Iya, ada revisi gratis sebanyak 1 kali yang bisa dimanfaatkan bagi konsumen.</p>
          </details>
          <details className="bg-gray-100 shadow p-4 rounded-lg">
            <summary className="font-semibold">Apakah bisa merestorasi foto dengan wajah yang sudah hancur sama sekali?</summary>
            <p className="mt-2">Bisa, kami dapat melakukan restorasi foto dengan maksimal kerusakan 98 persen.</p>
          </details>
          <details className="bg-gray-100 shadow p-4 rounded-lg">
            <summary className="font-semibold">Apakah bisa memperbaiki foto yang buram ketika akan dicetak menjadi foto yang super tajam?</summary>
            <p className="mt-2">Iya, kami bisa memperbaiki foto yang buram menjadi foto yang tajam dengan menambahkan kepadatan pixel.</p>
          </details>
        </div>
      </Section>
    </section>
  );
};

export default FAQ;
