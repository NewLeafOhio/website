

        let currentIndex = 0;
        let autoSlideInterval;

        function showSlide(index) {
            const slides = document.querySelectorAll('.carousel-item');
            const indicators = document.querySelectorAll('.indicator');
            const totalSlides = slides.length;

            if (index >= totalSlides) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = totalSlides - 1;
            } else {
                currentIndex = index;
            }

            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === currentIndex);
            });

            indicators.forEach((indicator, i) => {
                indicator.classList.toggle('active', i === currentIndex);
            });
        }

        function nextSlide() {
            showSlide(currentIndex + 1);
        }

        function prevSlide() {
            showSlide(currentIndex - 1);
        }

        // Initialize auto-slide
        autoSlideInterval = setInterval(nextSlide, 5000);

        // Pause on hover
        document.querySelector('.carousel').addEventListener('mouseover', () => {
            clearInterval(autoSlideInterval);
        });

        document.querySelector('.carousel').addEventListener('mouseout', () => {
            autoSlideInterval = setInterval(nextSlide, 5000);
        });

        // Add event listeners for carousel controls
        document.querySelector('.prev').addEventListener('click', prevSlide);
        document.querySelector('.next').addEventListener('click', nextSlide);

        // Swipe support for mobile
        let startX, endX;

        document.querySelector('.carousel').addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        document.querySelector('.carousel').addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            if (startX - endX > 50) {
                nextSlide();
            } else if (endX - startX > 50) {
                prevSlide();
            }
        });
