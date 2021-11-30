import { IProject } from '../pages/sections/components/project';

export const projectsData: IProject[] = [
  {
    name: 'SnapShot',
    description:
      'Full Stack projects allows users to browse images. requires login to post and comment on other people photos. hosted on Heroku Free Tier slows the initial load',
    liveUrl: 'https://mern-app.herokuapp.com/',
    codeUrl: 'https://github.com/ouss4m4/snapShot',
    imageLabel: 'Snapshot',
    imageName: 'snapshot.png',
    stack: [
      { filename: 'mongodb-logo.svg', label: 'MongoDb' },
      { filename: 'express-logo.svg', label: 'MongoDb' },
      { filename: 'react-logo.svg', label: 'React' },
      { filename: 'node-logo.svg', label: 'NodeJs' },
      { filename: 'material-ui-logo.svg', label: 'Material UI' },
    ],
    width: '120',
  },
  {
    name: 'Angular .Net Store',
    liveUrl: null,
    codeUrl: 'https://github.com/ouss4m4/NgNetStore',
    description:
      'eCommerce application built from scrach using .Net core 6 for the backend, Redis as db for shopping cart, SQLServer for MS.Identity and Databse, Stripe as a payment Method, Angular for the frontend ',
    imageName: 'ngnetstore.png',
    imageLabel: 'Angular .Net Store',
    stack: [
      { filename: 'netcore.svg', label: '.Net Core' },
      { filename: 'ms-sql-logo.svg', label: 'SqlServer' },
      { filename: 'redis-official.svg', label: 'Stripe' },
      { filename: 'angular-logo.svg', label: 'Angular' },
      { filename: 'stripe.svg', label: 'Stripe' },
      { filename: 'azure-logo.svg', label: 'Azure', width: 120 },
    ],
  },
  {
    name: 'Task Manager',
    description:
      'Drag n Drop Task manager with persistance done in react deployed with Amazon Amplify',
    liveUrl: 'https://master.d3e64dmv8w4bbk.amplifyapp.com/',
    codeUrl: 'https://github.com/ouss4m4/Task-tracker',
    imageName: 'taskmanager.png',
    imageLabel: 'Task Manager',
    stack: [
      { filename: 'react-logo.svg', label: 'React' },
      { filename: 'rxjs-logo.svg', label: 'Rxjs' },
      { filename: 'node-logo.svg', label: 'Nodejs' },
      { filename: 'netlify-logo.svg', label: 'Netlify' },
    ],
    width: '890',
    height: '560',
  },
  {
    name: 'Reactive Programming',
    description:
      'With the introduction of React hooks. working with rxjs subscriptions it now easily maintainable and the result is a smooth reactive UI/UX',
    liveUrl: 'https://master.d25nu9lnqvdjkf.amplifyapp.com/',
    codeUrl: 'https://github.com/ouss4m4/react-ts',
    imageName: 'rxjs-react-typescript.png',
    imageLabel: 'Rxjs React Perfection',
    stack: [
      { filename: 'react-logo.svg', label: 'React' },
      { filename: 'rxjs-logo.svg', label: 'Rxjs' },
      { filename: 'node-logo.svg', label: 'Nodejs' },
      { filename: 'netlify-logo.svg', label: 'Netlify' },
    ],
  },
  {
    name: 'Sales Order Manager',
    liveUrl: 'https://salesorder-app.azurewebsites.net/',
    codeUrl: 'https://github.com/ouss4m4/sales-order',
    description:
      'WebApp to create SalesOrders for clients. Built from scratch with Net Core and React. Deployed at Azure',
    imageName: 'salesorder.png',
    imageLabel: 'Sales Order',
    stack: [
      { filename: 'netcore.svg', label: '.Net Core' },
      { filename: 'ms-sql-logo.svg', label: 'SqlServer' },
      { filename: 'react-logo.svg', label: 'React' },
      { filename: 'ts-logo.svg', label: 'TypeScript' },
      { filename: 'azure-logo.svg', label: 'Azure', width: 120 },
    ],
  },
  {
    name: 'Tournament Tracker',
    description:
      'Desktop app built with WinForms on .NetCore to create players add them to teams, create tournaments using these teams and rewards, depending on number of starting teams,assign BYEs and rounds ',
    imageName: 'tournament-tracker.png',
    imageLabel: 'Tournament Tracker',
    codeUrl: 'https://github.com/ouss4m4/TournamentTracker',
    liveUrl: null,
    stack: [
      { filename: 'c--4.svg', label: 'C sharp' },
      { filename: 'netcore.svg', label: '.Net Core' },
      { filename: 'ms-sql-logo.svg', label: 'SqlServer' },
    ],
  },
  {
    name: 'K8S MicroServices API',
    description:
      'API Microservice architecture built with .Net Core 5 using RabbitMq as eventbus and Docker with Kubernetes for deployment',
    codeUrl: 'https://github.com/ouss4m4/k8s-net-rabbitmq',
    liveUrl: null,
    imageName: 'k8s-ms-arch.png',
    imageLabel: 'MicroService Architecture',
    stack: [
      { filename: 'c--4.svg', label: 'C sharp' },
      { filename: 'ms-sql-logo.svg', label: 'SqlServer' },
      { filename: 'docker.svg', label: 'Docker' },
      { filename: 'kubernetes-logo.svg', label: 'Kubernetes', width: 190 },
      { filename: 'netcore.svg', label: '.Net Core' },
    ],
  },
  {
    name: 'Clean Code Architecture ',
    description:
      'Domain-Driven Design with Clean Code Architecture Concepts API to create Clients Items and Orders. Architecture understanding is the GOAL of the api not the data',
    liveUrl: 'https://ddd-sales.azurewebsites.net/api/v1',
    codeUrl: 'https://github.com/ouss4m4/ddd-sales',
    imageName: 'clean-architecture.jpg',
    imageLabel: 'Clean Code Architecture',
    stack: [],
  },
];
