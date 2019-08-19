SET NAMES UTF8;
USE   project;
CREATE TABLE `product_list` (
  `lid` int(11) PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(128) ,
  `subtitle` varchar(128) ,
  `price` decimal(10,2) ,
  `img_url` varchar(255),
  `uid` int(11) 
)  DEFAULT CHARSET=utf8;



INSERT INTO `product_list` (`lid`, `title`, `subtitle`, `price`, `img_url`, `uid`) VALUES
(1, 'THE BEAST', '豆豆猫水晶球BlingBing口红礼盒 2支装', '999.00', 'images/product/1.1.jpg', 1),
(2, 'THE BEAST', '“包裹爱意”巨型粉色豆豆猫玩偶', '2999.00', 'images/product/1.2.jpg', 1),
(3, 'THE BEAST', '豆豆猫复古音乐永生花皮箱-小号', '1314.00', 'images/product/1.3.jpg', 1),
(4, 'JEWELVARY', '很高兴遇见你”项链-豆豆猫系列水晶球礼盒', '2699.00', 'images/product/2.1.jpg', 1),
(5, 'JEWELVARY', '密码系列-摩天轮的幸福"项链豆豆猫水晶球礼盒', '3999.00', 'images/product/2.2.jpg', 1),
(6, 'JEWELVARY', '“锁住你的心”18K金钻石项链豆豆猫系列八音盒礼盒', '13580.00', 'images/product/2.3.jpg', 1);