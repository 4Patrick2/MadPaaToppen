package com.simontrick.MadPaaToppen.processes.user;

import com.simontrick.MadPaaToppen.entities.User;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class UserService {

    private final UserRepository repository;

    public User createUser(CreateUserRequest request) {
        User user = User.builder()
                .username(request.username())
                .password(request.password())
                .role(request.role())
                .build();
        return repository.save(user);
    }
}
