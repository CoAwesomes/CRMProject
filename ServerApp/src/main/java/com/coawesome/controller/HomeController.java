package com.coawesome.controller;

import com.coawesome.model.Result;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by hosea on 2018-02-02.
 */

@RestController
@RequestMapping("/home")
public class HomeController {

    @RequestMapping("crm")
    public String Hello1() {
        return "Welcome To CRMProject";
    }

    @RequestMapping("1")
    public String Hello2() {
        return "Hello test";
    }

    @RequestMapping(method = RequestMethod.POST, value = "/api/board")
    public Result addBoard(@RequestBody String text) {
        System.out.println("text: " + text);

        return new Result(0, "success");
    }
}
