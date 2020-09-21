console.log('workin!')

const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleCardButtonsClick(event) {
    console.log('U clicked a button')

    const button = event.currentTarget;
    const card = button.closest('.card');
    const name = card.querySelector('h2').textContent;
    const desc = card.dataset.description;

    console.log(card);

    // grab the img src:
    const imgSrc = card.querySelector('img').src;
    console.log(imgSrc);

    // now we can populate the modal with new info:
    modalInner.innerHTML = `
        <img width="400" height="400" src="${imgSrc.replace('200', '400')}" alt="${name}" />
        <p>${desc}</p>
    `

    // show the modal:
    modalOuter.classList.add('open');
};
cardButtons.forEach(button => button.addEventListener('click', handleCardButtonsClick));

// close the modal function:
function closeModal() {
    modalOuter.classList.remove('open');
};

// close the modal by clicking outside the modal:
modalOuter.addEventListener('click', function(event){
    // below: by adding not ! we convert it to the boolean:
    const isOutside = !event.target.closest('.modal-inner');
    if(isOutside) {
        closeModal();
    }
});

// close the modal by clicking the escape key:
window.addEventListener('keydown', (event) => {
    if(event.key === 'Escape'){
        closeModal();
    }
});