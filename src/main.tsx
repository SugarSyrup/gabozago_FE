/* eslint-disable import/no-extraneous-dependencies */
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { APIProvider as GoogleMapAPIProvider } from '@vis.gl/react-google-maps';
import { GlobalFont, GlobalStyle, theme } from './styles';
import router from './router';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_Project_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_Storage_Bucket,
  messagingSenderId: import.meta.env.VITE_FIREBASE_Messaging_Seder_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_Measurement_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
