import styled from "styled-components";
export const ToggleViews = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 25% 74%;
  grid-template-rows: auto;
  grid-column-gap: 1%;
  width: 95%;
  height: 90%;
`;
export const TogglesPanel = styled.div`
  max-height: 100%;
  overflow-y: auto;
  padding-right: 10px;
`;
export const NoBullets = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    padding: 5px 0;
  }
`;
export const ButtonLink = styled.a`
  display: block;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  border: 1px solid #0c6c8c;
  background-color: #0c6c8c;
  padding: 8px;
  text-decoration: none;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #ffffff;
    border: 1px solid #29b28d;
    background-color: #29b28d;
  }
`;
export const PositiveAlert = styled.div`
  background-color: #29b28d;
  color: #ffffff;
  padding: 10px;
  margin: 10px 0;
  font-weight: bold;
  border-radius: 4px;
`;
export const Right = styled.div`
  text-align: right;
`;
