import { Link } from 'react-router-dom'

export const Tarifs = () => {

  document.title = 'Prices | LinkeDrom'

  return (
<div className="container-fluid">
  <div className="row">
    <div className="col-md-12">
      <h1 className="text-center">
        Prices
      </h1>
<div className="row">
<div className="col-md-6">
<div className="card">
<i className="fa-solid fa-user-check text-center priceicons"></i>
  <div className="card-body">
    <h3 className="card-title text-center">Recruiter</h3>
    <div className="text-center">
    <ul className='pricemenu'>
      <li><i className="fa-solid fa-circle-check green"></i> Unlimited usage</li>
      <li><i className="fa-solid fa-circle-check green"></i> One account per one gadget</li>
      <li><i className="fa-solid fa-circle-check green"></i> Full technical support</li>
      <li><i className="fa-solid fa-circle-check green"></i> Dedicated server with domain</li>
      <li><i className="fa-solid fa-circle-check green"></i> Enterprise level unlimited video calling app</li>
    </ul>
    <h3>Free / 1<sup>st</sup> month</h3>
    <h4>3$ / month per user</h4>
    </div>
    <div className="d-grid gap-2">
    <Link to='/register' className="btn btn-outline-primary"><i className="fa-solid fa-hand-point-right"></i> Choose</Link>
    </div>
  </div>
</div>
</div>

<div className="col-md-6">
<div className="card">
<i className="fa-solid fa-briefcase text-center priceicons"></i>
  <div className="card-body">
  <h3 className="card-title text-center">Corporate</h3>
  <div className="text-center">
    <ul className='pricemenu'>
    <li><i className="fa-solid fa-circle-check green"></i> Min 100 users</li>
      <li><i className="fa-solid fa-circle-check green"></i> Unlimited usage</li>
      <li><i className="fa-solid fa-circle-check green"></i> Full technical support</li>
      <li><i className="fa-solid fa-circle-check green"></i> Dedicated server with domain</li>
      <li><i className="fa-solid fa-circle-check green"></i> Additional features dev on demand</li>
    </ul>
    <h3>1$ / month</h3>
    <h4>per user</h4>
    </div>
    <div className="d-grid gap-2">
    <Link to='/register' className="btn btn-outline-success"><i className="fa-solid fa-hand-point-right"></i> Choose</Link>
    </div>
  </div>
  </div>

</div>
</div>

    </div>
  </div>
</div>
    
 )
}