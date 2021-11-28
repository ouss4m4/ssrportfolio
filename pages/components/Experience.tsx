import { NextPage } from 'next';
import Image from 'next/image';

const Experience: NextPage = () => {
  return (
    <div className="min-h-screen font-lines container mx-auto max-w-7xl">
      <h2
        id="experience"
        className="mb-8 pt-8 text-4xl font-bold tracking-wider  font-lines text-center"
      >
        Professional Experience
      </h2>
      <div className="flex">
        {/* Left */}
        <div className="w-3/5 text-justify">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl mt-2 font-bold tracking-wider  font-headers">
              Software Developer
            </h3>
            <span className="italic font-bold text-md pr-8 tracking-widest">
              • 2018 - Today
            </span>
          </div>

          <a
            href="https://www.linkedin.com/company/pharmainvestspa"
            target="_blank"
            rel="noreferrer"
            className="font-medium tracking-widest cursor-pointer text-accent font-lines mb-6 block"
          >
            @PharmaInvest SPA
          </a>

          <p className="mb-5">
            As the lead developer, i am responsibe on creating, maintaining, and
            promoting the use of digital solutions to help the company on it's
            mission towards digital transformation.
          </p>
          <p className="mb-5">
            - I Developed and published a
            <strong>cross-platform mobile app</strong> that allows customers to
            create purchase orders and monitor their progress. as well as
            invoices and payment papers..
          </p>
          <p className="mb-5">
            - To ensure a synchronized ordering experience from multiple
            devices, I deployed a <strong>website</strong> connected to the same{' '}
            <strong>API</strong> as the mobile <b>app</b> through{' '}
            <b>web socket.</b>
          </p>
          <p className="mb-5">
            - We automated the invoicing and printing process by creating a
            <strong> desktop software</strong> that connected to an API
            developed on top of <strong>SAP B1 Service Layer.</strong>
          </p>
          <p className="mb-5">
            - Instead of using the <strong>ERP Client App</strong>, Sales orders
            are now created using a modern <strong>web app -PWA-</strong> with a
            customized <strong>UX/UI</strong> designed to expedite the ordering
            process.
          </p>
          <p className="mb-5">
            - We track orders from the point of creation and validation to
            packaging and shipment using mobile apps with{' '}
            <strong>QR scanners.</strong>
          </p>
          <p className="mb-5">
            - All repetitive procedures that were previously done manually are
            now handled via autonomous APIs thanks to{' '}
            <strong>Nodejs and Linux Cron.</strong>
          </p>
        </div>
        {/* Right */}
        <div className="w-2/5 flex items-center justify-center">
          <div className="relative w-72 rounded-lg">
            <Image
              src="/images/phi-app.webp"
              alt="pharma invest mobile app"
              width="150"
              height="280"
              layout="responsive"
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
