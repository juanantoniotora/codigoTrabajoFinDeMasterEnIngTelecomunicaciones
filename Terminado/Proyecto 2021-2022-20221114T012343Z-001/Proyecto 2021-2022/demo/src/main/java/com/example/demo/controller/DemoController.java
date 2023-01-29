package com.example.demo.controller;

import java.util.List;

import javax.swing.text.html.HTMLDocument.HTMLReader.IsindexAction;

import com.example.demo.entity.UsuariosEntity;
import com.example.demo.service.DemoService;
import com.example.demo.dto.UsuarioDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


@RestController
@RequestMapping("/")
public class DemoController {
    
    @Autowired
    private DemoService dmeServicio;


    @PostMapping("crearusuario/{detalleUsuario}")
    public ResponseEntity<Void> crearUsuario (@PathVariable String detalleUsuario, @RequestBody UsuarioDTO usuarioDTO){
        UsuarioDTO requestBodyDTO = usuarioDTO;
        dmeServicio.crearToraServicio(detalleUsuario, requestBodyDTO);
        return ResponseEntity.noContent().build();
    }


    @GetMapping
    public List<UsuariosEntity> mostrarTodosLosUsuarios (){
        return dmeServicio.metodoDevuelveListaToras();
    }


    @PostMapping("/modificarDetalleUsuario/{idUsuario}/{nuevoDetalle}")
    public Object modificarDetalleDeUsuario (@PathVariable Long idUsuario, @PathVariable String nuevoDetalle){
        UsuariosEntity usuariosEntity = dmeServicio.modificarTora(idUsuario, nuevoDetalle);
        if( usuariosEntity != null){
            return ResponseEntity.ok(usuariosEntity);
        }
        return new ResponseEntity("Imposible actualizar, el elemento no existe.", 
                HttpStatus.BAD_REQUEST);
    }


    @PostMapping("/eliminarUsuario/{id}")
    public ResponseEntity<Void> eliminarUsuario (@PathVariable Long id){
        dmeServicio.eliminarToraServicio(id);
        return ResponseEntity.noContent().build();
    }








    @GetMapping("/{atributo1}")
    public String josema (@PathVariable String atributo1){
        
        DemoService miServicio = new DemoService();
        return miServicio.metodoServicio1(atributo1);
    }

    @GetMapping("/atributo1")
    public String josemaSinAtributos (){

        return "22";
    }


    @PostMapping ("/puto")
    public String josemaPost (){

        return "puto";
    }

}
