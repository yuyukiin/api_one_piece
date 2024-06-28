CREATE TABLE AKUMA_NO_MI (
	ID_AKUMA_NO_MI SERIAL PRIMARY KEY, 
	NAME VARCHAR(256),
	TYPE VARCHAR(256),
	DESCRIPTION TEXT
)

INSERT INTO AKUMA_NO_MI VALUES 
(DEFAULT, 'Gomu Gomu no Mi', 'Paramecia', 'Concede os benefícios da borracha'),
(DEFAULT, 'Mera Mera no Mi', 'Logia', 'Concede o poder do fogo')

SELECT * FROM akuma_no_mi