-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: ecommerce_music
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `banner`
--

DROP TABLE IF EXISTS `banner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `banner` (
  `id_banner` int(11) NOT NULL AUTO_INCREMENT,
  `nm_banner` varchar(100) NOT NULL,
  `gambar` varchar(250) NOT NULL,
  PRIMARY KEY (`id_banner`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banner`
--

LOCK TABLES `banner` WRITE;
/*!40000 ALTER TABLE `banner` DISABLE KEYS */;
INSERT INTO `banner` VALUES (1,'Fender','1684910464828-1684909975570-fenderbanner3.jpg'),(2,'Gibson','1684910603631-gibsonbanner.jpg'),(3,'Fender','1684910655370-fenderbanner.jpg');
/*!40000 ALTER TABLE `banner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produk`
--

DROP TABLE IF EXISTS `produk`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `produk` (
  `id_produk` int(11) NOT NULL AUTO_INCREMENT,
  `nm_produk` varchar(200) NOT NULL,
  `jenis_produk` varchar(250) NOT NULL,
  `harga_produk` varchar(10) NOT NULL,
  `gambar` varchar(200) NOT NULL,
  PRIMARY KEY (`id_produk`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produk`
--

LOCK TABLES `produk` WRITE;
/*!40000 ALTER TABLE `produk` DISABLE KEYS */;
INSERT INTO `produk` VALUES (14,'Gibson LesPaul Classic Ebony','Body Shape: Les Paul Body Material: Mahogany w/ Maple Top Body Colour: Ebony Black Body Finish: Gloss Nitrocellulose Lacquer Fretboard Material: Rosewood Fretboard Radius: 12\" Scale Length: 24.75\" No. of Frets: 22 Fretboard Inlays: Acrylic Trapezoid ','21000000','1684469911859-gibson lespaul classic ebony.jpg'),(15,'Gibson LesPaul Studio','Number of Strings: 6 Left-/Right-handedRight-handed. Body TypeSolidbody Body ShapeLes Paul Junior Body MaterialMahogany Body FinishGloss Nitrocellulose Lacquer ColorEbony. Neck MaterialMahogany Neck ShapeVintage 50s Neck JointSet Neck Radius12\" Finge','18000000','1684469976936-gibson lespaul studio.jpg'),(19,'Gitar Fender Stratocaster Vintage','Body Shape: Stratocaster® Body Material: Ash Body Finish: Gloss Polyurethane Neck Profile: 1973 \"C\" Fretboard Material: Maple Fretboard Radius: 7.25\" (184.1 mm) Scale Length: 25.5\" (64.77 cm) No. of Frets: 21 Vintage Tall Frets Fretboard Inlays: Whit','23000000','1684733097079-1684463887004-fender strat vintage vault.jpg'),(20,'Fender Startocaster Vintera 50s','Body Shape: Stratocaster® Body Colour: White Blonde Body Material: Ash Body Finish: Gloss Polyester Fretboard Material: Maple Fretboard Radius: 7.25\" (184.1 mm) Scale Length: 25.5\" (648 mm) No. of Frets: 21 Fretboard Inlays: Black Dot Pickups: Vintag','25000000','1684908475600-gitar1strat_vintera_50s.jpg'),(21,'Nirvana Disc','Condition : NEW Sealed, Media : Mint, Cover : Mint, Country : Europe','3000000','1684910734326-nirvana_vinyl.jpg'),(22,'Vinyl','Spesifikasi Product: *Tonearm - Menampilkan merek tonearm RB220 baru yang dikemas dengan terobosan fitur baru. Menggabungkan ultra rendah gesekan, Rega dirancang, dipesan lebih dahulu, nol bantalan baru bermain bola (Patent Pending), terletak di dala','7000000','1684910914827-vinyl1.jpg'),(23,'ByzonStatic Vinyl','Deskripsi ByzinStatic - Vinyl Turntable Player (Pemutar Piringan Hitam)','5000000','1684911136838-vinyl2.jpg');
/*!40000 ALTER TABLE `produk` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `nama` varchar(50) DEFAULT NULL,
  `password` varchar(250) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `no_telp` varchar(15) DEFAULT NULL,
  `role` varchar(50) NOT NULL,
  `gambar` varchar(250) NOT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (16,'Albert','Albertus Agung','$2a$10$lhrErdOMQ6ehYRIwi42iiudAYrRFVSqNd7RNZVx0NN9LDcAX9.ANW','albertus.agung061@gmail.com','+62-85782888918','Admin','1684990463516-albert.jpg'),(17,'Aldi Men','Aldick Fathor Man','$2a$10$ur1BJCz6qJqZaSTVWqKugejRFLQjmsRuPTOqUBRjrnwmXmRsPRsf6','alditm@gmail.com','+62-89538444248','User','1684990520184-1684906291528-aldick.jpg');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-26 19:40:36
