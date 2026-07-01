package com.bihardarshan.api.service;

import com.bihardarshan.api.dto.AuthResponse;
import com.bihardarshan.api.dto.LoginRequest;
import com.bihardarshan.api.dto.RegisterRequest;
import com.bihardarshan.api.entity.User;
import com.bihardarshan.api.repository.UserRepository;
import com.bihardarshan.api.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;
    private final AuthenticationManager authManager;

    public AuthResponse register(RegisterRequest req) {
        if (userRepository.existsByEmail(req.email())) {
            throw new IllegalArgumentException("Email already registered");
        }
        if (userRepository.existsByUsername(req.username())) {
            throw new IllegalArgumentException("Username already taken");
        }
        User user = User.builder()
                .username(req.username())
                .email(req.email())
                .password(passwordEncoder.encode(req.password()))
                .role(User.Role.USER)
                .build();
        userRepository.save(user);
        String token = jwtUtil.generate(user.getEmail());
        return new AuthResponse(token, user.getUsername(), user.getEmail());
    }

    public AuthResponse login(LoginRequest req) {
        authManager.authenticate(new UsernamePasswordAuthenticationToken(req.email(), req.password()));
        User user = userRepository.findByEmail(req.email()).orElseThrow();
        String token = jwtUtil.generate(user.getEmail());
        return new AuthResponse(token, user.getUsername(), user.getEmail());
    }
}
