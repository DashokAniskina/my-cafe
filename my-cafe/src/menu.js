import menuData from './menu-data.json';

export function loadMenu() {
    const content = document.getElementById('content');
    const menuDiv = document.createElement('div');

    const headline = document.createElement('h1');
    headline.textContent = 'Наше меню';
    menuDiv.appendChild(headline);

    menuData.forEach(item => {
        const card = document.createElement('div');
        card.style.cssText = 'display: flex; align-items: center; gap: 20px; border: 1px solid #e0e0e0; padding: 15px; margin-bottom: 15px; border-radius: 8px; background: white; box-shadow: 0 2px 5px rgba(0,0,0,0.05);';

        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.name;
        img.style.cssText = 'width: 100px; height: 100px; object-fit: cover; border-radius: 8px;';

        const textDiv = document.createElement('div');
        
        const name = document.createElement('h3');
        name.textContent = `${item.name} — ${item.price} руб.`;
        name.style.margin = '0 0 5px 0';

        const desc = document.createElement('p');
        desc.textContent = item.description;
        desc.style.margin = '0';
        desc.style.color = '#666';

        textDiv.appendChild(name);
        textDiv.appendChild(desc);
        
        card.appendChild(img);
        card.appendChild(textDiv);
        menuDiv.appendChild(card);
    });

    content.appendChild(menuDiv);
}