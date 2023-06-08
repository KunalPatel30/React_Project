import React from "react";
import styled from "styled-components";

function Footer() {
  const Container = styled.div`
    padding: 0 100px;
    display: flex;
    justify-content: space-evenly;
    background: silver;
    border-radius: 50px;
  `;
  const SmallText = styled.span`
    font-size: 1rem;
    color: black;
    text-align:left;
    font-weight: lighter;
    &:hover{
      color:goldenrod;
    }
    `;

  const Usermenu = styled.ul`
    width: 200px;
    font-size: 1.2rem;
    font-weight: bold;
  `;
  const Usermenulist = styled.li`
    padding: 8px 5px;
    list-style-type: none;
    cursor: pointer;
  `;
  const About = styled.div`
    width: 200px;
  `;
  const Footer = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
    padding: 15px 0px;
    background: #4CBB17;
    color: white;
    border-radius: 50px;
  `;
  return (
    <>
      <Container>
        <About>
          <h3>About Our Company</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, hic. Doloribus dolores odit explicabo adipisci.
          </p>
        </About>
        <div className="list">
          <Usermenu>
            Owner
            <Usermenulist>
              <SmallText>Kunal Patel</SmallText>
            </Usermenulist>
            <Usermenulist>
              <SmallText>Milan Patel</SmallText>
            </Usermenulist>
            <Usermenulist>
              <SmallText>Alpesh Patel</SmallText>
            </Usermenulist>
            <Usermenulist>
              <SmallText>Pradip Patel</SmallText>
            </Usermenulist>
          </Usermenu>
        </div>
        <div className="list">
          <Usermenu>
            Categories
            <Usermenulist>
              <SmallText>Organic Vegitable</SmallText>
            </Usermenulist>
            <Usermenulist>
              <SmallText>Organic Fruits</SmallText>
            </Usermenulist>
            <Usermenulist>
              <SmallText>Tasty Vegetables</SmallText>
            </Usermenulist>
          </Usermenu>
        </div>
        <div className="list">
          <Usermenu>
            Contact Us
            <Usermenulist>
              <SmallText>+91 1234569875</SmallText>
            </Usermenulist>
            <Usermenulist>
              <SmallText>+91 2589631472</SmallText>
            </Usermenulist>
            <Usermenulist>
              <SmallText>Freshvegitable@gmail.com</SmallText>
            </Usermenulist>
            <Usermenulist>
              <SmallText>FreshVegetable245</SmallText>
            </Usermenulist>
          </Usermenu>
        </div>
      </Container>
      <Footer>
        <b>&copy Fresh Vegitable</b>
      </Footer>
    </>
  );
}

export default Footer;
