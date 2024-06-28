import Image from "next/image";

const FilmLibrarySection = () => (
    <section id="our-film-library" className="px-4 pt-60 bg-black text-white text-center relative w-full">
        <div className="absolute top-0 left-0 md:left-1/4 translate-y-3 md:-translate-y-[40%] z-20 w-full md:w-3/5">
            <Image src="assets/img/platform.svg" alt="platform" width={0} height={0} className="w-full object-cover" />
            <div className="h-12 md:h-[5.5rem] bg-gradient-to-t from-black/70 via-black/30 to-transparent from-30% via-70% w-full absolute bottom-0" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-30">
            <h2 className="text-5xl uppercase italic font-extrabold leading-[3.5rem]">Our Film Library</h2>
            <p className="mt-9 text-grey-2 font-normal text-base text-balance">Explore our extensive film collection, powered by $STREAM, and discover a diverse range of movies, series, and TV shows. From timeless classics to the latest releases, our curated selection offers something for every taste. With content securely uploaded on-chain, enjoy censorship-resistant viewing at your fingertips. Dive in and connect your wallet to unlock exclusive access to premium content.</p>
            <button className="bg-blue-1 hover:bg-blue-1 text-white font-semibold ms-1 py-4 px-12 rounded text-base text-center mt-10">
                Download App
            </button>
        </div>
    </section>
);

export default FilmLibrarySection;
