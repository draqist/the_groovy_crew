import styled from 'styled-components';
export const HeroContainer = styled.div`
  width: 100%;
  height: 640px;
  display: flex;
  align-items:center;
  justify-content: center;
  text-align: center;
  font-size: 30px;
  background-position: top;
  flex-direction: column;
  background-image: url("/groovy_art_1.webp");
  background-color: #00000080;  
  color: white;
  transition: all .75s ease-in;
  margin-bottom: 40px;
  div{
    width: 780px;
  }
  h2{
    text-transform: capitalize !important;
    margin-top: 80px;
  }
  :hover{
    background-image: url("/groovy_art.webp");
    background-color: #00000010;
    transition: all 1s ease-out;
    color: #ffffff;
  }
  .brief{
    font-family:"Mango" ;
    font-size: 26px;
    margin-top: 10px;
  }
`