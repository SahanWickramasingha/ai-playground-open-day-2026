import { motion } from 'framer-motion'
import {
  BrainCircuit,
  CalendarDays,
  Mouse,
  Cat,
  Car,
  Fish,
  House,
  Star,
} from 'lucide-react'
import GameCard from './components/GameCard'
import GlowOrb from './components/GlowOrb'

const GAME_ONE = 'https://ai-or-reality.vercel.app/'
const GAME_TWO = 'https://ai-draw-guess-sable.vercel.app/'
const GAME_THREE = 'https://ai-would-you-rather-lyart.vercel.app/'

export default function App() {
  return (
    <div className="site-shell">
      <div className="grid-overlay" />
      <GlowOrb className="orb-cyan" />
      <GlowOrb className="orb-purple" />

      <header className="topbar">
        <div className="ousl-brand">
          <img
            src="/assets/ousl-logo.png"
            alt="Open University of Sri Lanka logo"
            className="ousl-logo"
          />
          <div className="ousl-copy">
            <strong>THE OPEN UNIVERSITY OF SRI LANKA</strong>
            <span>Open Day 2026 · AI Playground</span>
          </div>
        </div>

        <div className="open-day-pill" aria-label="Open Day 2026">
          <CalendarDays size={18} />
          <span>Open Day 2026</span>
        </div>
      </header>

      <main className="hero">
        <section className="hero-heading">
          <motion.div
            className="kicker"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
          >
            THREE GAMES. ONE AI EXPERIENCE.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8, delay: .08 }}
          >
            Choose Your
            <span>AI Challenge</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .8, delay: .2 }}
          >
            Play, learn and experience the amazing power of AI
            <br className="desktop-break" />
            in fun and interactive ways!
          </motion.p>
        </section>

        <section className="game-layout">
          <GameCard
            side="left"
            eyebrow="GAME 1"
            title="AI OR REALITY"
            subtitle="Can you tell what's real?"
            description="Test your observation skills and find out if the image is AI-generated or real."
            buttonText="Play AI or Reality"
            href={GAME_ONE}
          >
            <div className="reality-visual" aria-label="Compare a real photo with an AI-generated image">
              <div className="reality-comparison">
                <figure className="reality-image-panel real-image-panel">
                  <span className="comparison-label comparison-label-real">REAL PHOTO</span>
                  <img
                    className="ai-reality-image"
                    src="/assets/ai-or-reality/real-image.jpg"
                    alt="Real photo example"
                  />
                </figure>

                <div className="reality-vs-badge" aria-hidden="true">VS</div>

                <figure className="reality-image-panel ai-image-panel">
                  <span className="comparison-label comparison-label-ai">AI GENERATED</span>
                  <img
                    className="ai-reality-image"
                    src="/assets/ai-or-reality/ai-generated-image.jpg"
                    alt="AI-generated image example"
                  />
                </figure>
              </div>

              <div className="visual-question">
                Which one is real?
              </div>
            </div>
          </GameCard>

          <section className="character-zone" aria-label="AI Playground character">
            <motion.div
              className="hand-note note-left"
              animate={{ rotate: [-4, 2, -4], y: [0, -6, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              Same
              <br />
              Curiosity
              <br />
              Different
              <br />
              Perspectives
            </motion.div>

            <motion.div
              className="character-rings"
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
            />

            <motion.div
              className="character-rings ring-two"
              animate={{ rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            />

            <motion.img
              src="/assets/ai-boy.png"
              alt="Friendly AI student character holding a laptop"
              className="boy"
              initial={{ opacity: 0, y: 40, scale: .94 }}
              animate={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
              transition={{
                opacity: { duration: .8, delay: .25 },
                scale: { duration: .8, delay: .25 },
                y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 },
              }}
            />

            <motion.div
              className="hand-note note-right"
              animate={{ rotate: [3, -2, 3], y: [0, 7, 0] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              Let's
              <br />
              Explore
              <br />
              AI!
            </motion.div>
          </section>

          <GameCard
            side="right"
            eyebrow="GAME 2"
            title="AI DRAW & GUESS"
            subtitle="Draw it. Let AI guess!"
            description="Sketch an object and see if AI can recognize what you drew."
            buttonText="Play AI Draw & Guess"
            href={GAME_TWO}
          >
            <div className="draw-visual">
              <div className="sketch-window">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <motion.div
                  className="cat-sketch"
                  animate={{ scale: [1, 1.025, 1] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="cat-head">
                    <span className="ear e1" />
                    <span className="ear e2" />
                    <span className="eye eye1" />
                    <span className="eye eye2" />
                    <span className="nose" />
                    <span className="mouth" />
                    <span className="whisker w1" />
                    <span className="whisker w2" />
                    <span className="whisker w3" />
                    <span className="whisker w4" />
                  </div>
                </motion.div>
              </div>

              <div className="object-list">
                <div className="selected"><Cat size={16} /> Cat</div>
                <div><Car size={16} /> Car</div>
                <div><Fish size={16} /> Fish</div>
                <div><House size={16} /> House</div>
                <div><Star size={16} /> Star</div>
              </div>
            </div>
          </GameCard>
        </section>

        <section className="third-game-section" aria-label="Would You Rather game">
          <GameCard
            theme="gold"
            eyebrow="GAME 3"
            title="WOULD YOU RATHER?"
            subtitle="AI Personality Booth"
            description="Fifteen fun choices. No wrong answers. Get a simple AI personality result at the end."
            buttonText="Play Would You Rather"
            href={GAME_THREE}
          >
            <div className="rather-visual" aria-label="Would You Rather choice preview">
              <div className="rather-choice choice-a">
                <span className="choice-letter">A</span>
                <span className="choice-icon" aria-hidden="true">☀</span>
                <strong>A day at the beach</strong>
              </div>

              <div className="rather-or" aria-hidden="true">OR</div>

              <div className="rather-choice choice-b">
                <span className="choice-letter">B</span>
                <span className="choice-icon mountain-icon" aria-hidden="true">△</span>
                <strong>A day in the mountains</strong>
              </div>
            </div>

            <div className="rather-meta">
              <span>15 rounds</span>
              <span>~2 min</span>
              <span>AI personality result</span>
            </div>
          </GameCard>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-event">
          <strong>OUSL Open Day 2026</strong>
          <span>Innovate · Learn · Experience</span>
        </div>

        <div className="developer-credit">
          This game was developed and designed by
          <strong> Sahan,Chamod and Hemantha </strong>
        </div>
      </footer>
    </div>
  )
}
