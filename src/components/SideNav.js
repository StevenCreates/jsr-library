import styled from "styled-components";
import logo from "../logo.png";
const SideNavContainer = styled.div`
  height: 100vh;
  width: 15vw;
  background: #191919;
`;

const LogoContainer = styled.div`
  padding-top: 10px;
  padding-left: 10px;
  // height: 40px;
`;

const SpanStyles = styled.div`
  color: white;
  display: inline-block;
  padding-left: 8px;
  font-size: 24px;
`;

export const SideNav = () => {
  return (
    <SideNavContainer>
      <LogoContainer>
        <img
          src={logo}
          style={{
            width: `36px`,
            display: `inline-block`,
          }}
        />
        <SpanStyles>React Examples</SpanStyles>
      </LogoContainer>
    </SideNavContainer>
  );
};
