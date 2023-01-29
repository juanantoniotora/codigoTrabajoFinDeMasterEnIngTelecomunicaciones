package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.dto.UsuarioDTO;
import com.example.demo.entity.UsuariosEntity;
import com.example.demo.repository.UsuariosRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;


@Service
public class DemoService {
    
    @Autowired
    UsuariosRepository usuariosRepository;

    public DemoService (){
        this.prefijo = "llamo al constructor";
        this.sufijo  = "11";
    }

    public void crearToraServicio(String variableStringEntrante, UsuarioDTO requestBodyDTO){
        UsuariosEntity usuariosEntity = new UsuariosEntity();

        usuariosEntity.setNombre(requestBodyDTO.getNombre());
        usuariosEntity.setApellidos(requestBodyDTO.getApellidos());
        usuariosEntity.setEdad(requestBodyDTO.getEdad());
        usuariosEntity.setActivado(requestBodyDTO.getActivado());
        usuariosEntity.setTelefono(requestBodyDTO.getTelefono());
        usuariosEntity.setGenero(requestBodyDTO.getGenero());
        usuariosEntity.setAficion(variableStringEntrante);
        usuariosRepository.save(usuariosEntity);
    }

    //la entity es una tabla en bbdd y el repositorio es una interfaz para acceder a BBDD sin tener que comerme cabeza con sesiones, trnasacciones, etc
    public List<UsuariosEntity> metodoDevuelveListaToras(){
        return usuariosRepository.findAll();
    }

    // ESTE METODO ES EL DELETE
    public void eliminarToraServicio(Long id){
        //Tora queryTora = new Tora();
        Optional<UsuariosEntity> usuarioConcretoRepository = usuariosRepository.findById(id); 
        if (usuarioConcretoRepository.isPresent() ){ // si me devuelve true esta este optional y si false es que no esta
            UsuariosEntity filaToraRecuperado = usuarioConcretoRepository.get();
            usuariosRepository.delete(filaToraRecuperado);
        }
    }

    // ESTE METODO ES EL MODIFIER
    public UsuariosEntity modificarTora(Long id, String valorModificada){
        //Tora queryTora = new Tora();
        Optional<UsuariosEntity> contenedorOptionalDeFilaTora = usuariosRepository.findById(id); 
        if (contenedorOptionalDeFilaTora.isPresent() ){ // si me devuelve true esta este optional y si false es que no esta
            UsuariosEntity filaToraRecuperado = contenedorOptionalDeFilaTora.get();
            filaToraRecuperado.setAficion(valorModificada);
            usuariosRepository.save(filaToraRecuperado);
            
            return filaToraRecuperado;
        }
        return null;
    }



    @Value("${miProperty}")
    private String prefijo;
    
    @Value("${miproperty2}")
    private String sufijo;

    public String metodoServicio1(String str){
        return (prefijo + str);
    }

}
