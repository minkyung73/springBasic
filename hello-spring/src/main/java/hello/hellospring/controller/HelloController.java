package hello.hellospring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {
    @GetMapping("hello")     // '주소/hello'로 들어오면 이 코드랑 mapping 해줌
    public String hello(Model model) {
        model.addAttribute("data", "spring!!");
        return "hello"; // return 값으로 hello.html을 찾음
    }

    // ex) http://localhost:8080/hello-mvc?name=stst
    // RequestParam으로 값을 넣어주지 않았을 때
    // 에러 발생: Required request parameter 'name' for method parameter type String is not present
    @GetMapping("hello-mvc")
    public String helloMvc(@RequestParam("name") String name, Model model) {
        model.addAttribute("name", name);
        return "hello-template";    // hello-template.html을 찾는다.
    }

    @GetMapping("hello-string")
    @ResponseBody   // http의 body부에 이 데이터를 직접 넣어주겠다~ 라느 뜻
                    // name에 spring이라고 하면,
                    // 이 문자가 그대로 감 (html 없이)
    public String helloString(@RequestParam("name") String name) {
        return "hello " + name; // html tag가 하나도 없이 return 하는 문자 그대로 들어감
    }

    @GetMapping("hello-api")
    @ResponseBody
    public Hello helloApi(@RequestParam("name") String name) {
        Hello hello = new Hello();
        hello.setName(name);
        return hello;   // 객체 반환 (api의 특징)
    }

    static class Hello {
        private String name;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }
    }
}
