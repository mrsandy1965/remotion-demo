import React from 'react';

const presets = {
  bottom: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Noto Sans, Noto Sans Devanagari',
    fontSize: 40,
    color: '#fff',
    textShadow: '2px 2px 8px #000',
  },
  top: {
    position: 'absolute',
    top: 40,
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Noto Sans, Noto Sans Devanagari',
    fontSize: 36,
    color: '#fff',
    background: 'rgba(0,0,0,0.5)',
  },
  karaoke: {
    position: 'absolute',
    bottom: 100,
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Noto Sans, Noto Sans Devanagari',
    fontSize: 44,
    color: '#ffeb3b',
    textShadow: '2px 2px 8px #000',
  },
};

const CaptionStyles = ({ captions, preset }) => (
  <div style={presets[preset] || presets.bottom}>{captions}</div>
);

export default CaptionStyles;
