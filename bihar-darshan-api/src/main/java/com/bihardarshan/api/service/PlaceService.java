package com.bihardarshan.api.service;

import com.bihardarshan.api.entity.Place;
import com.bihardarshan.api.repository.PlaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PlaceService {

    private final PlaceRepository placeRepository;

    public List<Place> getAll(String category, String search) {
        if (search != null && !search.isBlank()) {
            return placeRepository.search(search.trim());
        }
        if (category != null && !category.isBlank()) {
            try {
                return placeRepository.findByCategory(Place.Category.valueOf(category));
            } catch (IllegalArgumentException e) {
                return List.of();
            }
        }
        return placeRepository.findAll();
    }

    public Place getById(Long id) {
        return placeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Place not found: " + id));
    }
}
