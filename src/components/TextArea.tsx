import { css } from '@emotion/react';
import { useInView } from 'react-intersection-observer';

export default function TextArea({ children }: React.PropsWithChildren) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      css={css`
        opacity: ${inView ? 1 : 0};
        transition: all 1s;
      `}
    >
      {children}
    </div>
  );
}
