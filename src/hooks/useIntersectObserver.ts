import { useEffect, useRef } from "react";

export default function useIntersectObserver({
  onIntersect,
  threshold = 0.7,
}: {
  onIntersect: () => void;
  threshold?: number;
}) {
  const target = useRef(null);

  useEffect(() => {
    let observer = new IntersectionObserver(
      ([entry], observer) => {
        if (threshold > 1 || threshold < 0) {
          alert("threshold는 0 이상 1 이하입니다.");
          return;
        }
        if (entry.isIntersecting) {
          onIntersect();
          observer.disconnect();
        }
      },
      {
        threshold,
      }
    );

    if (target.current !== null) {
      observer.observe(target.current);

      return;
    }

    return () => {
      observer.disconnect();
    };
  }, [target.current]);

  return { target };
}
