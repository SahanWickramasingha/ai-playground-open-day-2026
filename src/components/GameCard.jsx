import { motion } from 'framer-motion'
import { ArrowRight, BrainCircuit, Eye, Pencil, Sparkles } from 'lucide-react'

export default function GameCard({
  side,
  theme,
  eyebrow,
  title,
  subtitle,
  description,
  buttonText,
  href,
  children,
}) {
  const resolvedTheme = theme || (side === 'left' ? 'cyan' : 'purple')
  const cyan = resolvedTheme === 'cyan'
  const gold = resolvedTheme === 'gold'
  const cardClass = gold ? 'gold-card' : cyan ? 'cyan-card' : 'purple-card'

  return (
    <motion.article
      className={`game-card ${cardClass}`}
      initial={{ opacity: 0, x: gold ? 0 : cyan ? -80 : 80, y: gold ? 45 : 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.012 }}
    >
      <div className="card-topline">
        <span className="eyebrow-pill">{eyebrow}</span>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        >
          <Sparkles size={18} />
        </motion.div>
      </div>

      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{description}</p>

      {children}

      <a className="play-button" href={href}>
        {gold ? <BrainCircuit size={23} /> : cyan ? <Eye size={25} /> : <Pencil size={23} />}
        <span>{buttonText}</span>
        <ArrowRight size={22} />
      </a>
    </motion.article>
  )
}
