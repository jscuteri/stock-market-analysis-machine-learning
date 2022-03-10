DROP TABLE IF EXISTS dia_csv_graphdata; --1
DROP TABLE IF EXISTS iwm_csv_graphdata; --2
DROP TABLE IF EXISTS qqq_csv_graphdata; --3
DROP TABLE IF EXISTS spy_csv_graphdata; --4
DROP TABLE IF EXISTS xlb_csv_graphdata; --5
DROP TABLE IF EXISTS xle_csv_graphdata; --6
DROP TABLE IF EXISTS xlf_csv_graphdata; --7
DROP TABLE IF EXISTS xli_csv_graphdata; --8
DROP TABLE IF EXISTS xlk_csv_graphdata; --9
DROP TABLE IF EXISTS xlp_csv_graphdata; --10
DROP TABLE IF EXISTS xlu_csv_graphdata; --11
DROP TABLE IF EXISTS xlv_csv_graphdata; --12  
DROP TABLE IF EXISTS xly_csv_graphdata; --13  
 
CREATE TABLE dia_csv_graphdata (
	                            id serial PRIMARY KEY,
								future_x2050  VARCHAR(10),
								y_predict2050 DECIMAL,
								y_predict     DECIMAL,
								future_x      VARCHAR(10),
								y_learned     DECIMAL,
								y             DECIMAL,
								xp            VARCHAR(10)
 );
 
CREATE TABLE iwm_csv_graphdata (
	                            id serial PRIMARY KEY,
								future_x2050  VARCHAR(10),
								y_predict2050 DECIMAL,
								y_predict     DECIMAL,
								future_x      VARCHAR(10),
								y_learned     DECIMAL,
								y             DECIMAL,
								xp            VARCHAR(10)
 ); 
 
CREATE TABLE qqq_csv_graphdata (
	                            id serial PRIMARY KEY,
								future_x2050  VARCHAR(10),
								y_predict2050 DECIMAL,
								y_predict     DECIMAL,
								future_x      VARCHAR(10),
								y_learned     DECIMAL,
								y             DECIMAL,
								xp            VARCHAR(10)
 ); 
 
CREATE TABLE spy_csv_graphdata (
	                            id serial PRIMARY KEY,
								future_x2050  VARCHAR(10),
								y_predict2050 DECIMAL,
								y_predict     DECIMAL,
								future_x      VARCHAR(10),
								y_learned     DECIMAL,
								y             DECIMAL,
								xp            VARCHAR(10)
 );
 

CREATE TABLE xlb_csv_graphdata (
	                            id serial PRIMARY KEY,
								future_x2050  VARCHAR(10),
								y_predict2050 DECIMAL,
								y_predict     DECIMAL,
								future_x      VARCHAR(10),
								y_learned     DECIMAL,
								y             DECIMAL,
								xp            VARCHAR(10)
 );
 
CREATE TABLE xle_csv_graphdata (
	                            id serial PRIMARY KEY,
								future_x2050  VARCHAR(10),
								y_predict2050 DECIMAL,
								y_predict     DECIMAL,
								future_x      VARCHAR(10),
								y_learned     DECIMAL,
								y             DECIMAL,
								xp            VARCHAR(10)
); 

CREATE TABLE xlf_csv_graphdata (
	                            id serial PRIMARY KEY,
								future_x2050  VARCHAR(10),
								y_predict2050 DECIMAL,
								y_predict     DECIMAL,
								future_x      VARCHAR(10),
								y_learned     DECIMAL,
								y             DECIMAL,
								xp            VARCHAR(10)
); 

CREATE TABLE xli_csv_graphdata (
	                            id serial PRIMARY KEY,
								future_x2050  VARCHAR(10),
								y_predict2050 DECIMAL,
								y_predict     DECIMAL,
								future_x      VARCHAR(10),
								y_learned     DECIMAL,
								y             DECIMAL,
								xp            VARCHAR(10)
);

CREATE TABLE xlk_csv_graphdata (
	                            id serial PRIMARY KEY,
								future_x2050  VARCHAR(10),
								y_predict2050 DECIMAL,
								y_predict     DECIMAL,
								future_x      VARCHAR(10),
								y_learned     DECIMAL,
								y             DECIMAL,
								xp            VARCHAR(10)
);

CREATE TABLE xlp_csv_graphdata (
	                            id serial PRIMARY KEY,
								future_x2050  VARCHAR(10),
								y_predict2050 DECIMAL,
								y_predict     DECIMAL,
								future_x      VARCHAR(10),
								y_learned     DECIMAL,
								y             DECIMAL,
								xp            VARCHAR(10)
);

CREATE TABLE xlu_csv_graphdata (
	                            id serial PRIMARY KEY,
								future_x2050  VARCHAR(10),
								y_predict2050 DECIMAL,
								y_predict     DECIMAL,
								future_x      VARCHAR(10),
								y_learned     DECIMAL,
								y             DECIMAL,
								xp            VARCHAR(10)
);

CREATE TABLE xlv_csv_graphdata (
	                            id serial PRIMARY KEY,
								future_x2050  VARCHAR(10),
								y_predict2050 DECIMAL,
								y_predict     DECIMAL,
								future_x      VARCHAR(10),
								y_learned     DECIMAL,
								y             DECIMAL,
								xp            VARCHAR(10)
);

CREATE TABLE xly_csv_graphdata (
	                            id serial PRIMARY KEY,
								future_x2050  VARCHAR(10),
								y_predict2050 DECIMAL,
								y_predict     DECIMAL,
								future_x      VARCHAR(10),
								y_learned     DECIMAL,
								y             DECIMAL,
								xp            VARCHAR(10)
);

SELECT * FROM xly_csv_graphdata;

