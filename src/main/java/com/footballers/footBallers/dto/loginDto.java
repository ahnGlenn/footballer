package com.footballers.footBallers.dto;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

/* [사용 어노테이션 정리]

@Entity를 사용하는 이유는 JPA가 관리하는 것임을 나타내기 위해서다.
@Entity : DB의 테이블을 뜻함 [ Spring Data JPA 에서는 반드시 @Entity 어노테이션을 추가해야 함 ]
@Table : DB 테이블의 이름을 명시 [ 테이블 명과 클래스 명이 동일한 경우 생략 가능 ]
@Getter : Lombok의 Getter를 이용해 Getter 메소드를 생성하고 @Builder 를 이용해서 객체를 생성할 수 있게 처리한다.
@Builder를 이용하기 위해 @AllArgsConstructor 와 @NoArgsConstructor 를 같이 처리해야 컴파일 에러가 발생하지 않음
@Id : Primary Key를 뜻함
@GeneratedValue : Primary Key의 키 생성 전략(Strategy)을 설정하고자 할 때 사용
  GenerationType.IDENTITY : MySQL의 AUTO_INCREMENT 방식을 이용
  GenerationType.AUTO(default) : JPA 구현체(Hibernate)가 생성 방식을 결정
  GenerationType.SEQUENCE : DB의 SEQUENCE를 이용해서 키를 생성. @SequenceGenerator와 같이 사용
  GenerationType.TABLE : 키 생성 전용 테이블을 생성해서 키 생성. @TableGenerator와 함께 사용
@Column : DB Column을 명시
@Column과 반대로 테이블에 컬럼으로 생성되지 않는 필드의 경우엔 @Transient 어노테이션을 적용한다.

*/

@Entity
@Getter
@Setter
@RequiredArgsConstructor

@Table(name = "fb_user")

public class loginDto {
    @Id
    @GeneratedValue

    // @Column(insertable=true, nullable = false)
    private String email;
    private String password;
    private String name;
    private String phone;
    private LocalDateTime regist_dt;
    private LocalDateTime update_dt;


//    @Builder
//    public User(String email, String phone, String createdBy, String updatedBy) {
//        this.email = email;
//        this.phone = phone;
//        this.createdBy = createdBy;
//        this.updatedBy = updatedBy;
//    }
}
