[![ESLint](https://github.com/nick-ilin/processor-museum/actions/workflows/lint.yml/badge.svg)](https://github.com/ваш-логин/processor-museum/actions/workflows/lint.yml)

# Processor Museum — Коллекция компьютерных деталей

**Processor Museum** — это веб-приложение для учёта и просмотра коллекции компьютерных деталей: процессоров, видеокарт, материнских плат и оперативной памяти. Проект оптимизирован для мобильных устройств (быстрый поиск по коллекции) и десктопов (плитки с фото).

## Особенности

-   **Адаптивный дизайн** — удобный список на телефоне, плитки на десктопе.
-   **Фильтрация** по бренду и семейству.
-   **Миниатюры и полноразмерные фото** — клик по фото открывает большое изображение.
-   **Данные в CSV** — легко редактировать коллекцию в Excel / Google Sheets.
-   **Автоматическая сборка** — из CSV файла генерируется JSON.
-   **Готов к CI/CD** — настроен автодеплой на FTP.

## Технологии

-   **React 19** (функциональные компоненты, хуки)
-   **React Router 6** (маршрутизация)
-   **CSS Modules** (стилизация)
-   **csv-parser** (парсинг коллекции)
-   **Node.js** (скрипт сборки)

## Структура проекта

```
processor-museum/
├── csv/ # таблицы с коллекциями (cpu.csv, gpu.csv, mb.csv)
├── public/
│ ├── assets/ # миниатюры (160x160 cpu / 240x320 gpu)
│ │ └── big/ # полноразмерные фото
│ └── index.html
├── src/
│ ├── components/ # переиспользуемые компоненты
│ ├── pages/ # страницы (CPU, GPU, MB)
│ ├── hooks/ # кастомные хуки
│ ├── data/ # сгенерированный общий collection.json
│ ├── styles/ # глобальные стили
│ ├── App.jsx
│ └── index.js
├── scripts/
│ └── build.js # скрипт сборки из CSV → JSON
├── package.json
└── README.md
```

## Формат CSV

Файл collection.csv в корне проекта.

Колонки:
-   `id` — уникальный идентификатор
-   `category` — тип устройства (cpu, gpu, mb)
-   `brand` — производитель (ASUS, Intel, AMD)
-   `family` — семейство (Pentium 1, Athlon XP, GeForce FX5600)
-   `name` — полное название устройства
-   `slot` — разьем устройства
-   `condition` — состояние устройства (работает, не работает, артефакты)

Пример строки: `intel-4790k,cpu,Intel,Core i7,"Intel Core i7-4790K"`

## Фото

Фото кладутся в `public/assets/cpu/` и `public/assets/cpu/big/`:

-   Миниатюры: `public/assets/cpu/intel-4790k.jpg`
-   Большие фото: `public/assets/cpu/big/intel-4790k.jpg`

Размеры:
-   Миниатюры: 160x160 (CPU), 240x320 (GPU)
-   Полноразмерные: любые, открываются в модальном окне

## Установка и запуск

1.  Клонировать репозиторий
    `git clone https://github.com/your-username/processor-museum.git`
    `cd processor-museum`

2.  Установить зависимости
    `npm install`

3.  Подготовить данные
    Положите файл `cpu.csv` в папку `csv/`, а фото — в `public/assets/cpu`.

4.  Сгенерировать JSON
    `npm run build:data`

5.  Запустить dev-сервер
    `npm start`

    Откройте http://localhost:3000

6.  Собрать для продакшена
    `npm run build`

    Готовый сайт будет в папке `build/`.

## Скрипты

-   `npm start` — запуск dev-сервера
-   `npm run build` — сборка для продакшена
-   `npm run build:data` — генерация `collection.json` из CSV и фото
-   `npm run lint` — проверка кода с помощью ESlint

## CI/CD

Проект можно настроить на автоматический деплой по FTP при слиянии в `main`.

Пример логики для GitHub Actions:
1.  Установить `lftp`
2.  Собрать проект (`npm run build`)
3.  Синхронизировать папку `build/` с FTP-сервером

Логин и пароль хранить в Secrets (`FTP_USER`, `FTP_PASS`).

## Лицензия

MIT
