import { externalUrls } from "@/constants/path";
import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";

export const ContentList = ({ text = "라이너" }) => [
  '안녕하세요!',
  <div>{text}에 지원한,<br /> 함께 일하면 기분 좋은 개발자 박대윤입니다</div>,
  <div>저는 5년차 프론트엔드 개발자입니다</div>,
  <div>
    <div>저의 주요 언어는 아래와 같습니다.</div>
    <br />
    <div css={css` 
      text-align: center;
      img {
        object-fit: contain;
      }
    `}>
      <Link href={externalUrls.javascript} target="_blank">
        <Image src={require('@/assets/image/logo-javascript.png')} alt="js" width={100} />
      </Link>
      <Link href={externalUrls.typescript} target="_blank">
        <Image src={require('@/assets/image/logo-typescript.png')} alt="js" width={100} />
      </Link>
    </div>
  </div>,
  <div>
    <div>최근 자주 사용하고 라이브러리는 아래와 같습니다.</div>
    <br />
    <div css={css`
      text-align: center;
      img {
        object-fit: contain;
      }
    `}>
      <Link href={externalUrls.react} target="_blank"><Image src={require('@/assets/image/logo-react.png')} alt="js" width={100} /></Link>
      <Link href={externalUrls["react-query"]} target="_blank"><Image src={require('@/assets/image/logo-react-query.png')} alt="js" width={100} /></Link>
      <Link href={externalUrls.recoil} target="_blank"><Image src={require('@/assets/image/logo-recoil.png')} alt="js" width={100} /></Link>
      <Link href={externalUrls["next-js"]} target="_blank"><Image src={require('@/assets/image/logo-nextjs.svg')} alt="js" width={100} /></Link>
      <Link href={externalUrls["emotion-js"]} target="_blank"><Image src={require('@/assets/image/logo-emotion.png')} alt="js" width={100} /></Link>
      <Link href={externalUrls.html} target="_blank"><Image src={require('@/assets/image/logo-html.png')} alt="js" width={100} height={100} /></Link>
      <Link href={externalUrls.css} target="_blank"><Image src={require('@/assets/image/logo-css.png')} alt="js" width={100} height={100} /></Link>
    </div>
  </div>,
  <div>
    <div>최근 자주 사용하고 있는 업무툴은 아래와 같습니다.</div>
    <br />
    <div css={css`
        text-align: center;
      `}>
      <Link href={externalUrls.jira} target="_blank"><Image src={require('@/assets/image/logo-jira.png')} alt="js" width={100} /></Link>
      <Link href={externalUrls.vsc} target="_blank"><Image src={require('@/assets/image/logo-vsc.png')} alt="js" width={100} /></Link>
      <Link href={externalUrls.slack} target="_blank"><Image src={require('@/assets/image/logo-slack.png')} alt="js" width={100} /></Link>
      <Link href={externalUrls.notion} target="_blank"><Image src={require('@/assets/image/logo-notion.png')} alt="js" width={100} /></Link>
      <Link href={externalUrls.git} target="_blank"><Image src={require('@/assets/image/logo-git.png')} alt="js" width={100} /></Link>
    </div>
  </div>,
];