package com.bihardarshan.api.seed;

import com.bihardarshan.api.entity.Place;
import com.bihardarshan.api.repository.PlaceRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;
import org.springframework.transaction.annotation.Transactional;

@Component
@RequiredArgsConstructor
@Slf4j
public class DataSeeder implements CommandLineRunner {

    private final PlaceRepository placeRepository;

    @Override
    public void run(String... args) {
        if (placeRepository.count() == 0) {
            seedPlaces();
        }
        updateLocalImages();
    }

    private void seedPlaces() {

        List<Place> places = List.of(
            Place.builder()
                .name("Mahabodhi Temple")
                .district("Gaya")
                .category(Place.Category.Religious)
                .description("A UNESCO World Heritage Site and one of the most sacred Buddhist pilgrimage sites in the world, marking the place where Siddhartha Gautama attained enlightenment.")
                .history("Built in the 3rd century BCE by Emperor Ashoka, the current temple structure dates back to the 5th-6th century CE. It stands at the exact spot where Buddha attained enlightenment under the Bodhi tree.")
                .imageUrl("/images/mahabodi-temple-gaya.png")
                .images(List.of(
                    "/images/mahabodi-temple-gaya.png",
                    "https://images.unsplash.com/photo-1548013146-72479768bada?w=800"
                ))
                .bestTimeToVisit("October to March")
                .entryFee("Free for Indians, ₹250 for foreigners")
                .timings("5:00 AM - 9:00 PM")
                .nearbyAttractions(List.of("Bodhi Tree", "Animesh Lochana Chaitya", "Lotus Pond", "Archaeological Museum"))
                .build(),

            Place.builder()
                .name("Vishnupad Temple")
                .district("Gaya")
                .category(Place.Category.Religious)
                .description("An ancient temple dedicated to Lord Vishnu, built over a 40 cm footprint of Lord Vishnu imprinted on a rock. It is an important Hindu pilgrimage site.")
                .history("The present temple was built in 1787 by Maharani Ahilyabai Holkar of Indore. The temple stands on the banks of the Falgu River and has great religious significance for Hindus performing Pind Daan rituals.")
                .imageUrl("/images/vishnupad-temple-gaya.png")
                .bestTimeToVisit("October to March")
                .entryFee("Free")
                .timings("5:00 AM - 9:00 PM")
                .nearbyAttractions(List.of("Falgu River", "Akshayabat", "Mangla Gauri Temple"))
                .build(),

            Place.builder()
                .name("Nalanda Mahavihara")
                .district("Nalanda")
                .category(Place.Category.Historical)
                .description("The ruins of Nalanda University, one of the greatest centres of learning in the ancient world. A UNESCO World Heritage Site that attracted scholars from across Asia.")
                .history("Founded in the 5th century CE, Nalanda University flourished for 700 years. At its peak it housed over 10,000 students and 2,000 teachers. It was destroyed by Bakhtiyar Khilji in 1193 CE.")
                .imageUrl("/images/Nalanda-Mahavihara.png")
                .bestTimeToVisit("October to February")
                .entryFee("₹25 for Indians, ₹300 for foreigners")
                .timings("9:00 AM - 5:00 PM (closed on Mondays)")
                .nearbyAttractions(List.of("Nalanda Museum", "Xuanzang Memorial", "Rajgir", "Pawapuri"))
                .build(),

            Place.builder()
                .name("Vaishali")
                .district("Vaishali")
                .category(Place.Category.Historical)
                .description("An ancient city considered to be one of the world's first republics. Birthplace of Lord Mahavira and an important site for both Buddhist and Jain pilgrims.")
                .history("Vaishali was the capital of the Licchavi republic around 600 BCE, making it one of the earliest known republics in the world. Gautama Buddha delivered his last sermon here before his Parinirvana.")
                .imageUrl("/images/Vaishali-Ashokan-Pillar.png")
                .bestTimeToVisit("October to March")
                .entryFee("₹15 for Indians, ₹200 for foreigners")
                .timings("Sunrise to Sunset")
                .nearbyAttractions(List.of("Ashoka Pillar", "Coronation Tank", "Relic Stupa", "Jain Temple"))
                .build(),

            Place.builder()
                .name("Rajgir")
                .district("Nalanda")
                .category(Place.Category.Religious)
                .description("An ancient city of great religious importance for Buddhists and Jains. Surrounded by five hills and known for its hot springs, it was the first capital of the Magadha Empire.")
                .history("Rajgir was the capital of Magadha under King Bimbisara and later Ajatashatru. Buddha spent several rainy seasons here and delivered many important discourses. It is also associated with the life of Lord Mahavira.")
                .imageUrl("/images/Rajgir-Vishwa-Shanti-Stupa.png")
                .bestTimeToVisit("October to February")
                .entryFee("₹10 per person")
                .timings("6:00 AM - 6:00 PM")
                .nearbyAttractions(List.of("Vulture Peak", "Vishwa Shanti Stupa", "Hot Springs", "Saptaparni Cave", "Nalanda"))
                .build(),

            Place.builder()
                .name("Kakolat Falls")
                .district("Nawada")
                .category(Place.Category.Nature)
                .description("A stunning waterfall cascading from a height of 160 feet, surrounded by lush forest. It is the largest waterfall in Bihar and a popular picnic spot.")
                .history("According to local legend, the waterfall has mythological connections to the Treta Yuga. The falls are mentioned in ancient texts and have been a sacred site for centuries.")
                .imageUrl("/images/Kakolat-water-Fall.png")
                .bestTimeToVisit("July to September (monsoon season)")
                .entryFee("₹20 per person")
                .timings("8:00 AM - 5:00 PM")
                .nearbyAttractions(List.of("Nawada Fort", "Kakolat Forest"))
                .build(),

            Place.builder()
                .name("Rajgir Nature Safari")
                .district("Nalanda")
                .category(Place.Category.Wildlife)
                .description("A wildlife safari park spread across the scenic hills of Rajgir, home to various species of animals and birds in their natural habitat.")
                .imageUrl("/images/rajgir-nature-safari.png")
                .bestTimeToVisit("October to March")
                .entryFee("₹50 per person (safari extra)")
                .timings("8:00 AM - 4:00 PM")
                .nearbyAttractions(List.of("Rajgir Zoo", "Glass Bridge", "Nature Trails"))
                .build(),

            Place.builder()
                .name("Valmiki Tiger Reserve")
                .district("West Champaran")
                .category(Place.Category.Wildlife)
                .description("The only tiger reserve in Bihar, spanning 899 sq km in the Himalayan foothills. Home to Bengal tigers, leopards, elephants, and over 250 species of birds.")
                .history("Established as a wildlife sanctuary in 1978 and declared a Tiger Reserve in 1990. The reserve is named after the sage Valmiki, author of the Ramayana, who is believed to have written the epic near this region.")
                .imageUrl("/images/valmiki-tiger-reserve.png")
                .bestTimeToVisit("November to May")
                .entryFee("₹150 for Indians, ₹600 for foreigners")
                .timings("6:00 AM - 5:00 PM")
                .nearbyAttractions(List.of("Triveni Sangam", "Bhikhna Thori", "Gandak River"))
                .build(),

            Place.builder()
                .name("Vikramshila")
                .district("Bhagalpur")
                .category(Place.Category.Historical)
                .description("Ruins of Vikramshila University, another great ancient centre of Buddhist learning that rivalled Nalanda in importance from the 8th to 12th centuries CE.")
                .history("Founded by the Pala King Dharmapala in the late 8th century CE. It was a major centre of Vajrayana Buddhism and attracted students from Tibet, China, and Southeast Asia. Destroyed by Bakhtiyar Khilji in 1203 CE.")
                .imageUrl("/images/vikramshila-bhagalpur.png")
                .bestTimeToVisit("October to March")
                .entryFee("₹25 for Indians, ₹300 for foreigners")
                .timings("9:00 AM - 5:00 PM")
                .nearbyAttractions(List.of("Archaeological Museum", "Bhagalpur Silk Centre", "Mandar Hill"))
                .build(),

            Place.builder()
                .name("Patna Sahib Gurudwara")
                .district("Patna")
                .category(Place.Category.Religious)
                .description("Takht Sri Patna Sahib is one of the five Takhts (seats of temporal authority) of Sikhism and the birthplace of Guru Gobind Singh, the 10th Sikh Guru.")
                .history("Guru Gobind Singh was born here in 1666 CE. The gurudwara was built by Maharaja Ranjit Singh and later renovated. It is one of the most sacred pilgrimage sites for Sikhs worldwide.")
                .imageUrl("/images/patna-sahib-gurdwara.png")
                .bestTimeToVisit("Year round (best during Gurpurab festivals)")
                .entryFee("Free")
                .timings("4:00 AM - 10:00 PM")
                .nearbyAttractions(List.of("Patna Museum", "Gandhi Maidan", "Gol Ghar", "Qila House"))
                .build(),

            Place.builder()
                .name("Rohtasgarh Fort")
                .district("Rohtas")
                .category(Place.Category.Historical)
                .description("A magnificent hilltop fort perched atop the Kaimur plateau, one of the largest forts in India. Offers breathtaking views and showcases architectural brilliance from multiple eras.")
                .history("Originally built by Raja Harishchandra in ancient times, the fort gained prominence under Sher Shah Suri in the 16th century. It later became an important stronghold during the Mughal period.")
                .imageUrl("/images/rohtasgarh-fort.png")
                .bestTimeToVisit("October to February")
                .entryFee("₹20 per person")
                .timings("9:00 AM - 5:00 PM")
                .nearbyAttractions(List.of("Sher Shah Suri Tomb", "Rohtas Hills", "Son River Gorge"))
                .build(),

            Place.builder()
                .name("Sher Shah Suri Tomb")
                .district("Sasaram")
                .category(Place.Category.Historical)
                .description("A magnificent mausoleum of the Afghan emperor Sher Shah Suri, considered one of the finest examples of Afghan architecture in the Indian subcontinent.")
                .history("Built between 1540-1545 CE, the tomb stands in the middle of an artificial lake. Sher Shah Suri, who briefly displaced the Mughal emperor Humayun, commissioned this grand structure before his death in 1545.")
                .imageUrl("/images/sher-shah-suri-tomb.png")
                .bestTimeToVisit("October to March")
                .entryFee("₹25 for Indians, ₹300 for foreigners")
                .timings("Sunrise to Sunset")
                .nearbyAttractions(List.of("Rohtasgarh Fort", "Shergarh Fort", "Sasaram City"))
                .build()
        );

        placeRepository.saveAll(places);
        log.info("DataSeeder: {} places inserted successfully", places.size());
    }

    @Transactional
    private void updateLocalImages() {
        Map<String, String> localImages = Map.ofEntries(
            Map.entry("Mahabodhi Temple",        "/images/mahabodi-temple-gaya.png"),
            Map.entry("Vishnupad Temple",         "/images/vishnupad-temple-gaya.png"),
            Map.entry("Nalanda Mahavihara",       "/images/Nalanda-Mahavihara.png"),
            Map.entry("Vaishali",                 "/images/Vaishali-Ashokan-Pillar.png"),
            Map.entry("Rajgir",                   "/images/Rajgir-Vishwa-Shanti-Stupa.png"),
            Map.entry("Kakolat Falls",            "/images/Kakolat-water-Fall.png"),
            Map.entry("Rajgir Nature Safari",     "/images/rajgir-nature-safari.png"),
            Map.entry("Valmiki Tiger Reserve",    "/images/valmiki-tiger-reserve.png"),
            Map.entry("Vikramshila",              "/images/vikramshila-bhagalpur.png"),
            Map.entry("Patna Sahib Gurudwara",    "/images/patna-sahib-gurdwara.png"),
            Map.entry("Rohtasgarh Fort",          "/images/rohtasgarh-fort.png"),
            Map.entry("Sher Shah Suri Tomb",      "/images/sher-shah-suri-tomb.png")
        );
        localImages.forEach((name, path) ->
            placeRepository.findByName(name).ifPresent(place -> {
                boolean changed = false;
                if (!path.equals(place.getImageUrl())) {
                    place.setImageUrl(path);
                    changed = true;
                }
                List<String> images = place.getImages();
                if (images == null || images.isEmpty() || !images.contains(path)) {
                    place.setImages(images == null || images.isEmpty()
                        ? List.of(path)
                        : java.util.stream.Stream.concat(List.of(path).stream(),
                            images.stream().filter(img -> !img.equals(path))).toList());
                    changed = true;
                }
                if (changed) {
                    placeRepository.save(place);
                    log.info("DataSeeder: updated images for '{}' → {}", name, path);
                }
            })
        );
    }
}
