import { State, property } from '@lit-app/state'

class MoeState extends State {
  @property({ value: 0 }) currentPage!: number
  @property({ value: 'none' }) startOverlayDisplay!: string
  @property({ value: 'none' }) endOverlayDisplay!: string
  @property({ value: 1 }) progressOpacity!: number
  @property({ value: 'normal' }) gameLevel!: string
  @property({ value: 3 }) startTime!: number
  @property({ value: 90 }) gameTime!: number
  @property({ value: 0 }) gameScore!: number
  @property({ value: [0, 0, 0, 0, 0, 0] }) gameItems!: Array<number>
  @property({ value: 0 }) gameItemLevel!: number
  @property({ value: null }) currentNumber!: number 
}

const state = new MoeState()
export default state
