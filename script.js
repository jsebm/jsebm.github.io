// Base de datos de posts - Enfocado en: Organización + Estudiantes + Hogar
const posts = [
    {
        id: 1,
        title: "Los 7 mejores organizadores de escritorio para estudiantes (Amazon)",
        excerpt: "Guía completa de organizadores de escritorio que todo estudiante necesita. Optimiza tu espacio de estudio con productos de Amazon.",
        category: "organizacion",
        image: "https://via.placeholder.com/400x200/2563eb/ffffff?text=Organizadores+Escritorio",
        date: "18 Enero 2026",
        url: "organizadores-escritorio-2026.html"
    },
    {
        id: 2,
        title: "Mejores sillas ergonómicas para estudiar largas horas en casa",
        excerpt: "Análisis completo de sillas ergonómicas diseñadas para estudiantes. Evita dolores de espalda y mejora tu productividad.",
        category: "estudio",
        image: "https://via.placeholder.com/400x200/1e40af/ffffff?text=Sillas+Ergonomicas",
        date: "18 Enero 2026",
        url: "sillas-ergonomicas-estudio-2026.html"
    },
    {
        id: 3,
        title: "Las mejores lámparas LED para estudiar sin cansar la vista",
        excerpt: "Descubre las lámparas LED ideales para tu escritorio. Reduce la fatiga ocular y estudia más horas sin cansancio.",
        category: "estudio",
        image: "https://via.placeholder.com/400x200/059669/ffffff?text=Lamparas+LED",
        date: "18 Enero 2026",
        url: "lamparas-led-estudio-2026.html"
    },
    {
        id: 4,
        title: "Los mejores soportes para laptop en Amazon (guía 2026)",
        excerpt: "Comparativa de soportes para laptop que todo estudiante necesita. Ergonómicos y portátiles para cualquier espacio.",
        category: "tecnologia",
        image: "https://via.placeholder.com/400x200/7c3aed/ffffff?text=Soportes+Laptop",
        date: "17 Enero 2026",
        url: "soportes-laptop-amazon-2026.html"
    },
    {
        id: 5,
        title: "Top accesorios de escritorio que todo estudiante necesita",
        excerpt: "Los 10 accesorios esenciales para un escritorio productivo: organizadores, cables, bandejas y más productos útiles.",
        category: "tecnologia",
        image: "https://via.placeholder.com/400x200/dc2626/ffffff?text=Accesorios+Escritorio",
        date: "17 Enero 2026",
        url: "accesorios-escritorio-estudiante-2026.html"
    },
    {
        id: 6,
        title: "Los mejores audífonos para estudiar y concentrarse (Amazon)",
        excerpt: "Selección de audífonos ideales para bloquear distracciones mientras estudias. Cancelación de ruido y comodidad garantizadas.",
        category: "tecnologia",
        image: "https://via.placeholder.com/400x200/ea580c/ffffff?text=Audifonos+Estudio",
        date: "16 Enero 2026",
        url: "audifonos-estudio-concentracion-2026.html"
    },
    {
        id: 7,
        title: "Cómo armar un espacio de estudio ideal con productos de Amazon",
        excerpt: "Guía paso a paso para crear el espacio de estudio perfecto. Incluye checklist de productos y recomendaciones.",
        category: "guias",
        image: "https://via.placeholder.com/400x200/f59e0b/ffffff?text=Espacio+Estudio+Ideal",
        date: "16 Enero 2026",
        url: "espacio-estudio-ideal-amazon-2026.html"
    },
    {
        id: 8,
        title: "Qué comprar en Amazon para organizar la universidad desde casa",
        excerpt: "Guía práctica para estudiantes: qué productos comprar para tener todo organizado. Artículos para notas, deberes y materiales.",
        category: "guias",
        image: "https://via.placeholder.com/400x200/8b5cf6/ffffff?text=Organizar+Universidad",
        date: "15 Enero 2026",
        url: "organizar-universidad-amazon-2026.html"
    },
    {
        id: 9,
        title: "Silla ergonómica vs silla gamer: ¿cuál es mejor para estudiar?",
        excerpt: "Comparativa directa entre sillas ergonómicas y sillas gamer. Análisis de pros, contras y cuál es ideal para estudiantes.",
        category: "guias",
        image: "https://via.placeholder.com/400x200/3b82f6/ffffff?text=Silla+Ergo+vs+Gamer",
        date: "14 Enero 2026",
        url: "silla-ergonomica-vs-gamer-2026.html"
    },
    {
        id: 10,
        title: "Lámpara LED vs lámpara tradicional para estudiar: ¿cuál conviene?",
        excerpt: "Análisis completo: LED vs tradicional para tu escritorio. Eficiencia energética, salud visual y presupuesto comparados.",
        category: "guias",
        image: "https://via.placeholder.com/400x200/06b6d4/ffffff?text=LED+vs+Tradicional",
        date: "13 Enero 2026",
        url: "lampara-led-vs-tradicional-2026.html"
    }
];

// Cargar posts al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
    displayPosts('all');
    setupFilterButtons();
    setupNewsletter();
    setupMobileMenu();
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

    // Click en la tarjeta para abrir el artículo completo
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('amazon-btn')) {
            window.location.href = post.url;
        }
    });

    return card;
}

// Obtener nombre de categoría legible
function getCategoryName(category) {
    const names = {
        'organizacion': 'Organización',
        'estudio': 'Estudio',
        'tecnologia': 'Tecnología',
        'guias': 'Guías'
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

// Abrir artículo completo
function showPostDetail(post) {
    window.location.href = post.url;
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

// Configurar menú móvil
function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Cerrar menú al hacer clic en un enlace
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
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
