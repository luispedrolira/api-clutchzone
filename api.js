const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

// Los middlewares
app.use(cors());
app.use(express.json());

// Datos quemados
const productos = [
  {
    "id": "1",
    "nombre": "Teclado Mecánico RGB Corsair K95",
    "precio": 270.0,
    "imagen": "https://res.cloudinary.com/ds3lamhke/image/upload/v1747961040/corsair-K95_xhkmzy.jpg",
    "categoria": "teclados"
  },
  {
    "id": "2",
    "nombre": "Mouse Gaming Logitech G502 HERO",
    "precio": 170.0,
    "imagen": "https://res.cloudinary.com/ds3lamhke/image/upload/v1747961040/logi-g502-hero_hwndf9.jpg",
    "categoria": "mouse"
  },
  {
    "id": "3",
    "nombre": "Audífonos HyperX Cloud II",
    "precio": 220.0,
    "imagen": "https://res.cloudinary.com/ds3lamhke/image/upload/v1747961040/hyperx-cloudII_wx30yn.jpg",
    "categoria": "audifonos"
  },
  {
    "id": "4",
    "nombre": "Teclado Gamer Redragon K552 RGB",
    "precio": 80.0,
    "imagen": "https://res.cloudinary.com/ds3lamhke/image/upload/v1747961039/redragon-k552_aytk8z.jpg",
    "categoria": "teclados"
  },
  {
    "id": "5",
    "nombre": "Monitor Gaming ASUS ROG 144Hz",
    "precio": 850.0,
    "imagen": "https://res.cloudinary.com/ds3lamhke/image/upload/v1747961039/monitor-asus-rog_vra921.jpg",
    "categoria": "monitores"
  },
  {
    "id": "6",
    "nombre": "Mouse Gamer Razer DeathAdder V2",
    "precio": 130.0,
    "imagen": "https://res.cloudinary.com/ds3lamhke/image/upload/v1747961040/deathadder-v2_jisjdp.jpg",
    "categoria": "mouse"
  },
  {
    "id": "7",
    "nombre": "Audífonos Gamer Logitech G733 LIGHTSPEED",
    "precio": 180.0,
    "imagen": "https://res.cloudinary.com/ds3lamhke/image/upload/v1747961039/logitech-g733-lightspeed_on5pfd.jpg",
    "categoria": "audio"
  },
  {
    "id": "8",
    "nombre": "Monitor Curvo Samsung Odyssey 27",
    "precio": 490.0,
    "imagen": "https://res.cloudinary.com/ds3lamhke/image/upload/v1747961039/samsung-odyssey27_uhyjao.jpg",
    "categoria": "sillas-gamer"
  },
  {
    "id": "9",
    "nombre": "Silla Gamer DXRacer Formula",
    "precio": 750.0,
    "imagen": "https://res.cloudinary.com/ds3lamhke/image/upload/v1747961039/silla-dxracer-formula_u7rual.jpg",
    "categoria": "sillas-gamer"
  },
  {
    "id": "10",
    "nombre": "Silla Gamer Cougar Armor One",
    "precio": 580.0,
    "imagen": "https://res.cloudinary.com/ds3lamhke/image/upload/v1747961039/silla-cougar-armorone_oycymg.jpg",
    "categoria": "sillas-gamer"
  },
  {
    "id": "11",
    "nombre": "Mouse Gaming Razer Viper Ultimate",
    "precio": 190.0,
    "imagen": "https://picsum.photos/300/200?random=16",
    "categoria": "mouse"
  },
  {
    "id": "12",
    "nombre": "Teclado Gamer Logitech G915 TKL",
    "precio": 300.0,
    "imagen": "https://picsum.photos/300/200?random=17",
    "categoria": "teclados"
  },
  {
    "id": "13",
    "nombre": "Audífonos Corsair HS80 RGB Wireless",
    "precio": 250.0,
    "imagen": "https://picsum.photos/300/200?random=18",
    "categoria": "audifonos"
  },
  {
    "id": "14",
    "nombre": "Silla Gamer Secretlab TITAN Evo 2022",
    "precio": 920.0,
    "imagen": "https://picsum.photos/300/200?random=19",
    "categoria": "sillas-gamer"
  },
  {
    "id": "15",
    "nombre": "Monitor LG UltraGear 27GN950-B 4K",
    "precio": 1100.0,
    "imagen": "https://picsum.photos/300/200?random=20",
    "categoria": "monitores"
  },
  {
    "id": "16",
    "nombre": "Mouse Redragon M711 Cobra RGB",
    "precio": 60.0,
    "imagen": "https://picsum.photos/300/200?random=21",
    "categoria": "mouse"
  },
  {
    "id": "17",
    "nombre": "Teclado Mecánico HyperX Alloy FPS Pro",
    "precio": 120.0,
    "imagen": "https://picsum.photos/300/200?random=22",
    "categoria": "teclados"
  },
  {
    "id": "18",
    "nombre": "Audífonos Razer Kraken Tournament Edition",
    "precio": 160.0,
    "imagen": "https://picsum.photos/300/200?random=23",
    "categoria": "audifonos"
  },
  {
    "id": "19",
    "nombre": "Silla Gamer Cougar Fusion",
    "precio": 460.0,
    "imagen": "https://picsum.photos/300/200?random=24",
    "categoria": "sillas-gamer"
  },
  {
    "id": "20",
    "nombre": "Monitor MSI Optix MAG274QRF-QD",
    "precio": 870.0,
    "imagen": "https://picsum.photos/300/200?random=25",
    "categoria": "monitores"
  },
  {
    "id": "21",
    "nombre": "Mouse Logitech G Pro X Superlight",
    "precio": 180.0,
    "imagen": "https://picsum.photos/300/200?random=26",
    "categoria": "mouse"
  },
  {
    "id": "22",
    "nombre": "Teclado Razer Huntsman Elite",
    "precio": 250.0,
    "imagen": "https://picsum.photos/300/200?random=27",
    "categoria": "teclados"
  },
  {
    "id": "23",
    "nombre": "Audífonos SteelSeries Arctis 7",
    "precio": 230.0,
    "imagen": "https://picsum.photos/300/200?random=28",
    "categoria": "audifonos"
  },
  {
    "id": "24",
    "nombre": "Silla Gamer Thermaltake X Comfort Air",
    "precio": 880.0,
    "imagen": "https://picsum.photos/300/200?random=29",
    "categoria": "sillas-gamer"
  },
  {
    "id": "25",
    "nombre": "Monitor AOC C32G2 Curvo 165Hz",
    "precio": 690.0,
    "imagen": "https://picsum.photos/300/200?random=30",
    "categoria": "monitores"
  }
];

// ** RUTAS **
// Endpoint para traer todos los productos
app.get("/api/productos", (req, res) => {
  res.json({
    success: true,
    data: productos,
    total: productos.length,
  });
});

// Endpoint para traer un producto por id
app.get("/api/productos/:id", (req, res) => {
    const producto = productos.find(p => p.id === req.params.id);
    if (!producto) {
        return res.status(404).json({
            success: false,
            message: "Producto no encontrado :(",
        });
    }

    res.json({
        success: true,
        data: producto
    });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
