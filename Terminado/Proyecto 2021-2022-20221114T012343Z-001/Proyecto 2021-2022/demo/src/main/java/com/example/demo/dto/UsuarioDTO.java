package com.example.demo.dto;

import java.util.Map;
import java.io.Serializable;
import java.util.HashMap;


public class UsuarioDTO implements Serializable{

    private String nombre;
    private String apellidos;
    private Integer edad;
    private boolean activado;
    private Long telefono;
    private int genero;



    /*Map<Integer, String> map = new HashMap<Integer, String>();
    String generoPuesto= map.put(1,"masculino");
    generoPuesto= map.put(2,"femenino");
    generoPuesto= map.put(3,"otro");
    */

    
    public String getNombre(){
        return this.nombre;
    }

    public void setNombre(String nombre){
        this.nombre= nombre;
    }


    //
    public String getApellidos(){
        return this.apellidos;
    }

    public void setApellidos(String apellidos){
        this.apellidos= apellidos;
    }
    

    //
    public Integer getEdad(){
        return this.edad;
    }

    public void setEdad(Integer edad){
        this.edad=edad;
    }


    //
    public boolean getActivado(){
        return this.activado;
    }

    public void setActivado(boolean activado){
        this.activado=activado;
    }


    //
    public Long getTelefono(){
        return this.telefono;
    }

    public void setTelefono(Long telefono){
        this.telefono=telefono;
    }


    //
    public int getGenero(){
        return this.genero;
    }

    public void setGenero(int genero){
        this.genero=genero;
    }
}
