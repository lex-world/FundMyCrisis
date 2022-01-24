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
      <Menu.Item key="/individuals">
        <NavLink to="/individuals">👨‍🦲 For Individuals </NavLink>
      </Menu.Item>
      <Menu.Item key="/charities">
        <NavLink to="/charities">💒 For Charities </NavLink>
      </Menu.Item>
      <Menu.Item key="/causes">
        <NavLink to="/causes">👩‍🎓 Causes </NavLink>
      </Menu.Item>
      <Menu.Item key="/crisis">
        <NavLink to="/crisis">Crisis List </NavLink>
      </Menu.Item>
    </Menu>
  );
}

export default MenuItems;
