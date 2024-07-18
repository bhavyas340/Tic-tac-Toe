export default function GameOver({winner,onRestart}){
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
           {winner && <p>{winner} <strong>Won!</strong></p>}
           {!winner && <p>{winner} <strong>it&apos;s a Draw</strong></p>}
            <p><button onClick={onRestart}>Rematch</button></p>
        </div>
    )
}