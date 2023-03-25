import { css } from '@emotion/react';
import TextArea from '../TextArea';

export default function Experience2(): React.ReactElement {
  return (
    <>
      <section
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
            <h3>놀이의 발견</h3>
            <div>2018.08 ~ 2022.06</div>
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
            <h3>씽크빅 회원 전용 '놀이의 발견' 런칭 및 유지보수</h3>
            <div>2018.12 ~</div>
            <br />
            <h4>Description.</h4>
            <div>
              웅진씽크빅 회원 대상으로 운영 중인 네이티브 서비스 내에 Django 기반의 '놀이의 발견' 웹앱을 개발했습니다.
            </div>
            <br />
            <h4>What did I do.</h4>
            <div>- 단독 프로젝트로 앱 내 모든 기능 개발</div>
            <div>
              - HTML,CSS, JQUERY, Django 를 주요 기술스택으로 최초 서비스를 런칭, 이후 WEBPACK 을 도입하여 VanilaJS,
              React, TypeScript 기반의 리부팅 진행했습니다.
            </div>
            <br />
            <h4>Tech Stack.</h4>
            <div>
              React, Vue, Redux-Saga, Redux-toolkit, VanilaJS, Jquery, Axios, TypeScript, scss, styledComponent,
              Webpack, Django, Git, Google Analytics, Firebase
            </div>
          </TextArea>
        </div>
      </section>
    </>
  );
}
