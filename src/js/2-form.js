// Ключ для локального сховища
const FORM_STORAGE_KEY = "feedback-form-state";

// Початковий об'єкт formData
const formData = {
    email: "",
    message: ""
};

// Отримуємо форму з DOM
const form = document.querySelector('.feedback-form');

// Відновлюємо дані з локального сховища, якщо вони є
const savedData = localStorage.getItem(FORM_STORAGE_KEY);
if (savedData) {
    const parsedData = JSON.parse(savedData);
    if (parsedData.email) {
        form.email.value = parsedData.email.trim();
        formData.email = parsedData.email.trim();
    }
    if (parsedData.message) {
        form.message.value = parsedData.message.trim();
        formData.message = parsedData.message.trim();
    }
}

// Функція для обробки введення даних
form.addEventListener('input', (event) => {
    const name = event.target.name;
    formData[name] = event.target.value.trim(); // Зберігаємо значення без пробілів по краях
    localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formData));
});

// Обробка відправлення форми
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Перевіряємо, чи обидва поля заповнені
    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    console.log(formData); 
    
    // Очищуємо локальне сховище та поля форми
    localStorage.removeItem(FORM_STORAGE_KEY);
    formData.email = "";
    formData.message = "";
    form.email.value = "";
    form.message.value = "";

    
});
