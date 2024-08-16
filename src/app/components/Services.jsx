import { FaRegUser } from "react-icons/fa";
import Card from "./ui/Card";
import Section from "./ui/Section";

export default function Services() {
  return (
    <section id="services" className="bg-white py-12">
      <Section
        title={" Siapa Saja yang Bisa Menggunakan Layanan Ini?"}
        subtitle={
          <p>
            Layanan kami terbuka untuk beragam kalangan. Namun setidaknya ada
            beberapa kalangan yang sering <br /> menggunakan layanan ini yaitu
            sebagai berikut:
          </p>
        }
      >
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
          <Card
            icon={<FaRegUser color="white" />}
            title={"Kalangan Penyidik"}
            description={
              " Restorasi foto untuk keperluan investigasi dengan memperjelas rekaman CCTV"
            }
          />
          <Card
            icon={<FaRegUser color="white" />}
            title={"Kalangan Pribadi"}
            description={
              " Memperjelas foto orang tua yang telah meninggal atau foto kenangan lainnya."
            }
          />
        </div>
      </Section>
    </section>
  );
}
