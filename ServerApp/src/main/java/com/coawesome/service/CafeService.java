package com.coawesome.service;

import com.coawesome.model.CafeModel;
import com.coawesome.repository.CafeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by LeeMoonSeong on 2018-02-15.
 */
@Service
public class CafeService {

    @Autowired
    private CafeRepository cafeRepository;

    public List<CafeModel> getCafeInfo() {
      return cafeRepository.selectCafeInfoList();
    }
}
