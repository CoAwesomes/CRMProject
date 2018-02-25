package com.coawesome.repository;

import com.coawesome.model.CafeModel;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by LeeMoonSeong on 2018-02-15.
 */

@Mapper
@Repository
public interface CafeRepository {

    List<CafeModel> selectCafeInfoList();
}
