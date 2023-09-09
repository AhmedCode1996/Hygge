export const COLORS = {
  light: {
    primary: {
      green: "#00CC96",
      lightGreen: "#E6faf5",
    },
    seconday: {
      blue: "#2975FF",
      lightBlue: "#EAF2FF",
    },
    tertiary: {
      yellow: "#FFC123",
      lightYellow: "#FFF9EA",
      pink: "#FF66A0",
      lightPink: "#FFF0F6",
    },
    accent: {
      gray: "#F6F7FB",
      red: "#FF0000",
    },
    mainColors: {
      white: "#FFFFFF",
      black: "#000000",
    },
    darkText: {
      dark100: "#1A202C",
      dark64: "#6D7078",
      dark40: "#A3A6AB",
      dark24: "#C8CACD",
    },
    lightText: {
      light100: "#F7FAFC",
      light64: "#FAFCFD",
      light40: "#FCFDFE",
      light24: "#FDFEFE",
    },
  },
  dark: {},
};
export const TYPOGRAPHY = {
  xs: `${12 / 16}rem`,
  sm: `${14 / 16}rem`,
  base: `${16 / 16}rem`,
  lg: `${20 / 16}rem`,
  xl: `${24 / 16}rem`,
  xl2: `${32 / 16}rem`,
  xl3: `${40 / 16}rem`,
  xl4: `${64 / 16}rem`,
};

export const FONT_FAMILY = {
  paytone: "'Paytone One', sans-serif",
  bespoke: "'Bespoke Serif', serif",
  telma: "'Telma', cursive",
  ubuntu: "'Ubuntu', sans-serif",
  pally: "'Pally', sans-serif",
  pilcrow: "'Pilcrow Rounded', sans-serif",
  asap: "'Asap', sans-serif",
};

export const BREAKPOINTS = {
  tabletMax: 950,
};

export const QUERIES = {
  tabletAndDown: `(max-width:${BREAKPOINTS.tabletMax / 16}rem)`,
};
