import './index.css'
import ExpenseItems from './component/ExpenseItems';
import Card from './component/Card'

function App() {

  const expense = [
    {
      id: "la",
      title: "Laptop",
      amount: 3000,
      date: new Date(2020, 7, 24),
    },
    {
      id: "in",
      title: "insuranse",
      amount: 1500,
      date: new Date(2023, 3, 14),
    },
    {
      id: "Wa",
      title: "smart watch",
      amount: 900,
      date: new Date(2023, 5, 6),
    },
  ];

  return (
    <>
      <h1>hello world, lets get started</h1>
      <Card>
        <div className="center">
          <div className="box">
            <ExpenseItems
              title={expense[0].title}
              amount={expense[0].amount}
              date={expense[0].date}
            ></ExpenseItems>

            <ExpenseItems
              title={expense[1].title}
              amount={expense[1].amount}
              date={expense[1].date}
            ></ExpenseItems>

            <ExpenseItems
              title={expense[2].title}
              amount={expense[2].amount}
              date={expense[2].date}
            ></ExpenseItems>
          </div>
        </div>
      </Card>

    </>
  );
}

export default App;