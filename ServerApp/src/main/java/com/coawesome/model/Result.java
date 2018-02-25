package com.coawesome.model;

import lombok.Data;

/**
 * Created by hosea on 2018-02-02.
 */

@Data
public class Result {
    int result;
    String msg;

    public Result (int result, String msg) {
        this.result = result;
        this.msg = msg;
    }
}
