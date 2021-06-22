import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../../UI/Card/Card';
import './expenseItem.css';

const ExpenseItem = (props) => {

    return (
        <Card className="expense-item">
            <div className="expense-item__description">
                <ExpenseDate date={props.date} />
            </div>
            <div>
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">${props.amount}</div>
        </Card>
    )
}

export default ExpenseItem;