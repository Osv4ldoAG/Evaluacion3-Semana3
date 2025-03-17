package com.mx.Cajero.Dao;

import java.util.List;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.mx.Cajero.Modelo.Cajero;

@Repository
public interface ICajeroDao extends CrudRepository<Cajero, Integer>{
	//@Query("SELECT c FROM Cajero c") // Forzamos consulta directa a la BD
    //List<Cajero> obtenerTodos();

}
