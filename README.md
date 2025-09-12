# 🧪 DZencode Playwright Tests

# DZencode Playwright Tests

Этот проект содержит автотесты, написанные с использованием [Playwright](https://playwright.dev/) для тестирования сайта [dzencode.com](https://dzencode.com).

## 📦 Требования

- Git
- Node.js (v18+)
- npm или yarn
- (опционально) Docker + Docker Compose

---

## ⚙️ Установка и запуск без Docker

### 1. Клонирование репозитория

git clone https://github.com/snooppy1986/dzencode.git
cd dzencode
### 2. Установка зависимостей

npm install
# или
yarn install

### 3. Установка браузеров для Playwright

npx playwright install

### 4. Запуск тестов

npx playwright test

### 5. Просмотр отчёта о тестах

npx playwright show-report

🐳 Запуск с Docker
### 1. Клонирование репозитория

git clone https://github.com/snooppy1986/dzencode.git

cd dzencode

### 2. Сборка Docker-образа

docker build -t dzencode-tests .

### 3. Запуск контейнера с тестами

docker run --rm -it dzencode-tests



