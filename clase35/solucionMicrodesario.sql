## Ver las bases de datos ##
show databases;

## Usar la base de datos ##
use movies_db;

## Ver tablas ##
show tables;

## campos de una tabla ##
describe genres;

## Microdesafio 1
## 1.1
insert into genres (name, ranking, active) values('Investigación', 13, true);
select * from genres;
## 1.2
update genres set name='Investigación Científica' where id=13;
## 1.3
delete from genres where id=13;
## 1.4
select * from movies;
## 1.5 
describe actors;
select first_name, last_name, rating from actors;
## 1.6
describe series;
select title as Titulo from series;
## Microdesafio 2
## 2.1
describe actors;
select first_name, last_name from actors where rating > 7.5;
## 2.2
describe movies;
select title, rating, awards from movies where rating > 7.5 and awards > 2;
## 2.3
select title, rating from movies order by rating asc;
## Microdesafio 3
## 3.1
select id, title from movies limit 3;
## 3.2
select * from movies order by rating desc limit 5;
## 3.3
select * from movies order by rating desc;
## nro_de_registros_por_pagina * (numero_de_pagina - 1)
select * from movies order by rating desc limit 5 offset 5;
## 3.4
select * from actors limit 10;
## 3.4.a
select * from actors limit 10 offset 20;
## Microdesafio 4
## 4.1
select title, rating from movies where title like 'harry potter%';
## 4.2
select * from actors where first_name like 'sam%';
## 4.3
select title from movies where year(release_date) between '2004' and '2008';


