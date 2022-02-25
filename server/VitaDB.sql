DROP schema if exists DBVITA cascade;

create schema DBVITA;

create table PERFIL (
	
	IDPERFIL INT not null
	, NOME VARCHAR(100)
	, CPF INT 
	, EMAIL VARCHAR(100)
	, TELEFONE INT 
	, CATEGORIA CHAR(1)
	, FOTO_PERFIL bytea
	
	, primary key (IDPERFIL)


);

create table COMENTARIO (

	IDCOMENTARIO INT not null
	, IDPERFIL INT
	, CONTEUDO VARCHAR(280)
	, DH_ENVIO TIMESTAMP
	
	, primary key(IDCOMENTARIO)
	, foreign key(IDPERFIL) references PERFIL(IDPERFIL)

);

create table PUBLICACAO (

	IDPUBLICACAO INT not null
	, IDPERFIL INT 
	, IDCOMENTARIO INT
	, REACAO CHAR(1)
	, CONTEUDO VARCHAR(1000)
	, TITULO VARCHAR(100)
	, IMAGEM bytea
	
	, primary key (IDPUBLICACAO) 
	, foreign key (IDPERFIL) references PERFIL(IDPERFIL)
	, foreign key (IDCOMENTARIO) references COMENTARIO(IDCOMENTARIO)
);




create table MENSAGEM (

	IDMENSAGEM INT not null
	, CONTEUDO VARCHAR(300)
	, DH_ENVIO TIMESTAMP
	
	, primary key(IDMENSAGEM)


);

create table PERFIL_MENSAGEM (

	IDPERFIL_MENSAGEM INT not null
	, IDPERFIL INT
	, IDMENSAGEM INT 
	
	, primary key(IDPERFIL, IDMENSAGEM)
	, foreign key(IDPERFIL) references PERFIL(IDPERFIL)
	, foreign key(IDMENSAGEM) references MENSAGEM(IDMENSAGEM)

);


select * from perfil;


















