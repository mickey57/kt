package pl.michal.wybory2023.app;


import org.apache.commons.codec.digest.DigestUtils;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Contact {
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String district;
    private String community;
    private String address;
    private String message;
    private LocalDateTime ldt;
    private Boolean baner;
    private Boolean plakat;
    private Boolean ulotka;
    private Boolean wolontariat;
    private Boolean podpisy;
    private Boolean komisja;
    private Boolean inna_pomoc;
    private String ipAdd;
    private String securityKey = "KONFEDERACJA";
    private DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");

    public Contact(String firstName, String lastName, String email, String phone,
                   String district, String community, String address, String message,
                   Boolean baner, Boolean plakat, Boolean ulotka, Boolean wolontariat, Boolean podpisy,
                   Boolean komisja, Boolean inna_pomoc, String ipAdd) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.district = district;
        this.community = community;
        this.address = address;
        this.message = message;
        this.ldt = LocalDateTime.now();
        this.baner = baner;
        this.ulotka = ulotka;
        this.plakat = plakat;
        this.ipAdd = ipAdd;
        this.wolontariat = wolontariat;
        this.podpisy = podpisy;
        this.komisja = komisja;
        this.inna_pomoc = inna_pomoc;
    }

    public Boolean getPodpisy() {
        return podpisy;
    }

    public void setPodpisy(Boolean podpisy) {
        this.podpisy = podpisy;
    }

    public Boolean getKomisja() {
        return komisja;
    }

    public void setKomisja(Boolean komisja) {
        this.komisja = komisja;
    }

    public Boolean getInnaPomoc() {
        return inna_pomoc;
    }

    public void setInna_pomoc(Boolean inna_pomoc) {
        this.inna_pomoc = inna_pomoc;
    }

    public LocalDateTime getLdt() {
        return ldt;
    }

    public void setLdt(LocalDateTime ldt) {
        this.ldt = ldt;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

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

    public Boolean getBaner() {
        return baner;
    }

    public void setBaner(Boolean baner) {
        this.baner = baner;
    }

    public Boolean getPlakat() {
        return plakat;
    }

    public void setPlakat(Boolean plakat) {
        this.plakat = plakat;
    }

    public Boolean getUlotka() {
        return ulotka;
    }

    public void setUlotka(Boolean ulotka) {
        this.ulotka = ulotka;
    }

    public String getIpAdd() {
        return ipAdd;
    }

    public void setIpAdd(String ipAdd) {
        this.ipAdd = ipAdd;
    }

    public String getSecurityKey(){
        String key = firstName+lastName+dtf.format(ldt)+securityKey;
        return DigestUtils.md5Hex(key);
    }
    public Boolean getWolontariat() {
        return wolontariat;
    }
    public void setWolontariat(Boolean wolontariat) {
        this.wolontariat = wolontariat;
    }
}
