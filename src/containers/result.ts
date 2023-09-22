import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { StateController } from '@lit-app/state'

import state from '../state'
import '../components/button'

@customElement('m-result')
export class Result extends LitElement {
  bindState = new StateController(this, state)
  
  render() {
    return html`
      <div text="fg" font="bold">
        <div text="3xl center" pb="1" border="t-0 b l-0 r-0 fg solid" mt="6">RESULT</div>
        <div text="center" my="7">
          <span text="2xl" mr="3">SCORE</span>
          <span text="4xl">${state.gameScore}</span>
        </div>
        <div my="3">
          <div text="center xl">SHARE</div>
          <div my="3" flex flex-start justify-center gap="5">
            <m-button @click="${this._shareX}" sty="share-x"></m-button>
            <m-button @click="${this._shareMastodon}" sty="share-mastodon"></m-button>
            <m-button @click="${this._shareMisskey}" sty="share-misskey"></m-button>
          </div>
        </div>
        <m-button mx="6" sty="normal" @click="${this._retry}">▶ RETRY</m-button>
      </div>
    `
  }

  static styles = css`
    @unocss-placeholder
  `

  _retry() {
    state.currentPage = 0
  }

  _shareX() {
    window.open('https://twitter.com/intent/tweet?text=%23萌え萌え素因数分解 (β) であそんだよ！　Level: '+state.gameLevel+'　Score: '+state.gameScore+'&url='+encodeURI('https://moe-prime.vercel.app'))
  }

  _shareMastodon() {
    window.open('https://donshare.net/share.html?text=%23萌え萌え素因数分解 (β) であそんだよ！　Level: '+state.gameLevel+'　Score: '+state.gameScore+'&url='+encodeURI('https://moe-prime.vercel.app'))
  }

  _shareMisskey() {
    window.open('https://misskeyshare.link/share.html?text=%23萌え萌え素因数分解 (β) であそんだよ！　Level: '+state.gameLevel+'　Score: '+state.gameScore+'&url='+encodeURI('https://moe-prime.vercel.app'))
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'm-result': Result
  }
}
