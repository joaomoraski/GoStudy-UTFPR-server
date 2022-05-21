use GoStudy;

SELECT * FROM Institute;

INSERT INTO Institute(name,city,telephone,opening_time,closing_time) VALUES ("utfpr-cm","Campo Mourão","44123456789","08:00","23:00");
INSERT INTO Institute(name,city,telephone,opening_time,closing_time) VALUES ("utfpr-cb","Curitiba","44123456798","09:00","00:00");

INSERT INTO User(fk_id_institute,name,ra,telephone,email,password,isAdmin) VALUES (1,"Moraski","2000000","44912345678","joaolunkes@alunos.utfpr.edu.br","123mudar",false);
INSERT INTO User(fk_id_institute,name,ra,telephone,email,password,isAdmin) VALUES (2,"José","2312300","44123568749","joserenan@alunos.utfpr.edu.br","banana123",false);
INSERT INTO User(fk_id_institute,name,ra,telephone,email,password,isAdmin) VALUES (1,"Flavio","1814000","4491857478","flavios@alunos.utfpr.edu.br","senhamuitoboa",true);
INSERT INTO User(fk_id_institute,name,ra,telephone,email,password,isAdmin) VALUES (2,"Caio","18550000","44964345678","caioluiz@alunos.utfpr.edu.br","aloaloaloalo",true);

INSERT INTO Room(fk_id_institute, number) VALUES (1,"1");
INSERT INTO Room(fk_id_institute, number) VALUES (1,"2");
INSERT INTO Room(fk_id_institute, number) VALUES (1,"3");
INSERT INTO Room(fk_id_institute, number) VALUES (2,"1");
INSERT INTO Room(fk_id_institute, number) VALUES (2,"2");

INSERT INTO Schedule(label,initial_time,final_time) VALUES ("T1","13:00","13:50");
INSERT INTO Schedule(label,initial_time,final_time) VALUES ("T2","13:50","14:40");
INSERT INTO Schedule(label,initial_time,final_time) VALUES ("T3","14:40","15:30");
INSERT INTO Schedule(label,initial_time,final_time) VALUES ("M1","07:30","08:20");
INSERT INTO Schedule(label,initial_time,final_time) VALUES ("M2","08:20","09:10");
INSERT INTO Schedule(label,initial_time,final_time) VALUES ("M3","09:10","10:00");

INSERT INTO Room_has_schedule(fk_id_room,fk_id_schedule) VALUES (1,1);
INSERT INTO Room_has_schedule(fk_id_room,fk_id_schedule) VALUES (1,2);
INSERT INTO Room_has_schedule(fk_id_room,fk_id_schedule) VALUES (1,3);
INSERT INTO Room_has_schedule(fk_id_room,fk_id_schedule) VALUES (2,1);
INSERT INTO Room_has_schedule(fk_id_room,fk_id_schedule) VALUES (2,4);

INSERT INTO Reservation(fk_id_room,fk_id_user,fk_id_schedule,date) VALUES(1,1,1,"2022-03-24");
INSERT INTO Reservation(fk_id_room,fk_id_user,fk_id_schedule,date) VALUES(1,3,2,"2022-03-24");

SELECT * FROM Institute;
SELECT * FROM User;
SELECT * FROM Room;
SELECT * FROM Schedule;
SELECT * FROM Room_has_schedule;
SELECT * FROM Reservation;