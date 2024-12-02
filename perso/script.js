// Function to transition from the landing page to the quote page
function transitionToQuote() {
    const landingPage = document.querySelector('.landing-page');
    const quotePage = document.querySelector('.quote-page');

    // Apply fade-out effect for the landing page
    landingPage.style.opacity = 0;  // Fade out the landing page

    setTimeout(() => {
        landingPage.style.display = 'none';  // Hide the landing page after fade out
        quotePage.style.display = 'block';   // Show the quote page

        setTimeout(() => {
            quotePage.style.opacity = 1;     // Fade in the quote page
        }, 10); // Delay for the transition
    }, 50); // Duration of the landing page fade out
}

// Event listener for the "Explore" button
document.getElementById('exploreBtn').addEventListener('click', transitionToQuote);

// Function to display a random quote with fade-in effect
const quotes = [
    "When you want something, all the universe conspires in helping you to achieve it.",
    "The secret of happiness is to see all the marvels of the world, and never to forget the drops of oil on the spoon.",
    "Don’t waste your time with explanations: people only hear what they want to hear.",
    "You are what you believe yourself to be.",
    "Remember that wherever your heart is, there you will find your treasure.",
    "The world is changed by your example, not by your opinion.",
    "There is only one thing that makes a dream impossible to achieve: the fear of failure.",
    "People learn, early in life, that there are certain things that can never be explained.",
    "The boy smiled and took a step back.",
    "He had been to the desert before, but it was different this time.",
    "The old man said, 'When you possess great treasures within you and try to tell others of them, they seldom believe you.'",
    "The treasure you are seeking is not always found in the way you expect.",
    "The desert is a capricious lady, and sometimes she drives men crazy.",
    "The greatest secret in the world was that everything is one.",
    "The alchemist smiled and said, 'Maktub'—it is written.",
    "Santiago learned that every blessing ignored becomes a curse.",
    "The boy had to understand the language of the world to fulfill his Personal Legend.",
    "He had been told that the world was a place for those who dared to pursue their dreams.",
    "It's the possibility of having a dream come true that makes life interesting.",
    "If you’re brave enough to say goodbye, life will reward you with a new hello.",
    "The only reason why you are not reaching your goal is that you don’t believe you can achieve it.",
    "The fear of suffering is worse than the suffering itself.",
    "To realize one's destiny is a person's only obligation.",
    "Every blessing ignored becomes a curse.",
    "The darkest hour of the night came just before the dawn.",
    "You must always know what it is that you want.",
    "One is loved because one is loved. No reason is needed for loving.",
    "When you live in the present moment, you begin to understand the meaning of things.",
    "Love is the most important thing in the world, but friendship is the best.",
    "The secret of happiness is to see all the marvels of the world, and never to forget the drops of oil on the spoon.",
    "People are capable, at any time in their lives, of doing what they dream of.",
    "The greatest challenge in life is discovering who you are, the second is being happy with what you find.",
    "Courage is the quality most essential to understanding the language of the world.",
    "There is only one way to learn. It’s through action.",
    "The world is changed by your example, not by your opinion.",
    "When you possess great treasures within you and try to tell others of them, they seldom believe you.",
    "The closer he got to the realization of his dream, the more difficult things became.",
    "He had to choose between the woman he loved and his quest to find the treasure.",
    "The fear of suffering is worse than the suffering itself.",
    "The boy looked up at the stars and thought of the life he had left behind.",
    "When you want something, all the universe conspires in helping you to achieve it.",
    "The only reason why you are not reaching your goal is that you don’t believe you can achieve it.",
    "The alchemist told him that the journey was never just about the destination, but about learning along the way.",
    "People learn, early in life, that there are certain things that can never be explained.",
    "It is not love that keeps us alive, it is the pursuit of our Personal Legend.",
    "Everything in the world is in constant motion, and this movement can help you find your way.",
    "The boy’s heart was full of joy, for he knew he was on the right path.",
    "His heart was a constant reminder of what he sought, but it was also a reflection of his fears.",
    "She was the most beautiful woman he had ever seen, and in that moment, he knew that she was part of his Personal Legend.",
    "Fatima’s eyes were like two deep pools, and Santiago could feel the heat of the desert in her gaze.",
    "Santiago could feel the connection between them, a bond stronger than any he had ever felt before.",
    "He had been searching for a treasure, but he had found something much more precious.",
    "Fatima told Santiago that love would not keep him from pursuing his dream, but would instead be a part of it.",
    "Santiago knew that his journey had brought him to this moment, where he had to choose between love and his quest.",
    "But Fatima said, 'I will wait for you, because the man who follows his dream is the one I want.'",
    "She believed that true love would not prevent him from fulfilling his destiny, but would support him in it.",
    "Santiago felt conflicted; the thought of leaving her behind was unbearable, yet he knew he must follow his Personal Legend.",
    "Fatima's love was a source of strength for him, and Santiago knew that she would always be a part of his heart, no matter where his journey took him.",
    "The alchemist was speaking to the boy about the Soul of the World, and how it could be understood by the heart.",
    "The boy asked himself, 'Why is it that I must keep searching for something, when what I need is already inside me?'",
    "The Soul of the World is nourished by people's happiness, and also by unhappiness, envy, and jealousy.",
    "Maktub, the alchemist said again, as if to remind him that everything was already written.",
    "The boy’s heart was full of joy, for he had learned the most important lesson: that the treasure he sought was not a physical object, but the journey itself.",
    "The world had its own way of helping those who truly sought their Personal Legend, even if the path was difficult.",
    "The more he learned, the more he realized that the true treasure was the wisdom that came from pursuing his dreams.",
    "The desert was vast and unforgiving, but it taught Santiago that life itself was a great adventure, full of challenges and rewards.",
    "Santiago could see the alchemist’s wisdom in the way he moved, the way he spoke, and the way he lived.",
    "The alchemist had spent years trying to master the secrets of the universe, but he knew that only by living them could he truly understand them.",
    "The boy remembered the words of the old man who had told him, 'When you follow your dream, the world will help you.'",
    "The pursuit of his dream had led Santiago through dangers, hardships, and trials, but each one had brought him closer to understanding himself.",
    "Fatima had become a part of Santiago’s dream, a reminder that love and happiness were integral to the journey.",
    "The wind, the sand, and the sun all seemed to conspire to guide Santiago, but only when he understood the language of the world.",
    "The boy learned that love is not about holding on to someone, but about allowing them to grow alongside you in the pursuit of their own dreams.",
    "The alchemist smiled, knowing that the boy was on the brink of discovering the final truth of his quest.",
    "Santiago had learned that everything, even the smallest events, were part of the great tapestry of the world’s soul.",
    "The treasure he sought had always been within him, and it was through his journey that he had found it.",
    "The boy looked up at the sky, knowing that the universe was vast and full of infinite possibilities, and he was part of it.",
    "Sometimes, you have to leave everything behind to find what you truly seek, the alchemist had said.",
    "The heart has its reasons that reason knows nothing of, the old man had told him, and Santiago understood this now more than ever.",
    "The boy realized that his heart had always known the way, even when his mind was clouded with doubt."
];

// Function to display a random quote with fade-in effect
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById('quote');
    quoteElement.style.opacity = 0; // Fade out current text
    setTimeout(() => {
        quoteElement.textContent = quotes[randomIndex];
        quoteElement.style.opacity = 1; // Fade in new text
    }, 500);
}

// Event listener to trigger quote generation on "Click here" button
document.getElementById('generateBtn').addEventListener('click', displayRandomQuote);
