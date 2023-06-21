package com.JPA1.japshopReact.Order.model;

import com.JPA1.japshopReact.Delivery.model.Delivery;
import com.JPA1.japshopReact.Member.model.Member;
import com.JPA1.japshopReact.OrderItem.model.OrderItem;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity // 테이블
@Table(name="orders")   // 테이블명
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Order {
    @Id
    @GeneratedValue
    @Column(name="order_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)  // 여러 개의 Order가 하나의 Member와 매핑
    @JoinColumn(name = "member_id") // FK   // 매핑되는 Member의 컬럼명은 member_id
    private Member member;

    // 하나의 Order가 여러 개의 OrderItem과 매핑
    // OrderItem 테이블의 order(FK)와 매핑
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<OrderItem> orderItems = new ArrayList<>();

    // Delivery 테이블과 일대일 매핑
    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "delivery_id")   // FK   // Delivery 테이블에서 매핑되는 컬럼명은 delivery_id
    private Delivery delivery;

    private LocalDateTime orderDate;    // 주문 시간 (패키지가 있음, Java 8 이상부터 사용 가능)

    @Enumerated(EnumType.STRING)
    private OrderStatus status; // 주문상태 [ORDER, CANCEL]
}
