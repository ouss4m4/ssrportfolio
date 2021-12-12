import { FC } from "react";
import { IStack } from "../../data/techsinfo";

const NavItem: FC<{
  value: IStack;
  handleFiltering: Function;
  active: string;
}> = ({ value, handleFiltering, active }) => {
  let classNames = "capitalize cursor-pointer hover:text-green";
  if (active === value) {
    classNames += " text-red-500";
  }
  return (
    <li className={classNames} onClick={() => handleFiltering(value)}>
      {value}
    </li>
  );
};

const ToolsNavbar: FC<any> = (props) => {
  return (
    <div className="flex mb-3 space-x-3 overflow-x-auto list-none">
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
