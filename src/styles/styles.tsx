import styled from "styled-components";

export const Header = styled.header`
  margin: 33px auto;
  padding: 10px;
  font-size: 38px;
  font-family: 'Sirin Stencil', cursive;
  color: ${props => props.theme.textColor};
  text-align: center;
`

export const Back = styled.img`
  display: block;
  padding: 10px;
  margin: 10px 0 10px 10px;
  width: 13px;
  height: 23px;
`