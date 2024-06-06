-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 06, 2024 at 04:00 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `auctiondb`
--

-- --------------------------------------------------------

--
-- Table structure for table `auctionuser`
--

CREATE TABLE IF NOT EXISTS `auctionuser` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `uname` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `cpassword` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `auctionuser`
--

INSERT INTO `auctionuser` (`id`, `uname`, `password`, `cpassword`, `email`) VALUES
(1, '', '', '', ''),
(2, '', '', '', ''),
(3, '', '', '', ''),
(4, '', '', '', ''),
(5, '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `bids`
--

CREATE TABLE IF NOT EXISTS `bids` (
  `bid_id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `bidamt` int(11) NOT NULL,
  PRIMARY KEY (`bid_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `bids`
--

INSERT INTO `bids` (`bid_id`, `pid`, `uid`, `bidamt`) VALUES
(1, 1, 6, 700),
(2, 1, 6, 700),
(3, 1, 6, 600),
(4, 1, 6, 800),
(5, 5, 6, 800),
(6, 5, 6, 850),
(7, 12, 30, 2500),
(8, 1, 23, 400),
(9, 2, 27, 700),
(10, 5, 27, 500),
(11, 13, 6, 7000),
(12, 13, 27, 6000);

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE IF NOT EXISTS `contact` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `email` text NOT NULL,
  `message` text NOT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`cid`, `email`, `message`) VALUES
(1, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `productinfo`
--

CREATE TABLE IF NOT EXISTS `productinfo` (
  `pid` int(11) NOT NULL AUTO_INCREMENT,
  `pname` text NOT NULL,
  `start_price` int(11) NOT NULL,
  `Category` text NOT NULL,
  `delivery_time` text NOT NULL,
  `shipping` text NOT NULL,
  `sdate` date NOT NULL,
  `edate` date NOT NULL,
  `prodimg` text NOT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

--
-- Dumping data for table `productinfo`
--

INSERT INTO `productinfo` (`pid`, `pname`, `start_price`, `Category`, `delivery_time`, `shipping`, `sdate`, `edate`, `prodimg`) VALUES
(1, 'Zaveri Ring for women', 2000, 'Jewellery', '3 Days', '500', '2022-09-15', '2022-09-20', 'ring1.jpg'),
(2, 'Heart Shape Necklace', 600, 'Jewellery', '5 days', '50', '2022-09-15', '2022-09-29', 'necklace1.jpg'),
(5, 'Men''s watch', 500, 'Watches', '5 days', '50 ', '2022-09-17', '2022-09-24', 'watch1.jpg'),
(6, 'Analog Watch', 500, 'Electronics', '5 days', '50', '2022-09-15', '2022-09-23', 'watch2.jpg'),
(8, 'Fastrack Analog Men''s Watch', 500, 'Watches', '5 days', '50 ', '2022-09-16', '2022-09-30', 'watch4.jpg'),
(9, 'Pearl Necklace Set', 3000, 'Jewellery', '3 Days', '200', '2022-09-09', '2022-09-23', 'PearlNecklaceSet.jpg'),
(10, 'Noise ColorFit Smart Watch', 500, 'Watches', '2 Days', '100', '2022-09-16', '2022-09-24', 'NoiseColorFitSmartWatch.jpg'),
(12, 'Crystal & Pearl Earrings', 2000, 'Jewellery', '5 days', '30', '2022-09-14', '2022-09-15', 'CrystalPearlEarrings.jpg'),
(13, 'Redmi 9 Active', 5000, 'Mobile and Laptop', '5 days', '500', '2022-11-11', '2022-11-12', 'phone1.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `usersignin`
--

CREATE TABLE IF NOT EXISTS `usersignin` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `fname` text NOT NULL,
  `lname` text NOT NULL,
  `country` text NOT NULL,
  `mobile` text NOT NULL,
  `uname` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `cpassword` text NOT NULL,
  `pfp` text NOT NULL,
  `role` text NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=32 ;

--
-- Dumping data for table `usersignin`
--

INSERT INTO `usersignin` (`uid`, `fname`, `lname`, `country`, `mobile`, `uname`, `email`, `password`, `cpassword`, `pfp`, `role`) VALUES
(6, 'Kashish', 'Verma', 'India', '7990653483', 'Kashish', 'kashishverma@gmail.com', 'kashish123', 'kashish123', 'pfp1.jpg', 'merchant'),
(15, 'Harsh', 'Verma', 'India', '9484487391', 'Harsh', 'harshverma584045@gmail.com', '1234', '1234', 'pfp2.jpg', 'merchant'),
(25, 'Nisha', 'Pillai', 'India', '9434973545', 'Nisha', 'nishapillai@gmail.com', '1234', '1234', 'jewellery2.jpg', ''),
(27, 'Diya', 'Patel', 'India', '9765653434', 'Diya', 'diyapatel@gmail.com', '1234', '1234', 'pfp3.jpg', 'merchant'),
(29, 'Riya', 'Choudhary', 'UK', '965456576', 'Riya', 'riya@gmail.com', 'qw', 'qw', 'pfp4.jpg', 'merchant'),
(30, 'Rahil', 'Poladiya', 'US', '9836466738', 'Rahil123', 'rahilpoladiya@gmail.com', 'rahil123', 'rahil123', 'Acer One 14 Laptop.jpg', ''),
(31, 'dhruvi', 'pro', 'india', '7990653483', 'dhruvi', 'dhruvi123@gmail.com', 'qwerty123', 'qwerty123', 'singin.jpg', 'merchant');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
