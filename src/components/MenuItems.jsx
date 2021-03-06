import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function MenuItems() {
  const { pathname } = useLocation();

  return (
    <Menu
      theme="light"
      mode="horizontal"
      style={{
        display: "flex",
        fontSize: "17px",
        fontWeight: "500",
        width: "100%",
        justifyContent: "center",
      }}
      defaultSelectedKeys={[pathname]}
    >
      <Menu.Item key="/raiseindividual">
        <NavLink to="/raiseindividual">ðĻâðĶē For Individuals </NavLink>
      </Menu.Item>
      <Menu.Item key="/charities">
        <NavLink to="/charities">ð For Charities </NavLink>
      </Menu.Item>
      <Menu.Item key="/causes">
        <NavLink to="/causes">ðĐâð Causes </NavLink>
      </Menu.Item>
      <Menu.Item key="/crisis">
        <NavLink to="/crisis">Crisis List </NavLink>
      </Menu.Item>
    </Menu>
  );
}

export default MenuItems;
