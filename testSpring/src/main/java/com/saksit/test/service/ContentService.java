package com.saksit.test.service;

import com.saksit.test.model.Content;
import com.saksit.test.repository.ContentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContentService {
    @Autowired
    private ContentRepo contentRepo;

    public Content saveContent(Content content){
        return contentRepo.save(content);
    }
    public Iterable<Content> findAll(){
        return contentRepo.findAll() ;
    }

    public Content findById(Long id){
        return contentRepo.getById(id);
    }

    public void delete(Long id){
        Content content = findById(id);
        contentRepo.delete(content);
    }


}
