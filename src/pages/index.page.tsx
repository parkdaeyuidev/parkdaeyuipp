import { css } from '@emotion/react';
import Head from 'next/head'
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import * as S from './index.style';
import Image from 'next/image';
import Lottie from 'react-lottie-player';

export default function Home() {

  const contentsRef = useRef<HTMLAudioElement>(null);
  const [selectedContent, setSelectedContent] = useState(0);
  const [isPlayAudio, setIsPlayAudio] = useState(false);

  const useScroll = () => {
    const [state, setState] = useState({ x: 0, y: 0, height: 0, percent: 0, now: 0, scroll: '' });
    const onScroll = () => {
      const height = document.querySelector('.scroll')!.getBoundingClientRect().height - document.querySelector('body')!.getBoundingClientRect().height;
      const nowScrollHeight = document.querySelector('.scroll')!.getBoundingClientRect().top;

      setState(prev => ({
        y: window.scrollY,
        x: window.scrollX,
        height: document.querySelector('.scroll')!.getBoundingClientRect().height,
        percent: Number(Math.abs(nowScrollHeight / height * 100).toFixed(2)),
        now: Math.abs(nowScrollHeight),
        scroll: prev.now > Math.abs(nowScrollHeight) ? 'down' : 'up',
      }));
    }

    useEffect(() => {
      document.querySelector('.main')!.addEventListener("scroll", onScroll);
      return () => document.querySelector('.main')!.removeEventListener("scroll", onScroll);
    }, []);
    return { state };
  }

  const { state: { percent, height, now, scroll } } = useScroll();

  const contentPrase = [
    '안녕하세요!',
    <a onClick={() => console.log('aaaaa')}>반갑습니다!<br /> 함께 일하면 기분 좋은 개발자 박대윤입니다</a>,
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

  useEffect(() => {
    const selectedNum = Number(((now / height * contentPrase.length)).toFixed(0)) || 0;
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
        <title>Parkdaeyuidev</title>
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
        <div css={S.MainLayer} className="main">
          <div css={S.Scroll} className="scroll"></div>
        </div>
        <div css={S.PhraseFrame}>
          {
            contentPrase.map((el, idx) => <div css={S.Phrase({ isOn: idx === selectedContent })}>{el}</div>)
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
          <video css={S.BackgroundVideo} src={require('@/assets/video/sea.mp4')} autoPlay muted loop />
        </div>
      </div>
    </>
  )
}
