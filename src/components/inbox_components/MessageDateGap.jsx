import { useEffect, useRef, useState } from "react";
import HorizontalLine from "./HorizontalLine";
import PropTypes from "prop-types";

export default function MessageDateGap({ date, textColor, lineColor }) {
  const elementRef = useRef(null);
  const [isStickyActive, setIsStickyActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("isOutsideParent?", !entry.isIntersecting);
        console.log("Status isStickyActive", isStickyActive);
        if (entry.isIntersecting) {
          setIsStickyActive(false);
        }
        if (!entry.isIntersecting) {
          setIsStickyActive(true);
        }
      },
      {
        root: null, // root null berarti menggunakan viewport sebagai root
        threshold: 0, // akan aktif saat elemen benar-benar keluar
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      title={date}
      ref={date === "New Message" ? elementRef : null}
      id="sticky-element"
      className={`flex items-center py-6 ${textColor}  ${
        isStickyActive && "sticky bottom-0"
      }`}
    >
      <HorizontalLine
        className={`w-full ${lineColor} ${isStickyActive && "bg-transparent"}`}
      />
      <p
        className={`text-nowrap mx-6 font-bold ${
          isStickyActive && "bg-stikers-white text-primary-blue"
        }`}
      >
        {date}
      </p>
      <HorizontalLine
        className={`w-full ${lineColor} ${isStickyActive && "bg-transparent"}`}
      />
    </div>
  );
}

MessageDateGap.propTypes = {
  date: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  lineColor: PropTypes.string,
};
