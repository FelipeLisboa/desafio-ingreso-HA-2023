--ADD NEW TABLE RESPONSABLES
CREATE TABLE IF NOT EXISTS `responsables` (`id` INT(11) NOT NULL AUTO_INCREMENT, `nombre` VARCHAR(255) NULL DEFAULT NULL, PRIMARY KEY (`id`));

--ALTER AVISTAMIENTOS
ALTER TABLE `avistamientos` ADD `id_responsable` INT(11) NOT NULL AFTER `id_titan`;

ALTER TABLE `avistamientos` ADD INDEX `avistamiento_id_responsable` (`id_responsable`);

--ALTER MOVIMIENTOS_RECURSOS
ALTER TABLE `movimientos_recursos` ADD `id_responsable` INT(11) NOT NULL AFTER `id_muerte`;

ALTER TABLE `movimientos_recursos` ADD INDEX `movimientos_recursos_id_responsable` (`id_responsable`);

--ALTER MUERTES
ALTER TABLE `muertes` ADD `id_responsable` INT(11) NOT NULL AFTER `id_titan`;

ALTER TABLE `muertes` ADD INDEX `muertes_id_responsable` (`id_responsable`);

--CAPTURE RESPONSABLE CON MÁS TITANES MUERTOS EN 2020
SELECT nombre, anio, MAX(muertes) as muertes FROM (SELECT responsables.nombre as nombre, YEAR(muertes.fecha) as anio, COUNT(*) as muertes FROM muertes INNER JOIN responsables ON muertes.id_responsable = responsables.id WHERE YEAR(fecha)="2020" GROUP BY nombre ORDER BY muertes DESC) t2;
