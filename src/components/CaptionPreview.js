import React from 'react';
import { Player } from 'remotion';
import { RemotionRoot } from '../remotion/VideoComposition';

const CaptionPreview = ({ videoSrc, captions, stylePreset }) => (
  <Player
    component={RemotionRoot}
    inputProps={{ videoSrc, captions, stylePreset }}
    durationInFrames={900}
    fps={30}
    width={1280}
    height={720}
    controls
  />
);

export default CaptionPreview;
