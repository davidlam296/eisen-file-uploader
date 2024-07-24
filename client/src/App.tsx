import React from 'react';
import styled from 'styled-components'
import { Files } from './components/Files';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const AppContainer = styled.div`
  min-height: 100vh;
  font-family: sans-serif;
  padding: 0;
  margin: 0;
`

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer>
        <Files />
        <ToastContainer />
      </AppContainer>
    </QueryClientProvider>
  );
}
