import React from "react";
import {
  Box,
  Dot,
  HorizontalLine,
  HorizontalLineBox,
  Lines,
  LinesRow,
  VerticalLine,
  VerticalLineBox,
} from "./Board.styled";

type Props = {};

const linesData = [
  {
    id: 1,
    lines: [
      { lineId: 1, boxIds: [1] },
      { lineId: 2, boxIds: [2] },
      { lineId: 3, boxIds: [3] },
      { lineId: 4, boxIds: [4] },
    ],
  },
  {
    id: 2,
    lines: [
      { lineId: 5, boxIds: [1] },
      { lineId: 6, boxIds: [1, 2] },
      { lineId: 7, boxIds: [2, 3] },
      { lineId: 8, boxIds: [3, 4] },
      { lineId: 9, boxIds: [4] },
    ],
  },
  {
    id: 3,
    lines: [
      { lineId: 10, boxIds: [1, 5] },
      { lineId: 11, boxIds: [2, 6] },
      { lineId: 12, boxIds: [3, 7] },
      { lineId: 13, boxIds: [4, 8] },
    ],
  },
  {
    id: 4,
    lines: [
      { lineId: 14, boxIds: [5] },
      { lineId: 15, boxIds: [5, 6] },
      { lineId: 16, boxIds: [6, 7] },
      { lineId: 17, boxIds: [7, 8] },
      { lineId: 18, boxIds: [8] },
    ],
  },
  {
    id: 5,
    lines: [
      { lineId: 19, boxIds: [5, 9] },
      { lineId: 20, boxIds: [6, 10] },
      { lineId: 21, boxIds: [7, 11] },
      { lineId: 22, boxIds: [8, 12] },
    ],
  },
  {
    id: 6,
    lines: [
      { lineId: 23, boxIds: [9] },
      { lineId: 24, boxIds: [9, 10] },
      { lineId: 25, boxIds: [10, 11] },
      { lineId: 26, boxIds: [11, 12] },
      { lineId: 27, boxIds: [12] },
    ],
  },
  {
    id: 7,
    lines: [
      { lineId: 28, boxIds: [9, 13] },
      { lineId: 29, boxIds: [10, 14] },
      { lineId: 30, boxIds: [11, 15] },
      { lineId: 31, boxIds: [12, 16] },
    ],
  },
  {
    id: 8,
    lines: [
      { lineId: 32, boxIds: [13] },
      { lineId: 33, boxIds: [13, 14] },
      { lineId: 34, boxIds: [14, 15] },
      { lineId: 35, boxIds: [15, 16] },
      { lineId: 36, boxIds: [16] },
    ],
  },
  {
    id: 9,
    lines: [
      { lineId: 37, boxIds: [13] },
      { lineId: 38, boxIds: [14] },
      { lineId: 39, boxIds: [15] },
      { lineId: 40, boxIds: [16] },
    ],
  },
];

const Board = (props: Props) => {
  return (
    <Box>
      <Lines>
        {linesData.map((item, index) => (
          <LinesRow key={item.id}>
            {item.lines.map((line, LineIndex) =>
              index % 2 === 0 ? (
                <React.Fragment key={line.lineId}>
                  <Dot></Dot>
                  <HorizontalLineBox>
                    <HorizontalLine></HorizontalLine>
                  </HorizontalLineBox>
                </React.Fragment>
              ) : (
                <React.Fragment key={line.lineId}>
                  <VerticalLineBox>
                    <VerticalLine></VerticalLine>
                  </VerticalLineBox>
                </React.Fragment>
              )
            )}
            {index % 2 === 0 ? <Dot></Dot> : null}
          </LinesRow>
        ))}
      </Lines>
    </Box>
  );
};

export default Board;
