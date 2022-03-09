
drop schema dbvita if exists cascade;

create schema DBVITA;

create table DBVITA.USER (
	
	ID SERIAL not null PRIMARY KEY
	, NAME VARCHAR(100)
	, EMAIL VARCHAR(100)
	, PHONE BIGINT 
	, CATEGORY CHAR(1)
	, PROF_PIC bytea



);

create table DBVITA.POST (

	ID SERIAL NOT NULL PRIMARY KEY
	, IDUSER INT 
	, TITLE VARCHAR(100)
	, DESCRIPTION VARCHAR(1000)
	, REQ varchar(1000)
	
	, foreign key (IDUSER) references DBVITA.USER(ID)
	
); 	




create table DBVITA.MESSAGE (

	ID SERIAL NOT NULL PRIMARY KEY
	, DESCRIPTION VARCHAR(300)
	, DH_SENT TIMESTAMP

);


create table DBVITA.COMMENT (

	ID SERIAL NOT NULL PRIMARY KEY
	, IDUSER INT
	, IDPOST INT
	, DESCRIPTION VARCHAR(280)
	, DH_SENT TIMESTAMP

	, foreign key(IDUSER) references DBVITA.USER(ID)
	, foreign key(IDPOST) references DBVITA.POST(ID)

);

create table DBVITA.USER_MESSAGE (


	 IDUSER1 INT
	, IDUSER2 INT
	, IDMESSAGE INT 
	
	, primary key(IDUSER1, IDUSER2, IDMESSAGE)
	, foreign key(IDUSER1) references DBVITA.USER(ID)
	, foreign key(IDUSER2) references DBVITA.USER(ID)
	, foreign key(IDMESSAGE) references DBVITA.MESSAGE(ID)

);

















