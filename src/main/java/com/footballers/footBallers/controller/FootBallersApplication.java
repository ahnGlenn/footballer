package com.footballers.footBallers.controller;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "com.footballers.footBallers.dto") // jpa가 엔티티클래스를 검색하려면 필요함.
public class FootBallersApplication {

    public static void main(String[] args) {
        SpringApplication.run(FootBallersApplication.class, args);
    }

}