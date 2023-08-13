import React, { useState } from 'react'

type boxProp = {
    value: string,
    index: number,
    setBoardState: React.Dispatch<React.SetStateAction<string[]>>
    boardState: string[],
    currentTurn: string,
    setCurrentTurn: React.Dispatch<React.SetStateAction<string>>
    setText: React.Dispatch<React.SetStateAction<string>>
}



const Box = ({ value, index, setBoardState, boardState, currentTurn, setCurrentTurn, setText }: boxProp) => {
    function checkWinner(currentTurn: string, boardState: string[]) {
        // for rows
        const isTie: boolean = boardState.every(element => {

            return (element != '')
        }
        )
        if(isTie){
            setText('Its a tie!')
            setBoardState(Array(9).fill(''))
        
        }
        if (boardState[0] === boardState[1] && boardState[1] === boardState[2] && boardState[0] != '') {
            console.log("game over");
            setText(`${boardState[0]} has won the game`)
            return;
        }
        else if (boardState[3] === boardState[4] && boardState[4] === boardState[5] && boardState[3] != '') {
            console.log("game over");
            setText(`${boardState[3]} has won the game`)
            return;
        }
        else if (boardState[6] === boardState[7] && boardState[7] === boardState[8] && boardState[6] != '') {
            console.log("game over");
            setText(`${boardState[6]} has won the game`)
            return;
        }

        //for cols
        if (boardState[0] === boardState[3] && boardState[3] === boardState[6] && boardState[0] != '') {
            console.log("game over");
            setText(`${boardState[0]} has won the game`)
            return;
        }
        else if (boardState[1] === boardState[4] && boardState[4] === boardState[7] && boardState[1] != '') {
            console.log("game over");
            setText(`${boardState[1]} has won the game`)
            return;
        }
        else if (boardState[2] === boardState[5] && boardState[5] === boardState[8] && boardState[2] != '') {
            console.log("game over");
            setText(`${boardState[2]} has won the game`)
            return;
        }

        //for diags
        else if (boardState[0] === boardState[4] && boardState[4] === boardState[8] && boardState[0] != '') {
            console.log("game over");
            setText(`${boardState[0]} has won the game`)
            return;
        }
        else if (boardState[2] === boardState[4] && boardState[4] === boardState[6] && boardState[2] != '') {
            console.log("game over");
            setText(`${boardState[6]} has won the game`)
            return;
        }

        else {
            if (currentTurn == '' || currentTurn == 'O') {
                setText(`X's Turn Now`)
            } else {

                setText(`O's Turn Now`)
            }
        }


    }

    checkWinner(currentTurn, boardState);

    function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>, value: string, index: number) {


        if (currentTurn === '') {
            let newBoardState = [...boardState];
            newBoardState[index] = "X"
            setBoardState(newBoardState)
            setCurrentTurn("X")

        }
        else if (currentTurn === "X" && boardState[index] === '') {
            let newBoardState = boardState;
            newBoardState[index] = "O"
            setBoardState(newBoardState)
            setCurrentTurn("O")
        }
        else if (boardState[index] === '') {
            let newBoardState = boardState;
            newBoardState[index] = "X"
            setBoardState(newBoardState)
            setCurrentTurn("X")
        }



    }


    console.log(value, index)
    return (
        <div style={{
            height: "112px"
            , width: "112px",
            margin: "4px",
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            backgroundColor: 'blue'
        }}

            onClick={(e) => { handleClick(e, value, index) }}
        >
            {value}


        </div>
    )
}

export default Box