import { Fragment } from "react/cjs/react.production.min";
import styles from "./Modal.module.css";
// import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onBackdropClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

// const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {/* {<ReactDOM.createPortal(<Backdrop />,portalElement)}
        {<ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)} */}

      {/*         
        We can use this code below commented code for modal as well. But as we want to have proper HTML semantics in our app we have used portals
        */}

      <Backdrop onBackdropClose={props.onBackdropClose}/>
      <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
  );
};

export default Modal;
