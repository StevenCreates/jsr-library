import { useContext } from "react";
import { AppContext } from "../utils/ReactPagesContext"
import styled from "styled-components";
import logo from "../logo.png";
import { BrowserRouter as Router, Link } from "react-router-dom";

const SideNavContainer = styled.div`
  height: 100vh;
  width: 15vw;
  background: #191919;
`;

const LogoContainer = styled.div`
  padding-top: 10px;
  padding-left: 10px;
`;

const SpanStyles = styled.div`
  color: white;
  display: inline-block;
  padding-left: 8px;
  font-size: 24px;
`;

const NavigationItemsContainer = styled.div`
  padding: 8px;
`;

const LinkContainer = styled.div`
text-align: center;
width: 100%;
`

const NavigationItems = styled(Link)`
    text-decoration: none;
    textDecoration: "none",
    text-align: center;
    color: white;
    margin-top: 10px;
    width: full;
    line-height: 28px;
    background: transparent;
    border: transparent;
    borer-radius: 5px;
    :hover {
      background: #343434;
    }
`;


const NavigationLinkItem = ({ linkPath, linkName }) => {
  return (
    <LinkContainer>
      <NavigationItems to={linkPath}>{linkName}</NavigationItems>
    </LinkContainer>
  );
};

export const SideNav = () => {
    const { links } = useContext(AppContext)
  return (
    <SideNavContainer>
      <LogoContainer>
        <img
          src={logo}
          style={{
            width: `36px`,
            display: `inline-block`,
          }}
          alt="logo"
        />
        <SpanStyles>React Examples</SpanStyles>
      </LogoContainer>
      {/* <Router> */}
        <NavigationItemsContainer>
          {links.map((link) => (
            <NavigationLinkItem
              key={link.name}
              linkPath={link.path}
              linkName={link.name}
            />
          ))}
        </NavigationItemsContainer>
      {/* </Router> */}
    </SideNavContainer>
  );
};
