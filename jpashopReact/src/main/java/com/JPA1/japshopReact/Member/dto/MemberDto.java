package com.JPA1.japshopReact.Member.dto;

import com.JPA1.japshopReact.Address.model.Address;
import com.JPA1.japshopReact.Member.model.Member;
import lombok.*;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.util.List;

public class MemberDto {

    @Getter
    @Builder
    @ToString
    @NoArgsConstructor
    @AllArgsConstructor
    public static class SignUpRequestDto {

    }

    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class memberDto {
        /**
         * description:
         * */
        private Long id;
        private String name;
        private String city;
        private String street;
        private String zipcode;

        public memberDto toResponseDto(
                Long id, String name, Address address) {

            return memberDto.builder()
                    .id(id)
                    .name(name)
                    .city(address.getCity())
                    .street(address.getStreet())
                    .zipcode(address.getZipcode())
                    .build();
        }
    }
}
