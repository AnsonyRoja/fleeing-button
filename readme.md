🏃💨 Fleeing Button — El Botón que Huye del Cursor

Un mini–juego divertido creado con HTML, CSS y JavaScript, donde el usuario intenta atrapar un botón que se escapa cada vez que el mouse se acerca. Cada vez que logras hacer clic, ganas un punto. Perfecto para practicar eventos del DOM y crear interactividad dinámica.

🎮 Demo

(Opcional: puedes agregar un GIF o un enlace a GitHub Pages cuando lo publiques)
Ejemplo:

https://tuusuario.github.io/fleeing-button/

✨ Características

🏃‍♂️ El botón detecta cuando el cursor se acerca y se mueve rápidamente.

🎯 Sistema de puntuación cada vez que logras atraparlo.

🔒 Movimiento limitado al contenedor (no sale del área).

⚡ Animaciones suaves con transition.

💻 Código limpio y 100% en JavaScript Vanilla.

🎨 Diseño básico y fácil de personalizar.

🧠 ¿Qué puedes aprender con este proyecto?

Manejo de eventos del mouse (mousemove, click)

Uso de getBoundingClientRect() para calcular distancias

Posicionamiento absoluto dinámico

Detección de proximidad

Manipulación del DOM

Lógica simple de juegos en JavaScript

🗂️ Estructura del proyecto
fleeing-button/
│── index.html
│── fleeing.css
│── fleeing-actions.js
└── README.md

🚀 Cómo ejecutarlo

Descarga o clona el repositorio:

git clone https://github.com/TU_USUARIO/fleeing-button.git


Abre index.html en tu navegador.
¡Y listo! El juego funciona sin necesidad de servidor.

🧩 Código principal (lógica del botón)
document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const rectBtn = btn.getBoundingClientRect();
    const rectBox = box.getBoundingClientRect();

    const distX = Math.abs(x - (rectBtn.left + rectBtn.width / 2));
    const distY = Math.abs(y - (rectBtn.top + rectBtn.height / 2));

    const distance = 120;

    if (distX < distance && distY < distance) {
        let newX = Math.random() * (rectBox.width - rectBtn.width);
        let newY = Math.random() * (rectBox.height - rectBtn.height);

        btn.style.left = newX + "px";
        btn.style.top = newY + "px";
    }
});

🏅 Ideas para mejorar

⏱️ Modo contrarreloj

💣 Modo difícil: botón más rápido

🧠 IA que predice la posición del mouse

🎵 Sonidos al atrapar el botón

📱 Versión móvil con detección táctil

🎨 Skins o efectos visuales para el botón

🤝 Contribuciones

¡Las contribuciones son bienvenidas!
Si deseas mejorar el juego o agregar nuevas funciones, siéntete libre de hacer un pull request.

📄 Licencia

Este proyecto está bajo la licencia MIT — puedes usarlo libremente.

⭐ Si te gusta este proyecto…

Dale una ⭐ en GitHub para apoyar el repo 🙌