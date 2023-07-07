function saveToLocalStorage(event) {
    event.preventDefault();
  
    let name = event.target.Username.value;
    let email = event.target.emailId.value;
    let phoneNumber = event.target.phonenumber.value;
    let dob = event.target.dob.value;
  
    let userDetails = JSON.parse(localStorage.getItem('userDetails')) || [];
    let newUser = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      dob: dob
    };
  
    userDetails.push(newUser);
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    console.log('All users:', userDetails);
  }
  