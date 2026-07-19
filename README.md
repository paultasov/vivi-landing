# VIVI Landing

VIVI — CRM для частных хирургов и эстетических клиник (календарь, консультации, операции, галерея до/после, мессенджер, аналитика).

## Стек

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- lucide-react (иконки)

Архитектура фронтенда организована по методологии [Feature-Sliced Design](https://feature-sliced.design/) (`app` → `pages` → `widgets` → `features` → `shared`).

## Структура

```
client/
  src/
    app/       — точка входа, глобальные стили
    pages/     — страница-композиция (landing)
    widgets/   — крупные секции лендинга (hero, pricing, faq и т.д.)
    features/  — самостоятельные интерактивные блоки (roi-калькулятор, слайдер сравнения)
    shared/    — переиспользуемые ui-компоненты, хуки, ассеты
```

## Разработка

```bash
cd client
npm install
npm run dev      # локальный сервер разработки
npm run build    # продакшн-сборка в client/dist
```

## Деплой

Сайт собирается как статический SPA и автоматически деплоится на GitHub Pages через workflow в `.github/workflows/deploy.yml` при пуше в `main`.
