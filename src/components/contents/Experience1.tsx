import { css } from '@emotion/react';
import { useInView } from 'react-intersection-observer';
import TextArea from '../TextArea';
import * as CS from './common.style';

export default function Experience1(): React.ReactElement {
  const { ref, inView } = useInView();

  return (
    <>
      <section
        ref={ref}
        css={css`
          display: flex;
          width: 800px;
        `}
      >
        <div
          css={css`
            flex-basis: 350px;
            padding: 10px;
          `}
        >
          <TextArea>
            <h3>반려의 고수</h3>
            <div>2022.08 ~ 현재</div>
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
            <h3>반려동물 수첩 기능</h3>
            <br />
            <h4>Description.</h4>
            <div>서비스 내 기능중 일부인 반려견 건강체크 기능을 개발하였습니다</div>
            <br />
            <h4>What did I do.</h4>
            <div>반려견 건강체크, 음수 급여량체크 기능, 접종&진료 기능 개발</div>
            <br />
            <h4>Tech Stack.</h4>
            <div>Next.Js, TypeScript, React-Query </div>
          </TextArea>
        </div>
      </section>
    </>
  );
}
