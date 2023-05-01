package jpabook.jpashop.repository;

import jpabook.jpashop.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceUnit;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class MemberRepository {

    @PersistenceContext
    private final EntityManager em;

    public void save(Member member) {
        em.persist(member);
    }

    public Member findOne(Long id) {    // 특정 회원을 조회하는 용도
        return em.find(Member.class, id);   // Member 객체를 찾음 (id를 사용해서)
    }

    public List<Member> findAll() { // 회원 목록을 조회하는 용도

        // parameter: (조회 쿼리, 반환타입)
        return em.createQuery("select m from Member m", Member.class)   // Member 객체를 조회할 거니까 select m
                .getResultList();
    }

    public List<Member> findByName(String name) {   // 위에 응용 버전이라고 생각하면 될 듯?
        return em.createQuery("select m from Member m where m.name = :name", Member.class)
                .setParameter("name", name) // 위에 :name에 대해서
                .getResultList();
    }
}
