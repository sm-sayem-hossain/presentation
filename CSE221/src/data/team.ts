export type TeamMember = {
  name: string
  id: string
  role: string
  initials: string
  photo?: string
}

export const TEAM: TeamMember[] = [
  {
    name: 'Shah Moftasim Ahmed',
    id: '251-15-427',
    role: 'Persistence & records',
    initials: 'SMA',
    photo: 'team/fuad.png',
  },
  {
    name: 'S. M. Sayem Hossain',
    id: '252-15-104',
    role: 'Core architecture',
    initials: 'SM',
    photo: 'team/sayem.jpg',
  },
  {
    name: 'Muslima Binte Mohsin',
    id: '252-15-103',
    role: 'UI & validation',
    initials: 'MBM',
    photo: 'team/muslima.jpg',
  },
]
