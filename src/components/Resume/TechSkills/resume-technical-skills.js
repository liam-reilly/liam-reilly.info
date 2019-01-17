import React, { Component } from 'react';

import css from './resume-technical-skills.css';

export default class ResumeTechnicalSkills extends Component{

    render() {
        return (
            <div className={css.technical_skills}>
                <h2>technical skills</h2>
                
                <ul>
                    <li>Cloud Infrastructure: <span>Amazon Web Services</span></li>
                    <li>Languages: <span>C# (.NET Core 2.x)</span></li>
                    <li>Web: <span>React, Redux, GraphQL, Webpack, ES6, ASP.NET MVC, WebAPI</span></li>
                    <li>Databases: <span>Elasticsearch, DynamoDB, MS SQL, MySQL (Amazon RDS)</span></li>
                    <li>Messaging: <span>SQS, SNS</span></li>
                    <li>Testing: <span>NUnit, Jest, Enzyme, Stubby</span></li>
                    <li>DevOps: <span>Terraform, Docker, ECS/Fargate, Serverless (Lambda)</span></li>
                    <li>CI/CD: <span>CircleCI, GoCD</span></li>
                    <li>Version control: <span>Git</span></li>
                </ul>
                
                <p>** The list above only includes tech used daily in my current role **</p>
            </div>
        );
    }

}