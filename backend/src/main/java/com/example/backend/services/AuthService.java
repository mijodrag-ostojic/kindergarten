package com.example.backend.services;

import com.example.backend.dtos.RegistrationDTO;
import com.example.backend.model.auth.Account;
import com.example.backend.model.auth.User;
import jakarta.servlet.http.Cookie;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    public Account register(RegistrationDTO dto) {
        return null;
    }

    public User findUser(String email, String password) {
        return null;
    }

    public Cookie[] login(String email, String password) {
        return null;
    }

    public Cookie[] logout() {
        return null;
    }
}
