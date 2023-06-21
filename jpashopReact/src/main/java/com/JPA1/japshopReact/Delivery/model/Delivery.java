package com.JPA1.japshopReact.Delivery.model;

import com.JPA1.japshopReact.Address.model.Address;
import com.JPA1.japshopReact.Order.model.Order;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
public class Delivery {
    @Id
    @GeneratedValue
    @Column(name = "delivery_id")
    private Long id;

    @OneToOne(mappedBy = "delivery", fetch = FetchType.LAZY)
    private Order order;    // Order에 있는 devlivery 변수로 FK를 보낸다

    @Embedded
    private Address address;

    @Enumerated(EnumType.STRING)
    private DeliveryStatus status;  // READY, COMP
}
