import { Quasar } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';

export default (app) => {
  app.use(Quasar, {
    plugins: {},
    config: {
      dark: true,
      brand: {
        primary: "#339989",
        secondary: "#7f69ac",
        accent: "#7DE2D1",
        dark: "#1a1c1b",
        darkPage: "#2B2C28",
        positive: "#259E31",
        negative: "#cd2f2f",
        info: "#1a9ccb",
        warning: "#d49e09",
      },
    },
  });
};
