### Hexlet tests and linter status:
[![Actions Status](https://github.com/aleksandrtamrazov/backend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/aleksandrtamrazov/backend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/8dbc6545d84e1c0a2b91/maintainability)](https://codeclimate.com/github/aleksandrtamrazov/backend-project-lvl2/maintainability)
[![lint-check](https://github.com/aleksandrtamrazov/backend-project-lvl2/actions/workflows/lint-check.yml/badge.svg)](https://github.com/aleksandrtamrazov/backend-project-lvl2/actions/workflows/lint-check.yml)
[![test-check](https://github.com/aleksandrtamrazov/backend-project-lvl2/actions/workflows/test-check.yml/badge.svg)](https://github.com/aleksandrtamrazov/backend-project-lvl2/actions/workflows/test-check.yml)


# Вычислитель отличий

Программа определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов http://www.jsondiff.com/. Подобный механизм, например, используется при выводе тестов или при автоматическом отслеживании изменении в конфигурационных файлах.

* Поддержка разных входных форматов: yaml, json
* Генерация отчета в виде plain text, stylish и json
* Пример использования:
````
# формат plain
 gendiff --format plain path/to/file.yml another/path/file.json
Property 'common.follow' was added with value: false
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group2' was removed
# формат stylish
 gendiff filepath1.json filepath2.json
{
    + follow: false
      setting1: Value 1
    - setting2: 200
    - setting3: true
    + setting3: {
        key: value
    }
    + setting4: blah blah
    + setting5: {
        key5: value5
    }
 }
````

## Установка

````
make install
make publish
make link
````

## Использование

* ### Помощь
````
 gendiff -h
````

* ### Версия
````
 gendiff -v
````

* ### Формат вывода

stylish, plain, json. По умолчанию stylish.

````
 gendiff -f --format [format]
````