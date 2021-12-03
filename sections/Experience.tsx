import { NextPage } from 'next';
import Image from 'next/image';
import CSS from 'csstype';

/* .polygon-left {
  background: green;
  width: 350px;
  height: 350px;
  clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0% 0%);
} */
const polygon = (direction: 'left' | 'right', bg?: string): CSS.Properties => ({
  width: '100%',
  height: '100%',
  background: bg ? bg : 'rgb(99 110 143)',
  clipPath:
    direction === 'left'
      ? 'circle(71.5% at 0% 50%)'
      : 'circle(50% at 100% 50%)',
});

const Experience: NextPage = () => {
  return (
    <section className="container min-h-screen px-2 mx-auto bg-white font-lines max-w-7xl">
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
      {/* ----------Mobile App------------------------------- */}
      <div className="flex flex-col items-center justify-around p-8 lg:h-screen md:relative md:flex-row">
        <div className="relative z-10 ">
          <Image
            src="/images/phi-app.png"
            alt="Pharma Invest Mobile App"
            width="260"
            height="560"
            quality="100"
            layout="intrinsic"
          />
        </div>
        <div className="absolute left-0 hidden w-1/2 top-24 h-3/4 md:block">
          <div style={polygon('left')}></div>
        </div>
        <div className="z-10 max-w-md p-8">
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
      {/* ----------Adc App------------------------------- */}
      <div className="flex flex-col-reverse items-center justify-around p-8 lg:h-screen md:relative md:flex-row">
        <div className="z-10 max-w-md p-8">
          <h3 className="mb-5 text-xl font-bold tracking-wide text-center font-headers">
            Sales Order Application
          </h3>
          <ul className="px-6 text-lg tracking-wide list-disc list-inside font-lines">
            <li className="mt-4">
              Instead of using the ERP Client App, Sales orders are now created
              using a modern web app -PWA- with a customized UX/UI designed to
              expedite the ordering process.
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
        <div className="absolute right-0 hidden w-full top-24 h-3/4 md:block">
          <div style={polygon('right')}></div>
        </div>
        <div className="relative z-10 shadow-xl">
          <Image
            src="/images/adc-app.png"
            alt="Pharma Invest Mobile App"
            width="750"
            height="460"
            layout="intrinsic"
            quality="100"
            className="rounded-xl"
          />
        </div>
      </div>

      {/* -----------------PPD App ----------------- */}
      <div className="flex flex-col items-center justify-around p-8 lg:h-screen md:relative md:flex-row">
        <div className="relative z-10 shadow-xl">
          <Image
            src="/images/ppd.png"
            alt="Pharma Invest Mobile App"
            width="750"
            height="590"
            layout="intrinsic"
            quality="100"
          />
        </div>
        <div className="absolute top-0 left-0 hidden w-full h-3/4 md:block">
          <div style={polygon('left')}></div>
        </div>
        <div className="z-10 max-w-md p-8">
          <h3 className="text-xl font-bold tracking-wide text-center font-headers">
            Shipping and Distibution
          </h3>
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
    </section>
  );
};

export default Experience;
