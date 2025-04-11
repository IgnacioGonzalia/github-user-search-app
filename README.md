# GitHub User Search App

Una aplicación web responsive construida con **React + TypeScript**, **Tailwind CSS** y **Axios**, basada en el challenge de [Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6).

Permite buscar perfiles de GitHub e interactuar con la información pública del usuario.

---

## ✨ Features

- 🔍 Búsqueda de usuarios de GitHub.
- 💡 Modo claro/oscuro (toggle).
- 📱 Responsive (mobile-first).
- 📄 Información del usuario: bio, avatar, seguidores, repos, etc.
- 🔁 Estado de carga y manejo de errores.
- 🎯 Accesibilidad (WAI-ARIA friendly).

### 🧪 AGG (Agregados)

- 🔎 Sugerencias y autocompletado de búsqueda.
- 🌐 Soporte multilenguaje.
- 📤 Compartir tarjeta como imagen (`html2canvas` + Web Share API).

---

## ⚙️ Tecnologías

- ⚛️ **React** + **TypeScript**
- 🎨 **Tailwind CSS**
- 🌐 **Axios**
- 🌙 **Dark Mode**
- 📦 Vite

---

## 🚀 Instalación

```bash
git clone https://github.com/IgnacioGonzalia/github-user-search-app.git
cd github-user-search-app
npm install
npm run dev
```

---

## 📸 Preview

![App Preview - Light and Dark mode](./public/preview.jpg)

---

## 📁 Estructura del Proyecto

```
src/
├── components/    # Componentes reutilizables
├── utils/         # Helpers y funciones auxiliares
├── App.tsx        # Raíz de la app
├── main.tsx       # Punto de entrada
└── index.css      # Estilos base (Tailwind)
```

---

## ✅ Estado del desarrollo

- [x] Setup inicial
- [x] Tema claro/oscuro
- [x] Navbar + fuentes
- [x] SearchBar interactiva
- [x] Fetch de GitHub API
- [x] Card de usuario
- [ ] AGG: Autocompletado
- [ ] AGG: Traducción
- [ ] AGG: Compartir screen
