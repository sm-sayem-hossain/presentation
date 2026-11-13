import { motion } from 'motion/react'
import { Fragment, useState } from 'react'

import {
  BLOOD_GROUPS,
  isCompatible,
  TOTAL_PAIR_COUNT,
  VALID_PAIR_COUNT,
} from '../data/matching'
import type { BloodGroup } from '../data/matching'

type Hovered = { donor: BloodGroup; recipient: BloodGroup }

export function BloodMatrix() {
  const [hovered, setHovered] = useState<Hovered | null>(null)

  return (
    <div>
      <div className="matrix">
        <div className="matrix__corner" />

        {BLOOD_GROUPS.map((group) => (
          <div
            key={`col-${group}`}
            className={`matrix__hd${hovered?.recipient === group ? ' is-active' : ''}`}
          >
            {group}
          </div>
        ))}

        {BLOOD_GROUPS.map((donor, row) => (
          <Fragment key={`row-${donor}`}>
            <div
              className={`matrix__hdr${hovered?.donor === donor ? ' is-active' : ''}`}
            >
              {donor}
            </div>

            {BLOOD_GROUPS.map((recipient, column) => (
              <motion.div
                key={`${donor}-${recipient}`}
                className={`cell${isCompatible(donor, recipient) ? ' cell--ok' : ''}`}
                title={`${donor} donor → ${recipient} recipient`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.3 + (row + column) * 0.012,
                }}
                onMouseEnter={() => setHovered({ donor, recipient })}
                onMouseLeave={() => setHovered(null)}
              />
            ))}
          </Fragment>
        ))}
      </div>

      <div className="matrix__readout">
        {hovered ? (
          <>
            <b>{hovered.donor}</b>
            <span className="arrow"> → </span>
            <b>{hovered.recipient}</b>
            <span className="arrow"> · </span>
            <span className="ok">
              {isCompatible(hovered.donor, hovered.recipient)
                ? 'compatible'
                : 'not compatible'}
            </span>
          </>
        ) : (
          <span>
            Donor ↓ · recipient → · {VALID_PAIR_COUNT} of {TOTAL_PAIR_COUNT} valid
          </span>
        )}
      </div>
    </div>
  )
}
