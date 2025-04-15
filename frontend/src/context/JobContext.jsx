import React from 'react'
import {tempData} from '../data/tempData'
import { createContext,useContext,useState,useEffect } from 'react'

const JobContext = createContext();

export const useJobContext = () => useContext(JobContext);

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ title: '', location: '', type: '', salary: '' });

  const fetchJobs = async () => {
    setLoading(true);
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Filter jobs based on the filters
      setJobs(tempData.filter(job =>
        job.title.toLowerCase().includes(filters.title.toLowerCase()) &&
        job.location.toLowerCase().includes(filters.location.toLowerCase()) &&
        job.type.toLowerCase().includes(filters.type.toLowerCase()) &&
        job.salary.toLowerCase().includes(filters.salary.toLowerCase())
      ));
    } catch (error) {
      console.error('Failed to fetch jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [filters]);

  return (
    <JobContext.Provider value={{ jobs, loading, filters, setFilters }}>
      {children}
    </JobContext.Provider>
  );
};

