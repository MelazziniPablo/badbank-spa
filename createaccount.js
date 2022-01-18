function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label + ' missing value');
        setTimeout(() => setStatus(''),3000);
        alert(`Error: \n
          Input field: ${label} \n
          missing value`);
        return false;
      }
      return true;
  }

  function validate_password(field, label) {    
    console.log('Password lenght is: ', field.length)
      if (field.length < 8 && field.length > 0) {
        setStatus('Error: ' + label + ' can not be less than 8 characters long');
        setTimeout(() => setStatus(''),3000);
        alert(`Error: \n 
            Input field: ${label} \n             
            Can not be less than 8 characters long`);
        return false;
      }
    return true;
  }

  function button_enable() {
    if (name || email || password) {
      return false;
    }
    return true;
  }

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    if (!validate_password(password, 'password')) return;
    ctx.users.push({name,email,password,balance:0});
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="success"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={!name && !email && !password}>Create Account</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}