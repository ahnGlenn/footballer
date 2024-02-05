package com.footballers.footBallers.dto;



import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@RequiredArgsConstructor

@Table(name = "fb_match")

public class MatchDto {
    @Id
    @GeneratedValue

    // @Column(insertable=true, nullable = false)
    private String matchId;
    private String matchTy;
    private String matchLoc;
    private String matchDt;
    private String matchTime;
    private String matchRegusr;
}
