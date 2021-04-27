import Typography from 'typography'

// We use Futura PT, but back it up with the system font stack.
// The scaleRatio is overwritten for smaller breakpoints in src/components/Layout

const typography = new Typography({
  title: 'Hibiki Publishing',
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  headerFontFamily: [
    'Futura PT',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
  bodyFontFamily: [
    'Futura PT',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
  scaleRatio: 3.157,
  headerWeight: 700,
  overrideStyles: () => ({
    img: {
      marginBottom: 0,
    },
  }),
})

export default typography
