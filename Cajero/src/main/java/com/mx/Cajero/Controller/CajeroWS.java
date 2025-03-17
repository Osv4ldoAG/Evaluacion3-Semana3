package com.mx.Cajero.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mx.Cajero.Service.CajeroServiceImp;

@RestController
@RequestMapping(path="api/Cajero")
@CrossOrigin
public class CajeroWS {
	
	@Autowired
	private CajeroServiceImp service;
	
	//CONTAR DINERO -> http://localhost:8000/api/Cajero/totalDinero
	@GetMapping(value = "/totalDinero")
    public double totalDinero() {
        return service.totalDinero();
    }
	
	//RETIRAR DINERO -> http://localhost:8000/api/Cajero/retirar
	@PostMapping(value = "retirar/{monto}")
	public ResponseEntity<String> retirar(@PathVariable int monto) {
	    boolean exito = service.retirarDinero(monto);
	    if (exito) {
	        return ResponseEntity.ok("Retiro exitoso de $" + monto);
	    } else {
	        return ResponseEntity.badRequest().body("No se pudo completar el retiro.");
	    }
	}

	
}
