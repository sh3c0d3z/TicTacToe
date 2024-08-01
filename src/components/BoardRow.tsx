import Square from "./Square";

type BoardRowProps = {
  row: Array<string | null>;
  rowIndex: number;
  onSquareClick: (i: number) => void;
};

const BoardRow = ({ row, rowIndex, onSquareClick }: BoardRowProps) => {
  return (
    <div className="board-row">
      {row.map((value, index) => (
        <Square
          key={index}
          value={value}
          onSquareClick={() => onSquareClick(rowIndex * 3 + index)}
        />
      ))}
    </div>
  );
};

export default BoardRow;
