package com.JPA1.japshopReact.Member.application;

import com.JPA1.japshopReact.Member.dao.MemberRepository;
import com.JPA1.japshopReact.Member.dto.MemberDto;
import com.JPA1.japshopReact.Member.model.Member;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    public List<Member> getMembers() {
        return memberRepository.findAll();
    }

}
