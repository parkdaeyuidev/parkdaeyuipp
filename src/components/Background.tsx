import { css } from '@emotion/react';
import Image from 'next/image';
import * as S from './Background.style';

export default function Background({ currentIndex }: { currentIndex: number }): React.ReactElement {
  if (currentIndex >= 3 && currentIndex < 9) {
    return (
      <>
        <div
          css={css`
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
          `}
        >
          <Image css={S.BackgroundVideo} src={require('@/assets/image/bg-city.jpeg')} alt="bg1" />
        </div>
      </>
    );
  }

  return (
    <>
      <div
        css={css`
          width: 100vw;
          height: 100%;
          display: flex;
          justify-content: center;
        `}
      >
        <Image css={S.BackgroundVideo} src={require('@/assets/image/bg-city3.jpeg')} alt="bg1" />
        {/* <video
          css={S.BackgroundVideo}
          src={require('@/assets/video/sea.mp4')}
          autoPlay={true}
          muted={true}
          loop
          playsInline
          poster={require('@/assets/image/img-bg.png')}
        /> */}
      </div>
    </>
  );
}
