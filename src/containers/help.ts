import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { StateController } from '@lit-app/state'

import state from '../state'
import '../components/button'

@customElement('m-help')
export class Help extends LitElement {
  bindState = new StateController(this, state)
  
  render() {
    return html`
      <m-button @click="${this._backToHome}" sty="close" float="right" mt="6"></m-button>
      <div text-base prose prose-fg clear="both">
        <h2>あそびかた</h2>
        <p>ゲーム画面上部の白い枠に表示された数を、下部の素数のボタンを使って割ってください。1になったら元の数の桁数に応じて点数が加算されます。ただし、押すボタンを間違えると少し減点されてしまいます。
        <h3>レベルについて</h3>
        <ul>
          <li>NORMAL: 2から19までの素因数が登場します。</li>
          <li>HARD: 2から37までの素因数が登場します。</li>
        </ul>
        <p>制限時間はどちらも90秒です。</p>
        <h3>クレジット</h3>
        <p>作者: <a href="chillout.chat/@wing">からすま</a></p>
        <p>このゲームはまだベータ版です。バグや不具合がひそんでいる可能性が大いにあります。</p>
        <p><a href="https://github.com/kwing0310/moe-prime">ソースコード</a> (v0.1)</p>
      </div>
    `
  }

  static styles = css`
    @unocss-placeholder
  `

  _backToHome() {
    state.currentPage = 0
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'm-help': Help
  }
}
