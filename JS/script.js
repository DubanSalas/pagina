function toggleMenu() {
    const menu = document.getElementById('side-menu');
    menu.classList.toggle('open'); // Abre o cierra el menú
}

function performSearch(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value;
    alert('Buscando: ' + query); // Realiza la búsqueda (aquí puedes modificar para que haga algo real)
}

// Variables globales
const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

function renderCalendar(month, year) {
    const calendarBody = document.getElementById('calendar-body');
    calendarBody.innerHTML = ''; // Limpiar calendario

    const firstDay = new Date(year, month).getDay() || 7; // Primer día del mes (lunes = 1)
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let date = 1;

    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');

        for (let j = 1; j <= 7; j++) {
            const cell = document.createElement('td');

            if (i === 0 && j < firstDay) {
                cell.innerHTML = '';
            } else if (date > daysInMonth) {
                break;
            } else {
                cell.innerHTML = date;

                if (date === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                    cell.classList.add('today');
                }

                cell.addEventListener('click', () => {
                    alert(`Fecha seleccionada: ${date}/${month + 1}/${year}`);
                });

                date++;
            }

            row.appendChild(cell);
        }

        calendarBody.appendChild(row);
    }
}

function updateSelectors() {
    const monthSelector = document.getElementById('month-selector');
    const yearSelector = document.getElementById('year-selector');

    monthSelector.innerHTML = monthNames.map((name, index) => {
        return `<option value="${index}" ${index === currentMonth ? 'selected' : ''}>${name}</option>`;
    }).join('');

    yearSelector.innerHTML = Array.from({ length: 11 }, (_, i) => {
        const year = today.getFullYear() - 5 + i;
        return `<option value="${year}" ${year === currentYear ? 'selected' : ''}>${year}</option>`;
    }).join('');

    monthSelector.addEventListener('change', (e) => {
        currentMonth = parseInt(e.target.value);
        renderCalendar(currentMonth, currentYear);
    });

    yearSelector.addEventListener('change', (e) => {
        currentYear = parseInt(e.target.value);
        renderCalendar(currentMonth, currentYear);
    });
}

// Inicializar calendario
document.addEventListener('DOMContentLoaded', () => {
    updateSelectors();
    renderCalendar(currentMonth, currentYear);
});


document.addEventListener('DOMContentLoaded', () => {
    const loadMoreBtn = document.getElementById('load-more-btn');
    const moreArticles = document.getElementById('more-articles');

    loadMoreBtn.addEventListener('click', () => {
        moreArticles.classList.toggle('hidden');
        loadMoreBtn.textContent = 
            moreArticles.classList.contains('hidden') ? 'Ver más noticias' : 'Ver menos noticias';
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-read-more');
    const extraContent = document.getElementById('extra-content');
    
    toggleButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
        
        if (extraContent.style.display === "none") {
            extraContent.style.display = "block"; // Mostrar contenido adicional
            toggleButton.textContent = "Leer menos"; // Cambiar el texto del botón
        } else {
            extraContent.style.display = "none"; // Ocultar el contenido adicional
            toggleButton.textContent = "Leer más..."; // Restaurar el texto del botón
        }
    });
});
