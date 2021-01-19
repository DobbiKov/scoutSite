-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Дек 12 2020 г., 16:16
-- Версия сервера: 5.5.25
-- Версия PHP: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `sdsite`
--

-- --------------------------------------------------------

--
-- Структура таблицы `docslevelposts`
--

CREATE TABLE IF NOT EXISTS `docslevelposts` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `DocsLevelId` bigint(20) NOT NULL,
  `WriterId` bigint(20) NOT NULL,
  `Name` longtext CHARACTER SET utf8mb4,
  `Text` longtext CHARACTER SET utf8mb4,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Дамп данных таблицы `docslevelposts`
--

INSERT INTO `docslevelposts` (`Id`, `DocsLevelId`, `WriterId`, `Name`, `Text`) VALUES
(3, 2, 1, 'Умею', 'Знаю'),
(5, 2, 1, 'выф', 'выф'),
(7, 1, 1, 'sadasdasd asdasd okasd asdasdas asdasdsfs asdddasfadf adsffasa', 'ok sadasdasd asdasdasd asdasdas asdasdsfs asdddasfadf adsffasa'),
(8, 1, 1, 'hg', 'hjgjuihkgjhcgh hghcghj');

-- --------------------------------------------------------

--
-- Структура таблицы `docslevels`
--

CREATE TABLE IF NOT EXISTS `docslevels` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Name` longtext CHARACTER SET utf8mb4,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Дамп данных таблицы `docslevels`
--

INSERT INTO `docslevels` (`Id`, `Name`) VALUES
(1, 'Скаутский Минимум'),
(2, 'Умения'),
(3, 'Чтото');

-- --------------------------------------------------------

--
-- Структура таблицы `events`
--

CREATE TABLE IF NOT EXISTS `events` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Name` longtext CHARACTER SET utf8mb4,
  `Text` longtext CHARACTER SET utf8mb4,
  `Type` longtext CHARACTER SET utf8mb4,
  `Date` longtext CHARACTER SET utf8mb4,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=15 ;

--
-- Дамп данных таблицы `events`
--

INSERT INTO `events` (`Id`, `Name`, `Text`, `Type`, `Date`) VALUES
(6, 'dsa', 'dsa', 'dsa', '10.10.2020'),
(7, 'last', 'laset', 'сбор', '02.10.2020'),
(8, 'C<jh jnhzlf', 'dsadsa', 'asdas', '06.10.2020'),
(9, 'test', 'test', 'test', '19.10.2020'),
(10, 'dsacv asdas asdasdasd asdasdasd ', 'dsadsadsa asdasdas sadasdasd asdasd', ' sdaasdasd asdasdas asdasdasdsa sadasdasdas asdas', '19.10.2020'),
(11, 'уфы', 'йцуйцу', 'йцу', '22.01.2021'),
(12, 'ewqeqw', 'wqe', 'weq', '23.01.2021'),
(14, 'вфы фвыфыв фывфывфы фывфывфы фывфывфыв фывфывфы вфывфывфыв фывфывфывфы вфывфыфв ывфвыв фывфывфывфы', 'вфы фвыфыв фывфывфы фывфывфы фывфывфыв фывфывфы вфывфывфыв фывфывфывфы вфывфыфв ывфвыв фывфывфывфы вавыффыв фывфыв фывфыв фывфыв фывфывфы фывфывфы фывфывфыв фывфыв ффывфы фывфыв фывфыв фывфыв', 'вфы фвыфыв фывфывфы фывфывфы фывфывфыв фывфывфы вфывфывфыв фывфывфывфы вфывфыфв ывфвыв фывфывфывфы', '12.12.2020');

-- --------------------------------------------------------

--
-- Структура таблицы `posts`
--

CREATE TABLE IF NOT EXISTS `posts` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `WriterId` bigint(20) NOT NULL,
  `Title` longtext CHARACTER SET utf8mb4,
  `ShortText` longtext CHARACTER SET utf8mb4,
  `Text` longtext CHARACTER SET utf8mb4,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Дамп данных таблицы `posts`
--

INSERT INTO `posts` (`Id`, `WriterId`, `Title`, `ShortText`, `Text`) VALUES
(2, 1, 'ewq', 'ewqewqewq', 'ewqewqewqewqeqw'),
(3, 1, 'sadasd', 'dasdsa', 'dsadsa'),
(4, 1, 'test', 'test', 'ewqweqewq top test\n\n\n\nhahahah\n\n\nzhopa');

-- --------------------------------------------------------

--
-- Структура таблицы `roles`
--

CREATE TABLE IF NOT EXISTS `roles` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` longtext CHARACTER SET utf8mb4,
  `CanAcceptUsers` tinyint(1) NOT NULL,
  `CanManageEvent` tinyint(1) NOT NULL,
  `IsAdmin` tinyint(1) NOT NULL,
  `CanSetSkill` tinyint(1) NOT NULL,
  `CanSetBadge` tinyint(1) NOT NULL,
  `CanSetScoutMinimum` tinyint(1) NOT NULL,
  `CanEditUsers` tinyint(1) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Дамп данных таблицы `roles`
--

INSERT INTO `roles` (`Id`, `Name`, `CanAcceptUsers`, `CanManageEvent`, `IsAdmin`, `CanSetSkill`, `CanSetBadge`, `CanSetScoutMinimum`, `CanEditUsers`) VALUES
(1, 'Скаут', 0, 0, 0, 0, 0, 0, 0),
(2, 'Скаут Лидер', 0, 1, 1, 1, 1, 1, 1),
(3, 'Модератор', 1, 1, 1, 1, 1, 1, 1),
(4, 'Администратор', 1, 1, 1, 1, 1, 1, 1),
(5, 'Системный Администратор', 1, 1, 1, 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `UserName` longtext CHARACTER SET utf8mb4,
  `FirstName` longtext CHARACTER SET utf8mb4,
  `LastName` longtext CHARACTER SET utf8mb4,
  `ForestName` longtext CHARACTER SET utf8mb4,
  `Password` longtext CHARACTER SET utf8mb4,
  `SiteRoleId` int(11) NOT NULL,
  `JWTToken` longtext CHARACTER SET utf8mb4,
  `HomeAdress` longtext CHARACTER SET utf8mb4,
  `School` longtext CHARACTER SET utf8mb4,
  `Class` int(11) NOT NULL,
  `PhoneNumber` longtext CHARACTER SET utf8mb4,
  `Passport` longtext CHARACTER SET utf8mb4,
  `LastEvent` longtext CHARACTER SET utf8mb4,
  `LastSignIn` longtext CHARACTER SET utf8mb4,
  `TelegramId` longtext CHARACTER SET utf8mb4,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`Id`, `UserName`, `FirstName`, `LastName`, `ForestName`, `Password`, `SiteRoleId`, `JWTToken`, `HomeAdress`, `School`, `Class`, `PhoneNumber`, `Passport`, `LastEvent`, `LastSignIn`, `TelegramId`) VALUES
(1, 'sa', 'системный', 'Администратор', 'System Admin', '8C6976E5B5410415BDE908BD4DEE15DFB167A9C873FC4BB8A81F6F2AB448A918', 5, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhIiwic3ViIjoiMSIsInJvbGUiOiI1IiwiZXhwIjoxNjA3NzIzMDE5LCJpc3MiOiJhdXRoU2VydmVyIiwiYXVkIjoicmVzb3VyY2VTZXJ2ZXIifQ.GlE04e6Owp0oSoJPtSJbOuI5ro0ZFhSOxHOyd75Nz78', 'pravoberezhna', 'n91', 9, '=38', '45678', '19.10.2020', '11.12.2020 23:02:48', '716720991'),
(3, 'tester', 'tester', 'tester', 'tester', '9BBA5C53A0545E0C80184B946153C9F58387E3BD1D4EE35740F29AC2E718B019', 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhIiwic3ViIjoiMSIsInJvbGUiOiI1IiwiZXhwIjoxNjAxNzEyMjc3LCJpc3MiOiJhdXRoU2VydmVyIiwiYXVkIjoicmVzb3VyY2VTZXJ2ZXIifQ.SMXbQNc5JOlnBHFIOy98A2QffdN_VS4aVUhayUeXWZ0', NULL, NULL, 0, NULL, NULL, '02.10.2020', NULL, NULL),
(4, 'dobbikov@gmail.com', 'Егор', 'Коротенко', 'Орангутанг', '88E3ACF1FA2323FACCD8AA7109194A2938BC422D7B8A5566EB445767D603A4CD', 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhIiwic3ViIjoiMSIsInJvbGUiOiI1IiwiZXhwIjoxNjA3NTMxMTAxLCJpc3MiOiJhdXRoU2VydmVyIiwiYXVkIjoicmVzb3VyY2VTZXJ2ZXIifQ.xx20L5wC5oQHtJT1QUw1PS-Nfw1k7d7x0If8gjbGI28', NULL, NULL, 0, NULL, NULL, '19.10.2020', NULL, NULL),
(5, 'dvsahjjfokgjjkl;''sd', 'hhjkjlhvghjkj', 'bhkjlohkgjvhjgki', 'hkgjvhjhkjljhvcbhj', 'EF797C8118F02DFB649607DD5D3F8C7623048C9C063D532CC95C5ED7A898A64F', 1, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `userscoutminimums`
--

CREATE TABLE IF NOT EXISTS `userscoutminimums` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NOT NULL,
  `iScout1` tinyint(1) NOT NULL,
  `iScout2` tinyint(1) NOT NULL,
  `iScout3` tinyint(1) NOT NULL,
  `iScout4` tinyint(1) NOT NULL,
  `iScout5` tinyint(1) NOT NULL,
  `iScout6` tinyint(1) NOT NULL,
  `iScout7` tinyint(1) NOT NULL,
  `iScout8` tinyint(1) NOT NULL,
  `iScout9` tinyint(1) NOT NULL,
  `iScout10` tinyint(1) NOT NULL,
  `iScout11` tinyint(1) NOT NULL,
  `iScout12` tinyint(1) NOT NULL,
  `iScout13` tinyint(1) NOT NULL,
  `natureLife1` tinyint(1) NOT NULL,
  `natureLife2` tinyint(1) NOT NULL,
  `natureLife3` tinyint(1) NOT NULL,
  `natureLife4` tinyint(1) NOT NULL,
  `natureLife5` tinyint(1) NOT NULL,
  `natureLife6` tinyint(1) NOT NULL,
  `natureLife7` tinyint(1) NOT NULL,
  `natureLife8` tinyint(1) NOT NULL,
  `natureLife9` tinyint(1) NOT NULL,
  `natureLife10` tinyint(1) NOT NULL,
  `natureLife11` tinyint(1) NOT NULL,
  `natureLife12` tinyint(1) NOT NULL,
  `natureLife13` tinyint(1) NOT NULL,
  `natureLife14` tinyint(1) NOT NULL,
  `natureLife15` tinyint(1) NOT NULL,
  `natureLife16` tinyint(1) NOT NULL,
  `lifeInSociety1` tinyint(1) NOT NULL,
  `lifeInSociety2` tinyint(1) NOT NULL,
  `lifeInSociety3` tinyint(1) NOT NULL,
  `lifeInSociety4` tinyint(1) NOT NULL,
  `lifeInSociety5` tinyint(1) NOT NULL,
  `lifeInSociety6` tinyint(1) NOT NULL,
  `lifeInSociety7` tinyint(1) NOT NULL,
  `lifeInSociety8` tinyint(1) NOT NULL,
  `iGood1` tinyint(1) NOT NULL,
  `iGood2` tinyint(1) NOT NULL,
  `iGood3` tinyint(1) NOT NULL,
  `iGood4` tinyint(1) NOT NULL,
  `iGood5` tinyint(1) NOT NULL,
  `iGood6` tinyint(1) NOT NULL,
  `iGood7` tinyint(1) NOT NULL,
  `iGood8` tinyint(1) NOT NULL,
  `iGood9` tinyint(1) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Дамп данных таблицы `userscoutminimums`
--

INSERT INTO `userscoutminimums` (`Id`, `UserId`, `iScout1`, `iScout2`, `iScout3`, `iScout4`, `iScout5`, `iScout6`, `iScout7`, `iScout8`, `iScout9`, `iScout10`, `iScout11`, `iScout12`, `iScout13`, `natureLife1`, `natureLife2`, `natureLife3`, `natureLife4`, `natureLife5`, `natureLife6`, `natureLife7`, `natureLife8`, `natureLife9`, `natureLife10`, `natureLife11`, `natureLife12`, `natureLife13`, `natureLife14`, `natureLife15`, `natureLife16`, `lifeInSociety1`, `lifeInSociety2`, `lifeInSociety3`, `lifeInSociety4`, `lifeInSociety5`, `lifeInSociety6`, `lifeInSociety7`, `lifeInSociety8`, `iGood1`, `iGood2`, `iGood3`, `iGood4`, `iGood5`, `iGood6`, `iGood7`, `iGood8`, `iGood9`) VALUES
(1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(2, 3, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0),
(4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `usersrequests`
--

CREATE TABLE IF NOT EXISTS `usersrequests` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserName` longtext CHARACTER SET utf8mb4,
  `Password` longtext CHARACTER SET utf8mb4,
  `FirstName` longtext CHARACTER SET utf8mb4,
  `LastName` longtext CHARACTER SET utf8mb4,
  `ForestName` longtext CHARACTER SET utf8mb4,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Дамп данных таблицы `usersrequests`
--

INSERT INTO `usersrequests` (`Id`, `UserName`, `Password`, `FirstName`, `LastName`, `ForestName`) VALUES
(2, 'dsadsadasdasdas', 'EF797C8118F02DFB649607DD5D3F8C7623048C9C063D532CC95C5ED7A898A64F', 'asddsadasadsdsadasdasd', 'asdasdadsadsads', 'asdasdadsdasads'),
(3, 'asadfaCXJUHGJK', 'EF797C8118F02DFB649607DD5D3F8C7623048C9C063D532CC95C5ED7A898A64F', 'HGFjhgf', 'hgfghjfdhjfg', 'gfhdfghjgfdh'),
(5, 'ljhugjhjjoihkjgjhj', 'EF797C8118F02DFB649607DD5D3F8C7623048C9C063D532CC95C5ED7A898A64F', 'l;jklbmnklkn,bmn,k', ';lk;nkklkl;jbmjkl', 'llmkl;''kjbmjkl;');

-- --------------------------------------------------------

--
-- Структура таблицы `__efmigrationshistory`
--

CREATE TABLE IF NOT EXISTS `__efmigrationshistory` (
  `MigrationId` varchar(95) NOT NULL,
  `ProductVersion` varchar(32) NOT NULL,
  PRIMARY KEY (`MigrationId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `__efmigrationshistory`
--

INSERT INTO `__efmigrationshistory` (`MigrationId`, `ProductVersion`) VALUES
('20200927150038_Init1', '3.1.8'),
('20200927173343_Init3', '3.1.8'),
('20200927180931_Init4', '3.1.8'),
('20200928144013_Init6', '3.1.8'),
('20201001141616_Init5', '3.1.8');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
