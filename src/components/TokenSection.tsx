import Image from "next/image";

const TokenSection = () => (
  <section className="bg-black text-white mt-20 md:mt-32 relative flex flex-col items-center w-full">
    <Image
      src="assets/img/ico-t.svg"
      alt="ico-top"
      width={0}
      height={0}
      className="hidden ms:block absolute top-0 left-[30%] w-1/3 z-10 -translate-y-[20%]"
    />
    <Image
      src="assets/img/ico-l.svg"
      alt="ico-top"
      width={0}
      height={0}
      className="hidden ms:block absolute top-0 left-0 w-1/2 z-10 -translate-y-[7%]"
    />
    <Image
      src="assets/img/ico-r.svg"
      alt="ico-top"
      width={0}
      height={0}
      className="hidden ms:block absolute top-0 right-0 w-1/3 z-10 translate-y-[5%]"
    />
    <div className="w-full bg-blue-1 text-center py-20 md:py-64 relative overflow-hidden">
      <div className="absolute left-0 top-2 md:top-0 w-1/6 md:w-1/4 h-full bg-gradient-to-l from-blue-1 bg-black" />
      <div className="absolute right-0 top-2 md:top-0 w-1/6 md:w-1/4 h-full bg-gradient-to-r from-blue-1 bg-black" />
      <div className="absolute -left-[10vw] top-0 w-[120vw] h-[25vw] bg-black rounded-[50%] -translate-y-[70%]" />
      <div className="flex flex-col w-full h-full items-center relative bg-transparent z-10">
        <h2 className="text-4xl md:text-5xl leading-10 font-extrabold uppercase italic mb-1">
          {"$STREAM: Tokenized"}
        </h2>
        <h2 className="text-4xl md:text-5xl leading-10 font-extrabold uppercase italic">
          {"Entertainment"}
        </h2>
      </div>
      <div className="absolute -left-[10vw] bottom-0 w-[120vw] h-[25vw] bg-black rounded-[50%] translate-y-[70%]" />
    </div>
    <div className="w-full md:w-[40%] text-center flex flex-col items-center md:-translate-y-14">
      <p className="text-base font-normal text-grey-4 text-center px-10 md:px-0">
        Powering the entire ecosystem, {"$STREAM"} is essential for accessing
        our platform's movies, series, and TV shows. Simply connect your wallet
        and hold at least 1 {"$STREAM"} token to unlock a world of
        entertainment.
      </p>
      <div className="w-[90%] md:w-4/5 flex flex-col items-center">
        <div className="flex flex-row justify-center items-center mt-9 w-full text-grey-2">
          <div className="h-14 bg-grey-5/80 flex justify-center items-center w-[40%] rounded">
            <span className="text-3xl font-medium me-6">S</span>
            <p className="text-base font-normal">50.000</p>
          </div>
          <div className="h-14 bg-grey-5/80 flex justify-start items-center w-[40%] rounded ms-4">
            <Image
              src="assets/img/solana.svg"
              alt="solana"
              width={0}
              height={0}
              className="w-[15%] mx-5"
            />
            <p className="text-base font-normal">Solana</p>
          </div>
        </div>
        <div className="h-14 bg-grey-5/80 flex justify-center items-center w-[87%] rounded mt-3 self-center">
          <p className="text-base font-normal text-center text-ellipsis overflow-hidden">
            HN7cABqLq46Es1jh92dQQisAq662SmxELLLsHHe4YWrH
          </p>
        </div>
      </div>
      <button className="bg-blue-1 hover:bg-blue-1 text-white font-semibold mt-9 ms-1 py-4 px-12 rounded text-base text-center mb-20 md:mb-0">
        Open Presale
      </button>
    </div>
  </section>
);

export default TokenSection;
