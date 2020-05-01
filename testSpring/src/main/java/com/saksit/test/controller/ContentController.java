package com.saksit.test.controller;

import com.saksit.test.model.Content;
import com.saksit.test.service.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/content")
public class ContentController {
    @Autowired
    private ContentService contentService;

    @GetMapping("/all")
    public Iterable<Content> getAll(){
        return contentService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id){
        Content content = contentService.findById(id);
        return new ResponseEntity<Content>(content, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateContent(@PathVariable Long id ,@RequestBody Content contentDetails){
        Content content = contentService.findById(id);

        content.setContent(contentDetails.getContent());
        content.setSubject(contentDetails.getSubject());
        Content updateContent = contentService.saveContent(content);

        return new ResponseEntity<Content>(updateContent,HttpStatus.OK);
    }

    @PostMapping("/addContent")
    public ResponseEntity<?> addContent(@RequestBody Content content){
        Content newContent = contentService.saveContent(content);
        return new ResponseEntity<Content>(newContent, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        contentService.delete(id);
        return new ResponseEntity<String>("Content deleted success",HttpStatus.OK);
    }


}