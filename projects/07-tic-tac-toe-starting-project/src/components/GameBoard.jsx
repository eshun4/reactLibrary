// import { useState } from "react";



export default function GameBoard({ onSelectSquare, board }) {
    
    // const [gameBoard, setGameBoard] = useState(initialGameboard);
    // // if state is object or array update array in immutable way
    // // create a copy and change that copy
    // // because here you are dealing with a reference
    // // could lead to strange bugs 
    // const handleSelectSquare = (rowIndex, colIndex) => {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });
        
    //     onSelectSquare();
    // }

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => <li key={rowIndex}> 
                <ol> 
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                        <button onClick={() => onSelectSquare(rowIndex, colIndex)}
                            disabled={playerSymbol != null}> {playerSymbol} </button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    );
}