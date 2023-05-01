package jpabook.jpashop.service;

import jpabook.jpashop.domain.Member;
import jpabook.jpashop.repository.MemberRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true) // readOnly=true 이면 조회 면에서 성능을 좋게 해줌 (읽기에는 가급적 이거 넣어주기)
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    /**
     * 회원 가입
     * */
    @Transactional  // 위에 readOnly = true가 있어도 해당 메소드에는 얘가 먼저 default인 false로 적용?됨
    public Long join(Member member) {

        validateDuplicateMember(member);    // 중복회원 검증
        memberRepository.save(member);
        return member.getId();
    }

    @SneakyThrows
    private void validateDuplicateMember(Member member) {
        List<Member> findMembers = memberRepository.findByName(member.getName());
        if (!findMembers.isEmpty()) {
            throw new IllegalAccessException("이미 존재하는 회원입니다.");
        }
    }

    /**
     * 회원 조회
     */
    public List<Member> findMembers() {     // 전체 조회
        return memberRepository.findAll();
    }

    public Member findOne(Long memberId) {  // 단건 조회
        return memberRepository.findOne(memberId);
    }
}
