--Sample data for customers
INSERT INTO CUSTOMER VALUES(1,'JANE DOE','195 BROOKHILL LN','345-543-2343','JDOE@GMAIL.COM','1234','1995-23-12');
INSERT INTO CUSTOMER VALUES(2,'MICHAEL JORDAN','432 SWAMPTREE RD','543-234-4819','MJORDAN@GMAIL.COM','2345','1987-13-29');
INSERT INTO CUSTOMER VALUES(3,'BOB ROSS','23 OAK MANOR LN','343-483-5443','BROSS@GMAIL.COM','5434','1965-23-18');
INSERT INTO CUSTOMER VALUES(4,'JOE GREEN','54 VALLEY LN','432-462-2696','JGREEN@GMAIL.COM','1874','1990-21-12');
INSERT INTO CUSTOMER VALUES(5,'MARK MANSEN','21 ORANGE LN','235-123-6543','MMANSEN@GMAIL.COM','5484','1976-05-13');

--Sample data for carts
INSERT INTO CART VALUES(100,'GROCERIES','APPLES,BREAD',1);
INSERT INTO CART VALUES(101,'BIRTHDAY','CAKE',2);
INSERT INTO CART VALUES(102,'ART SUPPLIES','PENCIL',3);
INSERT INTO CART VALUES(103,'BBQ','HOT DOGS',4);
INSERT INTO CART VALUES(104,'AUTO PARTS','HUBCAP',5);
INSERT INTO CART VALUES(105,'GROCERIES','MILK,BREAD',2);

--Sample data for products
INSERT INTO PRODUCT VALUES(1000,'APPLES',NULL,'OAK FARMS');
INSERT INTO PRODUCT VALUES(1001,'BREAD',NULL,'OAK FARMS');
INSERT INTO PRODUCT VALUES(1002,'CAKE',NULL,'PARTY INC');
INSERT INTO PRODUCT VALUES(1003,'PENCIL',NULL,'ART INC');
INSERT INTO PRODUCT VALUES(1004,'HOT DOGS',NULL,'ANIMALS INC');
INSERT INTO PRODUCT VALUES(1005,'HUBCAP',NULL,'TOYOTA');
INSERT INTO PRODUCT VALUES(1006,'MILK',NULL,'ANIMALS INC');

--Sample data for orders
INSERT INTO ORDERS VALUES(100,'2020-05-20','DELIVERY','2020-05-21',7);
INSERT INTO ORDERS VALUES(101,'2020-05-22','PICKUP','2020-05-23',10);
INSERT INTO ORDERS VALUES(102,'2020-05-15','DELIVERY','2020-05-16',1);
INSERT INTO ORDERS VALUES(103,'2020-05-25','PICKUP','2020-05-26',5);
INSERT INTO ORDERS VALUES(104,'2020-05-29','DELIVERY','2020-05-30',50);
INSERT INTO ORDERS VALUES(105,'2020-05-12','DELIVERY','2020-05-13',6);
INSERT INTO ORDERS VALUES(106,'2020-06-12','DELIVERY',NULL,20);
INSERT INTO ORDERS VALUES(107,'2020-06-15','PICKUP',NULL,200);
