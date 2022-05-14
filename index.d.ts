import '@emotion/react'
import { theme } from './src/theme'

type StandardTheme = typeof theme

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends StandardTheme {}
}
