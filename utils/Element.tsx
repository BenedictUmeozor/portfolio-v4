"use client";

import { useRouter } from "next/navigation";
import React, { useRef, useEffect, useState, ReactNode } from "react";

export const ElementInView = ({
  children,
  hash,
  className = "",
}: {
  children: ReactNode;
  hash: string;
  className?: string;
}) => {
  const [inView, setInView] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
          }
        });
      },
      { threshold: 0.1 } // Fire the callback when at least 50% of the target is visible
    );

    let currentElement = elementRef.current; // Capture the current value of the ref
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  useEffect(() => {
    if (inView && window.innerWidth > 768) {
      // window.location.hash = hash;
      router.push("/#" + hash);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, hash]);

  return (
    <div id={hash} ref={elementRef} className={className}>
      {children}
    </div>
  );
};
