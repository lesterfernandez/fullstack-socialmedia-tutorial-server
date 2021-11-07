CREATE DATABASE social_media;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    fullname VARCHAR(255) NOT NULL,
    img VARCHAR(255) NOT NULL,
    google_id INT NOT NULL UNIQUE
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    body VARCHAR(255) NOT NULL,
    author_id INT references users(id) NOT NULL
);