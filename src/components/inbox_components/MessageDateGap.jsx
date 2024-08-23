import { useEffect, useRef, useState } from "react";
import HorizontalLine from "./HorizontalLine";
import PropTypes from "prop-types";

export default function MessageDateGap({ date, textColor, lineColor }) {
  const elementRef = useRef(null); // Ref untuk elemen yang akan diobservasi
  const [isOutsideParent, setIsOutsideParent] = useState(false); // State untuk mendeteksi apakah elemen keluar

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOutsideParent(!entry.isIntersecting); // Update state saat elemen keluar dari parent
      },
      {
        root: elementRef.current?.parentElement, // Parent elemen
        threshold: 0, // Ketika elemen sepenuhnya keluar
      }
    );

    // Hanya observasi jika title adalah "New Message"
    if (elementRef.current) {
      observer.observe(elementRef.current); // Observasi elemen
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current); // Bersihkan observer saat komponen unmount
      }
    };
  }, []);

  return (
    <div
      className={`flex items-center py-6 ${textColor}  ${
        date === "New Message" ? "sticky bottom-0" : ""
      }`}
    >
      {isOutsideParent ? "Elemen keluar dari parent!" : "Elemen dalam parent"}

      <HorizontalLine className={lineColor} />
      <p
        ref={date === "New Message" ? elementRef : null}
        className={`text-nowrap w-min mx-6 font-bold`}
      >
        {date}
      </p>
      <HorizontalLine className={lineColor} />
    </div>
  );
}

MessageDateGap.propTypes = {
  date: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  lineColor: PropTypes.string,
};
