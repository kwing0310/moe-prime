import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('m-button')
export class Button extends LitElement {

  @property({ type: String })
  sty = 'normal'

  render() {
    const normal = html`
      <div button text="22px" my="10px" mb="5" px="3" py="0" w="full" h="12" rounded="lg">
        <slot></slot>
      </div>
    `

    const help = html`
      <div button w="12" h="12" rounded="full">
        <div text="2xl" i-fa6-solid="question" />
      </div>
    `

    const close = html`
      <div button w="12" h="12" rounded="full">
        <div text="2xl" i-fa6-solid="x" />
      </div>
    `

    const number = html`
      <div button text="4xl" w="17.5" h="17.5" gap-x="1" mx="1" my="2" rounded="lg">
        <slot></slot>
      </div>
    `

    const shareX = html`
      <div button bg="black" w="9" h="9" rounded="lg">
        <div text="white 22px" i-simple-icons="x" />
      </div>
    `

    const shareMastodon = html`
      <div button bg="#6364FF" w="9" h="9" rounded="lg">
        <div text="white 22px" i-simple-icons="mastodon" />
      </div>
    `

    const shareMisskey = html`
      <div button bg="#86B300" w="9" h="9" rounded="lg">
        <div text="white 21px" i-simple-icons="misskey" />
      </div>
    `

    switch (this.sty) {
      case 'help':
        return help
        break
      case 'close':
        return close
        break
      case 'number':
        return number
        break
      case 'share-x':
        return shareX
        break
      case 'share-mastodon':
        return shareMastodon
        break
      case 'share-misskey':
        return shareMisskey
        break
      default:
        return normal
    }
  }

  static styles = css`
    [button=""] {
      box-shadow: 0px 2px 6px 0px rgba(91, 75, 78, 0.25); 
    }

    @unocss-placeholder
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'm-button': Button
  }
}
