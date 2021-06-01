import ExpenseDate from './ExpenseDate';
import './expenseItem.css';

function ExpenseItem(props) {
    
    return (
        <div className="expense-item">
            <div className="expense-item__description">
                <ExpenseDate date={props.date} />
            </div>
            <div>
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    )
}

export default ExpenseItem;