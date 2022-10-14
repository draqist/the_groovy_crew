
import styled from "styled-components";

export const Nav = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  margin-bottom: 40px;
  z-index: 8;
  background-color: var(--brand-color);
  padding: 0 30px;
  h1 {
    letter-spacing: -1.5px;
  }
  border-bottom: 1px solid var(--border);
  .brand_name {
    font-size: 20px;
  }
  .cart{
    font-family: "Mango";
    /* font-family: "Rockstar"; */
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

export const Menu = styled.div`
  width: 60px;
  height: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  outline: none;
  div {
    width: 100%;
    height: 2px;
    background-color: var(--text-color);
  }
`;
