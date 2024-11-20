package com.StudyTrack.StudyTrackBackend.Controller;
import com.StudyTrack.StudyTrackBackend.Entity.UserProfile;
import com.StudyTrack.StudyTrackBackend.Repository.UserProfileRepository;
import com.StudyTrack.StudyTrackBackend.Security.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000")
public class AuthController {

    @Autowired
    private JwtUtils jwtUtils;
    @Autowired
    private UserProfileRepository userProfileRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/register")
    public String register(@RequestBody UserProfile userProfile) {
        System.out.println(userProfile);
        if(!userProfileRepository.findByEmail(userProfile.getEmail()).isEmpty()){
            return "Email already registered";
        }
        userProfile.setPassword(passwordEncoder.encode(userProfile.getPassword()));
        System.out.println(userProfile);
        userProfileRepository.save(userProfile);
        return "User registered successfully!";
    }

    @GetMapping("/home")
    public String home(){
        return "Home";
    }

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String password = credentials.get("password");

        System.out.println("Email: " + email);
        System.out.println("Password: " + password);

        try {
            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(email, password)
            );

            // Generate JWT token
            String token = jwtUtils.generateToken(email);

            Map<String, String> response = new HashMap<>();
            response.put("message", "Login successful");
            response.put("token", token); // Include token in response
            UserProfile userProfile = userProfileRepository.findByEmail(email).orElse(null);
                if(userProfile!=null){
                    response.put("name", String.valueOf(userProfile.getName()));
                    response.put("email", String.valueOf(userProfile.getEmail()));
                    response.put("phone",String.valueOf(userProfile.getPhoneNumber()));
                    response.put("university",String.valueOf(userProfile.getUniversityName()));
                }
            return response;
        } catch (AuthenticationException e) {
            Map<String, String> response = new HashMap<>();
            response.put("message", "Invalid email or password");
            return response;
        }
    }

}

