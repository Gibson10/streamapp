const RoadmapSection = () => (
  <section
    id="roadmap"
    className="py-10 md:py-16 bg-black text-white border-t border-t-grey-6 flex flex-col md:flex-row items-center md:items-start w-full"
  >
    <div className="md:-translate-x-[3%] relative">
      <h2
        style={{
          textShadow:
            "-1px 1px 0px #3B3C3F, 1px 1px 0px #3B3C3F, 1px -1px 0px #3B3C3F, -1px -1px 0px #3B3C3F",
        }}
        className="m-0 uppercase font-black text-[7rem] md:text-[12rem] tracking-widest text-black italic leading-[7rem] md:leading-[14rem] text-center"
      >
        Road
      </h2>
      <h2
        style={{
          textShadow:
            "-1px 1px 0px #3B3C3F, 1px 1px 0px #3B3C3F, 1px -1px 0px #3B3C3F, -1px -1px 0px #3B3C3F",
        }}
        className="m-0 uppercase font-black text-[7rem] md:text-[12rem] tracking-widest text-black italic leading-[7rem] md:leading-[14rem] text-center"
      >
        Map
      </h2>
      <h2 className="absolute top-12 left-20 md:top-20 md:right-16 m-0 uppercase font-black text-4xl md:text-5xl tracking-widest text-white italic md:leading-10">
        Roadmap
      </h2>
    </div>
    <div className="md:ml-20 md:w-1/3 w-4/5 mt-20">
      <ol className="relative border-s border-grey-6">
        <li className="ps-10 md:ps-20 mb-10 border-s-2 border-blue-1 -translate-x-px">
          <div className="absolute w-7 h-7 bg-black -start-[14.5px] border-2 border-blue-1 rotate-45 flex items-center justify-center">
            <div className="w-3 h-3 bg-blue-1" />
          </div>
          <button className="text-white font-semibold text-sm bg-blue-1 px-7 py-2 rounded-full">
            Stage 1
          </button>
          <h3 className="text-lg font-semibold text-white mt-2">
            Design and development
          </h3>
          <p className="mb-4 text-sm font-normal text-grey-4 mt-4">
            {
              "Powering the entire ecosystem, $STREAM is essential for accessing our platform's movies, series, and TV shows. Simply connect your wallet and hold at least 1 $STREAM token to unlock a world of entertainment."
            }
          </p>
        </li>
        <li className="ps-10 md:ps-20 mb-10">
          <div className="absolute w-7 h-7 bg-black -start-[14.5px] border border-grey-6 rotate-45 flex items-center justify-center" />
          <button className="text-white font-semibold text-sm bg-blue-1 px-7 py-2 rounded-full">
            Stage 1
          </button>
          <h3 className="text-lg font-semibold text-white mt-2">
            Design and development
          </h3>
          <p className="mb-4 text-sm font-normal text-grey-4 mt-4">
            {
              "Powering the entire ecosystem, $STREAM is essential for accessing our platform's movies, series, and TV shows. Simply connect your wallet and hold at least 1 $STREAM token to unlock a world of entertainment."
            }
          </p>
        </li>
        <li className="ps-10 md:ps-20 border-s-2 border-black -translate-x-px">
          <div className="absolute w-7 h-7 bg-black -start-[14.5px] border border-grey-6 rotate-45 flex items-center justify-center" />
          <button className="text-white font-semibold text-sm bg-blue-1 px-7 py-2 rounded-full">
            Stage 1
          </button>
          <h3 className="text-lg font-semibold text-white mt-2">
            Design and development
          </h3>
          <p className="mb-4 text-sm font-normal text-grey-4 mt-4">
            {
              "Powering the entire ecosystem, $STREAM is essential for accessing our platform's movies, series, and TV shows. Simply connect your wallet and hold at least 1 $STREAM token to unlock a world of entertainment."
            }
          </p>
        </li>
      </ol>
    </div>
  </section>
);

export default RoadmapSection;
