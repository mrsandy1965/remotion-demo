import React, { useState } from 'react';
import Upload from './components/Upload';
import CaptionPreview from './components/CaptionPreview';

const stylePresets = [
  { value: 'bottom', label: 'Bottom Centered' },
  { value: 'top', label: 'Top Bar' },
  { value: 'karaoke', label: 'Karaoke Style' },
];

const App = () => {
  const [videoFilename, setVideoFilename] = useState('');
  const [videoSrc, setVideoSrc] = useState('');
  const [captions, setCaptions] = useState('');
  const [stylePreset, setStylePreset] = useState('bottom');
  const [loading, setLoading] = useState(false);

  const handleUpload = (filename) => {
    setVideoFilename(filename);
    setVideoSrc(`/uploads/${filename}`);
  };

  const handleCaption = async () => {
    if (!videoFilename) return;
    setLoading(true);
    const res = await fetch('/caption', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filename: videoFilename }),
    });
    const data = await res.json();
    setCaptions(data.captions);
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 32 }}>
      <h1>Remotion Captioning Demo</h1>
      <Upload onUpload={handleUpload} />
      <div style={{ margin: '16px 0' }}>
        <button onClick={handleCaption} disabled={!videoFilename || loading}>
          {loading ? 'Generating Captions...' : 'Auto-generate captions'}
        </button>
      </div>
      <div style={{ margin: '16px 0' }}>
        <label>Caption Style: </label>
        <select value={stylePreset} onChange={e => setStylePreset(e.target.value)}>
          {stylePresets.map(p => (
            <option key={p.value} value={p.value}>{p.label}</option>
          ))}
        </select>
      </div>
      {videoSrc && captions && (
        <CaptionPreview videoSrc={videoSrc} captions={captions} stylePreset={stylePreset} />
      )}
    </div>
  );
};

export default App;
