import React, { Component } from 'react';

import css from './resume-technical-skills.css';

export default class ResumeTechnicalSkills extends Component{

    render() {
        return (
            <div className={css.technical_skills}>
                <h2>technical skills</h2>
                
                <ul>
                    <li>Cloud Providers: <span>Amazon Web Services, Google Cloud Platform, Azure</span></li>
                    <li>Backend: <span>C# (.NET Core)</span></li>
                    <li>Web: <span>React, NextJS/Gatsby, GraphQL, ES6, ASP.NET MVC</span></li>
                    <li>Data Stores: <span>DynamoDB, Elasticsearch, MSSQL/MySQL, PostgreSQL</span></li>
                    <li>Serverless: <span>Lambda, Fargate</span></li>
                    <li>Container Orchestration: <span>Kubernetes, ECS, Docker</span></li>
                    <li>Messaging: <span>SQS, SNS</span></li>
                    <li>Testing: <span>NUnit, Jest, React Testing Library</span></li>
                    <li>Dev/Git Ops: <span>Terraform, CircleCI, GoCD, ArgoCD, Jenkins</span></li>
                </ul>
                
                <p>** The list above is limited to more recently used technologies and is by no means exhaustive**</p>
            </div>
        );
    }

}