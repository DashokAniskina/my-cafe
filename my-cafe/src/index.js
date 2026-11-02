import './style.css';
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';

function createNav() {
    const content = document.getElementById('content');
    const nav = document.createElement('nav');
    
    nav.id = 'main-nav'; 

    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Главная';
    homeBtn.onclick = () => clearAndLoad(loadHome, homeBtn);

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Меню';
    menuBtn.onclick = () => clearAndLoad(loadMenu, menuBtn);

    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Контакты';
    contactBtn.onclick = () => clearAndLoad(loadContact, contactBtn);

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    
    content.prepend(nav);
}

function clearAndLoad(loadFunction, activeBtn) {
    const content = document.getElementById('content');
    
    Array.from(content.children).forEach(child => {
        if (child.tagName !== 'NAV') {
            child.remove();
        }
    });

    loadFunction(); 
    setActiveTab(activeBtn); 
}

function setActiveTab(btn) {
    const buttons = document.querySelectorAll('#main-nav button');
    buttons.forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
}

createNav();
clearAndLoad(loadHome, document.querySelector('#main-nav button'));