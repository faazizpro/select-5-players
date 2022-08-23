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

