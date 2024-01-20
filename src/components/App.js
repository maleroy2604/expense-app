import '../components-css/App.sass';
import React,{useState} from 'react'
import ListOfExpense from './ListOfExpense';

function App() {
  const [listOfExpenses, setlistOfExpenses] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [formExp, setFormExp]= useState({
    description:"",
    errorDescription:"",
    amount:"",
    errorAmount:"",
    typeExpense:"",
    errotTypeExpense:"",
    erroSave:true
  });
  

  function handleChange() {
    setlistOfExpenses(listOfExpenses => {
      const newListOfExpense= {
        id : listOfExpenses.length + 1,
        title:"January 2024",
        expenses:[]
      }
      return [...listOfExpenses, newListOfExpense];
    })
  }

  
  function handleChangeFormExp(name,value) {
   let errorDescription = "";
   let errorAmount = "";
   let errorTypeExpense = ""; 
   let regex = /^[0-9]+$/;

  if(name === "description" && value.trim()===''){
      errorDescription = "Description is required";
  }else if(name === "amount" && (value.trim().length===0 ||!regex.test(value))){
      errorAmount = "Amount is required";
  }else if(name === "typeExpense" && value=== "Select..."){
      errorTypeExpense = "Type is required";
  } 

  const allFieldsNotEmpty = formExp.description.trim() !== '' &&
  formExp.amount.trim() !== '' && regex.test(formExp.amount.trim()) &&
  formExp.typeExpense !== 'Select...'; 
 
    setFormExp({
     ...formExp,
      [name]: value,
      errorDescription: errorDescription,
      errorAmount: errorAmount,
      errotTypeExpense: errorTypeExpense,
      erroSave:!allFieldsNotEmpty
    });
}

function saveExpense(id){
  const updatedListOfExpenses = listOfExpenses.map(exp => {
    if(exp.id === id){
      const newExpense = {
        id: exp.expenses.length + 1,
        description: formExp.description,
        amount: formExp.amount,
        typeExpense: formExp.typeExpense
      }
      
      return {...exp,
        expenses : [...exp.expenses, newExpense]
      }
    }
    return exp;
  })
  setlistOfExpenses(updatedListOfExpenses);
  let sign = formExp.typeExpense === 'gain'? 1 : -1;
  setTotalAmount(totalAmount => totalAmount + (sign * parseInt(formExp.amount)));
  resetValuesFormExp();
}  


  function resetValuesFormExp(){
    setFormExp({
      description:"",
      errorDescription:"",
      amount:"",
      errorAmount:"",
      typeExpense:"",
      errotTypeExpense:"",
      erroSave:true
    })
  }

  const listOfExpensesComp = listOfExpenses.map(exp => <ListOfExpense 
    key={exp.id} 
    exp={exp} 
    handleChangeFormExp = {handleChangeFormExp}
    formExpObj = {formExp} 
    saveExpense = {saveExpense}
    expenses = {exp.expenses}
    resetValuesFormExp = {resetValuesFormExp}
    totalAmount = {totalAmount}
    >
  </ListOfExpense>)

  return (
    <div>
      <nav>
        <h3>Lists Of Expenses</h3>
      </nav>
      <div className="exp-list">
        {listOfExpensesComp}
      </div>
      <button className = "btn-addexp" onClick={handleChange} > + Add expense list </button>
    </div>
  );
}

export default App;
