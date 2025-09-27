import React, { useState } from 'react';

const Upload = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('video', file);
    const res = await fetch('/upload', {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    onUpload(data.filename);
  };

  return (
    <div>
      <input type="file" accept="video/mp4" onChange={handleChange} />
      <button onClick={handleUpload}>Upload MP4</button>
    </div>
  );
};

export default Upload;
