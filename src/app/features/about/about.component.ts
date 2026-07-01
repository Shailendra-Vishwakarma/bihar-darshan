import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  history = [
    { title: 'Ancient Period', text: 'Bihar was the heartland of ancient India. The Magadha Kingdom rose here around 600 BCE. Emperor Chandragupta Maurya and Ashoka the Great ruled from Pataliputra (modern Patna), creating one of the world\'s largest empires.' },
    { title: 'Religious Heritage', text: 'Siddhartha Gautama attained enlightenment at Bodh Gaya. Lord Mahavira, founder of Jainism, was born in Vaishali. Guru Gobind Singh, the tenth Sikh Guru, was born in Patna.' },
    { title: 'Centers of Learning', text: 'Nalanda and Vikramshila Universities were among the greatest educational institutions of the ancient world, attracting scholars from China, Korea, Japan, Tibet, Mongolia, and Southeast Asia.' },
    { title: 'Modern Bihar', text: 'Bihar played a key role in India\'s independence movement. Dr. Rajendra Prasad, the first President of India, was from Bihar. The state separated from Jharkhand in 2000.' }
  ];

  culture = [
    { icon: 'bi-brush', name: 'Madhubani Art', desc: 'Famous folk painting style from the Mithila region, now a GI-tagged art form recognised worldwide.' },
    { icon: 'bi-music-note-list', name: 'Folk Music', desc: 'Chaita, Kajri, Sohar and Videsia are popular traditional music forms of Bihar.' },
    { icon: 'bi-people', name: 'Jat-Jatin Dance', desc: 'Traditional folk dance performed during monsoon celebrations in North Bihar.' },
    { icon: 'bi-box-seam', name: 'Sujni Craft', desc: 'Traditional embroidery work on quilts, depicting folk stories and cultural themes.' }
  ];

  festivals = [
    { icon: '☀️', name: 'Chhath Puja', desc: 'Bihar\'s most celebrated festival, dedicated to the Sun God. Devotees offer prayers at riverbanks at sunrise and sunset.' },
    { icon: '🌸', name: 'Sonepur Mela', desc: 'Asia\'s largest cattle fair, held on the banks of the Gandak River after Kartik Purnima.' },
    { icon: '🕯️', name: 'Diwali', desc: 'Festival of lights celebrated with joy, fireworks, and traditional sweets across the state.' },
    { icon: '🎋', name: 'Sama-Chakeva', desc: 'A folk festival of the Mithila region celebrating sibling bonds through song and clay figurines.' },
    { icon: '🙏', name: 'Buddha Purnima', desc: 'Marks the birth, enlightenment, and death of Gautama Buddha. Bodh Gaya becomes a global pilgrimage centre.' },
    { icon: '🎉', name: 'Makar Sankranti', desc: 'Harvest festival celebrated with kite flying, sesame-jaggery sweets, and ritual bathing in the Ganges.' }
  ];

  foods = [
    { emoji: '🍛', name: 'Litti Chokha', desc: 'Baked wheat balls with sattu, served with roasted brinjal mash.' },
    { emoji: '🍬', name: 'Khaja', desc: 'Crispy layered sweet made of flour and sugar syrup, famous in Silao.' },
    { emoji: '🥣', name: 'Sattu Drink', desc: 'Nutritious roasted gram flour drink — a staple summer beverage.' },
    { emoji: '🍮', name: 'Thekua', desc: 'Deep-fried sweet biscuit offered during Chhath Puja.' },
    { emoji: '🍚', name: 'Dal Pitha', desc: 'Steamed rice dumplings stuffed with spiced lentil filling.' },
    { emoji: '🥛', name: 'Malpua', desc: 'Sweet pancakes soaked in sugar syrup, served with rabri during festivals.' },
    { emoji: '🌾', name: 'Chura-Dahi', desc: 'Flattened rice with curd and jaggery — a quick Bihari breakfast.' },
    { emoji: '🍲', name: 'Kadhi Bari', desc: 'Gram flour dumplings in tangy yogurt curry, a comfort food classic.' }
  ];
}
