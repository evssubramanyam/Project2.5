drop table login;

create table login(
	email varchar(100) not null primary key,
	password varchar(100) not null
)

INSERT INTO login (email, password)
VALUES ('puneeth', 'p@mail');

select * from login;

create table stocks(
	name  varchar(100) not null,
	qty INT DEFAULT 1,
	price INT not null,
	buydate DATE
);

select * from stocks;