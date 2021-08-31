import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from '@stencil/core'

@Component({
  shadow: true,
  styleUrl: 'button.scss',
  tag: 'pichincha-button',
})
export class Button implements ComponentInterface {
  /**
   * The color
   */
  @Prop() public color:
    | 'primary'
    | 'secondary'
    | 'complementary'
    | 'tertiary'
    | 'destructive' = 'primary'
  @Prop() public disabled: boolean = false
  @Prop() public href: string
  @Prop() public idelement: string
  @Prop() public loading: boolean = false
  @Prop() public size: 'medium' | 'small' | 'large' | 'extra-large' = 'large'
  @Prop() public tabIndexInner: number
  @Prop() public value: string

  @Event() public clickbutton: EventEmitter

  public event(e: any) {
    this.clickbutton.emit(e)
    e.target.blur()
  }

  public render() {
    return (
      <button
        tabIndex={this.tabIndexInner}
        id={this.idelement}
        class={`button button--${this.color} button--${this.size}`}
        disabled={this.disabled}
        onClick={
          !this.loading
            ? this.href != null
              ? () => (window.location.href = this.href)
              : (e) => this.event(e)
            : null
        }
      >
        Click me
      </button>
    )
  }
}
