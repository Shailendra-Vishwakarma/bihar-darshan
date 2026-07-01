package com.bihardarshan.api.entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Table(name = "places")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Place {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(nullable = false, length = 100)
    private String district;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private Category category;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;

    @Column(columnDefinition = "TEXT")
    private String history;

    @Column(nullable = false)
    private String imageUrl;

    @ElementCollection
    @CollectionTable(name = "place_images", joinColumns = @JoinColumn(name = "place_id"))
    @Column(name = "image_url")
    private List<String> images;

    @Column(nullable = false, length = 100)
    private String bestTimeToVisit;

    @Column(nullable = false, length = 50)
    private String entryFee;

    @Column(nullable = false, length = 100)
    private String timings;

    @ElementCollection
    @CollectionTable(name = "place_nearby", joinColumns = @JoinColumn(name = "place_id"))
    @Column(name = "attraction")
    private List<String> nearbyAttractions;

    public enum Category { Historical, Religious, Nature, Wildlife, Adventure }
}
