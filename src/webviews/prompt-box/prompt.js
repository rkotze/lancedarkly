import React, { useState } from "react";
import styled from "styled-components";

const Modal = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  position: absolute;
  width: 300px;
  height: 180px;
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 4px;
  background-color: #222;
  z-index: 2;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

export function Prompt({ children }) {
  const [open, setOpen] = useState(true);
  return <Modal open={open}>{children({ setOpen })}</Modal>;
}
