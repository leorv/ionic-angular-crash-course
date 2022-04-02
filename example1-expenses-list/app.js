const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alertCtrl = document.querySelector('ion-alert');

let totalExpenses = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
}

confirmBtn.addEventListener('click', () => {
    // console.log('confirm works!');  
    const reason = reasonInput.value;
    const amount = amountInput.value;

    if (reason.trim().length <= 0 || amount <= 0 || amount.trim().length <= 0) {
        // alert('invalid values.');

        // this is a method provided by alert component.
        // it is not a default HTML method of element.
        // it is in v4 of Ionic:
        // alertCtrl.create({
        //     message: 'Please enter a valid reason and amount!',
        //     header: 'Invalid inputs',
        //     buttons: ['Okay']
        // }).then(alertElement => {
        //     alertElement.present();
        // });

        // In Ionic v6:
        // alert.cssClass = 'my-custom-class';
        alertCtrl.header = 'Invalid inputs';
        alertCtrl.subHeader = 'Error';
        alertCtrl.message = 'Please enter a valid reason amount!';
        alertCtrl.buttons = ['OK'];

        document.body.appendChild(alertCtrl);
        alertCtrl.present();

        const { role } = alertCtrl.onDidDismiss();
        console.log('onDidDismiss resolved with role', role);

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