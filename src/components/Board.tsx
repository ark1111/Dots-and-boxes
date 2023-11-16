import React, { useState, useEffect } from "react";
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
import { linesData, boxesData, colors } from "../data";

type Props = {
  turn: "A" | "B";
  setTurn:React.Dispatch<React.SetStateAction<"A" | "B">>;
  aBoxes: number[];
  setABoxes: React.Dispatch<React.SetStateAction<number[]>>;
  bBoxes: number[];
  setBBoxes: React.Dispatch<React.SetStateAction<number[]>>;
};

const players = {
  A: 1,
  B: 2,
};

const Board = ({ turn,setTurn, aBoxes, setABoxes, bBoxes, setBBoxes }: Props) => {
  //   const [turn, setTurn] = useState<"A" | "B">("B");
  const [aLines, setALines] = useState<number[]>([]);
  const [bLines, setBLines] = useState<number[]>([]);
  const [selectedLines, setSelectedLines] = useState<number[]>([]);
  //   const [aBoxes, setABoxes] = useState<number[]>([]);
  //   const [bBoxes, setBBoxes] = useState<number[]>([]);

  useEffect(() => {
    // prevent turn changing After filling the box
    if (aBoxes.length > 0 || bBoxes.length > 0) {
      if (turn === "A") {
        setTurn("B");
      } else {
        setTurn("A");
      }
    }
  }, [aBoxes, bBoxes]);

  const selectLine = (id: number, boxIds: number[]) => {
    let newSelectedLines = [...selectedLines];
    if (turn === "A" && !aLines.includes(id) && !bLines.includes(id)) {
      let newList = [...aLines];
      newList.push(id);
      newSelectedLines.push(id);
      setALines(newList);
      setTurn("B");
      setSelectedLines(newSelectedLines);
      checkFillingBox(id, boxIds);
    } else if (!aLines.includes(id) && !bLines.includes(id)) {
      let newList = [...bLines];
      newList.push(id);
      newSelectedLines.push(id);
      setBLines(newList);
      setTurn("A");
      setSelectedLines(newSelectedLines);
      checkFillingBox(id, boxIds);
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

  const checkFillingBox = (lineId: number, boxIds: number[]) => {
    let newABoxes = [...aBoxes];
    let newBBoxes = [...bBoxes];
    for (let i = 0; i < boxIds.length; i++) {
      for (let j = 0; j < boxesData.length; j++) {
        if (boxesData[j].id === boxIds[i]) {
          let isFilled = true;
          for (let k = 0; k < boxesData[j].lines.length; k++) {
            if (
              !selectedLines.includes(boxesData[j].lines[k]) &&
              boxesData[j].lines[k] !== lineId
            ) {
              isFilled = false;
              break;
            }
          }
          if (isFilled) {
            if (turn === "A") {
              newABoxes.push(boxIds[i]);
              setABoxes(newABoxes);
            } else {
              newBBoxes.push(boxIds[i]);
              setBBoxes(newBBoxes);
            }
          }
        }
      }
    }
  };

  const getBoxColor = (id: number) => {
    if (aBoxes.includes(id)) {
      return colors[0];
    } else if (bBoxes.includes(id)) {
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
            <InnerBoxItem $color={getBoxColor(item.id)}></InnerBoxItem>
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
                      onClick={() => selectLine(line.lineId, line.boxIds)}
                    ></HorizontalLine>
                  </HorizontalLineBox>
                </React.Fragment>
              ) : (
                <React.Fragment key={line.lineId}>
                  <VerticalLineBox>
                    <VerticalLine
                      $hoverColor={colors[players[turn] - 1]}
                      $color={getLineColor(line.lineId)}
                      onClick={() => selectLine(line.lineId, line.boxIds)}
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
