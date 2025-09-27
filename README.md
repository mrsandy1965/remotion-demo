yes # Remotion Captioning Demo

## Features
- Upload MP4 video
- Auto-generate captions (speech-to-text)
- Hinglish (Hindi + English) caption support
- 2–3 caption style presets
- Remotion Player preview
- Export final video with captions

## Prerequisites
- Node.js v18+
- Docker (optional, for devcontainer)

## Setup
1. Install dependencies:
	```bash
	npm install
	```
2. Start backend server:
	```bash
	npm start
	```
3. Start Remotion preview:
	```bash
	npm run dev
	```
4. Export final video:
	```bash
	npm run render
	```

## Folder Structure
- `src/components`: React UI components
- `src/remotion`: Remotion video composition
- `src/backend`: Node.js backend (speech-to-text)
- `public/fonts`: Hinglish fonts (Noto Sans, Noto Sans Devanagari)
- `sample.mp4`: Sample video

## Speech-to-Text
- Uses Whisper (local or API). See `src/backend/stt.js` for details.

## Fonts
- Download Noto Sans and Noto Sans Devanagari from Google Fonts and place in `public/fonts`.

## Sample Files
- Add a sample MP4 to `public/sample.mp4`.
- Exported captioned video will be saved as `output.mp4`.

## Devcontainer
- Use `.devcontainer` for containerized setup (optional).

---

For any issues, see Remotion docs: https://www.remotion.dev/docs
# remotion-demo