import Image from "next/image";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.vitalia.vitaliaapp&hl=es_MX";

export default function AppBanner() {
  return (
    <section className="w-full py-10 md:py-12 bg-gradient-to-b from-slate-100 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-2xl overflow-hidden shadow-lg"
        >
          <div className="hidden md:block">
            <Image
              src="/banner-aw.jpg"
              alt="Descarga la app Vitalia en Google Play Store - Gestión médica en tu celular"
              width={1200}
              height={300}
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="block md:hidden">
            <Image
              src="/banner-cel.jpg"
              alt="Descarga la app Vitalia en Google Play Store - Gestión médica en tu celular"
              width={800}
              height={533}
              sizes="100vw"
              className="w-full h-auto object-contain"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
