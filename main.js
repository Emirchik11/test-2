// Example 1

const extractNumbers = (str) => {
    return str // Ваш код
        .split('')
        .filter(char => !isNaN(char) )
        .map(Number);
};

console.log(extractNumbers("a1fg5hj6")); // [1, 5, 6]

// Example 2
let a = 0;
let b = 1;

const num = () => {
    console.log(a);
        if (a < 144) {
        const next = a + b;
        a = b;
        b = next;
        setTimeout(num, 1000);
    }
};

num();

// Example 3

const fetchTitles = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const data = await response.json();
        const titles = data.map(product => product.title);
        console.log("Список заголовков:");
        titles.forEach(title => console.log(title));
    } catch (error) {
        console.error('Произошла ошибка:', error.message);
    }
};

fetchTitles();

// Example 4
const buttonContainer = document.getElementById('button-container');


buttonContainer.addEventListener('click', (event) => {

    if (event.target.tagName === 'BUTTON') {
        const color = event.target.textContent;
        document.body.style.backgroundColor = color;
    }
});

// Example 5

const toggleButton = document.getElementById('toggle-button');
const toggleBlock = document.getElementById('toggle-block');

toggleButton.addEventListener('click', () => {
    if (toggleBlock.style.display === 'none') {
        toggleBlock.style.display = 'block';
        toggleButton.textContent = 'Скрыть';
    } else {
        toggleBlock.style.display = 'none';
        toggleButton.textContent = 'Показать';
    }
});

// Не успел
