import React, { Component } from 'react';

import css from './styles/resume-technical-skills.css';

export default class ResumeTechnicalSkills extends Component{

    render() {
        return (
            <div className={css.technical_skills}>
                <h2>technical skills</h2>
                
                <ul>
                    <li>Cloud: <span>Amazon Web Services, Microsoft Azure</span></li>
                    <li>Languages: <span>C# (Full .NET and .NET Core 2)</span></li>
                    <li>Web: <span>React, Redux, GraphQL, Webpack, ES6, ASP.NET MVC, WebAPI</span></li>
                    <li>Databases: <span>DynamoDB, MS SQL</span></li>
                    <li>Messaging: <span>SQS, Azure Service Bus</span></li>
                    <li>DevOps: <span>Terraform, Docker, Vagrant, Rancher</span></li>
                    <li>CI/CD: <span>GoCD</span></li>
                    <li>Version control: <span>Git</span></li>
                    <li>Desktop: <span>WCF, WPF</span></li>
                </ul>
                
                <p>** The list above only includes technologies I have worked with day to day the previous 12 months **</p>
            </div>
        );
    }

}