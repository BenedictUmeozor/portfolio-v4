"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

export const ElementInView = ({
  children,
  hash,
  className = "",
}: {
  children: ReactNode;
  hash: string;
  className?: string;
}) => {
  const router = useRouter();

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && window.innerWidth > 768) {
      // window.location.hash = hash;
      router.push("/#" + hash);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, hash]);

  return (
    <div id={hash} ref={ref} className={className}>
      {children}
    </div>
  );
};
