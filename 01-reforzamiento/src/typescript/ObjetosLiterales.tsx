interface Persona {
  nombreCompleto: string;
  age: number;
  direccion: any;
}
export const ObjetosLiterales = () => {
  const person: Persona = {
    nombreCompleto:  'Felipe',
    age: 23,
    direccion: {
      street: 'Zempoala',
      num: 338,
      col: 'Teresa'
    }
  }
  return (
  <>
  <h3>ObjetosLiterales</h3>
  <code>
    <pre>
    { JSON.stringify(person, null, 2)}
    </pre>
  </code>
  </>    
  )
}
