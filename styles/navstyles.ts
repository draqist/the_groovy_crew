import { motion } from "framer-motion";
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
  padding: 0 30px;
  background-color: var(--background-color);
  /* box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.3) */
  h1 {
    letter-spacing: -1.5px;
  }
  border-bottom: 1px solid var(--border);
`;

export const Menu = styled.button`
  width: 60px;
  height: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    width: 100%;
    height: 1px;
    background-color: black;
  }
`;

export const NavBody = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 0;
  z-index: 5;
  transition: all 1.5s ease-in-out;
  left: 0px;
`;
export const MenuNav = styled(motion.div)`
  width: 100%;
  background-color: var(--background-color);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  flex-basis: 33%;
  border: none;
  border-color: var(--border);
  :hover {
    background-color: black;
    color: white;
    transition: all 0.5s ease-in;
    border-right-color: #fff;
  }
  .nav {
    &_number {
      width: 100%;
      border-right: 1.25px solid;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;
      text-align: center;
      justify-content: center;
      border-bottom: 1.25px solid;
      font-size: 40px;
    }
    &_link {
      width: 100%;
      border-right: 1.25px solid;
      height: 100%;
      display: flex;
      align-items: center;
      align-content: center;
      justify-content: space-between;
      grid-column: span 4 / span 4;
      padding: 0 40px;
      border-bottom: 1.25px solid;
      text-transform: uppercase;
      font-size: 40px;
    }
  }
`;
