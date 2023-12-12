package com.footballers.footBallers.controller;

import com.footballers.footBallers.dto.QloginDto;
import com.footballers.footBallers.dto.loginDto;
import com.querydsl.jpa.impl.JPAQueryFactory;
import jakarta.persistence.EntityManager;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

// @CrossOrigin(origins = "*") // local test 라서 리액트/스프링 충돌 방지 위함.
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class loginController {

    @Autowired
    EntityManager em;

    JPAQueryFactory jpaQueryFactory;

    @GetMapping("/test")
    public List<String> test(){
        return Arrays.asList("안녕하세요", "Hello");
    }

    @PostMapping("/login")
    public String login(@RequestBody loginDto params, HttpServletResponse response){
        String results = "";
        try{
            jpaQueryFactory = new JPAQueryFactory(em);
            QloginDto qloginDto = QloginDto.loginDto;

            loginDto loginUser = jpaQueryFactory
                    .select(qloginDto)
                    .from(qloginDto)
                    .where(qloginDto.email.eq(params.getEmail())
                            .and(qloginDto.password.eq(params.getPassword())))
                    .fetchOne();

            if (loginUser != null) {
                // 아이디와 패스워드가 일치하는 사용자가 존재하면 로그인 성공
                // 여기에서 세션을 설정하거나 토큰을 발급하여 클라이언트에게 전달할 수 있음
                // (세션 또는 토큰을 사용하여 로그인 상태를 유지하는 것은 보안적으로 권장됩니다)

                results = "LOGIN_SUCCESS";
            } else {
                results = "LOGIN_FAILURE";
            }

        }catch (Exception e){
            e.getStackTrace();
        }

        return results;
    }

}
