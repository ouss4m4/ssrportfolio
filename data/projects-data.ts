import { IProject } from "../sections/components/project";
import TechsInfo from "./techsinfo";

export const projectsData: IProject[] = [
  {
    name: "SnapShot",
    description:
      "Full Stack projects allows users to browse images. requires login to post and comment on other people photos. hosted on Heroku Free Tier slows the initial load",
    liveUrl: "https://mern-app.herokuapp.com/",
    codeUrl: "https://github.com/ouss4m4/snapShot",
    imageLabel: "Snapshot",
    imageName: "snapshot.png",
    stack: [
      TechsInfo.mongodb,
      TechsInfo.react,
      TechsInfo.node,
      TechsInfo.material,
    ],
  },
  {
    name: "Angular .Net Store",
    liveUrl: null,
    codeUrl: "https://github.com/ouss4m4/NgNetStore",
    description:
      "eCommerce application built from scrach using .Net core 6 for the backend, Redis as db for shopping cart, SQLServer for MS.Identity and Databse, Stripe as a payment Method, Angular for the frontend ",
    imageName: "ngnetstore.png",
    imageLabel: "Angular .Net Store",
    stack: [
      TechsInfo.dotnet,
      TechsInfo.sqlserver,
      TechsInfo.redis,
      TechsInfo.angular,
      TechsInfo.stripe,
    ],
  },
  {
    name: "Sales Order Manager",
    liveUrl: "https://salesorder-app.azurewebsites.net/",
    codeUrl: "https://github.com/ouss4m4/sales-order",
    description:
      "Enterprise like application to create sales orders, And manage clients and procuts. API developed by .Net Core 6, with Role based authorization, Microsoft SQLServer for the database, ORM Entity Framework,",
    imageName: "salesorder.png",
    imageLabel: "Sales Order",
    stack: [
      TechsInfo.dotnet,
      TechsInfo.sqlserver,
      TechsInfo.react,
      TechsInfo.azure,
    ],
  },
  {
    name: "Tournament Tracker",
    description:
      "Desktop app built with WinForms on .NetCore to create players add them to teams, create tournaments using these teams and rewards, depending on number of starting teams,assign BYEs and rounds ",
    imageName: "tournament-tracker.png",
    imageLabel: "Tournament Tracker",
    codeUrl: "https://github.com/ouss4m4/TournamentTracker",
    liveUrl: null,
    stack: [TechsInfo.csharp, TechsInfo.dotnet, TechsInfo.sqlserver],
  },
  {
    name: "Task Manager",
    description:
      "Drag n Drop Task manager with persistance done in react deployed with Amazon Amplify",
    liveUrl: "https://master.d3e64dmv8w4bbk.amplifyapp.com/",
    codeUrl: "https://github.com/ouss4m4/Task-tracker",
    imageName: "taskmanager.png",
    imageLabel: "Task Manager",
    stack: [TechsInfo.react, TechsInfo.rxjs, TechsInfo.netlify, TechsInfo.node],
    width: "890",
    height: "560",
  },
  {
    name: "Reactive Programming",
    description:
      "With the introduction of React hooks. working with rxjs subscriptions it now easily maintainable and the result is a smooth reactive UI/UX",
    liveUrl: "https://master.d25nu9lnqvdjkf.amplifyapp.com/",
    codeUrl: "https://github.com/ouss4m4/react-ts",
    imageName: "rxjs-react-typescript.png",
    imageLabel: "Rxjs React Perfection",
    stack: [TechsInfo.react, TechsInfo.rxjs, TechsInfo.node, TechsInfo.netlify],
  },

  {
    name: "K8S MicroServices API",
    description:
      "API Microservice architecture built with .Net Core 5 using RabbitMq as eventbus and Docker with Kubernetes for deployment",
    codeUrl: "https://github.com/ouss4m4/k8s-net-rabbitmq",
    liveUrl: null,
    imageName: "k8s-ms-arch.png",
    imageLabel: "MicroService Architecture",
    stack: [
      TechsInfo.csharp,
      TechsInfo.sqlserver,
      TechsInfo.docker,
      TechsInfo.kubernetes,
    ],
  },
  {
    name: "Clean Code Architecture ",
    description:
      "Domain-Driven Design with Clean Code Architecture Concepts API to create Clients Items and Orders. Architecture understanding is the GOAL of the api not the data",
    liveUrl: "https://ddd-sales.azurewebsites.net/api/v1",
    codeUrl: "https://github.com/ouss4m4/ddd-sales",
    imageName: "clean-architecture.jpg",
    imageLabel: "Clean Code Architecture",
    stack: [
      TechsInfo.typescript,
      TechsInfo.node,
      TechsInfo.mongodb,
      TechsInfo.azure,
    ],
  },
];
