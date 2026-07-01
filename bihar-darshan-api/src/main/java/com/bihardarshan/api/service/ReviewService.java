package com.bihardarshan.api.service;

import com.bihardarshan.api.dto.ReviewDto;
import com.bihardarshan.api.dto.ReviewRequest;
import com.bihardarshan.api.entity.Place;
import com.bihardarshan.api.entity.Review;
import com.bihardarshan.api.entity.User;
import com.bihardarshan.api.repository.PlaceRepository;
import com.bihardarshan.api.repository.ReviewRepository;
import com.bihardarshan.api.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final UserRepository userRepository;
    private final PlaceRepository placeRepository;

    public List<ReviewDto> getReviews(Long placeId) {
        return reviewRepository.findByPlaceIdOrderByCreatedAtDesc(placeId)
                .stream().map(ReviewDto::from).toList();
    }

    public ReviewDto addReview(String email, Long placeId, ReviewRequest req) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        Place place = placeRepository.findById(placeId)
                .orElseThrow(() -> new RuntimeException("Place not found"));
        Review review = Review.builder()
                .user(user).place(place)
                .rating(req.rating()).comment(req.comment())
                .build();
        return ReviewDto.from(reviewRepository.save(review));
    }
}
