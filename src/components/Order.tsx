

export const Order = () => {

    document.title = 'Order | LinkeDrom'
    
    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 text-center pt-5">
                    <h3>To order service, please, contact: </h3>
                    <div className="mycontacts">
    <a href="https://t.me/SafaDmitry" target='_blank' title='Telegram'><i className="fa-brands fa-telegram"></i></a>
</div> 

<div className="mycontacts">
    <a href="https://www.linkedin.com/in/dmitry-safarov-b08745194" target='_blank' title='Linkedin'><i className="fa-brands fa-linkedin"></i></a>
</div>

<div className="mycontacts">
    <a href="mailto:dmitry.safarov@gmail.com?subject=Linkedin app subscription" target='_blank' title='Email'><i className="fa-solid fa-envelope"></i></a>
</div>
                </div>
            </div>
        </div>
        </>
    )
}