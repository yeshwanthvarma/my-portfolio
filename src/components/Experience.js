import React from 'react';

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div>
        <h3>Software Developer at Capital One</h3>
        <p>Apr 2023 - Present</p>
        <ul>
          <li>Improved system performance by 30% through developing a Node.js and Kafka based microservices architecture for real-time data processing.</li>
          <li>Leveraged Azure API Management to establish an API Gateway, centralizing API oversight and boosting security.</li>
          <li>Engineered RESTful services with OAuth authentication, achieving an 80% authorization rate.</li>
          <li>Implemented Continuous Integration and Continuous Deployment pipelines using Azure DevOps.</li>
        </ul>
      </div>
      <div>
        <h3>Full Stack Engineer at Northern Trust Corporation</h3>
        <p>Jan 2022 - Mar 2023</p>
        <ul>
          <li>Enhanced performance by 25% and security by 20% through migrating services from Java 8 to Java 11.</li>
          <li>Developed a serverless application using AWS Lambda, API Gateway, and DynamoDB.</li>
          <li>Implemented AWS infrastructure for backup and restore, ensuring 99.9% uptime and high availability practices.</li>
        </ul>
      </div>

    </section>
  );
};

export default Experience;
