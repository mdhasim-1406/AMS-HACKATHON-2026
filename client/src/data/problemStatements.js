// Official AMS HACKATHON 2026 Problem Statements (Software & Hardware)
// Total: 55 statements across 12 Innovation Domains

export const PROBLEM_STATEMENTS = [
  {
    "id": "ML-01",
    "title": "Deep Learning That Survives Small, Messy, Real Data",
    "track": "AI & Machine Learning",
    "category": "Software",
    "difficulty": "Flagship",
    "summary": "Real organisations almost never have clean, massive, well-labelled datasets. They have small, irregular, noisy time-series and tabular records: sales, machine telemetry, footfall, weather-affected demand. Pretrained intuition and \"throw more GPUs at it\" both fail at this scale, and few practitioners build models that are honest about their limits.",
    "context": "This is where genuine ML and DL engineering shows. Building and correctly evaluating a neural network under data constraints, with honest uncertainty, is a demonstrable gap between what the field promises and what practitioners deliver.",
    "expectedSolution": "A complete, runnable deep-learning pipeline for time-series or tabular prediction (or anomaly detection) on a small, realistic dataset. It must include: a clearly justified architecture choice (for example RNN, LSTM, CNN, tabular-NN, or a modern small-model approach), augmentation or synthetic-data strategies, an honest train/val/test split, and a metrics report that states uncertainty and error honestly. Ship it as a working web app or notebook-to-service flow with a simple interface where a user can upload data and see predictions.",
    "deliverables": [
      "End-to-end working software solution for Deep Learning That Survives Small, Messy, Real Data",
      "Core engine addressing key constraints: Must work with small, noisy data. No hundreds-of-gigabytes or pre-labelled luxury. Must ru...",
      "Intuitive responsive interface built for real-world end users with zero-friction UX",
      "Bonus capability: A \"what would it take to do better\" section that names the specific data and effort that w..."
    ],
    "constraints": "Must work with small, noisy data. No hundreds-of-gigabytes or pre-labelled luxury. Must run on modest CPU or a single GPU. Must report honest metrics, not cherry-picked ones. Must explain why the architecture was chosen.",
    "bonus": "A \"what would it take to do better\" section that names the specific data and effort that would close the remaining gap. ---",
    "techStack": [
      "Python / PyTorch",
      "FastAPI / Flask",
      "Hugging Face / Transformers",
      "React / Next.js",
      "ONNX / TFLite"
    ],
    "evaluation": [
      "Problem Understanding & Gap Framing (25%)",
      "Working Software Prototype & User Experience (35%)",
      "Technical Architecture, Code Quality & Robustness (25%)",
      "Real-world Feasibility, Constraints & Bonus Scope (15%)"
    ]
  },
  {
    "id": "ML-02",
    "title": "Deep Learning on a Signal, Without the Toy",
    "track": "AI & Machine Learning",
    "category": "Software",
    "difficulty": "Flagship",
    "summary": "A large share of real-world deep-learning value is classification, detection, or forecasting on a continuous sensor-like signal: machine vibration for failure, footfall for crowd risk, water level, energy load. In practice these signals are noisy, unlabelled or partially labelled, and the stakes are skewed. Missing one rare event costs far more than being accurate on many normal ones.",
    "context": "This rewards true DL craft: architecture choice, class-imbalance handling, threshold calibration for asymmetric loss, on a real signal task. No toy MNIST-style demonstration.",
    "expectedSolution": "A neural-network detector or forecaster on an asymmetric, partially-labelled signal dataset. It must handle class imbalance, calibrate its decision threshold for rare-but-critical events, and report precision, recall, and expected cost rather than a single accuracy number. Deliver it as a working web interface where a user can feed a signal file and get event alerts with confidence, plus a threshold-control panel.",
    "deliverables": [
      "End-to-end working software solution for Deep Learning on a Signal, Without the Toy",
      "Core engine addressing key constraints: Asymmetric cost must be reflected in evaluation: missing a rare event must hurt more than ...",
      "Intuitive responsive interface built for real-world end users with zero-friction UX",
      "Bonus capability: A deployable small-inference path such as ONNX, quantised, or TFLite, proving the model co..."
    ],
    "constraints": "Asymmetric cost must be reflected in evaluation: missing a rare event must hurt more than false alarms. Must handle partial or noisy labels. Must run on modest compute. Must report precision, recall, and expected cost.",
    "bonus": "A deployable small-inference path such as ONNX, quantised, or TFLite, proving the model could run at the edge later. ---",
    "techStack": [
      "Python / PyTorch",
      "FastAPI / Flask",
      "Hugging Face / Transformers",
      "React / Next.js",
      "ONNX / TFLite"
    ],
    "evaluation": [
      "Problem Understanding & Gap Framing (25%)",
      "Working Software Prototype & User Experience (35%)",
      "Technical Architecture, Code Quality & Robustness (25%)",
      "Real-world Feasibility, Constraints & Bonus Scope (15%)"
    ]
  },
  {
    "id": "GA-01",
    "title": "Grounded Generation That Cannot Fabricate",
    "track": "AI & Machine Learning",
    "category": "Software",
    "difficulty": "Flagship",
    "summary": "Generative models hallucinate. They produce fluent, confident, false content. Every real deployment in legal, medical, government, education, and finance needs answers that are verifiably grounded: every claim traceable to a cited source, and an explicit refusal when no source supports an answer. Current tools generate but do not reliably ground and refuse under pressure. This ability to refuse to invent is a genuine frontier.",
    "context": "This is a bleeding-edge, generic capability gap that applies to any domain and is evaluable from the ground up: did it invent or cite? Did it refuse when it should?",
    "expectedSolution": "A question-answering system that answers from a given document set with no internet reliance. It must: cite the exact source lines for every claim, explicitly say \"no source found\" and refuse when evidence is insufficient, and stay correct under adversarial questions that try to bait it into fabricating. The deliverable is a web app where a user uploads documents, asks questions, and sees every answer with inline citations and a verdict of grounded or refused. Verifiability is the headline metric.",
    "deliverables": [
      "End-to-end working software solution for Grounded Generation That Cannot Fabricate",
      "Core engine addressing key constraints: Every answer must be checkable against its citations. Must refuse rather than guess. Must ...",
      "Intuitive responsive interface built for real-world end users with zero-friction UX",
      "Bonus capability: A mismatch-highlighter that shows where the model's claims diverge from the cited text, ma..."
    ],
    "constraints": "Every answer must be checkable against its citations. Must refuse rather than guess. Must degrade gracefully on ambiguous or contradictory material. Must not claim certainty it does not have.",
    "bonus": "A mismatch-highlighter that shows where the model's claims diverge from the cited text, making self-audit part of the product. ---",
    "techStack": [
      "Python / PyTorch",
      "FastAPI / Flask",
      "Hugging Face / Transformers",
      "React / Next.js",
      "ONNX / TFLite"
    ],
    "evaluation": [
      "Problem Understanding & Gap Framing (25%)",
      "Working Software Prototype & User Experience (35%)",
      "Technical Architecture, Code Quality & Robustness (25%)",
      "Real-world Feasibility, Constraints & Bonus Scope (15%)"
    ]
  },
  {
    "id": "GA-02",
    "title": "An Agent That Actually Finishes the Job",
    "track": "AI & Machine Learning",
    "category": "Software",
    "difficulty": "Flagship",
    "summary": "Frontier agents can plan a task but fail to complete it reliably. They stall, repeat, drop steps, and cannot verify they actually did what was asked. The frontier for real products is dependable multi-step completion with tools: reason, act, check the outcome, fix, report, with transparent state at every step and a clear \"done or not done\" verdict.",
    "context": "Reliable, verifiable task completion, not planning, is the widely-reported frontier failure mode of 2023 to 2026. It is generic: it applies to any multi-step operational task such as form-filling, data-gathering, report prep, or reconciliation.",
    "expectedSolution": "An agent that carries a multi-step task end-to-end using tools (search, APIs, files). It must self-verify each step's result, recover from its own mistakes, and end with an explicit, honest completion report that states what was completed, what could not be done, and the evidence. The deliverable is a task console where a user describes a task (for example \"compile a summary report from these sources\") and watches the agent work step by step, with a final audit-grade report.",
    "deliverables": [
      "End-to-end working software solution for An Agent That Actually Finishes the Job",
      "Core engine addressing key constraints: The completion report is the artefact. It must be honest about what succeeded and failed. ...",
      "Intuitive responsive interface built for real-world end users with zero-friction UX",
      "Bonus capability: A per-step evidence trail, what the agent did, saw, and decided, that a human can audit in..."
    ],
    "constraints": "The completion report is the artefact. It must be honest about what succeeded and failed. Must not loop forever or silently drop steps. Must surface where a human decision is required and stop there. Must handle tool errors gracefully.",
    "bonus": "A per-step evidence trail, what the agent did, saw, and decided, that a human can audit in one screen. ---",
    "techStack": [
      "Python / PyTorch",
      "FastAPI / Flask",
      "Hugging Face / Transformers",
      "React / Next.js",
      "ONNX / TFLite"
    ],
    "evaluation": [
      "Problem Understanding & Gap Framing (25%)",
      "Working Software Prototype & User Experience (35%)",
      "Technical Architecture, Code Quality & Robustness (25%)",
      "Real-world Feasibility, Constraints & Bonus Scope (15%)"
    ]
  },
  {
    "id": "GA-03",
    "title": "Memory That Respects the Person",
    "track": "AI & Machine Learning",
    "category": "Software",
    "difficulty": "Flagship",
    "summary": "A genuinely useful assistant must build on what it has seen from this user across time: their projects, preferences, prior answers. The frontier tension is to persist and personalise without leaking, without mixing one person into another, and without inventing \"memories\" that were never said. Today's tools either forget everything (stateless, generic) or hold data sloppily (privacy risk, cross-talk).",
    "context": "Persistent, privacy-respecting, non-confabulating memory is a real current frontier, and it is generic: every domain wants a copilot that actually knows you.",
    "expectedSolution": "An assistant with long-term memory across sessions. It must recall relevant past context to personalise output, never fabricate a remembered fact the user did not state, keep each user's memory isolated, and make what it remembers visible, editable, and erasable by the user. The deliverable is a chat application with a memory panel: the user can see every stored memory, label it as remembered or session-only, edit it, and delete it, and the assistant's answers cite which memory shaped them.",
    "deliverables": [
      "End-to-end working software solution for Memory That Respects the Person",
      "Core engine addressing key constraints: Must distinguish \"remembered fact\" from \"this session's input\" and label it. Must let the ...",
      "Intuitive responsive interface built for real-world end users with zero-friction UX",
      "Bonus capability: A memory-confidence view: the assistant shows how sure it is that something is true about ..."
    ],
    "constraints": "Must distinguish \"remembered fact\" from \"this session's input\" and label it. Must let the user see and delete memories. Must not cross-contaminate between users. Must justify why a memory was retrieved.",
    "bonus": "A memory-confidence view: the assistant shows how sure it is that something is true about you and lets you correct it, so memory improves with use. ---",
    "techStack": [
      "Python / PyTorch",
      "FastAPI / Flask",
      "Hugging Face / Transformers",
      "React / Next.js",
      "ONNX / TFLite"
    ],
    "evaluation": [
      "Problem Understanding & Gap Framing (25%)",
      "Working Software Prototype & User Experience (35%)",
      "Technical Architecture, Code Quality & Robustness (25%)",
      "Real-world Feasibility, Constraints & Bonus Scope (15%)"
    ]
  },
  {
    "id": "CY-01",
    "title": "The Victim's First Line of Defence",
    "track": "Cyber Security",
    "category": "Software",
    "difficulty": "Advanced",
    "summary": "India's most common financial frauds are fast, social, and real-time: OTP theft, vishing (a call from \"your bank\"), phishing links, and fake \"digital arrest\" or police calls that pressure a panicked victim into acting in seconds. When the 1930 national cybercrime helpline is reached, it is usually a report after the money has already moved.",
    "context": "The gap is the moment before the fraud: real-time guidance in the middle of the attack, when the victim is being pressured and cannot think clearly. Fraud-response exists; fraud-prevention-for-the-victim does not.",
    "expectedSolution": "A low-friction \"is this a scam?\" assistant. The user pastes or speaks the message, call, or link mid-conversation and gets an instant, honest risk verdict with the specific red flags and what to do now, including \"hang up, this is a scam\" for pressure tactics. Deliver it as a web app and a mobile-friendly page that works from a copied message or a screenshot. The verdict engine can run on a lightweight rules-and-signal classifier backed by an optional LLM, with a clear verdict, confidence, and a do-this-now list.",
    "deliverables": [
      "End-to-end working software solution for The Victim's First Line of Defence",
      "Core engine addressing key constraints: Verdicts in seconds. Must work on a basic phone. Must never give false reassurance; \"I don...",
      "Intuitive responsive interface built for real-world end users with zero-friction UX",
      "Bonus capability: One-tap escalation from \"this is a scam\" straight to the helpline, block, and report flow,..."
    ],
    "constraints": "Verdicts in seconds. Must work on a basic phone. Must never give false reassurance; \"I don't know\" is a valid answer. Must hold up under the exact social-engineering scripts scammers use. Must be usable by the elderly and least-tech-savvy, who are the primary targets.",
    "bonus": "One-tap escalation from \"this is a scam\" straight to the helpline, block, and report flow, so the victim does not have to search for next steps. ---",
    "techStack": [
      "Python / Go",
      "Node.js / Express",
      "React / Tailwind CSS",
      "Burp Suite / OWASP ZAP",
      "Cryptography / WebAuthn"
    ],
    "evaluation": [
      "Problem Understanding & Gap Framing (25%)",
      "Working Software Prototype & User Experience (35%)",
      "Technical Architecture, Code Quality & Robustness (25%)",
      "Real-world Feasibility, Constraints & Bonus Scope (15%)"
    ]
  },
  {
    "id": "CY-02",
    "title": "The Link You're About to Tap",
    "track": "Cyber Security",
    "category": "Software",
    "difficulty": "Advanced",
    "summary": "Most people click a link, enter credentials, or approve a UPI payment because the page looked right. The fraud is long over by the time it is noticed: a convincing fake login, a cloned website, or a re-directed payment. Individuals and small staff have no tool that judges a link or app's legitimacy at the moment of clicking, and email and app links bypass judgement every day.",
    "context": "Link and visually-cloned (VFN) fraud is a documented, common, hard-to-spot attack. A lightweight legitimacy layer for the click-moment is an evident gap between antivirus, which mostly scans files, and \"know the URL\", which nobody does.",
    "expectedSolution": "A paste-or-share legitimacy checker. The user submits any link, or a photo of a login or payment page. The tool checks domain age and reputation, lookalike spelling, redirect chains, and certificate anomalies, and returns a fast, plain-language risk verdict with the strongest single reason. Deliver it as a web app, a browser-extension-friendly single page, and optionally a share-target so a user can send a suspicious link straight from any app.",
    "deliverables": [
      "End-to-end working software solution for The Link You're About to Tap",
      "Core engine addressing key constraints: Fast, seconds. Works from a screenshot or message, not just a URL. Must explain why in sim...",
      "Intuitive responsive interface built for real-world end users with zero-friction UX",
      "Bonus capability: A learned registry of \"this exact scam pattern was flagged before\", so repeating fraud sha..."
    ],
    "constraints": "Fast, seconds. Works from a screenshot or message, not just a URL. Must explain why in simple terms. Must handle legitimate-but-new domains honestly. Must not require the user to understand TLS or domains.",
    "bonus": "A learned registry of \"this exact scam pattern was flagged before\", so repeating fraud shapes are caught instantly. ---",
    "techStack": [
      "Python / Go",
      "Node.js / Express",
      "React / Tailwind CSS",
      "Burp Suite / OWASP ZAP",
      "Cryptography / WebAuthn"
    ],
    "evaluation": [
      "Problem Understanding & Gap Framing (25%)",
      "Working Software Prototype & User Experience (35%)",
      "Technical Architecture, Code Quality & Robustness (25%)",
      "Real-world Feasibility, Constraints & Bonus Scope (15%)"
    ]
  },
  {
    "id": "CY-03",
    "title": "The Small Business Left to Fend for Itself",
    "track": "Cyber Security",
    "category": "Software",
    "difficulty": "Advanced",
    "summary": "SMEs and startups have the same exposure as large enterprises: customer data, payments, logins. But they have none of the security team, SOC, or incident response. Public CERT-In advisories exist, yet a small owner has no capacity to read them, patch, monitor, or respond when breached. The burden lands entirely on people who are not security professionals.",
    "context": "The enterprise-versus-SME security gap is real and structural. Vendors sell enterprise-grade products a small firm cannot run or afford. Build the security layer a non-expert can actually operate.",
    "expectedSolution": "A small-business security copilot. It monitors the firm's few apps, accounts, and logins, translates official advisories into \"do exactly this today\" actions, flags risky configuration (weak passwords, exposed services, failed logins), and gives a simple run-book for \"we may have been breached\", written for the owner, not a SOC analyst. Deliver it as a dashboard with a plain-language action list, an advisory feed scraper with severity mapping, and a breach checklist.",
    "deliverables": [
      "End-to-end working software solution for The Small Business Left to Fend for Itself",
      "Core engine addressing key constraints: Setup and daily use must be feasible for a non-security owner. Must translate technical ri...",
      "Intuitive responsive interface built for real-world end users with zero-friction UX",
      "Bonus capability: A shareable \"breach first-responder\" checklist the owner can hand to anyone in plain langu..."
    ],
    "constraints": "Setup and daily use must be feasible for a non-security owner. Must translate technical risk into one clear next action. Must not assume a security team or budget. Must prioritise the handful of things that matter over hundreds of possible alerts.",
    "bonus": "A shareable \"breach first-responder\" checklist the owner can hand to anyone in plain language, so even a panicked first-day employee knows what to protect. ---",
    "techStack": [
      "Python / Go",
      "Node.js / Express",
      "React / Tailwind CSS",
      "Burp Suite / OWASP ZAP",
      "Cryptography / WebAuthn"
    ],
    "evaluation": [
      "Problem Understanding & Gap Framing (25%)",
      "Working Software Prototype & User Experience (35%)",
      "Technical Architecture, Code Quality & Robustness (25%)",
      "Real-world Feasibility, Constraints & Bonus Scope (15%)"
    ]
  },
  {
    "id": "CY-04",
    "title": "Your Identity, Spread Thin",
    "track": "Cyber Security",
    "category": "Software",
    "difficulty": "Advanced",
    "summary": "One personal identifier (phone number, Aadhaar, email) is reused across dozens of services. A breach of one leaks the key to many. When one provider is compromised, the victim has no way to know, and re-using the same password or OTP-anchored identity lets a single breach cascade. Institutions scramble after breaches; the person has no after-the-fact visibility.",
    "context": "The \"one breach leaks my key everywhere\" gap is visible to anyone who has lived through a large breach announcement. There is password-manager software, but no everyday tool that tells the affected person what a given breach means for them, today.",
    "expectedSolution": "A personal exposure surface. The person registers the accounts they care about, and the tool tracks known breaches for those providers, shows which of their same-password accounts are now at risk, and drives them to change the right things in plain order of urgency, not a panic reset of everything. Deliver it as a web app with a breach feed, an account list with risk scores, and a guided remediation queue.",
    "deliverables": [
      "End-to-end working software solution for Your Identity, Spread Thin",
      "Core engine addressing key constraints: Must respect privacy: least data kept, local-first where sensible. Must be honest about wh...",
      "Intuitive responsive interface built for real-world end users with zero-friction UX",
      "Bonus capability: A \"give this account a different password / move it off SMS-OTP\" nudger that steadily shri..."
    ],
    "constraints": "Must respect privacy: least data kept, local-first where sensible. Must be honest about what it does and does not know. Must prioritise: change these two, not all forty. Must be usable by a non-expert.",
    "bonus": "A \"give this account a different password / move it off SMS-OTP\" nudger that steadily shrinks the blast radius over weeks, not a one-shot panic. ---",
    "techStack": [
      "Python / Go",
      "Node.js / Express",
      "React / Tailwind CSS",
      "Burp Suite / OWASP ZAP",
      "Cryptography / WebAuthn"
    ],
    "evaluation": [
      "Problem Understanding & Gap Framing (25%)",
      "Working Software Prototype & User Experience (35%)",
      "Technical Architecture, Code Quality & Robustness (25%)",
      "Real-world Feasibility, Constraints & Bonus Scope (15%)"
    ]
  },
  {
    "id": "CY-05",
    "title": "The Camera, Router and Fridge That Attack You",
    "track": "Cyber Security",
    "category": "Software",
    "difficulty": "Advanced",
    "summary": "Default-password IoT devices (cameras, routers, smart appliances) are routinely compromised into botnets and then used to attack others. A consumer's router or baby monitor can be breached with manufacturer-default credentials, and there is no everyday tool that audits their own smart-home or office devices for the glaringly fixable holes.",
    "context": "The IoT default-credential gap is documented and widespread, and the affected person has no simple way to know their devices are the weak point. Note: this is not physical security. It is a software audit and remediation layer that runs in the browser and over the network.",
    "expectedSolution": "A home or small-office device posture checker. The user lists their network devices (or the tool discovers them via a browser-based scan), and it checks for default or weak credentials, unpatched common vulnerabilities, and open admin ports, and outputs a plain \"fix these 3 things\" list with exactly how, not a jargon report. Deliver it as a web app with a checklist interface and guided steps per device.",
    "deliverables": [
      "End-to-end working software solution for The Camera, Router and Fridge That Attack You",
      "Core engine addressing key constraints: Must be usable by a non-technical owner. Must run from a simple interface, not a hardening...",
      "Intuitive responsive interface built for real-world end users with zero-friction UX",
      "Bonus capability: A guided hardening wizard that performs the simple fixes it recommends (change password, d..."
    ],
    "constraints": "Must be usable by a non-technical owner. Must run from a simple interface, not a hardening manual. Must be honest about what it cannot see (cloud-managed devices). Must prioritise fixable, high-impact items.",
    "bonus": "A guided hardening wizard that performs the simple fixes it recommends (change password, disable admin-from-WAN, update firmware) with explicit consent per action. ---",
    "techStack": [
      "Python / Go",
      "Node.js / Express",
      "React / Tailwind CSS",
      "Burp Suite / OWASP ZAP",
      "Cryptography / WebAuthn"
    ],
    "evaluation": [
      "Problem Understanding & Gap Framing (25%)",
      "Working Software Prototype & User Experience (35%)",
      "Technical Architecture, Code Quality & Robustness (25%)",
      "Real-world Feasibility, Constraints & Bonus Scope (15%)"
    ]
  },
  {
    "id": "DM-01",
    "title": "The Zone That Went Dark",
    "track": "Disaster Management",
    "category": "Software",
    "difficulty": "Advanced",
    "summary": "When floods and disasters strike, the same event that harms people also knocks out power, water, communication, and transport, so the people and local responders in the affected zone are also the ones cut off from information and coordination. National alerts exist, but the person inside the disaster has no reliable way to get or pass a short, critical, offline-tolerant message when the network is gone.",
    "context": "The gap is last-mile communication under network failure, the difference between the alert being issued and reaching a specific person in a dark zone. Build for the person inside the event, not the command centre that already has connectivity and dashboards.",
    "expectedSolution": "A store-and-forward message layer that works when infrastructure is down. A short status or report can be keyed once, buffered, and opportunistically forwarded the moment any connectivity appears (using the phone's available radios: cellular when it returns, nearby-device forwarding, or any signal), so a single \"I'm safe\", \"need help\", or \"water level rising here\" gets out and acknowledgements can return. Deliver it as a mobile app with an offline-first message composer, a send queue, and honest delivery state.",
    "deliverables": [
      "End-to-end working software solution for The Zone That Went Dark",
      "Core engine addressing key constraints: Must work with little or intermittent connectivity: design for zero-network first, gracefu...",
      "Intuitive responsive interface built for real-world end users with zero-friction UX",
      "Bonus capability: A prioritised relay: critical status messages (trapped, safe, needs-rescue) move ahead of ..."
    ],
    "constraints": "Must work with little or intermittent connectivity: design for zero-network first, graceful upgrade when a signal returns. Messages must be short and survival-critical. Must not depend on a central server that is itself down. Must be honest about delivery: show \"not yet sent\" rather than fake success.",
    "bonus": "A prioritised relay: critical status messages (trapped, safe, needs-rescue) move ahead of routine ones, and local relay nodes re-broadcast until acknowledged. ---",
    "techStack": [
      "PWA / Offline-First",
      "WebRTC / Mesh / BLE",
      "Leaflet / Mapbox GL",
      "Node.js / Go",
      "IndexedDB / SQLite"
    ],
    "evaluation": [
      "Problem Understanding & Gap Framing (25%)",
      "Working Software Prototype & User Experience (35%)",
      "Technical Architecture, Code Quality & Robustness (25%)",
      "Real-world Feasibility, Constraints & Bonus Scope (15%)"
    ]
  },
  {
    "id": "DM-02",
    "title": "The Rescue That Can't Find the Road",
    "track": "Disaster Management",
    "category": "Software",
    "difficulty": "Advanced",
    "summary": "In floods, relief historically requires reaching marooned people by whatever route exists, yet the same disaster submerges or destroys roads, bridges, and landmarks, so responders do not know what is passable, where people actually are, or which route is safe. That ground truth is lost exactly when it matters most.",
    "context": "The gap is a living, survivable ground-truth map of the affected area, built from what people and responders on the ground know in real time, surviving where official maps go stale the moment roads flood. Build for the local coordinator or responder improvising in the field, not the headquarters with pre-disaster maps.",
    "expectedSolution": "A resilient field-map layer. Responders and affected people contribute live, lightweight updates (this road is flooded or submerged, this point has people, this shelter is full) that merge into a shared picture the coordinator can act on, designed to keep working and stay honest even under partial connectivity. Deliver it as a mobile or web app with one-tap report buttons, a shared map view, and explicit labelling of reported versus verified updates.",
    "deliverables": [
      "End-to-end working software solution for The Rescue That Can't Find the Road",
      "Core engine addressing key constraints: Must be honest about confidence and freshness: a road report is a report, not an official ...",
      "Intuitive responsive interface built for real-world end users with zero-friction UX",
      "Bonus capability: A self-correcting picture: when reports contradict, the layer flags it and asks for a veri..."
    ],
    "constraints": "Must be honest about confidence and freshness: a road report is a report, not an official survey; show age and source. Must work with basic phones and patchy data. Must let the coordinator mark \"verified\" versus \"reported\". Must surface discrepancies (a route said open by one person, blocked by another) rather than hide them.",
    "bonus": "A self-correcting picture: when reports contradict, the layer flags it and asks for a verification update, so the map gets more trustworthy as more people contribute, not noisier. ---",
    "techStack": [
      "PWA / Offline-First",
      "WebRTC / Mesh / BLE",
      "Leaflet / Mapbox GL",
      "Node.js / Go",
      "IndexedDB / SQLite"
    ],
    "evaluation": [
      "Problem Understanding & Gap Framing (25%)",
      "Working Software Prototype & User Experience (35%)",
      "Technical Architecture, Code Quality & Robustness (25%)",
      "Real-world Feasibility, Constraints & Bonus Scope (15%)"
    ]
  },
  {
    "id": "FN-01",
    "title": "The Money That Vanished Mid-Transaction",
    "track": "FinTech",
    "category": "Software",
    "difficulty": "Advanced",
    "summary": "With 250B+ UPI transactions a year, a meaningful share fail after money leaves one account but before it lands in the other. The payer sees \"failed\" while their money sits in limbo for days. Providers have launched instant-refund fixes on their own POS rails (2024) precisely because this pain is real, yet the ordinary payer still has no tool that tracks and recovers a stuck payment across banks.",
    "context": "The failed and split-transaction gap is documented and recent. Build for the payer whose money vanished, not for the bank that will eventually settle it.",
    "expectedSolution": "A transaction-recovery companion. The payer pastes a failed or stuck payment (UPI reference number, SMS, or screenshot), and the tool traces the state, shows where the money actually is, and drives the right recovery path: wait, refund-claim, helpline, or complaint, with a live status until it lands. Deliver it as a web app and mobile-friendly page with a paste-or-photo intake, a state trace view, and a step-by-step recovery guide.",
    "deliverables": [
      "End-to-end working software solution for The Money That Vanished Mid-Transaction",
      "Core engine addressing key constraints: Must be honest about what it can see, since it cannot see bank internals, and guide rather...",
      "Intuitive responsive interface built for real-world end users with zero-friction UX",
      "Bonus capability: An auto-watch: once a stuck payment is logged, the tool re-checks and alerts the moment it..."
    ],
    "constraints": "Must be honest about what it can see, since it cannot see bank internals, and guide rather than guarantee. Must handle the common \"money debited but payment failed\" case precisely. Plain language. Works from a screenshot or message.",
    "bonus": "An auto-watch: once a stuck payment is logged, the tool re-checks and alerts the moment it settles or needs action. ---",
    "techStack": [
      "Node.js / Express",
      "React / React Native",
      "UPI Integration SDKs",
      "PostgreSQL / Redis",
      "WebSockets / SMS Gateway"
    ],
    "evaluation": [
      "Problem Understanding & Gap Framing (25%)",
      "Working Software Prototype & User Experience (35%)",
      "Technical Architecture, Code Quality & Robustness (25%)",
      "Real-world Feasibility, Constraints & Bonus Scope (15%)"
    ]
  },
  {
    "id": "FN-02",
    "title": "The Small Merchant's Bookkeeping Blindspot",
    "track": "FinTech",
    "category": "Software",
    "difficulty": "Advanced",
    "summary": "Small merchants take payments across UPI, cash, cards, and credit, and reconcile at the end of the day from memory and message history, if at all. The bank sees the flows; the merchant does not get a usable view of what came in, from where, and what is missing. Instant-refund and POS innovation serve the rails; the merchant's own books remain manual.",
    "context": "Payments volume is huge and digitised, but the merchant-side view of what was actually earned and where it is remains manual. That is a clear, grounded gap between the rails and the small operator.",
    "expectedSolution": "An auto-reconciliation layer for a small merchant. It imports their payment notifications (UPI SMS and collect messages, bank messages, scanned screenshots), matches them, and produces a daily \"in versus expected versus missing\" view plus the list of unresolved items, with no manual ledger entry. Deliver it as a mobile-friendly web app with message and screenshot import, intelligent matching, and a daily summary report.",
    "deliverables": [
      "End-to-end working software solution for The Small Merchant's Bookkeeping Blindspot",
      "Core engine addressing key constraints: Must accept messy inputs (screenshots and SMS), not clean API feeds. Must flag discrepanci...",
      "Intuitive responsive interface built for real-world end users with zero-friction UX",
      "Bonus capability: A weekly \"where money goes\" summary (fees, refunds, unclaimed amounts) the merchant actual..."
    ],
    "constraints": "Must accept messy inputs (screenshots and SMS), not clean API feeds. Must flag discrepancies without assuming fraud. Must be usable by a non-accountant. Must not double-count cash versus digital.",
    "bonus": "A weekly \"where money goes\" summary (fees, refunds, unclaimed amounts) the merchant actually reads. ---",
    "techStack": [
      "Node.js / Express",
      "React / React Native",
      "UPI Integration SDKs",
      "PostgreSQL / Redis",
      "WebSockets / SMS Gateway"
    ],
    "evaluation": [
      "Problem Understanding & Gap Framing (25%)",
      "Working Software Prototype & User Experience (35%)",
      "Technical Architecture, Code Quality & Robustness (25%)",
      "Real-world Feasibility, Constraints & Bonus Scope (15%)"
    ]
  },
  {
    "id": "FN-03",
    "title": "The Borrowing Door That's Still Half-Open",
    "track": "FinTech",
    "category": "Software",
    "difficulty": "Advanced",
    "summary": "UPI credit lines measurably raised access (new credit borrowers +4%, subprime +8% in high-adoption areas), yet formal credit still does not reach most small borrowers, who face opaque rejections and informal lenders. The frontier is not \"build another loan app\" but making access, terms, and the rejection itself legible and fair to the applicant.",
    "context": "The credit-access gap is documented; measured gains from UPI credit lines prove both the demand and the shortfall. Build for the borrower who is still outside the door: legibility, not lending.",
    "expectedSolution": "A credit-legibility layer for the small borrower. It explains any loan offer or rejection in plain terms: what is being offered, the actual cost, and what drove the decision. It compares informal versus formal options honestly and coaches toward the cheapest legitimate path, never a hard-sell. Deliver it as a web app where a user pastes a loan offer or rejection letter and gets a plain-language breakdown, a cost comparison, and a step-by-step improvement plan.",
    "deliverables": [
      "End-to-end working software solution for The Borrowing Door That's Still Half-Open",
      "Core engine addressing key constraints: Must never push a product. Must be honest about the cost of credit, not just the EMI. Must...",
      "Intuitive responsive interface built for real-world end users with zero-friction UX",
      "Bonus capability: A \"what would help your application\" list based on documented credit factors, so the borro..."
    ],
    "constraints": "Must never push a product. Must be honest about the cost of credit, not just the EMI. Must handle applicants with thin or irregular records fairly. Plain language in the borrower's language.",
    "bonus": "A \"what would help your application\" list based on documented credit factors, so the borrower knows exactly what to improve. ---",
    "techStack": [
      "Node.js / Express",
      "React / React Native",
      "UPI Integration SDKs",
      "PostgreSQL / Redis",
      "WebSockets / SMS Gateway"
    ],
    "evaluation": [
      "Problem Understanding & Gap Framing (25%)",
      "Working Software Prototype & User Experience (35%)",
      "Technical Architecture, Code Quality & Robustness (25%)",
      "Real-world Feasibility, Constraints & Bonus Scope (15%)"
    ]
  },
  {
    "id": "FN-04",
    "title": "The Dispute Black Box",
    "track": "FinTech",
    "category": "Software",
    "difficulty": "Advanced",
    "summary": "Payment disputes are real enough that NPCI committed to real-time dispute resolution covering 90% of complaints. Yet for the person who raised a complaint, the status is a black box: \"under process\" until a decision drops, with no visibility, no timeline, and no plain explanation of the outcome.",
    "context": "A documented, named operational target (90% complaint coverage) proves the volume and the gap. Build for the complainant who currently waits in the dark, not for the resolver who already has the system.",
    "expectedSolution": "A dispute-status surface for the person who raised the complaint. They log it once (reference number, amount, merchant), get a clear status timeline with the expected next step, are alerted the moment action is needed or a decision is made, and get the outcome in plain language with the next step if not satisfied. Deliver it as a web app with a complaint-ref intake, a status tracker, alerts, and a plain-language outcome explainer.",
    "deliverables": [
      "End-to-end working software solution for The Dispute Black Box",
      "Core engine addressing key constraints: Must work from the complaint reference or SMS the user already has. Must never fake progre...",
      "Intuitive responsive interface built for real-world end users with zero-friction UX",
      "Bonus capability: A \"similar dispute outcomes\" reference so the user knows what outcome to expect and what e..."
    ],
    "constraints": "Must work from the complaint reference or SMS the user already has. Must never fake progress; an honest \"awaiting bank\" beats invented stages. Must surface the \"you must act now\" moments. Plain language.",
    "bonus": "A \"similar dispute outcomes\" reference so the user knows what outcome to expect and what evidence to prepare early. ---",
    "techStack": [
      "Node.js / Express",
      "React / React Native",
      "UPI Integration SDKs",
      "PostgreSQL / Redis",
      "WebSockets / SMS Gateway"
    ],
    "evaluation": [
      "Problem Understanding & Gap Framing (25%)",
      "Working Software Prototype & User Experience (35%)",
      "Technical Architecture, Code Quality & Robustness (25%)",
      "Real-world Feasibility, Constraints & Bonus Scope (15%)"
    ]
  },
  {
    "id": "FN-05",
    "title": "The Digital Payment That Never Reaches the Feature Phone",
    "track": "FinTech",
    "category": "Software",
    "difficulty": "Advanced",
    "summary": "Voice and feature-phone payment options (UPI 123PAY, conversational payments) exist specifically because smartphone-first payments exclude a large share of users. Yet adoption is uneven, and the person with a basic phone still transacts through agents, cash, and trust in others. The rail exists; the daily-use path for the excluded user does not.",
    "context": "An officially acknowledged inclusion gap. The infrastructure was built because the excluded user existed, so the task is to build the accessible daily interface, not another smartphone app.",
    "expectedSolution": "A payments companion for feature-phone and low-literacy users. It provides send and receive money, balance checks, and bill payment through a simple voice, IVR, or SMS-based flow that works without a smartphone or strong literacy, with confirm-before-send safety. Deliver it as a backend service with SMS and IVR interfaces plus a simple companion app for registered helpers, and demonstrate the full flow with a demo number and test harness.",
    "deliverables": [
      "End-to-end working software solution for The Digital Payment That Never Reaches the Feature Phone",
      "Core engine addressing key constraints: Must work on a basic phone, no app store required. Must be safe against misdirected money:...",
      "Intuitive responsive interface built for real-world end users with zero-friction UX",
      "Bonus capability: A trusted-helper mode: a family member can monitor for suspicious transactions on the user..."
    ],
    "constraints": "Must work on a basic phone, no app store required. Must be safe against misdirected money: explicit confirmation of recipient and amount. Must be usable by a low-literacy user. Must not depend on the user reading a long screen.",
    "bonus": "A trusted-helper mode: a family member can monitor for suspicious transactions on the user's account and pause before it is too late. ---",
    "techStack": [
      "Node.js / Express",
      "React / React Native",
      "UPI Integration SDKs",
      "PostgreSQL / Redis",
      "WebSockets / SMS Gateway"
    ],
    "evaluation": [
      "Problem Understanding & Gap Framing (25%)",
      "Working Software Prototype & User Experience (35%)",
      "Technical Architecture, Code Quality & Robustness (25%)",
      "Real-world Feasibility, Constraints & Bonus Scope (15%)"
    ]
  },
  {
    "id": "HC-01",
    "title": "The Out-of-Pocket Burden Has No Surface",
    "track": "Healthcare",
    "category": "Software",
    "difficulty": "Advanced",
    "summary": "Patients pay a large share of healthcare directly out of pocket, about 42% of current health expenditure, because insurance coverage is incomplete. Insurers and hospitals run the claims system on their side; the patient has no tool that turns \"my insurance, my diagnosis, my options\" into \"what I will actually pay\". The coverage maze is a documented, current gap, not a solved problem.",
    "context": "A real, recent, quantified gap. Build for the person paying, not for the institution that already has its claims engine.",
    "expectedSolution": "A patient-facing estimate and coverage explainer. Given a procedure or drug, it shows realistically what is covered, the out-of-pocket layer, and cheaper in-network or generic alternatives. Deliver it as a mobile-first web app with a searchable procedure and drug catalogue, an insurance-profile input, a plain-language cost estimate, and an alternatives panel. It must work from public cost and coverage data plus the user's own policy details.",
    "deliverables": [
      "End-to-end working software solution for The Out-of-Pocket Burden Has No Surface",
      "Core engine addressing key constraints: Honest about uncertainty: an estimate, not a guarantee. Understandable by a non-expert. Mu...",
      "Intuitive responsive interface built for real-world end users with zero-friction UX",
      "Bonus capability: A claim-forecast trail so the patient sees likely surprises before they hit the bill. ---..."
    ],
    "constraints": "Honest about uncertainty: an estimate, not a guarantee. Understandable by a non-expert. Must handle incomplete and messy data rather than assume clean records.",
    "bonus": "A claim-forecast trail so the patient sees likely surprises before they hit the bill. ---",
    "techStack": [
      "React Native / React",
      "Node.js / Python",
      "FHIR / HL7 APIs",
      "PostgreSQL / MongoDB",
      "FastAPI / WebSockets"
    ],
    "evaluation": [
      "Problem Understanding & Gap Framing (25%)",
      "Working Software Prototype & User Experience (35%)",
      "Technical Architecture, Code Quality & Robustness (25%)",
      "Real-world Feasibility, Constraints & Bonus Scope (15%)"
    ]
  },
  {
    "id": "HC-02",
    "title": "The Rural Patient's Care Starts From Zero",
    "track": "Healthcare",
    "category": "Software",
    "difficulty": "Advanced",
    "summary": "Public healthcare serves rural areas, but quality is poor and experienced providers are reluctant to serve there. Care is fragmented and a patient's full history never travels with them; every visit restarts from nothing. The current infrastructure (EHR and workflow systems) is built around institutions with records; the rural patient has no portable record, so their story stays in their head.",
    "context": "A documented gap (rural versus urban care quality, fragmented records) that institutional products do not close. Institutions digitise their own files; nothing gives the rural patient ownership of their own narrative.",
    "expectedSolution": "A patient-held, patient-controlled health story: history, allergies, medications, and last visit outcome, presented to any provider. It must be offline-capable and require no EHR on the provider side. Deliver it as a mobile-first PWA with a simple form-based record builder, a printable and shareable summary (QR or PDF), and full patient control over what is stored and shared.",
    "deliverables": [
      "End-to-end working software solution for The Rural Patient's Care Starts From Zero",
      "Core engine addressing key constraints: Privacy-first: the patient owns and controls the data. Works where connectivity is poor. A...",
      "Intuitive responsive interface built for real-world end users with zero-friction UX",
      "Bonus capability: Medication-conflict alerts and a clean handoff when the patient changes providers or regio..."
    ],
    "constraints": "Privacy-first: the patient owns and controls the data. Works where connectivity is poor. A provider can read it in under a minute. Must work alongside the paper-file majority.",
    "bonus": "Medication-conflict alerts and a clean handoff when the patient changes providers or regions. ---",
    "techStack": [
      "React Native / React",
      "Node.js / Python",
      "FHIR / HL7 APIs",
      "PostgreSQL / MongoDB",
      "FastAPI / WebSockets"
    ],
    "evaluation": [
      "Problem Understanding & Gap Framing (25%)",
      "Working Software Prototype & User Experience (35%)",
      "Technical Architecture, Code Quality & Robustness (25%)",
      "Real-world Feasibility, Constraints & Bonus Scope (15%)"
    ]
  },
  {
    "id": "HC-03",
    "title": "Chronic Disease, Managed Daily",
    "track": "Healthcare",
    "category": "Software",
    "difficulty": "Advanced",
    "summary": "Non-communicable diseases (heart disease, diabetes, COPD, cancers) are India's leading burden of disease, and they are managed for years at home, not cured in a hospital stay. Care systems are built around episodic visits and institutional records; the person living with a chronic condition has to self-manage daily with little structured help, and care gaps there drive most of the long-term harm.",
    "context": "The leading, documented disease burden, but institutions optimise the visit, not the years between visits. That everyday self-management layer is the evident gap.",
    "expectedSolution": "A daily companion for someone managing a chronic condition: a medication and tracking routine, plain-language explanations of what each item is for, clear signals for when a reading is a red flag, and guidance on when to re-engage a provider. Deliver it as a mobile-first, offline-capable app with a dead-simple daily flow, reminders, trend charts, and an unmistakable \"seek help now\" alert.",
    "deliverables": [
      "End-to-end working software solution for Chronic Disease, Managed Daily",
      "Core engine addressing key constraints: Suited to an older user who is not tech-savvy. Dead-simple daily flow. Works offline. Must...",
      "Intuitive responsive interface built for real-world end users with zero-friction UX",
      "Bonus capability: Caregiver visibility: a family member can see adherence and worrying trends without the pa..."
    ],
    "constraints": "Suited to an older user who is not tech-savvy. Dead-simple daily flow. Works offline. Must make the \"when to seek help now\" signal unmistakable.",
    "bonus": "Caregiver visibility: a family member can see adherence and worrying trends without the patient doing anything extra. --- # AGRICULTURE (2)",
    "techStack": [
      "React Native / React",
      "Node.js / Python",
      "FHIR / HL7 APIs",
      "PostgreSQL / MongoDB",
      "FastAPI / WebSockets"
    ],
    "evaluation": [
      "Problem Understanding & Gap Framing (25%)",
      "Working Software Prototype & User Experience (35%)",
      "Technical Architecture, Code Quality & Robustness (25%)",
      "Real-world Feasibility, Constraints & Bonus Scope (15%)"
    ]
  },
  {
    "id": "AG-01",
    "title": "Sell Today or Hold?",
    "track": "Agriculture",
    "category": "Software",
    "difficulty": "Advanced",
    "summary": "Every day a farmer must decide: sell at the mandi price now, or hold. Prices collapse the wrong week, and farmers learn prices too late because of middleman and mandi asymmetry.",
    "context": "The price-discovery gap is the most-cited farmer complaint, and it is demonstrable with real e-NAM and public market data.",
    "expectedSolution": "A decision companion that combines live arrivals, festival and demand seasonality, and weather into a near-term forecast, then gives an explicit verdict per crop: sell today, hold N days, or move to mandi X, with honest confidence, including \"sell now, it won't recover\". Deliver it as a mobile-friendly web app with a morning check-in that takes under a minute: a chart plus a one-line verdict, not an interpret-me dashboard.",
    "deliverables": [
      "End-to-end working software solution for Sell Today or Hold?",
      "Core engine addressing key constraints: Checked in under a minute each morning. Chart plus one-line verdict. Must be honest about ...",
      "Intuitive responsive interface built for real-world end users with zero-friction UX",
      "Bonus capability: Post-decision validation: predicted versus actual, as a trust loop that makes the tool mor..."
    ],
    "constraints": "Checked in under a minute each morning. Chart plus one-line verdict. Must be honest about forecast confidence and clearly state when there is insufficient data to decide.",
    "bonus": "Post-decision validation: predicted versus actual, as a trust loop that makes the tool more credible over time. ---",
    "techStack": [
      "React / Flutter",
      "Python / FastAPI",
      "OpenWeather / Satellite APIs",
      "TensorFlow / PyTorch",
      "PWA / Offline-First"
    ],
    "evaluation": [
      "Problem Understanding & Gap Framing (25%)",
      "Working Software Prototype & User Experience (35%)",
      "Technical Architecture, Code Quality & Robustness (25%)",
      "Real-world Feasibility, Constraints & Bonus Scope (15%)"
    ]
  },
  {
    "id": "AG-02",
    "title": "Post-Harvest Spoilage Copilot",
    "track": "Agriculture",
    "category": "Software",
    "difficulty": "Advanced",
    "summary": "More than 30% of Indian produce rots between farm and fork because of missing cold storage, packaging, and rural transport. The right lot rots in the wrong place.",
    "context": "\"Waste less\" beats the cliched \"grow more\". Logistics, prediction, and matching work as a real software product.",
    "expectedSolution": "A lot-tracking copilot for an FPO manager planning a day's dispatches. It tracks lots by stage, location, and perishability, predicts each lot's spoilage deadline, and reroutes at-risk lots to the nearest buyer, processor, or food bank inside the window. Deliver it as a web app with a simple lot input form, a spoilage-deadline view, and a reroute suggestion list sorted by urgency.",
    "deliverables": [
      "End-to-end working software solution for Post-Harvest Spoilage Copilot",
      "Core engine addressing key constraints: Built for an FPO manager planning a day's dispatches, not state-level modelling. Must work...",
      "Intuitive responsive interface built for real-world end users with zero-friction UX",
      "Bonus capability: Prioritise by humanitarian value: food to food banks first, and show the cost of waste sav..."
    ],
    "constraints": "Built for an FPO manager planning a day's dispatches, not state-level modelling. Must work with simple data entry, no sensors required. Must be honest about estimates when data is sparse.",
    "bonus": "Prioritise by humanitarian value: food to food banks first, and show the cost of waste saved. ---",
    "techStack": [
      "React / Flutter",
      "Python / FastAPI",
      "OpenWeather / Satellite APIs",
      "TensorFlow / PyTorch",
      "PWA / Offline-First"
    ],
    "evaluation": [
      "Problem Understanding & Gap Framing (25%)",
      "Working Software Prototype & User Experience (35%)",
      "Technical Architecture, Code Quality & Robustness (25%)",
      "Real-world Feasibility, Constraints & Bonus Scope (15%)"
    ]
  },
  {
    "id": "AU-01",
    "title": "The Record-Less Small Business",
    "track": "Smart Automation",
    "category": "Software",
    "difficulty": "Advanced",
    "summary": "A large majority of Indian working people are in small unorganised businesses characterised by an absence of systematic record-keeping. Sales, payments, stock, follow-ups, and numbers live in notebooks, messages, and memory. When the one person who remembers everything is busy or absent, the business runs blind.",
    "context": "The defining, documented feature of the sector (no systematic records) is 100% software-solvable with automation, no hardware needed. Build a daily-use product for the small owner, not an ERP for a big firm.",
    "expectedSolution": "A simple automation layer that turns everyday messages and notebook lines into live records and automates the repetitive steps: reminders, follow-ups, tallying, order tracking. No complex setup. It works from what the owner already does. Deliver it as a WhatsApp-ready or mobile-first web app with a chat-style intake (paste a message or photo and it becomes a record), automatic reminders, and an end-of-day summary.",
    "deliverables": [
      "End-to-end working software solution for The Record-Less Small Business",
      "Core engine addressing key constraints: Must suit a non-technical owner. Setup in under a few minutes. Works on a basic phone or W...",
      "Intuitive responsive interface built for real-world end users with zero-friction UX",
      "Bonus capability: An automatic end-of-day summary the owner can actually read and act on. ---..."
    ],
    "constraints": "Must suit a non-technical owner. Setup in under a few minutes. Works on a basic phone or WhatsApp-level interface. Must not require an accountant or IT.",
    "bonus": "An automatic end-of-day summary the owner can actually read and act on. ---",
    "techStack": [
      "Node.js / Python",
      "React / Next.js",
      "OCR (Tesseract / Vision AI)",
      "Rule Engine / Workflows",
      "PostgreSQL / SQLite"
    ],
    "evaluation": [
      "Problem Understanding & Gap Framing (25%)",
      "Working Software Prototype & User Experience (35%)",
      "Technical Architecture, Code Quality & Robustness (25%)",
      "Real-world Feasibility, Constraints & Bonus Scope (15%)"
    ]
  },
  {
    "id": "AU-02",
    "title": "The One Rulebook, Enforced",
    "track": "Smart Automation",
    "category": "Software",
    "difficulty": "Advanced",
    "summary": "Small operations run on unwritten rules: approval chains, handovers, fixed checklists, daily reporting, enforced only by memory and habit. When someone is absent, the rule lapses: no handover, no follow-up, no record. Larger firms have workflow engines; small teams have nothing but WhatsApp and hope.",
    "context": "Process automation (n8n or Python-style) is exactly the software path here. The gap is workflow enforcement for teams too small to buy enterprise software.",
    "expectedSolution": "A lightweight workflow automator. The user defines the rule once (approval chain, deadline, checklist, handover), and then it runs itself: assigns, reminds, escalates, logs. Deliver it as a web app with a rule-builder interface a non-programmer can use, phone notifications, and an audit trail of who did what and when.",
    "deliverables": [
      "End-to-end working software solution for The One Rulebook, Enforced",
      "Core engine addressing key constraints: Rules must be definable by a non-programmer. Works on phones. Must persist through staff a...",
      "Intuitive responsive interface built for real-world end users with zero-friction UX",
      "Bonus capability: A simple audit trail of who did what and when, valuable even without any compliance mandat..."
    ],
    "constraints": "Rules must be definable by a non-programmer. Works on phones. Must persist through staff absence and handovers. Must fail loudly, never silently drop a step.",
    "bonus": "A simple audit trail of who did what and when, valuable even without any compliance mandate. ---",
    "techStack": [
      "Node.js / Python",
      "React / Next.js",
      "OCR (Tesseract / Vision AI)",
      "Rule Engine / Workflows",
      "PostgreSQL / SQLite"
    ],
    "evaluation": [
      "Problem Understanding & Gap Framing (25%)",
      "Working Software Prototype & User Experience (35%)",
      "Technical Architecture, Code Quality & Robustness (25%)",
      "Real-world Feasibility, Constraints & Bonus Scope (15%)"
    ]
  },
  {
    "id": "ED-01",
    "title": "The Foundational Learning Gap",
    "track": "Smart Education",
    "category": "Software",
    "difficulty": "Advanced",
    "summary": "ASER 2019: only about 50% of rural Class-5 students can read a Class-2-level text, and only about 29% can do basic division. Enrollment is near-universal, yet children reach higher grades without foundational reading and numeracy, and no tool catches or fixes this until it is too late.",
    "context": "The most documented, quantified gap in Indian education. Foundational literacy and numeracy is even an explicit NEP 2020 target. Build for the child who is falling behind, not the school.",
    "expectedSolution": "A daily diagnostic-and-practice tool that identifies exactly where a child's foundational skill gap is (which sounds, which arithmetic steps) and gives short, game-like practice matched to that level, on whatever device is available. Deliver it as a mobile-first PWA with a quick skill diagnostic, adaptive practice levels, progress tracking, and minimal text so a weak reader can navigate it with audio cues and pictures.",
    "deliverables": [
      "End-to-end working software solution for The Foundational Learning Gap",
      "Core engine addressing key constraints: Targets a weak reader, not a motivated educator. Must be usable with little adult supervis...",
      "Intuitive responsive interface built for real-world end users with zero-friction UX",
      "Bonus capability: Privacy-safe progress that a parent or teacher can see without the child needing to perfor..."
    ],
    "constraints": "Targets a weak reader, not a motivated educator. Must be usable with little adult supervision. Works on low-end, offline devices. Very short session length for a child.",
    "bonus": "Privacy-safe progress that a parent or teacher can see without the child needing to perform for an audience. ---",
    "techStack": [
      "React / Next.js",
      "Node.js / Python",
      "Whisper / Speech APIs",
      "IndexedDB / Offline PWA",
      "Tailwind CSS"
    ],
    "evaluation": [
      "Problem Understanding & Gap Framing (25%)",
      "Working Software Prototype & User Experience (35%)",
      "Technical Architecture, Code Quality & Robustness (25%)",
      "Real-world Feasibility, Constraints & Bonus Scope (15%)"
    ]
  },
  {
    "id": "ED-02",
    "title": "The Class-5-to-Class-9 Drop",
    "track": "Smart Education",
    "category": "Software",
    "difficulty": "Advanced",
    "summary": "While over 95% of Indian children attend primary school, only about 40% go on to secondary school (Grades 9 to 12). A huge share of students fall out between primary and secondary, not from lack of enrollment, but from the transition itself.",
    "context": "A sharp, quantified, under-served gap. Institutions measure enrollment; nothing catches a student at the moment they are about to fall off the primary-to-secondary step.",
    "expectedSolution": "A support layer that spots students at transition risk early (attendance dips, subject struggle, economic-pressure signals) and routes help: reminders, peer or mentor connection, or a lightweight re-engagement path, before they drop. Deliver it as a web app for teachers with a simple risk dashboard, weekly lists of students who need attention, and ready-made outreach templates (SMS or WhatsApp style) that a school can send.",
    "deliverables": [
      "End-to-end working software solution for The Class-5-to-Class-9 Drop",
      "Core engine addressing key constraints: Must not stigmatise or label the child. Works from sparse data a school already has. The h...",
      "Intuitive responsive interface built for real-world end users with zero-friction UX",
      "Bonus capability: A decision-supporter for teachers showing which students most need face-time this week. --..."
    ],
    "constraints": "Must not stigmatise or label the child. Works from sparse data a school already has. The help must be actionable, not a report that no one reads.",
    "bonus": "A decision-supporter for teachers showing which students most need face-time this week. ---",
    "techStack": [
      "React / Next.js",
      "Node.js / Python",
      "Whisper / Speech APIs",
      "IndexedDB / Offline PWA",
      "Tailwind CSS"
    ],
    "evaluation": [
      "Problem Understanding & Gap Framing (25%)",
      "Working Software Prototype & User Experience (35%)",
      "Technical Architecture, Code Quality & Robustness (25%)",
      "Real-world Feasibility, Constraints & Bonus Scope (15%)"
    ]
  },
  {
    "id": "ED-03",
    "title": "The 25% Absent Teacher",
    "track": "Smart Education",
    "category": "Software",
    "difficulty": "Advanced",
    "summary": "Studies indicate nearly 25% of teachers may be absent on any given day. Students still show up to a class no one is effectively teaching, a daily, structural gap in instruction quality.",
    "context": "A documented structural problem. Institutional systems do not fill the classroom; they just record the absence. Build for the student who is physically present but instructionally alone.",
    "expectedSolution": "A coverage network. When a teacher is absent, route the day's lesson to whoever is available (another teacher, a trained local tutor, a peer-led module) with a ready-made, device-friendly lesson plan so instruction does not collapse. Deliver it as a web app with a one-tap \"teacher absent\" flow, a local coverage pool, and prepackaged lesson plans that render on low-end phones.",
    "deliverables": [
      "End-to-end working software solution for The 25% Absent Teacher",
      "Core engine addressing key constraints: Must work in low-connectivity schools. The stand-in should not need deep subject expertise...",
      "Intuitive responsive interface built for real-world end users with zero-friction UX",
      "Bonus capability: A community resource pool per locality (nearby colleges, retired teachers, senior students..."
    ],
    "constraints": "Must work in low-connectivity schools. The stand-in should not need deep subject expertise. Must be low-embarrassment for the absent colleague: support, not surveillance.",
    "bonus": "A community resource pool per locality (nearby colleges, retired teachers, senior students) that can be tapped instantly. ---",
    "techStack": [
      "React / Next.js",
      "Node.js / Python",
      "Whisper / Speech APIs",
      "IndexedDB / Offline PWA",
      "Tailwind CSS"
    ],
    "evaluation": [
      "Problem Understanding & Gap Framing (25%)",
      "Working Software Prototype & User Experience (35%)",
      "Technical Architecture, Code Quality & Robustness (25%)",
      "Real-world Feasibility, Constraints & Bonus Scope (15%)"
    ]
  },
  {
    "id": "ED-04",
    "title": "The Language of Instruction Wall",
    "track": "Smart Education",
    "category": "Software",
    "difficulty": "Advanced",
    "summary": "NEP 2020 recommends mother-tongue or local-language instruction through Class 5 and beyond, but practice lags. Many students are taught in a language they do not fully understand, so the actual lesson does not land.",
    "context": "A documented policy-versus-practice gap. Institutions publish in the medium of instruction; nothing bridges the gap for the child whose home language differs from the classroom language.",
    "expectedSolution": "A bridge for the learner: concepts and instructions explained in the student's home language, side by side with the classroom medium, so the lesson is understood even if the formal medium is not yet mastered. Deliver it as an offline-capable PWA with a bilingual lesson view (home language alongside classroom language), audio support, and accurate, human-checked content for a pilot set of lessons.",
    "deliverables": [
      "End-to-end working software solution for The Language of Instruction Wall",
      "Core engine addressing key constraints: Must handle a mismatch between home and school language. Must not blur phonics or script l...",
      "Intuitive responsive interface built for real-world end users with zero-friction UX",
      "Bonus capability: A gradual ramp that keeps building the classroom language while the child stays on top of ..."
    ],
    "constraints": "Must handle a mismatch between home and school language. Must not blur phonics or script learning. Works on low-cost devices. Content must be accurate, not machine-sloppy.",
    "bonus": "A gradual ramp that keeps building the classroom language while the child stays on top of the subject. ---",
    "techStack": [
      "React / Next.js",
      "Node.js / Python",
      "Whisper / Speech APIs",
      "IndexedDB / Offline PWA",
      "Tailwind CSS"
    ],
    "evaluation": [
      "Problem Understanding & Gap Framing (25%)",
      "Working Software Prototype & User Experience (35%)",
      "Technical Architecture, Code Quality & Robustness (25%)",
      "Real-world Feasibility, Constraints & Bonus Scope (15%)"
    ]
  },
  {
    "id": "ED-05",
    "title": "Enrollment vs. Actually Learning",
    "track": "Smart Education",
    "category": "Software",
    "difficulty": "Advanced",
    "summary": "India has near-universal enrollment but poor outcomes. Schools are built (a \"visible\" political win) while the quality of teaching and learning is under-invested. The system tracks who shows up; it does not track whether anyone is actually learning.",
    "context": "The core systemic gap: success is measured by enrollment and infrastructure, not by learning. Build the layer that finally surfaces learning, honestly.",
    "expectedSolution": "A learning-progress surface: lightweight, frequent checks of true comprehension (not rote recall) that give a real picture of whether a class is learning, for the teacher in the room and the responsible authority, and recommend the smallest useful intervention. Deliver it as a web app with quick comprehension checks, per-class progress views, and an intervention suggestion engine, all designed to add minimal extra teacher effort.",
    "deliverables": [
      "End-to-end working software solution for Enrollment vs. Actually Learning",
      "Core engine addressing key constraints: Must measure learning, not gaming the metric. Minimal extra teacher effort. Results usable...",
      "Intuitive responsive interface built for real-world end users with zero-friction UX",
      "Bonus capability: An honest \"learning health\" view per class or school that shows improvement over time rath..."
    ],
    "constraints": "Must measure learning, not gaming the metric. Minimal extra teacher effort. Results usable by a single classroom teacher. Must survive low connectivity.",
    "bonus": "An honest \"learning health\" view per class or school that shows improvement over time rather than a fixed score. ---",
    "techStack": [
      "React / Next.js",
      "Node.js / Python",
      "Whisper / Speech APIs",
      "IndexedDB / Offline PWA",
      "Tailwind CSS"
    ],
    "evaluation": [
      "Problem Understanding & Gap Framing (25%)",
      "Working Software Prototype & User Experience (35%)",
      "Technical Architecture, Code Quality & Robustness (25%)",
      "Real-world Feasibility, Constraints & Bonus Scope (15%)"
    ]
  },
  {
    "id": "SU-01",
    "title": "The Water Gap at the Tap",
    "track": "Sustainability",
    "category": "Software",
    "difficulty": "Advanced",
    "summary": "India has about 4% of the world's fresh water for over 1.4 billion people and is the world's largest groundwater user. Cities face recurring water crises (documented: Chennai 2019, Latur borewell crisis), yet the household and apartment building, the actual daily consumer, has no working picture of its own usage, loss, or risk before the crisis arrives. The utility's data never reaches the tap.",
    "context": "The gap is household and building-side water intelligence. Between the utility's supply data and the person paying the bill, there is no layer that turns daily usage into \"where is it going, where is it leaking, what happens if supply drops\".",
    "expectedSolution": "A building or household water layer. It tracks input versus usage versus loss (from meters, bills, self-reports), flags leaks and over-consumption patterns, and models the building's vulnerability to a supply cut, with plain, actionable conservation steps ranked by impact. Deliver it as a mobile-first web app with a simple data entry flow (bill amount, meter reads, tank levels), leak and pattern flags, and a one-next-action output rather than a dashboard.",
    "deliverables": [
      "End-to-end working software solution for The Water Gap at the Tap",
      "Core engine addressing key constraints: Must work with the data a household actually has (bills, self-reads, simple inputs), no as...",
      "Intuitive responsive interface built for real-world end users with zero-friction UX",
      "Bonus capability: A \"dry-run\" crisis simulator: \"if supply drops 40% tomorrow, what runs out first, and what..."
    ],
    "constraints": "Must work with the data a household actually has (bills, self-reads, simple inputs), no assumption of smart meters. Must be honest about estimation versus measurement. Must not require a plumber or engineer. Output must be one clear next action.",
    "bonus": "A \"dry-run\" crisis simulator: \"if supply drops 40% tomorrow, what runs out first, and what should you do today?\", turning abstract scarcity into a personal plan. ---",
    "techStack": [
      "React / Next.js",
      "Python / FastAPI",
      "GIS / Leaflet Maps",
      "TimescaleDB / Chart.js",
      "PWA / IndexedDB"
    ],
    "evaluation": [
      "Problem Understanding & Gap Framing (25%)",
      "Working Software Prototype & User Experience (35%)",
      "Technical Architecture, Code Quality & Robustness (25%)",
      "Real-world Feasibility, Constraints & Bonus Scope (15%)"
    ]
  },
  {
    "id": "SU-02",
    "title": "The E-Waste That Nobody Owns",
    "track": "Sustainability",
    "category": "Software",
    "difficulty": "Advanced",
    "summary": "E-waste is generated largely by institutions (about 75% from government, public, and private sector; households a small share) and is informally handled: picked by informal collectors, often burned or dumped, leaking toxins into air, soil, and groundwater. The household with a dead phone in a drawer and the small office with old monitors are not connected to any responsible recovery path.",
    "context": "The gap is the ordinary generator's path to responsible disposal. Not another take-back policy, but a working, trustable, daily layer that matches the item at hand (the drawer-phone, the old laptop) with a genuine recovery route and shows the person what actually happens to it.",
    "expectedSolution": "A \"what do I do with this dead device\" layer. The user identifies the item in a few taps or with a photo, gets the nearest honest recovery, refurbishment, or drop-off path, tracks the item's verified outcome (reused, refurbished, recycled, or dumped), and sees the impact, with no effort beyond dropping it off. Deliver it as a mobile-first web app with photo-based identification, a provider registry, and outcome tracking with a verifiable receipt.",
    "deliverables": [
      "End-to-end working software solution for The E-Waste That Nobody Owns",
      "Core engine addressing key constraints: Must be honest about the final outcome, no greenwashing: if it goes to informal scrap, say...",
      "Intuitive responsive interface built for real-world end users with zero-friction UX",
      "Bonus capability: A \"before you toss it\" guide: data-erasure steps and reuse options for the specific device..."
    ],
    "constraints": "Must be honest about the final outcome, no greenwashing: if it goes to informal scrap, say so and offer the better route. Must be trustable end-to-end (verifiable receipt of outcome). Must work from a phone with photos. Must not require the user to become a recycling expert.",
    "bonus": "A \"before you toss it\" guide: data-erasure steps and reuse options for the specific device, so a working-but-abandoned device is actually recycled or donated instead of burned. ---",
    "techStack": [
      "React / Next.js",
      "Python / FastAPI",
      "GIS / Leaflet Maps",
      "TimescaleDB / Chart.js",
      "PWA / IndexedDB"
    ],
    "evaluation": [
      "Problem Understanding & Gap Framing (25%)",
      "Working Software Prototype & User Experience (35%)",
      "Technical Architecture, Code Quality & Robustness (25%)",
      "Real-world Feasibility, Constraints & Bonus Scope (15%)"
    ]
  },
  {
    "id": "SU-03",
    "title": "The Wastewater Nobody Reclaims",
    "track": "Sustainability",
    "category": "Software",
    "difficulty": "Advanced",
    "summary": "Roughly 80% of domestic wastewater in India is drained untreated into water bodies, a documented water-resource failure while the same communities face scarcity and paid tanker water. Treatment exists at scale nowhere near the household or building level, and the building that could reclaim its own greywater has no practical, software-assisted path to do it.",
    "context": "The gap is building-level water reclamation as a usable product. Not a treatment plant, but a software-assisted route (what to capture, how to use it safely, what it saves) that a housing society or building manager can actually run.",
    "expectedSolution": "A building greywater-reclamation planner. It models the building's water flows (bathing, kitchen, balcony), designs a safe, low-cost reuse plan (gardening, flushing, cooling), estimates litres and money saved per month, and guides step-by-step adoption with honest safety limits (what must never be reused). Deliver it as a mobile-first web app with a simple building-data intake (flats, people, rough usage), a reuse-plan generator, and a savings estimate.",
    "deliverables": [
      "End-to-end working software solution for The Wastewater Nobody Reclaims",
      "Core engine addressing key constraints: Must be safety-first: clear on what cannot be reused and why. Must work from simple buildi...",
      "Intuitive responsive interface built for real-world end users with zero-friction UX",
      "Bonus capability: A shared \"reclaimed water\" dashboard for the society: litres reclaimed, saved, and used, s..."
    ],
    "constraints": "Must be safety-first: clear on what cannot be reused and why. Must work from simple building data. Must be honest about costs and limits. Must be usable by a housing-society manager, not an engineer.",
    "bonus": "A shared \"reclaimed water\" dashboard for the society: litres reclaimed, saved, and used, so the outcome is visible and communities adopt it socially, not just technically. ---",
    "techStack": [
      "React / Next.js",
      "Python / FastAPI",
      "GIS / Leaflet Maps",
      "TimescaleDB / Chart.js",
      "PWA / IndexedDB"
    ],
    "evaluation": [
      "Problem Understanding & Gap Framing (25%)",
      "Working Software Prototype & User Experience (35%)",
      "Technical Architecture, Code Quality & Robustness (25%)",
      "Real-world Feasibility, Constraints & Bonus Scope (15%)"
    ]
  },
  {
    "id": "PS-SUS-01",
    "title": "Smart Waste Monitoring and Collection System",
    "track": "Sustainability",
    "category": "Hardware",
    "difficulty": "Grand Challenge",
    "summary": "Build an IoT-enabled smart dustbin that monitors waste levels and identifies type of waste being disposed of. System should provide real-time notifications when bin requires collection and help optimize waste-collection routes, reducing fuel consumption and unnecessary transportation.",
    "context": "Municipal waste collection is often scheduled on fixed routes, so partially-empty bins get serviced while overflowing bins wait. Real-time fill-level and waste-type data enables dynamic routing and timely collection.",
    "deliverables": [
      "IoT dustbin node with fill-level sensing and waste-type identification",
      "Real-time fill-level notifications when collection is required",
      "Route optimization module for collection vehicles",
      "Live monitoring dashboard for waste operators"
    ],
    "techStack": [
      "ESP32 / Arduino",
      "Ultrasonic / IR sensors",
      "LoRa / Wi-Fi / MQTT",
      "Dashboard (React)"
    ],
    "evaluation": [
      "Working hardware prototype (40%)",
      "Sensor accuracy & real-time response (25%)",
      "Innovation & design (20%)",
      "Presentation & real-world viability (15%)"
    ]
  },
  {
    "id": "PS-SUS-02",
    "title": "Sustainable Hardware Lifecycle Monitor",
    "track": "Sustainability",
    "category": "Hardware",
    "difficulty": "Advanced",
    "summary": "Create hardware system that monitors health, energy consumption, and usage of electronic devices to extend their operational lifetime. Solution should identify components that can be repaired or replaced instead of discarding entire device, thereby reducing e-waste and promoting circular economy.",
    "context": "E-waste grows when entire devices are discarded for a single failing part. Continuous health and energy telemetry lets users repair or replace only the degraded component.",
    "deliverables": [
      "Device health and energy-consumption monitoring hardware",
      "Component-level fault and degradation identification",
      "Repair-vs-replace recommendation engine",
      "Lifecycle analytics dashboard"
    ],
    "techStack": [
      "ESP32 / Raspberry Pi",
      "Current / voltage sensors",
      "Temperature sensors",
      "Analytics dashboard"
    ],
    "evaluation": [
      "Working hardware prototype (40%)",
      "Sensor accuracy & real-time response (25%)",
      "Innovation & design (20%)",
      "Presentation & real-world viability (15%)"
    ]
  },
  {
    "id": "PS-SUS-04",
    "title": "Waste-Heat Energy Recovery System",
    "track": "Sustainability",
    "category": "Hardware",
    "difficulty": "Advanced",
    "summary": "Design prototype that captures waste heat from sources such as electronic equipment, exhaust systems, or industrial surfaces and converts it into usable electrical energy using thermoelectric generators.",
    "context": "Large amounts of generated heat are vented away unused. Thermoelectric generators can convert a portion of that waste heat back into usable electrical energy.",
    "deliverables": [
      "Thermoelectric generator (TEG) prototype with heat capture",
      "Temperature differential measurement and conversion circuit",
      "Energy storage and output regulation",
      "Efficiency measurement and demo rig"
    ],
    "techStack": [
      "TEG / Peltier modules",
      "Boost converter",
      "Heat sink & thermal interface",
      "Power monitoring"
    ],
    "evaluation": [
      "Working hardware prototype (40%)",
      "Sensor accuracy & real-time response (25%)",
      "Innovation & design (20%)",
      "Presentation & real-world viability (15%)"
    ]
  },
  {
    "id": "PS-AUT-01",
    "title": "Smart Safety & Emergency Response System",
    "track": "Smart Automation",
    "category": "Hardware",
    "difficulty": "Grand Challenge",
    "summary": "Create intelligent hardware system capable of detecting hazards such as fire, gas leakage, abnormal temperature, or unauthorized access. Once hazard is detected, system should automatically activate appropriate responses such as shutting down equipment, triggering alarms, activating ventilation, or sending emergency notifications.",
    "context": "Homes, labs, and industrial sites need a single system that detects multiple hazard classes and reacts automatically \u2014 shutting equipment, venting, alarming, and notifying \u2014 without waiting for human response.",
    "deliverables": [
      "Multi-sensor hazard detection (fire, gas, temperature, intrusion)",
      "Automatic response actuation (shutdown, alarm, ventilation)",
      "Emergency notification dispatch (SMS / app / buzzer)",
      "Hazard status dashboard"
    ],
    "techStack": [
      "ESP32 / Arduino",
      "Flame / MQ2 gas / DHT sensors",
      "Relays & buzzer",
      "Notification service"
    ],
    "evaluation": [
      "Working hardware prototype (40%)",
      "Sensor accuracy & real-time response (25%)",
      "Innovation & design (20%)",
      "Presentation & real-world viability (15%)"
    ]
  },
  {
    "id": "PS-AUT-02",
    "title": "Autonomous Waste Sorting System",
    "track": "Smart Automation",
    "category": "Hardware",
    "difficulty": "Grand Challenge",
    "summary": "Develop smart hardware system that automatically detects and separates different types of waste such as plastic, metal, paper, and electronic components. System should use sensors and embedded intelligence to improve sorting accuracy and reduce manual effort.",
    "context": "Manual waste segregation is slow, inconsistent, and unsafe. Sensor-driven classification with automated separation improves recycling rates and reduces human effort.",
    "deliverables": [
      "Waste-type detection (plastic, metal, paper, e-waste)",
      "Automated separation mechanism (conveyor / actuators)",
      "Embedded classification intelligence",
      "Sorting accuracy reporting"
    ],
    "techStack": [
      "ESP32 / Raspberry Pi",
      "Inductive / capacitive sensors",
      "Camera (optional)",
      "Servo / motor actuators"
    ],
    "evaluation": [
      "Working hardware prototype (40%)",
      "Sensor accuracy & real-time response (25%)",
      "Innovation & design (20%)",
      "Presentation & real-world viability (15%)"
    ]
  },
  {
    "id": "PS-AUT-03",
    "title": "Autonomous Robotic Pick-and-Place System",
    "track": "Smart Automation",
    "category": "Hardware",
    "difficulty": "Grand Challenge",
    "summary": "Develop vision/sensor-based robotic system capable of identifying objects, determining their position, picking them up, and placing them at predefined locations without human intervention.",
    "context": "Assembly and packaging lines depend on repetitive pick-and-place operations. A vision-guided robotic arm that locates and relocates objects autonomously reduces manual labor and errors.",
    "deliverables": [
      "Robotic arm / gantry with gripper",
      "Vision or sensor-based object detection and localization",
      "Autonomous pick-up and place-at-target logic",
      "Demo workspace with predefined target zones"
    ],
    "techStack": [
      "Robotic arm / servo kit",
      "Camera (OpenCV) or ultrasonic/IR",
      "ESP32 / Raspberry Pi",
      "Control firmware"
    ],
    "evaluation": [
      "Working hardware prototype (40%)",
      "Sensor accuracy & real-time response (25%)",
      "Innovation & design (20%)",
      "Presentation & real-world viability (15%)"
    ]
  },
  {
    "id": "PS-AUT-04",
    "title": "Adaptive Exoskeleton Control System",
    "track": "Smart Automation",
    "category": "Hardware",
    "difficulty": "Grand Challenge",
    "summary": "Develop hardware prototype that detects human movement and automatically adjusts motor assistance according to user's movement and applied force. System should provide assistance while maintaining safe limits.",
    "context": "Assistive exoskeletons must match human intent in real time \u2014 boosting when the user pushes, resisting beyond safe limits \u2014 to aid mobility without causing harm.",
    "deliverables": [
      "Movement and force sensing (IMU / load cells)",
      "Motor assistance control tuned to user input",
      "Safety limit enforcement",
      "Prototype demo with adjustable assistance levels"
    ],
    "techStack": [
      "ESP32 / STM32",
      "IMU (MPU6050)",
      "Load cells / force sensors",
      "DC / servo motors + driver"
    ],
    "evaluation": [
      "Working hardware prototype (40%)",
      "Sensor accuracy & real-time response (25%)",
      "Innovation & design (20%)",
      "Presentation & real-world viability (15%)"
    ]
  },
  {
    "id": "PS-MOB-01",
    "title": "Autonomous Emergency Vehicle Priority System",
    "track": "Smart Mobility",
    "category": "Hardware",
    "difficulty": "Grand Challenge",
    "summary": "Develop smart traffic-control hardware system that detects approaching emergency vehicles such as ambulances and automatically creates priority route by coordinating traffic signals.",
    "context": "Ambulances lose critical minutes waiting at signals. Detecting emergency vehicles and pre-empting signal phases along their path clears a priority corridor automatically.",
    "deliverables": [
      "Emergency vehicle detection (RF / siren / camera)",
      "Traffic signal coordination logic",
      "Priority route computation",
      "Signal controller demo rig"
    ],
    "techStack": [
      "ESP32 / Arduino",
      "RF modules / microphone array",
      "Traffic light LED rig",
      "Coordination firmware"
    ],
    "evaluation": [
      "Working hardware prototype (40%)",
      "Sensor accuracy & real-time response (25%)",
      "Innovation & design (20%)",
      "Presentation & real-world viability (15%)"
    ]
  },
  {
    "id": "PS-MOB-02",
    "title": "Smart Collision Avoidance System",
    "track": "Smart Mobility",
    "category": "Hardware",
    "difficulty": "Grand Challenge",
    "summary": "Design hardware system for two-wheelers or small vehicles that detects nearby obstacles and vehicles using sensors and provides real-time warnings or automatic braking assistance to reduce collision risk.",
    "context": "Two-wheeler riders are exposed to blind-spot and rear-end collisions. Onboard sensing with real-time warnings or braking assistance reduces accident risk.",
    "deliverables": [
      "Obstacle / vehicle detection sensors (ultrasonic, IR, radar)",
      "Real-time warning alerts (buzzer / display)",
      "Optional braking-assist actuation",
      "Vehicle-mount demo rig"
    ],
    "techStack": [
      "ESP32 / Arduino",
      "Ultrasonic / IR proximity sensors",
      "Buzzer / OLED display",
      "Brake actuator (optional)"
    ],
    "evaluation": [
      "Working hardware prototype (40%)",
      "Sensor accuracy & real-time response (25%)",
      "Innovation & design (20%)",
      "Presentation & real-world viability (15%)"
    ]
  },
  {
    "id": "PS-MOB-03",
    "title": "Smart Public Transport Occupancy System",
    "track": "Smart Mobility",
    "category": "Hardware",
    "difficulty": "Advanced",
    "summary": "Build hardware system that detects passenger occupancy in buses or other public transportation and provides real-time information about available capacity to passengers and transport operators.",
    "context": "Commuters board crowded buses blindly. Live occupancy data shown to waiting passengers and operators balances load and improves the travel experience.",
    "deliverables": [
      "Passenger counting / occupancy sensing",
      "Real-time capacity computation",
      "Display for passengers and operator dashboard",
      "Demo bus model rig"
    ],
    "techStack": [
      "ESP32 / Arduino",
      "IR break-beam / PIR / camera",
      "OLED / LED display",
      "Operator dashboard"
    ],
    "evaluation": [
      "Working hardware prototype (40%)",
      "Sensor accuracy & real-time response (25%)",
      "Innovation & design (20%)",
      "Presentation & real-world viability (15%)"
    ]
  },
  {
    "id": "PS-MOB-04",
    "title": "Autonomous Lane-Changing System",
    "track": "Smart Mobility",
    "category": "Hardware",
    "difficulty": "Grand Challenge",
    "summary": "Develop hardware prototype that detects surrounding vehicles, evaluates lane availability, and automatically determines safe lane-changing maneuver for miniature autonomous vehicle.",
    "context": "Lane changes are a leading cause of highway collisions. A miniature autonomous vehicle that senses neighbors and only maneuvers when safe demonstrates the core decision logic.",
    "deliverables": [
      "Surrounding-vehicle detection (ultrasonic / camera)",
      "Lane availability evaluation",
      "Safe lane-change decision and actuation",
      "Miniature vehicle demo track"
    ],
    "techStack": [
      "ESP32 / Raspberry Pi",
      "Ultrasonic / camera sensors",
      "DC motors + driver",
      "Decision firmware"
    ],
    "evaluation": [
      "Working hardware prototype (40%)",
      "Sensor accuracy & real-time response (25%)",
      "Innovation & design (20%)",
      "Presentation & real-world viability (15%)"
    ]
  },
  {
    "id": "PS-MOB-05",
    "title": "Intelligent Pedestrian Crossing System",
    "track": "Smart Mobility",
    "category": "Hardware",
    "difficulty": "Advanced",
    "summary": "Develop smart pedestrian crossing that detects pedestrians, estimates their movement, and dynamically controls traffic signals to provide safe crossing while minimizing vehicle waiting time.",
    "context": "Fixed-timing signals ignore whether pedestrians are actually present. Detecting pedestrians and their movement lets signals grant crossing only when needed, keeping traffic flowing.",
    "deliverables": [
      "Pedestrian detection (PIR / camera / pressure mat)",
      "Movement estimation logic",
      "Dynamic signal control (pedestrian-friendly timing)",
      "Signal demo rig with pedestrian simulation"
    ],
    "techStack": [
      "ESP32 / Arduino",
      "PIR / camera / force sensors",
      "Traffic light LED rig",
      "Signal timing firmware"
    ],
    "evaluation": [
      "Working hardware prototype (40%)",
      "Sensor accuracy & real-time response (25%)",
      "Innovation & design (20%)",
      "Presentation & real-world viability (15%)"
    ]
  },
  {
    "id": "PS-AGR-01",
    "title": "Autonomous Precision Irrigation System",
    "track": "Agriculture",
    "category": "Hardware",
    "difficulty": "Grand Challenge",
    "summary": "Develop hardware system that monitors soil moisture, temperature, humidity, and crop conditions and automatically delivers required amount of water to individual crop zones, minimizing water wastage while maintaining optimal soil conditions.",
    "context": "Uniform irrigation over-applies water to zones that don't need it. Zone-wise soil and climate sensing with automated valve control waters each plot precisely.",
    "deliverables": [
      "Soil moisture / temperature / humidity sensing",
      "Zone-wise automated irrigation control (valves / pumps)",
      "Optimal-condition maintenance logic",
      "Water-usage monitoring dashboard"
    ],
    "techStack": [
      "ESP32 / Arduino",
      "Soil moisture sensors",
      "Solenoid valves / pumps",
      "LoRa / Wi-Fi telemetry"
    ],
    "evaluation": [
      "Working hardware prototype (40%)",
      "Sensor accuracy & real-time response (25%)",
      "Innovation & design (20%)",
      "Presentation & real-world viability (15%)"
    ]
  },
  {
    "id": "PS-AGR-02",
    "title": "Smart Pest Detection & Targeted Control System",
    "track": "Agriculture",
    "category": "Hardware",
    "difficulty": "Grand Challenge",
    "summary": "Develop intelligent device that detects agricultural pests using cameras, optical sensors, or other methods and activates localized pest-control mechanisms only where pests are detected, reducing unnecessary pesticide usage.",
    "context": "Blanket pesticide spraying harms beneficial organisms and the environment. Detecting pests first and treating only affected zones cuts chemical use substantially.",
    "deliverables": [
      "Pest detection (camera / optical sensors)",
      "Localized pest-control actuation",
      "Detection-triggered treatment logic",
      "Field demo rig and treatment reporting"
    ],
    "techStack": [
      "ESP32 / Raspberry Pi",
      "Camera (optional)",
      "Optical / IR sensors",
      "Spray / lure actuators"
    ],
    "evaluation": [
      "Working hardware prototype (40%)",
      "Sensor accuracy & real-time response (25%)",
      "Innovation & design (20%)",
      "Presentation & real-world viability (15%)"
    ]
  },
  {
    "id": "PS-AGR-03",
    "title": "Smart Greenhouse Climate Controller",
    "track": "Agriculture",
    "category": "Hardware",
    "difficulty": "Grand Challenge",
    "summary": "Develop automated greenhouse system that monitors temperature, humidity, light, CO\u2082, and soil conditions and automatically controls ventilation, irrigation, shading, and lighting to maintain optimal growing conditions.",
    "context": "Greenhouse yields depend on holding climate variables in a tight band. Automated sensing and actuation keeps conditions optimal without constant manual intervention.",
    "deliverables": [
      "Climate sensing (temperature, humidity, light, CO\u2082, soil)",
      "Automatic control of ventilation, irrigation, shading, lighting",
      "Optimal-environment set-point logic",
      "Greenhouse monitoring dashboard"
    ],
    "techStack": [
      "ESP32 / Arduino",
      "DHT / LDR / MH-Z19 sensors",
      "Fans, pumps, servo shades",
      "Control firmware"
    ],
    "evaluation": [
      "Working hardware prototype (40%)",
      "Sensor accuracy & real-time response (25%)",
      "Innovation & design (20%)",
      "Presentation & real-world viability (15%)"
    ]
  },
  {
    "id": "PS-AGR-04",
    "title": "Automated Crop Harvesting Prototype",
    "track": "Agriculture",
    "category": "Hardware",
    "difficulty": "Grand Challenge",
    "summary": "Develop robotic harvesting system capable of identifying mature fruits or vegetables and carefully picking them while minimizing damage to plant and produce.",
    "context": "Harvest labor is seasonal, expensive, and hard to scale. A robot that identifies maturity and picks gently reduces dependence on manual labor and crop damage.",
    "deliverables": [
      "Maturity detection (camera / color sensors)",
      "Robotic picking mechanism with gentle gripper",
      "Damage-minimizing pick logic",
      "Demo rig on mock plants"
    ],
    "techStack": [
      "Robotic arm / servo kit",
      "Camera (OpenCV)",
      "Gripper with force feedback",
      "ESP32 / Raspberry Pi"
    ],
    "evaluation": [
      "Working hardware prototype (40%)",
      "Sensor accuracy & real-time response (25%)",
      "Innovation & design (20%)",
      "Presentation & real-world viability (15%)"
    ]
  },
  {
    "id": "PS-EDU-01",
    "title": "Assistive Learning Device for Visually Impaired Students",
    "track": "Smart Education",
    "category": "Hardware",
    "difficulty": "Grand Challenge",
    "summary": "Develop wearable or portable device that converts printed text, classroom information, or objects into audio or tactile feedback to improve independent learning for visually impaired students.",
    "context": "Printed textbooks and classroom content are inaccessible to visually impaired students without assistance. A portable device that reads text aloud or renders tactile feedback restores independent study.",
    "deliverables": [
      "Text / object capture (camera or OCR module)",
      "Audio or tactile output conversion",
      "Portable / wearable form factor",
      "Demo with printed material"
    ],
    "techStack": [
      "Raspberry Pi / ESP32",
      "Camera + OCR (Tesseract)",
      "Speaker / vibrotactile array",
      "Battery-powered design"
    ],
    "evaluation": [
      "Working hardware prototype (40%)",
      "Sensor accuracy & real-time response (25%)",
      "Innovation & design (20%)",
      "Presentation & real-world viability (15%)"
    ]
  },
  {
    "id": "PS-EDU-03",
    "title": "Smart Book for Interactive Learning",
    "track": "Smart Education",
    "category": "Hardware",
    "difficulty": "Advanced",
    "summary": "Design physical book integrated with sensors, LEDs, audio, or other electronics that provides interactive explanations, demonstrations, and quizzes when students interact with different pages or learning elements.",
    "context": "Static textbooks don't engage today's learners. Embedding sensors and audio into a physical book turns each page into an interactive learning experience.",
    "deliverables": [
      "Sensor-equipped physical book (page / touch detection)",
      "LED / audio feedback per page",
      "Interactive explanations and quizzes",
      "Demo across multiple pages"
    ],
    "techStack": [
      "ESP32 / Arduino",
      "Touch / light sensors",
      "LEDs + speaker module",
      "Embedded interaction logic"
    ],
    "evaluation": [
      "Working hardware prototype (40%)",
      "Sensor accuracy & real-time response (25%)",
      "Innovation & design (20%)",
      "Presentation & real-world viability (15%)"
    ]
  },
  {
    "id": "PS-DIS-01",
    "title": "Autonomous Fire Detection & Suppression Robot",
    "track": "Disaster Management",
    "category": "Hardware",
    "difficulty": "Grand Challenge",
    "summary": "Build mobile robot that detects fire and smoke, identifies approximate source, navigates toward it while avoiding obstacles, and activates suitable small-scale suppression mechanism.",
    "context": "Firefighters enter burning structures blind and at risk. A robot that locates the source, navigates obstacles, and applies small-scale suppression buys time and reduces danger.",
    "deliverables": [
      "Fire / smoke detection (flame, MQ2 sensors)",
      "Obstacle-avoiding navigation to fire source",
      "Small-scale suppression actuation",
      "Demo arena with mock fire"
    ],
    "techStack": [
      "ESP32 / Arduino",
      "Flame / MQ2 sensors",
      "Ultrasonic obstacle sensors",
      "Pump / extinguisher actuator"
    ],
    "evaluation": [
      "Working hardware prototype (40%)",
      "Sensor accuracy & real-time response (25%)",
      "Innovation & design (20%)",
      "Presentation & real-world viability (15%)"
    ]
  },
  {
    "id": "PS-DIS-02",
    "title": "Wearable Victim Detection & Location Device",
    "track": "Disaster Management",
    "category": "Hardware",
    "difficulty": "Advanced",
    "summary": "Design low-power wearable device that can transmit person's location and emergency status during disasters. It should continue operating with limited connectivity and provide basic information such as movement and environmental conditions.",
    "context": "During disasters, connectivity collapses and victims can't be located. A low-power wearable that keeps broadcasting location and status, even on mesh or limited links, helps rescuers find people.",
    "deliverables": [
      "Low-power wearable with GPS / location",
      "Emergency status and movement transmission",
      "Offline / mesh communication fallback",
      "Rescuer-side receiver demo"
    ],
    "techStack": [
      "ESP32 / nRF24 LoRa",
      "GPS module (NEO-6M)",
      "IMU (movement)",
      "Low-power deep sleep"
    ],
    "evaluation": [
      "Working hardware prototype (40%)",
      "Sensor accuracy & real-time response (25%)",
      "Innovation & design (20%)",
      "Presentation & real-world viability (15%)"
    ]
  },
  {
    "id": "PS-DIS-03",
    "title": "Underground Rescue Communication System",
    "track": "Disaster Management",
    "category": "Hardware",
    "difficulty": "Grand Challenge",
    "summary": "Develop communication system capable of transmitting short emergency messages through or around obstacles in underground or collapsed environments where conventional wireless communication is unreliable.",
    "context": "Collapsed structures and underground spaces block normal radio. A system using through-ground or low-frequency signaling lets trapped people send short emergency messages to surface teams.",
    "deliverables": [
      "Short-message transmission through obstacles",
      "Underground / rubble-friendly signaling method",
      "Surface receiver with message display",
      "Demo across simulated obstruction"
    ],
    "techStack": [
      "ESP32 / Arduino",
      "LoRa / low-frequency TX",
      "Through-ground signaling",
      "Message protocol firmware"
    ],
    "evaluation": [
      "Working hardware prototype (40%)",
      "Sensor accuracy & real-time response (25%)",
      "Innovation & design (20%)",
      "Presentation & real-world viability (15%)"
    ]
  },
  {
    "id": "PS-HC-01",
    "title": "Fall Detection & Emergency Response Device",
    "track": "Healthcare",
    "category": "Hardware",
    "difficulty": "Grand Challenge",
    "summary": "Develop wearable system that detects falls using motion sensors and automatically sends emergency alert with user's location to designated caregiver.",
    "context": "Elderly and at-risk individuals can be incapacitated by a fall with no way to call for help. A wearable that detects the fall and alerts a caregiver with location provides critical early response.",
    "deliverables": [
      "Wearable with motion sensing (IMU)",
      "Fall-detection algorithm",
      "Automatic alert with location to caregiver",
      "Caregiver receiver demo"
    ],
    "techStack": [
      "ESP32 / nRF52",
      "IMU (MPU6050)",
      "GPS (optional)",
      "SMS / app notification"
    ],
    "evaluation": [
      "Working hardware prototype (40%)",
      "Sensor accuracy & real-time response (25%)",
      "Innovation & design (20%)",
      "Presentation & real-world viability (15%)"
    ]
  },
  {
    "id": "PS-HC-02",
    "title": "Smart Wheelchair Navigation System",
    "track": "Healthcare",
    "category": "Hardware",
    "difficulty": "Grand Challenge",
    "summary": "Build intelligent wheelchair that detects obstacles, assists with navigation, and provides automated braking to improve mobility and safety for users with limited mobility.",
    "context": "Manual wheelchair navigation is physically demanding and collision-prone. Obstacle detection with assisted navigation and automated braking improves safety and independence.",
    "deliverables": [
      "Obstacle detection (ultrasonic / IR array)",
      "Assisted navigation logic",
      "Automated braking actuation",
      "Wheelchair demo rig"
    ],
    "techStack": [
      "ESP32 / Arduino",
      "Ultrasonic / IR sensors",
      "Motor + brake actuators",
      "Navigation firmware"
    ],
    "evaluation": [
      "Working hardware prototype (40%)",
      "Sensor accuracy & real-time response (25%)",
      "Innovation & design (20%)",
      "Presentation & real-world viability (15%)"
    ]
  }
];
