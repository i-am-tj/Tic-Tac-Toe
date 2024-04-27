export default function GameOver({winner, onRestart}) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p>{winner} won!</p>}
            {!winner && <p>Game draw!</p>}
            <p>
                <button onClick={onRestart}>Play Again?</button>
            </p>
        </div>
        
    );
}