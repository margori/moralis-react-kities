import React from 'react';
import styled from 'styled-components';
import {
  body,
  ears,
  eye,
  eyes,
  head,
  headDot,
  headLeftDot,
  headRightDot,
  insideEar,
  leftEar,
  nose,
  pupil,
  rightEar,
  tail,
} from './Kitty.styles';

const Kitty = ({ dna }: { dna: string }) => {
  const Head = head(dna);
  const HeadDot = headDot(dna);
  const HeadLeftDot = headLeftDot(dna);
  const HeadRightDot = headRightDot(dna);
  const Ears = ears(dna);
  const LeftEar = leftEar(dna);
  const RightEar = rightEar(dna);
  const InsideEar = insideEar(dna);

  const Eyes = eyes(dna);
  const Eye = eye(dna);
  const Pupil = pupil(dna);

  const Nose = nose(dna);

  const Tail = tail(dna);
  const Body = body(dna);

  return (
    <div className="cat">
      <Ears>
        <LeftEar>
          <InsideEar></InsideEar>
        </LeftEar>
        <RightEar>
          <InsideEar></InsideEar>
        </RightEar>
      </Ears>

      <Head>
        <HeadDot>
          <HeadLeftDot></HeadLeftDot>
          <HeadRightDot></HeadRightDot>
        </HeadDot>
        <Eyes>
          <Eye>
            <Pupil></Pupil>
          </Eye>
          <Eye>
            <Pupil></Pupil>
          </Eye>
        </Eyes>

        <Nose></Nose>

        <div className="cat_mouth-contour"></div>
        <div className="cat_mouth-left"></div>
        <div className="cat_mouth-right"></div>

        <div className="cat_whiskers-left"></div>
        <div className="cat_whiskers-right"></div>
      </Head>

      <Body>
        <div className="cat_chest"></div>

        <div className="cat_chest_inner"></div>

        <div className="cat_paw-left"></div>
        <div className="cat_paw-left_inner"></div>

        <div className="cat_paw-right"></div>
        <div className="cat_paw-right_inner"></div>

        <Tail></Tail>
      </Body>
      <div>{dna}</div>
    </div>
  );
};

Kitty.propTypes = {};

export default Kitty;
