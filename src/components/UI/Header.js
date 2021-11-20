import { Fragment } from "react/cjs/react.production.min";
import styles from "./Header.module.css";
import mealsImage from "../../assets/meals.jpeg"
import HeaderCartButton from "../Layout/HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={styles['main-image']}>
          <img src={mealsImage} alt="mealsImage"/>
      </div>
    </Fragment>
  );
};

export default Header;
