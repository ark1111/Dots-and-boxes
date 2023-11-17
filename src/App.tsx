import { useEffect, useState } from "react";
import { Box, Game } from "./App,styled";
import Board from "./components/Board";
import Scores from "./components/Scores";
import Turn from "./components/Turn";
import Winner from "./components/Winner";
import { boxesData } from "./data";

function App() {
  const [turn, setTurn] = useState<"A" | "B">("A");
  const [aBoxes, setABoxes] = useState<number[]>([]);
  const [bBoxes, setBBoxes] = useState<number[]>([]);
  const [winner, setWinner] = useState<"A" | "B" | "draw" | null>(null);

  const checkWin = () => {
    if (aBoxes.length + bBoxes.length === boxesData.length) {
      if (aBoxes.length > bBoxes.length) {
        setWinner("A");
      } else if (bBoxes.length > aBoxes.length) {
        setWinner("B");
      } else {
        setWinner("draw");
      }
    }
  };

  useEffect(() => {
    checkWin();
  }, [turn]);

  return (
    <Box>
      <Game>
        <Scores aBoxes={aBoxes} bBoxes={bBoxes} />
        <Board
          aBoxes={aBoxes}
          setABoxes={setABoxes}
          bBoxes={bBoxes}
          setBBoxes={setBBoxes}
          turn={turn}
          setTurn={setTurn}
        />
        {winner ? <Winner winner={winner} /> : <Turn turn={turn} />}
      </Game>
    </Box>
  );
}

export default App;
