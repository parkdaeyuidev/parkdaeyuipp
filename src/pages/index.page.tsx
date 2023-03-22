import Head from 'next/head'
import { useEffect, useRef, useState } from 'react';
import * as S from './index.style';
import Lottie from 'react-lottie-player';
import { Swiper, SwiperSlide } from 'swiper/react';
import PhraseFrame from '@/components/PhraseFrame';
import { ContentList } from '@/components/ContentList';
import Image from 'next/image';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
export default function Home() {
  const router = useRouter();
  const contentsRef = useRef<HTMLAudioElement>(null);
  const [isPlayAudio, setIsPlayAudio] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const companyName = router.query?.company as string;

  useEffect(() => {
    if (isPlayAudio) {
      contentsRef.current!.volume = 0.1;
      contentsRef.current?.play()

    } else {
      contentsRef.current?.pause()
    }
  }, [isPlayAudio])

  return (
    <>
      <Head>
        <title>안녕하세요. 함께하면 기분 좋은 개발자 박대윤입니다.</title>
        <meta name="description" content="프론트엔드 엔지니어, 박대윤의 이력서입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og.png" />
        <meta property="og:locale" content="ko_KR" />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div css={S.MainLayer} className="main">
          <Swiper
            direction={"vertical"}
          >
            {
              ContentList({ text: companyName }).map((el) => (
                <SwiperSlide>
                  <div css={S.SwiperSlide}>
                    <PhraseFrame>
                      {el}
                    </PhraseFrame>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <audio src='/bg.mp3' ref={contentsRef} style={{ display: 'none' }} />
        <div css={S.Player} onClick={() => setIsPlayAudio(prev => !prev)}>
          <Lottie
            animationData={require('assets/lottie/play.json')}
            play={isPlayAudio}
            loop
            style={{ width: 28, height: 28 }}
          />
        </div>
        <div css={S.ScrollDown} onClick={() => setIsPlayAudio(prev => !prev)}>
          <div>위 아래로 스와이프 해주세요.</div>
          <Lottie
            animationData={require('assets/lottie/scrollDown.json')}
            play
            loop
            style={{ width: 28, height: 28 }}
          />
        </div>
        <div>
          <Image css={S.BackgroundImage({ isVideoLoaded })} src={require('@/assets/image/img-bg.png')} alt="img-bg" />
          <video
            css={S.BackgroundVideo}
            src={require('@/assets/video/sea.mp4')}
            autoPlay={true}
            muted={true}
            loop
            playsInline
            onLoadedData={(e) => {
              setIsVideoLoaded(true);
            }}
          /> :
        </div>
      </div>
    </>)
}
