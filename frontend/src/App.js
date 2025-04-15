import React from 'react';
import Header from './components/Header';
import JobList from './components/JobList';
import { JobProvider } from './context/JobContext';

const App = () => {
  return (
    <JobProvider>
      <Header />
      <JobList />
    </JobProvider>
  );
};

export default App;