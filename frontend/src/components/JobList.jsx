import React from 'react'
import { useJobContext } from '../context/JobContext';
import JobCard from './JobCard';
import '../css/JobList.css'

const JobList = () => {
    const { jobs, loading } = useJobContext();

    if (loading) return <div className="loading-message">Loading jobs...</div>;
  
    return (
      <div className="job-list-container">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    );
}

export default JobList