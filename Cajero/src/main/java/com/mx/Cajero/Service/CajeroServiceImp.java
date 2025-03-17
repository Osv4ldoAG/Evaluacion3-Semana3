package com.mx.Cajero.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mx.Cajero.Dao.ICajeroDao;
import com.mx.Cajero.Modelo.Cajero;

@Service
public class CajeroServiceImp implements ICajeroService{
	
	@Autowired
	private ICajeroDao dao;
	
	@Override
	public double totalDinero() {
	    List<Cajero> listaCajero = (List<Cajero>) dao.findAll();
	    return listaCajero.stream().mapToDouble(c -> c.getDenominacion() * c.getCantidad()).sum();
	}

	@Override
	public List<Cajero> obtenerDenominaciones() {
		// TODO Auto-generated method stub
		return null;
	}
	
	

	@Override
	public boolean retirarDinero(int monto) {
	    try {
	        //OBTENER LISTA DE BILLETES
	        List<Cajero> listaCajero = (List<Cajero>) dao.findAll();
	        listaCajero.sort((a, b) -> Double.compare(b.getDenominacion(), a.getDenominacion())); 

	        int montoRestante = monto;

	        // ITERAR DENOMINACIONES
	        for (Cajero c : listaCajero) {
	            if (montoRestante <= 0) break;

	            int cantidadDisponible = c.getCantidad();
	            int denominacion = c.getDenominacion();

	            int cantidadARetirar = Math.min(montoRestante / denominacion, cantidadDisponible);
	            montoRestante -= cantidadARetirar * denominacion;

	            //ACTUALIZAR
	            if (cantidadARetirar > 0) {
	                c.setCantidad(cantidadDisponible - cantidadARetirar);
	                dao.save(c);
	            }
	        }

	        
	        return montoRestante == 0;
	    } catch (Exception e) {
	        
	        e.printStackTrace();
	        return false;
	    }
	}



}
