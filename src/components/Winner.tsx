import { colors } from "../data";
import { Box, InnerBox } from "./Winner.styled";

type Props = {
  winner: "A" | "B" | "draw" | null;
};

const Winner = ({ winner }: Props) => {
  return (
    <Box
      $color={
        winner === "draw" ? "#666" : winner === "A" ? colors[0] : colors[1]
      }
    >
      {winner !== "draw" ? (
        <InnerBox $color={winner === "A" ? colors[0] : colors[1]}>
          {winner === "A" ? "Blue" : "Red"}({winner}) won
        </InnerBox>
      ) : (
        <InnerBox $color="#666">DRAW</InnerBox>
      )}
    </Box>
  );
};

export default Winner;
