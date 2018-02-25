package com.coawesome.controller;

import com.coawesome.model.CafeModel;
import com.coawesome.service.CafeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by LeeMoonSeong on 2018-02-15.
 */
@RestController
public class CafeController {

    @Autowired
    private CafeService cafeService;

    @RequestMapping(value = "/cafe")
    public String getCafe() {
        CafeModel cafeModel = cafeService.getCafeInfo().get(0);
        return cafeModel.toString();
    }
}
