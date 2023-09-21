import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('m-progress-bar')
export class ProgressBar extends LitElement {
  @property({ type: Number })
  progress = 50

  render() {
    let bgcolor
    if (this.progress <= 20) {
      bgcolor = '#C95F5F'
    } else {
      bgcolor = '#6EAA39'
    }

    return html`
      <div bg="light" w="full" h="2" mt="4.5" position="relative" rounded="full" overflow="hidden">
        <p style="background: ${bgcolor}; width: ${this.progress / 90 * 100}%" h="full" m="0" rounded="full" right="0" position="absolute"></p>
      </div>
    `
  }

  static styles = css`
    p {
      transition: all 1s linear;
    }

    @unocss-placeholder
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'm-progress-bar': ProgressBar  
  }
}
