export interface ITech {
  filename: string;
  label: string;
  stack: IStack[];
  width?: number;
  height?: number;
}

interface TechStack {
  [key: string]: ITech;
}

export type IStack =
  | "Frontend"
  | "Backend"
  | "Devops"
  | "Mobile"
  | "Desktop"
  | "Other";

const TechsInfo: TechStack = {
  angular: {
    filename: "angular-logo.svg",
    label: "Angular",
    stack: ["Frontend"],
  },
  azure: {
    filename: "azure-logo.svg",
    label: "Azure",
    width: 120,
    stack: ["Devops"],
  },
  aws: {
    filename: "aws-logo.svg",
    label: "Amazon Web Services",
    stack: ["Devops"],
  },
  csharp: {
    filename: "c--4.svg",
    label: "C sharp",
    stack: ["Frontend", "Backend", "Desktop"],
  },
  dotnet: {
    filename: "netcore.svg",
    label: ".Net Core",
    stack: ["Backend", "Frontend", "Desktop"],
  },
  docker: { filename: "docker.svg", label: "Docker", stack: ["Devops"] },
  electron: {
    filename: "electron-logo.svg",
    label: " ElectronJs",
    stack: ["Frontend", "Desktop"],
  },
  express: {
    filename: "express-logo.svg",
    label: "ExpressJS",
    stack: ["Backend"],
  },
  firebase: {
    filename: "firebase-logo.svg",
    label: "Firebase",
    stack: ["Devops"],
  },
  flutter: {
    filename: "flutter-logo.svg",
    label: "Flutter",
    stack: ["Mobile"],
  },
  gatsby: {
    filename: "gatsby-logo.svg",
    label: "Gatsbyjs",
    stack: ["Frontend"],
  },
  git: { filename: "git-logo.svg", label: "Git", stack: ["Other"] },
  jira: { filename: "jira-1.svg", label: "Jira", stack: ["Other"] },
  material: {
    filename: "material-ui-logo.svg",
    label: "Material UI",
    stack: ["Frontend"],
  },
  mongodb: {
    filename: "mongodb-logo.svg",
    label: "MongoDb",
    stack: ["Backend"],
  },
  nativescript: {
    filename: "nativescript-logo.svg",
    label: "Nativescript",
    stack: ["Mobile"],
  },
  node: { filename: "node-logo.svg", label: "NodeJs", stack: ["Backend"] },
  netlify: {
    filename: "netlify-logo.svg",
    label: "Netlify",
    stack: ["Devops"],
  },
  rabbitmq: {
    filename: "rabbitmq-logo.svg",
    label: "RabbitMQ",
    width: 180,
    stack: ["Backend"],
  },
  react: { filename: "react-logo.svg", label: "React", stack: ["Frontend"] },
  redis: { filename: "redis-official.svg", label: "Redis", stack: ["Backend"] },
  rxjs: { filename: "rxjs-logo.svg", label: "Rxjs", stack: ["Frontend"] },
  sap: { filename: "sap.svg", label: "SAP", stack: ["Other"] },
  sqlserver: {
    filename: "ms-sql-logo.svg",
    label: "SqlServer",
    stack: ["Backend"],
  },
  stripe: { filename: "stripe.svg", label: "Stripe", stack: ["Other"] },
  typescript: {
    filename: "ts-logo.svg",
    label: "TypeScript",
    stack: ["Frontend", "Backend", "Desktop", "Mobile"],
  },
  websocket: {
    filename: "websocket.svg",
    label: "Websocket",
    stack: ["Other"],
  },
  webpack: { filename: "webpack-logo.svg", label: "Webpack", stack: ["Other"] },
  sapbone: {
    filename: "sap-b1-logo.png",
    label: "SAP Business One",
    width: 180,
    stack: ["Other"],
  },
  kubernetes: {
    filename: "kubernetes-logo.svg",
    label: "Kubernetes",
    width: 190,
    stack: ["Devops"],
  },
};

export default TechsInfo;
