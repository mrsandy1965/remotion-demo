import React from 'react';
import { Video } from 'remotion';
import CaptionStyles from '../components/CaptionStyles';

const CaptionedVideo = ({ videoSrc, captions, stylePreset }) => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', background: '#000' }}>
      <Video src={videoSrc} style={{ width: '100%', height: '100%' }} />
      <CaptionStyles captions={captions} preset={stylePreset} />
    </div>
  );
};

export default CaptionedVideo;
