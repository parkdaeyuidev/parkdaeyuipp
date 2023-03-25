import { css } from '@emotion/react';
import TextArea from '../TextArea';

export default function Skills(): React.ReactElement {
  return (
    <>
      <section
        css={css`
          display: flex;
          flex-direction: column;
          width: 800px;
          height: 100vh;
        `}
      >
        <div
          css={css`
            flex: 1;
            background-color: white;
          `}
        ></div>
        <div>
          <div
            css={css`
              flex-basis: 100px;
              padding: 10px;
            `}
          >
            <TextArea>
              <h3>Overall & Communication</h3>
            </TextArea>
          </div>
          <div
            css={css`
              background-color: white;
              color: black;
            `}
          >
            <TextArea>
              <div
                css={css`
                  padding: 20px;
                `}
              >
                <ul>
                  <li>
                    문제를 해결하는데 있어 아는 것과 모르는 것을 정확히 파악해 이를 공유, 대충 얼버무리지 않습니다.
                  </li>
                  <li>개발한 기능의 로직과 동작을 협업하는 사람들에게 쉽게 설명 할 수 있습니다.</li>
                  <li>플랫폼 서비스 개발 경험을 기반으로 앱 내 비즈니스 로직을 파악해 개선할 수 있습니다.</li>
                  <li>주어진 업무만 수행하는 코더가 아닌 사업을 이끌어가는 팀의 일원으로서 함께 고민합니다.</li>
                </ul>
              </div>
            </TextArea>
          </div>
          <div
            css={css`
              flex-basis: 100px;
              padding: 10px;
            `}
          >
            <TextArea>
              <h3>Web</h3>
            </TextArea>
          </div>
          <div
            css={css`
              background-color: white;
              color: black;
            `}
          >
            <TextArea>
              <div>
                <ul>
                  <li>검색 엔진 최적화 경험이 있습니다.</li>
                  <li>크로스 브라우징 최적화 경험이 있습니다.</li>
                  <li>모바일 브라우저의 트러블 슈팅 경험이 있습니다.</li>
                  <li>네이티브 앱과 앱 내 웹뷰간의 동작을 다뤄 본 경험이 있습니다.</li>
                </ul>
              </div>
            </TextArea>
          </div>
          <div
            css={css`
              flex-basis: 100px;
              padding: 10px;
            `}
          >
            <TextArea>
              <h3>Javascript</h3>
            </TextArea>
          </div>
          <div
            css={css`
              background-color: white;
              color: black;
            `}
          >
            <TextArea>
              <div
                css={css`
                  padding: 20px;
                `}
              >
                <ul>
                  <li>Javascript와 Typescript에 능숙합니다.</li>
                  <li>생태계 내 여러 개발도구를 비교 분석해 적합한 도구를 선택해 본 경험이 있습니다.</li>
                  <li>Webpack을 세팅해 번들링 파일을 생성할 수 있습니다.</li>
                </ul>
              </div>
            </TextArea>
          </div>
          <div
            css={css`
              flex-basis: 100px;
              padding: 10px;
            `}
          >
            <TextArea>
              <h3>React</h3>
            </TextArea>
          </div>
          <div
            css={css`
              background-color: white;
              color: black;
            `}
          >
            <TextArea>
              <div
                css={css`
                  padding: 20px;
                `}
              >
                <ul>
                  <li>비즈니스 로직에 맞춰 적절한 컴포넌트 함수를 만들기 위해 고민합니다.</li>
                  <li>공통으로 쓰이는 로직을 hook을 이용해 모듈화하여 사용합니다.</li>
                </ul>
              </div>
            </TextArea>
          </div>
        </div>
        <div
          css={css`
            flex: 1;
            background-color: white;
          `}
        ></div>
      </section>
    </>
  );
}
