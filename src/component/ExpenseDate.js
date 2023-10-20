import "./ExpenseItems.css";

function ExpenseDate(props) {
    const year = props.date.getFullYear();
    const month = props.date.toLocaleDateString("en-UK", { month: "long" });
    const day = props.date.toLocaleDateString("en-UK", { day: "2-digit" });

    return (
        <div className="dateStyle">
            <div>{year}</div>
            <div>{month}</div>
            <div>{day}</div>
        </div>
    );
}

export default ExpenseDate;
