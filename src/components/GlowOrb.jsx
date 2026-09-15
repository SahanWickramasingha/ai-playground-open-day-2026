import { motion } from 'framer-motion'

export default function GlowOrb({ className = '' }) {
  return (
    <motion.div
      className={`glow-orb ${className}`}
      animate={{
        scale: [1, 1.08, 1],
        opacity: [0.35, 0.65, 0.35],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}
