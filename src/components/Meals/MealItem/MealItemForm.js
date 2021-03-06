
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {

    
    const addButtonHandler = () => {
        
    }
    return <form className={classes.form}>
        <Input label="Amount"
            input={{
                id: 'amount',
                type:'Number',
                min: 1,
                max: 5,
                step: 1,
                defaultValue: 1                
               }}
        />
        <button onClick={addButtonHandler}>+ Add</button>
  </form>

    
}

export default MealItemForm;