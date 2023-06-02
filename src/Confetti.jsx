import ReactConfetti from 'react-confetti'
// import { useState } from 'react'

export default function Confetti() {
  // const { dimensions, setDimensions } = useState({ width: window.innerWidth, height: window.innerHeight });
  // const detectSize = () => {
  //   setDimensions ({ width: window.innerWidth, height: window.innerHeight })
  // }

  return (
    <ReactConfetti
      width={window.innerWidth}
      height={window.innerHeight}
    />
  )
}