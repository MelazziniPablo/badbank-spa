function Home(){
  const ctx = React.useContext(UserContext); 
  
  return (
    <Card
      bgcolor="success"
      txtcolor="white"
      header="BadBank Landing Page"
      title="Welcome to the BadBank"
      text="First create a new Account with us! go to Create Account menu"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
