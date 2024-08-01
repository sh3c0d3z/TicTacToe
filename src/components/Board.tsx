import BoardRow from "./BoardRow";
import { calculateWinner } from "../utils/calculateWinner";

type BoardProps = {
  xIsNext: boolean;
  squares: Array<string | null>;
  onPlay: (nextSquares: Array<string | null>) => void;
};

const Board = ({ xIsNext, squares, onPlay }: BoardProps) => {
  const handleClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  };
  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;
  return (
    <>
      <div className="status">{status}</div>
      {Array(3)
        .fill(null)
        .map((_, rowIndex) => (
          <BoardRow
            key={rowIndex}
            row={squares.slice(rowIndex * 3, rowIndex * 3 + 3)}
            rowIndex={rowIndex}
            onSquareClick={handleClick}
          />
        ))}
    </>
  );
};

export default Board;
