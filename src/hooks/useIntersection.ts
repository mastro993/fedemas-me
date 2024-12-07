import { useState, useEffect, RefObject } from "react";

const useIntersection = (elementRef: RefObject<any>, rootMargin: string) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin },
    );

    element && observer.observe(element);

    return () => observer.unobserve(element);
  }, [elementRef, rootMargin]);

  return isVisible;
};

export default useIntersection;
