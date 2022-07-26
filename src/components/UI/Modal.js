import React from 'react'
import "./Modal.css"
import { ReactDOM } from 'react'

// const Backdrop=props=> {

// return( <div></div>
// )

// }

const ModalOverlay=props=> {
    return (
    
    <div className='model-content'>
        <div>
            {props.children}
        </div>
    </div>
    )
}


const portalElement= document.getElementById('overlays')


export const Modal = (props) => {
  return (
    <>
{/* {ReactDOM.createPortal(<Backdrop />, portalElement)} */}
{
  ReactDOM.createPortal(<ModalOverlay>
    {props.children}
  </ModalOverlay>,portalElement)
}

    </>
  )
}
