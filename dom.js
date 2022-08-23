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