package jpabook.jpashop.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Embeddable;

@Embeddable // 내장 타입임을 명시
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Address {
    private String city;
    private String street;
    private String zipcode;

//    protected Address() {
//    }

//    public Address(String city, String street, String zipcode) {
//        this.city = city;
//        this.street = street;
//        this.zipcode = zipcode;
//    }
}
