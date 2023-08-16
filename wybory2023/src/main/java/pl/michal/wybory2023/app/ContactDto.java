package pl.michal.wybory2023.app;

import java.time.LocalDateTime;

public class ContactDto {
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String district;
    private String community;
    private String address;
    private String message;
    private int baner;
    private int plakat;
    private int ulotka;
    private int wolontariat;
    private int podpisy;
    private int komisja;
    private int inna_pomoc;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getCommunity() {
        return community;
    }

    public void setCommunity(String community) {
        this.community = community;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public int getBaner() {
        return baner;
    }

    public void setBaner(int baner) {
        this.baner = baner;
    }

    public int getPlakat() {
        return plakat;
    }

    public void setPlakat(int plakat) {
        this.plakat = plakat;
    }

    public int getUlotka() {
        return ulotka;
    }

    public void setUlotka(int ulotka) {
        this.ulotka = ulotka;
    }

    public int getWolontariat() {
        return wolontariat;
    }

    public void setWolontariat(int wolontariat) {
        this.wolontariat = wolontariat;
    }

    public int getPodpisy() {
        return podpisy;
    }

    public void setPodpisy(int podpisy) {
        this.podpisy = podpisy;
    }

    public int getKomisja() {
        return komisja;
    }

    public void setKomisja(int komisja) {
        this.komisja = komisja;
    }

    public int getInna_pomoc() {
        return inna_pomoc;
    }

    public void setInna_pomoc(int inna_pomoc) {
        this.inna_pomoc = inna_pomoc;
    }
}
