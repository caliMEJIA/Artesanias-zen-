# Artesanías Zenú - Tienda Virtual

## Descripción del Proyecto

Artesanías Zenú es una tienda virtual especializada en la comercialización de artesanías tradicionales de la cultura Zenú, una de las civilizaciones precolombinas más importantes de Colombia. El proyecto tiene como objetivo preservar y difundir las tradiciones ancestrales mientras genera oportunidades económicas sostenibles para las comunidades artesanales.

## Características Principales

### Frontend
- **Diseño Responsivo**: Interfaz moderna y adaptable a diferentes dispositivos
- **Sistema de Carrito Avanzado**: Carrito deslizable estilo Amazon con persistencia en localStorage
- **Autenticación de Usuario**: Sistema de login, registro y recuperación de contraseña
- **Dashboard de Usuario**: Panel completo con estadísticas, pedidos, favoritos y configuración
- **Dashboard de Administrador**: Panel de gestión con métricas y actividad reciente
- **Navegación Intuitiva**: Menú de categorías y sistema de búsqueda
- **Páginas Informativas**: Sección "Nosotros" con historia, misión, valores y equipo

### Backend
- **Base de Datos Completa**: Esquema PostgreSQL con todas las entidades necesarias
- **Servidor Express**: Configurado para escalabilidad
- **Estructura MVC**: Organizada para mantenimiento y desarrollo eficiente

## Estructura del Proyecto

```
Artesanias Zenu/
├── public/                     # Frontend
│   ├── index.html             # Página principal
│   ├── nosotros.html          # Página informativa
│   ├── canastos.html          # Categoría de productos
│   ├── mochilas.html          # Categoría de productos
│   ├── sombreros.html         # Categoría de productos
│   ├── pulseras.html          # Categoría de productos
│   ├── ofertas.html           # Productos en oferta
│   ├── css/
│   │   └── style.css          # Estilos principales
│   ├── js/
│   │   └── carrito.js         # Funcionalidad del carrito
│   ├── image/                 # Imágenes de productos
│   └── dashboard/
│       ├── dashboard.html     # Dashboard de administrador
│       └── usuario.html       # Dashboard de usuario
├── src/                       # Backend
│   ├── servidor.js            # Servidor principal
│   ├── package.json           # Dependencias
│   ├── db/
│   │   └── store_db.sql       # Esquema de base de datos
│   ├── auth/                  # Autenticación
│   ├── config/                # Configuraciones
│   ├── controllers/           # Controladores
│   ├── models/                # Modelos de datos
│   ├── routes/                # Rutas de la API
│   ├── middleware/            # Middleware personalizado
│   └── utils/                 # Utilidades
└── README.md                  # Documentación
```

## Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con variables CSS y diseño responsivo
- **JavaScript**: Funcionalidad interactiva y gestión del carrito
- **LocalStorage**: Persistencia de datos del usuario

### Backend
- **Node.js**: Entorno de ejecución
- **Express.js**: Framework web
- **PostgreSQL**: Base de datos relacional
- **Nodemon**: Desarrollo con recarga automática

## Funcionalidades Implementadas

### ✅ Completadas
- [x] Diseño completo del frontend
- [x] Sistema de carrito de compras funcional
- [x] Autenticación simulada con localStorage
- [x] Dashboard de usuario completo
- [x] Dashboard de administrador con métricas
- [x] Base de datos diseñada y estructurada
- [x] Navegación entre páginas
- [x] Responsive design
- [x] Sistema de favoritos y productos recientes
- [x] Gestión de perfil de usuario
- [x] Configuración de notificaciones

### 🔄 En Desarrollo
- [ ] Conexión real con la base de datos
- [ ] API REST implementada
- [ ] Autenticación real con hash de contraseñas
- [ ] Sistema de pagos integrado
- [ ] Envío de emails
- [ ] Panel de administración funcional

## Instalación y Configuración

### Prerrequisitos
- Node.js (versión 14 o superior)
- PostgreSQL (versión 12 o superior)
- Navegador web moderno

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/caliMEJIA/Artesanias-zen-.git
   cd Artesanias-zen-
   ```

2. **Instalar dependencias**
   ```bash
   cd src
   npm install
   ```

3. **Configurar la base de datos**
   - Crear una base de datos PostgreSQL
   - Ejecutar el script `src/db/store_db.sql`

4. **Configurar variables de entorno**
   ```bash
   # Crear archivo .env en la carpeta src
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=artesanias_zenu
   DB_USER=tu_usuario
   DB_PASSWORD=tu_contraseña
   ```

5. **Ejecutar el servidor**
   ```bash
   npm start
   # o para desarrollo
   npm run dev
   ```

6. **Abrir en el navegador**
   - Frontend: `http://localhost:3000`
   - El servidor se ejecuta en el puerto 3000

## Uso del Sistema

### Para Usuarios
1. **Navegación**: Explora las diferentes categorías de productos
2. **Registro/Login**: Crea una cuenta o inicia sesión
3. **Carrito**: Agrega productos al carrito y gestiona cantidades
4. **Dashboard**: Accede a tu panel personal con pedidos, favoritos y configuración

### Para Administradores
1. **Login**: Usa las credenciales de administrador (admin/admin)
2. **Dashboard**: Visualiza métricas y estadísticas del negocio
3. **Gestión**: Administra productos, pedidos, artesanos y configuraciones

## Base de Datos

### Entidades Principales
- **usuarios**: Información de usuarios y administradores
- **productos**: Catálogo de artesanías
- **categorías**: Clasificación de productos
- **pedidos**: Órdenes de compra
- **carrito**: Carrito de compras de usuarios
- **pagos**: Información de transacciones
- **reseñas**: Valoraciones de productos
- **artesanos**: Información de los creadores

### Relaciones
- Usuarios → Pedidos (1:N)
- Productos → Categorías (N:1)
- Pedidos → Productos (N:M a través de detalle_pedido)
- Usuarios → Reseñas (1:N)
- Productos → Reseñas (1:N)

## Contribución

### Cómo Contribuir
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Estándares de Código
- Usar indentación de 4 espacios
- Comentar funciones complejas
- Seguir las convenciones de nomenclatura establecidas
- Mantener el código limpio y legible

## Roadmap

### Próximas Versiones
- **v1.1**: Integración completa con base de datos
- **v1.2**: Sistema de pagos real
- **v1.3**: Notificaciones por email
- **v1.4**: App móvil
- **v2.0**: Sistema de comisiones para artesanos

## Licencia

Este proyecto está bajo la Licencia ISC. Ver el archivo `LICENSE` para más detalles.

## Contacto

- **Proyecto**: Artesanías Zenú
- **Repositorio**: [GitHub](https://github.com/caliMEJIA/Artesanias-zen-)
- **Email**: info@artesaniaszenu.com

## Agradecimientos

- Comunidades artesanales Zenú
- Desarrolladores y colaboradores del proyecto
- Usuarios que apoyan el comercio justo y la preservación cultural

---

**Nota**: Este proyecto está en desarrollo activo. Las funcionalidades pueden cambiar y mejorar con el tiempo.
