import "./Cell.scss";
import { pieces } from "../../data/Pieces.json";
import Piece from "../piece/Piece";

export interface CellProps {
  id: number;
  coordinate: string;
  name: string;
  isEmpty: boolean;
}

const Cell = ({ id, name, coordinate, isEmpty }: CellProps) => {
  return (
    <div className={`cell ${id % 2 === 0 ? "black-cell" : "white-cell"}`}>
      {pieces.map(({ pieceId, img_url, name, pieceCoordinate }) =>
        coordinate === pieceCoordinate ? (
          <Piece
            key={id}
            pieceId={pieceId}
            img={img_url}
            name={name}
            coordinate={pieceCoordinate}
          />
        ) : null
      )}
    </div>
  );
};

export default Cell;
