import "./Piece.scss";

interface PieceProps {
  pieceId: string;
  img: string;
  name: string;
  coordinate: string;
}

const Piece = ({ pieceId, img, name, coordinate }: PieceProps): JSX.Element => {
  return (
    <div className="piece">
      <img src={img} alt={name} />
    </div>
  );
};

export default Piece;
