import { NextPage } from 'next';
import Image from 'next/image';

const Experience: NextPage = () => {
  return (
    <div className="container min-h-screen px-2 mx-auto bg-white font-lines max-w-7xl">
      <h2
        id="experience"
        className="pt-8 mb-8 text-4xl font-bold tracking-wider font-lines"
      >
        Work Experience
      </h2>
      <h3 className="mt-2 text-2xl font-bold tracking-wider font-headers">
        Software Developer
      </h3>
      <div className="flex items-center justify-between max-w-lg mb-6">
        <a
          href="https://www.linkedin.com/company/pharmainvestspa"
          target="_blank"
          rel="noreferrer"
          className="block font-bold tracking-widest cursor-pointer font-lines"
        >
          <span className="pr-8 italic font-bold tracking-widest text-md">
            • 2018 - Today
          </span>
          @PharmaInvest SPA
        </a>
      </div>
      <p className="max-w-4xl text-lg">
        As the lead developer, i am responsibe on creating, maintaining, and
        promoting the use of digital solutions to help the company on its
        mission towards digital transformation.
      </p>

      {/* ----------PUBLIC APPS------------------------------- */}
      <div className="max-w-4xl p-8 my-8 shadow-xl rounded-2xl">
        <div className="flex gap-4">
          <div className="m-2">
            <Image
              src="/images/phi-app.png"
              alt="Pharma Invest Mobile App"
              width="260"
              height="560"
              layout="intrinsic"
              quality="100"
            />
          </div>
          <div className="max-w-md p-8">
            <h3 className="text-xl font-bold tracking-wide text-center font-headers">
              Public Apps
            </h3>
            <ul className="text-lg tracking-wide list-disc list-inside font-lines">
              <li className="mt-4">
                I Developed and published a
                <strong>cross-platform mobile app</strong> that allows customers
                to create purchase orders and monitor their progress. as well as
                invoices and payment papers
              </li>
              <li className="mt-4">
                To ensure a synchronized ordering experience from multiple
                devices, I deployed a <strong>website</strong> connected to the
                same
                <strong>API</strong> as the mobile <b>app</b> through web socket
              </li>
            </ul>
            <div>
              <div className="flex gap-4 mt-6">
                <Image
                  src="/images/nativescript-logo.svg"
                  alt="NativeScript Framework"
                  width="65"
                  height="65"
                  layout="intrinsic"
                />
                <Image
                  src="/images/angular-logo.svg"
                  alt="Angular"
                  width="65"
                  height="65"
                  layout="intrinsic"
                />
                <Image
                  src="/images/node-logo.svg"
                  alt="Node"
                  width="65"
                  height="65"
                  layout="intrinsic"
                />
                <Image
                  src="/images/sap.svg"
                  alt="Sap"
                  width="65"
                  height="65"
                  layout="intrinsic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -----------ADC--------------------------------------- */}
      <div className="max-w-4xl p-8 mt-20 shadow-xl rounded-2xl ">
        <h3 className="mb-5 text-xl font-bold tracking-wide text-center font-headers">
          Sales Order Application
        </h3>
        <div className="flex flex-col gap-4">
          <div className="m-2 shadow-md">
            <Image
              src="/images/adc-app.png"
              alt="Pharma Invest Mobile App"
              width="240"
              height="135"
              layout="responsive"
              quality="100"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <ul className="px-6 text-lg tracking-wide list-disc list-inside font-lines">
            <li className="mt-4">
              Instead of using the ERP Client App, Sales orders are now created
              using a modern web app -PWA- with a customized UX/UI designed to
              expedite the ordering process.
            </li>
          </ul>
          <div className="flex justify-center mt-8 gap-x-7">
            {/*  <Image
              src="/images/sap-logo.png"
              alt="SAP"
              width="120"
              height="85"
              layout="intrinsic"
            /> */}
            <Image
              src="/images/sap-b1-logo.png"
              alt="SAP Business One"
              width="180"
              height="65"
              layout="intrinsic"
            />
            <Image
              src="/images/electron-logo.svg"
              alt="Electron"
              width="65"
              height="65"
              layout="intrinsic"
            />
            <Image
              src="/images/angular-logo.svg"
              alt="Angular"
              width="65"
              height="65"
              layout="intrinsic"
            />
            <Image
              src="/images/node-logo.svg"
              alt="Node"
              width="65"
              height="65"
              layout="intrinsic"
            />
            <Image
              src="/images/express-logo.svg"
              alt="Node"
              width="65"
              height="65"
              layout="intrinsic"
            />
          </div>
        </div>
      </div>

      {/* -----------PPD--------------------------------------- */}
      <div className="max-w-4xl p-8 my-20 shadow-xl rounded-2xl ">
        <h3 className="mb-5 text-xl font-bold tracking-wide text-center font-headers">
          Shipping and Distibution
        </h3>
        <div className="flex flex-col gap-4">
          <div className="m-2 shadow-md">
            <Image
              src="/images/ppd.png"
              alt="Pharma Invest Mobile App"
              width="220"
              height="160"
              layout="responsive"
              quality="100"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <ul className="px-6 text-lg tracking-wide list-disc list-inside font-lines">
            <li className="mt-4">
              We automated the invoicing and printing process by creating a
              desktop software that connected to an API developed on top of SAP
              B1 Service Layer.
            </li>
          </ul>
          <div className="flex justify-center mt-8 gap-x-7">
            <Image
              src="/images/sap-b1-logo.png"
              alt="SAP Business One"
              width="180"
              height="65"
              layout="intrinsic"
            />
            <Image
              src="/images/electron-logo.svg"
              alt="Electron"
              width="65"
              height="65"
              layout="intrinsic"
            />
            <Image
              src="/images/angular-logo.svg"
              alt="Angular"
              width="65"
              height="65"
              layout="intrinsic"
            />
            <Image
              src="/images/node-logo.svg"
              alt="Node"
              width="65"
              height="65"
              layout="intrinsic"
            />
            <Image
              src="/images/express-logo.svg"
              alt="Node"
              width="65"
              height="65"
              layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
