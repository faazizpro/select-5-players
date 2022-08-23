const allBtn = document.querySelectorAll('.class-btn');
    const liArray = [];
for (const btn of allBtn){
    btn.addEventListener('click', function(event){
        const parentOl = document.getElementById('parent-list');
        const newLi = document.createElement('li');
        newLi.innerText = event.target.parentNode.parentNode.children[1].children[0].innerText;
        liArray.push(newLi);
        console.log(liArray);
        if(liArray.length > 5){
            alert('You can not select more than 5 players');
            return;
        }
        else{
            
            parentOl.appendChild(newLi);
            btn.disabled = true;
        }
    })

}

document.getElementById('calculate-btn').addEventListener('click', function(){
    const totalPlayer = liArray.length;
    
    const inputValue = document.getElementById('input-field');
    const inputValueString = inputValue.value;
    const previousInputAmount = parseFloat(inputValueString);

    const playerExpenses = totalPlayer * previousInputAmount;

    const previousTotalExpense = document.getElementById('total-expense');

    // We have got total player expenses
    previousTotalExpense.innerText = playerExpenses;


    
})

document.getElementById('final-total').addEventListener('click', function(){
    const previousTotalExpense = document.getElementById('total-expense');

    const previousTotalExpenseInnerText = previousTotalExpense.innerText;
    const previousTotalExpenseAmount = parseFloat(previousTotalExpenseInnerText);



    const managerCost = document.getElementById('manager-cost');
    const managerCostString = managerCost.value;
    const previousManagerCost = parseFloat(managerCostString);
    

    const coachCost = document.getElementById('coach-cost');
    const coachCostString = coachCost.value;
    const previousCoachCost = parseFloat(coachCostString);

    const allCost = previousCoachCost + previousManagerCost + previousTotalExpenseAmount;

    const finalExpenses = document.getElementById('final-expense')

    finalExpenses.innerText = allCost;
})