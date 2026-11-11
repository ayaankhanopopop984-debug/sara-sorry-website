SARA'S SORRY WEBSITE — SOFT PINK EDITION

FILES
- index.html       Main 12-slide experience
- style.css        Responsive blush-pink design and animations
- script.js        CONFIG, navigation, audio checks and interactions
- images/          Optional images folder (not needed for the current design)
- audio/           Put an optional voice recording here as voice.mp3

PERSONALISING THE WORDING
Open script.js and edit the CONFIG object at the top.
- name: Sara's name
- mistake: 3–4 short apology lines
- feelings: 3–4 short lines about missing and loving her
- appreciation: up to 4 objects with emoji and text
- realization: 3 short lessons
- promises: up to 4 short promises
- letter: a short letter with three paragraphs separated by blank lines
- noMessages: the bubbles used when the No button moves
- attemptThreshold: number of attempts before the final No-button bubble
- audioPath: optional audio location, default audio/voice.mp3

OPTIONAL VOICE NOTE
Place the recording at audio/voice.mp3. The audio slide and floating music
button appear only if the browser can load the file. Playback is never automatic
and starts muted; the listener can unmute it.

RUN LOCALLY
From this folder, run:
  python3 -m http.server 8000
Then open:
  http://127.0.0.1:8000

FREE HOSTING: GITHUB PAGES
1. Create a GitHub repository and upload all files/folders in this project.
2. Open Settings > Pages.
3. Select Deploy from a branch, choose main and / (root), then Save.
4. Open the published Pages URL.

FREE HOSTING: NETLIFY
1. Sign in to Netlify.
2. Drag the complete extracted project folder into Netlify Drop, or connect the repo.
3. No build command is required; this is plain HTML, CSS and JavaScript.

NOTES
- canvas-confetti is pinned to cdnjs version 1.9.3.
- If the CDN is unavailable, the rest of the experience still works.
- Use respectful Roman-script Hinglish in CONFIG; avoid informal pronouns.