create database streaming;
use streaming;

create table movie(
	id int not null auto_increment,
	cover varchar (1000) default null,
	title varchar (45) default null,
	synopsis varchar (1000) default null, 
	trailer varchar (500) default null,
    id_category int default null,
	premier date not null,
	qualification int default null,
	view boolean default false,
	primary key (id),
    foreign key (id_category) references category (id)
);

create table category(
	id int not null auto_increment,
    name varchar (15) default null,
    primary key (id)
);

insert into category (name) value ("comedia"), ("accion"),("drama"),("terror"),("documental"),("infantil");
insert into movie (cover, title, synopsis, trailer, id_category, premier) value (
	"https://i.pinimg.com/564x/e1/a2/db/e1a2dbf549ec7707901c3255db65c3c7.jpg",
    "Jhon Wick 2",
    "hombre que lucha por vengar a su perro",
    "https://www.youtube.com/watch?v=XGk2EfbD_Ps&ab_channel=ZeroMedia",
    2,
    "2017-02-09"
);
insert into movie (cover, title, synopsis, trailer, id_category, premier) value (
	"https://i.pinimg.com/originals/0c/e6/47/0ce647ebe024e853f0138719f80b6a40.jpg",
    "Tiburón",
    "nada por tu vida porque te llevo el tiburón",
    "https://www.youtube.com/watch?v=U1fu_sA7XhE&t=7s&ab_channel=MovieclipsClassicTrailers",
    4,
    "1975-06-20"
);
insert into movie (cover, title, synopsis, trailer, id_category, premier) value (
	"https://i.pinimg.com/564x/e3/ed/6e/e3ed6ebb1c2bf602a5e179b657e620b5.jpg",
    "Spider-man from for home",
    "preparate para vivir una nueva aventura del hombre aracnido",
    "https://www.youtube.com/watch?v=Nt9L1jCKGnE&ab_channel=SonyPicturesEntertainment",
    6,
    "2018-03-12"
);

drop database streaming;
