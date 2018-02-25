package com.coawesome.model;

import lombok.Data;

/**
 * Created by LeeMoonSeong on 2018-02-15.
 */

@Data
public class CafeModel {
    private int id;
    private String cafeName;
    private int ownerId;
    private String ownerName;
    private String phone;

    @Override
    public String toString() {
        return "카페이름 : " + this.cafeName + " 주인이름 : " + this.ownerName;
    }
}
