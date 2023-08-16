package pl.michal.wybory2023.app;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.IOException;

@Controller
public class ContactController {
    private ContactJSON contactJSON = new ContactJSON();


    @PostMapping("/api/form")
    public String addPerson(@RequestParam String firstName,
                            @RequestParam String lastName,
                            @RequestParam String phone,
                            @RequestParam String email,
                            @RequestParam(defaultValue = "", required = false)  String address,
                            @RequestParam(defaultValue = "", required = false)  String district,
                            @RequestParam(defaultValue = "", required = false)  String community,
                            @RequestParam(defaultValue = "false", required = false) Boolean baner,
                            @RequestParam(defaultValue = "false", required = false) Boolean plakat,
                            @RequestParam(defaultValue = "false", required = false) Boolean ulotka,
                            @RequestParam(defaultValue = "false", required = false) Boolean wolontariat,
                            @RequestParam(defaultValue = "false", required = false) Boolean podpisy,
                            @RequestParam(defaultValue = "false", required = false) Boolean komisja,
                            @RequestParam(defaultValue = "false", required = false) Boolean inna_pomoc,
                            @RequestParam String message,
                            HttpServletRequest request,
                            HttpServletResponse response) throws IOException {
        String ipAdd = request.getRemoteAddr();
        Cookie cookie = new Cookie("formSent","1");
        cookie.setPath("/");
        response.addCookie(cookie);

        Contact contact = new Contact(firstName, lastName, email, phone, district, community, address,
                message, baner, plakat, ulotka, wolontariat, podpisy, komisja, inna_pomoc, ipAdd);

        contactJSON.createRequest(contact);
        contactJSON.sendPOST();

        return UriComponentsBuilder
                .fromPath("redirect:/").build().toString();
    }
}
