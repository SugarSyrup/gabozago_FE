import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { APIProvider as GoogleMapAPIProvider } from '@vis.gl/react-google-maps';
import { GlobalFont, GlobalStyle, theme } from './styles';
import router from './router';

export const queryClient = new QueryClient();

// This is develop branch
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GoogleMapAPIProvider apiKey={import.meta.env.VITE_GOOGLEMAP_API_KEY}>
          <GlobalFont />
          <GlobalStyle />
          <RouterProvider router={router} />
        </GoogleMapAPIProvider>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </RecoilRoot>,
);
