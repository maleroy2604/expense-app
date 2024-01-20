import '../components-css/ListOfExpense.sass';
import FormExp from './FormExp';
import { useState } from 'react';
import Expense from './Expense';


export default function ListOfExpense(props) {
    const [formExpenseOpen, setFormExpenseOpen] = useState(false);

    function openCloseformExpenses() {
        setFormExpenseOpen(formExpenseOpen => !formExpenseOpen);
        props.resetValuesFormExp();
    } 

    function saveExpense(id){
        props.saveExpense(id);
        openCloseformExpenses();
    }

    const expensesList = props.expenses.map(exp =>{
        return(
            <Expense
                key={exp.id}
                exp={exp}>
            </Expense>
        );
    })

    return(
        <div>
            <div className="list-exp">
                <h2>{props.exp.title}</h2>
                {expensesList}
                <p >{props.totalAmount}</p>
                <button data-testid="addexpense" className = "btn-addexp" onClick={openCloseformExpenses}> + Add expense </button>
            </div>
            <div>
                {formExpenseOpen &&
                <FormExp 
                    key={props.exp.id}
                    listExpId = {props.exp.id}
                    handleChangeFormExp = {props.handleChangeFormExp}
                    formExp = {props.formExpObj}
                    openCloseformExpenses = {openCloseformExpenses}
                    saveExpense = {saveExpense}
                >
                </FormExp>}
            </div>
        </div>
    );
}