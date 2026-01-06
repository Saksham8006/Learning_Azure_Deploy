import React from 'react'

const Calculator:React.FC = () => {

    const buttons  = [
        "AC", "C", "%", "/", "7", "8", "9", "*",
        "4", "5", "6", "-", "1", "2", "3", "+",
        ".", "0", "=", "B"
    ]


  return (
    <div>
     

     <div style={{display: "grid", gridTemplateColumns:" repeat(4, 1fr)",   gap: "10px",
    width: "180px",}}>
        {
            buttons.map((btn, idx) => (
                <button key={idx} style={{ backgroundColor: "gray", display: "flex",  justifyContent: "center", alignItems: "center", padding: "10px", color: "white", width: "40px", height: "40px", borderRadius: "8px", }}>
                    {btn}
                </button>
            ))
        }
     </div>
    </div>
  )
}

export default Calculator
