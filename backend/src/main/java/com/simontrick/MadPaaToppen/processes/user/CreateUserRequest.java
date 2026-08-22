package com.simontrick.MadPaaToppen.processes.user;

public record CreateUserRequest (String username,
                                 String password,
                                 String role)
{}
