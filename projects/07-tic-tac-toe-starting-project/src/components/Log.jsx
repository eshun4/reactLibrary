// It ouputs an orders list where we output the different turns while players are playing the game

export default function Log({turns}) {

    return (
        <ol id="log"> 
            {turns.map(turn =>
            <li key={`${turn.square.row}${turn.square.col}`}> 
                {turn.player} selected {turn.square.row}, {turn.square.col}
            </li>)}
        </ol>
    );
}