import React from "react";
import { Link } from "react-router";

function Productcard(props) {
  return (
    <div
      className="group relative h-96 w-72 overflow-hidden
rounded-2xl bg-gray-900 cursor-pointer"
    >
      {/* Movie poster */}
      <img
        src={import.meta.env.VITE_IMAGE_PATH + props.path}
        alt={props.title}
        className="absolute inset-0 h-full w-full object-cover
          transition-transform duration-700 ease-out
          group-hover:scale-110"
      />

      {/* Dark gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-t
        from-black via-black/30 to-transparent"
      />

      {/* Rating fixed at top-right */}
      <div
  className="absolute right-3 top-3 z-20
  inline-flex items-center gap-1
  px-2 py-1
  text-sm font-semibold text-white"
>
  <span className="text-yellow-400">
    ⭐ {props.rating}/10
  </span>
</div>

      {/* Movie details at bottom */}
      <div
        className="absolute inset-x-0 bottom-0 p-5
        transition-transform duration-500
        group-hover:-translate-y-2"
      >
        <span
          className="rounded-full bg-white/20 px-3 py-1
          text-xs text-white backdrop-blur-sm"
        >
          Sci-Fi
        </span>

        <h2 className="mt-3 text-2xl font-bold text-white">
          <Link to={"/single-movie/" + props.id}>{props.title}</Link>
        </h2>

        <p className="mt-1 text-sm text-gray-300">{props.date}</p>

        {/* Description appears on hover */}
        <div
          className="grid grid-rows-[0fr] opacity-0
          transition-all duration-500 ease-in-out
          group-hover:mt-3 group-hover:grid-rows-[1fr]
          group-hover:opacity-100"
        >
          <div className="overflow-hidden">
            <p className="line-clamp-3 text-sm leading-relaxed text-gray-200">
              {props.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productcard;
