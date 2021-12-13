import { BsArrowUpCircle } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="mt-8 py-9 font-lines" style={{ background: "#f1f1f1" }}>
      <div className="flex items-center justify-center">
        <a href="#top" className="block">
          <BsArrowUpCircle className="w-14 h-14" />
        </a>
      </div>
    </section>
  );
};

export default Footer;
