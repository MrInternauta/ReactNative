import { useState } from 'react';
export const useCounter = (initial = 10) => {
  const [valor, setValor] = useState<number>(initial);
  const accum = (num: number)=>{
    setValor(valor + num)
  }

  return {
    valor,
    accum
  }
}
