import { css } from '@emotion/react';
import TextArea from '../TextArea';

export default function Experience3(): React.ReactElement {
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
        ></div>
        <div
          css={css`
            flex: 1;
            background-color: white;
            color: black;
            padding: 10px;
          `}
        >
          <TextArea>
            <h3>pc 및 모바일 브라우저 사용자들을 위한 '놀이의 발견'런칭 및 유지보수</h3>
            <div>https://nolbal.com/</div>
            <div>2021.04 ~</div>
            <br />
            <h4>Description.</h4>
            <div>기존 웹앱을 pc 및 mobile 브라우저에서도 사용할 수 있도록 웹 서비스를 개발하였습니다.</div>
            <br />
            <h4>What did I do.</h4>
            <div>- 팀 내 프로젝트 일정산정 및 업무 분배</div>
            <div>- 검색 엔진 회적화를 위한 서버사이드 페이지 개발</div>
            <div>- 비회원 접속을 위한 토큰 로직 개발</div>
            <div>- 결제하기 모듈 개발</div>
            <br />
            <h4>Tech Stack.</h4>
            <div>
              NextJS, TypeScript, Redux-toolkit, Axios, StyledComponent,Git,Google Analytics, firebase, Git, Jira,
              Confluence
            </div>
          </TextArea>
        </div>
      </section>
    </>
  );
}
