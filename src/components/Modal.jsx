
export const Modal = ({active, setActive, children}) => {

    return (
        <div className={active ? "modal active" : "modal"}
        onClick={() => setActive(false)}
        >
            <div className={active ? "modal__content active" : "modal__content"}
            onCLick={(e) => e.stopPropagation()}
            >
            {children}

<div className="d-grid gap-2">
            <div className="btn btn-primary"
            onClick={() => setActive(false)}
            > Close window</div>
            </div>
            </div>
           </div>
    )
}