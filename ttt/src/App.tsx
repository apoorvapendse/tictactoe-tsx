import React from 'react'
import '../src/App.css'
import TicTacToeBox from './components/TicTacToeBox'
const App:React.FunctionComponent = () => {
  return (
<>
    <h1>Welcome to TicTacToe by <a href='https://github.com/apoorvapendse' target='_blank'>apoorva</a></h1>
    <div
      style={{
        height:"100%",
        width:"100%",
        backgroundColor:"#1f1f1f"
      }}
      className='mainContainer'
      >

      <TicTacToeBox/>
    </div>
      </>
  )
}

export default App