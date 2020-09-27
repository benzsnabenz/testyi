-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 27, 2020 at 02:32 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `product_des` text COLLATE utf8_unicode_ci NOT NULL,
  `product_img` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `qty` int(11) NOT NULL,
  `create_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `product_des`, `product_img`, `qty`, `create_date`) VALUES
(1, 'Hormone Healthy Plus', 'An appropriate program for diagnosing adrenal fatigue...', 'image16.png', 1, '2020-09-27 11:47:42'),
(2, 'Hormone Healthy Plus', 'An appropriate program for diagnosing adrenal fatigue...', 'image1.png', 1, '2020-09-27 11:49:02'),
(3, 'Colon Hydrotherapy', 'Colon Hydrotherapy is a natural, safe and easy pro...', 'image5.png', 1, '2020-09-27 11:49:21'),
(4, 'Comprehensive Program (Male)', 'Bumrungrad offers Health Check-up & Screening servi...', 'image2.png', 1, '2020-09-27 11:49:31'),
(5, 'Egg Freezing Cycle Package', 'An appropriate program for diagnosing adrenal fatigue...', 'image3.png', 1, '2020-09-27 11:49:35'),
(6, 'myDNA Medication test', 'PGx panel - myDNA Medication test is a pharmacogenomics...', 'image3.png', 1, '2020-09-27 11:50:05'),
(7, 'Hormone Healthy Plus', 'An appropriate program for diagnosing adrenal fatigue...', 'image4.png', 1, '2020-09-27 11:50:07'),
(8, 'Hormone Healthy Plus', 'An appropriate program for diagnosing adrenal fatigue...', 'image4.png', 1, '2020-09-27 11:50:10');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `picture` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_id`, `username`, `picture`) VALUES
(1, '123', 'test', '123'),
(2, '1654986755', '<{BenzsaN}>', 'https://profile.line-scdn.net/0hwDVa6ZLpKGtrGAAyikdXPFddJgYcNi4jEy0wWBtMdghEK29pX3xiCBxNJFwRfTw7VypiBR4cdV1F');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
