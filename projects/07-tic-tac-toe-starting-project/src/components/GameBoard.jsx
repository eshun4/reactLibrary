import { useState } from "react";

const initialGameboard = [ 
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialGameboard);
    // if state is object or array update array in immutable way
    // create a copy and change that copy
    // because here you are dealing with a reference
    // could lead to strange bugs 
    const handleSelectSquare = (rowIndex, colIndex) => {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = 'X';
            return updatedBoard;
        } );
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}> 
                <ol> 
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                        <button onClick={() => handleSelectSquare(rowIndex, colIndex)}> {playerSymbol} </button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    );
}