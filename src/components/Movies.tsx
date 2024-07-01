"use client"; // Add this at the top of the file

import { Movie } from "@/app/utils";
import Image from "next/image";
import { FC } from "react";

type MoviesProps = {
  list: Movie[];
  title: string;
  progressBar?: boolean;
};

const Movies: FC<MoviesProps> = ({ list, title, progressBar = false }) => {
  return (
    <div className="flex flex-col items-start w-full">
      <h1 className="capitalize font-medium text-3xl md:text-4xl w-fit">
        {title}
      </h1>
      <div
        className="flex flex-row w-full mt-1 overflow-x-scroll py-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style jsx>{`
          ::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {list.map((m) => (
          <div key={m.id} className="w-full rounded flex flex-col py-4 pe-8">
            <div className="w-48 h-72 md:w-56 md:h-80 rounded-lg overflow-hidden">
              <Image
                src={`https://image.tmdb.org/t/p/original${
                  m.poster_path || m.backdrop_path
                }`}
                alt={m.title}
                width={1050}
                height={1050}
                className="w-full h-full object-cover overflow-visible"
              />
            </div>
            <p className="font-medium text-xs mt-4">
              {m.title || m.original_title}
            </p>
            {progressBar && (
              <div className="w-full bg-grey-9 rounded-full h-1.5 mb-4 mt-4">
                <div
                  className="bg-white h-1.5 rounded-full"
                  style={{ width: `${Math.trunc(Math.random() * 100)}%` }}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
