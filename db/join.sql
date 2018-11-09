SELECT helo_user.id, posts.author_id
FROM helo_user
JOIN posts ON posts.author_id = helo_user.id;