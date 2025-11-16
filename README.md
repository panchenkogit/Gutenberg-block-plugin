# Gutenberg Block Plugin for WordPress

## Description

This is a Gutenberg block plugin for WordPress built with React. Includes a child block for nested content.

## Technologies

React, WordPress Gutenberg, SCSS, ESLint, Prettier, Node.js / npm

## Project Structure

``text

myblock/ # plugin
├─ build/ # compiled files (copy to WordPress)
├─ src/ # source files
│ ├─ edit.js
│ ├─ editor.scss
│ ├─ index.js
│ ├─ save.js
│ ├─ style.scss
│ └─ block/ # child block
│ ├─ edit.js
│ ├─ index.js
│ └─ save.js
├─ .eslintrc.json # ESLint config
├─ .gitignore # ignored files
├─ .prettierrc.json # Prettier config
├─ block.json # block config
├─ myblock.php # main plugin file
├─ package.json
├─ package-lock.json
└─ README.md # documentation

## How to Install & Run

1. Install dependencies and build:

````bash
npm install
npm run build

2. Copy the plugin folder to `wp-content/plugins/` in your WordPress installation.
3. Activate the plugin in the WordPress admin panel.
4. Blocks will appear in the Gutenberg editor.

---

# Плагин Gutenberg для WordPress

## Описание

Плагин Gutenberg для WordPress, реализованный на React. Включает дочерний блок для вложенного контента.

## Технологии

React, WordPress Gutenberg, SCSS, ESLint, Prettier, Node.js / npm

## Структура проекта

``text
myblock/ # плагин
├─ build/ # скомпилированные файлы (копировать в WordPress)
├─ src/ # исходные файлы
│ ├─ edit.js
│ ├─ editor.scss
│ ├─ index.js
│ ├─ save.js
│ ├─ style.scss
│ └─ block/ # дочерний блок
│ ├─ edit.js
│ ├─ index.js
│ └─ save.js
├─ .eslintrc.json # ESLint config
├─ .gitignore # игрорируемые файлы
├─ .prettierrc.json # Prettier config
├─ block.json # настройки блока
├─ myblock.php # основной файл плагина
├─ package.json
├─ package-lock.json
└─ README.md # documentation

## Как установить и запустить

1. Установите зависимости и соберите плагин:

```bash
npm install
npm run build

2. Скопируйте папку плагина в `wp-content/plugins/` вашей установки WordPress.
3. Активируйте плагин через админку WordPress.
4. Блоки появятся в редакторе Gutenberg.
````
