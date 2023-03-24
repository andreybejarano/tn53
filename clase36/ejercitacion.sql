## Microdesafio 1
select series.title, genres.name
from series
inner join genres on series.genre_id = genres.id;

select episodes.title, actors.first_name, actors.last_name
from episodes
inner join actor_episode on episodes.id = actor_episode.episode_id
inner join actors on actors.id = actor_episode.actor_id;


## Microdesafio 2
select distinct actors.first_name, actors.last_name
from actors
inner join actor_movie on actor_movie.actor_id = actors.id
inner join movies on actor_movie.movie_id = movies.id
where movies.title like '%guerra de las galaxias%';

## Microdesafio 3
select movies.title, coalesce(genres.name, 'no tiene género') as genge_name
from movies
left join genres on movies.genre_id = genres.id;

## Microdesafio 4
select title, datediff(end_date, release_date) as duration
from series;

## Microdesafio 5
select * 
from actors 
where length(first_name) > 6
order by first_name;

select count(*) as cantidad from episodes;

select series.title, count(seasons.id) as seasons
from series
inner join seasons on seasons.serie_id = series.id
group by series.id;

select genres.name, count(movies.id) as cantidad
from genres
left join movies on movies.genre_id = genres.id
group by genres.id
having count(movies.id) >= 3;
