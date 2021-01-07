import styled from "styled-components";
const { Dropdown, Button } = require("react-bootstrap");

const StyToggle = styled(Dropdown.Toggle)`
  border-radius: 18px;
  margin: 0 5px;
`;

const StyBtn = styled(Button)`
  border-radius: 18px;
  margin: 0 5px;
`;

const DropdownToggle = (props) => {
  return <StyToggle {...props} />;
};
const NavBtn = (props) => <StyBtn {...props} />;

export { DropdownToggle, NavBtn };
