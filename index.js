const inputContainer = document.querySelector(".input-container");
const input = document.getElementById("Input"); 
const options = document.getElementById("options");
const optionItems = document.querySelectorAll(".option");
const addBtn = document.getElementById('addItem');
const clearBtn = document.getElementById('clearBtn');

input.addEventListener('mouseover', () => {
     optionItems.forEach(item => {
    item.style.display = 'block';
});
});

input.addEventListener('mouseout', () => { 
    optionItems.forEach(item => {
    item.style.display = 'block';
});
});

inputContainer.addEventListener('mouseenter', () => { // Use mouseenter event
    options.style.display = 'block';
});

inputContainer.addEventListener('mouseleave', () => { // Use mouseleave event
    options.style.display = 'none';
});

options.addEventListener('mouseenter', () => {
    optionItems.forEach(item => {
        item.style.display = 'block';
    });
});

options.addEventListener('mouseleave', () => {
    optionItems.forEach(item => {
        item.style.display = 'none';
    });
});

optionItems.forEach(item => {
    item.addEventListener('click', () => {
        input.value = item.textContent;
        options.style.display = 'none';
    })
})

addBtn.addEventListener('click', () => {
    console.log("hi");
    addRow();
});

function addRow(){
    const table = document.getElementById('expenseTable');
    const amtIp = document.querySelector('.amountInput');
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add('delBtn');
    const newRow = table.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    newRow.classList.add('customRow');
    cell1.innerHTML = input.value;
    cell2.innerHTML = amtIp.value;
    cell3.appendChild(delBtn);

    delBtn.addEventListener('click',() => {
        newRow.remove();
    })

    clearBtn.addEventListener('click',() => {
        newRow.remove();
    })
}



