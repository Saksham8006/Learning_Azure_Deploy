import React, { useState } from 'react'

const TicTacToe2: React.FC = () => {
    const [borad, setBorad] = useState(Array(9).fill(null))
    const [isXNext, setIsNext] = useState(true)
    const winner = findWinner(borad)

    function handleClick(index: number) {
        if (borad[index] || winner) return;

        const newBoard = [...borad];
        newBoard[index] = isXNext ? "X" : "0"
        setBorad(newBoard);
        setIsNext(!isXNext);
    }


    function reset() {
        setBorad(Array(9).fill(null));
        setIsNext(true)
    }


    function findWinner(board: number[]) {
        let possibleWinnings = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]

        ]
        for (let [a, b, c] of possibleWinnings) {
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                {
                    return board[a]
                }
            }

        }
        return null;
    }




    return (
        <div className='ml-[50%]'>
            <h1>Custom Tic Tac Toe</h1>

            <button onClick={reset}>Reset</button>
            <div>
                {
                    winner ? `Winner is: ${winner}`
                        : `Next Player is :  ${isXNext ? "X" : "0"}`}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 100px)', gap: '5px' }}>
                {
                    borad.map((cell, index) => (
                        <button key={index} onClick={() => handleClick(index)}>
                            {cell}
                        </button>
                    ))
                }
            </div>

        </div>
    )

}


export default TicTacToe2;
