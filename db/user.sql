CREATE DATABASE "IT490";
\c IT490

CREATE TABLE users
(
    username varchar(50),
    firstname varchar(50),
    lastname varchar(50) not null,
    email varchar(255) not null unique,
    hash VARCHAR(255) NOT NULL
);
