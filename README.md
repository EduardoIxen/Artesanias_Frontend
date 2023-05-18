# Frontend Artesanías - Autómata Digital

## Menú
- [Descripción](#descripcion)
- [Requisitos previos](#requisitos-previos)
- [Instalación](#instalacion)
- [Configuración](#configuracion)
- [Ejecución](#ejecucion)
- [Credenciales para el usuario administrador](#credenciales)

## Descripción <a name="descripcion"></a>
La plataforma web de gestión de pedidos de productos artesanales es una aplicación diseñada para facilitar y agilizar el proceso de pedidos tanto para administradores como para usuarios regulares. La plataforma permite a los usuarios administradores agregar nuevos productos a la plataforma.

Por otro lado, los usuarios regulares tienen la capacidad de registrarse, iniciar sesión y realizar pedidos seleccionando los productos disponibles.

## Requisitos previos <a name="requisitos-previos"></a>
- Node.js (v18.16.0)
- npm (v9.5.1)

## Instalación <a name="instalacion"></a>
1. Clonar el repositorio
```bash
git clone https://github.com/EduardoIxen/Artesanias_Frontend.git
```

2. Navegación a la carpeta del proyecto
```bash
cd Artesanias_Frontend
```

2. Instalar dependencias
```bash
npm install
```
## Configuración <a name="configuracion"></a>
1. Dentro del archivo src/pages/Ruta.js se debe de agregar la direccion y el puerto donde se esta ejecutando el [backend](https://github.com/EduardoIxen/Artesanias_Backend) de la aplicación.
Por defecto se encuentra configurado:
```bash
ruta = "http://localhost"
puerto = "8000"
```

## Ejecución <a name="ejecucion"></a>
1. Para probar la aplicación se debe de ejecutar el siguiente comando para iniciar el servidor de desarrollo:
```bash
npm start
```

2. Abrir el navegador e ir a http://localhost:3005

![Home](/img/home.png)

## Credenciales para el usuario administrador <a name="credenciales"></a>
- Correo: admin@automatadg.com
- Contraseña: admin