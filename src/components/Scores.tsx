import {
  Box,
  PlayerScoreBox,
  PlayerScoreTitle,
  PlayerScoreValue,
} from "./Scores.styled";
import { colors } from "../data";

type Props = {
  aBoxes: number[];
  bBoxes: number[];
};

const Scores = ({ aBoxes, bBoxes }: Props) => {
  return (
    <Box>
      <PlayerScoreBox $color={colors[0]}>
        <PlayerScoreTitle>Player A</PlayerScoreTitle>
        <PlayerScoreValue>{aBoxes.length}</PlayerScoreValue>
      </PlayerScoreBox>
      <PlayerScoreBox $color={colors[1]}>
        <PlayerScoreTitle>Player B</PlayerScoreTitle>
        <PlayerScoreValue>{bBoxes.length}</PlayerScoreValue>
      </PlayerScoreBox>
    </Box>
  );
};

export default Scores;
