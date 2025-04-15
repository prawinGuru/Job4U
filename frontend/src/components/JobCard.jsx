import React from 'react'
import '../css/JobCard.css'

const JobCard = ({job}) => {
    return (
        <div className="job-card">
          <div className="job-card-top">
            <img src={job.logo} alt="Company Logo" className="company-logo" />
            <span className="posted-tag">{job.posted}</span>
          </div>
          <h2 className="job-title">{job.title}</h2>
          <p className="job-meta">👨‍💻 {job.experience} Exp &nbsp; 📍 {job.location} &nbsp; 💸 {job.salary}</p>
          <ul className="job-features">
            {job.features.map((feature, idx) => <li key={idx}>{feature}</li>)}
          </ul>
          <button className="apply-btn">Apply Now</button>
        </div>
      );
}

export default JobCard