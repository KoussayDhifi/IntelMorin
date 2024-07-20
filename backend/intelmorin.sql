-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Mar 22, 2024 at 07:57 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `intelmorin`
--

-- --------------------------------------------------------

--
-- Table structure for table `acctstudent`
--

CREATE TABLE `acctstudent` (
  `STUD` int(11) NOT NULL,
  `EMAILS` varchar(254) NOT NULL,
  `PASSWORDS` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `accttutor`
--

CREATE TABLE `accttutor` (
  `TUT` int(11) NOT NULL,
  `EMAILT` varchar(254) NOT NULL,
  `PASSWORDT` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `classroom`
--

CREATE TABLE `classroom` (
  `ID_CLASSROOM` int(11) NOT NULL,
  `LABELCLASS` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `groupe`
--

CREATE TABLE `groupe` (
  `ID_GROUP` int(11) NOT NULL,
  `ID_TU` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `level`
--

CREATE TABLE `level` (
  `ID_LEVEL` int(11) NOT NULL,
  `LABEL_LEVEL` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `ID_NOT` int(11) NOT NULL,
  `ID_ST` int(11) DEFAULT NULL,
  `CONTENT` varchar(500) NOT NULL,
  `DATET` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pack`
--

CREATE TABLE `pack` (
  `ID_PACK` int(11) NOT NULL,
  `PACKLABEL` varchar(30) NOT NULL,
  `LEVELPACK` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `ID_PAYS` int(11) NOT NULL,
  `IDST` int(11) DEFAULT NULL,
  `MONTHS` int(11) NOT NULL,
  `YEARS` int(11) NOT NULL,
  `PAYEDS` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `paymentt`
--

CREATE TABLE `paymentt` (
  `ID_PAYT` int(11) NOT NULL,
  `ID_T` int(11) DEFAULT NULL,
  `MONTHT` int(11) NOT NULL,
  `YEART` int(11) NOT NULL,
  `FEE` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `schedulee`
--

CREATE TABLE `schedulee` (
  `ID_G` int(11) NOT NULL,
  `STARTH` time NOT NULL,
  `ENDH` time NOT NULL,
  `ID_C` int(11) DEFAULT NULL,
  `DATES` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `ID_STUDENT` int(11) NOT NULL,
  `F_NAMES` varchar(30) NOT NULL,
  `L_NAMES` varchar(30) NOT NULL,
  `BIRTHDATES` date DEFAULT NULL,
  `TELS` varchar(8) NOT NULL,
  `TELPARENT` varchar(8) NOT NULL,
  `LEVELS` int(11) DEFAULT NULL,
  `SCHOOLS` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `studenttutor`
--

CREATE TABLE `studenttutor` (
  `IDSTUDT` int(11) NOT NULL,
  `STUDI` int(11) DEFAULT NULL,
  `TUTI` int(11) DEFAULT NULL,
  `FEE` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `ID_SUBJ` int(11) NOT NULL,
  `LABELSUBJ` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `subjectpack`
--

CREATE TABLE `subjectpack` (
  `SUBJI` int(11) NOT NULL,
  `PACKI` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tutor`
--

CREATE TABLE `tutor` (
  `ID_TUTOR` int(11) NOT NULL,
  `CINT` varchar(8) DEFAULT NULL,
  `F_NAMET` varchar(30) NOT NULL,
  `L_NAMET` varchar(30) NOT NULL,
  `BIRTHDATET` date DEFAULT NULL,
  `TEL` varchar(8) NOT NULL,
  `SCHOOL` varchar(30) DEFAULT NULL,
  `SUBJ` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `acctstudent`
--
ALTER TABLE `acctstudent`
  ADD PRIMARY KEY (`STUD`,`EMAILS`,`PASSWORDS`);

--
-- Indexes for table `accttutor`
--
ALTER TABLE `accttutor`
  ADD PRIMARY KEY (`TUT`,`EMAILT`,`PASSWORDT`);

--
-- Indexes for table `classroom`
--
ALTER TABLE `classroom`
  ADD PRIMARY KEY (`ID_CLASSROOM`);

--
-- Indexes for table `groupe`
--
ALTER TABLE `groupe`
  ADD PRIMARY KEY (`ID_GROUP`);

--
-- Indexes for table `level`
--
ALTER TABLE `level`
  ADD PRIMARY KEY (`ID_LEVEL`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`ID_NOT`);

--
-- Indexes for table `pack`
--
ALTER TABLE `pack`
  ADD PRIMARY KEY (`ID_PACK`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`ID_PAYS`);

--
-- Indexes for table `paymentt`
--
ALTER TABLE `paymentt`
  ADD PRIMARY KEY (`ID_PAYT`);

--
-- Indexes for table `schedulee`
--
ALTER TABLE `schedulee`
  ADD PRIMARY KEY (`ID_G`,`STARTH`,`ENDH`,`DATES`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`ID_STUDENT`);

--
-- Indexes for table `studenttutor`
--
ALTER TABLE `studenttutor`
  ADD PRIMARY KEY (`IDSTUDT`);

--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`ID_SUBJ`);

--
-- Indexes for table `subjectpack`
--
ALTER TABLE `subjectpack`
  ADD PRIMARY KEY (`SUBJI`,`PACKI`);

--
-- Indexes for table `tutor`
--
ALTER TABLE `tutor`
  ADD PRIMARY KEY (`ID_TUTOR`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `classroom`
--
ALTER TABLE `classroom`
  MODIFY `ID_CLASSROOM` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `groupe`
--
ALTER TABLE `groupe`
  MODIFY `ID_GROUP` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `level`
--
ALTER TABLE `level`
  MODIFY `ID_LEVEL` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `ID_NOT` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pack`
--
ALTER TABLE `pack`
  MODIFY `ID_PACK` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `ID_PAYS` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `paymentt`
--
ALTER TABLE `paymentt`
  MODIFY `ID_PAYT` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `ID_STUDENT` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `studenttutor`
--
ALTER TABLE `studenttutor`
  MODIFY `IDSTUDT` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subject`
--
ALTER TABLE `subject`
  MODIFY `ID_SUBJ` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tutor`
--
ALTER TABLE `tutor`
  MODIFY `ID_TUTOR` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;



/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
