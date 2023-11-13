import { Link } from "react-router-dom"


export const Home = () => {

    return (
        <>
        <div className="jumb">
        <div className="p-3 mb-4 bg-light rounded-3 picture">
        <div className="container-fluid jumb">
        <h1 className="display-5 fw-bold text-center">Wanna Automate your routine work with LinkedIn?</h1>
        <div className="row">

       <div className="col-md-4 text-center land">
       <div className="d-grid gap-2">
        <button className="btn btn-primary btn-lg">Order LinkeDrom now!</button>
        </div>
        </div>

        <div className="col-md-4 text-center land">
        <div className="d-grid gap-2">
       <Link
          to='/about'
          className="btn btn-lg btn-primary" type="button"><i className="fa-solid fa-unlock"></i> Find more about LinkeDrom</Link>
       </div>
        </div>

        
        </div>

            </div>
            </div>
        </div>
        </>
    )
}