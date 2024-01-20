import '../components-css/FormExp.sass';
export default function FormExp(props) {
    return( 
    <div className="formexp">
        <h2>New expense</h2>
        <label className='label-formexp'>
           <p className='title-formexp'>Description:</p>
           <input
               id="description"
               type="text" 
               name="description"
               placeholder='Description'
               onChange={(e) => props.handleChangeFormExp(e.target.name,e.target.value)} 
               className='input-formexp' />
           {props.formExp.errorDescription && <p className='formexp-error'>{props.formExp.errorDescription}</p>}
        </label>
        <label className='label-formexp'>
           <p className='title-formexp'>Amount:</p>
           <input 
                id="amount"
                type="text" 
                name="amount" 
                placeholder="amount" 
                onChange={(e) => props.handleChangeFormExp(e.target.name,e.target.value)} 
                className='input-formexp' />
           {props.formExp.errorAmount && <p className='formexp-error'>{props.formExp.errorAmount}</p>}
        </label>
        <label className='label-formexp'>
           <p className='title-formexp'>Type:</p>
           <select id="typeExpense" className='input-formexp'   name="typeExpense" onChange={(e) => props.handleChangeFormExp(e.target.name,e.target.value)} >
               <option>Select...</option>
               <option>gain</option>
               <option>expense</option>
           </select>
           {props.formExp.errotTypeExpense && <p className='formexp-error'>{props.formExp.errotTypeExpense}</p>}
        </label>
        <footer className='formexp-footer'>
         <button disabled = {props.formExp.erroSave} onClick={() => props.saveExpense(props.listExpId)} className='btn-formexp'>Save</button>
         <button onClick={props.openCloseformExpenses} className='btn-formexp'>Cancel</button>
        </footer>
    </div>
   );
}