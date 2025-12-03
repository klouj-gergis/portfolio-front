import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export default function Counter({ start = 0, end = 100, duration = 2000, title, note = "" }) {
  const [value, setValue] = useState(start);
  const ref = useRef(start);
  const elRef = useRef(null);

  // Watch the actual element
  const isInView = useInView(elRef, { once: false });

  const counter = end / 200;

  const count = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + counter);
      setValue(result);
      ref.current = result;

      setTimeout(count, duration / (end - start)); // continue
    }
  };

  useEffect(() => {
    if (isInView) {
      // Reset when entering the viewport
      ref.current = start;
      setValue(start);

      count();
    }
  }, [isInView, start, end]);

  const letters = title ? title.split("") : [];
  
  return (
    <div className="flex flex-col">
        <h4 className="flex justify-between w-full">
          {letters.map((letter, index) => (
            letter === " " ? (<span key={index} className="">&nbsp;</span> ) : (
              <span key={index} className="font-semibold text-xl">{letter}</span>)
          ))}
        </h4>
        <span className="text-9xl" ref={elRef}>{value}{note}+</span>
      </div>
  );
}
