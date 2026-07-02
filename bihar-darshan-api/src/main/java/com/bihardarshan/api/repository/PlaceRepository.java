package com.bihardarshan.api.repository;

import com.bihardarshan.api.entity.Place;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;
import java.util.Optional;

public interface PlaceRepository extends JpaRepository<Place, Long> {

    Optional<Place> findByName(String name);

    List<Place> findByCategory(Place.Category category);

    @Query("SELECT p FROM Place p WHERE LOWER(p.name) LIKE LOWER(CONCAT('%',:kw,'%')) OR LOWER(p.district) LIKE LOWER(CONCAT('%',:kw,'%'))")
    List<Place> search(@Param("kw") String keyword);
}
