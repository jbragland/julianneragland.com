import Typography from "typography"

import grandViewTheme from 'typography-theme-grand-view'
grandViewTheme.baseFontSize = '18px'

grandViewTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'a': {
    color: "#7faf1b",
  },
  'blockquote': {
    borderLeftColor: "#1b7faf",
  }
})

const typography = new Typography(grandViewTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
