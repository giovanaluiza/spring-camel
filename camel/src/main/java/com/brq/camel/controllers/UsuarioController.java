package com.brq.camel.controllers;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.brq.camel.models.UsuarioModel;

@RestController
@RequestMapping (value = "usuarios")
public class UsuarioController {
	
	private ArrayList<UsuarioModel> usuarios = new ArrayList<UsuarioModel>(); 
	
	public UsuarioController() {
		this.adicionarUsuarios();
	}
	
	//@GetMapping(value = "")
	@RequestMapping (value = "", method = RequestMethod.GET)
	public ArrayList<UsuarioModel> getAll() {
					
		return this.usuarios;
		
//		System.out.println("Rota de usuários");
//		return "Rota de usuários";
	}
	@GetMapping ( value = "{id}" )
	public UsuarioModel getOne(@PathVariable("id") int id ) {
		return this.usuarios.get(id);
	}
	
	@PostMapping ( value = "" )
	public UsuarioModel save( @RequestBody UsuarioModel usuario ) {
		System.out.println(usuario.getEmail());
		this.usuarios.add(usuario);
		return usuario;
	} 
	
	
	/*
	 *    localhost:8080/usuarios/1    é um path Param   ( dado é obrigatório)
	 *    localhost:8080/usuarios/1?page=8    é um query Param   ( dado não é obrigatório)
	 * */
	
	// por conta do request mapping, iremos concatenar "usuarios" (linha 15) com o value abaixo
	@DeleteMapping ( value = "{id}" )
	public void delete(
			@PathVariable("id") int id ) throws Exception {
		
		try {
			this.usuarios.remove(id);
		}
		catch (IndexOutOfBoundsException e) {
			throw new Exception("Índice não encontrado");
		}
		catch (Exception e) {
			throw new Exception("Erro no servidor");
		}
		
	}

	@PatchMapping (value = "{id}")
	public UsuarioModel update ( 
			@RequestBody UsuarioModel usuario,
			@PathVariable("id") int id) {
		
		for (int i = 0; i < this.usuarios.size(); i++) {
			if (id == this.usuarios.get(i).getId()) {
				this.usuarios.get(i).setEmail( usuario .getEmail() );
				this.usuarios.get(i).setName( usuario .getName() );
			}
		}
		return usuario;
		
	}
	
	private void adicionarUsuarios() {
		UsuarioModel usuario = new UsuarioModel(1, "Meu Nome", "abc@abc.com");
		this.usuarios.add(usuario);
		
		usuario = new UsuarioModel(2, "Meu Nome 2", "abc2@abc2.com");
		this.usuarios.add(usuario);
	}

}