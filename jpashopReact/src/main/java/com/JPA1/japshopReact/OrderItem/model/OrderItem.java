package com.JPA1.japshopReact.OrderItem.model;

import com.JPA1.japshopReact.Item.model.Item;
import com.JPA1.japshopReact.Order.model.Order;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
public class OrderItem {
    @Id
    @GeneratedValue
    @Column(name = "order_item_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)  // 여러 개의 OrderItem이 하나의 Item과 매핑
    @JoinColumn(name = "item_id")   // FK   // Item 테이블에서 컬럼명이 item_id인 필드와 매핑
    private Item item;

    @ManyToOne(fetch = FetchType.LAZY)  // 여러 개의 OrderItem이 하나의 Order과 매핑
    @JoinColumn(name = "order_id")  // FK
    private Order order;

    private int orderPrice; // 주문 가격
    private int count;  // 주문 수량
}
