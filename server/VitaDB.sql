
drop schema dbvita if exists cascade;

create schema DBVITA;

create table DBVITA.PERFIL (
	
	IDPERFIL INT not null
	, NOME VARCHAR(100)
	, CPF char(11) 
	, EMAIL VARCHAR(100)
	, TELEFONE BIGINT 
	, CATEGORIA CHAR(1)
	, FOTO_PERFIL bytea
	
	, primary key (IDPERFIL)


);

create table DBVITA.PUBLICACAO (

	IDPUBLICACAO INT not null
	, IDPERFIL INT 
	, TITULO VARCHAR(100)
	, CONTEUDO VARCHAR(1000)
	, REQ varchar(1000)
	, IMAGEM bytea
	
	, primary key (IDPUBLICACAO) 
	, foreign key (IDPERFIL) references DBVITA.PERFIL(IDPERFIL)
	
); 	




create table DBVITA.MENSAGEM (

	IDMENSAGEM INT not null
	, CONTEUDO VARCHAR(300)
	, DH_ENVIO TIMESTAMP
	
	, primary key(IDMENSAGEM)


);


create table DBVITA.COMENTARIO (

	IDCOMENTARIO INT not null
	, IDPERFIL INT
	, IDPUBLICACAO INT
	, CONTEUDO VARCHAR(280)
	, DH_ENVIO TIMESTAMP
	
	, primary key(IDCOMENTARIO)
	, foreign key(IDPERFIL) references DBVITA.PERFIL(IDPERFIL)
	, foreign key(IDPUBLICACAO) references DBVITA.PUBLICACAO(IDPUBLICACAO)

);

create table DBVITA.PERFIL_MENSAGEM (


	 IDPERFIL1 INT
	, IDPERFIL2 INT
	, IDMENSAGEM INT 
	
	, primary key(IDPERFIL1, IDPERFIL2, IDMENSAGEM)
	, foreign key(IDPERFIL1) references DBVITA.PERFIL(IDPERFIL)
	, foreign key(IDPERFIL2) references DBVITA.PERFIL(IDPERFIL)
	, foreign key(IDMENSAGEM) references DBVITA.MENSAGEM(IDMENSAGEM)

);


select * from perfil;


















