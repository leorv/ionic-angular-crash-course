const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');

let totalExpenses = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
}

confirmBtn.addEventListener('click', () => {
    // console.log('confirm works!');  
    const reason = reasonInput.value;
    const amount = amountInput.value;
    
    if (reason.trim().length <= 0 || amount <= 0 || amount.trim().length <= 0){
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = `${reason} : $ ${amount}`;

    expensesList.appendChild(newItem);
    clear();
    totalExpenses += +amount;
    totalExpensesOutput.textContent = totalExpenses.toFixed(2);
});

cancelBtn.addEventListener('click', clear);