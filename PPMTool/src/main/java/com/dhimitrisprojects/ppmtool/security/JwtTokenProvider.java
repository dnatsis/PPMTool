package com.dhimitrisprojects.ppmtool.security;

import com.dhimitrisprojects.ppmtool.domain.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import static com.dhimitrisprojects.ppmtool.security.SecurityConstants.EXPIRATION_TIME;
import static com.dhimitrisprojects.ppmtool.security.SecurityConstants.SECRET;

@Component
public class JwtTokenProvider {

    //Generate the token

    public String generateToken(Authentication authentication){
        User user =  (User)authentication.getPrincipal();
        Date now = new Date(System.currentTimeMillis());

        Date expDate = new Date((now.getTime()+EXPIRATION_TIME));

        String userId = Long.toString(user.getId());

        //throw rolls in here in the future
        Map<String, Object> claims = new HashMap<>();
        claims.put("id", (Long.toString(user.getId())));
        claims.put("username", user.getUsername());
        claims.put("fullName", user.getFullName());

        return Jwts.builder().setSubject(userId)
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(expDate)
                .signWith(SignatureAlgorithm.HS512,SECRET)
                .compact();
    }

    //validate the token

    //get the user id from the token
}
