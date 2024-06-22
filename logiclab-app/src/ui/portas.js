import React from 'react'

const portas = ({portas}) => {
  return (
    <div className={`transition-all duration-500 ease-in-out ${portas ? ' left-0 top-0 w-[80%]  bg-gray-500  font-bold rounded-tl-lg rounded-bl-lg' : 'fixed invisible top-[-100%]'}`}>
    <div>portas</div>
    </div>
  )
}

export default portas