import Head from 'next/head';
import * as S from './index.style';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import TextArea from '@/components/TextArea';
import Section from '@/components/Section';
import Link from 'next/link';
export default function Home() {
  const router = useRouter();
  const companyName = router.query?.company as string;

  return (
    <>
      <Head>
        <title>안녕하세요. 함께하면 기분 좋은 개발자 박대윤입니다.</title>
        <meta name="description" content="프론트엔드 엔지니어, 박대윤의 이력서입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og.png" />
        <meta property="og:locale" content="ko_KR" />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </Head>
      <div css={S.Container}>
        <Section>
          <h3>Contact</h3>
          <h5>
            <Link href="https://github.com/parkdaeyuidev" target="_blank">
              Github
            </Link>{' '}
            | <Link href="mailto:parkdaeyuidev@gmail.com">Email</Link>
          </h5>
          <TextArea>
            <h1>
              함께 일하면 <br />
              <span
                css={css`
                  background-color: black;
                  color: white;
                `}
              >
                기분 좋은 개발자
              </span>
              <br />
              박대윤입니다
            </h1>
            <br />
            <h4>
              안녕하세요.
              <br />
              {companyName && `${companyName}에 지원한 `}
              함께 일하면 기분 좋은 개발자 박대윤입니다. <br />
              저는 서울에서 5년차 웹 프론트엔드 엔지니어로 일하고 있습니다.
              <br />
              프로그래밍을 통해 일상의 여러 문제를 해결해 불편함을 해소하고자 합니다.
            </h4>
          </TextArea>
        </Section>
        <Section isBackground={false}>
          <h1 className="fw">Experience</h1>
        </Section>
        <Section>
          <div
            css={css`
              display: flex;

              @media screen and (max-width: 960px) {
                flex-direction: column;
              }
            `}
          >
            <div
              css={css`
                flex-basis: 200px;

                @media screen and (max-width: 960px) {
                  flex-basis: 100px;
                }
              `}
            >
              <TextArea>
                <h4>(주)한샘</h4>
                <p>2023.07</p>
                <p>대리</p>
              </TextArea>
            </div>
            <div
              css={css`
                flex: 1;
              `}
            >
              <TextArea>
                <h4>| 홈 퍼니싱 솔루션 런칭</h4>
                <br />
                <p>3월 런칭 예정인 한샘 내 영업시스템, 홈퍼니싱 솔루션에 참여하였습니다.</p>
                <br />
                <h5>What did I do</h5>
                <p>- 상담,상품,견적 생성 및 수정기능 개발</p>
                <p>- 주문 수정 내 상품 추가기능 개발</p>
                <br />
                <h5>Tech Stack</h5>
                <ul>
                  <li>Next.Js</li>
                  <li>Monorepo</li>
                  <li>TypeScript</li>
                  <li>SWR</li>
                  <li>Design-System</li>
                  <li>Redux-Saga</li>
                  <li>Redux-toolkit</li>
                  <li>BitBucket</li>
                  <li>Jira</li>
                </ul>
                <div className="line" />
              </TextArea>
            </div>
          </div>
        </Section>
        <Section isBackground={false} />
        <Section>
          <div
            css={css`
              display: flex;

              @media screen and (max-width: 960px) {
                flex-direction: column;
              }
            `}
          >
            <div
              css={css`
                flex-basis: 200px;

                @media screen and (max-width: 960px) {
                  flex-basis: 100px;
                }
              `}
            >
              <TextArea>
                <h4>미래엔</h4>
                <h4>반려의고수</h4>
                <Link href="https://m.van-go.co.kr/" target="_blank">
                  <p>https://m.van-go.co.kr/</p>
                </Link>
                <p>2022.08 ~ 2023.04</p>
                <p>사원</p>
              </TextArea>
            </div>
            <div
              css={css`
                flex: 1;
              `}
            >
              <TextArea>
                <h4>| 커머스서비스 개발</h4>
                <br />
                <p>서비스 내 런칭 예정인 커머스기능을 개발하였습니다.</p>
                <br />
                <h5>What did I do</h5>
                <p>- 홈, 상세페이지, 장바구니, 쿠폰, 리뷰관리 기능 개발 및 유관된 어드민 기능 개발</p>
                <br />
                <h5>Tech Stack</h5>
                <ul>
                  <li>Next.Js</li>
                  <li>TypeScript</li>
                  <li>React-Query</li>
                  <li>Ant-Design</li>
                  <li>EmotionJS</li>
                  <li>Recoil</li>
                  <li>Gitlab</li>
                  <li>Jira</li>
                </ul>
                <div className="line" />
              </TextArea>
              <TextArea>
                <h4>| 반려동물 수첩 기능</h4>
                <br />
                <p>서비스 내 기능 중 일부인 반려견 건강체크 기능을 개발하였습니다</p>
                <br />
                <h5>What did I do</h5>
                <p>- 반려견 건강체크, 음수 급여량체크 기능, 접종&진료 기능 개발</p>
                <br />
                <h5>Tech Stack</h5>
                <ul>
                  <li>Next.Js</li>
                  <li>TypeScript</li>
                  <li>React-Query</li>
                  <li>EmotionJS</li>
                  <li>Recoil</li>
                  <li>Gitlab</li>
                  <li>Jira</li>
                </ul>
              </TextArea>
            </div>
          </div>
        </Section>
        <Section isBackground={false} />
        <Section>
          <div
            css={css`
              display: flex;
              @media screen and (max-width: 960px) {
                flex-direction: column;
              }
            `}
          >
            <div
              css={css`
                flex-basis: 200px;
                @media screen and (max-width: 960px) {
                  flex-basis: 100px;
                }
              `}
            >
              <TextArea>
                <h4>웅진씽크빅</h4>
                <h4>놀이의발견</h4>
                <p>2018.08 ~ 2022.06</p>
                <p>대리</p>
              </TextArea>
            </div>
            <div
              css={css`
                flex: 1;
              `}
            >
              <TextArea>
                <h4>| 라운지 런칭 및 유지보수</h4>
                <p>2018.12 ~ 2022.06</p>
                <br />
                <p>
                  웅진씽크빅 회원 대상으로 운영 중인 네이티브 서비스 내에 Django 기반의 '놀이의 발견' 웹앱을
                  개발했습니다.
                </p>
                <br />
                <h4>What did I do</h4>
                <p>- 초기 단독 프로젝트로 앱 내 프론트 모든 기능 담당</p>
                <p>
                  - Html, Css, Jquery, Django 를 주요 기술스택으로 최초 서비스를 런칭, 이후 Webpack 을 도입하여 React,
                  TypeScript 기반의 리부팅 진행
                </p>
                <br />
                <h4>Tech Stack</h4>
                <ul>
                  <li>React</li>
                  <li>Vue</li>
                  <li>Redux-Saga</li>
                  <li>Redux-toolkit</li>
                  <li>VanilaJS</li>
                  <li>Jquery</li>
                  <li>Axios</li>
                  <li>TypeScript</li>
                  <li>Scss</li>
                  <li>StyledComponent</li>
                  <li>Webpack</li>
                  <li>Django</li>
                  <li>Git</li>
                  <li>Google Analytics</li>
                  <li>Firebase</li>
                  <li>Notion</li>
                  <li>Trello</li>
                </ul>
                <div className="line" />
              </TextArea>
              <TextArea>
                <h4>| PC 런칭 및 유지보수</h4>
                <Link href="https://nolbal.com/" target="_blank">
                  <p>https://nolbal.com/</p>
                </Link>
                <p>2021.04 ~ 2022.06</p>
                <br />
                <p>기존 웹앱을 pc 및 mobile 브라우저에서도 사용할 수 있도록 웹 서비스를 개발하였습니다.</p>
                <br />
                <h5>What did I do</h5>
                <p>- 팀 내 프로젝트 일정산정 및 업무 분배</p>
                <p>- 검색 엔진 최적화를 위한 서버사이드 페이지 개발</p>
                <p>- 비회원 접속을 위한 토큰 로직 개발</p>
                <p>- 결제하기 모듈 개발</p>
                <br />
                <h5>Tech Stack</h5>
                <ul>
                  <li>NextJS</li>
                  <li>TypeScript</li>
                  <li>Redux-toolkit</li>
                  <li>Axios</li>
                  <li>StyledComponent</li>
                  <li>Git</li>
                  <li>Google Analytics</li>
                  <li>Firebase</li>
                  <li>Jira</li>
                  <li>Confluence</li>
                </ul>
                <div className="line" />
              </TextArea>
              <TextArea>
                <h4>| 이벤트 페이지 자동화 시스템 개발 및 유지보수</h4>
                <p>2020.10 ~ 2021.01</p>
                <br />
                <p>서비스 내 이벤트 페이지를 관리자 페이지에서 코딩 없이 생성할 수 있도록 개발하였습니다.</p>
                <br />
                <h5>What did I do</h5>
                <p>- 앱 내 이벤트 페이지에서 반복되는 기능들을 백엔드 팀과 협의해 자동으로 생성되도록 개발</p>
                <p>
                  - Android,iOS,Web에서 이벤트 내 버튼 클릭시 해당 플랫폼에 맞는 요청이 실행되도록 브릿지 통신을 개발
                </p>
                <br />
                <h5>Tech Stack</h5>
                <ul>
                  <li>React</li>
                  <li>WebPack</li>
                  <li>VanilaJS</li>
                  <li>StyledComponent</li>
                  <li>Css</li>
                  <li>Django</li>
                  <li>Git</li>
                  <li>Jira</li>
                  <li>Confluence</li>
                </ul>
                <div className="line" />
              </TextArea>
              <TextArea>
                <h4>| 사내 체온 기입 시스템 개발</h4>
                <p>2021.12 ~ 2022.01</p>
                <br />
                <p>사내 직원 출입시 간단한 버튼 조작을 통해 체온을 기입할 수 있는 웹앱을 개발하였습니다.</p>
                <br />
                <h5>What did I do</h5>
                <p>- Apps Script를 이용해 화면 내 입력한 값이 SpreadSheet에 날짜별로 기입됨</p>
                <br />
                <h5>Tech Stack</h5>
                <ul>
                  <li>Google Apps Script</li>
                  <li>Google SpreadSheet</li>
                  <li>VanilaJS</li>
                </ul>
              </TextArea>
            </div>
          </div>
        </Section>
        <Section isBackground={false}>
          <h1 className="fw">Skills</h1>
        </Section>
        <Section>
          <TextArea>
            <h3>| Communication</h3>
            <br />
            <p>• 문제를 해결하는데 있어 아는 것과 모르는 것을 정확히 파악해 이를 공유, 대충 얼버무리지 않습니다.</p>
            <p>• 개발한 기능의 로직과 동작을 협업하는 사람들에게 쉽게 설명 할 수 있습니다.</p>
            <p>• 개발 기한을 준수하여 일정에 차질이 없도록 합니다.</p>
            <p>• 플랫폼 서비스 개발 경험을 기반으로 앱 내 비즈니스 로직을 파악해 개선할 수 있습니다.</p>
            <p>• 주어진 업무만 수행하는 코더가 아닌 사업을 이끌어가는 팀의 일원으로서 함께 고민합니다.</p>
            <br />
          </TextArea>
          <TextArea>
            <h3>| Web</h3>
            <br />
            <p>• 검색 엔진 최적화 경험이 있습니다.</p>
            <p>• 크로스 브라우징 최적화 경험이 있습니다.</p>
            <p>• 모바일 브라우저의 트러블 슈팅 경험이 있습니다.</p>
            <p>• 네이티브 앱과 앱 내 웹뷰간의 동작을 다뤄 본 경험이 있습니다.</p>
            <br />
          </TextArea>
          <TextArea>
            <h3>| Javascript</h3>
            <br />
            <p>• Javascript와 Typescript에 능숙합니다.</p>
            <p>• 생태계 내 여러 개발도구를 비교 분석해 적합한 도구를 선택해 본 경험이 있습니다.</p>
            <p>• Webpack을 세팅해 번들링 파일을 생성할 수 있습니다.</p>
            <br />
          </TextArea>
          <TextArea>
            <h3>| React</h3>
            <br />
            <p>• 비즈니스 로직에 맞춰 적절한 컴포넌트 함수를 만들기 위해 고민합니다.</p>
            <p>• 공통으로 쓰이는 로직을 hook을 이용해 모듈화하여 사용합니다.</p>
          </TextArea>
          <br />
          <br />
          Copyright © 박대윤 All rights reserved.
        </Section>
      </div>
    </>
  );
}
