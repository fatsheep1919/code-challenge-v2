export const light = {
  modal: {
    bg: '#fff',
    title: '#2c3238',
    close: {
      fg: '#2b3138',
      bg: '#f6fafc',
    },
    address: {
      title: '#6b7889',
      input: {
        fg: '#768392',
        bg: '#edf2f9',
      },
      arrow: '#4f5b70',
    },
    amount: {
      title: '#687586',
      input: {
        border: '#d1d7de',
        fg: '#2b3139',
      },
      tag: {
        bg: '#edf2f9',
      },
    },
    message: {
      bg: '#edf3f9',
      fg: '#32383f',
    },
    button: {
      bg: '#2b3138',
      fg: '#fff',
    },
  }
};

export const dark = {
  modal: {
    bg: '#202428',
    title: '#eef3fa',
    close: {
      fg: '#edf1f8',
      bg: '#2b3238',
    },
    address: {
      title: '#667586',
      input: {
        fg: '#657183',
        bg: '#141417',
      },
      arrow: '#475368',
    },
    amount: {
      title: '#667586',
      input: {
        border: '#39404b',
        fg: '#edf2f9',
      },
      tag: {
        bg: '#2b3038',
      },
    },
    message: {
      bg: '#131517',
      fg: '#eaeef6',
    },
    button: {
      bg: '#edf2f9',
      fg: '#000',
    },
  }
};

const THEMES = {
  light,
  dark,
}

export type THEME_TYPE = 'light' | 'dark';
export default THEMES;
