import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('m-number-board')
export class NumberBoard extends LitElement {

  render() {
    return html`
      <div flex justify="center" items="center" bg="light" text="fg 64px" font="bold" h="28" mt="7" rounded="lg">
        <slot></slot>
      </div>
    `
  }

  static styles = css`
    @unocss-placeholder
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'm-number-board': NumberBoard
  }
}
