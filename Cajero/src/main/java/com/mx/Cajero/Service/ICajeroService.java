package com.mx.Cajero.Service;

import java.util.List;
import com.mx.Cajero.Modelo.Cajero;

public interface ICajeroService {
	
    
    public double totalDinero();

    public List<Cajero> obtenerDenominaciones();

    public boolean retirarDinero(int monto);
    
    
}
