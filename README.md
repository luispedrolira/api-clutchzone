# ClutchZone API

ClutchZone API es un servicio que proporciona información sobre productos gaming, incluyendo periféricos, monitores y sillas gamer.

## URL Base

```
https://clutchzone-api.vercel.app
```

## Endpoints

### Obtener todos los productos

Retorna una lista de todos los productos disponibles.

```http
GET /api/productos
```

#### Respuesta

```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "nombre": "Teclado Mecánico RGB Corsair K95",
      "precio": 270.0,
      "imagen": "https://res.cloudinary.com/ds3lamhke/image/upload/v1747961040/corsair-K95_xhkmzy.jpg",
      "categoria": "teclados"
    },
    // ... más productos
  ],
  "total": 25
}
```

### Obtener un producto por ID

Retorna un producto específico basado en su ID.

```http
GET /api/productos/:id
```

#### Parámetros

| Parámetro | Tipo   | Descripción           |
|-----------|--------|-----------------------|
| id        | string | ID único del producto |

#### Respuesta exitosa

```json
{
  "success": true,
  "data": {
    "id": "1",
    "nombre": "Teclado Mecánico RGB Corsair K95",
    "precio": 270.0,
    "imagen": "https://res.cloudinary.com/ds3lamhke/image/upload/v1747961040/corsair-K95_xhkmzy.jpg",
    "categoria": "teclados"
  }
}
```

#### Respuesta de error (producto no encontrado)

```json
{
  "success": false,
  "message": "Producto no encontrado :("
}
```

## Categorías disponibles

Los productos están organizados en las siguientes categorías:

- teclados
- mouse
- audifonos
- monitores
- sillas-gamer

## Ejemplos de uso

### Ejemplo con cURL

```bash
# Obtener todos los productos
curl https://clutchzone-api.vercel.app/api/productos

# Obtener un producto específico
curl https://clutchzone-api.vercel.app/api/productos/1
```

### Ejemplo con JavaScript (Fetch)

```javascript
// Obtener todos los productos
fetch('https://clutchzone-api.vercel.app/api/productos')
  .then(response => response.json())
  .then(data => console.log(data));

// Obtener un producto específico
fetch('https://clutchzone-api.vercel.app/api/productos/1')
  .then(response => response.json())
  .then(data => console.log(data));
```

## Notas adicionales

- La API es pública y no requiere autenticación
- Todas las respuestas están en formato JSON
- Los precios están en dólares estadounidenses (USD)
- Las imágenes son proporcionadas a través de URLs de Cloudinary

## Estado del servicio

La API está desplegada en Vercel y está disponible 24/7.

## Limitaciones

- La API es de solo lectura (solo métodos GET)
- Los datos son estáticos y se actualizan manualmente

## Contribución

Si encuentras algún problema o tienes sugerencias para mejorar la API, no dudes en abrir un issue en el repositorio.
