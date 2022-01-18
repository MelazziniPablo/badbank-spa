function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [deposit_amount, setDeposit] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  const ctx = React.useContext(UserContext);  

  var aux = ctx.users.length -1;
  
  let name_aux = "";

  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label + ' empty field');
      setTimeout(() => setStatus(''),3000);
      return false;
    }     
    return true;
}

function validate_password(field, label) {    
  //console.log('Password lenght is: ', field.length)
    if (field.length < 8 && field.length > 0) {
      setStatus('Error: ' + label + ' can not be less than 8 characters long');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
  return true;
}

function handleCreate(){
  //console.log(name,email,password, deposit_amount);

  if (!validate(deposit_amount, 'deposit amount')) return;

  if (isNaN(deposit_amount)) {
    alert(`Your deposit field is not a number: \n 
            Deposit: ${deposit_amount} \n             
            Please input a number`);
            return;
  }
  if (deposit_amount <= 0) {
    alert(`Your deposit field is a negative number: \n 
            Deposit: ${deposit_amount} \n             
            Please input a number > 0`);
            return;
  }
  
  setShow(false);
  //console.log('Total is: ', total);
  var balance = amount_deposited(); //Gets a number with the current balance
  
  ctx.users.balance = balance; // This allows for the Deposited amount is: $ message to be shown.
  
  let withdrawal_amount = "0";
  
  
  
  console.log('aux inside handle(): ', aux);
  
  name_update();
  let name = ctx.users[aux].name;
  let email = ctx.users[aux].email;
  let password = ctx.users[aux].password;

  ctx.users.push({name,email,password,balance, deposit_amount, withdrawal_amount});
  console.log('all variables: ', name, email, password, balance, deposit_amount, withdrawal_amount)
}    


function amount_deposited() {
  let aux3 = ctx.users.length -1;
  let previous_amount = ctx.users[aux3].balance;
  var aux2 = previous_amount + parseInt(deposit_amount);  // Numerical operation
  setTotal(aux2);
  return aux2;

}

function name_update() {
  setName(() => (ctx.users[aux].name));
  setEmail(ctx.users[aux].email);
  setPassword(ctx.users[aux].password)
  return;
}

function clearForm(){

  setShow(true);    
  setDeposit(0);
}

  return (    
    <Card
      bgcolor="success"
      header="Deposit"
      status={status}
      body={show ? (  
              <>
              Current Client Account: {ctx.users[aux].name}<br/><br/>                            
              Deposited amount is: ${ctx.users.balance}<br/><br/>
              Deposit Field<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter amount" value={deposit_amount} onChange={e => setDeposit(e.currentTarget.value)} /><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={!deposit_amount}>Confirm Deposit</button>
              </>
            ):(
              <>
              <h5>Success!</h5>              
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another deposit</button>
              </>
            )}
      aux_Total = {total}
    />
  )
}