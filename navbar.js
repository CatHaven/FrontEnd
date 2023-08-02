// --- Navigation Bar ---
// Create navbar container
const navbar = document.createElement('nav');
navbar.classList.add('navbar');

// Create logo
const logo = document.createElement('div');
logo.classList.add('logo');

const logoLink = document.createElement('a');
logoLink.href = 'home.html';

const logoImage = document.createElement('img');
logoImage.src = 'images/logo.png';
logoImage.alt = 'Logo';
logoLink.appendChild(logoImage);

logo.appendChild(logoLink);
navbar.appendChild(logo);

// Create navbar links
const navbarLinks = document.createElement('div');
navbarLinks.classList.add('navbar-links');

const links = [
    {name: 'Home', link: 'home.html'},
    {name: 'Pet List', link: 'petlist.html'},
    {name: 'Maps', link: 'maps.html'},
    {name: 'My Account', link: 'account.html'},
    {name: 'Pet Care', link: 'petcare.html'}
];
const ul = document.createElement('ul');

links.forEach(button => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = button.link; // Set the href to the link property of the button object
    a.textContent = button.name; // Set the text to the name property of the button object
    li.appendChild(a);
    ul.appendChild(li);
});

navbarLinks.appendChild(ul);
navbar.appendChild(navbarLinks);

// Create login link
const login = document.createElement('div');
login.classList.add('login');

const loginLink = document.createElement('a');
loginLink.href = 'login.html';
loginLink.textContent = 'Login';
login.appendChild(loginLink);

navbar.appendChild(login);

// Append navbar to the header
const header = document.getElementById('unique-navbar');
header.appendChild(navbar);
// --- End of Navigation Bar ---