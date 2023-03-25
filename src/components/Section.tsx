import { css } from '@emotion/react';
interface IProps {
  isBackground?: boolean;
}

export default function Section({ children, isBackground = true }: React.PropsWithChildren<IProps>) {
  return (
    <section className="phraseFrame">
      <div
        css={css`
          color: black;
          background-color: ${isBackground ? 'white' : 'none'};
          padding: 40px;
          @media screen and (max-width: 960px) {
            padding: 40px 20px;
          }
        `}
      >
        {children}
      </div>
    </section>
  );
}
