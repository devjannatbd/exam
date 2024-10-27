document.getElementById("button").addEventListener("click", function () {
  const ol = document.getElementById("orderlist");
  const title = document.getElementById("title");
  const titleValue = title.innerText;
  const li = document.createElement("li");
  li.innerText = titleValue;
  ol.appendChild(li);

  this.setAttribute('disabled', 'true');
});
document.getElementById("button1").addEventListener("click", function () {
  const ol = document.getElementById("orderlist");
  const title = document.getElementById("andres");
  const titleValue = title.innerText;
  const li = document.createElement("li");
  li.innerText = titleValue;
  ol.appendChild(li);
  this.setAttribute('disabled', 'true');
});
document.getElementById("button2").addEventListener("click", function () {
  const ol = document.getElementById("orderlist");
  const title = document.getElementById("Mbappe");
  const titleValue = title.innerText;
  const li = document.createElement("li");
  li.innerText = titleValue;
  ol.appendChild(li);
  this.setAttribute('disabled', 'true');
});
document.getElementById("button3").addEventListener("click", function () {
  const ol = document.getElementById("orderlist");
  const title = document.getElementById("sadio");
  const titleValue = title.innerText;
  const li = document.createElement("li");
  li.innerText = titleValue;
  ol.appendChild(li);
  this.setAttribute('disabled', 'true');
});
document.getElementById("button4").addEventListener("click", function () {
  const ol = document.getElementById("orderlist");
  const title = document.getElementById("Hazard");
  const titleValue = title.innerText;
  const li = document.createElement("li");
  li.innerText = titleValue;
  ol.appendChild(li);
  this.setAttribute('disabled', 'true');
});
document.getElementById("button5").addEventListener("click", function () {
  alert("This is not a valid option")
})

// Budget part

document.getElementById("playCostBtn").addEventListener("click", function () {
  const playerCostInput = document.getElementById("playerCost");
  const playerCostInputValue = playerCostInput.value;
  const playerCostInputValueNumber = parseInt(playerCostInputValue);
  const playerCost = playerCostInputValueNumber * 100;

  const playerExpenCost = document.getElementById("pExpenCost");
  const playerExpenCostText = playerExpenCost.innerText;
  const playerExpenCostNumber = parseInt(playerExpenCostText);

  if (playerCostInput.value === "") {
    playerExpenCost = "00";
  } else {
    playerExpenCost.innerText = playerCost;
  }

  playerCostInput.value = "";

});

document.getElementById("calculatbtn").addEventListener("click", function () {
  const playerExpenCost = document.getElementById("pExpenCost");
  const playerExpenCostText = playerExpenCost.innerText;
  const playerExpenCostNumber = parseInt(playerExpenCostText);

  const managerCost = document.getElementById("managercost");
  const managerCostValue = managerCost.value;
  const managerCostValueNumber = parseInt(managerCostValue);

  const coachCost = document.getElementById("coachcost");
  const coachCostValue = coachCost.value;
  const coachCostValueNumber = parseInt(coachCostValue);

  const totalCost = document.getElementById("total");
  const totalCostText = totalCost.innerText;
  const totalCostNumber = parseInt(totalCostText)
  const tResult = managerCostValueNumber + coachCostValueNumber + playerExpenCostNumber;

  if (managerCost.value === "") {
    totalCost.innerText = "00";
    if (coachCost.value === "") {
      totalCost.innerText = "00";
    }
  } else {
    totalCost.innerText = tResult;
  }

  managerCost.value = "";
  coachCost.value = "";
  playerExpenCost.innerText = "00";

})



// console.log(typeof playerExpenCostNumber)

// const depositPragraph =document.getElementById("depositPragraph");
//   const depositPragraphText = depositPragraph.innerText;
//   const depositPragraphNumber =parseInt(depositPragraphText)
//   const result = depositInputNumber + depositPragraphNumber;
//   depositPragraph.innerText = result;

//   const totalPragraph = document.getElementById("totalPragraph");
//   const totalPragraphText =totalPragraph.innerText;
//   const totalPragraphNumber =parseInt(totalPragraphText); //change
//   const totalResul = depositInputNumber+totalPragraphNumber;
//   totalPragraph.innerText = totalResul;
//   // console.log( depositPragraph.innerText)
// // });

// document.getElementById("withdraw").addEventListener("click",function(){
//   const withdrawInput =document.getElementById("WithdrawIn");
//   const withdrawInputValue =withdrawInput.value;
//   const withdrawInputNumber = parseInt(withdrawInputValue);

//   const withdrawPragraph =document.getElementById("withdrawPragraph");
//   const withdrawPragraphText = withdrawPragraph.innerText;
//   const withdrawPragraphNumber =parseInt(withdrawPragraphText);
//   const result = withdrawInputNumber + withdrawPragraphNumber;

//   withdrawInput.value =""
//   if ( withdrawInput.value ="" ) {

//   }
//   withdrawPragraph.innerText = result;

//   const withdrawtotal = document.getElementById("totalPragraph");
//   const withdrawtotalText =withdrawtotal.innerText;
//   const withdrawtotalTextNumber =parseInt(withdrawtotalText);
//   const wResult = withdrawtotalTextNumber - withdrawInputValue;
//   if(withdrawInputValue>withdrawtotalTextNumber){
//     withdrawInput.innerText ="00"
//   }
//   else {
//     withdrawPragraph.innerText = result;
//   }
//   if ( wResult <= 0){
//     alert("You don't have sufficiant blance")
//   }
//   else {
//     withdrawtotal.innerText = wResult;
//    }