 /* 5. NÚT ĐIỀU HƯỚNG SLIDER (CUỘN 5 GAME) */
        document.querySelectorAll('.slider').forEach(sliderContainer => {
            const list = sliderContainer.querySelector('.gamelist');
            const btnTrai = sliderContainer.querySelector('.trai');
            const btnPhai = sliderContainer.querySelector('.phai');

            const scrollNext = (direction) => {
                const games = list.querySelectorAll('.motagame, .game-card');
                if (games.length === 0) return;
                const gameWidth = games[0].offsetWidth + 20;
                const totalScroll = gameWidth * 5;

                list.scrollBy({
                    left: direction === 'next' ? totalScroll : -totalScroll,
                    behavior: 'smooth'
                });
            };

            if (btnPhai) btnPhai.onclick = () => scrollNext('next');
            if (btnTrai) btnTrai.onclick = () => scrollNext('back');
        });