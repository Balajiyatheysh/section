function updateTextInput(val) {
  const numofUsers =parseInt(val);
  const totalUsers = document.getElementById("totalusers");
  const freeplan = document.getElementById("freePlan");
  const businessplan = document.getElementById("businessPlan");
  const proplan = document.getElementById("proPlan");

  totalUsers.innerHTML = numofUsers;
    if (numofUsers >= 0 && numofUsers<=10) {
         freeplan.className="justify-content-center shadow-lg border border-info";
    }else{
      freeplan.className="d-none";
    }
    if (numofUsers>10 && numofUsers<=20) {
      proplan.className="justify-content-center shadow-lg border border-info";
    } else {
      proplan.className="d-none";
    
    }
    if (numofUsers>20) {
      businessplan.className="justify-content-center shadow-lg border border-info";
    }else{
      businessplan.className="d-none";
    }
    
  }
  