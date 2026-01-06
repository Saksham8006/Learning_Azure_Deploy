import React from 'react'
import TicTacToe from './Pages/Tic Tac Toe/TicTacToe'
// import TicTacToe2 from './Pages/Tic Tac Toe/TicTacToe2'
// import Calculator from './Pages/Calculator/Calculator'

const App:React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", width: "100%", gap: "200px" }}>
      <TicTacToe />
      {/* <TicTacToe2 /> */}
      {/* <Calculator /> */}
    </div>
  )
}

export default App
