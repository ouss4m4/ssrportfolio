import { FC } from "react";
import { IStack } from "../../data/techsinfo";

const NavItem: FC<{
  value: IStack;
  handleFiltering: Function;
  active: string;
}> = ({ value, handleFiltering, active }) => {
  let classNames =
    "px-4 py-2 text-center border-2 rounded-xl hover:bg-dark-700 hover:text-white capitalize cursor-pointer hover:text-green";

  if (active === value) {
    classNames += " bg-dark-700 text-white";
  }
  return (
    <li className={classNames} onClick={() => handleFiltering(value)}>
      {value}
    </li>
  );
};

const ToolsNavbar: FC<any> = (props) => {
  return (
    <div className="grid grid-cols-3 gap-3 mb-8 list-none md:grid-cols-6">
      <NavItem value="Frontend" {...props} />
      <NavItem value="Backend" {...props} />
      <NavItem value="Desktop" {...props} />
      <NavItem value="Mobile" {...props} />
      <NavItem value="Devops" {...props} />
      <NavItem value="Other" {...props} />
    </div>
  );
};

export default ToolsNavbar;
