Эта страница на [English](/README.md)

# IONDV. Image-storage

Image-storage - библиотека для IONDV.Framework. Используется для предварительного просмотра картинок.

## Кратко об IONDV. Framework

IONDV. Framework - это опенсорный фреймворк на node.js для разработки учетных приложений 
или микросервисов на основе метаданных и отдельных модулей. Он является частью 
инструментальной цифровой платформы для создания enterprise 
(ERP) приложений состоящей из опенсорсных компонентов: самого [фреймворка](https://github.com/iondv/framework), 
[модулей](https://github.com/topics/iondv-module) и готовых приложений расширяющих его 
функциональность, визуальной среды [Studio](https://github.com/iondv/studio) для 
разработки метаданных приложений.

Подробнее об [IONDV. Framework на сайте](https://iondv.com), документация доступна в [репозитории на github](https://github.com/iondv/framework/blob/master/docs/en/index.md)

## Описание и назначение модуля 

Модуль представляет собой дополнительный компонент системы и используется при наличии в приложении атрибутов содержащих изображения.

Для подключения модуля необходимо обозначить его в зависимостях приложения. Для этого указываем модуль в файле package.json приложения, в разделе _"dependencies"_:
```
"dependencies": {
    "image-storage": "git+https://github.com/iondv/image-storage.git"
}
```
с указанием ссылки на репозиторий модуля в github.com.

Далее нужно добавить на форму списка атрибут, изображение которого будет использовано в режиме предпросмотра. После чего изображения, загруженные для объектов, можно просматривать сразу на форме списка.

## Возможности модуля image-storage

* Отображение превью картинок не переходя на форму объекта

--------------------------------------------------------------------------  


 #### [Licence](/LICENCE) &ensp;  [Contact us](https://iondv.com) &ensp;    [English](/README.md)   &ensp; [FAQs](/faqs.md)          

<div><img src="https://mc.iondv.com/watch/local/docs/portal" style="position:absolute; left:-9999px;" height=1 width=1 alt="iondv metrics"></div>

--------------------------------------------------------------------------  

Copyright (c) 2018 **LLC "ION DV"**.  
All rights reserved. 
