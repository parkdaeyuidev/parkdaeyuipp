import { externalUrls } from '@/constants/path';
import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Contact, Experience1, Experience2, Experience3, Experience4, Skills } from './contents';
import Frame from './Frame';
import TextArea from './TextArea';
interface IProps {
  text?: string;
}

export const ContentList = ({ text }: IProps) => [
  <Frame>
    <TextArea>
      <div
        css={css`
          padding-left: 20px;
        `}
      ></div>
    </TextArea>
  </Frame>,
  <Frame>
    <TextArea>저는 서울에서 5년차 웹 프론트엔드 엔지니어로 일하고 있습니다</TextArea>
  </Frame>,
  <Frame>
    <div
      css={css`
        padding-left: 20px;
      `}
    >
      <h1>Experience.</h1>
    </div>
  </Frame>,
  <Experience1 />,
  <Experience2 />,
  <Experience3 />,
  <Experience4 />,
  <Frame>
    <div
      css={css`
        padding-left: 20px;
      `}
    >
      <h1>Skills.</h1>
    </div>
  </Frame>,
  <Skills />,

  <Contact />,
];
