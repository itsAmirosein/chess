import './Board.scss';
import {cells} from '../../data/BoardCell.json'
import { useState } from 'react';
import Cell from '../cell/Cell';
import { CellProps } from './../cell/Cell';

const Board = () : JSX.Element => {
    const [boardCells,setBoardCells] = useState<CellProps[]>(cells);

    return (
        <div className="board-surface">
            {boardCells.map(({id,name,coordinate,isEmpty}) => (
                <Cell key={id} id={id} name={name} coordinate={coordinate} isEmpty={isEmpty} />
            ))}
        </div>
    )
}

export default Board
