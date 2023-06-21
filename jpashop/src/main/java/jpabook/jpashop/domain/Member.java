package jpabook.jpashop.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity // 테이블에 붙이는 annotation
@Getter @Setter
public class Member {

    @Id // PK
    @GeneratedValue // sequence하게 알아서
    @Column(name="member_id")   // column명 명시
    private Long id;

    private String name;

    @Embedded   // 내장 타입임을 명시
    private Address address;

    // 하나의 Member가 여러 개의 Order를 갖는다
    // Order 테이블의 member(FK)와 매핑
    @OneToMany(mappedBy = "member")
    private List<Order> orders = new ArrayList<>(); // "다"이므로 List
}
