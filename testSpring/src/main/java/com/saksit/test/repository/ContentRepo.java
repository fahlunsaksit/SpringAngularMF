package com.saksit.test.repository;

import com.saksit.test.model.Content;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContentRepo extends CrudRepository<Content,Long> {
    Content getById(Long id);
}
