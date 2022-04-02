const courseNameInput = document.querySelector('#input-course-name');
const courseRatingInput = document.querySelector('#input-course-rating');
const addButton = document.querySelector('#btn-add');
const courseList = document.querySelector('#course-list');

const alertCtrl = document.querySelector('ion-alert');

addButton.addEventListener('click', () => {
    const enteredCourseName = courseNameInput.value;
    const enteredCourseRating = courseRatingInput.value;

    if (enteredCourseName.trim().length <= 0 ||
        enteredCourseRating.trim().length <= 0 ||
        enteredCourseRating < 1 ||
        enteredCourseRating > 5) {
        alertCtrl.header = 'Invalid inputs';
        alertCtrl.subHeader = 'Error';
        alertCtrl.message = 'Please enter a correct course name and rating.';
        alertCtrl.buttons = ['OK'];

        document.body.appendChild(alertCtrl);
        alertCtrl.present();

        const { role } = alertCtrl.onDidDismiss();
        console.log('onDidDismiss resolved with role', role);

        return
    }

    const newItem = document.createElement('ion-item');
    newItem.innerHTML = `<strong>${enteredCourseName}:</strong>&nbsp;${enteredCourseRating}/5`;

    courseList.appendChild(newItem);
    clearInputs();
})

const clearInputs = () => {
    courseNameInput.value = '';
    courseRatingInput.value = '';
};