import { useState } from "react";
import { Box, Game } from "./App,styled";
import Board from "./components/Board";
import Scores from "./components/Scores";
import Turn from "./components/Turn";

function App() {
  const [turn, setTurn] = useState<"A" | "B">("A");
  const [aBoxes, setABoxes] = useState<number[]>([]);
  const [bBoxes, setBBoxes] = useState<number[]>([]);
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
        <Turn turn={turn} />
      </Game>
    </Box>
  );
}

export default App;
