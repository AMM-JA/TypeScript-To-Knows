type Customer = {
    birthday: Date;
  };
  
  function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
  }
  
  let customer = getCustomer(0);
  
  // ? Long method
  // if (customer !== null && customer !== undefined) {
  //   console.log(customer.birthday);
  // }
  
  // ? Optional Chaining Method
  // In English, this can mean that all these variables could possibly be defined.
  console.log(customer?.birthday?.getFullYear)
    
  
  // ? Optional element access operator
  // customers?.[0]
  
  // ? Optional call
  // Without the ?, this would crash because there is no function that takes in 'a'.
  // This will only execute if the function exists.
  let log: any = null;
  log?.('a')