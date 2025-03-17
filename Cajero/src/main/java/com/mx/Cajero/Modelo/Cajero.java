package com.mx.Cajero.Modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Cajero {
	
	@Id
	@Column
	private int idMovimiento;
	
	@Column
	private String tipo;
	
	@Column
	private int denominacion;
	
	@Column
	private int cantidad;
	
	public Cajero() {
		
	}

	public Cajero(int idMovimiento, String tipo, int denominacion, int cantidad) {
		super();
		this.idMovimiento = idMovimiento;
		this.tipo = tipo;
		this.denominacion = denominacion;
		this.cantidad = cantidad;
	}

	public int getIdMovimiento() {
		return idMovimiento;
	}

	public void setIdMovimiento(int idMovimiento) {
		this.idMovimiento = idMovimiento;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public int getDenominacion() {
		return denominacion;
	}

	public void setDenominacion(int denominacion) {
		this.denominacion = denominacion;
	}

	public int getCantidad() {
		return cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}

	@Override
	public String toString() {
		return "Cajero [idMovimiento= " + idMovimiento + ", tipo= " + tipo + ", denominacion= " + denominacion
				+ ", cantidad= " + cantidad + "]";
	}

}
