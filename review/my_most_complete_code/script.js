        let slideIndex = 1; // Start from the first real slide

        const slides = document.querySelector('.slides');
        const totalSlides = document.querySelectorAll('.slide').length;

        // Duplicate first and last slide for seamless infinite loop
        const firstSlide = slides.children[0].cloneNode(true);
        const lastSlide = slides.children[totalSlides - 1].cloneNode(true);
        slides.appendChild(firstSlide);
        slides.insertBefore(lastSlide, slides.children[0]);

        slides.style.transform = `translateX(${-slideIndex * 100}%)`;

        document.getElementById('next').addEventListener('click', () => {
            moveToNextSlide();
        });

        document.getElementById('prev').addEventListener('click', () => {
            moveToPrevSlide();
        });

        slides.addEventListener('transitionend', () => {
            if (slideIndex === totalSlides + 1) {
                slides.style.transition = 'none';
                slideIndex = 1;
                slides.style.transform = `translateX(${-slideIndex * 100}%)`;
            }
            if (slideIndex === 0) {
                slides.style.transition = 'none';
                slideIndex = totalSlides;
                slides.style.transform = `translateX(${-slideIndex * 100}%)`;
            }
        });

        function updateSlidePosition() {
            slides.style.transition = 'transform 0.5s ease-in-out';
            slides.style.transform = `translateX(${-slideIndex * 100}%)`;
        }

        function moveToNextSlide() {
            if (slideIndex >= totalSlides + 1) return;
            slideIndex++;
            updateSlidePosition();
        }

        function moveToPrevSlide() {
            if (slideIndex <= 0) return;
            slideIndex--;
            updateSlidePosition();
        }

        function autoPlaySlides() {
            moveToNextSlide();
            setTimeout(autoPlaySlides, 3000); // Change slide every 3 seconds
        }

        autoPlaySlides();