import styled from "styled-components";

export const Box = styled.div<{ $color: string }>`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 3px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: ${(props) => props.$color};
  margin-top: 50px;
`;

export const InnerBox = styled.div<{ $color: string }>`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  background-color: ${(props) => props.$color};
`;
