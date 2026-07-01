package com.bihardarshan.api.controller;

import com.bihardarshan.api.dto.ReviewDto;
import com.bihardarshan.api.dto.ReviewRequest;
import com.bihardarshan.api.service.ReviewService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/places/{placeId}/reviews")
@RequiredArgsConstructor
public class ReviewController {

    private final ReviewService reviewService;

    @GetMapping
    public ResponseEntity<List<ReviewDto>> getReviews(@PathVariable Long placeId) {
        return ResponseEntity.ok(reviewService.getReviews(placeId));
    }

    @PostMapping
    public ResponseEntity<ReviewDto> addReview(
            @AuthenticationPrincipal UserDetails user,
            @PathVariable Long placeId,
            @Valid @RequestBody ReviewRequest req) {
        return ResponseEntity.ok(reviewService.addReview(user.getUsername(), placeId, req));
    }
}
