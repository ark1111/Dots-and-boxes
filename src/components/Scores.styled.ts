import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PlayerScoreBox = styled.div<{ $color: string }>`
  width: 45%;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  border-radius: 10px;
  padding: 20px;
  background-color: ${(props) => props.$color};
`;

export const PlayerScoreTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

export const PlayerScoreValue = styled.div`
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  padding: 10px 0;
  border-radius: 10px;
  background-color: #00000020;
  margin-top: 20px;
`;
