// Base de datos de posts (puedes expandir esto con más posts)
const posts = [
    {
        id: 1,
        title: "Los Mejores Audífonos Inalámbricos 2026",
        excerpt: "Descubre los audífonos con mejor calidad de sonido y cancelación de ruido del mercado.",
        category: "audifonos",
        image: "https://via.placeholder.com/400x200/2563eb/ffffff?text=Audifonos+Inalambricos",
        date: "15 Enero 2026"
    },
    {
        id: 2,
        title: "Audífonos Gaming: Guía Completa",
        excerpt: "Los mejores audífonos para juegos con sonido envolvente 7.1 y micrófono de alta calidad.",
        category: "audifonos",
        image: "https://via.placeholder.com/400x200/1e40af/ffffff?text=Audifonos+Gaming",
        date: "14 Enero 2026"
    },
    {
        id: 3,
        title: "Aspiradora Robot: Análisis Completo",
        excerpt: "Revisión exhaustiva de las mejores aspiradoras robot del 2026 con mapeo inteligente.",
        category: "hogar",
        image: "https://via.placeholder.com/400x200/059669/ffffff?text=Aspiradora+Robot",
        date: "13 Enero 2026"
    },
    {
        id: 4,
        title: "Licuadoras de Alta Potencia",
        excerpt: "Comparativa de las mejores licuadoras para smoothies y preparaciones caseras.",
        category: "hogar",
        image: "https://via.placeholder.com/400x200/7c3aed/ffffff?text=Licuadoras",
        date: "12 Enero 2026"
    },
    {
        id: 5,
        title: "Audífonos Deportivos Resistentes al Agua",
        excerpt: "Los mejores audífonos para hacer ejercicio con resistencia IPX7 y gran autonomía.",
        category: "audifonos",
        image: "https://via.placeholder.com/400x200/dc2626/ffffff?text=Audifonos+Deportivos",
        date: "11 Enero 2026"
    },
    {
        id: 6,
        title: "Cafeteras Automáticas: Top 5",
        excerpt: "Las cafeteras más vendidas con molinillo integrado y programación automática.",
        category: "hogar",
        image: "https://via.placeholder.com/400x200/ea580c/ffffff?text=Cafeteras",
        date: "10 Enero 2026"
    }
];

// Cargar posts al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
    displayPosts('all');
    setupFilterButtons();
    setupNewsletter();
});

// Función para mostrar posts
function displayPosts(filter) {
    const postsGrid = document.getElementById('postsGrid');
    postsGrid.innerHTML = '';

    const filteredPosts = filter === 'all' 
        ? posts 
        : posts.filter(post => post.category === filter);

    filteredPosts.forEach(post => {
        const postCard = createPostCard(post);
        postsGrid.appendChild(postCard);
    });

    // Animación de entrada
    setTimeout(() => {
        document.querySelectorAll('.post-card').forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s, transform 0.5s';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 10);
}

// Crear tarjeta de post
function createPostCard(post) {
    const card = document.createElement('div');
    card.className = 'post-card';
    card.setAttribute('data-category', post.category);
    
    card.innerHTML = `
        <img src="${post.image}" alt="${post.title}" class="post-image">
        <div class="post-content">
            <span class="post-category">${getCategoryName(post.category)}</span>
            <h3 class="post-title">${post.title}</h3>
            <p class="post-excerpt">${post.excerpt}</p>
            <div class="post-meta">
                <span>${post.date}</span>
            </div>
        </div>
    `;

    // Click en la tarjeta para ver más detalles
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('amazon-btn')) {
            showPostDetail(post);
        }
    });

    return card;
}

// Obtener nombre de categoría legible
function getCategoryName(category) {
    const names = {
        'audifonos': 'Audífonos',
        'hogar': 'Hogar'
    };
    return names[category] || category;
}

// Configurar botones de filtro
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Agregar clase active al botón clickeado
            button.classList.add('active');
            // Filtrar posts
            const filter = button.getAttribute('data-filter');
            displayPosts(filter);
        });
    });
}

// Mostrar detalle del post (puedes expandir esto para mostrar un modal o página individual)
function showPostDetail(post) {
    alert(`Clic en: ${post.title}\n\nEn una versión completa, esto abriría una página de detalle con la reseña completa.`);
    // Aquí podrías implementar un modal o redirigir a una página individual
}

// Configurar formulario de newsletter
function setupNewsletter() {
    const form = document.getElementById('newsletterForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        
        // Aquí integrarías con tu servicio de email marketing
        alert(`¡Gracias por suscribirte con ${email}!`);
        form.reset();
    });
}

// Función helper para agregar nuevos posts programáticamente
function addPost(post) {
    posts.unshift(post); // Agregar al inicio del array
    displayPosts('all'); // Refrescar la visualización
}

// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
