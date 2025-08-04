document.addEventListener('DOMContentLoaded', function() {
    // Quote database
    const quotes = {
        love: [
            { text: "Love is not about possession. It's about appreciation.", author: "Osho" },
            { text: "Where there is love there is life.", author: "Mahatma Gandhi" },
            { text: "The best thing to hold onto in life is each other.", author: "Audrey Hepburn" },
            { text: "We are most alive when we're in love.", author: "John Updike" },
            { text: "Love is composed of a single soul inhabiting two bodies.", author: "Aristotle" },
            { text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.", author: "Lao Tzu" },
            { text: "Love is when the other person's happiness is more important than your own.", author: "H. Jackson Brown Jr." },
            { text: "The art of love is largely the art of persistence.", author: "Albert Ellis" },
            { text: "Love doesn't make the world go round. Love is what makes the ride worthwhile.", author: "Franklin P. Jones" },
            { text: "To love and be loved is to feel the sun from both sides.", author: "David Viscott" },
            { text: "Love is friendship that has caught fire.", author: "Ann Landers" },
            { text: "The giving of love is an education in itself.", author: "Eleanor Roosevelt" },
            { text: "Love is the flower you've got to let grow.", author: "John Lennon" },
            { text: "Love is the master key that opens the gates of happiness.", author: "Oliver Wendell Holmes" },
            { text: "Love is the only sane and satisfactory answer to the problem of human existence.", author: "Erich Fromm" },
            { text: "Love is like the wind, you can't see it but you can feel it.", author: "Nicholas Sparks" },
            { text: "Love is the greatest refreshment in life.", author: "Pablo Picasso" },
            { text: "Love is the poetry of the senses.", author: "Honoré de Balzac" },
            { text: "Love is an irresistible desire to be irresistibly desired.", author: "Robert Frost" },
            { text: "Love is the triumph of imagination over intelligence.", author: "H.L. Mencken" }
        ],
        courage: [
            { text: "Courage is resistance to fear, mastery of fear, not absence of fear.", author: "Mark Twain" },
            { text: "It takes courage to grow up and become who you really are.", author: "E.E. Cummings" },
            { text: "Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently.", author: "Maya Angelou" },
            { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
            { text: "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.'", author: "Mary Anne Radmacher" },
            { text: "Life shrinks or expands in proportion to one's courage.", author: "Anaïs Nin" },
            { text: "Courage is found in unlikely places.", author: "J.R.R. Tolkien" },
            { text: "Courage is grace under pressure.", author: "Ernest Hemingway" },
            { text: "Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.", author: "Winston Churchill" },
            { text: "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face.", author: "Eleanor Roosevelt" },
            { text: "Courage is being scared to death but saddling up anyway.", author: "John Wayne" },
            { text: "With courage you will dare to take risks, have the strength to be compassionate, and the wisdom to be humble.", author: "Keshavan Nair" },
            { text: "Courage is the power to let go of the familiar.", author: "Raymond Lindquist" },
            { text: "Courage is fire, and bullying is smoke.", author: "Benjamin Disraeli" },
            { text: "Courage is the first of human qualities because it is the quality which guarantees all others.", author: "Aristotle" },
            { text: "Courage is not the absence of despair; it is, rather, the capacity to move ahead in spite of despair.", author: "Rollo May" },
            { text: "Courage is the price that life exacts for granting peace.", author: "Amelia Earhart" },
            { text: "Courage is knowing what not to fear.", author: "Plato" },
            { text: "Courage is like a muscle. We strengthen it by use.", author: "Ruth Gordon" },
            { text: "Courage is the discovery that you may not win, and trying when you know you can lose.", author: "Tom Krause" }
        ],
        failure: [
            { text: "Failure is simply the opportunity to begin again, this time more intelligently.", author: "Henry Ford" },
            { text: "There is no failure except in no longer trying.", author: "Elbert Hubbard" },
            { text: "Failure is the condiment that gives success its flavor.", author: "Truman Capote" },
            { text: "Failure is only the opportunity to begin again more intelligently.", author: "Henry Ford" },
            { text: "Success is not built on success. It's built on failure. It's built on frustration. Sometimes it's built on catastrophe.", author: "Sumner Redstone" },
            { text: "Failure is the foundation of success, and the means by which it is achieved.", author: "Lao Tzu" },
            { text: "Failure is so important. We speak about success all the time. It is the ability to resist failure or use failure that often leads to greater success.", author: "J.K. Rowling" },
            { text: "Failure should be our teacher, not our undertaker. Failure is delay, not defeat. It is a temporary detour, not a dead end.", author: "Denis Waitley" },
            { text: "The only real failure in life is not to be true to the best one knows.", author: "Buddha" },
            { text: "Failure is not the opposite of success; it's part of success.", author: "Arianna Huffington" },
            { text: "Winners are not afraid of losing. But losers are. Failure is part of the process of success. People who avoid failure also avoid success.", author: "Robert T. Kiyosaki" },
            { text: "Failure is unimportant. It takes courage to make a fool of yourself.", author: "Charlie Chaplin" },
            { text: "Failure is a great teacher, and I think when you make mistakes and you recover from them and you treat them as valuable learning experiences, then you've got something to share.", author: "Steve Harvey" },
            { text: "Failure is nature's plan to prepare you for great responsibilities.", author: "Napoleon Hill" },
            { text: "Failure is a detour, not a dead-end street.", author: "Zig Ziglar" },
            { text: "Failure is the tuition you pay for success.", author: "Walter Brunell" },
            { text: "Failure is a part of the process. You can't have success without failure.", author: "Will Smith" },
            { text: "Failure is the key to success; each mistake teaches us something.", author: "Morihei Ueshiba" },
            { text: "Failure is not falling down but refusing to get up.", author: "Chinese Proverb" },
            { text: "Failure is the opportunity to begin again more intelligently.", author: "Henry Ford" }
        ],
        success: [
            { text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer" },
            { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
            { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
            { text: "The secret of success is to do the common thing uncommonly well.", author: "John D. Rockefeller" },
            { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
            { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
            { text: "Success is getting what you want, happiness is wanting what you get.", author: "W.P. Kinsella" },
            { text: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" },
            { text: "Success is the progressive realization of a worthy goal or ideal.", author: "Earl Nightingale" },
            { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
            { text: "Success is doing ordinary things extraordinarily well.", author: "Jim Rohn" },
            { text: "Success is where preparation and opportunity meet.", author: "Bobby Unser" },
            { text: "Success is the ability to go from failure to failure without losing your enthusiasm.", author: "Winston Churchill" },
            { text: "Success is not about how much money you make, it's about the difference you make in people's lives.", author: "Michelle Obama" },
            { text: "Success is peace of mind which is a direct result of self-satisfaction in knowing you did your best to become the best you are capable of becoming.", author: "John Wooden" },
            { text: "Success is the maximum utilization of the ability that you have.", author: "Zig Ziglar" },
            { text: "Success is the result of perfection, hard work, learning from failure, loyalty, and persistence.", author: "Colin Powell" },
            { text: "Success is a state of mind. If you want success, start thinking of yourself as a success.", author: "Joyce Brothers" },
            { text: "Success is not measured by what you accomplish, but by the opposition you have encountered, and the courage with which you have maintained the struggle against overwhelming odds.", author: "Orison Swett Marden" },
            { text: "Success is the good fortune that comes from aspiration, desperation, perspiration and inspiration.", author: "Evan Esar" }
        ]
    };

    // DOM elements
    const categoryButtons = document.querySelectorAll('.category-btn');
    const quoteText = document.querySelector('.quote-text');
    const quoteAuthor = document.querySelector('.quote-author');
    const nextButton = document.querySelector('.next-btn');

    // Current state
    let currentCategory = 'love';
    let currentQuoteIndex = 0;

    // Initialize the app
    function init() {
        displayQuote();
        
        // Set up event listeners
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active button
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Update current category and reset index
                currentCategory = button.dataset.catory;
                currentQuoteIndex = 0;
                
                // Display new quote
                displayQuote();
            });
        });

        nextButton.addEventListener('click', () => {
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes[currentCategory].length;
            displayQuote();
        });
    }

    // Display the current quote
    function displayQuote() {
        const quote = quotes[currentCategory][currentQuoteIndex];
        quoteText.textContent = quote.text;
        quoteAuthor.textContent = `— ${quote.author}`;
    }

    // Start the app
    init();
});