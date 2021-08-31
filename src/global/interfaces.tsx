export interface headers {
  value: string
  align: 'left' | 'right' | 'center'
  name: string
  visible: boolean
}

export type VariantText =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle'
  | 'bodyText'
  | 'smallText'
  | 'tinyText'
  | 'actionText'

export type Colors =
  | 'blue'
  | 'grey'
  | 'yellow'
  | 'black'
  | 'white'
  | 'darkGrey'
  | 'danger'
  | 'info'
  | 'success'
  | 'warning'
  | 'strongBlue'
  | 'grayishRed'
  | 'moderateCyan'
  | 'yellowGold'
  | 'darkCyan'
  | 'pureOrange'
  | 'darkGrayishBlue'
  | 'error'
