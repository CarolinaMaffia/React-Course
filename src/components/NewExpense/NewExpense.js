import ExpenseForm from './ExpenseForm/ExpenseForm';
import './newExpense.css';
import { useState } from 'react';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };
    const handleClick = () => {
        setIsEditing(true)
    }

    const handleCancelClick = () => {
        setIsEditing(false);
    }
    return (
        <div className="new-expense">
            <button onClick={handleClick}>Add new Expense</button>
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onHandleCancelClick={handleCancelClick}/>}
        </div>
    )
};

export default NewExpense;