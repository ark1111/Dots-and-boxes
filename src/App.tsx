import { Box, Game } from "./App,styled";
import Board from "./components/Board";

function App() {
  return (
    <Box>
      <Game>
        <Board />
      </Game>
    </Box>
  );
}

export default App;
