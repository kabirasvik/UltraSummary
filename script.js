/* ============================================================
   Ultra Summary – Application
   ============================================================ */

/* ----- Book Data ----- */
const BOOKS = [
  {
    id: 'atomic-habits',
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Psychology',
    color: '#1a1a1a',
    accent: '#b8954a',
    readingTime: 5,
    pages: 320,
    year: 2018,
    rating: 4.8,
    summary: 'Tiny changes, remarkable results. How 1% daily improvement compounds into extraordinary outcomes.',
    keyIdeas: [
      'Habits are the <b>compound interest</b> of self-improvement. 1% better every day results in a 37x improvement over a year.',
      'Focus on <b>systems</b> rather than goals. Goals are about the result, systems are about the process.',
      'Habit stacking: <b>anchor</b> a new habit to an existing one using the formula: "After [CURRENT HABIT], I will [NEW HABIT]."',
      'The <b>two-minute rule</b>: scale down any habit so it takes less than two minutes to start.',
      'Environment design matters more than motivation. <b>Make good habits obvious</b> and bad habits invisible.',
      'Identity-based habits: focus on <b>who you want to become</b>, not what you want to achieve.',
    ],
    mainTakeaways: [
      '<b>Small habits compound</b> — a slight shift in daily routines can lead to remarkable results over time.',
      '<b>Four laws of behavior change:</b> Make it obvious, attractive, easy, and satisfying.',
      'The <b>inversion</b> of the four laws helps break bad habits: make them invisible, unattractive, difficult, and unsatisfying.',
      'Success is not about willpower — it is about <b>designing your environment</b> for the behaviors you want.',
      'Never miss twice. If you slip up, <b>get back on track immediately</b> — one missed day is an accident; two is the start of a new habit.',
    ],
    importantConcepts: [
      '<b>The Plateau of Latent Potential:</b> Results feel slow until a tipping point where the accumulated effort breaks through.',
      '<b>Habit Scorecard:</b> Write down your current habits and become aware of them before trying to change them.',
      '<b>Implementation Intention:</b> "I will [BEHAVIOR] at [TIME] in [LOCATION]."',
      '<b>Temptation Bundling:</b> Pair an action you want to do with an action you need to do.',
      '<b>The Goldilocks Rule:</b> Humans experience peak motivation when working on tasks of just manageable difficulty.',
    ],
    practicalLessons: [
      'Start with <b>one habit</b> that feels easy. Master it before adding another.',
      'Redesign your space: <b>place the book you want to read</b> on your pillow instead of your phone.',
      'Use <b>habit tracking</b> — a simple calendar checkmark creates a chain you do not want to break.',
      'Schedule a <b>weekly review</b> to reflect on what worked and what did not.',
      'Join a <b>culture where your desired behavior is the norm</b> — we imitate the habits of those around us.',
    ],
    bestQuotes: [
      { text: 'You do not rise to the level of your goals. You fall to the level of your systems.', cite: 'James Clear' },
      { text: 'Every action you take is a vote for the type of person you wish to become.', cite: 'James Clear' },
      { text: 'The most effective way to change your habits is to focus not on what you want to achieve, but on who you wish to become.', cite: 'James Clear' },
      { text: 'Habits are the compound interest of self-improvement.', cite: 'James Clear' },
      { text: 'Professionals stick to the schedule; amateurs let life get in the way.', cite: 'James Clear' },
    ],
    finalTakeaway: 'Atomic Habits reveals that the key to lasting change is not dramatic transformation but the aggregation of marginal gains. By focusing on small, consistent improvements and designing your environment for success, you can build systems that make good habits inevitable.'
  },
  {
    id: 'thinking-fast-and-slow',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    category: 'Psychology',
    color: '#2d3436',
    accent: '#0984e3',
    readingTime: 6,
    pages: 499,
    year: 2011,
    rating: 4.6,
    summary: 'The two systems that drive your mind — and how cognitive biases shape every decision you make.',
    keyIdeas: [
      '<b>System 1</b> operates automatically, quickly, with little or no effort. It handles intuition and snap judgments.',
      '<b>System 2</b> allocates attention to effortful mental activities. It is lazy and tires easily.',
      'The <b>availability heuristic</b>: we judge the probability of events by how easily examples come to mind.',
      'The <b>anchoring effect</b>: initial information disproportionately influences our final judgment.',
      '<b>Loss aversion</b>: losses loom larger than gains. The pain of losing is about twice as strong as the pleasure of gaining.',
      '<b>Confirmation bias</b>: we seek evidence that supports our existing beliefs and ignore contradictory information.',
    ],
    mainTakeaways: [
      'Most of your thinking is <b>automatic</b> — System 1 runs the show, and System 2 is the lazy watchdog.',
      'Cognitive biases are <b>systematic errors</b> in thinking that affect everyone, not just novices.',
      'You can <b>slow down</b> decision-making by engaging System 2 when the stakes are high.',
      'The <b>planning fallacy</b>: we consistently underestimate time, costs, and risks of future actions.',
      'Happiness is measured by the <b>experiencing self</b> (what you feel moment to moment), not the remembering self (what you recall).',
    ],
    importantConcepts: [
      '<b>WYSIATI (What You See Is All There Is):</b> System 1 constructs stories from limited information and treats them as complete.',
      '<b>Regression to the Mean:</b> Extreme performances are likely followed by more average ones, not because of anything you did.',
      '<b>The Halo Effect:</b> A positive first impression colors everything that follows.',
      '<b>Narrative Fallacy:</b> We create coherent stories from the past that may not reflect reality.',
      '<b>Peak-End Rule:</b> We judge experiences largely by how they felt at the peak and at the end, not the total sum.',
    ],
    practicalLessons: [
      'Before making an important decision, <b>ask: "What would I advise a friend in this situation?"</b> — this activates System 2.',
      'Use <b>pre-mortems</b>: imagine a future failure and work backward to identify what could go wrong.',
      'When negotiating, <b>be aware of anchors</b> — make the first offer when you have strong information.',
      'Add <b>friction to impulse decisions</b> — wait 24 hours before making non-urgent purchases.',
      'Track your predictions and <b>calibrate over time</b> — honest feedback is the only way to improve judgment.',
    ],
    bestQuotes: [
      { text: 'A reliable way to make people believe in falsehoods is frequent repetition, because familiarity is not easily distinguished from truth.', cite: 'Daniel Kahneman' },
      { text: 'Nothing in life is as important as you think it is while you are thinking about it.', cite: 'Daniel Kahneman' },
      { text: 'The confidence that individuals have in their beliefs depends mostly on the quality of the story they can tell about what they see.', cite: 'Daniel Kahneman' },
      { text: 'Intelligence is not only the ability to reason; it is also the ability to find relevant material in memory and to deploy attention when needed.', cite: 'Daniel Kahneman' },
    ],
    finalTakeaway: 'Thinking, Fast and Slow is a masterclass in the biases and heuristics that govern human judgment. By understanding the interplay between your intuitive System 1 and deliberate System 2, you can make better decisions, avoid common pitfalls, and develop a more skeptical, questioning mindset toward your own thinking.'
  },
  {
    id: 'deep-work',
    title: 'Deep Work',
    author: 'Cal Newport',
    category: 'Productivity',
    color: '#1e272e',
    accent: '#0be881',
    readingTime: 4,
    pages: 296,
    year: 2016,
    rating: 4.5,
    summary: 'Master the lost art of focused, distraction-free concentration. Deep work is the superpower of the 21st century.',
    keyIdeas: [
      '<b>Deep work</b> is professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to their limit.',
      '<b>Shallow work</b> is non-cognitively demanding, logistical-style tasks, often performed while distracted.',
      'The ability to perform deep work is becoming <b>increasingly rare</b> and increasingly valuable in the modern economy.',
      '<b>Four philosophies</b> of deep work scheduling: monastic, bimodal, rhythmic, and journalistic.',
      '<b>Grand gestures</b> — committing significant resources to a deep work session can dramatically increase focus.',
      '<b>Downtime is essential</b> for the unconscious mind to consolidate insights and recharge attention.',
    ],
    mainTakeaways: [
      'Deep work is a <b>superpower</b> in a distracted world — those who cultivate it will thrive.',
      '<b>Schedule every minute</b> of your day to ensure shallow work does not crowd out deep work.',
      '<b>Embrace boredom</b> — the ability to resist distraction is a skill that must be trained.',
      '<b>Quit social media</b> — or at least adopt a "craftsman" approach: only use tools that matter to your core values.',
      '<b>Drain the shallows</b> — aggressively minimize the time spent on shallow, low-value tasks.',
    ],
    importantConcepts: [
      '<b>Attention Residue:</b> When you switch tasks, part of your attention remains stuck on the previous task.',
      '<b>Cognitive Capacity:</b> Your ability to focus is a finite resource that depletes with use.',
      '<b>The Law of Productivity:</b> High-quality work produced = (time spent) × (intensity of focus).',
      '<b>Fixed-Schedule Productivity:</b> Set a firm end time for your workday and work backward to prioritize.',
      '<b>Productive Meditation:</b> Walking or physical activity can be used to focus on a single problem.',
    ],
    practicalLessons: [
      'Identify a <b>deep work ritual</b>: a specific time, place, and duration for focused work each day.',
      'Use the <b>internet sabbath</b>: take one day a week completely offline.',
      'Keep a <b>scoreboard</b> tracking hours spent in deep work each week.',
      'Practice <b>productive meditation</b> during walks or commutes — focus on one problem.',
      'End each day with a <b>shutdown ritual</b> — review the day and plan tomorrow to clear your mind.',
    ],
    bestQuotes: [
      { text: 'Deep work is the ability to focus without distraction on a cognitively demanding task. It is a skill that allows you to quickly master complicated information and produce better results in less time.', cite: 'Cal Newport' },
      { text: 'If you do not produce, you will not thrive — no matter how skilled or talented you are.', cite: 'Cal Newport' },
      { text: 'Clarity about what matters provides clarity about what does not.', cite: 'Cal Newport' },
      { text: 'The key to developing a deep work habit is to move beyond good intentions and add routines and rituals to your working life.', cite: 'Cal Newport' },
    ],
    finalTakeaway: 'Deep Work makes a compelling case that focused, undistracted concentration is the most valuable skill in the modern economy. By ruthlessly eliminating shallow work, embracing boredom, and scheduling deep work sessions, you can produce higher-quality output in less time — and reclaim a sense of genuine accomplishment.'
  },
  {
    id: 'meditations',
    title: 'Meditations',
    author: 'Marcus Aurelius',
    category: 'Philosophy',
    color: '#3d2b1f',
    accent: '#c9a96e',
    readingTime: 4,
    pages: 256,
    year: 180,
    rating: 4.7,
    summary: 'The private journal of a Roman emperor — timeless Stoic wisdom on discipline, resilience, and the art of living.',
    keyIdeas: [
      'Focus only on what is <b>within your control</b> — your judgments, choices, and actions. Everything else is indifferent.',
      'The universe is <b>rational and interconnected</b> — accept events as they happen, because they are part of a larger natural order.',
      '<b>Memento mori</b>: remember that you will die. Use this awareness to live each day with purpose and urgency.',
      '<b>Perception is choice</b> — you can choose not to be harmed by an event by choosing how you interpret it.',
      '<b>Waste no time</b> arguing about what a good person should be — be one.',
      '<b>Inner citadel</b>: build a fortress of calm within yourself that external events cannot breach.',
    ],
    mainTakeaways: [
      'The <b>dichotomy of control</b> is the foundation of Stoic tranquility — focus only on what you can control.',
      'You are not your thoughts — you are the <b>observer of your thoughts</b> and can choose which to accept.',
      '<b>Obstacles become opportunities</b> — every challenge is a chance to practice virtue.',
      '<b>Live in the present moment</b> — the past is gone, the future is uncertain, only now is real.',
      'Nature\'s plan is <b>reasonable and purposeful</b> — even difficult events serve a larger order.',
    ],
    importantConcepts: [
      '<b>Stoic Reserve Clause:</b> "Fate permitting" — always add this caveat when making plans.',
      '<b>View from Above:</b> Imagine the vastness of the cosmos and the smallness of your problems.',
      '<b>Hierarchy of Value:</b> Reason and virtue are the only true goods; wealth, fame, and health are preferred indifferents.',
      '<b>Amor Fati:</b> Love your fate — embrace everything that happens as necessary and beneficial.',
      '<b>Negative Visualization:</b> Regularly contemplate loss to deepen gratitude and reduce fear.',
    ],
    practicalLessons: [
      'Start each morning by <b>anticipating challenges</b>: "Today I will meet annoying people. I will not be surprised."',
      'Pause before reacting — <b>count to ten</b> and ask: "Is this within my control?"',
      'End each day with a <b>brief self-reflection</b>: what did I do well? What can I improve?',
      'When frustrated, <b>zoom out</b> — imagine the view from space and see how small this moment is.',
      'Practice <b>voluntary discomfort</b> occasionally — skip a meal, sleep on the floor — to build resilience.',
    ],
    bestQuotes: [
      { text: 'You have power over your mind — not outside events. Realize this, and you will find strength.', cite: 'Marcus Aurelius' },
      { text: 'The happiness of your life depends upon the quality of your thoughts.', cite: 'Marcus Aurelius' },
      { text: 'Waste no more time arguing what a good man should be. Be one.', cite: 'Marcus Aurelius' },
      { text: 'The impediment to action advances action. What stands in the way becomes the way.', cite: 'Marcus Aurelius' },
    ],
    finalTakeaway: 'Meditations is not a philosophical treatise — it is a personal manual for resilience. Marcus Aurelius shows us that a life of tranquility, purpose, and virtue is possible regardless of external circumstances. The Stoic framework is a practical toolkit for maintaining inner peace amid chaos.'
  },
  {
    id: 'the-psychology-of-money',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    category: 'Business',
    color: '#1a2634',
    accent: '#f9ca24',
    readingTime: 4,
    pages: 256,
    year: 2020,
    rating: 4.6,
    summary: 'How your emotions, biases, and personal history shape your financial decisions more than any spreadsheet ever could.',
    keyIdeas: [
      'Money is an <b>emotional subject</b> — most financial decisions are made at the dinner table, not in spreadsheets.',
      '<b>Compounding</b> is the most powerful force in finance, but it requires patience that most people lack.',
      'The gap between what you <b>need</b> and what you <b>want</b> is where financial freedom lives.',
      '<b>No one is crazy</b> — everyone has a unique financial worldview shaped by their personal experiences.',
      '<b>Wealth is what you do not see</b> — it is the money you did not spend, not the cars you drive.',
      '<b>Room for error</b> is the most underappreciated financial strategy — it allows you to survive long enough for compounding to work.',
    ],
    mainTakeaways: [
      '<b>Manage your emotions</b> — financial success is 20% head knowledge and 80% behavior.',
      '<b>Compounding requires time</b> — the best strategy is to stay invested and let time do the heavy lifting.',
      'The goal is not to be rich — it is to <b>have enough</b>. Define what "enough" means for you.',
      '<b>Control your time</b> — the highest dividend money pays is the ability to control your schedule.',
      '<b>Humble and scared</b> investors outperform confident and bold ones over the long term.',
    ],
    importantConcepts: [
      '<b>Tail Events:</b> A small number of events drive the majority of outcomes in finance and in life.',
      '<b>The Seduction of Pessimism:</b> Pessimism sounds smarter and more sophisticated than optimism.',
      '<b>Room for Error:</b> The gap between what could happen and what you plan for — the margin of safety.',
      '<b>Getting Wealthy vs. Staying Wealthy:</b> Getting money requires taking risk; keeping it requires the opposite.',
      '<b>The Man in the Car Paradox:</b> People buy expensive things to signal wealth, but the people they want to impress look at the things, not the person.',
    ],
    practicalLessons: [
      'Save money <b>automatically</b> — make it a non-negotiable part of your budget.',
      'Keep an <b>emergency fund</b> of 6-12 months of expenses — your room for error.',
      'Diversify because <b>you do not know what you do not know</b> — humility is a strategy.',
      'Ignore what other people are doing — <b>your financial plan</b> should be based on your goals, not theirs.',
      'Read history, not just forecasts — <b>long-term patterns</b> are more reliable than short-term predictions.',
    ],
    bestQuotes: [
      { text: 'The hardest financial skill is getting the goalpost to stop moving.', cite: 'Morgan Housel' },
      { text: 'Wealth is not about having a lot of money; it is about having control over your time.', cite: 'Morgan Housel' },
      { text: 'Doing something you do not fully understand on a long enough timeline will eventually backfire.', cite: 'Morgan Housel' },
      { text: 'The ability to stick around for a long time without wiping out is what makes compounding work.', cite: 'Morgan Housel' },
    ],
    finalTakeaway: 'The Psychology of Money reframes financial success as a game of behavior, not intelligence. By understanding the emotional drivers behind money decisions — and building a margin of safety into every financial plan — you can achieve a level of financial freedom that has nothing to do with your income and everything to do with your mindset.'
  },
  {
    id: 'sapiens',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    category: 'Science',
    color: '#2c1810',
    accent: '#e17055',
    readingTime: 6,
    pages: 443,
    year: 2011,
    rating: 4.7,
    summary: 'A brief history of humankind — how a clever ape conquered the world through stories, cooperation, and agriculture.',
    keyIdeas: [
      'The <b>Cognitive Revolution</b> (70,000 years ago) gave Homo sapiens the ability to believe in shared fictions — gods, nations, money — enabling large-scale flexible cooperation.',
      'The <b>Agricultural Revolution</b> (12,000 years ago) was history\'s biggest fraud — it made humans more prosperous but also more miserable, working harder and eating worse.',
      'The <b>Unification of Humankind</b> happened through three forces: money, empires, and religion — the great unifiers.',
      'The <b>Scientific Revolution</b> (500 years ago) introduced the admission of ignorance — the most powerful engine of progress ever invented.',
      '<b>Imagined Orders</b> like laws, corporations, and human rights exist only in our collective imagination but shape our entire reality.',
      'Happiness is <b>not correlated with material wealth</b> — modern humans are no happier than hunter-gatherers.',
    ],
    mainTakeaways: [
      'Humans dominate the planet because of our <b>unique ability to believe in shared fictions</b> — stories that unite millions.',
      'The Agricultural Revolution was a <b>double-edged sword</b> — it enabled civilization but also created hierarchy, inequality, and suffering.',
      'Money is the <b>most universal story</b> ever told — it allows trust between strangers who share no other values.',
      'The scientific revolution\'s key insight was <b>admitting ignorance</b> — the willingness to say "I do not know" and then find out.',
      'Technology may soon create a <b>new species</b> — Homo deus — through biotechnology and artificial intelligence.',
    ],
    importantConcepts: [
      '<b>Intersubjective Reality:</b> Things that exist only in our shared imagination but affect the world — like money, nations, and laws.',
      '<b>The Scarcity Trap:</b> Agriculture created food surpluses but also population growth, leaving people no better off than before.',
      '<b>Imagined Communities:</b> Nations are not natural — they are stories told by millions of strangers who will never meet.',
      '<b>The Tree of Knowledge:</b> The shift from foraging to farming was not a conscious choice but a gradual, irreversible trap.',
      '<b>Unprecedented Freedom:</b> The Scientific Revolution gave humans the power to re-engineer life itself — for better and worse.',
    ],
    practicalLessons: [
      'Question <b>shared stories</b> — many of the "truths" we accept are social constructs that can be changed.',
      'Understand the <b>scale of history</b> — most of what we worry about is trivial on a 70,000-year timeline.',
      'Recognize <b>the power of narrative</b> — the best storytellers shape the world.',
      'Be skeptical of <b>techno-utopian promises</b> — every revolution has created unintended consequences.',
      'Happiness may be <b>biochemical</b> — focus on contentment rather than the relentless pursuit of more.',
    ],
    bestQuotes: [
      { text: 'There is no justice in history. There is no justice in the world. But the recognition of this fact is the beginning of wisdom.', cite: 'Yuval Noah Harari' },
      { text: 'Humans think in stories, not in facts, numbers, or equations.', cite: 'Yuval Noah Harari' },
      { text: 'The real difference between us and chimpanzees is the mythical glue that binds together large numbers of individuals, families, and groups.', cite: 'Yuval Noah Harari' },
      { text: 'History is something that very few people have been doing while everyone else was ploughing fields and carrying water buckets.', cite: 'Yuval Noah Harari' },
    ],
    finalTakeaway: 'Sapiens offers a sweeping narrative of how Homo sapiens came to dominate the planet. The key insight is that our power lies in our ability to believe in shared fictions — from money to nations to corporations. Understanding this reveals that the structures governing our lives are not fixed laws of nature but human creations that can be reimagined.'
  },
  {
    id: 'the-power-of-now',
    title: 'The Power of Now',
    author: 'Eckhart Tolle',
    category: 'Psychology',
    color: '#1b3a2b',
    accent: '#a3d9a5',
    readingTime: 4,
    pages: 236,
    year: 1997,
    rating: 4.4,
    summary: 'A guide to spiritual enlightenment — escaping the prison of your mind by living fully in the present moment.',
    keyIdeas: [
      'The <b>pain-body</b> is an accumulation of past emotional pain that lives in you and seeks more pain through negative thinking.',
      'You are not your mind — the <b>observer of thoughts</b> is the true self, the silent awareness behind the mental noise.',
      'The <b>present moment</b> is all you ever have. The past is memory, the future is imagination — only now is real.',
      '<b>Ego</b> is the false self built from identification with thoughts, emotions, roles, and possessions.',
      '<b>Surrender</b> is not giving up — it is accepting the present moment unconditionally, which opens the door to deeper action.',
      '<b>Watch the thinker</b> — disidentify from your mind by observing your thoughts without judgment.',
    ],
    mainTakeaways: [
      'The <b>root of suffering</b> is identification with the mind — you think you are your thoughts, but you are the awareness behind them.',
      'The present moment is the <b>only gateway to freedom</b> — everything else is mental projection.',
      '<b>Emotions are the body\'s reaction</b> to the mind\'s thoughts — observe them without resistance.',
      '<b>Acceptance of what is</b> dissolves the ego\'s resistance and creates space for transformation.',
      '<b>Stillness is your true nature</b> — beneath the noise of the mind lies a state of peace that is always accessible.',
    ],
    importantConcepts: [
      '<b>Pain-Body:</b> The accumulated emotional residue from past trauma that feeds on negative situations.',
      '<b>The Watchman:</b> The part of you that simply observes thoughts without engaging or judging them.',
      '<b>Space Consciousness:</b> Awareness of the silence between thoughts, the gap between words.',
      '<b>Inner Body Awareness:</b> Turning attention away from thoughts and into the aliveness within your body.',
      '<b>Portal to the Unmanifested:</b> The present moment is the doorway to something beyond form — pure consciousness.',
    ],
    practicalLessons: [
      'Throughout the day, <b>pause and take three conscious breaths</b> — feel the aliveness in your hands and feet.',
      'When you feel negative emotion, <b>ask: "What is my reaction trying to tell me?"</b> — observe without judgment.',
      'Practice <b>single-task focus</b> — do one thing at a time with full attention.',
      'In challenging situations, <b>accept the "isness"</b> of the moment before taking action.',
      'Use <b>everyday activities</b> as meditation — washing dishes, walking, drinking tea — be fully present.',
    ],
    bestQuotes: [
      { text: 'Realize deeply that the present moment is all you ever have. Make the Now the primary focus of your life.', cite: 'Eckhart Tolle' },
      { text: 'The primary cause of unhappiness is never the situation but your thoughts about it.', cite: 'Eckhart Tolle' },
      { text: 'You find peace not by rearranging the circumstances of your life, but by realizing who you are at the deepest level.', cite: 'Eckhart Tolle' },
      { text: 'The mind is a superb instrument if used rightly. Used wrongly, however, it becomes very destructive.', cite: 'Eckhart Tolle' },
    ],
    finalTakeaway: 'The Power of Now is a direct, uncompromising guide to breaking free from the mind\'s compulsive thinking. The core message is simple yet profound: the present moment is the only place where life can be found. By disidentifying from your thoughts and embracing the now, you can access a dimension of peace that is not dependent on external circumstances.'
  },
  {
    id: 'start-with-why',
    title: 'Start with Why',
    author: 'Simon Sinek',
    category: 'Business',
    color: '#1a1f2e',
    accent: '#3498db',
    readingTime: 4,
    pages: 256,
    year: 2009,
    rating: 4.3,
    summary: 'Great leaders and companies inspire action by communicating their purpose — the "why" — before the "what" or "how."',
    keyIdeas: [
      'The <b>Golden Circle</b> has three layers: Why (purpose), How (process), What (result). Most organizations communicate from the outside in — what first.',
      'Inspired leaders communicate from the <b>inside out</b> — they start with why, then how, then what.',
      '<b>Why</b> is not about making money — that is a result. Why is your purpose, cause, or belief.',
      'The <b>Law of Diffusion of Innovation</b>: mass-market adoption happens only after 15-18% of the population has adopted an idea.',
      '<b>Limbic brain</b> controls feelings, trust, and loyalty — it has no capacity for language. The "why" speaks to the limbic brain.',
      'The <b>Celery Test</b>: if you have a clear why, you know which opportunities to accept and which to reject.',
    ],
    mainTakeaways: [
      'People do not buy <b>what</b> you do; they buy <b>why</b> you do it.',
      'The goal is not to do business with <b>everyone</b> who needs what you have — it is to do business with people who <b>believe</b> what you believe.',
      'Clarity of <b>why</b> precedes everything else — without it, you cannot inspire loyalty or make consistent decisions.',
      '<b>Trust</b> is built when a company\'s actions align with its stated beliefs.',
      'Finding your why requires <b>looking backward</b> — your why is not invented; it is discovered through your past experiences.',
    ],
    importantConcepts: [
      '<b>Golden Circle:</b> Why (core belief) → How (values/processes) → What (products/services).',
      '<b>Celery Test:</b> A clear why acts as a filter for every decision — you know what belongs and what does not.',
      '<b>Gut Instinct:</b> Decisions made from the why feel right intuitively because they align with your core belief.',
      '<b>Early Adopters:</b> The 15-18% who share your why and will champion your cause before the majority catches on.',
      '<b>Manipulation vs. Inspiration:</b> Price cuts, promotions, and fear tactics are manipulations; inspiration starts with why.',
    ],
    practicalLessons: [
      'Write a one-sentence <b>statement of purpose</b> that begins with "To..." and does not mention money or products.',
      'When hiring, <b>prioritize belief over skill</b> — skills can be taught, but belief cannot.',
      'Communicate your why <b>in every message</b> — from your website to your email signature.',
      'Use the <b>Celery Test</b> on your next opportunity: does this align with my core purpose?',
      'Tell <b>stories</b> instead of listing features — stories speak to the limbic brain.',
    ],
    bestQuotes: [
      { text: 'People do not buy what you do; they buy why you do it. And what you do simply proves what you believe.', cite: 'Simon Sinek' },
      { text: 'There is a difference between listening and waiting for your turn to speak.', cite: 'Simon Sinek' },
      { text: 'Working hard for something we do not care about is called stress; working hard for something we love is called passion.', cite: 'Simon Sinek' },
      { text: 'The role of a leader is not to come up with all the great ideas. The role of a leader is to create an environment in which great ideas can happen.', cite: 'Simon Sinek' },
    ],
    finalTakeaway: 'Start with Why provides a simple but powerful framework for inspiring action. The Golden Circle reveals that the most successful leaders and organizations communicate from the inside out — they begin with their purpose and let everything else follow. When you know your why, every decision becomes clearer and more authentic.'
  },
  {
    id: 'mans-search-for-meaning',
    title: 'Man\'s Search for Meaning',
    author: 'Viktor Frankl',
    category: 'Philosophy',
    color: '#2c1810',
    accent: '#d4a574',
    readingTime: 4,
    pages: 184,
    year: 1946,
    rating: 4.8,
    summary: 'A psychiatrist\'s experience in Nazi concentration camps reveals that the search for meaning is the primary human motivation.',
    keyIdeas: [
      'The <b>will to meaning</b> is the fundamental drive of human beings — the desire to find purpose in life, even in suffering.',
      '<b>Logotherapy</b> (meaning-centered psychotherapy) holds that the primary motivational force is to find meaning, not pleasure or power.',
      'Even in the most extreme circumstances, we retain the <b>freedom to choose our attitude</b> toward our suffering.',
      '<b>Existential vacuum</b> is a widespread condition of meaninglessness, boredom, and emptiness in modern life.',
      'Meaning can be found in three ways: <b>creating a work</b>, <b>experiencing something or someone</b>, and <b>the attitude we take toward unavoidable suffering</b>.',
      'Those who had a <b>"why" to live for</b> were more likely to survive the camps than those who had lost their sense of purpose.',
    ],
    mainTakeaways: [
      '<b>Meaning is the ultimate motivator</b> — even the worst suffering becomes bearable when it serves a purpose.',
      'You cannot always choose your circumstances, but you can <b>choose your response</b> to them.',
      'The <b>existential vacuum</b> is the root cause of much modern anxiety, depression, and addiction.',
      'Logotherapy is not about finding pleasure or avoiding pain — it is about <b>finding meaning</b> in every experience.',
      'Life never ceases to have meaning, even in suffering and death — <b>meaning is unconditional</b>.',
    ],
    importantConcepts: [
      '<b>Tragic Optimism:</b> The ability to remain optimistic in the face of tragedy, pain, guilt, and death.',
      '<b>Paradoxical Intention:</b> A logotherapy technique where the patient intends to do the very thing they fear, breaking the fear cycle.',
      '<b>Dereflection:</b> Turning attention away from a problem toward something meaningful, reducing the problem\'s power.',
      '<b>Sunday Neurosis:</b> The depression that comes from the emptiness of unstructured time — a symptom of the existential vacuum.',
      '<b>The Provisor Fate:</b> The idea that we should live as if we were living for the second time and had acted as wrongly the first time.',
    ],
    practicalLessons: [
      'When facing hardship, <b>ask: "What is this situation asking of me?"</b> — find the meaning in the challenge.',
      'Keep a <b>meaning journal</b> — at the end of each day, write down one thing that gave your day purpose.',
      'Practice <b>self-detachment</b> — the ability to laugh at yourself and distance yourself from your own suffering.',
      'Identify your <b>unique responsibility</b> — what is something only you can contribute to the world?',
      'Use the <b>logotherapy triad</b> to find meaning: a project, a relationship, or an attitude toward hardship.',
    ],
    bestQuotes: [
      { text: 'Those who have a "why" to live can bear with almost any "how."', cite: 'Viktor Frankl' },
      { text: 'Between stimulus and response there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom.', cite: 'Viktor Frankl' },
      { text: 'When we are no longer able to change a situation, we are challenged to change ourselves.', cite: 'Viktor Frankl' },
      { text: 'Life is never made unbearable by circumstances, but only by lack of meaning and purpose.', cite: 'Viktor Frankl' },
    ],
    finalTakeaway: 'Man\'s Search for Meaning offers a profound and timeless insight: the primary drive in human life is not pleasure, but the discovery and pursuit of meaning. Even in the most horrific circumstances, we retain the ability to choose our attitude and find purpose. This is the ultimate human freedom — and the key to resilience.'
  },
  {
    id: 'essentialism',
    title: 'Essentialism',
    author: 'Greg McKeown',
    category: 'Productivity',
    color: '#1e2a2a',
    accent: '#6ab04c',
    readingTime: 4,
    pages: 272,
    year: 2014,
    rating: 4.4,
    summary: 'The disciplined pursuit of less — doing fewer things better instead of more things adequately.',
    keyIdeas: [
      '<b>Essentialism</b> is not about how to get more things done — it is about how to get the right things done.',
      'The <b>tyranny of the trivial</b>: most of the effort you invest produces minimal results. Focus on the vital few.',
      '<b>Less but better</b> — the essentialist approach is to do fewer things with greater impact.',
      'The <b>90% rule</b>: when evaluating an opportunity, rate it on a scale of 1-100. If it is below 90, say no.',
      '<b>Trade-offs are inevitable</b> — you cannot have it all. Essentialists embrace trade-offs as opportunities to focus.',
      '<b>Boundaries are liberating</b> — clear rules about what you do and do not do create freedom, not restriction.',
    ],
    mainTakeaways: [
      'If it is not a <b>hell yes</b>, it is a <b>no</b> — the essentialist rejects anything that is not a clear priority.',
      '<b>Less is more</b> — the cumulative effect of doing fewer things at a higher quality outstrips doing many things poorly.',
      'You must <b>choose deliberately</b> — the cost of a bad decision is worse than the cost of saying no.',
      '<b>Sleep is essential</b> for high performance — the essentialist prioritizes rest as a strategic asset.',
      'Create <b>buffer zones</b> — always add 50% more time than you think a task will take.',
    ],
    importantConcepts: [
      '<b>The Paradox of Success:</b> Success leads to more options, more options lead to diffused effort, diffused effort leads to failure.',
      '<b>Pareto Principle (80/20):</b> 80% of results come from 20% of efforts. Find and focus on that 20%.',
      '<b>Designing a Life:</b> Essentialism is not a productivity hack — it is a way of life that requires intentional design.',
      '<b>Play is Essential:</b> Play stimulates creativity and exploration — it is not a luxury but a necessity.',
      '<b>The Power of a Clear No:</b> A graceful but firm "no" is more respectful than a resentful "yes."',
    ],
    practicalLessons: [
      'Before committing to anything new, <b>ask: "Will this make the highest possible contribution?"</b>',
      'Schedule <b>thinking time</b> — block out at least one hour per week for pure reflection and prioritization.',
      'Create a <b>stop-doing list</b> — identify the activities that drain your energy without producing results.',
      'Practice the <b>graceful "no"</b>: "I am honored you thought of me, but I cannot take that on right now."',
      'Set <b>non-negotiable boundaries</b> — defend your time and energy as the precious resources they are.',
    ],
    bestQuotes: [
      { text: 'Essentialism is not about how to get more things done; it is about how to get the right things done.', cite: 'Greg McKeown' },
      { text: 'If you do not prioritize your life, someone else will.', cite: 'Greg McKeown' },
      { text: 'The pursuit of the best in every area is a recipe for mediocrity.', cite: 'Greg McKeown' },
      { text: 'What if we stopped celebrating being busy as a measurement of importance? What if we instead celebrated how much time we had spent listening, reading, thinking, and connecting?', cite: 'Greg McKeown' },
    ],
    finalTakeaway: 'Essentialism is a call to stop spreading yourself thin across too many priorities and instead focus on what truly matters. By embracing the disciplined pursuit of less, you can achieve higher quality results, greater satisfaction, and a more meaningful life. The core insight is simple: you cannot do everything, but you can do the right things.'
  },
  {
    id: 'the-alchemist',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    category: 'Philosophy',
    color: '#1a2a1a',
    accent: '#d4af37',
    readingTime: 3,
    pages: 197,
    year: 1988,
    rating: 4.3,
    summary: 'A shepherd boy journeys across the desert in search of treasure — and discovers that the journey itself is the real reward.',
    keyIdeas: [
      '<b>Personal Legend</b> is your life\'s unique purpose — the one thing you have always wanted to accomplish.',
      'The <b>universe conspires</b> to help those who pursue their Personal Legend — the universe wants you to fulfill your destiny.',
      '<b>Beginner\'s luck</b> is real — when you first commit to a dream, things often fall into place.',
      '<b>The Soul of the World</b> is a universal spirit that connects all things — when you are aligned with your purpose, you can tap into it.',
      '<b>Fear of failure</b> is the greatest obstacle to fulfilling your Personal Legend — more than any external barrier.',
      '<b>The present moment</b> is where life happens — do not sacrifice today for a future that may never come.',
    ],
    mainTakeaways: [
      'Follow your <b>Personal Legend</b> — the universe will help you achieve it if you have the courage to pursue it.',
      'The <b>journey is the destination</b> — the treasure you seek often lies where you started, but the journey transforms you.',
      '<b>Listen to your heart</b> — it knows the way even when your mind is confused.',
      '<b>Fear is temporary</b> — regret lasts forever. The pain of not pursuing your dream is worse than any risk.',
      'Everything in life is <b>connected</b> — synchronicity is real when you are aligned with your purpose.',
    ],
    importantConcepts: [
      '<b>Personal Legend:</b> Your life\'s unique calling or destiny — the path only you can walk.',
      '<b>The Language of the World:</b> A universal language of intuition, omens, and signs that transcends words.',
      '<b>Maktub:</b> "It is written" — the idea that fate and free will work together to guide your journey.',
      '<b>The Soul of the World:</b> The animating spirit of the universe that connects all living things.',
      '<b>Transformation through Travel:</b> The journey itself changes you, preparing you to receive what you seek.',
    ],
    practicalLessons: [
      'Identify your <b>Personal Legend</b> — what is the one thing you have always dreamed of doing?',
      'Pay attention to <b>omens and signs</b> — synchronicities often point toward your path.',
      'Start before you are ready — <b>the first step</b> is the most important one, and the universe will meet you there.',
      'Embrace the <b>detours</b> — they are not distractions but essential parts of the journey.',
      'When you want something, <b>all the universe conspires</b> in helping you to achieve it — believe this.',
    ],
    bestQuotes: [
      { text: 'And, when you want something, all the universe conspires in helping you to achieve it.', cite: 'Paulo Coelho' },
      { text: 'It is the possibility of having a dream come true that makes life interesting.', cite: 'Paulo Coelho' },
      { text: 'The secret of life, though, is to fall seven times and to get up eight times.', cite: 'Paulo Coelho' },
      { text: 'Tell your heart that the fear of suffering is worse than the suffering itself.', cite: 'Paulo Coelho' },
    ],
    finalTakeaway: 'The Alchemist is a fable about the courage to follow your dreams. The central message is that the treasure you seek is often already within you — but the journey to find it is essential. Every person has a Personal Legend, and the universe will support those brave enough to pursue it. The real treasure is not the destination, but the person you become along the way.'
  },
  {
    id: 'the-4-hour-workweek',
    title: 'The 4-Hour Workweek',
    author: 'Tim Ferriss',
    category: 'Business',
    color: '#1a1a2e',
    accent: '#e74c3c',
    readingTime: 5,
    pages: 416,
    year: 2007,
    rating: 4.1,
    summary: 'Escape the 9-5, live anywhere, and join the new rich — design a lifestyle of freedom, not a life of deferred dreams.',
    keyIdeas: [
      '<b>Lifestyle design</b> replaces the traditional deferred-life plan — you do not have to wait until retirement to enjoy life.',
      '<b>Elimination</b> (the 80/20 rule): 80% of your results come from 20% of your efforts. Focus on that 20% and eliminate the rest.',
      '<b>Automation</b> — create systems that generate income without your direct involvement: outsourcing, geo-arbitrage, and passive revenue.',
      '<b>Liberation</b> — the goal is time and location freedom, not just financial freedom. Work remotely, travel, and live wherever you want.',
      '<b>Fear setting</b> — define your worst-case scenario, plan to prevent it, and realize that inaction is riskier than action.',
      '<b>Parkinson\'s Law</b> — work expands to fill the time available. Shorten deadlines to increase productivity.',
    ],
    mainTakeaways: [
      'The goal is not to <b>work more</b> but to <b>work smarter</b> — focus on the 20% that produces 80% of your results.',
      '<b>Outsource your life</b> — delegate tasks that do not require your unique skills to virtual assistants.',
      '<b>Mini-retirements</b> — take breaks throughout your life, not just at the end. The deferred-life plan is a gamble.',
      '<b>Time is more valuable than money</b> — optimize for freedom, not for income.',
      'Most of what you fear <b>never happens</b> — define your fears and take action despite them.',
    ],
    importantConcepts: [
      '<b>Geo-Arbitrage:</b> Earning in a strong currency while living in a low-cost country.',
      '<b>Lifestyle Business:</b> A business designed to support your desired lifestyle, not to maximize growth.',
      '<b>Selective Ignorance:</b> Actively ignoring information that does not serve your goals — news, gossip, irrelevant emails.',
      '<b>Dreamlining:</b> Setting specific, time-bound lifestyle goals, not just financial goals.',
      '<b>The 80/20 Principle:</b> 80% of outputs come from 20% of inputs — identify and scale that 20%.',
    ],
    practicalLessons: [
      'Apply the <b>Pareto Principle</b> to your work: what 20% of activities produce 80% of your results? Focus only on those.',
      'Set <b>artificial deadlines</b> — use Parkinson\'s Law to complete tasks in half the time.',
      'Practice <b>fear setting</b>: write down the worst-case scenario, how to prevent it, and how to recover if it happens.',
      'Outsource one repetitive task this week — <b>hire a virtual assistant</b> for $5-10/hour.',
      'Plan a <b>mini-retirement</b> — take 1-3 months off to travel or pursue a passion project.',
    ],
    bestQuotes: [
      { text: 'Who you are is defined by what you are willing to pay for.', cite: 'Tim Ferriss' },
      { text: 'The opposite of love is not hate, it is indifference. The opposite of art is not ugliness, it is indifference. The opposite of faith is not heresy, it is indifference. And the opposite of life is not death, it is indifference.', cite: 'Tim Ferriss' },
      { text: 'For all of the most important things, the timing always sucks. Do it anyway.', cite: 'Tim Ferriss' },
      { text: 'A person\'s success in life can usually be measured by the number of uncomfortable conversations he or she is willing to have.', cite: 'Tim Ferriss' },
    ],
    finalTakeaway: 'The 4-Hour Workweek challenges the conventional path of working hard now and retiring later. Ferriss argues that the real goal is lifestyle design — using principles of elimination, automation, and liberation to create a life of freedom and adventure now. The book is a practical, provocative guide to escaping the rat race on your own terms.'
  },
  {
    id: 'grit',
    title: 'Grit',
    author: 'Angela Duckworth',
    category: 'Psychology',
    color: '#1e1e2a',
    accent: '#9b59b6',
    readingTime: 4,
    pages: 352,
    year: 2016,
    rating: 4.5,
    summary: 'Passion and perseverance are better predictors of success than talent, IQ, or luck. The power of sustained effort over time.',
    keyIdeas: [
      '<b>Grit</b> is the combination of passion and perseverance for long-term goals. It is stamina, not sprint — sustained effort over years.',
      '<b>Talent</b> is how quickly you improve skills. <b>Effort</b> is using those skills to achieve results. Effort counts twice.',
      '<b>Hard work beats talent</b> when talent does not work hard — but the real power is hard work combined with talent.',
      '<b>Purpose</b> is essential — gritty people believe their work matters beyond themselves. Purpose is the engine of perseverance.',
      '<b>Hope</b> is the belief that your efforts can improve your future — it is a learned optimism, not wishful thinking.',
      '<b>The Hard Thing Rule</b>: you must do one hard thing every day, you can quit but not on a bad day, and you choose the thing yourself.',
    ],
    mainTakeaways: [
      'Grit matters <b>more than talent</b> for long-term success — the ability to persist through difficulty is the deciding factor.',
      '<b>Effort counts twice</b>: talent × effort = skill, and skill × effort = achievement.',
      '<b>Interest</b> must come first — you cannot be gritty about something you do not care about.',
      '<b>Deliberate practice</b> is the key to improvement — not just doing what you are good at, but working on weaknesses.',
      '<b>Grit can be grown</b> — from the inside (through interest, purpose, and hope) and from the outside (through a supportive culture).',
    ],
    importantConcepts: [
      '<b>The Effort Double:</b> Effort builds skill AND makes skill productive — it is the multiplier in both equations.',
      '<b>Deliberate Practice:</b> Highly structured, effortful, feedback-driven practice aimed at specific weaknesses.',
      '<b>Purpose-Driven Passion:</b> The deepest form of grit connects your work to a purpose larger than yourself.',
      '<b>The Ericsson Rule:</b> Experts spend 10,000+ hours in deliberate practice, but the quality of practice matters more than the quantity.',
      '<b>Culture of Grit:</b> Surrounding yourself with gritty people raises your own standards of perseverance.',
    ],
    practicalLessons: [
      'Apply the <b>Hard Thing Rule</b> — commit to one hard thing, practice it daily, and do not quit on a bad day.',
      'Find your <b>purpose</b> — connect your daily work to a cause or contribution that matters to others.',
      'Practice <b>deliberate practice</b> — identify a specific weakness, focus on it, get feedback, and repeat.',
      'Cultivate an <b>optimistic self-talk</b> — replace "I cannot do this" with "I cannot do this yet."',
      'Join a <b>gritty community</b> — the people around you shape your standards of effort and perseverance.',
    ],
    bestQuotes: [
      { text: 'Grit is passion and perseverance for very long-term goals. It is having stamina. It is sticking with your future, day in and day out.', cite: 'Angela Duckworth' },
      { text: 'Our potential is one thing. What we do with it is quite another.', cite: 'Angela Duckworth' },
      { text: 'Enthusiasm is common. Endurance is rare.', cite: 'Angela Duckworth' },
      { text: 'Without effort, your talent is nothing more than unmet potential. Without effort, your skill is nothing more than what you could have done but did not.', cite: 'Angela Duckworth' },
    ],
    finalTakeaway: 'Grit redefines what it takes to succeed. Duckworth\'s research shows that passion and perseverance — not talent — are the most reliable predictors of achievement. The good news is that grit can be cultivated. By developing deep interests, connecting work to purpose, practicing deliberately, and maintaining hope, anyone can grow their grit.'
  },
  {
    id: '100-things-successful-people-do',
    title: '100 Things Successful People Do',
    author: 'Nigel Cumberland',
    category: 'Psychology',
    color: '#1b3a3a',
    accent: '#c8a96e',
    readingTime: 6,
    pages: 352,
    year: 2020,
    rating: 4.3,
    summary: 'One hundred practical, time-tested habits for building a successful, meaningful life — distilled into one clear guide.',
    keyIdeas: [
      '<b>Success is personal</b> — it starts with a dream you choose, not others\' expectations. Define what success means on your own terms.',
      '<b>Emotional intelligence</b> outweighs raw IQ. How you react, empathize, and manage impulses determines 90% of life outcomes.',
      'Apply the <b>Serenity test</b>: focus energy on what you can control; accept what you cannot. Worrying about the uncontrollable wastes your power.',
      'Your <b>daily habits compound</b> into who you become — how you start each day, sleep, health, and focus all shape your trajectory.',
      '<b>Turn work into play</b> — you spend thousands of hours at work each year. If you do not enjoy it, change the work or change how you approach it.',
      '<b>Grit and persistence</b> beat talent. Fail fast, learn, and never give up early. Most people quit right before the breakthrough.',
      'Your <b>tribe and environment</b> define you. You become the people you surround yourself with. Choose wisely.',
    ],
    mainTakeaways: [
      '<b>Relationships and character</b> matter more than wealth, status, or titles. Genuine success is built on integrity, likeability, and deep connections.',
      '<b>Manage your mind</b> — thoughts become feelings, and feelings become actions. Watch for negative loops and reframe them deliberately.',
      '<b>Protect your foundations</b>: health, sleep, time, and boundaries come first. Everything else rests on them.',
      '<b>Do the opposite of the crowd</b> when it matters. If the crowd gets average results, be willing to stand out and be uncomfortable.',
      'Live with <b>purpose and gratitude</b> — count what you have, practice daily gratitude, connect to something bigger than yourself, and plan the legacy you want to leave.',
    ],
    importantConcepts: [
      '<b>The Serenity Test</b> — a framework for distinguishing what you can influence from what you cannot, saving energy for what actually matters.',
      '<b>Emotional intelligence (EQ)</b> — self-awareness, empathy, impulse control, and social skill. More predictive of success than IQ.',
      '<b>Parkinson\'s Law and Pomodoro</b> for focus — work expands to fill time; short bursts with breaks produce better results.',
      'The "Will I regret saying no?" test as a filter for every opportunity — if the answer is no, say yes. If it is not a hell yes, say no.',
      '<b>Your tribe and circle of influence</b> — you become the average of the five people you spend the most time with. Curate your circle.',
    ],
    practicalLessons: [
      '<b>Start each day well</b> — wake earlier, eat well, plan the day, and arrive calm rather than rushed.',
      '<b>Pause before reacting and before pressing "Send."</b> Impulsive messages and reactions damage relationships and reputations.',
      'Keep a <b>gratitude journal</b> — end each day by writing one thing that gave your day meaning.',
      '<b>Set boundaries</b> — get home on time, take full annual leave, disconnect from devices, and say no to what does not serve you.',
      'Practice <b>daily deliberate learning</b> — ask every evening: "What did I learn today?" Stay a student of life.',
    ],
    bestQuotes: [
      { text: 'Success is not about what others think of you — it is about being true to the person you want to become.', cite: 'Nigel Cumberland' },
      { text: 'Focus on what you can control and accept what you cannot. That single distinction changes everything.', cite: 'Nigel Cumberland' },
      { text: 'You are the sum of your habits, your tribe, and the thoughts you choose to keep.', cite: 'Nigel Cumberland' },
      { text: 'How you start the day determines how you perform. Begin well and the rest follows.', cite: 'Nigel Cumberland' },
      { text: 'The regret you fear from trying is nothing compared to the regret of never having tried at all.', cite: 'Nigel Cumberland' },
    ],
    finalTakeaway: '100 Things Successful People Do is not a promise of overnight success — it is a practical toolkit of habits that compound over a lifetime. The book distills decades of coaching wisdom into actionable daily practices: manage your mind, protect your health, build genuine relationships, persist through failure, and define success on your own terms. The core message is simple but profound: a successful life is built one intentional choice at a time.'
  },
  {
    id: 'vivekachudamani',
    title: 'Vivekachudamani',
    author: 'Adi Shankaracharya',
    category: 'Advaita',
    color: '#2a1f1a',
    accent: '#d4a574',
    readingTime: 5,
    pages: 520,
    year: 800,
    rating: 4.9,
    summary: 'The Crest-Jewel of Discrimination — a systematic guide to discerning the Real Self from the transient, leading to liberation.',
    keyIdeas: [
      '<b>Discrimination (viveka)</b> between the Real and the unreal is the sole path to liberation. The Atman alone is real; the body, mind, and world are appearances.',
      'The <b>Atman</b> is the witness-consciousness — self-luminous, unchanging, and ever-free. It is <b>not the body, mind, or intellect</b>, but the silent witness of all.',
      'The five sheaths (<b>pancha-koshas</b>): physical, vital, mental, intellectual, and bliss — all are not-Self (anatma). Transcend each to realize the Self.',
      '<b>Adhyasa (superimposition)</b> — mistaking the body-mind for the Self is like seeing a rope as a snake. Knowledge removes the error.',
      '<b>Four qualifications (sadhana chatushtaya)</b> are prerequisites: discrimination, dispassion, six inner treasures (calmness, self-control, etc.), and intense longing for liberation.',
      '<b>Neti, neti</b> ("not this, not this") — negate all that is not the Atman. By stripping away every identification, the pure Self is directly realized.',
    ],
    mainTakeaways: [
      'The Self (<b>Atman</b>) is identical with ultimate Reality (<b>Brahman</b>) — this is the non-dual truth of Advaita.',
      'Bondage is caused by <b>ignorance (avidya)</b>; knowledge (<b>jnana</b>) alone removes it. No amount of ritual or action can substitute for direct self-knowledge.',
      'The body-mind is a <b>superimposition</b> on the Self — like a mirage of water on sand. Withdraw identification from it.',
      'A qualified student with <b>discrimination and dispassion</b> can attain liberation in this very life (jivanmukti).',
      'The world is an <b>appearance (mithya)</b> — it has relative reality but no ultimate reality independent of Brahman.',
    ],
    importantConcepts: [
      '<b>Brahman-Atman identity:</b> The individual self and the universal Self are one and the same non-dual Reality.',
      '<b>Maya:</b> The inscrutable power that veils Brahman and projects the world-appearance.',
      '<b>Adhyasa (superimposition):</b> The natural tendency to mistake the non-Self (body, mind) for the Self.',
      '<b>Pancha-koshas:</b> Annamaya (food), Pranamaya (vital), Manomaya (mental), Vijnanamaya (intellectual), Anandamaya (bliss) — the five sheaths to be transcended.',
      '<b>Avidya (ignorance):</b> Not mere absence of knowledge, but a positive beginningless entity that veils the Self.',
    ],
    practicalLessons: [
      'Practice daily <b>self-enquiry</b>: repeatedly ask "Who am I?" and trace the sense of "I" back to its source.',
      'Use <b>neti, neti</b> in meditation — mentally negate each identification: "I am not the body, not the mind, not the intellect."',
      'Cultivate <b>dispassion (vairagya)</b> by reflecting on the impermanence of all objects and experiences.',
      'Study the <b>mahavakyas</b> (great sayings): "Tat tvam asi" (That thou art), "Aham Brahmasmi" (I am Brahman).',
      'Seek a <b>qualified teacher (guru)</b> — the path of knowledge requires guidance from one who has realized.',
    ],
    bestQuotes: [
      { text: 'Brahman alone is real; the world is an appearance; the individual self is none other than Brahman.', cite: 'Vivekachudamani' },
      { text: 'The Atman is self-luminous, illumining the mind, the senses, and the body. It is the witness of all modifications.', cite: 'Vivekachudamani' },
      { text: 'The ignorant see the rope and call it a snake; the wise, through discrimination, see only the rope. So is the world to the Self-realized.', cite: 'Vivekachudamani' },
      { text: 'The five sheaths are not the Self. The Self is the witness of the five sheaths, ever free, ever pure.', cite: 'Vivekachudamani' },
      { text: 'By the sword of discrimination, cut the knot of ignorance. Realize the Self and be free.', cite: 'Vivekachudamani' },
    ],
    finalTakeaway: 'Vivekachudamani is a masterwork of Advaita Vedanta that systematically guides the seeker from ignorance to liberation. Its central teaching is that the Self (Atman) is the only Reality — everything else is an appearance. By developing discrimination, cultivating dispassion, and negating all false identifications, one can directly realize the non-dual truth and live in abiding freedom.'
  },
  {
    id: 'atma-bodha',
    title: 'Atma Bodha',
    author: 'Adi Shankaracharya',
    category: 'Advaita',
    color: '#2a1f1a',
    accent: '#d4a574',
    readingTime: 3,
    pages: 68,
    year: 800,
    rating: 4.8,
    summary: 'Self-Knowledge — a concise yet profound exposition of the nature of the Self and the path to liberation.',
    keyIdeas: [
      '<b>The Atman is eternal and self-luminous</b> — unborn, undying, and unchanging. It is the inner witness that illumines the body, mind, and senses.',
      '<b>You are not the body</b> — the body is a garment of matter, born, changing, and decaying. The Atman merely inhabits it as the observer.',
      '<b>The five sheaths (pancha-koshas)</b> veil the Self: the physical, vital, mental, intellectual, and bliss sheaths. Each is not-Self (anatma); the Self is the one who witnesses all five.',
      '<b>Ignorance (avidya) creates bondage</b> — mistaking the non-Self for the Self is the root cause of all suffering. Knowledge of the Atman destroys this ignorance, just as sunlight destroys darkness.',
      '<b>Self-knowledge is the only means to liberation</b> — through discrimination and enquiry, the seeker realizes "I am Brahman," and this knowledge alone frees one from the cycle of birth and death.',
      '<b>Bondage and liberation are states of mind</b> — the Atman is ever-free. It appears bound only because of ignorance, and appears liberated when ignorance is removed.',
    ],
    mainTakeaways: [
      'The <b>Self (Atman) is distinct from the body-mind</b> — it is pure, eternal, blissful consciousness, never born and never dying.',
      '<b>All identification with the five sheaths</b> must be transcended through discrimination — "I am not this, I am not this."',
      '<b>Knowledge, not action, removes bondage</b> — no ritual or deed can destroy the ignorance that veils the Self; only direct self-knowledge can.',
      '<b>Liberation is the realization of your true nature</b> — the Atman was never bound; realizing this directly is moksha.',
      '<b>Meditation and self-enquiry</b> are the practical disciplines that lead from intellectual understanding to direct realization.',
    ],
    importantConcepts: [
      '<b>Atman:</b> The innermost Self — witness-consciousness, self-evident, and identical with Brahman.',
      '<b>Pancha-koshas (five sheaths):</b> Annamaya (food/physical), Pranamaya (vital air), Manomaya (mind), Vijnanamaya (intellect), Anandamaya (bliss) — layers of the non-Self enveloping the Atman.',
      '<b>Tri-sharira (three bodies):</b> Gross body (sthula), subtle body (sukshma), and causal body (karana) — the three vehicles of experience that the Self transcends.',
      '<b>Avidya (ignorance):</b> The primal veil that hides the Self and projects the world-appearance.',
      '<b>Viveka (discrimination):</b> The intellectual discipline of distinguishing the Real from the unreal, the eternal from the transient.',
      '<b>Sakshi (witness):</b> The Atman as the ever-detached observer of all mental and physical activity.',
    ],
    practicalLessons: [
      'Practice daily <b>self-enquiry</b>: "Who am I?" — trace the sense of "I" beyond the body, senses, and mind to the witnessing awareness.',
      'Meditate on the <b>"not this, not this"</b> method, mentally renouncing each sheath: not the body, not the breath, not the mind, not the intellect.',
      'Cultivate <b>dispassion (vairagya)</b> toward the transient — reflect that all objects and experiences are perishable.',
      'Contemplate the <b>mahavakya</b> "Aham Brahmasmi" (I am Brahman) until it moves from thought to direct experience.',
      'Study under a <b>qualified teacher</b> and live a disciplined life of sattva — calmness, clarity, and truthfulness purify the mind for self-knowledge.',
    ],
    bestQuotes: [
      { text: 'The Atman is self-luminous, like the light of a lamp. It illumines the body, the senses, the mind, and the intellect.', cite: 'Atma Bodha' },
      { text: 'The Self is never born and never dies. Unborn, eternal, immortal — it is not destroyed even when the body is destroyed.', cite: 'Atma Bodha' },
      { text: 'Just as the sun\'s light reveals the world, the Atman reveals all things, but itself is revealed by nothing else.', cite: 'Atma Bodha' },
      { text: 'By the awakening of Self-knowledge, all ignorance is destroyed, just as darkness is dispelled by the rising sun.', cite: 'Atma Bodha' },
      { text: 'Knowledge alone — not actions, not rites, not rituals — is the direct cause of liberation.', cite: 'Atma Bodha' },
    ],
    finalTakeaway: 'Atma Bodha is a beautifully compact guide to self-knowledge. In sixty-eight verses, Shankaracharya walks the seeker from the gross body inward through the five sheaths, negating each as not-Self, until the luminous witness — the Atman — is directly revealed. Its message is radical and liberating: you are not what you think you are. You are the eternal, free, blissful consciousness that was never bound. Knowledge of this alone is liberation.',
    translation: {
      translator: 'Swami Chinmayananda',
      publisher: 'Chinmaya Mission, Mumbai',
      verses: [
        'I am composing the ATMA-BODHA, this treatise of the Knowledge of the Self, for those who have purified themselves by austerities and are peaceful in heart and calm, who are free from cravings and are desirous of liberation.',
        'Just as the fire is the direct cause for cooking, so without Knowledge no emancipation can be had. Compared with all other forms of discipline Knowledge of the Self is the one direct means for liberation.',
        'Action cannot destroy ignorance, for it is not in conflict with or opposed to ignorance. Knowledge does verily destroy ignorance as light destroys deep darkness.',
        'The Soul appears to be finite because of ignorance. When ignorance is destroyed the Self which does not admit of any multiplicity truly reveals itself by itself: like the Sun when the clouds pass away.',
        'Constant practice of knowledge purifies the Self (Jivatman), stained by ignorance and then disappears itself – as the powder of the Kataka-nut settles down after it has cleansed the muddy water.',
        'The world which is full of attachments, aversions, etc., is like a dream. It appears to be real, as long as it continues but appears to be unreal when one is awake (i.e., when true wisdom dawns).',
        'The Jagat appears to be true (Satyam) so long as Brahman, the substratum, the basis of all this creation, is not realised. It is like the illusion of silver in the mother-of pearl.',
        'Like bubbles in the water, the worlds rise, exist and dissolve in the Supreme Self, which is the material cause and the prop of everything.',
        'All the manifested world of things and beings are projected by imagination upon the substratum which is the Eternal All-pervading Vishnu, whose nature is Existence-Intelligence; just as the different ornaments are all made out of the same gold.',
        'The All-pervading Akasa appears to be diverse on account of its association with various conditionings (Upadhis) which are different from each other. Space becomes one on the destruction of these limiting adjuncts: So also the Omnipresent Truth appears to be diverse on account of Its association with the various Upadhis and becomes one on the destruction of these Upadhis.',
        'Because of Its association with different conditionings (Upadhis) such ideas as caste, colour and position are super-imposed upon the Atman, as flavour, colour, etc., are super-imposed on water.',
        'Determined for each individual by his own past actions and made up of the Five elements – that have gone through the process of "five-fold self-division and mutual combination" (Pancheekarana) – are born the gross-body, the medium through which pleasure and pain are experienced, the tent-of-experiences.',
        'The five Pranas, the ten organs and the Manas and the Buddhi, formed from the rudimentary elements (Tanmatras) before their "five-fold division and mutual combination with one another" (Pancheekarana) and this is the subtle body, the instruments-of-experience (of the individual).',
        'Avidya which is indescribable and beginningless is the Causal Body. Know for certain that the Atman is other than these three conditioning bodies (Upadhis).',
        'In its identification with the five-sheaths the Immaculate Atman appears to have borrowed their qualities upon Itself; as in the case of a crystal which appears to gather unto itself colour of its vicinity (blue cloth, etc.,).',
        'Through discriminative self-analysis and logical thinking one should separate the Pure self within from the sheaths as one separates the rice from the husk, bran, etc., that are covering it. (Katha Upanishad 2.3.17, Svetasvatara Upanishad 1.12-1.16, BG 6.5, Vivekachudamani Verse 153)',
        'The Atman does not shine in everything although He is All-pervading. He is manifest only in the inner equipment, the intellect (Buddhi): just as the reflection in a clean mirror.',
        'One should understand that the Atman is always like the King, distinct from the body, senses, mind and intellect, all of which constitute the matter (Prakriti); and is the witness of their functions.',
        'The moon appears to be running when the clouds move in the sky. Likewise to the non-discriminating person the Atman appears to be active when It is observed through the functions of the sense-organs.',
        'Depending upon the energy of vitality of Consciousness (Atma Chaitanya) the body, senses, mind and intellect engage themselves in their respective activities, just as men work depending upon the light of the Sun.',
        'Fools, because they lack in their powers of discrimination superimpose on the Atman, the Absolute-Existence-Knowledge (Sat-Chit), all the varied functions of the body and the senses, just as they attribute blue colour and the like to the sky.',
        'The tremblings that belong to the waters are attributed through ignorance to the reflected moon dancing on it: likewise agency of action, of enjoyment and of other limitations (which really belong to the mind) are delusively understood as the nature of the Self (Atman).',
        'Attachment, desire, pleasure, pain, etc., are perceived to exist so long as Buddhi or mind functions. They are not perceived in deep sleep when the mind ceases to exist. Therefore they belong to the mind alone and not to the Atman.',
        'Just as luminosity is the nature of the Sun, coolness of water and heat of fire, so too the nature of the Atman is Eternity, Purity, Reality, Consciousness and Bliss.',
        'By the indiscriminate blending of the two – the Existence-Knowledge-aspect of the Self and the thought-wave of the intellect – there arises the notion of "I know".',
        'Atman never does anything and the intellect of its own accord has no capacity to experience "I know". But the individuality in us delusorily thinks he is himself the seer and the knower.',
        'Just as the person who regards a rope as a snake is overcome by fear, so also one considering oneself as the ego (Jiva) is overcome by fear. The ego-centric individuality in us regains fearlessness by realising that It is not a Jiva but is Itself the Supreme Soul.',
        'Just as a lamp illumines a jar or a pot, so also the Atman illumines the mind and the sense organs, etc. These material-objects by themselves cannot illumine themselves because they are inert.',
        'A lighted-lamp does not need another lamp to illumine its light. So too, Atman which is Knowledge itself needs no other knowledge to know it.',
        'By a process of negation of the conditionings (Upadhis) through the help of the scriptural statement "It is not this, It is not this", the oneness of the individual soul and the Supreme Soul, as indicated by the great Mahavakyas, has to be realised.',
        'The body, etc., up to the "Causal Body" – Ignorance – which are objects perceived, are as perishable as bubbles. Realise through discrimination that I am the "Pure Brahman" ever completely separate from all these.',
        'I am other than the body and so I am free from changes such as birth, wrinkling, senility, death, etc. I have nothing to do with the sense objects such as sound and taste, for I am without the sense-organs.',
        'I am other than the mind and hence, I am free from sorrow, attachment, malice and fear, for "HE is without breath and without mind, Pure, etc.", is the Commandment of the great scripture, the Upanishads.',
        'I am without attributes and actions; Eternal (Nitya) without any desire and thought (Nirvikalpa), without any dirt (Niranjana), without any change (Nirvikara), without form (Nirakara), ever-liberated (Nitya Mukta) ever-pure (Nirmala).',
        'Like the space I fill all things within and without. Changeless and the same in all, at all times I am pure, unattached, stainless and motionless.',
        'I am verily that Supreme Brahman alone which is Eternal, Pure and Free, One, indivisible and non-dual and of the nature of Changeless-Knowledge-Infinite.',
        'The impression "I am Brahman" thus created by constant practice destroys ignorance and the agitation caused by it, just as medicine or Rasayana destroys disease.',
        'Sitting in a solitary place, freeing the mind from desires and controlling the senses, meditate with unswerving attention on the Atman which is One without-a-second.',
        'The wise one should intelligently merge the entire world-of-objects in the Atman alone and constantly think of the Self ever as contaminated by anything as the sky.',
        'He who has realised the Supreme, discards all his identification with the objects of names and forms. (Thereafter) he dwells as an embodiment of the Infinite Consciousness and Bliss. He becomes the Self.',
        'There are no distinctions such as "Knower", the "Knowledge" and the "Object of Knowledge" in the Supreme Self. On account of Its being of the nature of endless Bliss, It does not admit of such distinctions within Itself. It alone shines by Itself.',
        'When this the lower and the higher aspects of the Self are well churned together, the fire of knowledge is born from it, which in its mighty conflagration shall burn down all the fuel of ignorance in us.',
        'The Lord of the early dawn (Aruna) himself has already looted away the thick darkness, when soon the sun rises. The Divine Consciousness of the Self rises when the right knowledge has already killed the darkness in the bosom.',
        'Atman is an ever-present Reality. Yet, because of ignorance it is not realised. On the destruction of ignorance Atman is realised. It is like the missing ornament of one\'s neck.',
        'Brahman appears to be a "Jiva" because of ignorance, just as a post appears to be a ghost. The ego-centric-individuality is destroyed when the real nature of the "Jiva" is realised as the Self.',
        'The ignorance characterised by the notions "I" and "Mine" is destroyed by the knowledge produced by the realisation of the true nature of the Self, just as right information removes the wrong notion about the directions.',
        'The Yogi of perfect realisation and enlightenment sees through his "eye of wisdom" (Gyana Chakshush) the entire universe in his own Self and regards everything else as his own Self and nothing else.',
        'Nothing whatever exists other than the Atman: the tangible universe is verily Atman. As pots and jars are verily made of clay and cannot be said to be anything but clay, so too, to the enlightened soul and that is perceived is the Self.',
        'A liberated one, endowed with Self-knowledge, gives up the traits of his previously explained equipments (Upadhis) and because of his nature of Sat-chit-ananda, he verily becomes Brahman like (the worm that grows to be) a wasp.',
        'After crossing the ocean of delusion and killing the monsters of likes and dislikes, the Yogi who is united with peace dwells in the glory of his own realised Self – as an Atmaram.',
        'The self-abiding Jivan Mukta, relinquishing all his attachments to the illusory external happiness and satisfied with the bliss derived from the Atman, shines inwardly like a lamp placed inside a jar.',
        'Though he lives in the conditionings (Upadhis), he, the contemplative one, remains ever unconcerned with anything or he may move about like the wind, perfectly unattached.',
        'On the destruction of the Upadhis, the contemplative one is totally absorbed in "Vishnu", the All-pervading Spirit, like water into water, space into space and light into light.',
        'Realise That to be Brahman, the attainment of which leaves nothing more to be attained, the blessedness of which leaves no other blessing to be desired and the knowledge of which leaves nothing more to be known.',
        'Realise that to be Brahman which, when seen, leaves nothing more to be seen, which having become one is not born again in this world and which, when knowing leaves nothing else to be known.',
        'Realise that to be Brahman which is Existence-Knowledge-Bliss-Absolute, which is Non-dual, Infinite, Eternal and One and which fills all the quarters – above and below and all that exists between.',
        'Realise that to be Brahman which is Non-dual, Indivisible, One and Blissful and which is indicated in Vedanta as the Immutable Substratum, realised after the negation of all tangible objects.',
        'Deities like Brahma and others taste only a particle, of the unlimited Bliss of Brahman and enjoy in proportion their share of that particle.',
        'All objects are pervaded by Brahman. All actions are possible because of Brahman: therefore Brahman permeates everything as butter permeates milk.',
        'Realise that to be Brahman which is neither subtle nor gross: neither short nor long: without birth or change: without form, qualities, colour and name.',
        'That by the light of which the luminous, orbs like the Sun and the Moon are illuminated, but which is not illumined by their light, realise that to be Brahman.',
        'Pervading the entire universe outwardly and inwardly the Supreme Brahman shines of Itself like the fire that permeates a red-hot iron-ball and glows by itself.',
        'Brahman is other than this, the universe. There exists nothing that is not Brahman. If any object other than Brahman appears to exist, it is unreal like the mirage.',
        'All that is perceived, or heard, is Brahman and nothing else. Attaining the knowledge of the Reality, one sees the Universe as the non-dual Brahman, Existence-Knowledge-Bliss-Absolute.',
        'Though Atman is Pure Consciousness and ever-present everywhere, yet It is perceived by the eye-of-wisdom alone: but one whose vision is obscured by ignorance he does not see It; as the blind do not see the resplendent Sun.',
        'The "Jiva" free from impurities, being heated in the fire of knowledge kindled by hearing and so on, shines of itself like gold.',
        'The Atman, the Sun of Knowledge that rises in the sky of the heart, destroys the darkness of the ignorance, pervades and sustains all and shines and makes everything to shine.',
        'He who renouncing all activities, who is free of all the limitations of time, space and direction, worships his own Atman which is present everywhere, which is the destroyer of heat and cold, which is Bliss-Eternal and stainless, becomes All-knowing and All-pervading and attains thereafter Immortality.',
      ]
    }
  },
  {
    id: 'tattva-bodha',
    title: 'Tattva Bodha',
    author: 'Adi Shankaracharya',
    category: 'Advaita',
    color: '#2a1f1a',
    accent: '#d4a574',
    readingTime: 2,
    pages: 57,
    year: 800,
    rating: 4.7,
    summary: 'Knowledge of Truth — a primer on the fundamental categories of Advaita Vedanta for the aspiring seeker.',
    status: 'coming-soon',
    keyIdeas: [],
    mainTakeaways: [],
    importantConcepts: [],
    practicalLessons: [],
    bestQuotes: [],
    finalTakeaway: ''
  },
  {
    id: 'drig-drishya-viveka',
    title: 'Drig-Drishya Viveka',
    author: 'Adi Shankaracharya',
    category: 'Advaita',
    color: '#2a1f1a',
    accent: '#d4a574',
    readingTime: 2,
    pages: 42,
    year: 800,
    rating: 4.7,
    summary: 'The Seer and the Seen — a short but powerful text on discriminating the perceiver from the perceived.',
    status: 'coming-soon',
    keyIdeas: [],
    mainTakeaways: [],
    importantConcepts: [],
    practicalLessons: [],
    bestQuotes: [],
    finalTakeaway: ''
  },
  {
    id: 'aparokshanubhuti',
    title: 'Aparokshanubhuti',
    author: 'Adi Shankaracharya',
    category: 'Advaita',
    color: '#2a1f1a',
    accent: '#d4a574',
    readingTime: 2,
    pages: 78,
    year: 800,
    rating: 4.8,
    summary: 'Direct Self-Realization — a practical guide to experiencing the non-dual Self directly, beyond intellectual understanding.',
    status: 'coming-soon',
    keyIdeas: [],
    mainTakeaways: [],
    importantConcepts: [],
    practicalLessons: [],
    bestQuotes: [],
    finalTakeaway: ''
  }
];

/* ----- Added dates (recently added first) ----- */
const ADDED_DATES = {
  'vivekachudamani': '2026-08-26',
  'atma-bodha': '2026-08-26',
  'tattva-bodha': '2026-08-26',
  'drig-drishya-viveka': '2026-08-26',
  'aparokshanubhuti': '2026-08-26',
  '100-things-successful-people-do': '2026-08-26',
  'atomic-habits': '2026-08-22',
  'deep-work': '2026-08-20',
  'the-psychology-of-money': '2026-08-18',
  'grit': '2026-08-16',
  'essentialism': '2026-08-14',
  'mans-search-for-meaning': '2026-08-12',
  'meditations': '2026-08-10',
  'sapiens': '2026-08-08',
  'start-with-why': '2026-08-06',
  'thinking-fast-and-slow': '2026-08-04',
  'the-power-of-now': '2026-08-02',
  'the-alchemist': '2026-07-31',
  'the-4-hour-workweek': '2026-07-28',
};
BOOKS.forEach(b => { b.added = ADDED_DATES[b.id] || '2026-01-01'; });
BOOKS.sort((a, b) => new Date(b.added) - new Date(a.added));

/* ----- Category metadata ----- */
const CATEGORY_META = {
  Psychology: 'Understand the mind, habits, and behavior — from cognitive bias to lasting change.',
  Business: 'Ideas and frameworks for building, leading, and thinking about work and money.',
  Productivity: 'Do less, better. Focus, essentialism, and the science of getting things done.',
  Philosophy: 'Timeless questions about meaning, virtue, and the art of living well.',
  Science: 'Big ideas from history, biology, and the frontiers of human knowledge.',
  Advaita: 'The non-dual wisdom of Adi Shankaracharya — the path of self-realization.',
};

/* ----- State ----- */
const state = {
  books: BOOKS,
  currentView: 'grid',
  activeCategory: 'all',
  searchQuery: '',
  currentBook: null,
  summaryOpen: false,
  previousRoute: '#/',
};

/* ----- DOM refs ----- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const bookGrid = $('#bookGrid');
const searchInput = $('#searchInput');
const searchClear = $('#searchClear');
const catLinks = $$('.cat-link');
const viewBtns = $$('.view-btn');
const resultCount = $('#resultCount');
const emptyState = $('#emptyState');
const clearFilters = $('#clearFilters');
const toast = $('#toast');
const toTop = $('#toTop');
const summaryView = $('#summaryView');
const summaryScrim = $('#summaryScrim');
const summaryBack = $('#summaryBack');
const summaryClose = $('#summaryClose');
const summaryCover = $('#summaryCover');
const summaryTitle = $('#summaryTitle');
const summaryAuthor = $('#summaryAuthor');
const summaryCategory = $('#summaryCategory');
const summaryBlurb = $('#summaryBlurb');
const factPages = $('#factPages');
const factTime = $('#factTime');
const factYear = $('#factYear');
const factRating = $('#factRating');
const summaryAnchors = $('#summaryAnchors');
const summarySections = $('#summarySections');
const summaryProgress = $('#summaryProgress');
const statBooks = $('#statBooks');

/* ----- Toast ----- */
let toastTimer;

function coverError(img, fallbackText) {
  const base = `images/covers/${img.dataset.folder}/${img.dataset.bookId}`;
  if (!img.dataset.triedPng) {
    img.dataset.triedPng = '1';
    img.src = `${base}.png`;
    return;
  }
  img.remove();
  if (fallbackText && img.parentElement) img.parentElement.textContent = fallbackText;
}

function mountCover(container, book, folder, fallbackText) {
  container.textContent = '';
  container.style.background = book.color;
  const img = document.createElement('img');
  img.className = 'cover-img';
  img.alt = '';
  img.dataset.bookId = book.id;
  img.dataset.folder = folder;
  img.onerror = () => coverError(img, fallbackText);
  img.src = `images/covers/${folder}/${book.id}.jpg`;
  container.appendChild(img);
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

/* ----- Render ----- */
function renderBookCard(book) {
  const isComingSoon = book.status === 'coming-soon';
  const card = document.createElement('div');
  card.className = 'book-card' + (isComingSoon ? ' card-coming-soon' : '');
  card.dataset.id = book.id;
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', isComingSoon ? `Summary of ${book.title} coming soon` : `Read summary of ${book.title} by ${book.author}`);

  const initials = book.title.split(' ').map(w => w[0]).join('').slice(0, 3).toUpperCase();
  const comingSoon = isComingSoon
    ? `<span class="coming-soon-badge" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"></circle><polyline points="12 7 12 12 15 14"></polyline></svg> Coming soon</span>`
    : '';

  card.innerHTML = `
    <div class="book-cover" style="background:${book.color}">
      <span class="cover-initials">${initials}</span>
        <img src="images/covers/card/${book.id}.jpg" alt="" class="cover-img" data-book-id="${book.id}" data-folder="card" loading="lazy" onerror="coverError(this)">
      ${comingSoon}
    </div>
    <div class="book-body">
      <span class="book-category">${book.category}</span>
      <h3 class="book-title">${book.title}</h3>
      <p class="book-author">${book.author}</p>
      <p class="book-summary">${book.summary}</p>
      <div class="book-meta">
        <span class="chip">${book.readingTime} min</span>
        <span class="read-time">${book.pages} pages</span>
      </div>
    </div>
  `;

  card.addEventListener('click', () => openSummary(book.id));
  card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openSummary(book.id); } });

  return card;
}

function renderLibrary() {
  const filtered = state.books.filter(book => {
    const matchCategory = state.activeCategory === 'all' || book.category === state.activeCategory;
    const q = state.searchQuery.toLowerCase();
    const matchSearch = !q || book.title.toLowerCase().includes(q) || book.author.toLowerCase().includes(q) || book.summary.toLowerCase().includes(q);
    return matchCategory && matchSearch;
  });

  resultCount.textContent = `${filtered.length} title${filtered.length !== 1 ? 's' : ''}`;

  bookGrid.innerHTML = '';
  bookGrid.className = 'book-grid' + (state.currentView === 'list' ? ' list-view' : '');

  if (filtered.length === 0) {
    emptyState.hidden = false;
    return;
  }
  emptyState.hidden = true;

  const frag = document.createDocumentFragment();
  filtered.forEach(book => frag.appendChild(renderBookCard(book)));
  bookGrid.appendChild(frag);
}

/* ----- Summary View ----- */
function openSummary(id) {
  const book = state.books.find(b => b.id === id);
  if (!book) return;
  state.currentBook = book;
  state.summaryOpen = true;
  state.previousRoute = currentHash().startsWith('#/book/') ? '#/' : currentHash();

  const initials = book.title.split(' ').map(w => w[0]).join('').slice(0, 3).toUpperCase();

  summaryCover.textContent = '';
  summaryCover.style.background = book.color;
  mountCover(summaryCover, book, 'summary', initials);
  summaryTitle.textContent = book.title;
  summaryAuthor.textContent = book.author;
  summaryCategory.textContent = book.category;
  summaryBlurb.textContent = book.summary;
  factPages.textContent = book.pages;
  factTime.textContent = book.readingTime;
  factYear.textContent = book.year;
  factRating.textContent = book.rating.toFixed(1);

  if (book.status === 'coming-soon') {
    summaryAnchors.innerHTML = '';
    summarySections.innerHTML = `
      <div class="coming-soon-panel">
        <div class="coming-soon-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><polyline points="12 7 12 12 15 14"></polyline></svg>
        </div>
        <h2>Summary coming soon</h2>
        <p>The full summary of <strong>${book.title}</strong> is being prepared and will appear here shortly. Check back soon.</p>
      </div>
    `;
  } else {
    // Build anchor nav
    const sections = [
      { id: 'key-ideas', label: 'Key Ideas', icon: '✦' },
      { id: 'takeaways', label: 'Takeaways', icon: '◆' },
      { id: 'concepts', label: 'Concepts', icon: '●' },
      { id: 'lessons', label: 'Lessons', icon: '▸' },
      { id: 'quotes', label: 'Quotes', icon: '❝' },
    ];
    if (book.translation) sections.push({ id: 'translation', label: 'Translation', icon: '◈' });
    sections.push({ id: 'final', label: 'Final', icon: '★' });

  summaryAnchors.innerHTML = sections.map(s =>
    `<a href="#summary-${s.id}" data-section="${s.id}">${s.label}</a>`
  ).join('');

  // Build section content
  const sectionHTML = `
    <section id="summary-key-ideas">
      <div class="section-card">
        <h2><span class="section-icon">✦</span> Key Ideas</h2>
        <ul>${book.keyIdeas.map(idea => `<li>${idea}</li>`).join('')}</ul>
      </div>
    </section>
    <section id="summary-takeaways">
      <div class="section-card">
        <h2><span class="section-icon">◆</span> Main Takeaways</h2>
        <ul>${book.mainTakeaways.map(t => `<li>${t}</li>`).join('')}</ul>
      </div>
    </section>
    <section id="summary-concepts">
      <div class="section-card">
        <h2><span class="section-icon">●</span> Important Concepts</h2>
        <ul>${book.importantConcepts.map(c => `<li>${c}</li>`).join('')}</ul>
      </div>
    </section>
    <section id="summary-lessons">
      <div class="section-card">
        <h2><span class="section-icon">▸</span> Practical Lessons</h2>
        <ul>${book.practicalLessons.map(l => `<li>${l}</li>`).join('')}</ul>
      </div>
    </section>
    <section id="summary-quotes">
      <div class="section-card">
        <h2><span class="section-icon">❝</span> Best Quotes</h2>
        ${book.bestQuotes.map(q => `
          <div class="quote-block">
            <blockquote>${q.text}</blockquote>
            <cite>— ${q.cite}</cite>
          </div>
        `).join('')}
      </div>
    </section>
    ${book.translation ? `
    <section id="summary-translation">
      <div class="section-card translation-card" id="translationCard">
        <h2><span class="section-icon">◈</span> Full Translation</h2>
        <p class="translation-attrib">Translated by <strong>${book.translation.translator}</strong> · Published by ${book.translation.publisher}</p>
        <ol class="translation-verses" id="translationVerses">
          ${book.translation.verses.map((v, i) => `<li><span class="verse-num">${i + 1}</span><span class="verse-text">${v}</span></li>`).join('')}
        </ol>
        <button class="translation-toggle" id="translationToggle" type="button" aria-expanded="false">
          <span class="toggle-label">Show full translation</span>
          <span class="toggle-count">(${book.translation.verses.length} verses)</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
      </div>
    </section>
    ` : ''}
    <section id="summary-final">
      <div class="final-block">
        <h2>★ Final Takeaway</h2>
        <p>${book.finalTakeaway}</p>
      </div>
    </section>
  `;
  summarySections.innerHTML = sectionHTML;

  // Anchor click tracking
  $$('.summary-anchors a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.getElementById(a.getAttribute('href').slice(1));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Translation toggle
  const translationToggle = document.getElementById('translationToggle');
  if (translationToggle) {
    const card = document.getElementById('translationCard');
    const label = translationToggle.querySelector('.toggle-label');
    translationToggle.addEventListener('click', () => {
      const expanded = card.classList.toggle('expanded');
      label.textContent = expanded ? 'Hide translation' : 'Show full translation';
      translationToggle.setAttribute('aria-expanded', String(expanded));
    });
  }
  }

  // Show
  document.body.style.overflow = 'hidden';
  summaryView.scrollTop = 0;
  summaryScrim.hidden = false;
  summaryView.classList.add('open');
  requestAnimationFrame(() => {
    summaryScrim.classList.add('open');
    summaryView.focus();
  });

  updateSummaryProgress();
  setHash('#/book/' + encodeURIComponent(id));
}

function closeSummary(updateHash) {
  if (updateHash === undefined) updateHash = true;
  state.summaryOpen = false;
  summaryView.classList.remove('open');
  summaryScrim.classList.remove('open');
  summaryScrim.hidden = true;
  document.body.style.overflow = '';
  state.currentBook = null;
  summaryView.scrollTop = 0;
  if (updateHash && currentHash().startsWith('#/book/')) {
    setHash(state.previousRoute || '#/');
  }
}

function updateSummaryProgress() {
  const el = summaryView;
  const scrollTop = el.scrollTop;
  const scrollHeight = el.scrollHeight - el.clientHeight;
  const pct = scrollHeight > 0 ? Math.min(scrollTop / scrollHeight * 100, 100) : 0;
  summaryProgress.style.width = pct + '%';

  // Active anchor
  const anchors = $$('.summary-anchors a');
  let activeIdx = 0;
  anchors.forEach((a, i) => {
    const section = document.getElementById(a.getAttribute('href').slice(1));
    if (section && section.getBoundingClientRect().top - 100 < 0) activeIdx = i;
  });
  anchors.forEach((a, i) => a.classList.toggle('active', i === activeIdx));
}

/* ----- Search ----- */
let searchDebounce;

function handleSearch() {
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(() => {
    state.searchQuery = searchInput.value.trim();
    searchClear.hidden = !state.searchQuery;
    renderLibrary();
  }, 200);
}

searchInput.addEventListener('input', handleSearch);
searchClear.addEventListener('click', () => {
  searchInput.value = '';
  searchClear.hidden = true;
  state.searchQuery = '';
  renderLibrary();
  searchInput.focus();
});

/* ----- Routing ----- */
function currentHash() { return location.hash || '#/'; }

function setHash(h) {
  if (location.hash !== h) location.hash = h;
}

function updateCatLinksActive() {
  $$('.cat-link').forEach(b => b.classList.toggle('active', b.dataset.filter === state.activeCategory));
}

function showHomeView() {
  state.activeCategory = 'all';
  updateCatLinksActive();
  const hero = document.querySelector('.hero');
  if (hero) hero.style.display = '';
  document.getElementById('categoryBanner').hidden = true;
  const title = document.getElementById('libraryTitle');
  title.textContent = 'The library';
  title.hidden = false;
  renderLibrary();
}

function showCategoryView(cat) {
  const exists = state.books.some(b => b.category === cat);
  if (!exists) { showHomeView(); return; }
  state.activeCategory = cat;
  updateCatLinksActive();
  const hero = document.querySelector('.hero');
  if (hero) hero.style.display = 'none';
  const banner = document.getElementById('categoryBanner');
  banner.hidden = false;
  document.getElementById('categoryTitle').textContent = cat;
  document.getElementById('categoryDesc').textContent = CATEGORY_META[cat] || 'Browse all summaries in this category.';
  const count = state.books.filter(b => b.category === cat).length;
  document.getElementById('categoryCount').textContent = `${count} ${count === 1 ? 'book' : 'books'}`;
  document.getElementById('libraryTitle').hidden = true;
  renderLibrary();
  window.scrollTo({ top: 0 });
}

function renderRoute() {
  const hash = currentHash();
  const bookMatch = hash.match(/^#\/book\/(.+)$/);
  if (bookMatch) {
    const id = decodeURIComponent(bookMatch[1]);
    if (!state.books.some(b => b.id === id)) { showHomeView(); return; }
    const alreadyOpen = state.summaryOpen && state.currentBook && state.currentBook.id === id;
    if (!alreadyOpen) {
      if (currentHash().startsWith('#/book/') && hash !== '#/book/' + id) {
        // switching books directly
      }
      openSummary(id);
    }
    return;
  }
  if (state.summaryOpen) closeSummary(false);
  const catMatch = hash.match(/^#\/category\/(.+)$/);
  if (catMatch) {
    showCategoryView(decodeURIComponent(catMatch[1]));
  } else {
    showHomeView();
  }
}

/* ----- Category ----- */
function bindCategory(btn) {
  btn.addEventListener('click', () => {
    closeMobileNav();
    const filter = btn.dataset.filter;
    if (filter === 'all') setHash('#/');
    else setHash('#/category/' + encodeURIComponent(filter));
  });
}
catLinks.forEach(bindCategory);

/* ----- Mobile nav ----- */
const menuBtn = $('#menuBtn');
const mobileNav = $('#mobileNav');

function setupMobileNav() {
  const categories = [...new Set(state.books.map(b => b.category))];
  const filters = ['all', ...categories];
  mobileNav.innerHTML = filters.map(f => {
    const label = f === 'all' ? 'All' : f;
    return `<button class="cat-link ${f === state.activeCategory ? 'active' : ''}" data-filter="${f}">${label}</button>`;
  }).join('');
  $$('.mobile-nav .cat-link').forEach(bindCategory);
}

function toggleMobileNav(force) {
  const open = typeof force === 'boolean' ? force : mobileNav.hidden;
  mobileNav.hidden = !open;
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

function closeMobileNav() {
  toggleMobileNav(false);
}

menuBtn.addEventListener('click', () => toggleMobileNav());
document.addEventListener('click', e => {
  if (!mobileNav.hidden && !e.target.closest('.site-header')) {
    closeMobileNav();
  }
});

/* ----- View toggle ----- */
viewBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    viewBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.currentView = btn.dataset.view;
    renderLibrary();
  });
});

/* ----- Clear filters ----- */
clearFilters.addEventListener('click', () => {
  searchInput.value = '';
  state.searchQuery = '';
  searchClear.hidden = true;
  state.activeCategory = 'all';
  $$('.cat-link').forEach(b => b.classList.remove('active'));
  $$('.cat-link[data-filter="all"]').forEach(b => b.classList.add('active'));
  renderLibrary();
});

/* ----- Hero feature ----- */
function initHero() {
  const feature = state.books[0];
  const initials = feature.title.split(' ').map(w => w[0]).join('').slice(0, 3).toUpperCase();
  mountCover(document.getElementById('featureCover'), feature, 'feature', initials);
  document.getElementById('featureTitle').textContent = feature.title;
  document.getElementById('featureAuthor').textContent = feature.author;
  document.getElementById('featureBlurb').textContent = feature.summary;
  document.getElementById('featureLink').addEventListener('click', e => {
    e.preventDefault();
    openSummary(feature.id);
  });
}

/* ----- Scroll ----- */
function handleScroll() {
  const scrollY = window.scrollY;
  toTop.classList.toggle('show', scrollY > 400);
  if (state.summaryOpen) {
    updateSummaryProgress();
  }
}

window.addEventListener('scroll', handleScroll, { passive: true });
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ----- Summary events ----- */
summaryBack.addEventListener('click', closeSummary);
summaryClose.addEventListener('click', closeSummary);
summaryScrim.addEventListener('click', closeSummary);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && state.summaryOpen) closeSummary();
});

/* ----- Theme ----- */
const themeToggle = document.getElementById('themeToggle');

function getTheme() {
  return localStorage.getItem('ultra-theme') || 'light';
}

function setTheme(theme, persist = true) {
  document.documentElement.setAttribute('data-theme', theme);
  if (themeToggle) {
    themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
  }
  if (persist) localStorage.setItem('ultra-theme', theme);
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    setTheme(getTheme() === 'dark' ? 'light' : 'dark');
  });
}

/* ----- Font size ----- */
const fontMinus = document.getElementById('fontMinus');
const fontPlus = document.getElementById('fontPlus');
const FS_KEY = 'ultra-font-scale';
const MIN_FS = 0.8, MAX_FS = 1.5, FS_STEP = 0.1;

function getFontScale() {
  return parseFloat(localStorage.getItem(FS_KEY)) || 1;
}

function applyFontScale(scale) {
  summaryView.style.setProperty('--fs', scale.toFixed(1));
  const pct = Math.round(scale * 100);
  if (fontMinus) {
    fontMinus.disabled = scale <= MIN_FS;
    fontMinus.setAttribute('aria-label', `Decrease text size (currently ${pct}%)`);
  }
  if (fontPlus) {
    fontPlus.disabled = scale >= MAX_FS;
    fontPlus.setAttribute('aria-label', `Increase text size (currently ${pct}%)`);
  }
}

function setFontScale(scale) {
  const clamped = Math.min(MAX_FS, Math.max(MIN_FS, Math.round(scale * 10) / 10));
  localStorage.setItem(FS_KEY, clamped);
  applyFontScale(clamped);
}

if (fontMinus) fontMinus.addEventListener('click', () => setFontScale(getFontScale() - FS_STEP));
if (fontPlus) fontPlus.addEventListener('click', () => setFontScale(getFontScale() + FS_STEP));

/* ----- Init ----- */
statBooks.textContent = state.books.length;
const heroBookCount = document.getElementById('heroBookCount');
if (heroBookCount) heroBookCount.textContent = state.books.length;
setupMobileNav();
initHero();
setTheme(getTheme(), false);
applyFontScale(getFontScale());
renderRoute();
window.addEventListener('hashchange', renderRoute);

/* ----- Summary scroll tracking ----- */
summaryView.addEventListener('scroll', updateSummaryProgress, { passive: true });