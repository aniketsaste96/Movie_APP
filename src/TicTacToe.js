import { useState } from "react";
import Button from '@mui/material/Button';
import ReplayIcon from '@mui/icons-material/Replay';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

export function TicTacToe() {
    const { width, height } = useWindowSize();


    const [board, setBoard] = useState([
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ]);


    //X starts the game  - hence useState is true
    const [isXTurn, setIsXTurn] = useState(true);

    const handleClick = (index) => {
        //1.Ift x's turn Display X or else 0
        //Update only Untouched Boxes 
        //3.Continue when no winner..
        console.log("clicked..", index);
        if (winner === null && !board[index]) {
            const boardCopy = [...board];
            boardCopy[index] = !isXTurn ? "✖" : "O";
            setBoard(boardCopy);
            setIsXTurn(!isXTurn);
        }
    };

    const decideWinner = board => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];


            //if all three values are equal and not null
            if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
                console.log("winner is ", board[a]);
                return board[a];
            }


        }
        //When no winner null is return
        return null;
    };
    const winner = decideWinner(board);
    // const draw = !decideWinner(board)
    // console.log(draw)
    return (
        <>
            <div className="tictac">
                <div className="board">
                    {winner ? <Confetti
                        width={width}
                        height={height} /> : ""}



                    {/* Based on whose tunr we have to pass val down */}
                    {board.map((val, index) => (
                        <GameBox val={val} onPlyerClick={() => handleClick(index)} />
                    ))}

                </div>
                {winner ? <h2>Winner is {winner}   <br />  <button className="X">✖</button><button className="O">O</button> <br /><Button variant="contained" id="reset" onClick={() => setBoard([null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null])}> {<ReplayIcon />}  reset</Button>  </h2> : ""}




            </div>

        </>
    );

}
function GameBox({ val, onPlyerClick }) {


    // const [val, setVal] = useState(null)
    // const val = "X";
    const style = { color: val === "✖" ? "green" : "red" };
    return (
        <div
            style={style}
            className="game-box"
            onClick={() => onPlyerClick()}>{val}</div>
    );
}
