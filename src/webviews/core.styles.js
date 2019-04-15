import styled from "styled-components";
import { colours } from "./colour-constants.styles";

const baseHeading = `
font-weight: normal;
margin: 10px 0;`;

export const FirstHeading = styled.h2([baseHeading]);

export const SecondHeading = styled.h3([baseHeading]);

export const BoldLarge = styled.span`
font-weight: bold; 
font-size: 16px;`

export const Button = styled.a`
  background-color: ${colours.blue};
  color: #ffffff;
  border-radius: 4px;
  padding: 0px 8px 4px 8px;
  text-decoration: none;
  &:hover {
    background-color: ${colours.green};
    color: #ffffff;
  }
  &:focus {
    outline: none;
  }
`;

export const CancelButton = styled(Button)`
  background-color: #666;
  &:hover {
    background-color: #333;
    color: #ffffff;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InputField = styled.input`
  background: inherit;
  color: inherit;
  border: 1px solid ${colours.green};
  border-radius: 4px;
  padding: 6px;
  width: calc(100% - 14px);
  &:focus {
    outline: none;
    box-shadow: 0px 0px 6px ${colours.green};
  }
  margin: 0;
`;

export const FilterForm = styled.form`
  margin: 10px 0;
`;
