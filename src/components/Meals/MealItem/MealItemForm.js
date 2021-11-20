import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form className={styles.form}>
      <div >
        <Input label='Quantity' input={{id:"amount_"+props.meal.id, type:"number", min:"1",max:"10",step:"1",defaultValue:"1"}}/>
      </div>
      <div>
        <button>+ADD</button>
      </div>
    </form>
  );
};

export default MealItemForm;
