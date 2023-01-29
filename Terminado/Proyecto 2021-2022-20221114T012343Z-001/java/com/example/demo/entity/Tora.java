package com.example.demo.entity;

import java.util.Objects;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Tora {
    
    // fields, getters and setters
    @Id
    @GeneratedValue
    private Long id;

    private String ilusion;


    // constructor sin parametros
    public Tora() {
    }

    // constructor parametrizado
    public Tora(Long id, String ilusion) {
        this.id = id;
        this.ilusion = ilusion;
    }

    /**
     * Method getter for the ID
     * @return the id
     */
    public Long getId() {
        return this.id;
    }

    /**
     * Method setter for the ID
     * @param id
     * @return void
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * Method getter for the ilusion
     * @return a String value
     */
    public String getIlusion() {
        return this.ilusion;
    }

    /**
     * Method setter for the ilusion
     * @param ilusion
     * @return void
     */
    public void setIlusion(String ilusion) {
        this.ilusion = ilusion;
    }


    /**
     * Devuelve un Tora a partir de su ID
     */
    public Tora id(Long id) {
        setId(id);
        return this;
    }

    /**
     * Devuelve un Tora a partir de su ILUSION
     */
    public Tora ilusion(String ilusion) {
        setIlusion(ilusion);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Tora)) {
            return false;
        }
        Tora tora = (Tora) o;
        return Objects.equals(id, tora.id) && Objects.equals(ilusion, tora.ilusion);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, ilusion);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", ilusion='" + getIlusion() + "'" +
            "}";
    }

}