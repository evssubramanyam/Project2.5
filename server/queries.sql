drop table login;

create table login(
	email varchar(100) not null primary key,
	password varchar(100) not null
)

INSERT INTO login (email, password)
VALUES ('puneeth', 'p@mail');

select * from login;