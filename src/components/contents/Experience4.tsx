import { css } from '@emotion/react';
import TextArea from '../TextArea';

export default function Experience4(): React.ReactElement {
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
            <h3>이벤트 페이지 자동화 시스템 개발 및 유지보수</h3>
            <div>2020.10 ~</div>
            <br />
            <h4>Description.</h4>
            <div>서비스 내 이벤트 페이지르 관리자 페이지에서 코딩 없이 생성할 수 있도록 개발하였습니다.</div>
            <br />
            <h4>What did I do.</h4>
            <div>- 앱 내 이벤트 페이지에서 반복되는 기능들을 백엔드 팀과 협의해 자동으로 생성되도록 개발</div>
            <div>
              - Android,iOS,Web에서 이벤트 내 버튼 클릭시 해당 플랫폼에 맞는 요청이 실행되도록 브릿지 통신을 개발
            </div>
            <br />
            <h4>Tech Stack.</h4>
            <div>React,WebPack, VanilaJS, StyledComponent, Css, Django, Git, Jira, Confluence</div>
          </TextArea>
        </div>
      </section>
    </>
  );
}
