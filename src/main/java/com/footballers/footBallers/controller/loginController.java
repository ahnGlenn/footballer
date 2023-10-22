package com.footballers.footBallers.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class loginController {
    @GetMapping("login")
    public List<String> test(){
        return Arrays.asList("안녕하세요", "Hello");
    }
}
