package com.coawesome.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

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
