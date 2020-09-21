console.log('workin!')

const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleCardButtonsClick(event) {
    console.log('U clicked a button')

    const button = event.currentTarget;
    const card = button.closest('.card');
    const name = card.querySelector('h2').textContent;

    console.log(card);

    // grab the img src:
    const imgSrc = card.querySelector('img').src;
    console.log(imgSrc);
    const desc = card.dataset.description;

    // now we can populate the modal with new info:
    modalInner.innerHTML = `
        <img src="${imgSrc.replace('200', '400')}" alt="${name}" />
        <p>${desc}</p>
    `

    // show the modal:
    modalOuter.classList.add('open');
};

cardButtons.forEach(button => button.addEventListener('click', handleCardButtonsClick));