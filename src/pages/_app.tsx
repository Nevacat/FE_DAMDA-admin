import '@/styles/globals.css';
import theme from '@/styles/theme';
import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProps } from 'next/app';
import GlobalHead from '@/components/common/GlobalHead';
import Layout from '@/components/common/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalHead />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
      <ToastContainer position="top-center" autoClose={3000} />
    </QueryClientProvider>
  );
}
