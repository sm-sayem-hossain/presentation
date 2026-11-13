import { Reveal } from '../deck/Reveal'
import { SlideShell } from '../deck/SlideShell'

const PILLARS = [
  { key: 'Inheritance', value: 'User → Donor · Recipient · Admin' },
  { key: 'Encapsulation', value: 'private bloodGroup, lastDonation' },
  { key: 'Polymorphism', value: 'one dashboard handler, three roles' },
  { key: 'Abstraction', value: 'abstract User, concrete services' },
]

function Node({
  x,
  y,
  w,
  name,
  fields,
  accent,
}: {
  x: number
  y: number
  w: number
  name: string
  fields: string[]
  accent?: boolean
}) {
  return (
    <div
      className={`uml__node${accent ? ' uml__node--accent' : ''}`}
      style={{ left: x, top: y, width: w }}
    >
      <div className="uml__name">{name}</div>
      {fields.map((field) => (
        <div key={field} className="uml__field">
          {field}
        </div>
      ))}
    </div>
  )
}

export default function ClassDiagramSlide() {
  return (
    <SlideShell className="sheet">
      <Reveal delay={0.04} y={14}>
        <p className="label">OOP structure</p>
      </Reveal>

      <Reveal delay={0.1} y={26}>
        <h2 className="headline">
          One base class, <i>three roles.</i>
        </h2>
      </Reveal>

      <div className="uml">
        <Reveal delay={0.2} y={16} className="uml__diagram">
          <svg viewBox="0 0 900 430" aria-hidden="true">
            <path d="M300 74 V106 H90 V140" />
            <path d="M300 74 V140" />
            <path d="M300 74 V106 H510 V140" />
            <path d="M90 214 V300" />
            <path d="M300 214 V300" />
          </svg>

          <Node
            x={200}
            y={0}
            w={200}
            name="User  «abstract»"
            fields={['− id, name, phone', '− district']}
            accent
          />
          <Node x={0} y={140} w={180} name="Donor" fields={['− bloodGroup', '− lastDonation']} />
          <Node x={200} y={140} w={200} name="Recipient" fields={['− requestHistory']} />
          <Node x={420} y={140} w={180} name="Admin" fields={['− auditScope']} />
          <Node x={0} y={300} w={180} name="DonationHistory" fields={['− date, units']} />
          <Node
            x={200}
            y={300}
            w={200}
            name="BloodRequest"
            fields={['− group, bags', '− hospital, urgency']}
          />
        </Reveal>

        <div className="pillars">
          {PILLARS.map((pillar, index) => (
            <Reveal key={pillar.key} delay={0.32 + index * 0.08} y={14}>
              <div className="pillar">
                <div className="pillar__k">{pillar.key}</div>
                <div className="pillar__v">{pillar.value}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SlideShell>
  )
}
