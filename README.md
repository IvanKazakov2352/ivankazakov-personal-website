# Мой личный сайт

Мой одностраничный сайт написанный на технологиях VueJS 3.0 и NuxtJS 3.0
Сборка сайта ведется через Docker и Makefile

# Запуск локально без контейнера
1) Предварительно установить на компьютер NodeJS и PNPM
2) Установить зависимости приложения путем выполнения команды: pnpm install
3) Установить на компьютер mkcert и выполнить команду: mkcert localhost (ОПЦИОНАЛЬНО) нужно для запуска под https протоколом!
4) Выполнить команду: pnpm dev эта команда запустит локальный сервер для разработки, доступный по адресу "https://localhost:3000/"

# Для запуска в docker контейнере
1) Установить Docker на компьютер (Желательно иметь операционную систему типа Linux или MacOS! Windows плохо дружит c docker!)
2) Выполнить команду "docker build -t <имя образа> ."
3) После успешного создания образа выполнить команду "docker run -p 3000:3000 <имя образа который создали ранее>"
4) Сайт доступен по адресу "http://localhost:3000"