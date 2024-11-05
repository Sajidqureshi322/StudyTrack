package com.StudyTrack.StudyTrackBackend.Controller;
import com.StudyTrack.StudyTrackBackend.Entity.UserProfile;
import com.StudyTrack.StudyTrackBackend.Repository.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000")
public class AuthController {

    @Autowired
    private UserProfileRepository userProfileRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/register")
    public String register(@RequestBody UserProfile userProfile) {
        Optional<UserProfile> user = userProfileRepository.findByEmail(userProfile.getEmail());
        if (user.isPresent()) {
            System.out.println("Email of this user is: " + userProfile.getEmail());
            return "User with this email already exists!";
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
    public String login(@RequestBody UserProfile loginRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken( loginRequest.getEmail(),
                            loginRequest.getPassword()
                    )
            );
            return "Login successful!";
        } catch (AuthenticationException e) {
            return "Invalid email or password.";
        }
    }
}
