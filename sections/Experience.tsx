import { NextPage } from "next";
import Image from "next/image";
import { Properties } from "csstype";
import Achievement from "./components/achievement";
import TechsInfo from "../data/techsinfo";

const polygon = (direction: "left" | "right", bg?: string): Properties => ({
  width: "33%",
  height: "100%",
  background: bg ? bg : "rgb(99 110 143)",
  borderRadius: direction === "left" ? "0 20% 20% 0" : "20% 0 0 20%",
  float: direction === "left" ? "left" : "right",
});

const Experience: NextPage = () => {
  return (
    <section
      className=" mx-auto bg-white font-lines"
      style={{ background: "#f2f2f2" }}
    >
      <div className="px-8 text-center">
        <h2
          id="experience"
          className="py-8 text-4xl font-bold tracking-wider font-headers text-center"
        >
          Professional Experience
        </h2>

        <h3 className="mt-2 text-2xl font-bold tracking-wider font-headers">
          Lead Software Developer
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-center max-w-lg mb-6 mx-auto">
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
        <p className="text-center max-w-lg mx-auto">
          As the developers team leader, i am responsibe on creating,
          maintaining, and promoting the use of digital solutions to help the
          company on its mission towards digital transformation.
        </p>
      </div>

      {/* ----------Mobile App------------------------------- */}
      <Achievement
        direction="left"
        imgSrc="public-app.png"
        imgLabel="harma Invest Mobile App"
        tech={[
          TechsInfo.nativescript,
          TechsInfo.angular,
          TechsInfo.node,
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
            invoices and payment papers
          </li>
          <li className="mt-4">
            To ensure a synchronized ordering experience from multiple devices,
            I deployed a <strong>website</strong> connected to the same
            <strong>API</strong> as the mobile <b>app</b> through web socket
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
        </ul>
      </Achievement>

      <Achievement
        imgSrc="ppdframe.png"
        imgLabel="Picking and Packing Dashboard"
        direction="left"
        tech={[
          TechsInfo.websocket,
          TechsInfo.electron,
          TechsInfo.angular,
          TechsInfo.sap,
          TechsInfo.rxjs,
        ]}
      >
        <h3 className="text-xl font-bold tracking-wide text-center font-headers">
          Shipping and Distibution
        </h3>
        <ul className="px-6 text-lg tracking-wide list-disc list-inside font-lines">
          <li className="mt-4">
            We automated the invoicing and printing process by creating a
            desktop software that connected to an API developed on top of SAP B1
            Service Layer.
          </li>
        </ul>
      </Achievement>
    </section>
  );
};

export default Experience;
