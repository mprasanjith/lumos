import Link from "next/link";

const HomePageHero = () => (
  <section className="flex flex-col items-center">
    <div className="max-w-xl flex flex-col items-center text-center pt-8 lg:pt-32 pb-0 sm:pb-16 lg:pb-32">
      <p className="text-indigo-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">
        Introducing Lumos
      </p>

      <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">
        The support system for Parkinson&apos;s Disease
      </h1>

      <p className="text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">
        Please login to your account to manage your data
      </p>

      <div className="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
        <Link href="/login">
          <a className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
            Login now
          </a>
        </Link>
      </div>
    </div>
  </section>
);

export default HomePageHero;
