import ExpenseDate from './ExpenseDate';
import './ExpenseItems.css'

export default function ExpenseItems(props) {

    return(
        <div className='expenseItem'>

            <ExpenseDate date={props.date} />

            <div className='expenseItemDes'>
                <h2>{props.title}</h2>
                <div className='expense-itemPrice'>{props.amount} SAR</div>
            </div>
        </div>
    )
}