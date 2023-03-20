import { useEffect, useRef, useState } from "react";

export const useScroll = () => {
  const mainElementRef = useRef<HTMLDivElement>(null);
  const scrollElementRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({ height: 0, now: 0, scroll: '' });

  const onScroll = () => {
    const height = scrollElementRef.current!.getBoundingClientRect().height - mainElementRef.current!.getBoundingClientRect().height;
    const nowScrollHeight = scrollElementRef.current!.getBoundingClientRect().top;

    setState(prev => ({
      height: scrollElementRef.current!.getBoundingClientRect().height,
      now: Math.abs(nowScrollHeight),
      scroll: prev.now > Math.abs(nowScrollHeight) ? 'down' : 'up',
    }));
  }

  useEffect(() => {
    mainElementRef.current?.addEventListener("scroll", onScroll);
    return () => mainElementRef.current?.removeEventListener("scroll", onScroll);
  }, []);
  return { state, mainElementRef, scrollElementRef };
}