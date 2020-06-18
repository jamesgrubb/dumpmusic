import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
@font-face {
 font-family: 'Recursive';
 src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1070/recursive-MONO_CASL_wght_slnt_ital--full_gsub--2019_12_21-21_07.woff2') format('woff2-variations');
 font-weight: 300 1000;
}
:root{
    --color-grass-light: #EFFAEF;
    --color-gray-dark: #515151;
    --text-base-size: 1em;
    --text-scale:1.2;
    --text-scale-ratio: 1.2;
    --text-xs: calc((1em / var(--text-scale-ratio)) / var(--text-scale-ratio));
    --text-sm: calc(var(--text-xs) * var(--text-scale-ratio));
    --text-md: calc(var(--text-sm) * var(--text-scale-ratio) * var(--text-scale-ratio));
    --text-lg: calc(var(--text-md) * var(--text-scale-ratio));
    --text-xl: calc(var(--text-lg) * var(--text-scale-ratio));
    --text-xxl: calc(var(--text-xl) * var(--text-scale-ratio));
    --space-unit: 1em;
    --space-xs:   calc(0.5 * var(--space-unit));
    --space-sm:   calc(0.75 * var(--space-unit));
    --space-md:   calc(1.25 * var(--space-unit));
    --space-lg:   calc(2 * var(--space-unit));
    --space-xl:   calc(3.25 * var(--space-unit));
}

@media (min-width: 64rem) { /* responsive decision applied to all text elements */
  :root {
    --text-base-size: 1.25em;
    --text-scale-ratio: 1.25;
    --space-unit: 1.25em;
  }
}
button {
  font-family: inherit; /* For all browsers */
  font-size: 100%; /* For all browsers */
  line-height: 1.15; /* For all browsers */
  margin: 0; /* Firefox and Safari have margin */
  overflow: visible; /* Edge hides overflow */
  text-transform: none; /* Firefox inherits text-transform */
  -webkit-appearance: button; /* Safari otherwise prevents some styles */
}

button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring {
  outline: 1px dotted ButtonText;
}
*{
    margin: 0;
    box-sizing: border-box;
    padding: 0;
  
    }
     
body{
    font-family: Recursive, sans-serif;
    font-variation-settings: 'wght' 300, "CASL" 0;
    font-size: var(--text-xxl);
    line-height: 1.5;
}

`

export default GlobalStyles
