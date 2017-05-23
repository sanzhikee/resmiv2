Yii2 + Angularjs4

Зависимости
------------

Я локально установил php7.1, mysql5.6, nginx, node7.7.3 и npm 4.1.3

Установка
-------------

Разворачиваем проект из гита локально
Далее запускаем команду composer install
После в папке запускаем php yii migrate
Потом переходим в front, там запускаем npm install, npm run build

Настройка
-------------

### База данных

Конфигирурем базу, например:

```php
return [
    'class' => 'yii\db\Connection',
    'dsn' => 'mysql:host=localhost;dbname=resmi',
    'username' => 'root',
    'password' => '',
    'charset' => 'utf8',
];

```

Север
-------------

#Рекомендуемая Apache конфигурация:

```php
RewriteEngine on

# не позволять httpd отдавать файлы, начинающиеся с точки (.htaccess, .svn, .git и прочие)
RedirectMatch 403 /\..*$
# если директория или файл существуют, использовать их напрямую
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
# иначе отправлять запрос на файл index.php
RewriteRule . index.php
```

#Рекомендуемая Nginx конфигурация:

```php
server {
  listen 80;
  server_name resmi.v2.dev;
  set $host_path "/Users/sanzhar/projects/resmi/v2/web";
  set $yii_bootstrap "index.html";

  root   $host_path;

  charset utf-8;

  location / {
      index  $yii_bootstrap;
      try_files $uri $uri/ /$yii_bootstrap?$args;
  }

  #отключаем обработку запросов фреймворком к несуществующим статичным файлам
  location ~ \.(js|css|png|jpg|gif|swf|ico|pdf|mov|fla|zip|rar)$ {
      try_files $uri =404;
      expires max;
  }

  location ~ \.php {
        fastcgi_split_path_info  ^(.+\.php)(.*)$;

        #позволяем yii перехватывать запросы к несуществующим PHP-файлам
        set $fsn /$yii_bootstrap;
        if (-f $document_root$fastcgi_script_name){
            set $fsn $fastcgi_script_name;
        }
        fastcgi_pass unix:/usr/local/tmp/php-fpm;
        include fastcgi_params;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fsn;

        #PATH_INFO и PATH_TRANSLATED могут быть опущены, но стандарт RFC 3875 определяет для CGI
        fastcgi_param  PATH_INFO        $fastcgi_path_info;
        fastcgi_param  PATH_TRANSLATED  $document_root$fsn;
  }

}
```