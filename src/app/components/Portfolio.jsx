import Image from "next/image";
import Section from "./ui/Section";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-light py-12">
      <Section
        title={"Portofolio"}
        subtitle={
          <p>
            Kami telah mempunyai beberapa portofolio terkait dengan proyek
            restorasi foto yang telah berhasil kami selesaikan. <br /> Berikut
            beberapa portofolio yang berhasil kami selesaikan:
          </p>
        }
      >
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
          <div className="relative w-full h-full">
            <Image
              src={"/images/portofolio/1.jpeg"}
              alt=""
              height={225}
              width={400}
              className="p-4 w-full h-auto object-contain"
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src={"/images/portofolio/2.jpeg"}
              alt=""
              height={225}
              width={400}
              className="p-4 w-full h-auto object-contain"
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src={"/images/portofolio/3.jpeg"}
              alt=""
              height={225}
              width={400}
              className="p-4 w-full h-auto object-contain"
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src={"/images/portofolio/4.jpeg"}
              alt=""
              height={225}
              width={400}
              className="p-4 w-full h-auto object-contain"
            />
          </div>
        </div>
      </Section>
    </section>
  );
}
