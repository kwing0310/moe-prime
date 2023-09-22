import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { StateController } from '@lit-app/state'

import state from '../state'
import '../components/button'
import '../components/number-board'
import '../components/progress-bar'

const numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

@customElement('m-game')
export class Game extends LitElement {
  bindState = new StateController(this, state)

  render() {
    const extraButtons = html`
      <m-button sty="number" @click="${this._divide}">23</m-button>
      <m-button sty="number" @click="${this._divide}">29</m-button>
      <m-button sty="number" @click="${this._divide}">31</m-button>
      <m-button sty="number" @click="${this._divide}">37</m-button>
    `

    return html`
      <m-number-board>${state.currentNumber}</m-number-board>
      <div h="5" my="4">
        <span text="fg" float="left" font="bold">SCORE: ${state.gameScore}</span>
        <!-- 点数上限表示の実装は後回し -->
        <span text="fg" float="right" font="bold"></span>
      </div>
      <div flex flex-wrap justify-between mx="-0.25rem" my="-0.5rem">
        <m-button sty="number" @click=${this._divide}>2</m-button>
        <m-button sty="number" @click=${this._divide}>3</m-button>
        <m-button sty="number" @click=${this._divide}>5</m-button>
        <m-button sty="number" @click=${this._divide}>7</m-button>
        <m-button sty="number" @click=${this._divide}>11</m-button>
        <m-button sty="number" @click=${this._divide}>13</m-button>
        <m-button sty="number" @click=${this._divide}>17</m-button>
        <m-button sty="number" @click=${this._divide}>19</m-button>
        ${state.gameLevel === 'HARD' ? extraButtons : ''}
      </div>
      <m-progress-bar progress=${state.gameTime} style="opacity: ${state.progressOpacity};"></m-progress-bar>
      <div h="5" my="4">
        <span text="fg" float="left" font="bold">TIME: ${state.gameTime}</span>
        <span text="fg" float="right" font="bold">${state.gameLevel}</span>
      </div>
    `
  }

  static styles = css`
    @unocss-placeholder
  `

  _updateNumber() {
    state.currentNumber = 1

    let rand, c1, c2, c3, tmp: number
    if (state.gameLevel === 'HARD') {
      rand = 12
      c1 = 10000
      c2 = 5500
      c3 = 500
    } else {
      rand = 8
      c1 = 5000
      c2 = 1000
      c3 = 100
    }

    if (getRandomInt(1)) {
      state.gameItemLevel = 1;
      while (true) {
        tmp = state.currentNumber * numbers[getRandomInt(rand)]
        if (state.currentNumber >= c2 && getRandomInt(2)) {
          break
        }
        if (tmp < c1) {
          state.currentNumber = tmp
        } else break
      }
    } else {
      state.gameItemLevel = 0
      while (state.currentNumber < c2) {
        tmp = state.currentNumber * numbers[getRandomInt(rand)]
        if (state.currentNumber >= c3 && getRandomInt(2)) {
          break
        }
        if (tmp < c1) {
          state.currentNumber = tmp
        } else break
      }
    }

  }

  firstUpdated() {
    setTimeout(() => this._updateNumber(), 3000)
  }

  _divide(e: Event) {
    let divisor = Number((e.target as Element).textContent!)
    if (state.currentNumber % divisor) { 
      if (state.gameScore >= 80) state.gameScore -= 80
    } else {
      state.currentNumber /= divisor

      if (state.currentNumber === 1) {
        let item: number
        if (state.gameItemLevel) {
          item = getRandomInt(3)
          state.gameItems[item]++
          state.gameScore += 600
        } else {
          item = getRandomInt(3) + 3
          state.gameItems[item]++
          state.gameScore += 400
        }

        setTimeout(() => {
          this._updateNumber()
        }, 300)
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'm-game': Game
  }
}
