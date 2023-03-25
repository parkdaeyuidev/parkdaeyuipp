import { css } from '@emotion/react';

export const textArea = ({ inView = false }) => css`
  opacity: ${inView ? 1 : 0};
  padding-top: ${inView ? '0px' : '50px'};
  transition: all 1.5s;
`;
