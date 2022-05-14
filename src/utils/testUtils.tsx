import { ThemeProvider } from '@emotion/react'
import { render, RenderResult } from '@testing-library/react'
import { ReactElement } from 'react'
import { theme } from '../theme'

export const renderWithTheme = (component: ReactElement): RenderResult => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
}
