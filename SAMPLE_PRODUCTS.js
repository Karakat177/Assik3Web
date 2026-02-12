// Sample products to add to the store
const exampleProducts = [
  {
    "title": "Nike Air Max 90",
    "brand": "Nike",
    "price": 129.99,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    "description": "Classic Nike Air Max 90 sneakers with legendary air cushioning. Perfect for everyday wear and sports. The combination of textile and leather provides durability and comfort. Suitable for both youth and adults. Available in various color options.",
    "category": "Casual Sneakers",
    "sizes": [38, 39, 40, 41, 42, 43, 44, 45]
  },
  {
    "title": "Adidas Ultraboost 22",
    "brand": "Adidas",
    "price": 159.99,
    "image": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&h=500&fit=crop",
    "description": "Revolutionary Adidas Ultraboost 22 sneakers with Boost technology for maximum comfort. Clean design and high-tech materials make them the ideal choice for running. Provides excellent foot support and cushioning. Lightweight and breathable.",
    "category": "Light Sneakers",
    "sizes": [38, 39, 40, 41, 42, 43, 44, 45]
  },
  {
    "title": "Puma RS-X",
    "brand": "Puma",
    "price": 99.99,
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop",
    "description": "Stylish Puma RS-X sneakers with retro design and modern approach. Perfect for summer season due to lightweight construction. Soft sole provides comfort during extended wear. Versatile style fits any outfit.",
    "category": "Summer Sneakers",
    "sizes": [38, 39, 40, 41, 42, 43, 44]
  },
  {
    "title": "New Balance 574",
    "brand": "New Balance",
    "price": 119.99,
    "image": "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&h=500&fit=crop",
    "description": "Comfortable New Balance 574 sneakers with classic design. ABZORB technology provides excellent cushioning. Suitable for everyday wear and light workouts. Robust construction guarantees long service life.",
    "category": "Casual Sneakers",
    "sizes": [38, 39, 40, 41, 42, 43, 44, 45]
  },
  {
    "title": "Nike Court Legacy",
    "brand": "Nike",
    "price": 89.99,
    "image": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&h=500&fit=crop",
    "description": "Lightweight and comfortable Nike Court Legacy sneakers with classic tennis style. Perfect for spring and summer season. Cushioned sole provides support with every step. Great choice for young and active people.",
    "category": "Summer Sneakers",
    "sizes": [38, 39, 40, 41, 42, 43, 44, 45]
  },
  {
    "title": "Adidas NMD R1",
    "brand": "Adidas",
    "price": 139.99,
    "image": "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500",
    "description": "Innovative Adidas NMD R1 sneakers with Boost technology and stylish design. Lightweight and comfortable for extended wear. Suitable for active lifestyle and sports. Created in collaboration with leading designers.",
    "category": "Light Sneakers",
    "sizes": [38, 39, 40, 41, 42, 43, 44, 45]
  },
  {
    "title": "Air Jordan 1 Low",
    "brand": "Nike",
    "price": 149.99,
    "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600",
    "description": "Legendary Air Jordan 1 Low sneakers with classic basketball boot design. Premium quality materials and craftsmanship. Suitable for both basketball and everyday wear. Icon of street fashion style.",
    "category": "Football Sneakers",
    "sizes": [38, 39, 40, 41, 42, 43, 44, 45]
  },
  {
    "title": "Vans Old Skool",
    "brand": "Vans",
    "price": 79.99,
    "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&h=500&fit=crop",
    "description": "Classic Vans Old Skool sneakers - symbol of skater culture. Comfortable for any activity. Simple and stylish design fits any wardrobe. Durable canvas construction withstands intensive use.",
    "category": "Casual Sneakers",
    "sizes": [38, 39, 40, 41, 42, 43, 44]
  },
  {
    "title": "Salomon XA Pro 3D",
    "brand": "Salomon",
    "price": 169.99,
    "image": "https://images.unsplash.com/photo-1628413993904-94ecb60f1239?w=600",
    "description": "Specialized trail running sneakers Salomon XA Pro 3D. Designed for extreme conditions and rough terrain. Excellent grip and protection from elements. Perfect for autumn and winter adventures.",
    "category": "Autumn Sneakers",
    "sizes": [40, 41, 42, 43, 44, 45]
  },
  {
    "title": "Nike SB Dunk Low",
    "brand": "Nike",
    "price": 119.99,
    "image": "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=500&h=500&fit=crop",
    "description": "Professional skateboarding sneakers Nike SB Dunk Low with excellent cushioning. Reinforced areas for extra protection during skateboarding. Popular among both professionals and enthusiasts. Available in limited colorways.",
    "category": "Casual Sneakers",
    "sizes": [38, 39, 40, 41, 42, 43, 44, 45]
  },
  {
    "title": "Converse Chuck Taylor All Star",
    "brand": "Converse",
    "price": 69.99,
    "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&h=500&fit=crop",
    "description": "Legendary Converse Chuck Taylor All Star high-top sneakers. Iconic model popular for over 100 years. Perfect for versatile use - from daily life to concerts. Simple yet stylish design never goes out of fashion.",
    "category": "Casual Sneakers",
    "sizes": [38, 39, 40, 41, 42, 43, 44, 45]
  }
];

module.exports = exampleProducts; 