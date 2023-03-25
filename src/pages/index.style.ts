import { css } from '@emotion/react';

export const Container = css`
  left: 0;
  top: 0;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

export const SwiperSlide = css`
  /* height: 100%; */
  display: flex;
  justify-content: center;
`;

export const BackgroundImage = ({ isVideoLoaded = false }) => css`
  opacity: ${isVideoLoaded ? 0 : 1};
  position: absolute;
  top: 0;
  left: 0;
  width: 800px;
  height: 100vh;
  object-fit: cover;
  overflow: hidden;
  transition: all 1s;
  ${!isVideoLoaded &&
  css`
    filter: blur(5px);
  `};
`;

export const Content = ({ on = false }) => css`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  opacity: ${on ? 1 : 0};
`;

export const PhraseFrame = css`
  pointer-events: none;
`;
export const Phrase = ({ isOn = false }) => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 50px;
  word-break: keep-all;
  opacity: ${isOn ? 1 : 0};
  transition: all 2s;
  pointer-events: initial;
`;

export const Player = css`
  position: absolute;
  z-index: 2;
  top: 20px;
  left: 20px;
`;

export const ScrollDown = css`
  position: fixed;
  width: 100%;
  z-index: 2;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
