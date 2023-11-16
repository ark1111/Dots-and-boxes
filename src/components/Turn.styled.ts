import styled from "styled-components";

export const Box = styled.div<{ $color: string }>`
  width: 100%;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 20px;
  color: #fff;
  margin-top: 50px;
  background-color: ${(props) => props.$color};
`;
