import React from "react";
import "./style.css"
import boxes from "./boxes.js";
import Box from "./components/Box"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)

    function toggle(id) {
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }

    const squaresElements = squares.map(item => {
        return (
            <Box key={item.id}
            on={item.on} 
            toggle={() => toggle(item.id)}
            />
        )
    })

    return (
        <main>
            {squaresElements}
        </main>
    )
}