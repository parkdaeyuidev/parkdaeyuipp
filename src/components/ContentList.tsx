import { externalUrls } from "@/constants/path";
import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  text?: string
}

export const ContentList = ({ text }: IProps) => [
  '안녕하세요.',
  <div>{text && `${text}에 지원한`}{text && <br />} 함께 일하면 기분 좋은 개발자 박대윤입니다</div>,
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
        <Image src={require('@/assets/image/logo-javascript.png')} alt="js" width={80} />
      </Link>
      <Link href={externalUrls.typescript} target="_blank">
        <Image src={require('@/assets/image/logo-typescript.png')} alt="js" width={80} />
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
      <Link href={externalUrls.react} target="_blank"><Image src={require('@/assets/image/logo-react.png')} alt="js" width={80} /></Link>
      <Link href={externalUrls["react-query"]} target="_blank"><Image src={require('@/assets/image/logo-react-query.png')} alt="js" width={80} /></Link>
      <Link href={externalUrls.recoil} target="_blank"><Image src={require('@/assets/image/logo-recoil.png')} alt="js" width={80} /></Link>
      <Link href={externalUrls["next-js"]} target="_blank"><Image src={require('@/assets/image/logo-nextjs.svg')} alt="js" width={80} /></Link>
      <Link href={externalUrls["emotion-js"]} target="_blank"><Image src={require('@/assets/image/logo-emotion.png')} alt="js" width={80} /></Link>
      <Link href={externalUrls.html} target="_blank"><Image src={require('@/assets/image/logo-html.png')} alt="js" width={80} height={80} /></Link>
      <Link href={externalUrls.css} target="_blank"><Image src={require('@/assets/image/logo-css.png')} alt="js" width={80} height={80} /></Link>
    </div>
  </div>,
  <div>
    <div>최근 자주 사용하고 있는<br /> 커뮤니케이션 도구는 아래와 같습니다.</div>
    <br />
    <div css={css`
        text-align: center;
      `}>
      <Link href={externalUrls.jira} target="_blank"><Image src={require('@/assets/image/logo-jira.png')} alt="js" width={80} /></Link>
      <Link href={externalUrls.slack} target="_blank"><Image src={require('@/assets/image/logo-slack.png')} alt="js" width={80} /></Link>
      <Link href={externalUrls.notion} target="_blank"><Image src={require('@/assets/image/logo-notion.png')} alt="js" width={80} /></Link>
      <Link href={externalUrls.git} target="_blank"><Image src={require('@/assets/image/logo-git.png')} alt="js" width={80} /></Link>
    </div>
  </div>,
  <div>
    <div>최근 자주 사용하고 있는 개발 도구는 아래와 같습니다.</div>
    <br />
    <div css={css`
      text-align: center;
    `}>
      <Link href={externalUrls.vsc} target="_blank"><Image src={require('@/assets/image/logo-vsc.png')} alt="js" width={80} /></Link>
      <Link href={externalUrls.git} target="_blank"><Image src={require('@/assets/image/logo-git.png')} alt="js" width={80} /></Link>
    </div>
  </div>,
  '저는 이렇게 기여할 수 있습니다',
  <div>개발한 기능의 로직과 동작을<br /> 협업하는 사람들에게 쉽게 설명 할 수 있습니다</div>,
  <div>플랫폼 서비스 개발 경험을 기반으로<br /> 앱 내 비즈니스 로직을 파악해 개선할 수 있습니다</div>,
  '주어진 업무만 수행하는 코더가 아닌 사업을 이끌어가는 팀의 일원으로서 함께 고민합니다',
];