-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 14, 2019 at 09:24 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sugeco-cebu_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `conusreg_tb`
--

CREATE TABLE `conusreg_tb` (
  `conusreg_id` int(11) NOT NULL,
  `conusreg_fname` varchar(255) NOT NULL,
  `conusreg_lname` varchar(255) NOT NULL,
  `conusreg_number` varchar(30) NOT NULL,
  `conusreg_email` varchar(255) NOT NULL,
  `conusreg_message` text NOT NULL,
  `conusreg_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `conusreg_tb`
--

INSERT INTO `conusreg_tb` (`conusreg_id`, `conusreg_fname`, `conusreg_lname`, `conusreg_number`, `conusreg_email`, `conusreg_message`, `conusreg_date`) VALUES
(28, 'fname', 'lname', '77777777777', 'email@gmail.com', 'my message', '2019-03-14 15:24:29'),
(29, 'fname', 'lname', '77777777777', 'email@gmail.com', 'asdfsdf', '2019-03-14 15:46:11'),
(30, 'fname', 'lname', '77777777777', 'email@gmail.com', 'The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog.', '2019-03-14 16:17:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `conusreg_tb`
--
ALTER TABLE `conusreg_tb`
  ADD PRIMARY KEY (`conusreg_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `conusreg_tb`
--
ALTER TABLE `conusreg_tb`
  MODIFY `conusreg_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
