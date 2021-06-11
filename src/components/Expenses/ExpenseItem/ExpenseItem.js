import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../../UI/Card/Card';

import './expenseItem.css';
import { useState } from 'react';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);
    
    const handleClick = () => {
         setTitle('Updated!');   
    }

    return (
        <Card className="expense-item">
            <div className="expense-item__description">
                <ExpenseDate date={props.date} />
            </div>
            <div>
                <h2>{title}</h2>
            </div>
            <div className="expense-item__price">${props.amount}</div>
            <button onClick={handleClick}>Change title</button>
        </Card>
    )
}

export default ExpenseItem;