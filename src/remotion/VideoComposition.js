import { Composition } from 'remotion';
import CaptionedVideo from './CaptionedVideo';

export const RemotionRoot = () => (
  <Composition
    id="CaptionedVideo"
    component={CaptionedVideo}
    durationInFrames={900}
    fps={30}
    width={1280}
    height={720}
    defaultProps={{
      videoSrc: '',
      captions: '',
      stylePreset: 'bottom',
    }}
  />
);
