import React, { FunctionComponent, useState } from 'react'
import { JsxElement } from 'typescript'
import PlayBoard from './PlayBoard'
import Box from './Box';

let boardStateArray:string[] = ["","","","","","","","",""];

const TicTacToeBox:React.FunctionComponent = () => {
    let [boardState,setBoardState] = useState(boardStateArray);
    const [currentTurn,setCurrentTurn] = useState("")
    const[text,setText] = useState("");
    
    return (
    <>
    <p className='boardText'>{text}</p>
   <div className="board">

    {
        boardState.map((boxValue,boxIndex)=>(
            
            <Box 
            value={boxValue}
            index = {boxIndex}
            setBoardState={setBoardState}
            boardState={boardState}
            currentTurn = {currentTurn}   
            setCurrentTurn = {setCurrentTurn}
            setText = {setText}   
               />
            )
            )
        }



    </div>
        <button style={{padding:"30px",backgroundColor:"black",marginTop:"12px",marginLeft:"50%",
        transform:"translateX(-50%)"
    }}onClick={()=>{setBoardState(Array(9).fill(''))}}>Reset</button>
    </>
  )
}

export default TicTacToeBox