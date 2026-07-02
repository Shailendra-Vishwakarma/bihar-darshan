package com.bihardarshan.api.service;

import com.bihardarshan.api.entity.Favorite;
import com.bihardarshan.api.entity.Place;
import com.bihardarshan.api.entity.User;
import com.bihardarshan.api.repository.FavoriteRepository;
import com.bihardarshan.api.repository.PlaceRepository;
import com.bihardarshan.api.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FavoriteService {

    private final FavoriteRepository favoriteRepository;
    private final UserRepository userRepository;
    private final PlaceRepository placeRepository;

    @Transactional(readOnly = true)
    public List<Place> getFavorites(String email) {
        User user = findUser(email);
        return favoriteRepository.findByUserId(user.getId())
                .stream().map(Favorite::getPlace).toList();
    }

    public void add(String email, Long placeId) {
        User user = findUser(email);
        if (favoriteRepository.existsByUserIdAndPlaceId(user.getId(), placeId)) return;
        Place place = placeRepository.findById(placeId)
                .orElseThrow(() -> new RuntimeException("Place not found"));
        favoriteRepository.save(Favorite.builder().user(user).place(place).build());
    }

    public void remove(String email, Long placeId) {
        User user = findUser(email);
        favoriteRepository.findByUserIdAndPlaceId(user.getId(), placeId)
                .ifPresent(favoriteRepository::delete);
    }

    public boolean isFavorite(String email, Long placeId) {
        User user = findUser(email);
        return favoriteRepository.existsByUserIdAndPlaceId(user.getId(), placeId);
    }

    private User findUser(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }
}
