
CREATE TABLE p_login(
  id INT PRIMARY KEY AUTO_INCREMENT,
  unamee VARCHAR(50),
  upwdd  VARCHAR(32)
);
INSERT INTO p_login VALUES(null,'Wang',md5('123456'));

INSERT INTO p_login VALUES(null,'tom',md5('123456'));
