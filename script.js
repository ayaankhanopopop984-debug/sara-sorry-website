/* ============================================================
   SARA'S SORRY WEBSITE | 17 slides | vanilla JavaScript only
   Personalise all wording in CONFIG. All Hinglish uses aap-form.
   ============================================================ */
const CONFIG = {
  // Name shown throughout the story.
  name: "Sara",
  // Change this before sharing the site.
  senderName: "Ayaan",
  // Slide 2: the three personal apology lines.
  slide2: [
    "Mujhe pata hai maine aapko hurt kiya hai.",
    "Ye sochkar mujhe dil se afsos hota hai ki meri wajah se aapko takleef hui.",
    "Sara, aap mere liye bahut important hain. Main aapko bahut pyaar hoon."
  ],
  // Slide 3: replace the first line with the exact mistake when ready.
  mistake: [
    "Maine aapko hurt kiya, aur ye meri galti thi.",
    "Mujhe us waqt sochna chahiye tha ki aapko kaisa lagega.",
    "Main apni galti sudharunga aur apne actions se aapko ye prove bhi karunga, bachwa.",
    "Aage se main aisa kuch nahi karunga jo aapko dukh de, aur hamesha aapko smile karwaunga."
  ],
  // Slide 4: messages appear one at a time.
  chatMessages: [
    "Sara, ek baat kehni thi",
    "Mujhe pata hai aap naraz hain",
    "Galti meri thi, sorry 🥺",
    "Aapse baat kiye bina din adhura lagta hai",
    "Please ek baar maaf kar dijiye na",
    "Main wait kar raha hoon 🤍"
  ],
  // Slide 5: floating love notes.
  loveLines: ["I love you", "I love you Sara", "I love you ❤️", "Love you so much", "Aap meri zindagi hain", "I miss you"],
  // Slide 6: four appreciation cards with emoji and short text.
  appreciation: [
    { emoji: "💗", text: "Aap meri zindagi ka sabse pyaara hissa hain." },
    { emoji: "🌤️", text: "Aapse baat karna mere kharab din ko bhi khoobsurat bana deta hai." },
    { emoji: "🌷", text: "Aapki muskurahat dekh kar mujhe sab theek lagne lagta hai." },
    { emoji: "🤍", text: "Aapke saath mujhe sukoon milta hai." }
  ],
  // Slide 7: the front and back of each flip card.
  reasons: [
    { title: "Aapki smile", text: "Aap muskurati hain to mera poora din achha ho jata hai." },
    { title: "Aapki baatein", text: "Aapse baat karte hue time ka pata hi nahi chalta." },
    { title: "Aapki care", text: "Aap jis tarah parwah karti hain, wo mujhe bahut khaas lagta hai." },
    { title: "Aapka gussa bhi", text: "Aap naraz hoti hain tab bhi pyaari lagti hain, sach me." },
    { title: "Aapka saath", text: "Aapke saath mujhe sukoon milta hai." },
    { title: "Poori aap", text: "Mujhe aapke siwa koi aur nahi chahiye." }
  ],
  // Slide 9: wishes carried by the lanterns.
  wishes: [
    "Aap hamesha khush rahein",
    "Aapki har wish poori ho",
    "Hamara saath hamesha bana rahe",
    "Aapki muskurahat kabhi na jaye",
    "Main aapka saath kabhi nahi chhodunga",
    "Aap jaisi pyaari hain, hamesha waisi hi rahein"
  ],
  // Slide 10: what I have realised.
  realization: [
    "Ye galti meri thi, aur main uski poori zimmedari leta hoon and i'll fix everything.",
    "Aapki baatein dhyan se sununga, samajhunga aur unki izzat karunga. Kabhi rude nahi hounga; hamesha sabr aur bahut saare pyaar se pesh aaunga.",
    "Main sirf keh kar nahi, apne action se aapka bharosa dobara jeetunga."
  ],
  // Slide 11: four promises I intend to keep.
  promises: [
    "Main sirf ache waqt mey nhi balki mushkil dino me bhi aapke saath khada rahunga. Hamesha aapke saath rahunga aur hamesha aapka saath dunga.",
    "Main aapki baat dhyan se sununga aur aapko phirse bharose jeetunga.",
    "Jo waade maine aapse kiye hain, unhe sirf kahunga nahi, nibhaunga bhi purey karunga.",
    "Main sach bolunga, pyaar se baat karunga, aur aap naraz hongi apko manaunga, samajhunga or kabhi rude nhi hounga i promise."
  ],
  // Slide 11: phrases and symbols used by the Pinky Promise rain canvas.
  pinkyRain: [
    "I love you", "I love you Sara", "I love you ❤️", "Love you so much", "I miss you",
    "Aap meri favourite hain", "Sorry 🥺", "Mera bachwaa 💗", "Aap meri duniya ho", "💕", "💗", "❤️", "✨"
  ],
  // Slide 13: one message is shown when each balloon pops.
  balloonLines: [
    "Sorry, Sara 🥺", "Aap bahut pyaari hain 💗", "Mujhe aapki bahut yaad aati hai", "Ek chance dijiye na 🤞",
    "Aapke bina din adhura hai", "Main aapko khush rakhunga", "Aap meri favourite hain", "I love you 💛"
  ],
  // Slide 14: short bubbles beside the No button.
  noMessages: [
    "Sorry na, Sara 🥺", "I love you ❤️", "I miss you bahut 😭", "Yes kar dijiye na please 🥹",
    "Aise achha nahi lagta, aap soch lijiye 🥺", "Itna gussa mat kijiye na 💔",
    "Maaf kar dijiye, promise 🤞", "No button bhi aapse darr gaya 😂", "Bas ek baar Yes bol dijiye 💛"
  ],
  // Slide 14: the teddy says a new line for every attempt.
  teddyLines: [
    "Arre, No ko pakadna mushkil hai 😅", "Sara, please ek baar soch lijiye 🥺", "Dekhiye, main bhi udaas ho gaya 🧸",
    "Wo phir bhaag gaya, haha 😂", "Itna bhi kya gussa 💔", "Mujhe pata hai aap maan jaengi 🤍",
    "Dekhiye, Yes kitna bada ho gaya 😌", "Aapke liye ek surprise hai, bas Yes dabaiye 💐", "Aap zid karti hain tab bhi pyaari lagti hain 🥹"
  ],
  // Slide 17: empty strings create a paragraph gap in the typewriter letter.
  finalLetter: [
    "Mera bachwaa,",
    "",
    "Pehle ek baar phir se sorry. Galti meri thi aur main use maanta hoon.",
    "Maine aapko hurt kiya, ye soch kar mujhe aaj bhi achha nahi lagta.",
    "",
    "Par ek baat aur kehni thi, jo main shayad kam bolta hoon.",
    "Aap meri zindagi me bahut matter karti hain.",
    "Aapse baat karke mera kharab se kharab din bhi achha ho jata hai.",
    "Aapki smile dekh kar mujhe sukoon milta hai.",
    "Aap jitni samajhdaar hain, utni hi pyaari hain.",
    "Aapka dil bahut bada hai, aur wahi aapko sabse alag banata hai.",
    "Mujhe aapki har chhoti baat yaad rehti hai, kyunki wo mere liye chhoti nahi hoti.",
    "Main aapse bahut pyaar karta hoon, Sara. Shayad jitna main bol paata hoon, usse bhi zyada.",
    "",
    "Aap saath hoti hain to sab theek lagta hai.",
    "Aur aapke bina sab adhura sa.",
    "",
    "Main wada karta hoon ki aapko dobara aisa feel nahi karne dunga.",
    "Main sununga, samjhunga, aur aapka saath nibhaunga.",
    "",
    "Aapka,"
  ],
  // Number of No-button attempts before the gentle final prompt appears.
  attemptThreshold: 10,
  // Optional story slides. Intro, forgiveness, bouquet and final are always enabled.
  enabledSlides: {
    // Slide 2: apology and tappable teddy.
    admission: true,
    // Slide 3: mistake cards.
    mistake: true,
    // Slide 4: chat bubbles.
    chat: true,
    // Slide 5: floating love messages.
    loveFloating: true,
    // Slide 6: appreciation cards.
    meaning: true,
    // Slide 7: reasons flip cards.
    reasons: true,
    // Slide 8: Sara's special quiz.
    quiz: true,
    // Slide 9: night sky and lanterns.
    nightSky: true,
    // Slide 10: realisation cards.
    realised: true,
    // Slide 11: promises and pinky promise.
    promises: true,
    // Slide 12: bucket-list carousel.
    bucketList: true,
    // Slide 13: balloon pop.
    balloons: true,
    // Slide 16: love-meter rocket trip.
    loveMeter: true
  },
  // Slide 8: the quiz questions, four Sara answers and their matching reactions.
  quiz: {
    // Four question prompts.
    questions: [
      "Duniya ki sabse pyaari ladki kaun hai?",
      "Meri favourite insaan kaun hai?",
      "Jiski smile se mera din ban jata hai, wo kaun?",
      "Main sabse zyada pyaar kisse karta hoon?"
    ],
    // Exactly four options; every answer is Sara.
    options: ["Sara", "Sara", "Sara", "Sara"],
    // One teddy reaction for each answer position.
    reactions: [
      "Bilkul sahi jawab! 🎉",
      "Phir se sahi! Aap toh genius hain 😌",
      "Arre, chaaron options me aap hi hain 😂",
      "Koi galat option hai hi nahi 💗"
    ]
  },
  // Slide 12: the ten things I hope we can do together. Add the matching photos inside images/.
  bucketList: [
    { title: "Horse Riding", caption: "Aapke saath horse riding aur ek chhoti si race… aur main khushi-khushi aapse haar jaunga 👉👈", file: "images/horse-riding.jpg", emoji: "🐎" },
    { title: "Paragliding", caption: "Meri duniya (yaani aap 🫣🤭) ke saath upar se poori duniya dekhna 😝💗", file: "images/paragliding.jpg", emoji: "🪂" },
    { title: "Beautiful Ride", caption: "Aapke saath ek beautiful ride… sirf aap aur main 🥹💗", file: "images/hot-air-balloon.jpg", emoji: "🎈" },
    { title: "Makkah aur Madina", caption: "Inshallah, ek din aapke saath Umrah aur ziyarat karni hai 🤍", file: "images/makkah-madina.jpg", emoji: "🕋" },
    { title: "Beach Sunset", caption: "Samandar ke kinaare sunset dekhna… bas aap aur main 🥹💗", file: "images/beach-sunset.jpg", emoji: "🌅" },
    { title: "Kashmir ki Barf", caption: "Aapke saath snowfall, garam chai aur ek cute si snow fight 😂❄️", file: "images/kashmir-snow.jpg", emoji: "❄️" },
    { title: "Road Trip", caption: "Aap music sambhalna, main driving karunga… aur raste bhar humari baatein 🤭❤️", file: "images/road-trip.jpg", emoji: "🚗" },
    { title: "Stargazing", caption: "Stars dekhte hue main aapko bataunga ki main aapse kitna pyaar karta hoon 🥹✨", file: "images/stargazing.jpg", emoji: "✨" },
    { title: "Candlelight Dinner", caption: "Aap aur main, har week ek beautiful dinner… I promise 🥰❤️", file: "images/candlelight-dinner.jpg", emoji: "🕯️" },
    { title: "Taj Mahal", caption: "Taj Mahal ko mohabbat ki nishani kehte hain… uske saamne aapko apni mohabbat ka ehsaas dilana hai 🥹🤍", file: "images/taj-mahal.jpg", emoji: "🤍" },
    { title: "Our Cute Family", caption: "You, me & our little world — dher saari muskurahatein, sukoon aur beintehaa pyaar 🤍", file: "images/our-cute-family.jpg", emoji: "👨‍👩‍👧‍👦" },
    { title: "Our Nikah", caption: "Nikah ke is khoobsurat din se, zindagi bhar aapka haath thaam kar chalna hai. 🥹🤍", file: "images/our-nikah.jpg", emoji: "💍" },
    { title: "Under the Moon", caption: "Chaand ko dekhte hue aapko bataunga how much I love you… aur aap kitni pretty hain aur meri kitni khaas hain—meri life, heartbeat, love, sab aap hi hain 🫣💗", file: "images/under-the-moon.jpg", emoji: "🌙" }
  ],
  // Slide 16: every line in the moon-and-back sequence.
  loveMeter: {
    // The slider's opening question.
    question: "Aapko pata hai, main aapse kitna pyaar karta hoon?",
    // Text shown when the slider reaches 100 percent.
    crackText: "100% me nahi aata 😌",
    // The rocket launch line.
    launchText: "Chaliye, aapko dikhata hoon 🚀",
    // The moon-arrival message.
    moonText: "Moon pahunch gaye 🌙",
    // The two lines typed after the return journey.
    finalLine1: "I love you to the moon and back 🌙",
    finalLine2: "2,000,000 km/h ki speed se, main aapse pyaar karta hoon."
  }
};

(() => {
  "use strict";
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const slides = $$(".slide");
  const byNumber = (number) => $(`#slide-${number}`);
  const optionalFeature = { 2:"admission", 3:"mistake", 4:"chat", 5:"loveFloating", 6:"meaning", 7:"reasons", 8:"quiz", 9:"nightSky", 10:"realised", 11:"promises", 12:"bucketList", 13:"balloons", 16:"loveMeter" };
  const alwaysEnabled = new Set([1,14,15,17]);
  const enabledSequence = slides.map((slide) => Number(slide.dataset.slide)).filter((number) => {
    if (alwaysEnabled.has(number)) return true;
    const feature = optionalFeature[number];
    return feature ? CONFIG.enabledSlides[feature] !== false : true;
  });
  const enabledSet = new Set(enabledSequence);
  function nextEnabledNumber(from, direction = 1) {
    const candidates = direction > 0 ? enabledSequence : [...enabledSequence].reverse();
    return candidates.find((number) => direction > 0 ? number >= from : number <= from) ?? null;
  }
  function relativeEnabledNumber(delta) {
    const index = enabledSequence.indexOf(currentNumber);
    return enabledSequence[clamp(index + delta, 0, enabledSequence.length - 1)];
  }
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const liteHardware = (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) || (navigator.deviceMemory && navigator.deviceMemory <= 4);
  let liteMode = Boolean(reducedMotion || liteHardware);
  document.body.classList.toggle("lite-mode", liteMode);
  document.body.classList.add("app-active");

  const prevButton = $("#prevButton");
  const nextButton = $("#nextButton");
  const slideCounter = $("#slideCounter");
  const progressDots = $("#progressDots");
  const meterFill = $("#meterFill");
  const meterHeart = $("#meterHeart");
  const sparkleCanvas = $("#sparkleCanvas");
  const sparkleCtx = sparkleCanvas.getContext("2d");
  let currentNumber = 1;
  let currentSlide = byNumber(1);
  let rafId = 0;
  let lastFrame = 0;
  let frameSamples = [];
  let frameCount = 0;
  let documentPaused = false;
  let hiddenAt = 0;
  let lastPointer = null;
  let pointerPending = false;
  let lastTrailAt = 0;
  let finalScrollPending = false;
  let lastNoCheck = 0;
  let noPointerHandled = false;
  let lastTiltCard = null;
  let tasks = [];
  let taskSequence = 0;
  let sparkleParticles = [];
  let loveTapCount = 0;
  let noAttempts = 0;
  let noMessageIndex = 0;
  let teddyLineIndex = 0;
  let yesScale = 1;
  let noScale = 1;
  let noBehaviorIndex = -1;
  let noTemporaryYesUntil = 0;
  let noShyUntil = 0;
  let noLastPosition = { left: 0, top: 0 };
  let forgiveMessageUntil = 0;
  let yesAdvanceAt = 0;
  let envelopeAdvanceAt = 0;
  let balloonPopped = new Set();
  let balloonMessageToken = 0;
  let pinkyStart = 0;
  let pinkyDone = false;
  let pinkyRainItems = [];
  let pinkyRainSprites = [];
  let pinkyRainStartedAt = 0;
  let pinkyRainCanvasSize = { width: 1, height: 1 };
  let bouquetHoldStart = 0;
  let bouquetHoldPointerId = null;
  let bouquetHoldTimer = 0;
  let bouquetTaskIds = [];
  let slideTransitionToken = 0;
  let bouquetHoldDone = false;
  let bouquetPetals = [];
  let bouquetAutoAdvanceAt = 0;
  let bouquetRainStartAt = 0;
  let bouquetSpawned = 0;
  let bouquetSprites = [];
  let bouquetExitFadePending = false;
  let finalLetterIndex = 0;
  let finalCharIndex = 0;
  let finalLetterAccumulator = 0;
  let finalAutoScroll = true;
  let finalLetterDone = false;
  let finalConfettiDone = false;
  let nightStars = [];
  let namePoints = [];
  let nameStrokes = [];
  let nameStarStarts = [];
  let nameSkyPulseStarted = false;
  let constellationStart = 0;
  let constellationDone = false;
  let lanterns = [];
  let wishIndex = 0;
  let chatStart = 0;
  let chatRendered = -1;
  let balloonsStarted = false;
  let quizIndex = 0;
  let quizReactionUntil = 0;
  let quizDone = false;
  let bucketIndex = 0;
  let bucketPointerStart = null;
  let loveMeterStage = "slider";
  let loveMeterStageAt = 0;
  let loveMeterDone = false;
  let loveMeterFinalIndex = 0;
  let loveMeterFinalChar = 0;
  let loveMeterFinalAccumulator = 0;
  let loveMeterNamePoints = [];
  let loveMeterNameStrokes = [];
  let loveMeterNameSpawned = false;
  let loveMeterFireworks = [];
  let loveMeterTrail = [];
  let rocketTrailTick = 0;
  let loveMeterLastSpeed = 0;
  let rocketPathCache = null;

  const tasksAdd = (delay, callback, slideNumber = currentNumber) => {
    const task = { id: ++taskSequence, due: performance.now() + delay, callback, slideNumber };
    tasks.push(task);
    return task.id;
  };
  const tasksClearFor = (slideNumber) => { tasks = tasks.filter((task) => task.slideNumber !== slideNumber); };
  const tasksClearAll = () => { tasks = []; bouquetTaskIds = []; };
  function scheduleBouquetTask(delay, callback) {
    const id = tasksAdd(delay, callback, 15);
    bouquetTaskIds.push(id);
    return id;
  }
  function clearBouquetTasks() {
    if (!bouquetTaskIds.length) return;
    const pending = new Set(bouquetTaskIds);
    tasks = tasks.filter((task) => !pending.has(task.id));
    bouquetTaskIds = [];
  }
  const vibrate = (pattern = 30) => { try { if (navigator.vibrate) navigator.vibrate(pattern); } catch (_) { /* Vibration is optional. */ } };
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const random = (min, max) => min + Math.random() * (max - min);

  // Reusable hand-drawn letter geometry for the night sky and the fireworks.
  // Sara uses clean strokes; other names fall back to unlimited offscreen text sampling.
  function getNameStrokes(rect, spacingUnits = .3) {
    const x = rect.x || 0; const y = rect.y || 0;
    const width = Math.max(1, rect.width); const height = Math.max(1, rect.height);
    const name = String(CONFIG.name || "SARA").toUpperCase();
    if (name === "SARA") {
      const definitions = [
        { offset: 0, letter: "S", paths: [[[.92,.20],[.70,.03],[.30,.03],[.08,.25],[.15,.50],[.50,.70],[.85,.90],[.92,1.15],[.70,1.37],[.30,1.37],[.06,1.20]]] },
        { offset: 1.4, letter: "A", paths: [[[0,1.4],[.5,0],[1,1.4]],[[.2,.95],[.8,.95]]] },
        { offset: 2.8, letter: "R", paths: [[[.05,1.4],[.05,0],[.65,0],[.95,.18],[.95,.48],[.65,.68],[.05,.68]],[[.45,.68],[.95,1.4]]] },
        { offset: 4.2, letter: "A", paths: [[[0,1.4],[.5,0],[1,1.4]],[[.2,.95],[.8,.95]]] }
      ];
      const unit = Math.min(width / 5.2, height / 1.4);
      const originX = x + (width - unit * 5.2) / 2;
      const originY = y + (height - unit * 1.4) / 2;
      const strokes = [];
      definitions.forEach((definition) => definition.paths.forEach((path, pathIndex) => {
        const points = path.map(([px, py]) => ({ x: originX + (definition.offset + px) * unit, y: originY + py * unit }));
        const smooth = definition.letter === "S" || (definition.letter === "R" && pathIndex === 0);
        const dense = denseStrokePoints(points, smooth, Math.max(4, unit / 35));
        const stars = spacedStrokePoints(dense, Math.max(3, unit * spacingUnits));
        strokes.push({ letter: definition.letter, points, dense, stars, smooth });
      }));
      return { strokes, points: strokes.flatMap((stroke) => stroke.stars), fallback: false };
    }

    const off = document.createElement("canvas"); off.width = 1200; off.height = 340;
    const ctx = off.getContext("2d"); ctx.clearRect(0, 0, off.width, off.height);
    let fontSize = 220; ctx.font = `700 ${fontSize}px "Playfair Display", Georgia, serif`;
    while (ctx.measureText(name).width > 1080 && fontSize > 40) { fontSize -= 8; ctx.font = `700 ${fontSize}px "Playfair Display", Georgia, serif`; }
    ctx.fillStyle = "#fff"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText(name, 600, 170);
    const pixels = ctx.getImageData(0, 0, off.width, off.height).data; const points = [];
    const step = 5;
    const scale = Math.min(width * .94 / 1080, height * .72 / 300);
    const drawWidth = 1200 * scale; const drawHeight = 340 * scale;
    const offsetX = x + (width - drawWidth) / 2; const offsetY = y + (height - drawHeight) / 2;
    for (let py = 0; py < off.height; py += step) for (let px = 0; px < off.width; px += step) {
      if (pixels[(py * off.width + px) * 4 + 3] > 80) points.push({ x: offsetX + px * scale, y: offsetY + py * scale });
    }
    return { strokes: [], points, fallback: true };
  }
  function denseStrokePoints(points, smooth, stepPx = 5) {
    if (points.length < 2) return points.slice();
    const sampled = [points[0]];
    const appendLine = (a, b) => { const length = Math.hypot(b.x-a.x,b.y-a.y); const count = Math.max(1,Math.ceil(length/stepPx)); for (let i=1;i<=count;i++) { const t=i/count; sampled.push({x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t}); } };
    const appendQuad = (a, control, b) => { const length=Math.hypot(control.x-a.x,control.y-a.y)+Math.hypot(b.x-control.x,b.y-control.y); const count=Math.max(4,Math.ceil(length/stepPx)); for(let i=1;i<=count;i++){const t=i/count,u=1-t;sampled.push({x:u*u*a.x+2*u*t*control.x+t*t*b.x,y:u*u*a.y+2*u*t*control.y+t*t*b.y});} };
    if (!smooth || points.length < 3) { for(let i=1;i<points.length;i++) appendLine(points[i-1],points[i]); return sampled; }
    let current = points[0];
    for (let i=1;i<points.length-1;i++) {
      const next = {x:(points[i].x+points[i+1].x)/2,y:(points[i].y+points[i+1].y)/2};
      appendQuad(current,points[i],next); current=next;
    }
    appendQuad(current,points[points.length-2],points[points.length-1]);
    return sampled;
  }
  function spacedStrokePoints(points, spacing) {
    if (!points.length) return [];
    const result = [points[0]]; let carry = 0; let previous = points[0];
    for (let i=1;i<points.length;i++) {
      const point=points[i]; const dx=point.x-previous.x; const dy=point.y-previous.y; const length=Math.hypot(dx,dy);
      if (length > 0) {
        let distance = spacing - carry;
        while (distance <= length) { const t=distance/length; result.push({x:previous.x+dx*t,y:previous.y+dy*t}); distance += spacing; }
        carry = (carry + length) % spacing;
      }
      previous = point;
    }
    const last = points[points.length-1];
    if (Math.hypot(last.x-result[result.length-1].x,last.y-result[result.length-1].y) > spacing*.35) result.push(last);
    return result;
  }
  function clearCanvasFully(canvas, context) {
    if (!canvas || !context) return;
    context.setTransform(1,0,0,1,0,0); context.globalAlpha = 1;
    context.clearRect(0,0,canvas.width,canvas.height);
  }

  /* Procedural, seeded florist-style bouquet. Stable on every visit and filter-free. */
  function seededRandom(seed) {
    let value = seed >>> 0;
    return () => { value += 0x6D2B79F5; let t=value; t=Math.imul(t^(t>>>15),t|1); t^=t+Math.imul(t^(t>>>7),t|61); return ((t^(t>>>14))>>>0)/4294967296; };
  }
  function createBouquetSVG() {
    const rng = seededRandom(0x5A2A2026);
    const r = (min,max) => min + rng()*(max-min);
    const parts = [];
    parts.push(`<svg class="bouquet-svg" viewBox="0 0 360 420" role="img" aria-label="A full hand-tied bouquet of five red roses, three white lilies, greenery and baby's breath">
      <defs>
        <radialGradient id="bouqRose0" cx="35%" cy="22%"><stop stop-color="#ffbdcd"/><stop offset=".38" stop-color="#ef6f8f"/><stop offset="1" stop-color="#9f183b"/></radialGradient>
        <radialGradient id="bouqRose1" cx="34%" cy="22%"><stop stop-color="#ffd0d9"/><stop offset=".42" stop-color="#d63a63"/><stop offset="1" stop-color="#82102f"/></radialGradient>
        <radialGradient id="bouqRose2" cx="35%" cy="22%"><stop stop-color="#ffe0e7"/><stop offset=".42" stop-color="#f7b3c4"/><stop offset="1" stop-color="#cb3b68"/></radialGradient>
        <radialGradient id="bouqRose3" cx="35%" cy="22%"><stop stop-color="#fff0f3"/><stop offset=".42" stop-color="#ef8ba6"/><stop offset="1" stop-color="#a92752"/></radialGradient>
        <radialGradient id="bouqRose4" cx="35%" cy="22%"><stop stop-color="#ffc5d5"/><stop offset=".42" stop-color="#b5173f"/><stop offset="1" stop-color="#650d29"/></radialGradient>
        <linearGradient id="bouqLeaf" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#72ad78"/><stop offset=".48" stop-color="#3f7d4e"/><stop offset="1" stop-color="#245b39"/></linearGradient>
        <linearGradient id="bouqLeafLight" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#9acb8f"/><stop offset="1" stop-color="#4f965e"/></linearGradient>
        <linearGradient id="bouqLily" x1="0" y1="0" x2=".9" y2="1"><stop stop-color="#fff"/><stop offset=".46" stop-color="#fff8f4"/><stop offset=".76" stop-color="#f7d4df"/><stop offset="1" stop-color="#d99bad"/></linearGradient>
        <linearGradient id="bouqLilyInner" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fffdf8"/><stop offset=".55" stop-color="#ffe9ef"/><stop offset="1" stop-color="#e9aec2"/></linearGradient>
        <linearGradient id="bouqWrap" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fff6e6"/><stop offset=".4" stop-color="#fbe9cf"/><stop offset="1" stop-color="#c6a27f"/></linearGradient>
        <linearGradient id="bouqWrapPink" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#ffe2eb"/><stop offset="1" stop-color="#eaa4bd"/></linearGradient>
        <linearGradient id="bouqRibbon" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#ffadc4"/><stop offset=".48" stop-color="#e8588a"/><stop offset="1" stop-color="#a92354"/></linearGradient>
        <radialGradient id="bouqShadow"><stop stop-color="#8b4d65" stop-opacity=".22"/><stop offset="1" stop-color="#8b4d65" stop-opacity="0"/></radialGradient>
      </defs>
      <ellipse cx="180" cy="404" rx="115" ry="12" fill="url(#bouqShadow)"/>`);

    // Stems first, converging into the paper wrap.
    const flowers = [
      {x:76,y:121},{x:143,y:73},{x:214,y:91},{x:282,y:132},{x:174,y:183},
      {x:92,y:198},{x:254,y:201},{x:125,y:154}
    ];
    parts.push(`<g fill="none" stroke="#477b4c" stroke-width="4.2" stroke-linecap="round" opacity=".95">`);
    flowers.forEach((f,i)=>parts.push(`<path d="M180 365 Q${r(142,215).toFixed(1)} ${r(270,320).toFixed(1)} ${f.x} ${f.y+20}"/>`));
    parts.push(`</g>`);

    // Ten fanning leaves: a mix of rounded eucalyptus and long pointed foliage.
    const leafDefs = [
      [78,263,-48,22,30],[111,238,-45,-24,28],[145,216,-26,-48,25],[180,230,2,-60,27],
      [215,216,31,-49,25],[248,239,52,-22,27],[282,268,55,23,29],[126,287,-60,8,25],[230,289,59,9,26],[178,290,4,39,24]
    ];
    leafDefs.forEach((leaf,i)=>{
      const [x,y,dx,dy,w]=leaf; const angle=Math.atan2(dy,dx)*180/Math.PI;
      const long = i%3===1;
      parts.push(`<g transform="translate(${x} ${y}) rotate(${angle})">
        <path d="M0 0 C${-w*.25} ${-w*.7} ${dx*.42} ${-w*.9} ${dx} ${dy} C${dx*.42} ${w*.9} ${-w*.25} ${w*.7} 0 0Z" fill="url(#bouqLeaf)" stroke="#275e3b" stroke-opacity=".55" stroke-width="1.3"/>
        <path d="M0 0 C${-w*.2} ${-w*.55} ${dx*.5} ${-w*.62} ${dx*.94} ${dy*.94} C${dx*.52} ${-w*.05} ${w*.08} ${-w*.15} 0 0Z" fill="url(#bouqLeafLight)" opacity=".55"/>
        <path d="M0 0 Q${dx*.42} ${dy*.08} ${dx} ${dy}" fill="none" stroke="#c0d99a" stroke-width="1.15" stroke-opacity=".85"/>
        ${long?`<path d="M${dx*.2} ${dy*.15} Q${dx*.6} ${dy*.6} ${dx*.83} ${dy*.78}" fill="none" stroke="#285f3d" stroke-width=".8" opacity=".45"/>`:''}
      </g>`);
    });

    // Airy baby's-breath clusters near the outer edges.
    const babyClusters=[[53,116],[305,109],[45,182],[315,190],[83,58],[279,58],[181,48]];
    babyClusters.forEach(([cx,cy],i)=>{
      const count=5; parts.push(`<g transform="translate(${cx} ${cy})" stroke="#779a6f" stroke-width="1.1" fill="none"><path d="M0 22 Q${r(-7,7).toFixed(1)} 8 0 -2 M0 15 Q-10 6 -13 0 M0 12 Q11 4 13 -3"/></g>`);
      for(let k=0;k<count;k++){
        const a=(Math.PI*2*k/count)+r(-.2,.2); const px=cx+Math.cos(a)*r(5,13); const py=cy+Math.sin(a)*r(5,13); const pr=r(2.1,3.1);
        parts.push(`<g transform="translate(${px.toFixed(1)} ${py.toFixed(1)})">${Array.from({length:5},(_,j)=>`<ellipse cx="0" cy="-${(pr*1.05).toFixed(1)}" rx="${(pr*.52).toFixed(1)}" ry="${(pr*.82).toFixed(1)}" transform="rotate(${j*72})" fill="#fffdfd" stroke="#e9dce3" stroke-width=".45"/>`).join('')}<circle r="${(pr*.36).toFixed(1)}" fill="#efd59a"/></g>`);
      }
    });

    // Five peach/lilac filler blossoms.
    [[64,220,"#ffd4c8"],[300,226,"#d9c4f5"],[105,92,"#f8c4d9"],[257,83,"#e2c9f4"],[181,34,"#ffd9ce"]].forEach(([cx,cy,color])=>{
      const pr=5.2; parts.push(`<g transform="translate(${cx} ${cy})">${Array.from({length:5},(_,j)=>`<ellipse cx="0" cy="-${pr}" rx="${pr*.56}" ry="${pr*.98}" transform="rotate(${j*72})" fill="${color}" stroke="#fff5fa" stroke-width=".7"/>`).join('')}<circle r="2.1" fill="#e9b955"/></g>`);
    });

    // Three white/blush lilies, six pointed curved petals and delicate stamens each.
    [[88,91,.83,-7],[190,55,.92,4],[286,112,.78,12]].forEach(([cx,cy,scale,tilt],li)=>{
      parts.push(`<g transform="translate(${cx} ${cy}) rotate(${tilt}) scale(${scale})">`);
      for(let p=0;p<6;p++){
        const angle=p*60; const inner=p%2===1;
        parts.push(`<g transform="rotate(${angle})">
          <path d="M0 4 C-13 -16 -23 -47 -2 -82 C15 -57 15 -23 0 4Z" fill="${inner?'url(#bouqLilyInner)':'url(#bouqLily)'}" stroke="#dfaabd" stroke-width="1.1"/>
          <path d="M0 0 Q-2 -31 -1 -75" fill="none" stroke="#e7a5bd" stroke-width="1.15" opacity=".72"/>
          <path d="M-3 -12 Q-8 -27 -3 -43 M2 -18 Q8 -36 3 -53" fill="none" stroke="#fff" stroke-width="1.1" opacity=".8"/>
        </g>`);
      }
      for(let d=0;d<10;d++){
        const a=r(0,Math.PI*2); const rr=r(7,17); parts.push(`<circle cx="${(Math.cos(a)*rr).toFixed(1)}" cy="${(Math.sin(a)*rr).toFixed(1)}" r="${r(.7,1.35).toFixed(1)}" fill="#cc6486" opacity=".62"/>`);
      }
      for(let s=0;s<6;s++){
        const angle=s*60+8; const ex=Math.cos(angle*Math.PI/180)*29; const ey=Math.sin(angle*Math.PI/180)*29-8;
        parts.push(`<path d="M0 0 Q${(ex*.45).toFixed(1)} ${(ey*.6).toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}" fill="none" stroke="#c79a54" stroke-width="1.25"/><ellipse cx="${ex.toFixed(1)}" cy="${ey.toFixed(1)}" rx="3.6" ry="1.8" transform="rotate(${angle} ${ex.toFixed(1)} ${ey.toFixed(1)})" fill="#e29a3e"/>`);
      }
      parts.push(`<circle r="5.5" fill="#b4a85b"/><circle r="2.3" fill="#f3d88a"/></g>`);
    });

    // Five layered roses. Each ring has its own offset and petal size; a spiral bud finishes the centre.
    const roseSet=[[91,206,34,1],[150,154,40,4],[224,184,39,0],[273,228,33,2],[174,251,36,3]];
    roseSet.forEach(([cx,cy,radius,colorIndex],roseIndex)=>{
      const grad=`url(#bouqRose${colorIndex})`;
      parts.push(`<g transform="translate(${cx} ${cy})">`);
      const rings=[{n:8,s:1.05,offset:4},{n:7,s:.82,offset:2},{n:6,s:.62,offset:0},{n:5,s:.43,offset:-1}];
      rings.forEach((ring,ringIndex)=>{
        const order=Array.from({length:ring.n},(_,i)=>i).sort((a,b)=>((a+roseIndex)%ring.n)-((b+roseIndex)%ring.n));
        order.forEach((petalIndex)=>{
          const angle=petalIndex*360/ring.n+(roseIndex*13)+(ringIndex%2?14:0)+r(-4,4);
          const scale=radius/37*ring.s*r(.94,1.06); const lift=ring.offset+r(-1.2,1.2);
          parts.push(`<g transform="rotate(${angle.toFixed(1)}) translate(0 ${lift.toFixed(1)}) scale(${scale.toFixed(3)})">
            <path d="M0 6 C-10 0 -16 -14 -13 -27 C-10 -40 7 -45 17 -33 C27 -21 17 -6 7 2 C4 5 2 6 0 6Z" transform="translate(0 2)" fill="#72112e" opacity=".18"/>
            <path d="M0 6 C-10 0 -16 -14 -13 -27 C-10 -40 7 -45 17 -33 C27 -21 17 -6 7 2 C4 5 2 6 0 6Z" fill="${grad}" stroke="#851638" stroke-opacity=".5" stroke-width="1.05"/>
            <path d="M-11 -27 Q-5 -42 9 -39 Q17 -37 18 -30" fill="none" stroke="#fff2f4" stroke-width="2.1" stroke-linecap="round" opacity=".58"/>
            <path d="M-3 3 Q-7 -12 -3 -22 Q3 -31 11 -29" fill="none" stroke="#75122e" stroke-width="1" opacity=".24"/>
          </g>`);
        });
      });
      parts.push(`<circle r="${(radius*.34).toFixed(1)}" fill="#8f183d" opacity=".55"/><path d="M-9 4 C-18 -7 -7 -19 3 -15 C15 -12 12 1 4 6 C-2 10 -7 6 -5 1 C-3 -3 3 -3 4 0" fill="none" stroke="#6f102d" stroke-width="4" stroke-linecap="round"/><path d="M-8 -11 Q-1 -20 8 -14" fill="none" stroke="#ffd4df" stroke-width="2.5" stroke-linecap="round" opacity=".75"/></g>`);
    });

    // Inner pink tissue, folded cream kraft wrap, folds, and satin bow.
    parts.push(`<path d="M78 247 Q178 279 282 246 L236 399 Q180 414 124 399Z" fill="url(#bouqWrapPink)" stroke="#d995ad" stroke-width="1.5" opacity=".92"/>
      <path d="M59 237 Q177 285 301 238 L235 401 Q180 420 124 401Z" fill="url(#bouqWrap)" stroke="#bd9874" stroke-width="2"/>
      <path d="M77 253 Q119 312 123 397 M283 252 Q244 319 235 397 M180 280 Q181 338 180 405" fill="none" stroke="#fff9ec" stroke-width="3" opacity=".7"/>
      <path d="M77 253 Q180 298 283 252" fill="none" stroke="#fffdf4" stroke-width="4" opacity=".75"/>
      <path d="M126 337 Q180 360 234 337 L219 400 Q180 412 141 400Z" fill="url(#bouqRibbon)" stroke="#a82b5a" stroke-width="1.5"/>
      <path d="M180 357 C147 313 100 321 128 355 Q150 376 180 361 C210 376 255 356 233 332 Q213 310 180 357Z" fill="url(#bouqRibbon)" stroke="#b63265" stroke-width="2"/>
      <path d="M175 355 Q144 333 132 341 M185 355 Q219 331 230 341" fill="none" stroke="#ffd5e2" stroke-width="2.3" opacity=".8"/>
      <circle cx="180" cy="359" r="10" fill="#ffafc6" stroke="#a82b5a" stroke-width="2"/><circle cx="177" cy="356" r="3" fill="#fff2f6" opacity=".8"/>
      <path d="M141 369 L114 405 Q135 413 155 405 L172 369Z" fill="url(#bouqRibbon)" stroke="#b63265" stroke-width="1.4"/><path d="M190 369 L207 405 Q228 413 246 402 L219 369Z" fill="url(#bouqRibbon)" stroke="#b63265" stroke-width="1.4"/>
      </svg>`);
    return parts.join("");
  }
  const bouquetArt = $("#bouquetArt");
  if (bouquetArt) bouquetArt.innerHTML = createBouquetSVG();

  /* Draw one teddy face per mood. No stacked eyes or duplicate features. */
  function bearSVG(kind = "sad") {
    return `<svg class="cute-bear" viewBox="0 0 240 220" data-mood="${kind}" role="img" aria-label="A soft little teddy bear" focusable="false">
      <ellipse cx="120" cy="205" rx="67" ry="8" fill="#bd7997" opacity=".15"/>
      <circle cx="66" cy="48" r="30" fill="#bd8a79"/><circle cx="66" cy="48" r="16" fill="#edc2b6"/>
      <circle cx="174" cy="48" r="30" fill="#bd8a79"/><circle cx="174" cy="48" r="16" fill="#edc2b6"/>
      <ellipse cx="120" cy="143" rx="62" ry="58" fill="#c89582"/><ellipse cx="120" cy="153" rx="34" ry="31" fill="#f2d7c9"/>
      <g class="bear-arm bear-arm-left"><ellipse cx="63" cy="145" rx="18" ry="31" transform="rotate(24 63 145)" fill="#bd8978"/></g>
      <g class="bear-arm bear-arm-right"><ellipse cx="177" cy="145" rx="18" ry="31" transform="rotate(-24 177 145)" fill="#bd8978"/></g>
      <ellipse cx="120" cy="95" rx="59" ry="54" fill="#d3a08d"/>
      <ellipse cx="120" cy="119" rx="31" ry="22" fill="#f6e0d5"/>
      <ellipse class="bear-blush" cx="83" cy="124" rx="11" ry="6" fill="#ed8faa"/><ellipse class="bear-blush" cx="157" cy="124" rx="11" ry="6" fill="#ed8faa"/>
      <g class="bear-face face-sad"><path d="M88 83 Q98 76 106 83 M134 83 Q143 76 152 83" fill="none" stroke="#694454" stroke-width="3" stroke-linecap="round"/><ellipse cx="98" cy="96" rx="4" ry="5" fill="#503445"/><ellipse cx="142" cy="96" rx="4" ry="5" fill="#503445"/><path d="M108 132 Q120 121 132 132" fill="none" stroke="#805366" stroke-width="3" stroke-linecap="round"/></g>
      <g class="bear-face face-teary"><path d="M87 82 Q98 76 107 82 M133 82 Q143 76 153 82" fill="none" stroke="#694454" stroke-width="2.5" stroke-linecap="round"/><ellipse cx="98" cy="96" rx="6" ry="7" fill="#fff"/><ellipse cx="142" cy="96" rx="6" ry="7" fill="#fff"/><circle cx="99" cy="97" r="3.5" fill="#503445"/><circle cx="143" cy="97" r="3.5" fill="#503445"/><path d="M84 106 Q78 117 84 124 Q91 117 84 106 M156 106 Q150 117 156 124 Q163 117 156 106" fill="#8ed1e4"/></g>
      <g class="bear-face face-pleading"><ellipse cx="98" cy="96" rx="8" ry="10" fill="#fff"/><ellipse cx="142" cy="96" rx="8" ry="10" fill="#fff"/><circle cx="99" cy="98" r="4" fill="#503445"/><circle cx="143" cy="98" r="4" fill="#503445"/><circle cx="100" cy="95" r="1.5" fill="#fff"/><circle cx="144" cy="95" r="1.5" fill="#fff"/><path d="M108 132 Q120 122 132 132" fill="none" stroke="#805366" stroke-width="3" stroke-linecap="round"/><path d="M82 106 Q77 116 83 122" fill="none" stroke="#8ed1e4" stroke-width="3" stroke-linecap="round"/></g>
      <g class="bear-face face-happy"><path d="M88 96 Q98 83 108 96 M132 96 Q142 83 152 96" fill="none" stroke="#694454" stroke-width="3.2" stroke-linecap="round"/><path d="M105 126 Q120 146 135 126" fill="none" stroke="#805366" stroke-width="3.2" stroke-linecap="round"/><path d="M100 126 L140 126" stroke="#805366" stroke-width="2" opacity=".4"/></g>
      <ellipse cx="120" cy="113" rx="8" ry="6" fill="#78505b"/><path d="M120 119 Q114 125 109 120 M120 119 Q126 125 131 120" fill="none" stroke="#805366" stroke-width="2" stroke-linecap="round"/>
    </svg>`;
  }
  function renderBear(selector, mood = "sad") { const el = $(selector); if (el) el.innerHTML = bearSVG(mood); }
  function setBearMood(selector, mood) { const svg = $(".cute-bear", $(selector)); if (svg) svg.dataset.mood = mood; }
  renderBear("#sorryBear", "sad"); renderBear("#forgiveBear", "sad");
  renderBear("#quizBear", "happy"); renderBear("#finalBearLeft", "happy"); renderBear("#finalBearRight", "happy");

  /* Build editable text cards from CONFIG. */
  function makeCard(className, icon, text, index = 0, delay = 70) {
    const card = document.createElement("article");
    card.className = className;
    card.style.animationDelay = `${index * delay}ms`;
    const mark = document.createElement("span"); mark.className = "card-icon"; mark.textContent = icon;
    const copy = document.createElement("span"); copy.className = "card-copy"; copy.textContent = text;
    card.append(mark, copy); return card;
  }
  function renderList(selector, lines, icons, className) {
    const target = $(selector); target.replaceChildren();
    lines.forEach((line, index) => target.append(makeCard(className, icons[index % icons.length], line, index, 85)));
  }
  function renderSlideText() {
    const nameIntro = $("#nameIntro"); const finalName = $("#finalName"); const forgiveName = $("#forgiveName"); const chatName = $("#chatName");
    [nameIntro, finalName, forgiveName].forEach((node) => { if (node) node.textContent = CONFIG.name; });
    if (chatName) chatName.textContent = "Sarah.";
    const slide2 = $("#slide2Text"); slide2.replaceChildren();
    CONFIG.slide2.forEach((line, index) => { const p = document.createElement("p"); p.className = "short-paragraph"; p.textContent = line; p.style.animationDelay = `${index * 180}ms`; slide2.append(p); });
    renderList("#mistakeCards", CONFIG.mistake, ["💗", "🌷", "🤍", "✨"], "line-card stagger-card");
    const app = $("#appreciationGrid"); app.replaceChildren();
    CONFIG.appreciation.slice(0, 4).forEach((item, index) => {
      const card = makeCard("appreciation-card tilt-card", item.emoji, item.text, index, 100);
      card.tabIndex = 0; card.setAttribute("role", "button");
      const burst = () => sparkleBurstAt(card, 6, ["♡", "♥"]);
      card.addEventListener("click", burst); card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); burst(); } });
      app.append(card);
    });
    const reasons = $("#reasonsGrid"); reasons.replaceChildren();
    CONFIG.reasons.slice(0, 6).forEach((item, index) => {
      const button = document.createElement("button"); button.type = "button"; button.className = "reason-card tilt-card"; button.setAttribute("aria-pressed", "false"); button.setAttribute("aria-label", `${item.title}. Tap to reveal.`);
      const inner = document.createElement("span"); inner.className = "reason-inner";
      const front = document.createElement("span"); front.className = "reason-front"; front.innerHTML = `<span aria-hidden="true">♡</span>${escapeHTML(item.title)}`;
      const back = document.createElement("span"); back.className = "reason-back"; back.textContent = item.text;
      inner.append(front, back); button.append(inner); button.style.animationDelay = `${index * 75}ms`;
      button.addEventListener("click", () => { button.classList.toggle("is-flipped"); button.setAttribute("aria-pressed", String(button.classList.contains("is-flipped"))); if (button.classList.contains("is-flipped")) sparkleBurstAt(button, 5, ["♡"]); });
      reasons.append(button);
    });
    renderList("#realizationCards", CONFIG.realization, ["♡✓", "♡✓", "♡✓"], "realization-card stagger-card");
    renderList("#promisesGrid", CONFIG.promises, ["♥", "♥", "♥", "♥"], "promise-card stagger-card");
  }
  function escapeHTML(value) { return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char])); }
  renderSlideText();


  /* Slide 8: Sara's quiz. All four answers intentionally say Sara. */
  function resetQuiz() {
    quizIndex = 0; quizReactionUntil = 0; quizDone = false;
    $("#quizResult").hidden = true;
    $("#quizSpeech").textContent = "";
    $("#quizSpeech").classList.remove("is-visible");
    setBearMood("#quizBear", "happy");
    renderQuizQuestion();
  }
  function renderQuizQuestion() {
    const questionNode = $("#quizQuestion");
    const optionsNode = $("#quizOptions");
    if (quizIndex >= CONFIG.quiz.questions.length) {
      quizDone = true;
      questionNode.textContent = "Aapne saare sawaal jeet liye! 💗";
      $("#quizCounter").textContent = "Quiz complete";
      optionsNode.replaceChildren();
      const quizScore = $("#quizResult").querySelector("strong");
      if (quizScore) quizScore.textContent = `Score: ${CONFIG.quiz.questions.length} / ${CONFIG.quiz.questions.length} 🏆`;
      $("#quizResult").hidden = false;
      sparkleBurstAt($("#quizResult"), 10, ["♥", "♡", "✦"]);
      if (typeof window.confetti === "function" && !liteMode) {
        window.confetti({ particleCount: 22, spread: 44, startVelocity: 17, scalar: .58, gravity: .9, colors: ["#ff6f9f", "#e84a86", "#ffc9b9", "#d9b8ff"] });
      }
      return;
    }
    questionNode.textContent = CONFIG.quiz.questions[quizIndex];
    $("#quizCounter").textContent = `Sawal ${quizIndex + 1} / ${CONFIG.quiz.questions.length}`;
    optionsNode.replaceChildren();
    CONFIG.quiz.options.slice(0, 4).forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button"; button.className = "quiz-option"; button.textContent = option;
      button.addEventListener("click", () => answerQuiz(index, button), { once: true });
      optionsNode.append(button);
    });
  }
  function answerQuiz(optionIndex, selectedButton) {
    if (quizReactionUntil || quizDone) return;
    quizReactionUntil = performance.now() + 1600;
    $$(".quiz-option", $("#quizOptions")).forEach((button) => { button.disabled = true; button.classList.toggle("is-selected", button === selectedButton); });
    $("#quizSpeech").textContent = CONFIG.quiz.reactions[optionIndex] || CONFIG.quiz.reactions[0];
    $("#quizSpeech").classList.add("is-visible");
    setBearMood("#quizBear", optionIndex === 0 ? "happy" : "pleading");
    sparkleBurstAt(selectedButton, 5, ["♡", "✦"]);
    tasksAdd(1600, () => {
      quizReactionUntil = 0; quizIndex += 1;
      $("#quizSpeech").classList.remove("is-visible");
      setBearMood("#quizBear", "happy");
      renderQuizQuestion();
    }, 8);
  }

  /* Slide 12: light-touch carousel, mounting only the current card and neighbours. */
  const bucketViewport = $("#bucketViewport");
  const bucketCards = $("#bucketCards");
  const bucketImagePreloadCache = new Map();

  function preloadBucketImage(item) {
    if (!item || !item.file || bucketImagePreloadCache.has(item.file)) return;
    const image = new Image();
    image.decoding = "async";
    image.fetchPriority = "low";
    image.src = item.file;
    bucketImagePreloadCache.set(item.file, image);
  }
  function renderBucketCarousel() {
    bucketCards.replaceChildren();
    const items = CONFIG.bucketList;
    preloadBucketImage(items[bucketIndex + 1]);
    preloadBucketImage(items[bucketIndex + 2]);
    const start = Math.max(0, bucketIndex - 1);
    const end = Math.min(items.length - 1, bucketIndex + 1);
    for (let index = start; index <= end; index += 1) {
      const item = items[index]; const diff = index - bucketIndex;
      const card = document.createElement("article");
      card.className = `bucket-card${diff === 0 ? " is-current" : " is-side"}${item.title === "Makkah aur Madina" ? " is-sacred" : ""}`;
      card.style.transform = `translate3d(calc(-50% + ${diff * 66}%),0,0) scale(${diff === 0 ? 1 : .84})`;
      card.style.opacity = diff === 0 ? "1" : ".52";
      card.setAttribute("aria-label", `${index + 1} of ${items.length}: ${item.title}`);
      const visual = document.createElement("div"); visual.className = "bucket-visual";
      visual.style.setProperty("--bucket-tone", ["#f5c4d5", "#ddc8f7", "#ffd3bf", "#e7c8d5", "#ffc9b9", "#cbdcf2", "#e5c3b8", "#c7bfdc", "#e5c6ce", "#d9c5e9"][index]);
      const fallback = document.createElement("div"); fallback.className = "bucket-fallback"; fallback.textContent = item.emoji;
      const img = document.createElement("img");
      img.className = "bucket-photo";
      img.alt = "";
      img.loading = diff === 0 ? "eager" : "lazy";
      img.fetchPriority = diff === 0 ? "high" : "low";
      img.decoding = "async";
      img.addEventListener("load", () => { visual.classList.add("has-photo"); fallback.hidden = true; }, { once: true });
      img.addEventListener("error", () => { img.remove(); visual.classList.remove("has-photo"); fallback.hidden = false; }, { once: true });
      img.src = item.file;
      const shade = document.createElement("div"); shade.className = "bucket-shade";
      const copy = document.createElement("div"); copy.className = "bucket-copy";
      const title = document.createElement("h3"); title.textContent = item.title;
      const caption = document.createElement("p"); caption.textContent = item.caption;
      copy.append(title, caption);
      visual.append(fallback, img, shade, copy); card.append(visual);
      if (diff !== 0) card.addEventListener("click", () => changeBucket(index));
      bucketCards.append(card);
    }
    $("#bucketCounter").textContent = `${bucketIndex + 1} / ${items.length}`;
    const dots = $("#bucketDots"); dots.replaceChildren();
    items.forEach((item, index) => {
      const dot = document.createElement("span"); dot.className = `bucket-dot${index === bucketIndex ? " is-current" : ""}`;
      dot.setAttribute("aria-label", `${index + 1}: ${item.title}`); dots.append(dot);
    });
    $("#bucketPrev").disabled = bucketIndex === 0;
    $("#bucketNext").disabled = bucketIndex === items.length - 1;
  }
  function changeBucket(index) {
    bucketIndex = clamp(index, 0, CONFIG.bucketList.length - 1);
    renderBucketCarousel();
  }
  $("#bucketPrev").addEventListener("click", () => changeBucket(bucketIndex - 1));
  $("#bucketNext").addEventListener("click", () => changeBucket(bucketIndex + 1));
  bucketViewport.addEventListener("pointerdown", (event) => { bucketPointerStart = { x: event.clientX, y: event.clientY, id: event.pointerId }; }, { passive: true });
  bucketViewport.addEventListener("pointerup", (event) => {
    if (!bucketPointerStart) return;
    const dx = event.clientX - bucketPointerStart.x; const dy = event.clientY - bucketPointerStart.y; bucketPointerStart = null;
    if (Math.abs(dx) > 42 && Math.abs(dx) > Math.abs(dy)) changeBucket(bucketIndex + (dx < 0 ? 1 : -1));
  }, { passive: true });
  bucketViewport.addEventListener("pointercancel", () => { bucketPointerStart = null; }, { passive: true });

  /* Slide 16: one RAF-driven moon journey. No independent animation loops. */
  const loveMeterCanvas = $("#loveMeterCanvas");
  const loveMeterCtx = loveMeterCanvas.getContext("2d");
  const loveSlider = $("#loveSlider");
  let loveMeterStartAt = 0;
  function setLoveMeterStage(stage, now = performance.now()) {
    loveMeterStage = stage; loveMeterStageAt = now;
    const sliderStage = $("#loveMeterSliderStage");
    const rocketStage = $("#rocketStage");
    const finalStage = $("#loveMeterFinal");
    sliderStage.hidden = !["slider"].includes(stage);
    rocketStage.hidden = !["countdown", "flight", "moon", "return", "deliver", "static"].includes(stage);
    finalStage.hidden = !["final", "fireworks", "done", "static"].includes(stage);
    rocketStage.classList.toggle("is-static-scene", stage === "static");
    $(".love-meter-content").classList.toggle("is-static-scene", stage === "static");
    $("#rocketCountdown").textContent = "";
    if (stage === "countdown" || stage === "flight" || stage === "moon" || stage === "return") {
      $("#loveLaunchText").textContent = CONFIG.loveMeter.launchText;
    }
    if (stage === "moon" || stage === "return") $("#moonMessage").textContent = CONFIG.loveMeter.moonText;
  }
  function resetLoveMeter() {
    loveMeterDone = false; loveMeterFinalIndex = 0; loveMeterFinalChar = 0; loveMeterFinalAccumulator = 0;
    loveMeterNamePoints = []; loveMeterFireworks = []; loveMeterTrail = []; rocketTrailTick = 0; loveMeterLastSpeed = 0; loveMeterStartAt = performance.now();
    loveSlider.disabled = false; loveSlider.value = "0"; $("#loveRangeValue").textContent = "0%"; $(".love-range-wrap").classList.remove("is-cracked"); $("#loveCrackText").textContent = "";
    $("#loveRangeHint").classList.remove("is-visible");
    $("#loveMeterQuestion").textContent = CONFIG.loveMeter.question;
    $("#loveMeterFinalLine1").textContent = ""; $("#loveMeterFinalLine2").textContent = "";
    $("#loveMeterSara").textContent = "SARA"; $("#loveMeterStatus").textContent = "";
    $("#rocketSpeed").textContent = ""; $("#rocketCountdown").textContent = "";
    $("#moonMessage").textContent = "";
    $("#loveRocket").style.transform = "translate3d(-180px, 120vh, 0) rotate(0deg) scale(1)";
    $("#loveRocket").style.opacity = "1"; $("#loveRocket").style.zIndex = "4";
    $("#loveRocket").classList.remove("is-delivered"); $("#rocketEarth").classList.remove("has-arrival");
    loveMeterNameStrokes = []; loveMeterNameSpawned = false; rocketPathCache = null;
    clearCanvasFully(loveMeterCanvas, loveMeterCtx);
    setLoveMeterStage("slider");
  }
  function buildLoveMeterNamePoints(width, height) {
    const geometry = getNameStrokes(
      { x: width * .12, y: height * .035, width: width * .76, height: height * .30 },
      liteMode ? .36 : .235
    );
    loveMeterNameStrokes = geometry.strokes;
    const limit = liteMode ? 70 : 110;
    if (geometry.points.length <= limit) return geometry.points;
    return Array.from({ length: limit }, (_, index) => geometry.points[Math.round(index * (geometry.points.length - 1) / (limit - 1))]);
  }
  function startLoveMeter() {
    resetLoveMeter(); resizeCanvas(loveMeterCanvas, loveMeterCtx);
    if (liteMode) $("#loveRangeHint").classList.add("is-visible");
  }
  function activateLoveMeterJourney() {
    if (loveMeterStage !== "slider") return;
    loveSlider.disabled = true;
    $("#loveCrackText").textContent = CONFIG.loveMeter.crackText;
    $("#loveCrackText").classList.add("is-visible");
    $("#loveRangeValue").textContent = "∞";
    $(".love-range-wrap").classList.add("is-cracked");
    sparkleBurstAt(loveSlider, 8, ["♡", "✦"]);
    if (reducedMotion && !window.matchMedia("(max-width: 700px)").matches) {
      // Desktop reduced-motion users see the quiet illustrated scene without travel.
      setLoveMeterStage("static");
      $("#loveLaunchText").textContent = CONFIG.loveMeter.launchText;
      $("#moonMessage").textContent = CONFIG.loveMeter.moonText;
      $("#loveMeterFinalLine1").textContent = CONFIG.loveMeter.finalLine1;
      $("#loveMeterFinalLine2").textContent = CONFIG.loveMeter.finalLine2;
      $("#loveMeterStatus").textContent = "SARA 💗";
      loveMeterFinalIndex = 2;
      const size = resizeCanvas(loveMeterCanvas, loveMeterCtx);
      loveMeterNamePoints = buildLoveMeterNamePoints(size.width, size.height);
      const world = getRocketWorldSize();
      moveRocket(world.width * .72, world.height * .46, 42, .78);
      $("#loveRocket").classList.remove("is-launching", "is-delivered");
      $("#loveRocket").style.opacity = "1";
      $("#loveRocket").style.zIndex = "4";
      loveMeterDone = true;
      updateNavigation();
    } else {
      // Hardware lite mode still gets the complete rocket journey, with fewer effects.
      setLoveMeterStage("countdown");
    }
  }
  loveSlider.addEventListener("input", () => {
    if (loveMeterStage !== "slider") return;
    $("#loveRangeValue").textContent = `${loveSlider.value}%`;
    if (Number(loveSlider.value) >= 100) activateLoveMeterJourney();
  }, { passive: true });

  // Some mobile browsers dispatch change more reliably than input at release.
  loveSlider.addEventListener("change", () => {
    if (loveMeterStage === "slider" && Number(loveSlider.value) >= 100) {
      $("#loveRangeValue").textContent = "100%";
      activateLoveMeterJourney();
    }
  });
  function bezierPoint(t, p0, p1, p2, p3) {
    const u = 1 - t;
    return { x: u*u*u*p0.x + 3*u*u*t*p1.x + 3*u*t*t*p2.x + t*t*t*p3.x, y: u*u*u*p0.y + 3*u*u*t*p1.y + 3*u*t*t*p2.y + t*t*t*p3.y };
  }
  function moveRocket(x, y, angle, scale = 1) {
    const rocket = $("#loveRocket");
    const width = rocket.offsetWidth || 150; const height = rocket.offsetHeight || 205;
    rocket.style.transform = `translate3d(${x - width / 2}px,${y - height / 2}px,0) rotate(${angle}deg) scale(${scale})`;
  }
  function bezierAngle(t, p0, p1, p2, p3) {
    const u = 1 - t;
    const dx = 3*u*u*(p1.x-p0.x) + 6*u*t*(p2.x-p1.x) + 3*t*t*(p3.x-p2.x);
    const dy = 3*u*u*(p1.y-p0.y) + 6*u*t*(p2.y-p1.y) + 3*t*t*(p3.y-p2.y);
    return Math.atan2(dy, dx) * 180 / Math.PI + 90;
  }
  function getRocketWorldSize() {
    const rect = $("#rocketWorld").getBoundingClientRect();
    return { width: Math.max(1, rect.width), height: Math.max(1, rect.height) };
  }
  function prepareRocketPaths(world) {
    const width = Math.max(1, world.width); const height = Math.max(1, world.height);
    if (rocketPathCache && Math.abs(rocketPathCache.width-width)<1 && Math.abs(rocketPathCache.height-height)<1) return rocketPathCache;
    const svg = $("#rocketPathDefs");
    const outboundPath = $("#rocketOutboundPath"); const returnPath = $("#rocketReturnPath");
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svg.setAttribute("width", String(width)); svg.setAttribute("height", String(height));
    const start = { x: width * .16, y: height * .78 };
    const moon = { x: width * .79, y: height * .22 };
    const earth = { x: width * .17, y: height * .78 };
    outboundPath.setAttribute("d", `M ${start.x} ${start.y} C ${width*.18} ${height*.03}, ${width*.62} ${height*.02}, ${moon.x} ${moon.y}`);
    returnPath.setAttribute("d", `M ${moon.x} ${moon.y} C ${width*1.03} ${height*.46}, ${width*.47} ${height*1.05}, ${earth.x} ${earth.y}`);
    rocketPathCache = {
      width, height, start, moon, earth,
      outbound: { path: outboundPath, length: outboundPath.getTotalLength() },
      inbound: { path: returnPath, length: returnPath.getTotalLength() }
    };
    return rocketPathCache;
  }
  function sampleRocketPath(record, progress) {
    const length = Math.max(1, record.length); const distance = clamp(progress,0,1) * length;
    const delta = Math.max(1, length * .002);
    const point = record.path.getPointAtLength(distance);
    const before = record.path.getPointAtLength(Math.max(0,distance-delta));
    const after = record.path.getPointAtLength(Math.min(length,distance+delta));
    const heading = Math.atan2(after.y-before.y,after.x-before.x) * 180 / Math.PI + 90;
    return { x: point.x, y: point.y, heading };
  }
  function startLoveMeterFinal(now) {
    setLoveMeterStage("final", now);
    loveMeterFinalIndex = 0; loveMeterFinalChar = 0; loveMeterFinalAccumulator = 0;
    $("#loveMeterFinalLine1").textContent = ""; $("#loveMeterFinalLine2").textContent = "";
    const size = resizeCanvas(loveMeterCanvas, loveMeterCtx);
    loveMeterNamePoints = buildLoveMeterNamePoints(size.width, size.height);
  }
  function addRocketTrail(x, y, headingDegrees) {
    rocketTrailTick += 1;
    if (liteMode && rocketTrailTick % 2) return;
    const radians = (headingDegrees - 90) * Math.PI / 180;
    const tailX = x - Math.cos(radians) * 48;
    const tailY = y - Math.sin(radians) * 48;
    loveMeterTrail.push({
      x: tailX + random(-3, 3), y: tailY + random(-3, 3),
      vx: random(-8, 8), vy: random(8, 25),
      age: 0, life: random(.38, .72), size: random(1.2, liteMode ? 2.4 : 3.2),
      color: Math.random() > .5 ? "#fff0c9" : "#ffd3e4"
    });
    const max = liteMode ? 30 : 60;
    if (loveMeterTrail.length > max) loveMeterTrail.splice(0, loveMeterTrail.length - max);
  }
  function drawRocketTrail(ctx, dt) {
    loveMeterTrail = loveMeterTrail.filter((p) => p.age < p.life);
    loveMeterTrail.forEach((p) => {
      p.age += dt; p.x += p.vx * dt; p.y += p.vy * dt;
      const fade = Math.max(0, 1 - p.age / p.life);
      ctx.globalAlpha = fade * .8; ctx.fillStyle = p.color;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.size * fade, 0, Math.PI * 2); ctx.fill();
    });
    ctx.globalAlpha = 1;
  }

  function drawLoveMeter(now, dt, size) {
    const ctx = loveMeterCtx; ctx.clearRect(0, 0, size.width, size.height);
    if (loveMeterStage === "slider" && now - loveMeterStartAt > 8000) $("#loveRangeHint").classList.add("is-visible");
    const stars = liteMode ? 18 : 40;
    const movingThroughSpace = loveMeterStage === "flight" || loveMeterStage === "return";
    const parallax = movingThroughSpace && !liteMode ? (now - loveMeterStageAt) * .018 : 0;
    for (let i = 0; i < stars; i += 1) {
      const rawX = i * 137.5 + 23 - parallax;
      const x = ((rawX % size.width) + size.width) % size.width; const y = (i * 83.7 + 17) % size.height;
      ctx.globalAlpha = liteMode ? .42 : .20 + .42 * (Math.sin(now / 650 + i) + 1) / 2; ctx.fillStyle = "#fff7df";
      ctx.beginPath(); ctx.arc(x, y, i % 5 === 0 ? 1.6 : .9, 0, Math.PI * 2); ctx.fill();
    }
    if (movingThroughSpace && !liteMode) {
      for (let i = 0; i < 10; i += 1) {
        const phase = (now * (.42 + (i % 3) * .08) + i * 109) % (size.height + 70);
        const x = (i * 137 + now * .025) % size.width;
        ctx.globalAlpha = .12 + .12 * ((i % 4) / 3); ctx.strokeStyle = i % 2 ? "#fff0f7" : "#ffe6c5";
        ctx.lineWidth = i % 3 === 0 ? 1.4 : .8; ctx.beginPath(); ctx.moveTo(x, phase - 35); ctx.lineTo(x - 13, phase + 13); ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;
    drawRocketTrail(ctx, dt);

    const world = getRocketWorldSize();
    const rocketPaths = prepareRocketPaths(world);
    const { start, moon, earth, outbound, inbound } = rocketPaths;

    if (loveMeterStage === "countdown") {
      const elapsed = now - loveMeterStageAt; const number = Math.max(1, 3 - Math.floor(elapsed / 650));
      $("#rocketCountdown").textContent = elapsed < 1950 ? String(number) : "";
      $("#loveRocket").classList.add("is-launching");
      moveRocket(start.x, start.y, 0, 1);
      if (elapsed > 2050) { $("#loveRocket").classList.remove("is-launching"); setLoveMeterStage("flight", now); }
    } else if (loveMeterStage === "flight") {
      const elapsed = now - loveMeterStageAt; const t = clamp(elapsed / 5200, 0, 1);
      const point = sampleRocketPath(outbound, t);
      moveRocket(point.x, point.y, point.heading, 1); addRocketTrail(point.x, point.y, point.heading);
      const speed = Math.round(2000000 * Math.min(1, Math.pow(elapsed / 3000, 1.18)));
      $("#rocketSpeed").textContent = `Speed: ${speed.toLocaleString("en-US")} km/h`;
      if (t >= 1) { $("#moonMessage").textContent = CONFIG.loveMeter.moonText; setLoveMeterStage("moon", now); }
    } else if (loveMeterStage === "moon") {
      const elapsed = now - loveMeterStageAt; const angle = (elapsed / 3800) * Math.PI * 2;
      const orbitX = Math.cos(angle) * Math.min(world.width * .11, 68);
      const orbitY = Math.sin(angle) * Math.min(world.height * .15, 58);
      const behind = Math.sin(angle) < 0;
      $("#loveRocket").style.zIndex = behind ? "1" : "5";
      $("#loveRocket").style.opacity = behind ? ".76" : "1";
      const tangent = angle + Math.PI / 2;
      const heading = tangent * 180 / Math.PI + 90;
      moveRocket(moon.x + orbitX, moon.y + orbitY, heading, behind ? .85 : 1.04);
      addRocketTrail(moon.x + orbitX, moon.y + orbitY, heading);
      $("#rocketSpeed").textContent = "Speed: 2,000,000 km/h";
      if (elapsed >= 3800) { $("#loveRocket").style.zIndex = "4"; $("#loveRocket").style.opacity = "1"; setLoveMeterStage("return", now); }
    } else if (loveMeterStage === "return") {
      const elapsed = now - loveMeterStageAt; const t = clamp(elapsed / 5000, 0, 1);
      const point = sampleRocketPath(inbound, t);
      moveRocket(point.x, point.y, point.heading, 1); addRocketTrail(point.x, point.y, point.heading);
      const speed = Math.round(2000000 * (1 - Math.min(1, elapsed / 4300)));
      $("#rocketSpeed").textContent = `Speed: ${speed.toLocaleString("en-US")} km/h`;
      if (t >= 1) {
        $("#rocketEarth").classList.add("has-arrival"); $("#loveRocket").classList.add("is-delivered");
        $("#loveMeterStatus").textContent = "Wapas aapke paas 💗"; setLoveMeterStage("deliver", now);
      }
    } else if (loveMeterStage === "deliver") {
      moveRocket(earth.x, earth.y, 0, .15); $("#loveRocket").style.opacity = "0";
      if (now - loveMeterStageAt >= 850) startLoveMeterFinal(now);
    }

    if (loveMeterStage === "final" || loveMeterStage === "fireworks" || loveMeterStage === "done") {
      loveMeterFinalAccumulator += dt * 1000;
      const lines = [CONFIG.loveMeter.finalLine1, CONFIG.loveMeter.finalLine2];
      const typeRate = liteMode ? 19 : 24;
      while (loveMeterFinalAccumulator >= typeRate && loveMeterFinalIndex < 2) {
        loveMeterFinalAccumulator -= typeRate;
        const line = lines[loveMeterFinalIndex];
        if (loveMeterFinalChar < line.length) {
          const target = loveMeterFinalIndex === 0 ? $("#loveMeterFinalLine1") : $("#loveMeterFinalLine2");
          target.textContent += line.charAt(loveMeterFinalChar++);
        } else { loveMeterFinalIndex += 1; loveMeterFinalChar = 0; }
      }
      if (loveMeterFinalIndex >= 2 && loveMeterStage === "final") {
        loveMeterStage = "fireworks"; loveMeterStageAt = now;
        const geometry = getNameStrokes(
          { x: size.width * .16, y: size.height * .035, width: size.width * .68, height: size.height * .25 },
          liteMode ? .36 : .235
        );
        loveMeterNameStrokes = geometry.strokes;
        const limit = liteMode ? 70 : 110;
        loveMeterNamePoints = geometry.points.length <= limit ? geometry.points : Array.from({ length: limit }, (_, index) => geometry.points[Math.round(index * (geometry.points.length - 1) / (limit - 1))]);
        loveMeterNameSpawned = false;
        for (let burst = 0; burst < 3; burst += 1) {
          const bx = size.width * (.22 + burst * .28); const by = size.height * (.22 + (burst % 2) * .08);
          loveMeterFireworks.push({ type: "rocket", delay: burst * 430, x: bx, y: size.height + 10, sx: bx + random(-45, 45), sy: size.height + 10, tx: bx, ty: by, age: 0, life: .95 + burst * .18, color: ["#ff7fa8", "#ffd99c", "#fff4df"][burst], spawned: false });
        }
      }
    }

    if (loveMeterStage === "fireworks") {
      const newParticles = [];
      loveMeterFireworks = loveMeterFireworks.filter((particle) => particle.age < particle.life || (particle.type === "rocket" && !particle.spawned));
      loveMeterFireworks.forEach((particle) => {
        if (particle.type === "rocket" && particle.delay > 0) { particle.delay = Math.max(0, particle.delay - dt * 1000); return; }
        particle.age += dt;
        if (particle.type === "rocket") {
          const t = clamp(particle.age / particle.life, 0, 1);
          particle.x = particle.sx + (particle.tx - particle.sx) * t; particle.y = particle.sy + (particle.ty - particle.sy) * t;
          ctx.globalAlpha = 1 - t * .35; ctx.strokeStyle = particle.color; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(particle.x, particle.y + 16); ctx.lineTo(particle.x, particle.y); ctx.stroke();
          ctx.fillStyle = "#fff7e8"; ctx.beginPath(); ctx.arc(particle.x, particle.y, 3, 0, Math.PI * 2); ctx.fill();
          if (t >= 1 && !particle.spawned) {
            particle.spawned = true;
            for (let i = 0; i < 22; i += 1) { const angle = Math.PI * 2 * i / 22; const speed = random(28,95); newParticles.push({type:"spark",x:particle.tx,y:particle.ty,vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed,age:0,life:random(1.1,1.8),color:particle.color}); }
          }
        } else if (particle.type === "name") {
          const t = clamp(particle.age / particle.life,0,1); const ease=1-Math.pow(1-t,3);
          const px=particle.sx+(particle.tx-particle.sx)*ease; const py=particle.sy+(particle.ty-particle.sy)*ease;
          ctx.globalAlpha = .35 + .65 * t; ctx.fillStyle=particle.color; ctx.beginPath(); ctx.arc(px,py,1.5,0,Math.PI*2); ctx.fill();
        } else {
          particle.x += particle.vx * dt; particle.y += particle.vy * dt; particle.vy += 24 * dt;
          ctx.globalAlpha = Math.max(0, 1 - particle.age / particle.life); ctx.fillStyle = particle.color;
          ctx.beginPath(); ctx.arc(particle.x, particle.y, 2.2, 0, Math.PI * 2); ctx.fill();
        }
      });
      loveMeterFireworks.push(...newParticles); ctx.globalAlpha = 1;
      const elapsed = now - loveMeterStageAt;
      if (!loveMeterNameSpawned && elapsed >= LOVE_FIREWORK_NAME_DELAY_MS && loveMeterNamePoints.length) {
        loveMeterNameSpawned = true;
        loveMeterNamePoints.forEach((point,index) => {
          const sourceX = size.width * (.22 + (index % 3) * .28); const sourceY = size.height * (.22 + ((index % 3) % 2) * .08);
          loveMeterFireworks.push({type:"name",sx:sourceX+random(-35,35),sy:sourceY+random(-35,35),tx:point.x,ty:point.y,age:0,life:random(.7,1.25),color:index%3===0?"#fff2d1":index%3===1?"#ffc4d7":"#f4d9ff"});
        });
      }
      if (elapsed >= LOVE_FIREWORK_NAME_DELAY_MS && loveMeterNameSpawned) {
        const placed = loveMeterFireworks.filter(p => p.type === "name");
        placed.forEach(p => { const t=clamp(p.age/p.life,0,1); if (t>=1) {ctx.globalAlpha=.9;ctx.fillStyle=p.color;ctx.beginPath();ctx.arc(p.tx,p.ty,1.8,0,Math.PI*2);ctx.fill();} });
        // Once every particle has settled, keep the full name visible for the requested hold.
        if (elapsed >= LOVE_FIREWORK_NAME_DELAY_MS + LOVE_FIREWORK_NAME_SETTLE_MS) {
          loveMeterNamePoints.forEach((point,index) => { ctx.globalAlpha=.92; ctx.fillStyle=index%3===0?"#fff2d1":index%3===1?"#ffc4d7":"#f4d9ff"; ctx.beginPath(); ctx.arc(point.x,point.y,liteMode?1.45:1.9,0,Math.PI*2); ctx.fill(); });
        }
      }
      if (elapsed >= LOVE_FIREWORKS_END_MS) {
        loveMeterStage = "done"; loveMeterDone = true;
        loveMeterFireworks = [];
        $("#loveMeterStatus").textContent = "SARA 💗"; updateNavigation();
      }
    }
    if ((loveMeterStage === "done" || loveMeterStage === "static") && loveMeterNamePoints.length) {
      for (let i=0;i<loveMeterNamePoints.length;i++) {
        const point=loveMeterNamePoints[i]; ctx.globalAlpha=.82; ctx.fillStyle=i%3===0?"#fff2d1":i%3===1?"#ffc4d7":"#f4d9ff";
        ctx.beginPath(); ctx.arc(point.x,point.y,liteMode?1.4:2,0,Math.PI*2); ctx.fill();
      }
      ctx.globalAlpha=1;
    }
  }

  /* Progress, dots and session progress. */
  enabledSequence.forEach((number, index) => {
    const dot = document.createElement("span"); dot.className = "progress-dot"; dot.dataset.slideNumber = String(number); dot.setAttribute("aria-label", `Slide ${index + 1}`); progressDots.append(dot);
  });
  function saveProgress() { try { sessionStorage.setItem("saraSorrySlide", String(currentNumber)); } catch (_) { /* Storage can be unavailable in private mode. */ } }
  function updateNavigation() {
    const visibleIndex = Math.max(0, enabledSequence.indexOf(currentNumber));
    prevButton.disabled = visibleIndex === 0;
    nextButton.hidden = currentNumber === 14 || currentNumber === 15 || (currentNumber === 16 && !loveMeterDone);
    slideCounter.textContent = `${String(visibleIndex + 1).padStart(2, "0")} / ${enabledSequence.length}`;
    const dots = $$(".progress-dot", progressDots);
    dots.forEach((dot, index) => { if (index === visibleIndex) dot.setAttribute("aria-current", "step"); else dot.removeAttribute("aria-current"); });
    progressDots.setAttribute("aria-label", `Slide ${visibleIndex + 1} of ${enabledSequence.length}`);
    progressDots.setAttribute("aria-valuenow", String(visibleIndex + 1));
    const fraction = enabledSequence.length <= 1 ? 1 : visibleIndex / (enabledSequence.length - 1);
    meterFill.style.transform = `scaleX(${fraction})`; meterHeart.style.left = `${fraction * 100}%`;
    meterHeart.classList.toggle("is-complete", visibleIndex === enabledSequence.length - 1);
    saveProgress();
  }

  /* Central task list. No setInterval loops or per-effect animation loops. */
  function processTasks(now) {
    const ready = tasks.filter((task) => task.due <= now);
    if (!ready.length) return;
    const readyIds = new Set(ready.map((task) => task.id));
    tasks = tasks.filter((task) => !readyIds.has(task.id));
    ready.forEach((task) => { if (task.slideNumber === currentNumber || task.slideNumber === null) task.callback(); });
  }
  function resizeCanvas(canvas, ctx) {
    const rect = canvas.getBoundingClientRect(); const phone = window.innerWidth < 600;
    const dpr = Math.min(phone ? 1.5 : 2, window.devicePixelRatio || 1);
    const width = Math.max(1, Math.round(rect.width * dpr)); const height = Math.max(1, Math.round(rect.height * dpr));
    if (canvas.width !== width || canvas.height !== height) { canvas.width = width; canvas.height = height; }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { width: rect.width, height: rect.height, dpr };
  }
  function sparkleBurstAt(element, count = 8, glyphs = ["♡", "✦", "♥"]) {
    if (!element) return;
    const rect = element.getBoundingClientRect(); const x = rect.left + rect.width / 2; const y = rect.top + rect.height / 2;
    const actual = liteMode ? Math.ceil(count / 2) : count;
    for (let index = 0; index < actual && sparkleParticles.length < 12; index += 1) {
      const angle = Math.random() * Math.PI * 2; const speed = random(22, 75);
      sparkleParticles.push({ x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed - 25, life: random(.45, .85), age: 0, glyph: glyphs[index % glyphs.length], size: random(9, 16), alpha: 1 });
    }
  }
  function sparkleBurstAtPoint(x, y, count = 7, glyphs = ["♡", "✦"]) {
    const actual = liteMode ? Math.ceil(count / 2) : count;
    for (let index = 0; index < actual && sparkleParticles.length < 12; index += 1) {
      const angle = Math.random() * Math.PI * 2; const speed = random(18, 68);
      sparkleParticles.push({ x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed - 24, life: random(.4, .8), age: 0, glyph: glyphs[index % glyphs.length], size: random(9, 16), alpha: 1 });
    }
  }
  function drawSparkles(dt) {
    const { width, height } = resizeCanvas(sparkleCanvas, sparkleCtx);
    sparkleCtx.clearRect(0, 0, width, height);
    sparkleParticles = sparkleParticles.filter((particle) => particle.age < particle.life);
    sparkleParticles.forEach((particle) => {
      particle.age += dt; particle.x += particle.vx * dt; particle.y += particle.vy * dt; particle.vy += 32 * dt; particle.alpha = Math.max(0, 1 - particle.age / particle.life);
      sparkleCtx.globalAlpha = particle.alpha; sparkleCtx.fillStyle = "#e84a86"; sparkleCtx.font = `700 ${particle.size}px Poppins`; sparkleCtx.fillText(particle.glyph, particle.x, particle.y);
    }); sparkleCtx.globalAlpha = 1;
  }

  /* Bear hugs work on the admission, forgiveness and final slides. */
  function hugBear(buttonSelector, bearSelector, bubbleSelector) {
    const button = $(buttonSelector); const wrap = $(bearSelector); const bubble = $(bubbleSelector);
    if (!button || !wrap) return;
    button.addEventListener("click", () => {
      const bear = $(".cute-bear", wrap); if (!bear) return;
      bear.classList.add("is-hugging");
      if (bubble) { bubble.classList.add("is-visible"); tasksAdd(1900, () => bubble.classList.remove("is-visible")); }
      sparkleBurstAt(button, 8, ["♡", "♥"]); vibrate(40);
      tasksAdd(900, () => bear.classList.remove("is-hugging"));
    });
  }
  hugBear("#sorryBearButton", "#sorryBear", "#hugBubble2");
  hugBear("#forgiveBear", "#forgiveBear", "#teddySpeech");
  $("#finalHugButton").addEventListener("click", () => {
    const pair = $("#finalHugButton");
    pair.classList.remove("is-hugging"); void pair.offsetWidth; pair.classList.add("is-hugging");
    $("#hugBubble14").classList.add("is-visible");
    sparkleBurstAt(pair, 12, ["♡", "♥", "✦"]); vibrate(40);
    tasksAdd(1500, () => $("#hugBubble14").classList.remove("is-visible"), 17);
  });

  /* Slide 4 chat timeline; the active-slide RAF owns all timing. */
  function startChat(now) {
    chatStart = now; chatRendered = -1;
    const area = $("#chatMessagesArea"); area.innerHTML = '<div class="chat-day">TODAY</div><div class="typing-indicator is-visible" id="chatTyping"><i></i><i></i><i></i></div>';
    $("#chatCaption").textContent = "";
  }
  function appendChatMessage(text, index) {
    const typing = $("#chatTyping"); if (typing) typing.classList.remove("is-visible");
    const bubble = document.createElement("div"); bubble.className = "chat-bubble";
    const p = document.createElement("p"); p.textContent = text;
    const meta = document.createElement("small"); meta.className = "chat-meta"; meta.textContent = `${index + 1}:0${index + 1}  ✓✓`;
    bubble.append(p, meta); $("#chatMessagesArea").append(bubble);
    const area = $("#chatMessagesArea"); area.scrollTop = area.scrollHeight;
  }
  function frameChat(now) {
    const elapsed = now - chatStart;
    const step = Math.floor(elapsed / 1900);
    if (step < CONFIG.chatMessages.length) {
      const within = elapsed % 1900;
      const typing = $("#chatTyping");
      if (typing) typing.classList.toggle("is-visible", within < 950);
      if (within >= 950 && chatRendered < step) { chatRendered = step; appendChatMessage(CONFIG.chatMessages[step], step); }
    } else {
      const lastMeta = $(".chat-meta:last-child", $("#chatMessagesArea"));
      if (lastMeta && elapsed > CONFIG.chatMessages.length * 1900 + 600) { lastMeta.classList.add("seen"); lastMeta.textContent = "seen ✓✓"; }
      const typing = $("#chatTyping");
      const after = elapsed - CONFIG.chatMessages.length * 1900;
      if (after < 2000) {
        if (!typing) { const indicator = document.createElement("div"); indicator.id = "chatTyping"; indicator.className = "typing-indicator is-visible"; indicator.innerHTML = "<i></i><i></i><i></i>"; $("#chatMessagesArea").append(indicator); }
        const current = $("#chatTyping"); if (current) current.classList.add("is-visible");
        $("#chatCaption").textContent = `${CONFIG.name} is typing...`;
      } else {
        const current = $("#chatTyping"); if (current) current.remove(); $("#chatCaption").textContent = "";
      }
    }
  }

  /* Slide 5 floating-love setup. At most 16 messages exist. */
  function buildLoveField() {
    const field = $("#loveField"); field.replaceChildren();
    const source = CONFIG.loveLines; const total = liteMode ? 8 : 16;
    for (let index = 0; index < total; index += 1) {
      const word = document.createElement("span"); word.className = "love-float"; word.textContent = source[index % source.length];
      word.style.setProperty("--x", `${(index * 37 + 5) % 92}%`); word.style.setProperty("--y", `${(index * 23 + 7) % 88}%`);
      word.style.setProperty("--size", `${random(15, 24)}px`); word.style.setProperty("--duration", `${random(6, 11)}s`); word.style.setProperty("--delay", `${-random(0, 10)}s`);
      word.style.setProperty("--tone", ["#de7b9f", "#a78ad3", "#e7a08d", "#d36e9a"][index % 4]); field.append(word);
    }
  }
  $("#surpriseHeart").addEventListener("click", (event) => {
    loveTapCount += 1; sparkleBurstAt(event.currentTarget, 7, ["♡", "♥"]);
    if (loveTapCount >= 5) $("#surpriseNote").classList.add("is-visible");
  });

  /* Slide 9: twinkling sky and clean, hand-stroked SARA in its own bounded area. */
  const nightCanvas = $("#nightCanvas"); const nightCtx = nightCanvas.getContext("2d");
  const nameSkyCanvas = $("#nameSkyCanvas"); const nameSkyCtx = nameSkyCanvas.getContext("2d");
  const nameSky = $("#nameSky");
  function startNight() {
    const size = resizeCanvas(nightCanvas, nightCtx); const nameSize = resizeCanvas(nameSkyCanvas, nameSkyCtx);
    nightStars = []; const total = liteMode ? 28 : 55;
    for (let i = 0; i < total; i += 1) nightStars.push({ x: Math.random() * size.width, y: Math.random() * size.height, r: random(.5, 1.8), phase: random(0, 6.28) });
    const geometry = getNameStrokes({ x: 0, y: 0, width: nameSize.width, height: nameSize.height }, .3);
    nameStrokes = geometry.strokes; namePoints = geometry.points;
    nameStarStarts = namePoints.map((point) => ({ x: random(0,nameSize.width), y: random(0,nameSize.height), point, delay: random(0,220) }));
    constellationStart = performance.now() + 1200; constellationDone = false; nameSkyPulseStarted = false;
    lanterns.forEach((lantern) => lantern.element.remove()); lanterns = []; wishIndex = 0;
    $("#constellationMessage").textContent = ""; nameSky.classList.remove("is-pulsing");
    clearCanvasFully(nightCanvas,nightCtx); clearCanvasFully(nameSkyCanvas,nameSkyCtx);
  }
  function drawNameSky(now) {
    const size = resizeCanvas(nameSkyCanvas,nameSkyCtx); const ctx=nameSkyCtx;
    ctx.clearRect(0,0,size.width,size.height);
    if (!constellationStart || now < constellationStart) return;
    const elapsed=now-constellationStart; const flightDuration=1250;
    nameStarStarts.forEach((star,index)=>{
      const t=clamp((elapsed-star.delay)/flightDuration,0,1); const ease=1-Math.pow(1-t,3);
      const sx=star.x+(star.point.x-star.x)*ease; const sy=star.y+(star.point.y-star.y)*ease;
      const twinkle=.62+.38*Math.sin(now/160+index*1.7);
      ctx.globalAlpha=(.2+.8*t)*twinkle; ctx.fillStyle="#fff4cf"; ctx.beginPath(); ctx.arc(sx,sy,3.8,0,Math.PI*2); ctx.fill();
      ctx.globalAlpha=(.45+.55*t)*twinkle; ctx.fillStyle="#fffdf4"; ctx.beginPath(); ctx.arc(sx,sy,1.35,0,Math.PI*2); ctx.fill();
    });
    const strokeGap=520; const strokeDuration=460; const lineStart=flightDuration+340;
    nameStrokes.forEach((stroke,index)=>{
      const local=elapsed-(lineStart+index*strokeGap); if(local<=0) return;
      const progress=clamp(local/strokeDuration,0,1); const points=stroke.dense;
      if(points.length<2) return;
      const upto=Math.max(2,Math.floor((points.length-1)*progress)+1);
      ctx.lineCap="round"; ctx.lineJoin="round";
      ctx.beginPath(); ctx.moveTo(points[0].x,points[0].y);
      for(let i=1;i<upto;i++) ctx.lineTo(points[i].x,points[i].y);
      // Two restrained strokes give a glow without shadowBlur.
      ctx.strokeStyle="rgba(255,231,176,.24)"; ctx.lineWidth=6; ctx.stroke();
      ctx.strokeStyle="rgba(255,247,215,.88)"; ctx.lineWidth=1.45; ctx.stroke();
    });
    const totalTime=lineStart+Math.max(0,nameStrokes.length-1)*strokeGap+strokeDuration+180;
    if(elapsed>=totalTime&&!constellationDone){
      constellationDone=true; nameSkyPulseStarted=true; nameSky.classList.remove("is-pulsing"); void nameSky.offsetWidth; nameSky.classList.add("is-pulsing");
      $("#constellationMessage").textContent="Aap mere aasmaan ka sabse chamakta sitara hain ✨";
    }
  }
  function drawNight(now) {
    const size = resizeCanvas(nightCanvas, nightCtx); const ctx = nightCtx;
    ctx.clearRect(0, 0, size.width, size.height);
    nightStars.forEach((star) => { const alpha = .35 + .55 * (Math.sin(now / 700 + star.phase) + 1) / 2; ctx.globalAlpha = alpha; ctx.fillStyle = "#fff8df"; ctx.beginPath(); ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2); ctx.fill(); }); ctx.globalAlpha = 1;
    drawNameSky(now);
    lanterns = lanterns.filter((lantern) => {
      const age = (now - lantern.born) / lantern.duration;
      if (age >= 1) { lantern.element.remove(); return false; }
      lantern.element.style.transform = `translate3d(0,${-age * (size.height + 160)}px,0)`;
      lantern.element.style.opacity = String(Math.min(1, age * 5, (1 - age) * 4));
      return true;
    });
  }
  function stopNight() {
    lanterns.forEach((lantern) => lantern.element.remove()); lanterns=[]; nightStars=[]; namePoints=[]; nameStrokes=[]; nameStarStarts=[];
    constellationStart=0; constellationDone=false; nameSkyPulseStarted=false; $("#constellationMessage").textContent=""; nameSky.classList.remove("is-pulsing");
    clearCanvasFully(nightCanvas,nightCtx); clearCanvasFully(nameSkyCanvas,nameSkyCtx);
  }
  byNumber(9).addEventListener("click", (event) => {
    if (event.target.closest("button")) return;
    constellationStart=performance.now(); constellationDone=false; nameSky.classList.remove("is-pulsing"); $("#constellationMessage").textContent="";
    const size=resizeCanvas(nameSkyCanvas,nameSkyCtx); const geometry=getNameStrokes({x:0,y:0,width:size.width,height:size.height},.3);
    nameStrokes=geometry.strokes; namePoints=geometry.points;
    nameStarStarts=namePoints.map((point)=>({x:random(0,size.width),y:random(0,size.height),point,delay:random(0,220)}));
  }, { passive: true });
  $("#wishButton").addEventListener("click", () => {
    if (lanterns.length >= 6) { lanterns[0].element.remove(); lanterns.shift(); }
    const element = document.createElement("div"); element.className = "wish-lantern";
    const icon = document.createElement("span"); icon.className = "lantern-icon"; icon.textContent = "🏮";
    const text = document.createElement("span"); text.textContent = CONFIG.wishes[wishIndex++ % CONFIG.wishes.length]; element.append(icon, text); $("#lanternLayer").append(element);
    element.style.setProperty("--left", `${random(6, 78)}%`); lanterns.push({ element, born: performance.now(), duration: 6500 }); sparkleBurstAt($("#wishButton"), 5, ["✦", "♡"]);
  });

  /* Slide 11 pinky promise: pre-rendered canvas rain, 48 items for ten seconds. */
  const pinkyButton = $("#pinkyButton");
  const pinkyCanvas = $("#pinkyRainCanvas"); const pinkyCtx = pinkyCanvas.getContext("2d");
  const pinkyRainPhrases = CONFIG.pinkyRain;
  function buildPinkyRainSprites() {
    if (pinkyRainSprites.length) return;
    const tones=["#e95d91","#b38bd9","#e69a84","#d64d82","#c77db5","#f08ba9"];
    pinkyRainSprites=pinkyRainPhrases.map((phrase,index)=>{
      const canvas=document.createElement("canvas"); const ctx=canvas.getContext("2d");
      const isSymbol=["💕","💗","✨"].includes(phrase); const fontSize=isSymbol?54:34;
      ctx.font=`${isSymbol?"700":"600"} ${fontSize}px ${isSymbol?'"Poppins", sans-serif':'"Dancing Script", "Poppins", sans-serif'}`;
      const width=Math.ceil(ctx.measureText(phrase).width+36); canvas.width=width; canvas.height=76;
      const draw=canvas.getContext("2d"); draw.font=`${isSymbol?"700":"600"} ${fontSize}px ${isSymbol?'"Poppins", sans-serif':'"Dancing Script", "Poppins", sans-serif'}`; draw.textBaseline="middle"; draw.textAlign="center";
      draw.globalAlpha=.2; draw.fillStyle="#fff"; draw.fillText(phrase,width/2+1,39);
      draw.globalAlpha=1; draw.fillStyle=tones[index%tones.length]; draw.fillText(phrase,width/2,36);
      draw.globalAlpha=.26; draw.strokeStyle="#fff"; draw.lineWidth=1.4; draw.strokeText(phrase,width/2,35); draw.globalAlpha=1;
      return canvas;
    });
  }
  function clearPinkyRain() {
    pinkyRainItems=[]; pinkyRainStartedAt=0;
    clearCanvasFully(pinkyCanvas,pinkyCtx);
  }
  function startPinkyRain() {
    clearPinkyRain(); buildPinkyRainSprites();
    const size=resizeCanvas(pinkyCanvas,pinkyCtx); pinkyRainCanvasSize=size;
    pinkyRainStartedAt=performance.now();
    const total=liteMode?28:48;
    pinkyRainItems=Array.from({length:total},(_,index)=>({
      sprite:index%pinkyRainSprites.length,
      x:random(8,size.width-8), y:random(-size.height*.78,size.height*.34),
      speed:random(70,190), sway:random(7,34), phase:random(0,Math.PI*2), frequency:random(1.2,2.8),
      rotation:random(-.32,.32), spin:random(-.36,.36), scale:random(.62,1.1), alpha:random(.55,.95),
      delay:random(0,1500), dead:false, width:0, height:0
    }));
    vibrate(30);
  }
  function drawPinkyRain(now,dt) {
    if(!pinkyRainStartedAt) return;
    const size=resizeCanvas(pinkyCanvas,pinkyCtx); const ctx=pinkyCtx; ctx.clearRect(0,0,size.width,size.height);
    const elapsed=now-pinkyRainStartedAt; const rainFor=10000; let alive=0;
    if (liteMode && pinkyRainItems.length > 28) pinkyRainItems.length = 28;
    pinkyRainItems.forEach((item)=>{
      if(item.dead||elapsed<item.delay) return;
      const sprite=pinkyRainSprites[item.sprite]; const w=(sprite.width/2.1)*item.scale; const h=(sprite.height/2.1)*item.scale;
      item.y+=item.speed*dt; item.rotation+=item.spin*dt;
      if(item.y>size.height+h+18){
        if(elapsed<rainFor){item.y=-random(35,Math.max(80,size.height*.45));item.x=random(8,size.width-8);item.speed=random(70,190);item.phase=random(0,Math.PI*2);item.rotation=random(-.32,.32);}
        else {item.dead=true;return;}
      }
      const x=item.x+Math.sin(elapsed/1000*item.frequency+item.phase)*item.sway;
      const rawFlip = Math.cos(elapsed*.002+item.phase);
      const flip = Math.abs(rawFlip) < .16 ? (rawFlip < 0 ? -.16 : .16) : rawFlip;
      const fadeOut = elapsed < rainFor ? 1 : clamp((size.height + h + 18 - item.y) / Math.max(1, h + 70), 0, 1);
      ctx.save();ctx.globalAlpha=item.alpha*fadeOut;ctx.translate(x,item.y);ctx.rotate(item.rotation);ctx.scale(flip,1);ctx.drawImage(sprite,-w/2,-h/2,w,h);ctx.restore();alive++;
    });
    if(elapsed>=rainFor&&alive===0){clearPinkyRain();}
  }
  function resetPinky() { pinkyStart = 0; pinkyDone = false; pinkyButton.classList.remove("is-holding"); pinkyButton.style.setProperty("--hold", "0%"); $("#pinkyPop").classList.remove("is-visible"); $("#pinkyStatus").textContent = ""; clearPinkyRain(); }
  function startPinkyHold() { if (currentNumber !== 11 || pinkyDone) return; pinkyStart = performance.now(); pinkyButton.classList.add("is-holding"); vibrate(20); }
  function stopPinkyHold() { if (!pinkyDone) { pinkyStart = 0; pinkyButton.classList.remove("is-holding"); pinkyButton.style.setProperty("--hold", "0%"); } }
  pinkyButton.addEventListener("pointerdown", (event) => { event.preventDefault(); pinkyButton.setPointerCapture?.(event.pointerId); startPinkyHold(); }, { passive: false });
  ["pointerup", "pointercancel", "lostpointercapture"].forEach((name) => pinkyButton.addEventListener(name, stopPinkyHold, { passive: true }));
  pinkyButton.addEventListener("contextmenu", (event) => event.preventDefault());

  /* Slide 13 balloon pop. Eight balloon nodes only. */
  function buildBalloons() {
    const grid = $("#balloonGrid"); grid.replaceChildren(); balloonPopped.clear();
    const colors = ["#f4a4bf", "#d8b9f4", "#ffd0c4", "#f4c2d5", "#c7d8ed", "#e7b1c7", "#f6d3a8", "#dcbbe9"];
    CONFIG.balloonLines.slice(0, 8).forEach((line, index) => {
      const button = document.createElement("button"); button.type = "button"; button.className = "balloon-button"; button.dataset.index = String(index); button.setAttribute("aria-label", `Pop balloon ${index + 1}`);
      button.style.setProperty("--balloon", colors[index]); button.style.setProperty("--float", `${2.6 + index * .16}s`); button.style.setProperty("--delay", `${-index * .22}s`);
      const shape = document.createElement("span"); shape.className = "balloon-shape"; const string = document.createElement("span"); string.className = "balloon-string"; button.append(shape, string);
      button.addEventListener("click", () => popBalloon(index, button)); grid.append(button);
    });
    $("#balloonCounter").textContent = "0 / 8";
    $("#balloonMessage").textContent = "";
    $("#allBalloonsMessage").hidden = true;
    $("#balloonNextButton").textContent = "Dono saath aage chalein? 👉👈";
    $("#balloonNextButton").hidden = true;
  }
  function popBalloon(index, button) {
    if (balloonPopped.has(index)) return;
    balloonPopped.add(index); button.classList.add("is-popped"); button.disabled = true;
    const messageToken = ++balloonMessageToken;
    $("#balloonMessage").textContent = CONFIG.balloonLines[index] || "I love you 💗";
    $("#balloonCounter").textContent = `${balloonPopped.size} / 8`;
    sparkleBurstAt(button, 10, ["✦", "♡", "•"]);
    tasksAdd(3000, () => { if (messageToken === balloonMessageToken) $("#balloonMessage").textContent = ""; }, 13);
    if (balloonPopped.size === 8) { $("#allBalloonsMessage").hidden = false; $("#balloonNextButton").hidden = false; }
  }
  $("#balloonNextButton").addEventListener("click", () => goToSlide(14));

  /* Slide 14: playful No behaviours. No is intercepted before click/touch. */
  const yesButton = $("#yesButton"); const noButton = $("#noButton"); const forgiveActions = $("#forgiveActions");
  const attemptBubble = $("#attemptBubble"); const teddySpeech = $("#teddySpeech");
  const noBehaviors = ["RUN", "SHRINK", "SWAP", "SHY", "TURNS INTO YES"];
  let lastAttemptAt = 0;
  function setForgiveMessage() {
    const noText = CONFIG.noMessages[noMessageIndex++ % CONFIG.noMessages.length];
    const teddyText = CONFIG.teddyLines[teddyLineIndex++ % CONFIG.teddyLines.length];
    attemptBubble.textContent = noAttempts >= CONFIG.attemptThreshold ? "Ab toh Yes hi bacha hai aapke paas 😌" : noText;
    attemptBubble.classList.add("is-visible");
    teddySpeech.textContent = teddyText; teddySpeech.classList.add("is-visible");
    if (window.innerWidth < 480) { attemptBubble.classList.remove("is-visible"); teddySpeech.textContent = noAttempts >= CONFIG.attemptThreshold ? "Ab toh Yes hi bacha hai aapke paas 😌" : teddyText; }
    forgiveMessageUntil = performance.now() + 2200;
  }
  function updateForgiveFace() {
    const mood = noAttempts >= 6 ? "pleading" : noAttempts >= 3 ? "teary" : "sad";
    setBearMood("#forgiveBear", mood);
  }
  function actionRect(el) { const root = forgiveActions.getBoundingClientRect(); const rect = el.getBoundingClientRect(); return { left: rect.left - root.left, top: rect.top - root.top, width: rect.width, height: rect.height }; }
  function positionNo(left, top) {
    const maxLeft = Math.max(4, forgiveActions.clientWidth - noButton.offsetWidth - 4); const maxTop = Math.max(4, forgiveActions.clientHeight - noButton.offsetHeight - 4);
    noLastPosition = { left: clamp(left, 4, maxLeft), top: clamp(top, 4, maxTop) };
    noButton.style.left = `${noLastPosition.left}px`; noButton.style.top = `${noLastPosition.top}px`; noButton.style.transform = `scale(${noScale})`;
  }
  function moveNoAway(pointerX, pointerY) {
    const root = forgiveActions.getBoundingClientRect(); const yes = actionRect(yesButton);
    const w = noButton.offsetWidth * noScale; const h = noButton.offsetHeight * noScale;
    const maxLeft = Math.max(4, root.width - w - 4); const maxTop = Math.max(4, root.height - h - 4); let choice = null;
    for (let i = 0; i < 70; i += 1) {
      const left = random(4, maxLeft); const top = random(4, maxTop);
      const overlap = !(left + w + 12 < yes.left || left > yes.left + yes.width + 12 || top + h + 12 < yes.top || top > yes.top + yes.height + 12);
      const px = root.left + left + w / 2; const py = root.top + top + h / 2;
      const near = Number.isFinite(pointerX) && Number.isFinite(pointerY) && Math.hypot(px - pointerX, py - pointerY) < 115;
      if (!overlap && !near) { choice = { left, top }; break; }
    }
    if (!choice) choice = { left: maxLeft, top: 4 };
    positionNo(choice.left, choice.top);
  }
  function animateTransformSwap(element, fromRect) {
    if (reducedMotion || typeof element.animate !== "function") return;
    const toRect = element.getBoundingClientRect();
    const base = element.style.transform || "none";
    const dx = fromRect.left - toRect.left; const dy = fromRect.top - toRect.top;
    try {
      element.animate(
        [{ transform: `translate(${dx}px,${dy}px) ${base}` }, { transform: base }],
        { duration: 260, easing: "cubic-bezier(.2,.8,.2,1)" }
      );
    } catch (_) { /* Position still swaps correctly if Web Animations is unavailable. */ }
  }
  function swapButtons() {
    const root = forgiveActions.getBoundingClientRect();
    const yes = actionRect(yesButton); const no = actionRect(noButton);
    // The Yes button uses a centered left coordinate; No uses a top-left coordinate.
    yesButton.style.left = `${no.left + no.width / 2}px`;
    yesButton.style.top = `${no.top}px`;
    yesButton.style.transform = `translateX(-50%) scale(${yesScale})`;
    positionNo(yes.left, yes.top);
    noButton.classList.remove("is-shrinking");
    animateTransformSwap(yesButton, yes);
    animateTransformSwap(noButton, no);
  }
  function registerNoAttempt(pointerX, pointerY) {
    if (currentNumber !== 14 || noButton.classList.contains("is-temporary-yes")) return;
    const now = performance.now(); if (now - lastAttemptAt < 180) return; lastAttemptAt = now;
    noAttempts += 1; yesScale = Math.min(1.8, yesScale * 1.08); noScale = Math.max(.6, noScale * .92);
    yesButton.style.transform = `translateX(-50%) scale(${yesScale})`; noButton.style.setProperty("--scale", String(noScale));
    setForgiveMessage(); updateForgiveFace(); $("#sadReaction").textContent = noAttempts % 2 ? "🥺" : "💔";
    $("#slide-14").classList.remove("shake"); void $("#slide-14").offsetWidth; $("#slide-14").classList.add("shake"); vibrate(30);
    noBehaviorIndex = (noBehaviorIndex + 1) % noBehaviors.length;
    const behavior = noBehaviors[noBehaviorIndex];
    if (behavior === "RUN") moveNoAway(pointerX, pointerY);
    else if (behavior === "SHRINK") {
      noScale = .6; noButton.classList.add("is-shrinking"); moveNoAway(pointerX, pointerY);
      tasksAdd(240, () => { noButton.classList.remove("is-shrinking"); noButton.style.transform = "scale(.6)"; }, 14);
    }
    else if (behavior === "SWAP") swapButtons();
    else if (behavior === "SHY") {
      noButton.classList.add("is-shy"); sparkleBurstAt(noButton, 4, ["💨"]); moveNoAway(pointerX, pointerY); noShyUntil = now + 330;
    } else if (behavior === "TURNS INTO YES") {
      noButton.classList.add("is-temporary-yes"); noButton.textContent = "Yes 💛"; noButton.setAttribute("aria-disabled", "false"); noButton.tabIndex = 0; noTemporaryYesUntil = now + 2500; vibrate([30, 40, 30]);
    }
  }
  function acceptForgiveness() {
    if (yesAdvanceAt) return;
    noTemporaryYesUntil = 0; noButton.classList.remove("is-temporary-yes"); noButton.textContent = "No"; noButton.setAttribute("aria-disabled", "true"); noButton.tabIndex = -1;
    setBearMood("#forgiveBear", "happy"); teddySpeech.textContent = "Thank you, Sara. 🥹"; teddySpeech.classList.add("is-visible");
    sparkleBurstAt(yesButton, 12, ["♥", "♡", "✦"]); yesAdvanceAt = performance.now() + (reducedMotion ? 0 : 720);
  }
  function pointDistanceToNo(x, y) { const r = noButton.getBoundingClientRect(); const nx = clamp(x, r.left, r.right); const ny = clamp(y, r.top, r.bottom); return Math.hypot(x - nx, y - ny); }
  function resetForgivenessState() {
    noAttempts = 0; noMessageIndex = 0; teddyLineIndex = 0; yesScale = 1; noScale = 1; noBehaviorIndex = -1;
    noTemporaryYesUntil = 0; noShyUntil = 0; noLastPosition = { left: 0, top: 0 }; forgiveMessageUntil = 0; yesAdvanceAt = 0;
    lastAttemptAt = 0; lastNoCheck = 0; noPointerHandled = false; pointerPending = false;
    attemptBubble.classList.remove("is-visible"); teddySpeech.classList.remove("is-visible");
    $("#sadReaction").textContent = "🥺"; setBearMood("#forgiveBear", "sad");
    yesButton.style.transform = ""; yesButton.style.left = ""; yesButton.style.top = "";
    noButton.className = "no-button"; noButton.textContent = "No"; noButton.setAttribute("aria-disabled", "true"); noButton.tabIndex = -1;
    noButton.style.left = ""; noButton.style.top = ""; noButton.style.transform = ""; noButton.style.removeProperty("--scale");
  }
  noButton.addEventListener("pointerdown", (event) => { event.preventDefault(); event.stopPropagation(); noPointerHandled = true; if (noButton.classList.contains("is-temporary-yes")) acceptForgiveness(); else registerNoAttempt(event.clientX, event.clientY); }, { capture: true, passive: false });
  if (!window.PointerEvent) noButton.addEventListener("touchstart", (event) => { event.preventDefault(); event.stopPropagation(); noPointerHandled = true; if (noButton.classList.contains("is-temporary-yes")) acceptForgiveness(); else { const touch = event.changedTouches[0]; registerNoAttempt(touch?.clientX, touch?.clientY); } }, { capture: true, passive: false });
  noButton.addEventListener("click", (event) => { event.preventDefault(); event.stopImmediatePropagation(); if (noPointerHandled) { noPointerHandled = false; return; } if (noButton.classList.contains("is-temporary-yes")) acceptForgiveness(); else registerNoAttempt(NaN, NaN); }, true);
  noButton.addEventListener("keydown", (event) => { if (noButton.classList.contains("is-temporary-yes") && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); event.stopImmediatePropagation(); acceptForgiveness(); } else { event.preventDefault(); event.stopImmediatePropagation(); } }, true);
  yesButton.addEventListener("click", acceptForgiveness);
  document.addEventListener("pointermove", (event) => { lastPointer = { x: event.clientX, y: event.clientY }; pointerPending = true; }, { passive: true });

  /* Fireworks timing: stagger three launches, settle SARA, then hold the name. */
  const LOVE_FIREWORK_NAME_DELAY_MS = 2250;
  const LOVE_FIREWORK_NAME_SETTLE_MS = 1250;
  const LOVE_FIREWORK_NAME_HOLD_MS = 2500;
  const LOVE_FIREWORKS_END_MS = LOVE_FIREWORK_NAME_DELAY_MS + LOVE_FIREWORK_NAME_SETTLE_MS + LOVE_FIREWORK_NAME_HOLD_MS;

  /* Slide 15 bouquet hold and flower-cover transition. All timing lives here. */
  const BOUQUET_HOLD_MS = 2000;
  const BOUQUET_SPAWN_MS = 2200;
  const BOUQUET_WASH_AT_MS = 3600;
  const BOUQUET_AUTO_ADVANCE_MS = 5200;
  const BOUQUET_EXIT_FADE_MS = 600;
  const BOUQUET_PARTICLES = 170;
  const bouquetButton = $("#bouquetHold"); const bouquetCanvas = $("#bouquetCanvas"); const bouquetCtx = bouquetCanvas.getContext("2d");
  const bouquetExitCanvas = $("#bouquetExitCanvas"); const bouquetExitCtx = bouquetExitCanvas.getContext("2d");

  function makeBouquetSprite(type,size) {
    const canvas=document.createElement("canvas"); canvas.width=size*2; canvas.height=size*2;
    const ctx=canvas.getContext("2d"); ctx.translate(canvas.width/2,canvas.height/2);
    const grad=(a,b,c)=>{const g=ctx.createRadialGradient(-size*.2,-size*.25,1,0,0,size);g.addColorStop(0,a);g.addColorStop(.55,b);g.addColorStop(1,c);return g;};
    if(type===0){ // curled rose petal
      ctx.fillStyle=grad("#ffd0dc","#e65078","#9f183b");ctx.beginPath();ctx.moveTo(0,size*.7);ctx.bezierCurveTo(-size*.9,size*.05,-size*.72,-size*.92,-size*.05,-size);ctx.bezierCurveTo(size*.86,-size*.88,size*.9,size*.1,0,size*.7);ctx.fill();
      ctx.strokeStyle="rgba(255,238,243,.65)";ctx.lineWidth=1.4;ctx.beginPath();ctx.quadraticCurveTo(size*.2,-size*.68,size*.42,-size*.45);ctx.stroke();
    } else if(type===1){ // long lily petal
      ctx.fillStyle=grad("#fff","#ffe5ed","#df95ae");ctx.beginPath();ctx.moveTo(0,size);ctx.bezierCurveTo(-size*.62,size*.2,-size*.48,-size*.65,0,-size);ctx.bezierCurveTo(size*.5,-size*.62,size*.62,size*.25,0,size);ctx.fill();
      ctx.strokeStyle="rgba(191,96,133,.48)";ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(0,size*.82);ctx.quadraticCurveTo(-size*.12,0,0,-size*.82);ctx.stroke();
    } else if(type===2){ // little rose head
      for(let ring=0;ring<3;ring++){const n=ring===0?7:ring===1?6:5;for(let i=0;i<n;i++){ctx.save();ctx.rotate(i*Math.PI*2/n+ring*.28);ctx.fillStyle=grad(ring===2?"#ffcfdb":"#ffb8ca",ring===0?"#e04b71":"#c9305b","#75112e");ctx.beginPath();ctx.ellipse(0,-size*(.15+ring*.12),size*(.25-ring*.035),size*(.62-ring*.1),0,0,Math.PI*2);ctx.fill();ctx.restore();}}
      ctx.fillStyle="#85143a";ctx.beginPath();ctx.arc(0,0,size*.15,0,Math.PI*2);ctx.fill();ctx.strokeStyle="#ffdce4";ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(-size*.05,-size*.05,size*.28,3.6,5.5);ctx.stroke();
    } else if(type===3){ // five-petal filler flower
      for(let i=0;i<5;i++){ctx.save();ctx.rotate(i*Math.PI*2/5);ctx.fillStyle=grad("#fff","#ffd2e0","#db87a7");ctx.beginPath();ctx.ellipse(0,-size*.42,size*.25,size*.5,0,0,Math.PI*2);ctx.fill();ctx.restore();}ctx.fillStyle="#e8c45f";ctx.beginPath();ctx.arc(0,0,size*.16,0,Math.PI*2);ctx.fill();
    } else if(type===4){ // green leaf
      ctx.fillStyle=grad("#b2d18b","#4f985f","#245b39");ctx.beginPath();ctx.moveTo(0,size);ctx.quadraticCurveTo(-size*.98,-size*.08,0,-size);ctx.quadraticCurveTo(size*.94,-size*.1,0,size);ctx.fill();ctx.strokeStyle="#d0e1a3";ctx.lineWidth=1.6;ctx.beginPath();ctx.moveTo(0,size*.8);ctx.quadraticCurveTo(size*.12,0,0,-size*.82);ctx.stroke();
    } else { // heart-shaped falling petal
      ctx.fillStyle=grad("#ffccd9","#e94b78","#a9143d");ctx.beginPath();ctx.moveTo(0,size*.75);ctx.bezierCurveTo(-size*.2,size*.35,-size,size*.05,-size*.82,-size*.48);ctx.bezierCurveTo(-size*.65,-size*1.08,-size*.12,-size*.94,0,-size*.52);ctx.bezierCurveTo(size*.18,-size*1.03,size*.76,-size*1.05,size*.88,-size*.45);ctx.bezierCurveTo(size,size*.02,size*.23,size*.47,0,size*.75);ctx.fill();ctx.strokeStyle="rgba(255,235,241,.55)";ctx.lineWidth=1.1;ctx.beginPath();ctx.moveTo(0,size*.5);ctx.quadraticCurveTo(-size*.2,-size*.1,-size*.5,-size*.57);ctx.stroke();
    }
    return canvas;
  }
  function buildBouquetSprites() {
    if(bouquetSprites.length) return;
    const sizes=[13,22,34];
    bouquetSprites=Array.from({length:6},(_,type)=>sizes.map((size)=>makeBouquetSprite(type,size)));
  }
  function clearBouquetExit() {
    bouquetExitCanvas.classList.remove("is-visible");
    clearCanvasFully(bouquetExitCanvas,bouquetExitCtx);
  }
  bouquetExitCanvas.addEventListener("transitionend",(event)=>{
    if(event.propertyName!=="opacity"||bouquetExitCanvas.classList.contains("is-visible")) return;
    clearCanvasFully(bouquetExitCanvas,bouquetExitCtx);
  });
  function captureBouquetExit() {
    if(!bouquetHoldDone) return;
    const rect=bouquetCanvas.getBoundingClientRect(); const dpr=Math.min(window.innerWidth<600?1.5:2,window.devicePixelRatio||1);
    bouquetExitCanvas.width=Math.max(1,Math.round(window.innerWidth*dpr)); bouquetExitCanvas.height=Math.max(1,Math.round(window.innerHeight*dpr));
    bouquetExitCtx.setTransform(dpr,0,0,dpr,0,0); bouquetExitCtx.globalAlpha=1; bouquetExitCtx.clearRect(0,0,window.innerWidth,window.innerHeight);
    if($("#bouquetWash").classList.contains("is-active")){bouquetExitCtx.fillStyle="rgba(255,240,245,.92)";bouquetExitCtx.fillRect(0,0,window.innerWidth,window.innerHeight);}
    bouquetExitCtx.drawImage(bouquetCanvas,rect.left,rect.top,rect.width,rect.height);
    bouquetExitCanvas.classList.remove("is-visible"); void bouquetExitCanvas.offsetWidth; bouquetExitCanvas.classList.add("is-visible");
  }
  function fadeBouquetExit() {
    if(!bouquetExitCanvas.classList.contains("is-visible")) return;
    void bouquetExitCanvas.offsetWidth; bouquetExitCanvas.classList.remove("is-visible");
    if(reducedMotion) clearCanvasFully(bouquetExitCanvas,bouquetExitCtx);
  }
  function resetBouquet() {
    if (bouquetHoldTimer) window.clearTimeout(bouquetHoldTimer);
    bouquetHoldTimer = 0;
    bouquetHoldPointerId = null;
    clearBouquetTasks();
    bouquetHoldDone=false; bouquetHoldStart=0; bouquetPetals=[]; bouquetAutoAdvanceAt=0; bouquetRainStartAt=0; bouquetSpawned=0;
    byNumber(15).classList.remove("is-flowering");
    $("#bouquetWash").classList.remove("is-active"); $("#bouquetStatus").textContent="";
    $("#bouquetHoldLabel").textContent="Bouquet ko 2 second dabaye rakhiye 💗";
    bouquetButton.classList.remove("is-holding");
    bouquetButton.style.setProperty("--hold","0%"); $("#bouquetProgressRing").style.setProperty("--hold","0%");
    bouquetCanvas.style.opacity=currentNumber===15?"1":"0";
    clearCanvasFully(bouquetCanvas,bouquetCtx);
  }
  function beginBouquetHold() {
    if (currentNumber !== 15 || bouquetHoldDone || bouquetHoldStart) return;

    bouquetHoldStart = performance.now();
    vibrate(15);
    $("#bouquetHoldLabel").textContent = "Bas thoda sa aur... 💗";

    // Backup timer ensures the hold completes even if mobile RAF is delayed.
    const checkHold = () => {
      bouquetHoldTimer = 0;
      if (currentNumber !== 15 || bouquetHoldDone || !bouquetHoldStart) return;

      const remaining = BOUQUET_HOLD_MS - (performance.now() - bouquetHoldStart);
      if (remaining <= 0) {
        finishBouquetHold(performance.now());
      } else {
        bouquetHoldTimer = window.setTimeout(checkHold, remaining);
      }
    };

    bouquetHoldTimer = window.setTimeout(checkHold, BOUQUET_HOLD_MS);
  }
  function spawnBouquetPetal(size) {
    const type=Math.floor(random(0,6)); const sizeIndex=Math.floor(random(0,3));
    return {type,sizeIndex,x:random(-25,size.width+25),y:-random(22,Math.max(60,size.height*.82)),vx:random(-24,24),speed:random(150,285),rot:random(0,Math.PI*2),spin:random(-1.5,1.5),phase:random(0,6.28),frequency:random(1.1,2.5),amplitude:random(9,34),flip:random(1.2,3.2),alpha:random(.72,1),scale:random(.7,1.22)};
  }
  function finishBouquetHold(now = performance.now()) {
    if (bouquetHoldDone) return;

    if (bouquetHoldTimer) window.clearTimeout(bouquetHoldTimer);
    bouquetHoldTimer = 0;
    bouquetHoldDone = true;
    bouquetHoldStart = 0;
    bouquetRainStartAt = now;
    bouquetSpawned = 0;
    bouquetPetals = [];

    byNumber(15).classList.add("is-flowering");
    $("#bouquetStatus").textContent = "Ye saare flowers aapke liye hain. 💐";
    $("#bouquetHoldLabel").textContent = "Aapke liye, Sara 💗";
    vibrate([25, 30, 25]);
    bouquetAutoAdvanceAt = now + BOUQUET_AUTO_ADVANCE_MS;
  }

  function cancelBouquetHold() {
    if (bouquetHoldDone || !bouquetHoldStart) return;

    if (bouquetHoldTimer) window.clearTimeout(bouquetHoldTimer);
    bouquetHoldTimer = 0;
    bouquetHoldStart = 0;

    $("#bouquetHoldLabel").textContent = "Bouquet ko 2 second dabaye rakhiye 💗";
    bouquetButton.style.setProperty("--hold", "0%");
    $("#bouquetProgressRing").style.setProperty("--hold", "0%");
  }
  // Mouse and pen use Pointer Events. Touch uses dedicated touch events
  // to avoid mobile pointer-capture cancellations interrupting a long press.
  bouquetButton.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "touch") return;
    if (event.button !== undefined && event.button !== 0) return;
    event.preventDefault();
    if (bouquetHoldPointerId !== null) return;

    bouquetHoldPointerId = event.pointerId;
    try { bouquetButton.setPointerCapture(event.pointerId); } catch (_) {}
    beginBouquetHold();
  }, { passive: false });

  function stopBouquetPointer(event) {
    if (bouquetHoldPointerId === "touch") return;
    if (typeof bouquetHoldPointerId === "number" &&
        event.pointerId !== bouquetHoldPointerId) return;

    bouquetHoldPointerId = null;
    cancelBouquetHold();
  }

  ["pointerup", "pointercancel", "lostpointercapture"].forEach((name) => {
    bouquetButton.addEventListener(name, stopBouquetPointer, { passive: true });
  });

  bouquetButton.addEventListener("touchstart", (event) => {
    if (bouquetHoldPointerId !== null || event.touches.length !== 1) return;
    event.preventDefault();
    bouquetHoldPointerId = "touch";
    beginBouquetHold();
  }, { passive: false });

  function stopBouquetTouch() {
    if (bouquetHoldPointerId !== "touch") return;
    bouquetHoldPointerId = null;
    cancelBouquetHold();
  }

  bouquetButton.addEventListener("touchend", stopBouquetTouch, { passive: true });
  bouquetButton.addEventListener("touchcancel", stopBouquetTouch, { passive: true });
  bouquetButton.addEventListener("contextmenu", (event) => event.preventDefault());

  bouquetButton.addEventListener("keydown", (event) => {
    if ((event.key === " " || event.key === "Enter") && !event.repeat) {
      event.preventDefault();
      beginBouquetHold();
    }
  });

  bouquetButton.addEventListener("keyup", (event) => {
    if (event.key === " " || event.key === "Enter") {
      cancelBouquetHold();
    }
  });

  function drawBouquet(dt,size,now) {
    bouquetCtx.clearRect(0,0,size.width,size.height);
    const elapsed=now-bouquetRainStartAt; const total=liteMode?100:BOUQUET_PARTICLES;
    const target=Math.floor(total*clamp(elapsed/BOUQUET_SPAWN_MS,0,1));
    if (liteMode && bouquetPetals.length > 100) bouquetPetals.length = 100;
    while(bouquetSpawned<target){bouquetPetals.push(spawnBouquetPetal(size));bouquetSpawned++;}
    if(elapsed<BOUQUET_WASH_AT_MS){
      const respawns=bouquetPetals.filter(p=>p.y>size.height+65);
      respawns.forEach(p=>{p.y=-random(35,Math.max(90,size.height*.65));p.x=random(-10,size.width+10);p.speed=random(155,290);p.phase=random(0,6.28);});
    }
    bouquetPetals=bouquetPetals.filter(p=>p.y<size.height+95);
    bouquetPetals.forEach((petal)=>{
      petal.y+=petal.speed*dt; petal.x+=petal.vx*dt+Math.sin(now/1000*petal.frequency+petal.phase)*petal.amplitude*dt; petal.rot+=petal.spin*dt;
      const sprite=bouquetSprites[petal.type][petal.sizeIndex]; const side=Math.max(12,sprite.width*.9*petal.scale);
      const flip=Math.cos(now/1000*petal.flip+petal.phase);
      bouquetCtx.save(); bouquetCtx.globalAlpha=petal.alpha; bouquetCtx.translate(petal.x,petal.y); bouquetCtx.rotate(petal.rot); bouquetCtx.scale(Math.max(.12,Math.abs(flip)),1);
      bouquetCtx.drawImage(sprite,-side/2,-side/2,side,side); bouquetCtx.restore();
    });
    bouquetCtx.globalAlpha=1;
    if(elapsed>=BOUQUET_WASH_AT_MS) $("#bouquetWash").classList.add("is-active");
  }

  /* Slide 17 final letter: character-by-character typewriter with manual-scroll pause. */
  const finalScroll = $("#finalLetterScroll"); const finalCopy = $("#finalLetterCopy");
  const finalLines = [...CONFIG.finalLetter, CONFIG.senderName];
  finalScroll.addEventListener("scroll", () => { finalScrollPending = true; }, { passive: true });
  function startFinalLetter() {
    finalCopy.replaceChildren(); finalLetterIndex = 0; finalCharIndex = 0; finalLetterAccumulator = 0; finalLetterDone = false; finalConfettiDone = false; finalAutoScroll = true; finalReveal(false);
    $("#finalHugButton").classList.remove("is-hugging");
    $("#hugBubble14").classList.remove("is-visible");
    finalScroll.scrollTop = 0;
  }
  function finalReveal(show) { $("#finalReveal").hidden = !show; $("#finalReveal").classList.toggle("is-visible", show); }
  function typeFinalLetter(dt) {
    if (finalLetterDone) return;
    finalLetterAccumulator += dt * 1000;
    const interval = liteMode ? 27 : 22;
    while (finalLetterAccumulator >= interval && !finalLetterDone) {
      finalLetterAccumulator -= interval;
      if (finalLetterIndex >= finalLines.length) { finalLetterDone = true; finalReveal(true); fireFinalConfetti(); break; }
      const line = finalLines[finalLetterIndex];
      if (line === "") { const gap = document.createElement("p"); gap.className = "gap"; gap.innerHTML = "&nbsp;"; finalCopy.append(gap); finalLetterIndex += 1; finalCharIndex = 0; }
      else {
        let paragraph = finalCopy.lastElementChild;
        if (!paragraph || paragraph.dataset.line !== String(finalLetterIndex)) { paragraph = document.createElement("p"); paragraph.dataset.line = String(finalLetterIndex); finalCopy.append(paragraph); }
        if (finalCharIndex < line.length) { paragraph.textContent += line.charAt(finalCharIndex); finalCharIndex += 1; }
        else { finalLetterIndex += 1; finalCharIndex = 0; }
      }
      if (finalAutoScroll) finalScroll.scrollTop = finalScroll.scrollHeight;
    }
  }
  function fireFinalConfetti() {
    if (finalConfettiDone) return; finalConfettiDone = true;
    if (typeof window.confetti === "function" && !liteMode) {
      window.confetti({ particleCount: 42, spread: 52, startVelocity: 25, gravity: .85, scalar: .72, origin: { x: .5, y: .72 }, colors: ["#ff6f9f", "#e84a86", "#ffc9b9", "#d9b8ff", "#f5d98a"] });
    }
  }
  function drawFinal(dt, size, now) {
    const ctx = $("#finalCanvas").getContext("2d"); ctx.clearRect(0, 0, size.width, size.height);
    const count = liteMode ? 7 : 14;
    for (let i = 0; i < count; i += 1) {
      const y = ((now / 48 + i * 83) % (size.height + 40)) - 20; const x = (i * 91 + Math.sin(now / 1700 + i) * 24) % size.width;
      ctx.globalAlpha = .28 + .22 * Math.sin(now / 900 + i); ctx.fillStyle = i % 3 ? "#ed83a7" : "#fff"; ctx.font = `${10 + (i % 3) * 3}px serif`; ctx.fillText(i % 3 ? "♡" : "✿", x, y);
    } ctx.globalAlpha = 1;
  }

  /* One controller map for the 17 physical slide IDs. Only the active one runs. */
  const controllers = {
    1: { start() { $("#envelope").classList.remove("is-opening"); envelopeAdvanceAt = 0; }, frame() {}, stop() { envelopeAdvanceAt = 0; } },
    2: { start() { $("#hugBubble2").classList.remove("is-visible"); }, frame() {}, stop() { $(".cute-bear",$("#sorryBear")).classList.remove("is-hugging"); $("#hugBubble2").classList.remove("is-visible"); } },
    3: { start() {}, frame() {}, stop() {} },
    4: { start(now) { startChat(now); }, frame(now) { frameChat(now); }, stop() { chatStart=0; chatRendered=-1; $("#chatMessagesArea").replaceChildren(); $("#chatCaption").textContent=""; } },
    5: { start() { loveTapCount = 0; $("#surpriseNote").classList.remove("is-visible"); buildLoveField(); }, frame() {}, stop() { $("#loveField").replaceChildren(); } },
    6: { start() {}, frame() {}, stop() {} },
    7: { start() { $$(".reason-card", byNumber(7)).forEach((card) => { card.classList.remove("is-flipped"); card.setAttribute("aria-pressed", "false"); }); }, frame() {}, stop() { $$(".reason-card", byNumber(7)).forEach((card) => { card.classList.remove("is-flipped"); card.setAttribute("aria-pressed", "false"); }); } },
    8: { start() { resetQuiz(); }, frame() {}, stop() { quizReactionUntil = 0; } },
    9: { start() { startNight(); }, frame(now) { drawNight(now); }, stop() { stopNight(); } },
    10: { start() {}, frame() {}, stop() {} },
    11: { start() { resetPinky(); resizeCanvas(pinkyCanvas,pinkyCtx); }, frame(now,dt) { if (pinkyStart && !pinkyDone) { const progress = clamp((now - pinkyStart) / 2000, 0, 1); pinkyButton.style.setProperty("--hold", `${progress * 100}%`); if (progress >= 1) { pinkyDone = true; pinkyStart = 0; pinkyButton.classList.remove("is-holding"); $("#pinkyPop").classList.add("is-visible"); $("#pinkyStatus").textContent = "Promise pakka 🤞"; sparkleBurstAt(pinkyButton, 12, ["♡", "♥", "✦"]); startPinkyRain(); vibrate(40); } } drawPinkyRain(now,dt); }, stop() { resetPinky(); } },
    12: { start() { renderBucketCarousel(); }, frame() {}, stop() { bucketPointerStart = null; } },
    13: { start() { buildBalloons(); balloonsStarted = true; }, frame() {}, stop() { balloonMessageToken++; balloonsStarted=false; balloonPopped.clear(); $("#balloonGrid").replaceChildren(); $("#balloonMessage").textContent=""; $("#allBalloonsMessage").hidden=true; $("#balloonNextButton").hidden=true; } },
    14: { start() { resetForgivenessState(); }, frame(now) {
      if (pointerPending) { pointerPending = false; if (currentNumber === 14 && lastPointer && !noButton.classList.contains("is-temporary-yes") && now - lastNoCheck > 140 && pointDistanceToNo(lastPointer.x, lastPointer.y) < 105) { lastNoCheck = now; registerNoAttempt(lastPointer.x, lastPointer.y); } }
      if (noShyUntil && now >= noShyUntil) { noShyUntil = 0; noButton.classList.remove("is-shy"); }
      if (noTemporaryYesUntil && now >= noTemporaryYesUntil) { noTemporaryYesUntil = 0; noButton.classList.remove("is-temporary-yes"); noButton.textContent = "No"; noButton.setAttribute("aria-disabled", "true"); noButton.tabIndex = -1; moveNoAway(NaN, NaN); }
      if (forgiveMessageUntil && now >= forgiveMessageUntil && noAttempts < CONFIG.attemptThreshold) { forgiveMessageUntil = 0; attemptBubble.classList.remove("is-visible"); teddySpeech.classList.remove("is-visible"); }
      if (yesAdvanceAt && now >= yesAdvanceAt) { yesAdvanceAt = 0; goToSlide(15, true); }
    }, stop() { resetForgivenessState(); } },
    15: { start() { clearBouquetExit(); resetBouquet(); buildBouquetSprites(); bouquetCanvas.style.opacity="1"; resizeCanvas(bouquetCanvas,bouquetCtx); }, frame(now,dt) { const size=resizeCanvas(bouquetCanvas,bouquetCtx); if(bouquetHoldStart&&!bouquetHoldDone){const progress=clamp((now-bouquetHoldStart)/BOUQUET_HOLD_MS,0,1);bouquetButton.style.setProperty("--hold",`${progress*100}%`);$("#bouquetProgressRing").style.setProperty("--hold",`${progress*100}%`);if(progress>=1)finishBouquetHold(now);} if(bouquetHoldDone){drawBouquet(dt,size,now);if(bouquetAutoAdvanceAt&&now>=bouquetAutoAdvanceAt){bouquetAutoAdvanceAt=0;goToSlide(16,true);}} }, stop() { if(bouquetHoldDone) captureBouquetExit(); resetBouquet(); bouquetCanvas.style.opacity="0"; } },
    16: { start() { rocketPathCache = null; startLoveMeter(); }, frame(now, dt) { const size = resizeCanvas(loveMeterCanvas, loveMeterCtx); drawLoveMeter(now, dt, size); }, stop() { loveSlider.disabled = false; loveMeterFireworks=[]; loveMeterTrail=[]; rocketPathCache = null; clearCanvasFully(loveMeterCanvas,loveMeterCtx); } },
    17: { start() { startFinalLetter(); clearCanvasFully($("#finalCanvas"),$("#finalCanvas").getContext("2d")); }, frame(now, dt) { const size = resizeCanvas($("#finalCanvas"), $("#finalCanvas").getContext("2d")); typeFinalLetter(dt); drawFinal(dt, size, now); }, stop() { clearCanvasFully($("#finalCanvas"),$("#finalCanvas").getContext("2d")); $("#finalHugButton").classList.remove("is-hugging"); $("#hugBubble14").classList.remove("is-visible"); } }
  };

  function startController(number) { const controller = controllers[number]; if (controller && controller.start) controller.start(performance.now()); }
  function stopController(number) { const controller = controllers[number]; if (controller && controller.stop) controller.stop(); tasksClearFor(number); }
  function goToSlide(target, fromRequiredAction = false) {
    const requested = clamp(Math.round(target), 1, 17);
    if (requested === currentNumber) return;
    const direction = requested >= currentNumber ? 1 : -1;
    const next = nextEnabledNumber(requested, direction);
    if (!next || next === currentNumber) return;
    // Forgiveness and bouquet require their own action; the love-meter requires its full sequence.
    if (!fromRequiredAction && direction > 0 && (currentNumber === 14 || currentNumber === 15 || (currentNumber === 16 && !loveMeterDone))) return;
    const previousNumber = currentNumber;
    stopController(currentNumber);
    // Clear any older leaving slide whose delayed cleanup was superseded by a rapid navigation.
    slides.forEach((slide) => {
      if (slide !== currentSlide && slide !== byNumber(next) && slide.classList.contains("is-leaving")) {
        slide.classList.remove("is-leaving"); slide.hidden = true; slide.setAttribute("aria-hidden", "true");
      }
    });
    currentSlide.classList.remove("is-active"); currentSlide.classList.add("is-leaving"); currentSlide.setAttribute("aria-hidden", "true");
    const old = currentSlide; const nextSlide = byNumber(next); currentNumber = next; currentSlide = nextSlide;
    nextSlide.hidden = false; nextSlide.classList.remove("is-leaving"); nextSlide.setAttribute("aria-hidden", "false"); void nextSlide.offsetWidth; nextSlide.classList.add("is-active");
    const transitionToken = ++slideTransitionToken;
    const hideOld = () => {
      old.removeEventListener("animationend", hideOld);
      if (transitionToken !== slideTransitionToken || old === currentSlide) return;
      old.classList.remove("is-leaving"); old.hidden = true; old.setAttribute("aria-hidden", "true");
    };
    old.addEventListener("animationend", hideOld); tasksAdd(650, hideOld, null);
    updateNavigation(); startController(currentNumber);
    if(previousNumber===15) fadeBouquetExit();
  }
  function goToRelative(delta) {
    const destination = relativeEnabledNumber(delta);
    if (destination != null) goToSlide(destination);
  }
  function replay() {
    stopController(currentNumber);
    tasksClearAll(); slideTransitionToken += 1;
    noAttempts = 0; noMessageIndex = 0; teddyLineIndex = 0; yesScale = 1; noScale = 1; noBehaviorIndex = -1; lastAttemptAt = 0;
    balloonPopped.clear(); balloonsStarted = false; loveTapCount = 0; sparkleParticles = []; pinkyDone = false; bouquetHoldDone = false; finalConfettiDone = false;
    quizIndex = 0; quizReactionUntil = 0; quizDone = false; bucketIndex = 0; bucketPointerStart = null;
    loveMeterDone = false; loveMeterStage = "slider"; loveMeterStageAt = 0; loveMeterFireworks = []; loveMeterTrail = []; loveMeterNamePoints = []; rocketPathCache = null;
    attemptBubble.classList.remove("is-visible"); teddySpeech.classList.remove("is-visible"); yesButton.style.transform = ""; yesButton.style.left = ""; yesButton.style.top = "";
    noButton.className = "no-button"; noButton.textContent = "No"; noButton.setAttribute("aria-disabled", "true"); noButton.tabIndex = -1; noPointerHandled = false; noButton.style.left = ""; noButton.style.top = ""; noButton.style.transform = "";
    $("#sadReaction").textContent = "🥺"; setBearMood("#forgiveBear", "sad");
    $("#surpriseNote").classList.remove("is-visible"); $("#finalReveal").hidden = true; $("#finalReveal").classList.remove("is-visible");
    $("#finalHugButton").classList.remove("is-hugging"); $("#hugBubble14").classList.remove("is-visible");
    resetPinky(); resetBouquet(); clearBouquetExit();
    $("#quizResult").hidden = true; $("#quizSpeech").classList.remove("is-visible");
    resetLoveMeter();
    bouquetCanvas.style.opacity = "0";
    slides.forEach((slide) => {
      const isIntro = slide === byNumber(1);
      slide.classList.remove("is-active", "is-leaving");
      slide.hidden = !isIntro;
      slide.setAttribute("aria-hidden", String(!isIntro));
    });
    currentNumber = 1; currentSlide = byNumber(1); currentSlide.classList.add("is-active"); currentSlide.hidden = false;
    startController(1); updateNavigation();
    try { sessionStorage.removeItem("saraSorrySlide"); } catch (_) { /* ignore */ }
  }
  $("#startButton").addEventListener("click", openEnvelope);
  $("#envelopeButton").addEventListener("click", openEnvelope);
  function openEnvelope() { if (currentNumber !== 1 || envelopeAdvanceAt) return; $("#envelope").classList.add("is-opening"); envelopeAdvanceAt = performance.now() + (reducedMotion ? 0 : 670); }
  $("#replayButton").addEventListener("click", replay);
  prevButton.addEventListener("click", () => goToRelative(-1));
  nextButton.addEventListener("click", () => goToRelative(1));
  document.addEventListener("keydown", (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (currentNumber === 12 && (event.key === "ArrowRight" || event.key === "ArrowLeft")) {
      event.preventDefault(); changeBucket(bucketIndex + (event.key === "ArrowRight" ? 1 : -1)); return;
    }
    if (event.key === "ArrowRight" && currentNumber !== 14 && currentNumber !== 15 && !(currentNumber === 16 && !loveMeterDone)) { event.preventDefault(); goToRelative(1); }
    if (event.key === "ArrowLeft") { event.preventDefault(); goToRelative(-1); }
  });

  /* Swipe support. Ignore gestures that begin on the love-meter slider. */
  let touchStart = null;

  document.addEventListener("touchstart", (event) => {
    const point = event.changedTouches[0];
    if (!point) return;

    const target = event.target;
    const ignoreSwipe = Boolean(
      target && typeof target.closest === "function" &&
      target.closest("#loveSlider, .love-range-wrap")
    );

    touchStart = {
      x: point.clientX,
      y: point.clientY,
      ignoreSwipe
    };
  }, { passive: true });

  document.addEventListener("touchend", (event) => {
    if (!touchStart) return;

    const start = touchStart;
    touchStart = null;

    // Slider dragging must never trigger previous/next slide navigation.
    if (start.ignoreSwipe) return;

    const point = event.changedTouches[0];
    if (!point) return;

    const dx = point.clientX - start.x;
    const dy = point.clientY - start.y;

    if (Math.abs(dx) < 55 || Math.abs(dx) < Math.abs(dy) * 1.25) return;
    if (currentNumber === 12) return;

    if (dx < 0) goToRelative(1);
    else if (dx > 0) goToRelative(-1);
  }, { passive: true });

  /* Lite mode can also switch on after the first 60 slow frames. */
  function frame(now) {
    if (documentPaused) return;
    if (!lastFrame) lastFrame = now;
    const deltaMs = Math.min(50, now - lastFrame); const dt = deltaMs / 1000; lastFrame = now; frameCount += 1;
    if (frameCount <= 60) { frameSamples.push(deltaMs); if (frameCount === 60) { const average = frameSamples.reduce((sum, value) => sum + value, 0) / frameSamples.length; if (average > 24 && !liteMode) { liteMode = true; document.body.classList.add("lite-mode"); } frameSamples = []; } }
    processTasks(now);
    if (finalScrollPending) { finalScrollPending = false; finalAutoScroll = finalScroll.scrollHeight - finalScroll.scrollTop - finalScroll.clientHeight < 24; }
    if (lastPointer && now - lastTrailAt > 85 && !liteMode && window.matchMedia("(hover:hover) and (pointer:fine)").matches && currentNumber !== 14) { lastTrailAt = now; sparkleBurstAtPoint(lastPointer.x, lastPointer.y, 1, ["♡"]); }
    const controller = controllers[currentNumber]; if (controller && controller.frame) controller.frame(now, dt);
    updateDesktopTilt();
    if (currentNumber === 1 && envelopeAdvanceAt && now >= envelopeAdvanceAt) { envelopeAdvanceAt = 0; goToSlide(2); }
    if (sparkleParticles.length) drawSparkles(dt);
    rafId = requestAnimationFrame(frame);
  }
  function startFrameManager() { if (!rafId && !documentPaused) { lastFrame = 0; rafId = requestAnimationFrame(frame); } }
  function stopFrameManager() { if (rafId) cancelAnimationFrame(rafId); rafId = 0; lastFrame = 0; }
  document.addEventListener("visibilitychange", () => {
    documentPaused = document.hidden;
    if (documentPaused) {
      hiddenAt = performance.now(); stopFrameManager(); document.body.classList.remove("app-active");
    } else {
      const pauseDuration = hiddenAt ? performance.now() - hiddenAt : 0; hiddenAt = 0;
      tasks.forEach((task) => { task.due += pauseDuration; });
      if (chatStart) chatStart += pauseDuration; if (constellationStart) constellationStart += pauseDuration;
      if (pinkyStart) pinkyStart += pauseDuration;
      if (noTemporaryYesUntil) noTemporaryYesUntil += pauseDuration;
      if (noShyUntil) noShyUntil += pauseDuration;
      if (forgiveMessageUntil) forgiveMessageUntil += pauseDuration;
      if (yesAdvanceAt) yesAdvanceAt += pauseDuration;
      if (envelopeAdvanceAt) envelopeAdvanceAt += pauseDuration;
      if (bouquetHoldStart) bouquetHoldStart += pauseDuration;
      if (bouquetRainStartAt) bouquetRainStartAt += pauseDuration;
      if (bouquetAutoAdvanceAt) bouquetAutoAdvanceAt += pauseDuration;
      if (pinkyRainStartedAt) pinkyRainStartedAt += pauseDuration;
      if (loveMeterStageAt) loveMeterStageAt += pauseDuration;
      if (loveMeterStartAt) loveMeterStartAt += pauseDuration;
      lanterns.forEach((lantern) => { lantern.born += pauseDuration; });
      document.body.classList.add("app-active"); startFrameManager();
    }
  });
  window.addEventListener("resize", () => {
    if (currentNumber === 9) startNight();
    if (currentNumber === 15) resizeCanvas(bouquetCanvas, bouquetCtx);
    if (currentNumber === 16) { rocketPathCache = null; resizeCanvas(loveMeterCanvas, loveMeterCtx); }
    if (currentNumber === 17) resizeCanvas($("#finalCanvas"), $("#finalCanvas").getContext("2d"));
  }, { passive: true });

  /* Desktop pointer movement is sampled by the central RAF; mobile taps sparkle immediately. */
  document.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "touch") sparkleBurstAtPoint(event.clientX, event.clientY, 5, ["✦", "♡"]);
  }, { passive: true });

  /* Per-letter hover wave is limited to headings and only enhanced on desktop. */
  function wrapHeadingLetters() {
    $$('h1.hero-title, h2.section-title, h2.love-title, h2.final-title').forEach((heading) => {
      const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
      const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach((node) => {
        const fragment = document.createDocumentFragment();
        Array.from(node.textContent).forEach((character, index) => {
          const span = document.createElement('span'); span.className = 'letter-wave'; span.style.setProperty('--letter-index', String(index));
          span.textContent = character === ' ' ? '\u00a0' : character; fragment.append(span);
        });
        node.replaceWith(fragment);
      });
    });
  }
  wrapHeadingLetters();
  function updateDesktopTilt() {
    if (liteMode || !lastPointer || !window.matchMedia('(hover:hover) and (pointer:fine)').matches) return;
    const target = document.elementFromPoint(lastPointer.x, lastPointer.y);
    const card = target?.closest('.tilt-card');
    if (lastTiltCard && lastTiltCard !== card) { lastTiltCard.style.setProperty('--rx', '0deg'); lastTiltCard.style.setProperty('--ry', '0deg'); lastTiltCard.style.translate = '0 0'; }
    lastTiltCard = card || null;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const nx = clamp((lastPointer.x - rect.left) / Math.max(rect.width, 1) - .5, -.5, .5);
    const ny = clamp((lastPointer.y - rect.top) / Math.max(rect.height, 1) - .5, -.5, .5);
    card.style.setProperty('--rx', `${-ny * 12}deg`);
    card.style.setProperty('--ry', `${nx * 12}deg`);
    card.style.translate = `${nx * 16}px ${ny * 16}px`;
  }

  /* Initial state and session restore. */
  let restore = 1;
  try { const saved = Number(sessionStorage.getItem("saraSorrySlide")); if (Number.isInteger(saved) && enabledSet.has(saved)) restore = saved; else if (Number.isInteger(saved) && saved >= 1 && saved <= 17) restore = nextEnabledNumber(saved, 1) || enabledSequence[enabledSequence.length - 1]; } catch (_) { restore = 1; }
  slides.forEach((slide) => {
    const number = Number(slide.dataset.slide); const active = number === restore && enabledSet.has(number);
    slide.classList.toggle("is-active", active); slide.hidden = !active || !enabledSet.has(number); slide.setAttribute("aria-hidden", String(!active));
  });
  currentNumber = restore; currentSlide = byNumber(restore); updateNavigation(); startController(currentNumber); startFrameManager();
})();