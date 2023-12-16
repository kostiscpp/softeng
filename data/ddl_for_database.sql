-- MySQL Script generated by MySQL Workbench
-- Sat Dec 16 23:10:51 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema softeng
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `softeng` ;

-- -----------------------------------------------------
-- Schema softeng
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `softeng` DEFAULT CHARACTER SET utf8 ;
USE `softeng` ;

-- -----------------------------------------------------
-- Table `softeng`.`professional`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `softeng`.`professional` (
  `professional_id` INT NOT NULL AUTO_INCREMENT,
  `primary_name` VARCHAR(255) NULL,
  `birth_date` DATETIME NULL,
  `death_date` DATETIME NULL,
  `biography` TEXT NULL,
  `image_url` TEXT NULL,
  PRIMARY KEY (`professional_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `softeng`.`media`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `softeng`.`media` (
  `media_id` INT NOT NULL,
  `title_type` VARCHAR(255) NULL,
  `primary_title` VARCHAR(255) NULL,
  `original_title` VARCHAR(255) NULL,
  `is_adult` TINYINT NULL,
  `start_year` INT NULL,
  `end_year` INT NULL,
  `runtime_minutes` INT NULL,
  `summary` TEXT NULL,
  `poster_url` TEXT NULL COMMENT 'this is a link to the place where it\'s stored, we can change it to blob if we want to store the binary in the database',
  `rating` DECIMAL(1,1) NULL,
  `no_of_ratings` INT NULL,
  PRIMARY KEY (`media_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `softeng`.`genre`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `softeng`.`genre` (
  `genre_id` INT NOT NULL AUTO_INCREMENT,
  `genre_name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`genre_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `softeng`.`belongs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `softeng`.`belongs` (
  `genre_id` INT NOT NULL,
  `media_id` INT NOT NULL,
  PRIMARY KEY (`genre_id`, `media_id`),
  INDEX `fk_genre_has_media_media1_idx` (`media_id` ASC) VISIBLE,
  INDEX `fk_genre_has_media_genre1_idx` (`genre_id` ASC) VISIBLE,
  CONSTRAINT `fk_genre_has_media_genre1`
    FOREIGN KEY (`genre_id`)
    REFERENCES `softeng`.`genre` (`genre_id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `fk_genre_has_media_media1`
    FOREIGN KEY (`media_id`)
    REFERENCES `softeng`.`media` (`media_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `softeng`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `softeng`.`user` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,
  `password` TEXT NOT NULL,
  `first_name` VARCHAR(255) NULL,
  `last_name` VARCHAR(255) NULL,
  `birth_date` DATETIME NULL,
  `role` ENUM('user', 'admin') NOT NULL,
  `account_status` ENUM('active', 'disabled') NOT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `softeng`.`phone_no`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `softeng`.`phone_no` (
  `number` BIGINT(10) NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`number`, `user_id`),
  INDEX `fk_phone_no_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_phone_no_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `softeng`.`user` (`user_id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `softeng`.`watch_later`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `softeng`.`watch_later` (
  `user_id` INT NOT NULL,
  `media_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `media_id`),
  INDEX `fk_user_has_media_media1_idx` (`media_id` ASC) VISIBLE,
  INDEX `fk_user_has_media_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_media_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `softeng`.`user` (`user_id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `fk_user_has_media_media1`
    FOREIGN KEY (`media_id`)
    REFERENCES `softeng`.`media` (`media_id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `softeng`.`rates`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `softeng`.`rates` (
  `media_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `rating` INT NOT NULL,
  `description` TEXT NULL,
  PRIMARY KEY (`media_id`, `user_id`),
  INDEX `fk_media_has_user_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_media_has_user_media1_idx` (`media_id` ASC) VISIBLE,
  CONSTRAINT `fk_media_has_user_media1`
    FOREIGN KEY (`media_id`)
    REFERENCES `softeng`.`media` (`media_id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `fk_media_has_user_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `softeng`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `softeng`.`watched`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `softeng`.`watched` (
  `media_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`media_id`, `user_id`),
  INDEX `fk_media_has_user_user2_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_media_has_user_media2_idx` (`media_id` ASC) VISIBLE,
  CONSTRAINT `fk_media_has_user_media2`
    FOREIGN KEY (`media_id`)
    REFERENCES `softeng`.`media` (`media_id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `fk_media_has_user_user2`
    FOREIGN KEY (`user_id`)
    REFERENCES `softeng`.`user` (`user_id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `softeng`.`aka`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `softeng`.`aka` (
  `ordering` INT NOT NULL,
  `media_id` INT NOT NULL,
  `alt_title` VARCHAR(255) NOT NULL,
  `region` VARCHAR(255) NULL,
  `language` VARCHAR(255) NULL,
  `is_original` TINYINT NULL,
  PRIMARY KEY (`ordering`, `media_id`),
  CONSTRAINT `fk_akas_media1`
    FOREIGN KEY (`media_id`)
    REFERENCES `softeng`.`media` (`media_id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `softeng`.`directs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `softeng`.`directs` (
  `professional_id` INT NOT NULL,
  `media_id` INT NOT NULL,
  PRIMARY KEY (`professional_id`, `media_id`),
  INDEX `fk_professional_has_media1_media1_idx` (`media_id` ASC) VISIBLE,
  INDEX `fk_professional_has_media1_professional1_idx` (`professional_id` ASC) VISIBLE,
  CONSTRAINT `fk_professional_has_media1_professional1`
    FOREIGN KEY (`professional_id`)
    REFERENCES `softeng`.`professional` (`professional_id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `fk_professional_has_media1_media1`
    FOREIGN KEY (`media_id`)
    REFERENCES `softeng`.`media` (`media_id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `softeng`.`writes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `softeng`.`writes` (
  `professional_id` INT NOT NULL,
  `media_id` INT NOT NULL,
  PRIMARY KEY (`professional_id`, `media_id`),
  INDEX `fk_professional_has_media5_media1_idx` (`media_id` ASC) VISIBLE,
  INDEX `fk_professional_has_media5_professional1_idx` (`professional_id` ASC) VISIBLE,
  CONSTRAINT `fk_professional_has_media5_professional1`
    FOREIGN KEY (`professional_id`)
    REFERENCES `softeng`.`professional` (`professional_id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `fk_professional_has_media5_media1`
    FOREIGN KEY (`media_id`)
    REFERENCES `softeng`.`media` (`media_id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `softeng`.`principal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `softeng`.`principal` (
  `professional_id` INT NOT NULL,
  `media_id` INT NOT NULL,
  `ordering` INT NULL,
  `category` VARCHAR(255) NULL,
  `job` VARCHAR(255) NULL,
  PRIMARY KEY (`professional_id`, `media_id`),
  INDEX `fk_professional_has_media6_media1_idx` (`media_id` ASC) VISIBLE,
  INDEX `fk_professional_has_media6_professional1_idx` (`professional_id` ASC) VISIBLE,
  CONSTRAINT `fk_professional_has_media6_professional1`
    FOREIGN KEY (`professional_id`)
    REFERENCES `softeng`.`professional` (`professional_id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `fk_professional_has_media6_media1`
    FOREIGN KEY (`media_id`)
    REFERENCES `softeng`.`media` (`media_id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `softeng`.`types`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `softeng`.`types` (
  `type` VARCHAR(255) NOT NULL,
  `ordering` INT NOT NULL,
  `media_id` INT NOT NULL,
  PRIMARY KEY (`ordering`, `media_id`, `type`),
  CONSTRAINT `fk_types_aka1`
    FOREIGN KEY (`ordering` , `media_id`)
    REFERENCES `softeng`.`aka` (`ordering` , `media_id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `softeng`.`attributes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `softeng`.`attributes` (
  `attribute` VARCHAR(255) NOT NULL,
  `ordering` INT NOT NULL,
  `media_id` INT NOT NULL,
  PRIMARY KEY (`attribute`, `ordering`, `media_id`),
  INDEX `fk_attributes_aka1_idx` (`ordering` ASC, `media_id` ASC) VISIBLE,
  CONSTRAINT `fk_attributes_aka1`
    FOREIGN KEY (`ordering` , `media_id`)
    REFERENCES `softeng`.`aka` (`ordering` , `media_id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `softeng`.`episode_details`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `softeng`.`episode_details` (
  `episode_id` INT NOT NULL,
  `belongs_to` INT NOT NULL,
  `season_number` INT NOT NULL,
  `episode_number` INT NOT NULL,
  INDEX `fk_episode_details_basics1_idx` (`episode_id` ASC) VISIBLE,
  INDEX `fk_episode_details_basics2_idx` (`belongs_to` ASC) VISIBLE,
  PRIMARY KEY (`episode_id`),
  CONSTRAINT `fk_episode_details_basics1`
    FOREIGN KEY (`episode_id`)
    REFERENCES `softeng`.`media` (`media_id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `fk_episode_details_basics2`
    FOREIGN KEY (`belongs_to`)
    REFERENCES `softeng`.`media` (`media_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `softeng`.`characters`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `softeng`.`characters` (
  `professional_id` INT NOT NULL,
  `media_id` INT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`professional_id`, `media_id`, `name`),
  CONSTRAINT `fk_table1_is_principal1`
    FOREIGN KEY (`professional_id` , `media_id`)
    REFERENCES `softeng`.`principal` (`professional_id` , `media_id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `softeng`.`primary_profession`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `softeng`.`primary_profession` (
  `professional_id` INT NOT NULL,
  `profession` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`professional_id`, `profession`),
  CONSTRAINT `fk_primary_profession_professional1`
    FOREIGN KEY (`professional_id`)
    REFERENCES `softeng`.`professional` (`professional_id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `softeng`.`known_for`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `softeng`.`known_for` (
  `professional_id` INT NOT NULL,
  `media_id` INT NOT NULL,
  PRIMARY KEY (`professional_id`, `media_id`),
  INDEX `fk_professional_has_basics_basics1_idx` (`media_id` ASC) VISIBLE,
  INDEX `fk_professional_has_basics_professional1_idx` (`professional_id` ASC) VISIBLE,
  CONSTRAINT `fk_professional_has_basics_professional1`
    FOREIGN KEY (`professional_id`)
    REFERENCES `softeng`.`professional` (`professional_id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `fk_professional_has_basics_basics1`
    FOREIGN KEY (`media_id`)
    REFERENCES `softeng`.`media` (`media_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
