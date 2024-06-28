import Image from "next/image";

const TeamSection = () => (
  <section
    id="team"
    className="py-8 bg-black text-white flex justify-center items-center w-full"
  >
    <div className="w-full md:w-3/4 flex flex-col justify-center items-center md:items-start">
      <h2 className="text-4xl md:text-5xl leading-10 font-extrabold italic uppercase">
        Meet Our Team
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start w-full mt-8 text-white">
        <div className="flex flex-col md:mr-8 mb-8 md:mb-0 w-[90%]">
          <div className="flex flex-col items-center relative">
            <Image
              src="assets/img/team-1.svg"
              alt="team-1"
              width={0}
              height={0}
              className="w-full"
            />
            <div className="flex flex-col py-5 md:py-7 px-7 rounded-[1.25rem] bg-blue-2 w-[90%] -translate-y-[20%] absolute bottom-0">
              <span className="font-medium text-2xl md:text-3xl">@cheddar</span>
              <span className="font-normal text-base mt-1">Art Director</span>
              <Image
                src="assets/img/x.svg"
                alt="x"
                width={0}
                height={0}
                className="w-5 absolute bottom-8 md:bottom-12 right-8 md:right-12"
              />
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center relative">
            <Image
              src="assets/img/team-2.svg"
              alt="team-2"
              width={0}
              height={0}
              className="w-full"
            />
            <div className="flex flex-col py-5 md:py-7 px-7 rounded-[1.25rem] bg-black w-[90%] -translate-y-[20%] absolute bottom-0">
              <span className="font-medium text-2xl md:text-3xl">@cheddar</span>
              <span className="font-normal text-base mt-1">Art Director</span>
              <Image
                src="assets/img/x.svg"
                alt="x"
                width={0}
                height={0}
                className="w-5 absolute bottom-8 md:bottom-12 right-8 md:right-12"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[90%]">
          <div className="flex flex-col items-center relative">
            <Image
              src="assets/img/team-3.svg"
              alt="team-3"
              width={0}
              height={0}
              className="w-full"
            />
            <div className="flex flex-col py-5 md:py-7 px-7 rounded-[1.25rem] bg-black w-[90%] -translate-y-[20%] absolute bottom-0">
              <span className="font-medium text-2xl md:text-3xl">@cheddar</span>
              <span className="font-normal text-base mt-1">Art Director</span>
              <Image
                src="assets/img/x.svg"
                alt="x"
                width={0}
                height={0}
                className="w-5 absolute bottom-8 md:bottom-12 right-8 md:right-12"
              />
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center relative">
            <Image
              src="assets/img/team-4.svg"
              alt="team-4"
              width={0}
              height={0}
              className="w-full"
            />
            <div className="flex flex-col py-5 md:py-7 px-7 rounded-[1.25rem] bg-black w-[90%] -translate-y-[20%] absolute bottom-0">
              <span className="font-medium text-2xl md:text-3xl">@cheddar</span>
              <span className="font-normal text-base mt-1">Art Director</span>
              <Image
                src="assets/img/x.svg"
                alt="x"
                width={0}
                height={0}
                className="w-5 absolute bottom-8 md:bottom-12 right-8 md:right-12"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TeamSection;
