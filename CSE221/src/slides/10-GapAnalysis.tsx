import { motion } from 'motion/react'
import { Droplet, Network, Phone } from 'lucide-react'

import { Reveal } from '../deck/Reveal'
import { SlideShell } from '../deck/SlideShell'
import { GAP_ROWS } from '../data/gap'

export default function GapAnalysisSlide() {
  return (
    <SlideShell className="sheet">
      <Reveal delay={0.04} y={14}>
        <p className="label">Gap analysis</p>
      </Reveal>

      <Reveal delay={0.1} y={26}>
        <h2 className="headline">
          Existing options don't enforce
          <br />
          <i>the medical rule.</i>
        </h2>
      </Reveal>

      <div className="body-block">
        <table className="gap">
          <thead>
            <tr>
              <th> </th>
              <th>
                <Phone size={12} strokeWidth={1.6} />
                Social media &amp; calls
              </th>
              <th>
                <Network size={12} strokeWidth={1.6} />
                Blood-request apps
              </th>
              <th>
                <Droplet size={12} strokeWidth={1.6} />
                RedGrid
              </th>
            </tr>
          </thead>
          <tbody>
            {GAP_ROWS.map((row, index) => (
              <motion.tr
                key={row.aspect}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.24 + index * 0.07 }}
              >
                <td>{row.aspect}</td>
                <td>{row.social}</td>
                <td>{row.apps}</td>
                <td>{row.ours}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>

        <Reveal delay={0.62} y={10}>
          <p className="hint">
            Qualitative comparison, scoped to this project — not a competitor audit.
          </p>
        </Reveal>
      </div>
    </SlideShell>
  )
}
