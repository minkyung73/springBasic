package com.JPA1.japshopReact.Item.model;

import com.JPA1.japshopReact.Category.model.Category;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)   // 이거랑
@DiscriminatorColumn(name = "dtype")    // 이거 다시 찾아보기 (하나의 필드 같긴 함)
@Getter @Setter
public class Item {
    @Id
    @GeneratedValue
    @Column(name = "item_id")
    private Long id;

    private String name;
    private int price;
    private int stockQuantity;

    @ManyToMany(mappedBy = "items", fetch = FetchType.LAZY)
    private List<Category> categories = new ArrayList<>();
}
