import {  useState } from "react";
export const Contador = () => {
  const [valor, setValor] = useState<number>(0);
  const accum = (num: number)=>{
    setValor(valor + num)
  }

  return (
    <>
    <h3>Contador <small>{valor}</small></h3>
    <button className="btn btn-primary" onClick={()=> accum(1)}>+1</button>
    &nbsp;
    <button className="btn btn-primary" onClick={()=> accum(-1)}>-1</button>
    </>
  )
}
