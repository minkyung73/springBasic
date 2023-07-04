package com.JPA1.japshopReact.Member.api;

import com.JPA1.japshopReact.Address.model.Address;
import com.JPA1.japshopReact.Member.application.MemberService;
import com.JPA1.japshopReact.Member.dto.MemberDto;
import com.JPA1.japshopReact.Member.model.Member;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;

    /**
     * 회원 가입 페이지
     * */
    @PostMapping(value = "/signUp")
    public String signUp(@Valid MemberForm form) {

        Address address = new Address(form.getCity(), form.getStreet(), form.getZipcode());

        Member member = new Member();
        member.setName(form.getName());
        member.setAddress(address);

        memberService.join(member);

        return "redirect:/";
    }

    /**
     * 회원 목록 페이지
     * */
    @GetMapping(value = "/memberList")
    public ResponseEntity getMemberList() {
        log.info("getMemberList 확인용");

        List<Member> members = memberService.getMembers();

        return new ResponseEntity<>(members, HttpStatus.CREATED);
    }
}
