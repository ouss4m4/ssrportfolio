import { NextPage } from "next";
import Achievement from "./components/achievement";
import TechsInfo from "../data/techsinfo";

const Experience: NextPage = () => {
  return (
    <section
      className="mx-auto bg-white font-lines"
      style={{ background: "#fefefe" }}
    >
      <div className="px-8 text-center">
        <h2
          id="experience"
          className="py-8 text-4xl font-bold tracking-wider text-center font-headers"
        >
          Professional Experience
        </h2>

        <h3 className="mt-2 text-2xl font-bold tracking-wider font-headers">
          Lead Software Developer
        </h3>
        <div className="flex flex-col items-center justify-center max-w-lg mx-auto mb-6 md:flex-row">
          <a
            href="https://www.linkedin.com/company/pharmainvestspa"
            target="_blank"
            rel="noreferrer"
            className="block font-bold tracking-widest cursor-pointer font-lines"
          >
            <span className="pr-8 italic font-bold tracking-wide text-md">
              • 2018 - Today
            </span>
          </a>
          <span className="tracking-wider">@PharmaInvest SPA</span>
        </div>
        <p className="max-w-lg pb-4 mx-auto text-xl text-center">
          As the developers team leader, i am responsible on creating,
          maintaining, and promoting the use of digital solutions to help the
          company on its mission towards Digital transformation.
        </p>
      </div>

      {/* ----------Mobile App------------------------------- */}
      <Achievement
        direction="left"
        imgSrc="public-app.png"
        imgLabel="Pharma Invest Mobile App"
        tech={[
          TechsInfo.nativescript,
          TechsInfo.angular,
          TechsInfo.node,
          TechsInfo.websocket,
          TechsInfo.sap,
        ]}
      >
        <h3 className="text-xl font-bold tracking-wide text-center font-headers">
          Public Apps
        </h3>
        <ul className="text-lg tracking-wide list-disc list-inside font-lines">
          <li className="mt-4">
            I Developed and published a
            <strong> cross-platform mobile app</strong> that allows customers to
            create purchase orders and monitor their progress. as well as
            invoices and payment documents.
          </li>
          <li className="mt-4">
            To ensure a synchronized ordering experience from multiple devices,
            I deployed a <strong>website</strong> connected to the same
            <strong> API </strong> as the mobile <b>app</b> through web socket
          </li>
        </ul>
      </Achievement>

      {/* ----------Adc App------------------------------- */}
      <Achievement
        imgSrc="adcframe.png"
        imgLabel="Sales Order WebApp"
        direction="right"
        tech={[
          TechsInfo.sapbone,
          TechsInfo.electron,
          TechsInfo.angular,
          TechsInfo.node,
        ]}
      >
        <h3 className="mb-5 text-xl font-bold tracking-wide text-center font-headers">
          Sales Order Application
        </h3>
        <ul className="px-6 text-lg tracking-wide list-disc list-inside font-lines">
          <li className="mt-4">
            Instead of using the ERP Client App, Sales orders are now created
            using a modern web app -PWA- with a customized UX/UI designed to
            expedite the ordering process.
          </li>
          <li className="mt-4">
            Users are not constrained by warehouses location anymore, I
            automated the order separation before the checkout process. and each
            warehouse receive the corresponding order
          </li>
        </ul>
      </Achievement>

      <Achievement
        imgSrc="ppdframe.png"
        imgLabel="Picking and Packing Dashboard"
        direction="left"
        tech={[
          TechsInfo.electron,
          TechsInfo.angular,
          TechsInfo.sap,
          TechsInfo.rxjs,
        ]}
      >
        <h3 className="text-xl font-bold tracking-wide text-center font-headers">
          Shipping and Distribution
        </h3>
        <ul className="px-6 text-lg tracking-wide list-disc list-inside font-lines">
          <li className="mt-4">
            We automated the invoicing and printing process by creating a
            desktop software that connected to an API implemented on top of SAP
            B1 Service Layer.
          </li>{" "}
        </ul>
      </Achievement>
    </section>
  );
};

export default Experience;
