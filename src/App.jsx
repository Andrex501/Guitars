import Header from "./components/Header";
import Guitar from "./components/Guitar";
import { useState, useEffect } from "react";
import { db } from "./data/db";

function App() {
  const [base] = useState(db);
  const [carrito, setCarrito] = useState(valorinicial);


useEffect(()=>{
     localStorage.setItem('carrito', JSON.stringify(carrito))
, [carrito]})




function valorinicial() {
  const ini = localStorage.getItem('carrito')
  return localStorage ? JSON.parse(ini) : []
}


function agregarcarrito(todo) {

const existeguitarra = carrito.findIndex(pasa => pasa.id === todo.id)
console.log(existeguitarra);

if (existeguitarra >= 0) {

if( carrito[existeguitarra].quantity  >= 5 ) return


  let copiadelcarro = [...carrito]
  copiadelcarro[existeguitarra].quantity++
  setCarrito(copiadelcarro)
}else{
  todo.quantity = 1
  setCarrito([...carrito, todo])
}


}

function eliminaritem(id) {
  setCarrito( todo => todo.filter(paso => paso.id !== id) )
}


function incrementarcantidad(id) {
  
  const incremen = carrito.map( item =>{
if (item.id === id && item.quantity<5 ) {
   return {
    ...item,
    quantity: item.quantity + 1
   }
}

return item
  })
  
setCarrito(incremen);

}


function decrementar(id) {

  const decremen = carrito.map( item =>{
if (item.id === id && item.quantity > 1 ) {
   return {
    ...item,
    quantity: item.quantity - 1
   }
}

return item
  })
  
setCarrito(decremen);
}


function limpiarcarrito() {
setCarrito([]);
}




  return (
    <>
      <Header 
       carrito={carrito}
      eliminaritem={eliminaritem}
      incrementarcantidad={incrementarcantidad}
      decrementar={decrementar}
      limpiarcarrito={limpiarcarrito}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {base.map((todo) => (
            <Guitar 
            key={todo.id}
            todo={todo} 
            agregarcarrito={agregarcarrito}
            />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
