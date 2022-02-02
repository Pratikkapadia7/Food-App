import styles from './Modal.module.css';
import ReactDOM from 'react-dom';
const Backdrop = (props)=>{
    return <div className={styles.backdrop} onClick={props.onClose}></div>;
}
const ModalOverlay = (props)=>{
    return(
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>  
    );
}
const Modal = (props)=>{
   return(
       <>
           {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,document.getElementById('overlays'))}
           {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,document.getElementById('overlays'))}
       </>
   ); 
}
export default Modal;