import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
`;

export const Lines = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const LinesRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100px;
  background-color: #555;
`;

export const HorizontalLineBox = styled.div`
  width: 75px;
  height: 20px;
  padding: 0 10px;
  display: flex;
  align-items: center;
`;

export const HorizontalLine = styled.div<{
  $hoverColor: string;
  $color?: string;
}>`
  width: 100%;
  height: 10px;
  background-color: ${(props) => props.$color || "#99999950"};
  border-radius: 100px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.$color || props.$hoverColor};
  }
`;

export const VerticalLineBox = styled.div`
  width: 20px;
  height: 75px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
`;

export const VerticalLine = styled.div<{
  $hoverColor: string;
  $color?: string;
}>`
  width: 10px;
  height: 100%;
  background-color: ${(props) => props.$color || "#99999950"};
  border-radius: 100px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.$color || props.$hoverColor};
  }
`;

export const Boxes = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;

export const BoxItem = styled.div`
  width: 95px;
  height: 95px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const InnerBoxItem = styled.div<{ $color?: string }>`
  width: 55px;
  height: 55px;
  background-color: ${(props) => props.$color || "transparent"};
  border-radius: 10px;
`;
