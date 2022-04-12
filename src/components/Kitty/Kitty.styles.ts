import styled from 'styled-components';
import { getColor } from '../../utils/colors';

// ----- head -----

export const head = (dna: string) => {
  const color = getColor(dna[0] + dna[1]);
  return styled.div`
    position: relative;
    width: 230px;
    height: 200px;
    border: 6px solid transparent;
    -webkit-border-radius: 50% 50% 45% 45%;
    border-radius: 50% 50% 45% 45%;
    background: #${color};
    z-index: 20;
  `;
};

export const headDot = (dna: string) => {
  const color = getColor(dna[10] + dna[11]);
  return styled.div`
    position: absolute;
    left: 101px;
    height: 48px;
    top: 1px;
    width: 14px;
    background: #${color};
    -webkit-border-radius: 0 0 50% 50%;
    border-radius: 0 0 50% 50%;
  `;
};

export const headLeftDot = (dna: string) => {
  const color = getColor(dna[12] + dna[13]);
  return styled.div`
    position: absolute;
    content: '';
    top: 1px;
    width: 14px;
    height: 35px;
    background: #${color};
    left: -20px;
    border-radius: 50% 0 50% 50%;
  `;
};

export const headRightDot = (dna: string) => {
  const color = getColor(dna[12] + dna[13]);
  return styled.div`
    position: absolute;
    content: '';
    top: 1px;
    width: 14px;
    height: 35px;
    background: #${color};
    left: 20px;
    border-radius: 0 50% 50% 50%;
  `;
};

// ----- ears -----

export const ear = (dna: string) => {
  return styled.div`
    position: relative;
  `;
};

export const ears = (dna: string) => {
  return styled.div`
    position: absolute;
    top: -8px;
    width: 150px;
    height: 150px;
    border: 5px solid transparent;
    border-radius: 90% 0 90% 0;
    background: #ffcc80;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
};

export const leftEar = (dna: string) => {
  return styled(ears(dna))`
    transform: scale(-1, 1) rotate(170deg);
    left: -14px;
  `;
};

export const rightEar = (dna: string) => {
  return styled(ears(dna))`
    transform: rotate(170deg);
    left: 94px;
  `;
};

export const insideEar = (dna: string) => {
  return styled.div`
    width: 108px;
    height: 108px;
    border-radius: 90% 0 90% 0;
    background: #e57373;
  `;
};

// ----- eyes -----

export const eye = (dna: string) => {
  return styled.div`
    position: absolute;
    top: 35px;
    left: -16px;
    display: flex;
  `;
};

export const eyes = (dna: string) => {
  return styled.div`
    width: 49px;
    height: 49px;
    background: #fff;
    border-radius: 50%;
    margin: 38px;
    z-index: 100;
  `;
};

export const pupil = (dna: string) => {
  return styled.div`
    position: absolute;
    top: 41px;
    width: 42px;
    height: 42px;
    background: #373737;
    border-radius: 50%;
    z-index: 200;
  `;
};

export const nose = (dna: string) => {
  return styled.div`
    position: absolute;
    top: 115px;
    left: 95px;
    width: 0;
    height: 0;
    border-right: 14px solid rgba(255, 255, 255, 0);
    border-left: 14px solid rgba(255, 255, 255, 0);
    border-top: 14px solid #e57373;
    border-radius: 40%;
    z-index: 100;
  `;
};

// .cat_mouth-contour {
//   position: absolute;
//   top: 97px;
//   left: 19px;
//   background: #fff3e0;
//   width: 180px;
//   height: 90px;
//   -webkit-border-radius: 55% 55% 60% 60%;
//   border-radius: 55% 55% 60% 60%;
// }
// .cat_mouth-left,
// .cat_mouth-right {
//   position: absolute;
//   top: 120px;
//   width: 23px;
//   height: 23px;
//   -webkit-border-radius: 50%;
//   border-radius: 50%;
//   border: 4px solid #373737;
//   border-right: 3px solid rgba(255, 255, 255, 0);
//   border-top: 3px solid rgba(255, 255, 255, 0);
//   transform: rotate(-45deg);
// }
// .cat_mouth-left {
//   left: 88px;
// }
// .cat_mouth-right {
//   left: 108px;
// }
// .cat_whiskers-left,
// .cat_whiskers-right {
//   position: relative;
// }
// .cat_whiskers-left,
// .cat_whiskers-right,
// .cat_whiskers-left::after,
// .cat_whiskers-right::after,
// .cat_whiskers-left::before,
// .cat_whiskers-right::before {
//   width: 32px;
//   height: 5px;
//   background: #373737;
// }
// .cat_whiskers-left::before,
// .cat_whiskers-right::before,
// .cat_whiskers-left::after,
// .cat_whiskers-right::after {
//   content: '';
//   position: absolute;
//   left: 0;
// }
// .cat_whiskers-left {
//   top: 112px;
//   left: -18px;
// }
// .cat_whiskers-left::before {
//   top: -16px;
//   transform: rotate(15deg);
// }
// .cat_whiskers-left::after {
//   top: 16px;
//   transform: rotate(-15deg);
// }
// .cat_whiskers-right {
//   top: 108px;
//   left: 205px;
// }
// .cat_whiskers-right::before {
//   top: -16px;
//   transform: rotate(-15deg);
// }
// .cat_whiskers-right::after {
//   top: 16px;
//   transform: rotate(15deg);
// }

export const body = (dna: string) => {
  const color = getColor(dna[12] + dna[13]);
  return styled.div`
    position: relative;
  `;
};

// .cat_chest {
//   position: absolute;
//   left: 54px;
//   top: -48px;
//   width: 120px;
//   height: 120px;
//   background: #ffcc80;
//   border: 5px solid transparent;
//   border-radius: 50% 50% 40% 40%;
//   z-index: 3;
// }
// .cat_chest_inner {
//   content: '';
//   position: absolute;
//   top: 30px;
//   left: 70px;
//   width: 88px;
//   height: 35px;
//   border-radius: 50%;
//   background: #fff3e0;
//   z-index: 4;
// }
// .cat_paw-left,
// .cat_paw-right {
//   position: absolute;
//   top: 24px;
//   width: 28px;
//   height: 48px;
//   background: #ffcc80;
//   border: none;
//   border-bottom: 5px solid transparent;
//   border-left: 5px solid transparent;
//   border-right: 5px solid transparent;
//   z-index: 5;
// }

// .cat_paw-right_inner {
//   content: '';
//   position: absolute;
//   top: 40px;
//   left: 148px;
//   width: 35px;
//   height: 32px;
//   background: #ffcc80;
//   border-radius: 45%;
//   border: 5px solid transparent;
//   z-index: 2;
// }

// .cat_paw-left_inner {
//   content: '';
//   position: absolute;
//   top: 40px;
//   left: 48px;
//   width: 35px;
//   height: 32px;
//   background: #ffcc80;
//   border-radius: 45%;
//   border: 5px solid transparent;
//   z-index: 2;
// }
// .cat_paw-left {
//   left: 78px;
//   border-radius: 0 0 45% 35%;
// }
// .cat_paw-left::after {
//   left: -32px;
// }
// .cat_paw-right {
//   left: 122px;
//   border-radius: 0 0 35% 45%;
// }
// .cat_paw-right::after {
//   left: 16px;
// }

export const tail = (dna: string) => {
  const color = getColor(dna[8] + dna[9]);
  return styled.div`
    position: absolute;
    top: 20px;
    left: 130px;
    width: 90px;
    height: 23px;
    background: #${color};
    border: 5px solid transparent;
    border-radius: 45%;
    z-index: 1;
    transform: rotate(-45deg);
  `;
};
