var bill_cost = parseFloat(document.getElementById("inpBill").value)
let buttonPercentArr = document.querySelectorAll(".item") //document.getElementsByName('item');

var percentValue
var clickedValue
var tip_per_person
var n_people
var customTip = 0;

document.getElementById("customInput").addEventListener("click", customTipReader)
document.getElementById("customInput").addEventListener("keyup", customTipReader)
function customTipReader(){
  customTip = parseFloat(this.value)
  percentValue = ""
  total_costCalculator()

}

for (let i = 0; i < buttonPercentArr.length; i++) {
  n_people = parseInt(document.getElementsByName("number_of_people")[0].value)
  buttonPercentArr[i].addEventListener("click", tipPerPerson)
}

function tipPerPerson() {
  // set the custom tip as 0 and deactivate the field
  document.getElementById("customInput").value = 0;
  // document.getElementById("customInput").disabled = "true";

  percentValue = this.value
  bill_cost = parseFloat(document.getElementById("inpBill").value)
  var total_tip = bill_cost * percentValue / 100

  tip_per_person = total_tip / n_people

  // n_people = parseInt(document.getElementsByName("number_of_people")[0].value)

  var total_per_person = (bill_cost + total_tip) / n_people
  if (total_per_person) {
    document.querySelector(".tip_per_person").innerHTML = "$" + tip_per_person.toFixed(2)
    document.querySelector(".total_tip").innerHTML = "$" + total_per_person.toFixed(2)
  }
}

// ====== type or click in the number of people
document.getElementsByName("number_of_people")[0].addEventListener("keyup", total_costCalculator)
document.getElementsByName("number_of_people")[0].addEventListener("click", total_costCalculator)


// ====== type or click in the bill
document.getElementById("inpBill").addEventListener("keyup", total_costCalculator)
document.getElementById("inpBill").addEventListener("click", total_costCalculator)



function total_costCalculator() {
  n_people = parseInt(document.getElementsByName("number_of_people")[0].value)

  if (n_people===0){
    document.querySelector(".text_part p").style.visibility= "visible"
    // alert("NO")
  }else{
document.querySelector(".text_part p").style.visibility= "hidden"

  }

  bill_cost = parseFloat(document.getElementById("inpBill").value)

  if (percentValue){
    tip_per_person = (bill_cost * percentValue / 100) / n_people
  }else if(customTip){
    tip_per_person = customTip / n_people
  } else{

    tip_per_person = 0
  }

  // alert(total_per_person)
  var total_per_person = (bill_cost + tip_per_person * n_people) / n_people
  if (total_per_person) {
    document.querySelector(".tip_per_person").innerHTML = "$" + tip_per_person.toFixed(2)

  }
  if (total_per_person) {
    document.querySelector(".total_tip").innerHTML = "$" + total_per_person.toFixed(2)
  }

}




// ========== Reset button ===========
document.getElementsByName("reset_button")[0].addEventListener("click", function(){
  document.location.reload()
})
