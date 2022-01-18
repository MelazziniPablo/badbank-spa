function AllData(){
  
  const ctx = React.useContext(UserContext);
  console.log("ctx: ", ctx); // Object
  console.log("ctx.users", ctx.users); //Array

  console.log(ctx["users"]); //Array

  function review_deposit(idx){

    if(ctx.users[idx].deposit_amount == undefined) {      
      return "0";      
    }
    return ctx.users[idx].deposit_amount;
  }

  function aux_function() {
    return (
      ctx.users.map((variant, idx) => (
        <Card
        bgcolor="success"                
        header="Movement"
        body =  {<>        
        "Deposit Amount:" ${review_deposit(idx)}<br/>
        "Withdrawal Amount:" ${ctx.users[idx].withdrawal_amount}<br/>
        "Remaining amount is:" ${ctx.users[idx].balance}<br/>
        "Client:" {ctx.users[idx].name}</>}
        
        >     
        </Card>
  )));
  }

  return (
    <>
      <h5>All Data Movements in the Bank</h5>
      <br/>
      {aux_function()}                
    </>
    
  );
}

