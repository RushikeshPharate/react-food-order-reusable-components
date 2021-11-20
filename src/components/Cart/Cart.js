import Modal from '../UI/Modal';
import styles from './Cart.module.css';


const Cart=(props)=>{
    
    return (

        <Modal onBackdropClose={props.onCloseCart}>
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>$35.92</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onCloseCart}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;