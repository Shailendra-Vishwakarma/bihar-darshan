package com.bihardarshan.api.controller;

import com.bihardarshan.api.entity.Place;
import com.bihardarshan.api.service.FavoriteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/favorites")
@RequiredArgsConstructor
public class FavoriteController {

    private final FavoriteService favoriteService;

    @GetMapping
    public ResponseEntity<List<Place>> getFavorites(@AuthenticationPrincipal UserDetails user) {
        return ResponseEntity.ok(favoriteService.getFavorites(user.getUsername()));
    }

    @PostMapping("/{placeId}")
    public ResponseEntity<Map<String, String>> add(
            @AuthenticationPrincipal UserDetails user,
            @PathVariable Long placeId) {
        favoriteService.add(user.getUsername(), placeId);
        return ResponseEntity.ok(Map.of("status", "added"));
    }

    @DeleteMapping("/{placeId}")
    public ResponseEntity<Map<String, String>> remove(
            @AuthenticationPrincipal UserDetails user,
            @PathVariable Long placeId) {
        favoriteService.remove(user.getUsername(), placeId);
        return ResponseEntity.ok(Map.of("status", "removed"));
    }

    @GetMapping("/{placeId}/check")
    public ResponseEntity<Map<String, Boolean>> check(
            @AuthenticationPrincipal UserDetails user,
            @PathVariable Long placeId) {
        return ResponseEntity.ok(Map.of("favorite", favoriteService.isFavorite(user.getUsername(), placeId)));
    }
}
