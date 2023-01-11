# Сайт по продаже мониторов

## Настройка окружения разработки для Windows

<a id="LoadProject"></a>
### Скачать проект

1. Зайдите в проект на GitHub
2. Нажмите на кнопку "Code"  
3. Нажмите на кнопку "Download ZIP"  
4. Распакуйте скачанный файл  

### Скачать Node JS

1. Скачайте Node JS с официального сайта (https://nodejs.org/ru/download/)  

### Настройка серверной стороны
 
1. Откройте "Командную строку"  
1.1. Нажмите сочетание клавиш "Win + R"  
1.2. В открывшемся окне вбиваете "cmd"  
1.3. Нажимаете кнопку "Ок"  
2. В командной строке перейдите в папку с проектом (Для смены диска введите команду "D:" где D имя диска) (Для перехода по папкам введите команду "cd D:\MonXQ" где D:\MonXQ путь к папке)  
3. В консоли в папке с проектом перейдите в папку "**monxq-api**"  
4. После перехода, введите в консоль команду "**npm install**" для того, чтобы установить в проект все необходимые библиотеки  
5. После установки библиотек, введите в консоль команду "**npm run dev**" для того, чтобы запустить проект  

### Настройка клиентской стороны  
 
1. Откройте "Командную строку"  
1.1. Нажмите сочетание клавиш "Win + R"  
1.2. В открывшемся окне вбиваете "cmd"  
1.3. Нажимаете кнопку "Ок"  
2. В командной строке перейдите в папку с проектом (Для смены диска введите команду "D:" где D имя диска) (Для перехода по папкам введите команду "cd D:\MonXQ" где D:\MonXQ путь к папке)  
3. В консоли в папке с проектом перейдите в папку "**monxq-app**"  
4. После перехода, введите в консоль команду "**npm install**" для того, чтобы установить в проект все необходимые библиотеки  
5. После установки библиотек, введите в консоль команду "**npm start**" для того, чтобы запустить проект  

### Примечание

1. Необходимо запустить два проекта одновременно (monxq-api и monxq-app)
2. Сначало запустите проект monxq-api, затем monxq-app
3. После запуска, на сайт можно перейти по ссылке ("http://localhost:3000/Monitors")
