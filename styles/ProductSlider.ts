import styled from "styled-components";

export const ProductsSliderComponent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 150px;
  height: 580px;
  padding: 20px 60px 0;
  margin-bottom: 40px;
  .title {
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    font-size: 36px;
    justify-content: center;
    color: var(--text-color);
  }
  .products{
    height: 100%;
    display: flex;
    overflow-x: scroll;
    gap: 20px;
  }
`
export const Product = styled.div`
  height: 100%;
  border: 2px solid black;
  /* border-radius: 20px; */
  width: 360px;
  flex-shrink: 0;
  position: relative;
  .product{
    position: relative;
    &_info{
      height: 200px;
      padding:30px 10px;
      position: absolute;
      bottom: 0;
      color: var(--text-color);
      border-top: 2px solid black;
      /* border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px; */
    }
  }
`
