import React from "react";
import Section from "./ui/Section";
import Card from "./ui/Card";
import { FaUniversity, FaWallet } from "react-icons/fa";

const MetodePembayaran = () => {
  return (
    <section id="pembayaran" className="bg-white py-12">
      <Section
        title={"Metode Pembayaran Jasa Restorasi Foto"}
        subtitle={
          <p>
            Konsumen bisa melakukan pembayaran layanan di tempat kami dengan berbagai metode yang bisa dipilih. Adapun metode pembayaran yang tersedia adalah sebagai berikut:
          </p>
        }
      >
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
          <Card
            icon={<FaUniversity color="white" />}
            title={"Transfer Bank"}
            description={
              <ul className="text-left text-slate-500 list-disc">
                <li>BCA</li>
                <li>MANDIRI</li>
                <li>BNI</li>
                <li>BRI</li>
                <li>BTN</li>
                <li>CIMB NIAGA</li>
                <li>BSI SYARIAH</li>
              </ul>
            }
          />
          <Card
            icon={<FaWallet color="white" />}
            title={"Dompet Digital"}
            description={
              <ul className="text-left text-slate-500 list-disc">
                <li>OVO</li>
                <li>GOPAY</li>
                <li>DANA</li>
                <li>LINK AJA</li>
              </ul>
            }
          />
        </div>
        <p className="mt-4 text-slate-500">
          Silakan pilih salah satu metode pembayaran yang menurut Anda paling kecil potongan administrasinya.
        </p>
      </Section>
    </section>
  );
};

export default MetodePembayaran;
