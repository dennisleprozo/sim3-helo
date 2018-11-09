INSERT INTO helo_user
(username, password)
VALUES ($1, $2)
returning *;