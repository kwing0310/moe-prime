import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { StateController } from '@lit-app/state'
import '@unocss/reset/normalize.css'
import state from './state'
import './components/button'
import './containers/game'
import './containers/result'

@customElement('m-app')
export class App extends LitElement {
  bindState = new StateController(this, state)    

  render() {
    const home = html`
      <m-button sty="help" float="right" mt="6"></m-button>
      <div h="1/2"></div>
      <m-button sty="normal" @click="${this._startNormalGame}">▶ NORMAL</m-button>
      <m-button sty="normal" @click="${this._startHardGame}">▶ HARD</m-button>
    `

    const game = html`<m-game></m-game>`
    const result = html`<m-result></m-result>`

    let content
    switch (state.currentPage) {
      case 1:
        content = game
        break
      case 2:
        content = result
        break
      default:
        content = home
    }
    
    return html`
      <div overflow="hidden" mx="auto" my="0" max-w="420px" h="full" bg="bg">
        <div overlay style="display: ${state.startOverlayDisplay}; background: rgba(0, 0, 0, 0.8);">
          <div table w="full" h="full">
            <span table-cell align-middle>${state.startTime}</span>
          </div>
        </div>
        <div overlay style="display: ${state.endOverlayDisplay}; background: rgba(0, 0, 0, 0.8);">
          <div table w="full" h="full">
            <span table-cell align-middle text="5xl">TIME UP</span>
          </div>
        </div>
        <div w="7/8" h="full" mx="auto" my="0">
          ${content}
        </div>
      </div>
    `
  }

  static styles = css`
    @unocss-placeholder
    `

  /*_debug() {
    state.currentPage = 2
  }*/

  _startGame() {
    state.currentPage = 1
    state.startOverlayDisplay = 'block'
    state.progressOpacity = 0

    state.startTime = 3
    const beforeStartTimer = setInterval(() => state.startTime--, 1000)
    setTimeout(() => {
      clearInterval(beforeStartTimer)
      state.startOverlayDisplay = 'none'
      state.progressOpacity = 1

      state.gameTime = 90
      const afterStartTimer = setInterval(() => state.gameTime--, 1000)
      setTimeout(() => {
        clearInterval(afterStartTimer)
        state.endOverlayDisplay = 'block'
        state.progressOpacity = 0
        setTimeout(() => {
          state.endOverlayDisplay = 'none'
          state.currentPage = 2
        }, 1500)
      }, 90000)
    }, 3000)
  }

  _startNormalGame() {
    state.gameLevel = 'NORMAL'
    this._startGame()
  }

  _startHardGame() {
    state.gameLevel = 'HARD'
    this._startGame()
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'm-app': App
  }
}
