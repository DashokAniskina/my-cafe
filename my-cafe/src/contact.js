export function loadContact() {
    const content = document.getElementById('content');
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('fade-in');

    const headline = document.createElement('h1');
    headline.textContent = 'Контакты';

    const address = document.createElement('p');
    address.textContent = 'Адрес: г. Москва, ул. Пушкина, д. 10';

    const phone = document.createElement('p');
    phone.textContent = 'Телефон: +7 (999) 123-45-67';

    const hours = document.createElement('p');
    hours.textContent = 'Часы работы: 09:00 - 22:00 (без выходных)';

    const social = document.createElement('p');
    social.innerHTML = 'Соцсеть: <a href="#" target="_blank">Мы в Telegram</a>';

    contactDiv.appendChild(headline);
    contactDiv.appendChild(address);
    contactDiv.appendChild(phone);
    contactDiv.appendChild(hours);
    contactDiv.appendChild(social);

    const bookBtn = document.createElement('button');
    bookBtn.textContent = 'Забронировать столик';

    bookBtn.style.padding = '10px 20px';
    bookBtn.style.backgroundColor = '#8b5a2b';
    bookBtn.style.color = 'white';
    bookBtn.style.border = 'none';
    bookBtn.style.borderRadius = '5px';
    bookBtn.style.fontSize = '16px';
    bookBtn.style.cursor = 'pointer';
    bookBtn.style.marginTop = '15px';
    bookBtn.style.fontFamily = 'inherit';

    bookBtn.onclick = () => {
        alert('Столик забронирован! Мы вам перезвоним.');
    };

    contactDiv.appendChild(bookBtn);

    content.appendChild(contactDiv);
}