import TitleSlide from '../slides/01-Title'
import TeamSlide from '../slides/02-Team'
import IntroductionSlide from '../slides/03-Introduction'
import ProblemSlide from '../slides/04-Problem'
import MotivationSlide from '../slides/05-Motivation'
import FeaturesSlide from '../slides/06-Features'
import ArchitectureSlide from '../slides/07-Architecture'
import ClassDiagramSlide from '../slides/08-ClassDiagram'
import MatchingSlide from '../slides/09-Matching'
import GapAnalysisSlide from '../slides/10-GapAnalysis'
import ToolsSlide from '../slides/11-Tools'
import WorkDistributionSlide from '../slides/12-WorkDistribution'
import ConclusionSlide from '../slides/13-Conclusion'
import ThanksSlide from '../slides/14-Thanks'
import type { SlideMeta } from './types'

export const slides: SlideMeta[] = [
  {
    id: 'title',
    title: 'RedGrid',
    section: 'Introduction',
    presenter: 'Fuad',
    duration: '0:25',
    transition: 'morph',
    notes: [
      'One line: RedGrid finds a medically compatible blood donor in seconds.',
      'Do not read the slide — the audience can already read it.',
      'Say the course and instructor name aloud, then move on.',
    ],
    component: TitleSlide,
  },
  {
    id: 'team',
    title: 'The team',
    section: 'Introduction',
    presenter: 'Fuad',
    duration: '0:20',
    transition: 'push',
    notes: [
      'Name each member with the area they own — interface, architecture, persistence.',
      'Keep this under 20 seconds: content matters more than introductions.',
      'Hand over to the introduction slide.',
    ],
    component: TeamSlide,
  },
  {
    id: 'introduction',
    title: 'Introduction',
    section: 'Introduction',
    presenter: 'Fuad',
    duration: '0:45',
    transition: 'push',
    notes: [
      'Frame it as a matching layer, not a social network — it answers one question: who can give right now?',
      'Mention the three roles and that everything runs locally with no server.',
      'Do not explain the compatibility matrix here — Sayem owns that.',
    ],
    component: IntroductionSlide,
  },
  {
    id: 'problem',
    title: 'Problem statement',
    section: 'Foundation',
    presenter: 'Fuad',
    duration: '0:45',
    transition: 'morph',
    notes: [
      'Three failures, said plainly: slow search, no compatibility check, no rest-period tracking.',
      'Use one concrete image: a family calling a list of strangers at midnight.',
      'The last point is the one examiners remember — donor safety is part of the problem.',
    ],
    component: ProblemSlide,
  },
  {
    id: 'motivation',
    title: 'Motivation & objective',
    section: 'Foundation',
    presenter: 'Fuad',
    duration: '0:35',
    transition: 'push',
    notes: [
      'Motivation is time: every minute spent confirming a donor is a minute lost from care.',
      'The three objectives map to features that come next.',
      'Close with the academic objective: prove OOP on a real engineering problem.',
    ],
    component: MotivationSlide,
  },
  {
    id: 'features',
    title: 'Feature listing',
    section: 'Foundation',
    presenter: 'Fuad',
    duration: '0:50',
    transition: 'push',
    notes: [
      'Group them: identity, matching, alerting, records — do not read all seven one by one.',
      'Point at matching and say the next slides explain how it works.',
      'Time cue 50s; if you are behind, skip the last two items.',
    ],
    component: FeaturesSlide,
  },
  {
    id: 'architecture',
    title: 'System architecture',
    section: 'System',
    presenter: 'Sayem',
    duration: '0:40',
    transition: 'push',
    notes: [
      'Read the layers top to bottom: presentation never talks to files directly.',
      'One sentence per layer — the business layer is where matching and eligibility live.',
      'Mention that persistence is a single manager class behind the domain.',
    ],
    component: ArchitectureSlide,
  },
  {
    id: 'classDiagram',
    title: 'Class diagram & OOP',
    section: 'System',
    presenter: 'Sayem',
    duration: '1:00',
    transition: 'morph',
    notes: [
      'Start at User: abstract, holds identity and district, three concrete roles inherit.',
      'Then the associations: Donor records DonationHistory, Recipient creates BloodRequest.',
      'Finish on the four pillars and name the exact classes — this is the CEP requirement.',
      'Time cue 60s: do not walk every field, only the two that matter.',
    ],
    component: ClassDiagramSlide,
  },
  {
    id: 'matching',
    title: 'Matching engine',
    section: 'System',
    presenter: 'Sayem',
    duration: '0:45',
    transition: 'push',
    notes: [
      'Two gates, both must pass — ABO/Rh compatibility and the 90-day rest period.',
      'On the grid: 27 of 64 pairs are valid; O− is the universal donor, AB+ the universal recipient; Rh− can give to Rh+, never the reverse.',
      '90 days is the minimum recovery window, so a resting donor is never alerted.',
      'Time cue 45s — stay on the two numbers unless asked for the implementation.',
    ],
    component: MatchingSlide,
  },
  {
    id: 'gap',
    title: 'Gap analysis',
    section: 'System',
    presenter: 'Sayem',
    duration: '0:45',
    transition: 'push',
    notes: [
      'Compare on behaviour, not features: who enforces the medical rule?',
      'The honest line: existing apps let the donor declare eligibility; RedGrid validates it.',
      'Close with academic fit — this is the only column that is strictly about our scope.',
    ],
    component: GapAnalysisSlide,
  },
  {
    id: 'tools',
    title: 'Tools',
    section: 'Delivery',
    presenter: 'Muslima',
    duration: '0:30',
    transition: 'morph',
    notes: [
      'Name the four choices, no justification needed beyond “no external dependencies”.',
      'Emphasise JDK 17+ and that storage is pure Java serialization.',
      'Do not demonstrate the IDE.',
    ],
    component: ToolsSlide,
  },
  {
    id: 'work',
    title: 'Work distribution',
    section: 'Delivery',
    presenter: 'Muslima',
    duration: '0:35',
    transition: 'push',
    notes: [
      'Each member owns one vertical slice: interface, architecture, persistence.',
      'Say that matching and eligibility were the shared integration point.',
      'Hand back to Sayem if a technical question comes up.',
    ],
    component: WorkDistributionSlide,
  },
  {
    id: 'conclusion',
    title: 'Conclusion',
    section: 'Delivery',
    presenter: 'Muslima',
    duration: '0:30',
    transition: 'push',
    notes: [
      'Three takeaways: rule-based matching, enforced donor safety, one OOP hierarchy.',
      'Close with the next step — wiring the Swing screens to the persistence layer.',
      'Invite questions immediately; do not add new content here.',
    ],
    component: ConclusionSlide,
  },
  {
    id: 'thanks',
    title: 'Thank you',
    section: 'Delivery',
    presenter: 'Muslima',
    duration: '0:15',
    transition: 'morph',
    notes: [
      'Stop talking. Let the slide sit for two seconds before inviting questions.',
      'Keep the full team standing at the front for Q&A.',
    ],
    component: ThanksSlide,
  },
]
