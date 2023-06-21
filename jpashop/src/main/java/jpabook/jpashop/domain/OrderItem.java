package jpabook.jpashop.domain;

import jpabook.jpashop.domain.item.Item;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity // 테이블
@Getter @Setter
public class OrderItem {

    @Id @GeneratedValue
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

    // == 생성 메서드 == //
    public static OrderItem createOrderItem(Item item, int orderPrice, int count) {
        OrderItem orderItem = new OrderItem();
        orderItem.setItem(item);
        orderItem.setOrderPrice(orderPrice);
        orderItem.setCount(count);

        item.removeStock(count);
        return orderItem;
    }

    // == 비즈니스 로직 == //
    public void cancel() {
        getItem().addStock(count);
    }

    // == 조회 로직 == //

    /**
     * 주문 상품 전체 가격 조회
     */
    public int getTotalPrice() {
        return getOrderPrice() * getCount();
    }
}
