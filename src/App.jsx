import { useEffect, useState } from "react";
import data from "./Data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function App() {
  const [index, setIndex] = useState(0);
  const { id, image, name, title, quote } = data[index];

  const prevSlide = () => {
    setIndex((index) => {
      const newIndex = (index - 1 + data.length) % data.length;
      return newIndex;
    });
  };

  const nextSlide = () => {
    setIndex((index) => {
      const newIndex = (index + 1) % data.length;
      return newIndex;
    });
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearInterval(sliderId);
    };
  }, [index]);

  return (
    <>
      <main className="w-[80vw]  mx-auto  max-w-[800px] ">
        <article className=" text-center my-32" key={id}>
          <img
            className="w-[150px] border-4 border-[#ddd6fe] mx-auto mb-5
            object-cover h-[150px] rounded-[50%] shadow-md"
            src={image}
            alt={name}
          />
          <h5 className="text-[1.3rem] tracking-[0.2rem] uppercase text-[#8b64f6]">
            {name}
          </h5>
          <div>
            <button
              type="button"
              className="prev bg-[#64748b] text-white p-2 rounded-md text-lg hover:bg-[#8b5cf6] transition-all float-left"
              onClick={prevSlide}
            >
              <FiChevronLeft />
            </button>
            <button
              type="button "
              className="next bg-[#64748b] text-white p-2 rounded-md text-lg hover:bg-[#8b5cf6] transition-all float-right "
              onClick={nextSlide}
            >
              <FiChevronRight />
            </button>
          </div>
          <p className="py-1 text-zinc-600 capitalize text-[1rem] mb-5 ">
            {title}
          </p>
          <p className="md:px-10 md:leading-8 text-zinc-500">{quote}</p>
          <FaQuoteRight className="mx-auto my-5 text-[#8b5cf6] text-4xl" />
        </article>
      </main>
    </>
  );
}
