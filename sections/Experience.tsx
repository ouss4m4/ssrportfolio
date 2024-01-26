import { NextPage } from "next";
import Achievement from "./components/achievement";
import TechsInfo from "../data/techsinfo";

const Experience: NextPage = () => {
  return (
    <section
      className="mx-auto overflow-hidden bg-white font-lines"
      style={{ background: "#fefefe" }}
    >
      <div className="px-8 text-center">
        <h2
          id="experience"
          className="py-8 mt-8 text-4xl font-bold tracking-wider text-center font-headers"
        >
          Professional Experience
        </h2>
      </div>

      {/* ADWORA */}
      <div className="px-8 text-center">
        <h3 className="mt-2 text-3xl font-bold tracking-wider font-headers ">
          Software Engineer
        </h3>
        <div className="flex flex-col items-center justify-center max-w-lg mx-auto mb-6 md:flex-row">
          <a
            href="https://adwora.com/"
            target="_blank"
            rel="noreferrer"
            className="block font-bold tracking-widest cursor-pointer font-lines 3xl:text-lg"
          >
            <span className="pr-8 italic font-bold tracking-wide text-md">
              • Aug 2023 - Today
            </span>
          </a>
          <a
            href="https://adwora.com/"
            target="_blank"
            rel="noreferrer"
            className="tracking-wider 3xl:text-lg"
          >
            @Adwora
          </a>
        </div>
        <p className="max-w-lg pb-4 mx-auto text-lg text-center 3xl:max-w-xl">
          Following the successful implementation of the lead generation system
          at{" "}
          <a href="#notifyai" className="text-sm">
            @NotifyAI
          </a>
          , I played a pivotal role in the launch of an innovative media buying
          Software as a Service (SAAS) at Adwora. This platform facilitates
          seamless connections between advertisers and publishers, enabling them
          to reach their target audience with enhanced efficiency.
        </p>
      </div>

      <Achievement
        direction="right"
        imgSrc="adwora-dashboard.png"
        imgLabel="NotifyAI Push Notification"
        tech={[
          TechsInfo.laravel,
          TechsInfo.livewire,
          TechsInfo.tailwind,
          TechsInfo.mysql,
          TechsInfo.digitalocean,
        ]}
      >
        <h3 className="text-xl font-bold tracking-wide text-center font-headers ">
          Demand Side Platform
        </h3>
        <ul className="text-lg tracking-wide list-disc list-inside font-lines ">
          <li className="mt-4">
            Developed a self-serving platform with a modern user interface,
            providing users with an astonishing experience. Users can
            efficiently manage their campaigns with the assistance of{" "}
            <strong> Live Analytics</strong>, receiving updates within minutes.
          </li>
          <li className="mt-4">
            Engineered a proprietary AI <strong>demand selection engine</strong>{" "}
            that allows buyers to compete against each other based on certain
            criteria, ensuring the best possible outcome from the available
            supply.
          </li>
        </ul>
      </Achievement>

      <Achievement
        direction="left"
        imgSrc="supply-side.svg"
        imgLabel="NotifyAI Push Notification"
        tech={[
          TechsInfo.laravel,
          TechsInfo.mysql,
          TechsInfo.redis,
          TechsInfo.slack,
          TechsInfo.aws,
        ]}
      >
        <h3 className="text-xl font-bold tracking-wide text-center font-headers ">
          Supply Side Platform
        </h3>
        <ul className="text-lg tracking-wide list-disc list-inside font-lines ">
          <li className="mt-4">
            Faced with a minimum of 1.5 million daily requests, the challenge
            involved managing a high transaction volume while ensuring brief
            response times and accommodating various integration possibilities.
            To address this, we developed a flexible API atop a highly available
            infrastructure. Adwora is now capable of scaling on demand,
            efficiently handling any required traffic.
          </li>
          <li className="mt-4">
            The platform&apos;s core functionality lies in enabling publishers
            to seamlessly integrate with Adwora, receiving live feedback to
            enhance targeting strategies. We devised multiple methods for
            publishers to supply Adwora with traffic and receive feedback for
            optimization. This includes options like webhooks, S3 reporting, and
            live API reporting.
          </li>
          <li className="mt-4">
            Sustaining high traffic within a limited timeframe necessitates a
            redundant cache layer and a read/write optimized database. We
            implemented Job/Queue services to manage separate transactions,
            ensuring a responsive system that meets defined time limits.
          </li>
        </ul>
      </Achievement>

      {/* NOTIFYAI */}
      <div className="px-8 text-center">
        <h3
          id="notifyai"
          className="mt-12 text-3xl font-bold tracking-wider font-headers "
        >
          Software Developer
        </h3>
        <div className="flex flex-col items-center justify-center max-w-lg mx-auto mb-6 md:flex-row">
          <a
            href="https://notifyai.io/"
            target="_blank"
            rel="noreferrer"
            className="block font-bold tracking-widest cursor-pointer font-lines 3xl:text-lg"
          >
            <span className="pr-8 italic font-bold tracking-wide text-md">
              • Jan - Aug 2022
            </span>
          </a>
          <a
            href="https://notifyai.io/"
            target="_blank"
            rel="noreferrer"
            className="tracking-wider 3xl:text-lg"
          >
            @NotifyAI
          </a>
        </div>
        <p className="max-w-lg pb-4 mx-auto text-lg text-center 3xl:max-w-xl">
          Incorporating my developer skills, coupled with an Ad-Tech background,
          marketing expertise, and proficiency in funnel building, I
          collaborated with the NotifyAI Dev Team to construct a lead generation
          system. This strategic addition significantly expanded the
          company&apos;s portfolio of assets, ultimately resulting in a notable
          increase in company revenue.
        </p>
      </div>
      {/* ----------Notify App------------------------------- */}
      <Achievement
        direction="left"
        imgSrc="push-system.webp"
        imgLabel="NotifyAI Push Notification"
        tech={[
          TechsInfo.node,
          TechsInfo.angular,
          TechsInfo.mongodb,
          TechsInfo.websocket,
          TechsInfo.aws,
        ]}
      >
        <h3 className="text-xl font-bold tracking-wide text-center font-headers ">
          Push Notification to Lead Gen
        </h3>
        <ul className="text-lg tracking-wide list-disc list-inside font-lines ">
          <li className="mt-4">
            Joined the NotifyAI development team with a focus on harnessing the
            Push Notification System to construct and automate dynamic lead
            generation funnels, along with Co-Reg offers.
          </li>
          <li className="mt-4">
            Successfully converted initial subscriptions into tangible leads
            enriched with user information, geographic data, and interests. This
            accomplishment allowed us to assist our clients in refining audience
            targeting, leading to higher ROI, more cost-effective CPC, and an
            augmented CTR.
          </li>
        </ul>
      </Achievement>

      {/* PHARMAINVEST */}
      <div className="px-8 text-center mt-8">
        <h3 className="mt-12 text-3xl font-bold tracking-wider font-headers ">
          Software Developer
        </h3>
        <div className="flex flex-col items-center justify-center max-w-lg mx-auto mb-6 md:flex-row">
          <a
            href="https://www.linkedin.com/company/pharmainvestspa"
            target="_blank"
            rel="noreferrer"
            className="block font-bold tracking-widest cursor-pointer font-lines 3xl:text-lg"
          >
            <span className="pr-8 italic font-bold tracking-wide text-md">
              • 2018 - 2022
            </span>
          </a>
          <a
            href="https://www.linkedin.com/company/pharmainvestspa"
            target="_blank"
            rel="noreferrer"
            className="tracking-wider 3xl:text-lg"
          >
            @PharmaInvest SPA
          </a>
        </div>
        <p className="max-w-lg pb-4 mx-auto text-lg text-center 3xl:max-w-xl">
          As the developers team leader, I am responsible on creating,
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
        <h3 className="text-xl font-bold tracking-wide text-center font-headers ">
          Public Apps
        </h3>
        <ul className="text-lg tracking-wide list-disc list-inside font-lines ">
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
        <h3 className="mb-5 text-xl font-bold tracking-wide text-center font-headers ">
          Sales Order Application
        </h3>
        <ul className="px-6 text-lg tracking-wide list-disc list-inside font-lines ">
          <li className="mt-4">
            Instead of using the ERP Client App, Sales orders are now created
            using a progressive web app with a customized UX/UI designed to
            expedite the ordering process.
          </li>
          <li className="mt-4">
            Users are not constrained by warehouses location anymore, I
            automated the order separation before the checkout process. and each
            warehouse prints the corresponding order.
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
        <h3 className="text-xl font-bold tracking-wide text-center font-headers ">
          Shipping and Distribution
        </h3>
        <ul className="px-6 text-lg tracking-wide list-disc list-inside font-lines ">
          <li className="mt-4">
            We automated the invoicing and printing process by creating a
            desktop application that connects to a private API implemented on
            top of SAP Business One Service Layer.
          </li>
          <li className="mt-4">
            The new printing process sort the list of pending orders
            automatically while respecting shipping dates and sectors priorities
            set by the company.
          </li>
        </ul>
      </Achievement>
    </section>
  );
};

export default Experience;
