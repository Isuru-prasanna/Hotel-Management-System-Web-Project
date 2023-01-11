-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 14, 2022 at 04:17 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotel`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `name` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `password` varchar(10) NOT NULL,
  `address` varchar(200) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`name`, `email`, `phone`, `password`, `address`, `id`) VALUES
('isuru', 'admin@gmail.com', '0125879055', 'admin', 'kalutara', 1);

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `name` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `password` varchar(12) NOT NULL,
  `address` varchar(150) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`name`, `email`, `phone`, `password`, `address`, `id`) VALUES
('Santha Kumara', 'santha@gmail.com', '1234568540', '1234', 'Homagama', 1);

-- --------------------------------------------------------

--
-- Table structure for table `food`
--

CREATE TABLE `food` (
  `img` varchar(150) NOT NULL,
  `name` varchar(150) NOT NULL,
  `price` varchar(100) NOT NULL,
  `details` varchar(350) NOT NULL,
  `button` varchar(100) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `food`
--

INSERT INTO `food` (`img`, `name`, `price`, `details`, `button`, `id`) VALUES
('momo.jpg', 'Chicken Steam Momo', 'Rs.750', ' Made with Italian Sauce, Chicken, and organice vegetables.', 'Order Now', 1),
('fried-rice-egg-topping-shrimp-spoon-fork-plate-white-85316235.jpg', 'fride rise', 'Rs.750', 'To me it adds a lot more flavor and helps to brown the rice.', 'Order Now', 2),
('dsc00115.jpg', 'Hopper', 'Rs.500', ' Standard hoppers are typical Sri Lankan bowl-shaped or funnel-shaped pancakes.', 'Order Now', 3),
('menu-pizza.jpg', 'pizza', 'Rs.900', ' Made with Italian Sauce, Chicken, and organice vegetables.', 'Order Now', 4),
('FoodRise.jpeg', 'Rice and Curry', 'Rs.600', ' There are many smells of Sri Lankan food: cinnamon, pepper, cardamom, coconut, papaya, mango, pineapple, pungent dried maldive fish and tea.', 'Order Now', 5),
('lily.jpg', 'Sea Food', 'Rs.700', ' Made with Sri Lanka Sauce, Fish, and organice vegetables.', 'Order Now', 6);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `name` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `picks` varchar(100) NOT NULL,
  `time` date NOT NULL,
  `price` varchar(25) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`name`, `email`, `picks`, `time`, `price`, `id`) VALUES
('Hopper', 'isuruprasanna123@gmail.com', '1', '0000-00-00', 'Rs.500', 8);

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `Name` varchar(100) NOT NULL,
  `Phone` varchar(10) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Password` varchar(20) NOT NULL,
  `Address` varchar(100) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`Name`, `Phone`, `Email`, `Password`, `Address`, `id`) VALUES
('Isuru Aluthge', '0712526066', 'isuruprasanna123@gmail.com', '1234', '213/4 Panvila,Kaballagoda', 1);

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `img` varchar(300) NOT NULL,
  `name` varchar(150) NOT NULL,
  `details` varchar(400) NOT NULL,
  `bed` varchar(150) NOT NULL,
  `air` varchar(100) NOT NULL,
  `wifi` varchar(100) NOT NULL,
  `bar` varchar(100) NOT NULL,
  `bath` varchar(100) NOT NULL,
  `tv` varchar(100) NOT NULL,
  `button` varchar(100) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`img`, `name`, `details`, `bed`, `air`, `wifi`, `bar`, `bath`, `tv`, `button`, `id`) VALUES
('DELUXEy.jpg', 'DELUXE', ' Plush and charmingly furnished to ensure a comfortable stay and provide uncompromised convenience', 'KING-SIZED BED OR TWIN BEDS', 'AIR Condition', 'WiFi', '', 'bath Room', 'Cable Tv', 'Order Now', 1),
('Lake.jpg', 'Lake View Cottage', ' offering guests a peaceful setting amidst a forest-covered landscape.Reflecting a timeless design, the resort was built to emulate a traditional Sri Lankan Forest-style Settlement under a cooling canopy of tropical trees..', 'KING-SIZED BED', '', '', '', 'bath Room', '', 'Order Now', 2),
('Standed.jpg', 'STANDARD', ' Enjoy simple elegance while being cosseted and pampered with all the comfort we have to offer. ', 'KING-SIZED BED OR TWIN BEDS', 'AIR Condition', 'WiFi', 'Mini Bar', 'bath Room', 'Cable Tv', 'Order Now', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `food`
--
ALTER TABLE `food`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `food`
--
ALTER TABLE `food`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `room`
--
ALTER TABLE `room`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
