export default function Guitar({todo,agregarcarrito}) {





  return (
    <>


      <div className="col-md-6 col-lg-4 my-4 row align-items-center">
        <div className="col-4">
          <img
            className="img-fluid"
            src={ `/img/${todo.image}.jpg` }
            alt="imagen guitarra"
          />
        </div>
        <div className="col-8">
          <h3 className="text-black fs-4 fw-bold text-uppercase">{todo.name}</h3>
          <p>{todo.description}</p>
          <p className="fw-black text-primary fs-3">{todo.price}</p>
          <button onClick={() => agregarcarrito(todo)} type="button" className="btn btn-dark w-100 ">
            Agregar al Carrito
          </button>
        </div>
      </div>

      
    </>
  );
}
