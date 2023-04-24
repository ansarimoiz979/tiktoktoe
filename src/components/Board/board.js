import './board.css';
import Box from '../Box/box';
import { useState } from 'react';
function Board() {
    let [box, setBox] = useState(Array(9).fill(null))
    let [isXTurn, setIsXTurn] = useState(true);
    const winningPairs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 6],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const checkWinner = () => {
        console.log("ate winner");
        for (let logic of winningPairs) {
            const [a, b, c] = logic;
            if (box[a] !== null && box[a] === box[b] && box[a] === box[c]) {
                console.log("won");
                return true;
            }
        }
        return false;
    }

    let isWinner = checkWinner();


    const handleClickAction = (index) => {
        if (!box[index]) {
            //if box donot have value
            console.log("clicked on index", index)
            let newState = [...box];
            if (isXTurn) {
                newState[index] = "X";
            }
            else {
                newState[index] = "O";
            }
            setBox(newState)
            setIsXTurn(!isXTurn)
        } else {
            //if box is already selected
            console.log("box is already selected");
            return
        }
    }
    return (
        <>
                {isWinner ? <h1>someone won</h1> :
                    <div className='board-container'>
                        <div className='board-row' >
                            <Box value={box[0]} actionClick={() => handleClickAction(0)} />
                            <Box value={box[1]} actionClick={() => handleClickAction(1)} />
                            <Box value={box[2]} actionClick={() => handleClickAction(2)} />
                        </div>

                        <div className='board-row'>
                            <Box value={box[3]} actionClick={() => handleClickAction(3)} />
                            <Box value={box[4]} actionClick={() => handleClickAction(4)} />
                            <Box value={box[5]} actionClick={() => handleClickAction(5)} />
                        </div>

                        <div className='board-row'>
                            <Box value={box[6]} actionClick={() => handleClickAction(6)} />
                            <Box value={box[7]} actionClick={() => handleClickAction(7)} />
                            <Box value={box[8]} actionClick={() => handleClickAction(8)} />
                        </div>

                    </div>
                }
        </>
    );
}

export default Board;
