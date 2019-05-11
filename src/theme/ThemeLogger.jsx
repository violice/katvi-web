import { withTheme } from 'styled-components';

const ThemeLogger = withTheme(({ theme }) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('%cTHEME', 'color:#7D4CDB', theme);
  }
  return null;
});

export default ThemeLogger;
