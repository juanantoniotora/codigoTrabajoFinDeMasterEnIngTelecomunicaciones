package com.example.demo.controller;

import java.util.List;

import com.example.demo.entity.Tora;
import com.example.demo.service.TestService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/josema")
public class TestController {
    // esto es un controlador (de servicio) http de spring
    
    @Autowired
    private TestService miServicio;


    @GetMapping("/{atributo1}")
    public String josema (@PathVariable String atributo1){
        
        TestService miServicio = new TestService();
        
        return miServicio.metodoServicio1(atributo1);
    }

    @GetMapping("/atributo1")
    public String josemaSinAtributos (){

        return "22";
    }

    @GetMapping
    public List<Tora> imprimirToras (){
        return miServicio.metodoDevuelveListaToras();
    }

    @PostMapping ("/puto")
    public String josemaPost (){

        return "puto";
    }

    @PostMapping("/{atributo1}")
    public void crearTora (@PathVariable String atributo1){
        miServicio.crearToraServicio(atributo1);
    }

    @PostMapping("/eliminarTora/{atributo1}")
    public void eliminiarTora (@PathVariable Long atributo1){
        miServicio.eliminarToraServicio(atributo1);
    }

    @PostMapping("/modificarTora/{idURL}/{valorVariableModificada}")
    public void modificarTora (@PathVariable Long idURL, @PathVariable String valorVariableModificada){
        miServicio.modificarTora(idURL, valorVariableModificada);
    }




    /* @DeleteMapping


    @PutMapping(value="path/{id}")
    public SomeEnityData putMethodName(@PathVariable String id, @RequestBody SomeEnityData entity) {
        //TODO: process PUT request
        
        miServicio.
        return entity;
    } */
}
