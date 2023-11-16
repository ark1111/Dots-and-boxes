import React from "react";
import { Box } from "./Turn.styled";
import { colors } from "../data";

type Props = {
  turn: "A" | "B";
};

const Turn = ({ turn }: Props) => {
  return (
    <Box $color={turn === "A" ? colors[0] : colors[1]}>
      It's {turn === "A" ? "Blue" : "Red"}'s turn
    </Box>
  );
};

export default Turn;
