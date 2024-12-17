import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { GlobalStyle } from './styles/globalStyle.ts';
import { AppThemeProvider } from './contexts/AppThemeConstext.tsx';
import { Provider } from 'react-redux';
import store from './redux/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppThemeProvider>
        <GlobalStyle />
        <App />
      </AppThemeProvider>
    </Provider>
  </React.StrictMode>
)