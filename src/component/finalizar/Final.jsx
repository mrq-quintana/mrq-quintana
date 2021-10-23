import { Link } from "react-router-dom";

function Final() {


    return (
        <div>
            <h2>
                Gracias por su compra
            </h2>
            <Link to={`/`}>
                <button className="btn btn-danger">Comprar</button>
            </Link>


        </div>
    )
}
export default Final