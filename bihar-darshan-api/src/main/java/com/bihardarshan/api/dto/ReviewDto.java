package com.bihardarshan.api.dto;

import com.bihardarshan.api.entity.Review;
import java.time.LocalDateTime;

public record ReviewDto(Long id, String username, int rating, String comment, LocalDateTime createdAt) {
    public static ReviewDto from(Review r) {
        return new ReviewDto(r.getId(), r.getUser().getUsername(), r.getRating(), r.getComment(), r.getCreatedAt());
    }
}
