import { IProject } from '../pages/sections/components/project';

export const projectsData: IProject[] = [
  {
    name: 'Angular .Net Store',
    liveUrl: null,
    codeUrl: 'https://github.com/ouss4m4/NgNetStore',
    description:
      'eCommerce application built from scrach using .Net core 6 for the backend, Redis as db for shopping cart, SQLServer for MS.Identity and Databse, Stripe as a payment Method, Angular for the frontend ',
    imageName: 'ngnetstore.png',
    imageLabel: 'Angular .Net Store',
    stack: [
      { filename: 'angular-logo.svg', label: 'Angular' },
      { filename: 'microsoft-net.svg', label: '.Net Core' },
      { filename: 'stripe.svg', label: 'Stripe' },
    ],
  },
];
