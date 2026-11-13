import { Deck } from './deck/Deck'
import { PrintDeck } from './deck/PrintDeck'

const isPrint = new URLSearchParams(window.location.search).has('print')

export default function App() {
  return isPrint ? <PrintDeck /> : <Deck />
}
