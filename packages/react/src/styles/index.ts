import {
  colors,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from "@redshiftui/tokens";
import { createStitches, defaultThemeMap } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space",
  },

  theme: {
    colors: colors,
    fontSizes: fontWeights,
    fontWeights: fontWeights,
    fonts: fonts,
    lineHeights: lineHeights,
    space: space,
    radii: radii,
  },
});
