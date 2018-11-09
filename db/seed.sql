create table helo_user (
id serial primary key,
username varchar(20),
password varchar(20),
profile_pic text
)

INSERT INTO helo_user
(username, password, profile_pic)
VALUES 
($1, $2, $3)
returning *;

-- search for existing user 
select *
from helo_user
where username = $1;

-- dummy data 
INSERT INTO helo_user
(username, password, profile_pic)
VALUES 
('dennis', 'd' , 'profilepic');

create table posts (
    id serial primary key,
    title varchar(45),
    img text,
    content text,
    author_id integer references helo_user(id)
)
-- dummy posts data
INSERT INTO posts
(title, img, content, author_id)
VALUES 
('LOTR', 'img1_url', 'the Hobbits', 1 );