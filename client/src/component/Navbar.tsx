import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background-color: pink;
  position: static;
`;

const Tabs = styled(NavLink)`
  color: darkgreen;
  text-decoration: none;
  font-family: "Nunito", sans-serif;
  padding: 11px;
`;

const Navbar = () => {
  return (
    <>
      <Header>
        <Toolbar>
          <Tabs to="/">HomePage</Tabs>
          <Tabs to="/all">All Movie</Tabs>
          <Tabs to="/add">Add Movie</Tabs>
        </Toolbar>
      </Header>
    </>
  );
};

export default Navbar;
