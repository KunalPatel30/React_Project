import React from "react";
import styled from "styled-components";

function Header() {
  const Container = styled.div`
    &:nth-child(1) {
      position: sticky;
      top: 0;
    }
  `;
  
  const Usermenu = styled.ul`
    display: flex;
    justify-content: center;
  `;
  const Usermenulist = styled.li`
    padding: 0px 10px;
    list-style-type: none;
    font-size: 1.30rem;
    margin: 0 5px;
    position: relative;
    cursor: pointer;
    color: white;
    &::after {
      height: 2px;
      position: absolute;
      content: "";
      width: 0%;
      background-color: white;
      left: 0px;
      bottom: -5px;
      width: 0%;
      transition: 0.5s;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
  `;
  const Optionlist = styled.select`
    border: none;
    font-weight: bold;
  `;

  const Navigation = styled.div`
    padding: 10px 100px;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #4CBB17;
    border-radius: 50px;
  `;
  const Logo = styled.div`
    font-size: 2rem;
    font-weight: bold;
    color: white;
  `;

  return (
    <Container>
      <Navigation>
        <Logo> Fresh Vegetable </Logo>
        <Usermenu>
          <Usermenulist>Home</Usermenulist>
          <Usermenulist>About</Usermenulist>
          <Usermenulist>Services</Usermenulist>
          <Usermenulist>Product</Usermenulist>
          <Usermenulist>Contact Us</Usermenulist>
        </Usermenu>
        <Usermenu>
        </Usermenu>
      </Navigation>
    </Container>
  );
}

export default Header;
