import { css } from "@emotion/react";
import { useInView } from "react-intersection-observer";

export default function PhraseFrame({ children }: React.PropsWithChildren) {
  const { ref, inView } = useInView();

  return <div ref={ref} className='phraseFrame'
    css={css`
    opacity: ${inView ? 1 : 0};
    transition: all 0.5s;
    `}>{children}</div>
}