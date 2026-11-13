import { useState } from 'react'

import { Reveal } from '../deck/Reveal'
import { SlideShell } from '../deck/SlideShell'
import { TEAM } from '../data/team'
import type { TeamMember } from '../data/team'
import { asset } from '../lib/asset'

function Avatar({ member }: { member: TeamMember }) {
  const [failed, setFailed] = useState(false)
  const showPhoto = Boolean(member.photo) && !failed

  return (
    <div className="member__av">
      {showPhoto ? (
        <img
          src={asset(member.photo as string)}
          alt={member.name}
          onError={() => setFailed(true)}
        />
      ) : (
        member.initials
      )}
    </div>
  )
}

export default function TeamSlide() {
  return (
    <SlideShell className="s-team">
      <div className="s-team__intro">
        <Reveal delay={0.04} y={14}>
          <p className="label">Team</p>
        </Reveal>

        <Reveal delay={0.12} y={24}>
          <h2 className="s-team__title">
            Three roles,
            <br />
            <i>one system.</i>
          </h2>
        </Reveal>
      </div>

      <div className="s-team__list">
        {TEAM.map((member, index) => (
          <Reveal key={member.id} delay={0.22 + index * 0.09} y={18}>
            <div className="member">
              <span className="member__i">0{index + 1}</span>
              <Avatar member={member} />
              <div>
                <div className="member__name">{member.name}</div>
                <div className="member__id">{member.id}</div>
              </div>
              <div className="member__role">{member.role}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </SlideShell>
  )
}
