import { css } from '@emotion/react';
import { useInView } from 'react-intersection-observer';
import TextArea from '../TextArea';
import * as CS from './common.style';

export default function Contact(): React.ReactElement {
  return (
    <>
      <section
        css={css`
          display: flex;
          width: 800px;
          height: 100vh;
        `}
      >
        <div
          css={css`
            flex-basis: 350px;
            padding: 10px;
          `}
        >
          <TextArea>
            <h1>연락주세요!</h1>
            <div>Contact.</div>
          </TextArea>
        </div>
        <div
          css={css`
            flex: 1;
            background-color: white;
            color: black;
            padding: 10px;
          `}
        >
          <TextArea>
            <h3>Email</h3>
            <h3>Github</h3>
            <h3>Instagram</h3>
          </TextArea>
        </div>
      </section>
    </>
  );
}
