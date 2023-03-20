import { css } from "@emotion/react";
import Image from "next/image";

export const phraseList = [
  '안녕하세요!',
  <div>반갑습니다!<br /> 함께 일하면 기분 좋은 개발자 박대윤입니다</div>,
  '이력서 일일이 확인하기 힘드시죠?',
  <div>저는 5년차 프론트엔드 개발자입니다</div>,
  <div>
    <div>최근 자주 사용하고 있는 기술은 아래와 같습니다.</div>
    <br />
    <div css={css`
      text-align: center;
    `}>
      <Image src={require('@/assets/image/logo-javascript.png')} alt="js" width={100} css={css` object-fit:contain;`} />
      <Image src={require('@/assets/image/logo-nextjs.svg')} alt="js" width={100} css={css` object-fit:contain;`} />
      <Image src={require('@/assets/image/logo-react.png')} alt="js" width={100} css={css` object-fit:contain;`} />
      <Image src={require('@/assets/image/logo-react-query.png')} alt="js" width={100} css={css` object-fit:contain;`} />
      <Image src={require('@/assets/image/logo-typescript.png')} alt="js" width={100} css={css` object-fit:contain;`} />
      <Image src={require('@/assets/image/logo-recoil.png')} alt="js" width={100} css={css` object-fit:contain;`} />
      <Image src={require('@/assets/image/logo-emotion.png')} alt="js" width={100} css={css` object-fit:contain;`} />
      <Image src={require('@/assets/image/logo-html.png')} alt="js" width={100} height={100} css={css` object-fit:contain;`} />
      <Image src={require('@/assets/image/logo-css.png')} alt="js" width={100} height={100} css={css` object-fit:contain;`} />
    </div>
  </div>,
  <div>
    <div>최근 자주 사용하고 있는 업무툴은 아래와 같습니다.</div>
    <br />
    <div css={css`
        text-align: center;
      `}>
      <Image src={require('@/assets/image/logo-jira.png')} alt="js" width={100} />
      <Image src={require('@/assets/image/logo-slack.png')} alt="js" width={100} />
      <Image src={require('@/assets/image/logo-notion.png')} alt="js" width={100} />
      <Image src={require('@/assets/image/logo-git.png')} alt="js" width={100} />
    </div>
  </div>,
  <div>
    <div>과거 경험했던 기술은 아래와 같습니다.</div>
    <br />
    <div css={css`
      text-align: center;
    `}>
      <Image src={require('@/assets/image/logo-python.png')} alt="js" width={100} />
      <Image src={require('@/assets/image/logo-jquery.png')} alt="js" width={100} />
      <Image src={require('@/assets/image/logo-django.png')} alt="js" width={100} />
      <Image src={require('@/assets/image/logo-redux.png')} alt="js" width={100} />
      <Image src={require('@/assets/image/logo-spring.png')} alt="js" width={100} />
    </div>
  </div>,
];