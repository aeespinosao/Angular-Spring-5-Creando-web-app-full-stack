package com.andres.springboot.backend.apirest.models.services;

import java.util.List;

import com.andres.springboot.backend.apirest.models.entity.Cliente;

public interface IClienteService {
	
	public void delete(Long id);

	public List<Cliente> findAll();
	
	public Cliente findById(Long id);
	
	public Cliente save(Cliente cliente);

}
