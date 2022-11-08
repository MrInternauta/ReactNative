import { useCounter } from "../hooks/useCounter";
export const ContadorConHook = () => {
  const { valor, accum } = useCounter(5);
  return (
    <>
    <h3>Contador <small>{valor}</small></h3>
    <button className="btn btn-primary" onClick={()=> accum(1)}>+1</button>
    &nbsp;
    <button className="btn btn-primary" onClick={()=> accum(-1)}>-1</button>
    </>
  )
}
