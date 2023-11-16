import React, { useState } from "react";
import {
  Box,
  BoxItem,
  Boxes,
  Dot,
  HorizontalLine,
  HorizontalLineBox,
  InnerBoxItem,
  Lines,
  LinesRow,
  VerticalLine,
  VerticalLineBox,
} from "./Board.styled";
import { linesData, boxesData } from "../data";

type Props = {};

const colors = ["#748CDB", "#fe2a71"];

const players = {
  A: 1,
  B: 2,
};

const Board = (props: Props) => {
  const [turn, setTurn] = useState<"A" | "B">("B");
  const [aLines, setALines] = useState<number[]>([]);
  const [bLines, setBLines] = useState<number[]>([]);

  const selectLine = (id: number) => {
    if (turn === "A" && !aLines.includes(id) && !bLines.includes(id)) {
      let newList = [...aLines];
      newList.push(id);
      setALines(newList);
      setTurn("B");
    } else if (!aLines.includes(id) && !bLines.includes(id)) {
      let newList = [...bLines];
      newList.push(id);
      setBLines(newList);
      setTurn("A");
    }
  };

  const getLineColor = (id: number) => {
    if (aLines.includes(id)) {
      return colors[0];
    } else if (bLines.includes(id)) {
      return colors[1];
    } else {
      return undefined;
    }
  };
  return (
    <Box>
      <Boxes>
        {boxesData.map((item) => (
          <BoxItem key={item.id}>
            <InnerBoxItem></InnerBoxItem>
          </BoxItem>
        ))}
      </Boxes>
      <Lines>
        {linesData.map((item, index) => (
          <LinesRow key={item.id}>
            {item.lines.map((line, LineIndex) =>
              index % 2 === 0 ? (
                <React.Fragment key={line.lineId}>
                  <Dot></Dot>
                  <HorizontalLineBox>
                    <HorizontalLine
                      $hoverColor={colors[players[turn] - 1]}
                      $color={getLineColor(line.lineId)}
                      onClick={() => selectLine(line.lineId)}
                    ></HorizontalLine>
                  </HorizontalLineBox>
                </React.Fragment>
              ) : (
                <React.Fragment key={line.lineId}>
                  <VerticalLineBox>
                    <VerticalLine
                      $hoverColor={colors[players[turn] - 1]}
                      $color={getLineColor(line.lineId)}
                      onClick={() => selectLine(line.lineId)}
                    ></VerticalLine>
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
