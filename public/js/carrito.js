// SISTEMA DE CARRITO PERSISTENTE PARA ARTESANÍAS ZENÚ
// Este archivo maneja la persistencia del carrito entre páginas

// FUNCIONES DE PERSISTENCIA DEL CARRITO
function guardarCarrito() {
    if (typeof carrito !== 'undefined') {
        localStorage.setItem('carritoArtesanias', JSON.stringify(carrito));
    }
}

function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carritoArtesanias');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        if (typeof actualizarCarrito === 'function') {
            actualizarCarrito();
        }
    }
}

// Función para sincronizar el carrito entre páginas
function sincronizarCarrito() {
    // Escuchar cambios en localStorage desde otras pestañas
    window.addEventListener('storage', function(e) {
        if (e.key === 'carritoArtesanias') {
            cargarCarrito();
        }
    });
}

// Función para limpiar el carrito (útil para logout)
function limpiarCarrito() {
    carrito = [];
    localStorage.removeItem('carritoArtesanias');
    if (typeof actualizarCarrito === 'function') {
        actualizarCarrito();
    }
}

// Función para obtener el total de items en el carrito
function obtenerTotalItems() {
    if (typeof carrito !== 'undefined') {
        return carrito.reduce((sum, item) => sum + item.cantidad, 0);
    }
    return 0;
}

// Función para obtener el total del carrito
function obtenerTotalCarrito() {
    if (typeof carrito !== 'undefined') {
        const subtotal = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
        const shipping = subtotal > 100000 ? 0 : 15000;
        return subtotal + shipping;
    }
    return 0;
}

// Función para verificar si un producto está en el carrito
function estaEnCarrito(id) {
    if (typeof carrito !== 'undefined') {
        return carrito.some(item => item.id === id);
    }
    return false;
}

// Función para obtener la cantidad de un producto en el carrito
function obtenerCantidadEnCarrito(id) {
    if (typeof carrito !== 'undefined') {
        const item = carrito.find(item => item.id === id);
        return item ? item.cantidad : 0;
    }
    return 0;
}

// Función para actualizar el badge del carrito en todas las páginas
function actualizarBadgeCarrito() {
    const badge = document.getElementById('carrito-badge');
    if (badge) {
        const totalItems = obtenerTotalItems();
        badge.textContent = totalItems;
    }
}

// Función para actualizar el carrito completo (incluye badge)
function actualizarCarritoCompleto() {
    if (typeof actualizarCarrito === 'function') {
        actualizarCarrito();
    }
    actualizarBadgeCarrito();
}

// Inicializar sincronización al cargar el script
document.addEventListener('DOMContentLoaded', function() {
    sincronizarCarrito();
    actualizarBadgeCarrito();
});
