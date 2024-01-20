import "../components-css/Expense.sass"
export default function Expense(props) {
    return(
        <div className="exp-item">
            <section>
                <p>{props.exp.amount}</p>
                <p>{props.exp.description}</p>
            </section>
            <footer>
            </footer>
        </div>
    )
}