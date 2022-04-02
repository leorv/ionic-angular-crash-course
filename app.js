const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');

confirmBtn.addEventListener('click', () => {
    // console.log('confirm works!');  
    const reason = reasonInput.value;
    const amount = amountInput.value;
    
    if (reason.trim().length <= 0 || amount <= 0 || amount.trim().length <= 0){
        return;
    }

    
});
