import { css } from '@emotion/react';
import Head from 'next/head'
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import * as S from './index.style';
import Image from 'next/image';
import Lottie from 'react-lottie-player';
import { useScroll } from '@/hooks/useScroll';
import { phraseList } from '@/components/phraseList';
export default function Home() {

  const contentsRef = useRef<HTMLAudioElement>(null);
  const [selectedContent, setSelectedContent] = useState(0);
  const [isPlayAudio, setIsPlayAudio] = useState(false);
  const { state: { height, now }, mainElementRef, scrollElementRef } = useScroll();

  useEffect(() => {
    const selectedNum = Number(((now / height * phraseList.length)).toFixed(0)) || 0;
    setSelectedContent(selectedNum);
  }, [now])

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
        <title>안녕하세요. 함께하면 기분 좋을 개발자 박대윤입니다.</title>
        <meta name="description" content="안녕하세요. 프론트엔드 개발자 박대윤입니다" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div css={css`
        width: 100%;
        height: 100%;
        overflow: hidden;
      `}>
        <div css={S.MainLayer} ref={mainElementRef} className="main">
          <div css={S.Scroll} ref={scrollElementRef} className="scroll"></div>
        </div>
        <div css={S.PhraseFrame}>
          {
            phraseList.map((el, idx) => <div css={S.Phrase({ isOn: idx === selectedContent })}>{el}</div>)
          }
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
          <div>마우스 휠을 아래로 내려주세요.</div>
          <Lottie
            animationData={require('assets/lottie/scrollDown.json')}
            play
            loop
            style={{ width: 28, height: 28 }}
          />
        </div>
        <div>
          <video css={S.BackgroundVideo} src={require('@/assets/video/sea.mp4')} autoPlay muted loop playsInline />
        </div>
      </div>
    </>
  )
}
