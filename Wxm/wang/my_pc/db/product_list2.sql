CREATE TABLE `product_list2` (
  `lid` int(11) PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(128) ,
  `subtitle` varchar(128) ,
  `price` decimal(10,2) ,
  `img_url` varchar(255) ,
  `uid` int(11) 
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `product_list2` (`lid`, `title`, `subtitle`, `price`, `img_url`, `uid`) VALUES
(1, 'THE BEAST', '豆豆猫水晶球BlingBing口红礼盒 2支装', '999.00', 'images/product2/p2.0.jpg', 1),
(2, 'THE BEAST', '豆豆猫水晶球BlingBing口红礼盒 2支装', '2999.00', 'images/product2/p2.1.jpg', 1),
(3, 'THE BEAST', '密码系列-摩天轮的幸福"项链豆豆猫水晶球礼盒', '1314.00', 'images/product2/p2.3.jpg', 1),
(4, 'JEWELVARY', '密码系列-摩天轮的幸福"项链豆豆猫水晶球礼盒', '2699.00', 'images/product2/p2.4.jpg', 1),
(5, 'JEWELVARY', '“锁住你的心”18K金钻石项链豆豆猫系列八音盒礼盒', '3999.00', 'images/product2/p2.2.jpg', 1),
(6, 'JEWELVARY', '“锁住你的心”18K金钻石项链豆豆猫系列八音盒礼盒', '13580.00', 'images/product2/p2.6.jpg', 1),
(7, 'THE BEAST', '“锁住你的心”18K金钻石项链豆豆猫系列八音盒礼盒', '999.00', 'images/product2/p2.5.jpg', 1),
(8, 'THE BEAST', '“锁住你的心”18K金钻石项链豆豆猫系列八音盒礼盒', '2999.00', 'images/product2/p2.2.jpg', 1),
(9, 'THE BEAST', '豆豆猫水晶球BlingBing口红礼盒 2支装', '1314.00', 'images/product/1.3.jpg', 3),
(10, 'JEWELVARY', '“锁住你的心”18K金钻石项链豆豆猫系列八音盒礼盒', '2699.00', 'images/product2/p2.1.jpg', 1),
(11, 'JEWELVARY', '“锁住你的心”18K金钻石项链豆豆猫系列八音盒礼盒', '3999.00', 'images/product2/p2.2.jpg', 1),
(12, 'JEWELVARY', '密码系列-摩天轮的幸福"项链豆豆猫水晶球礼盒', '13580.00', 'images/product2/p2.3.jpg', 1),
(13, 'ames', 'Barro四足陶瓷盘 small', '2290.00', 'images/product2/ames/1.1.jpg', 2),
(14, 'JEWELVARY', '密码系列-摩天轮的幸福"项链豆豆猫水晶球礼盒', '13580.00', 'images/product2/p2.3.jpg', 1),
(15, 'ames', 'Barro四足陶瓷盘 large', '3490.00', 'images/product2/ames/1.2.jpg', 2),
(16, 'ames', 'Barro四足陶瓷盘 mini', '990.00', 'images/product2/ames/1.3.jpg', 2),
(17, 'ames', 'Barro大肚小口陶瓷花器 mini', '890.00', 'images/product2/ames/2.1.jpg', 2),
(18, 'ames', 'Barro单足陶瓷罐 small', '990.00', 'images/product2/ames/2.2.jpg', 2),
(19, 'ames', 'Barro三足陶瓷罐 large', '990.00', 'images/product2/ames/2.3.jpg', 2);

