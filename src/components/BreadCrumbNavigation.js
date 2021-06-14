import { useContext } from "react";
import { AppContext } from "../utils/ReactPagesContext"
import logo from "../logo.png";
import styled from "styled-components";

const Navigation = styled.div`
  bottom: 0px;
  position: absolute;
  width: 85vw;
//   max-width: 900px;
//   min-width: 600px;
  margin-left: 13vw;
  margin-right: 16px;
  margin-bottom: 16px;
`;


const NavigationGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NavigationButton = styled.button`
    border: transparent;
    background: transparent;
    font-size: 16px;
    color: white;
`;


export const BreadCrumbNavigation = () => {
    return (
        <Navigation>
            <NavigationGrid>
                <NavigationButton>{`<- Previous`}</NavigationButton>
                <img
          src={logo}
          style={{
            width: `36px`,
            display: `inline-block`,
          }}
          alt="logo"
        />
                <NavigationButton>{`Next ->`}</NavigationButton>
            </NavigationGrid>
        </Navigation>
    )
}
