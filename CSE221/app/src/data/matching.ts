export const BLOOD_GROUPS = [
  'O−',
  'O+',
  'A−',
  'A+',
  'B−',
  'B+',
  'AB−',
  'AB+',
] as const

export type BloodGroup = (typeof BLOOD_GROUPS)[number]

type Abo = 'O' | 'A' | 'B' | 'AB'
type Rh = '+' | '−'

const parse = (group: BloodGroup): { abo: Abo; rh: Rh } => ({
  abo: group.slice(0, -1) as Abo,
  rh: group.slice(-1) as Rh,
})

/** Donor ABO types a recipient can safely receive. */
const ACCEPTS: Record<Abo, Abo[]> = {
  O: ['O'],
  A: ['A', 'O'],
  B: ['B', 'O'],
  AB: ['A', 'B', 'AB', 'O'],
}

export function isCompatible(donor: BloodGroup, recipient: BloodGroup) {
  const d = parse(donor)
  const r = parse(recipient)

  if (!ACCEPTS[r.abo].includes(d.abo)) return false
  if (d.rh === '+' && r.rh === '−') return false

  return true
}

export function explainMatch(donor: BloodGroup, recipient: BloodGroup) {
  const d = parse(donor)
  const r = parse(recipient)

  if (!ACCEPTS[r.abo].includes(d.abo)) {
    return `Recipient ${r.abo} carries anti-${d.abo} antibodies`
  }

  if (d.rh === '+' && r.rh === '−') {
    return 'Rh+ cells trigger an anti-D reaction in the recipient'
  }

  return 'Both ABO and Rh rules satisfied'
}

export const VALID_PAIR_COUNT = BLOOD_GROUPS.reduce(
  (count, donor) =>
    count +
    BLOOD_GROUPS.filter((recipient) => isCompatible(donor, recipient)).length,
  0,
)

export const TOTAL_PAIR_COUNT = BLOOD_GROUPS.length * BLOOD_GROUPS.length
