DROP TABLE IF EXISTS etf_graphdata;
 
CREATE TABLE etf_graphdata (
	                            id serial PRIMARY KEY,
						        asset_id      VARCHAR(3),  
								future_x2050  VARCHAR(10),
								y_predict2050 VARCHAR(20),
								y_predict     VARCHAR(20),
								future_x      VARCHAR(10),
								y_learned     VARCHAR(20),
								y             VARCHAR(20),
								xp            VARCHAR(10)
 );
 
SELECT asset_id, COUNT(*) FROM etf_graphdata GROUP BY asset_id;