package com.bihardarshan.api.controller;

import com.bihardarshan.api.entity.Place;
import com.bihardarshan.api.service.PlaceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/places")
@RequiredArgsConstructor
public class PlaceController {

    private final PlaceService placeService;

    @GetMapping
    public ResponseEntity<List<Place>> getAll(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String search) {
        return ResponseEntity.ok(placeService.getAll(category, search));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Place> getById(@PathVariable Long id) {
        return ResponseEntity.ok(placeService.getById(id));
    }
}
