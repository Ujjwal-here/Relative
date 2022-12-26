import React from "react";

const Card = ({
  image,
  className,
  name,
  price,
  per,
  block1,
  block2,
  block3,
}) => {
  return (
    <div className="h-full w-full relative">
      <div
        className={`absolute left-0 right-0 ml-auto mr-auto w-fit -top-14 bg-gradient-to-b from-[#ecf0ff3b] to-[#13162a] rounded-full p-px`}
      >
        <div className={`p-8 rounded-full bg-gradient-to-b ${className}`}>
          <img style={{ width: "2.5em" }} src={image} alt={image} />
        </div>
      </div>

      <img
        className="h-full w-full absolute top-0 -z-50"
        src="card-bg.svg"
        alt="bg"
      />
      <div className="h-full text-center flex flex-col gap-4 pt-20">
        <p className="text-heading-primary font-semibold text-xs w-full">
          {name}
        </p>
        <div className="bg-gradient-to-b from-[#ecf0ff3b] to-[#13162a] p-px mx-8 rounded-3xl ">
          <p className="text-[#ECF0FF] relative font-semibold text-base bg-card-ele-bg p-2 rounded-3xl">
            {price}
            <span
              className={`absolute text-xs right-3 top-3 ${
                per[0] === "-" ? "text-red-500" : "text-green-500"
              }`}
            >
              {per}
            </span>
          </p>
        </div>
        <p className="text-heading-secondary font-semibold text-xs w-full">
          Price
        </p>
        <div
          className={`bg-gradient-to-b from-[#ecf0ff3b] to-[#13162a] p-px mx-8 rounded-3xl`}
        >
          <p className="text-[#ECF0FF] font-semibold text-base bg-card-ele-bg p-2 rounded-3xl ">
            $60,000
          </p>
        </div>

        <p className="text-heading-secondary font-semibold text-xs w-full">
          TVL
        </p>
        <div className="flex flex-row bg-card-ele-bg p-3 mx-auto w-fit rounded-3xl gap-4">
          <img className="w-5" src={block1} alt={block1} />
          <img className="w-5" src={block2} alt={block2} />
          <img className="w-5" src={block3} alt={block3} />
        </div>
        <p className="text-heading-secondary font-semibold text-xs w-full mb-4">
          Popular pairs
        </p>
      </div>
    </div>
  );
};

export default Card;
