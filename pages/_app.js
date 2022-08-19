import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";

import "../styles/globals.css";
import { theme } from "../utils/theme";
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";

import { wrapper, store } from "../redux/store";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
 Component,
 emotionCache = clientSideEmotionCache,
 pageProps,
}) {
 return (
  <Provider store={store}>
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
   </Provider>
 );
}

export default wrapper.withRedux(MyApp);