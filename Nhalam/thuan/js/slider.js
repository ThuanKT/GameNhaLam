 /* 5. NÚT ĐIỀU HƯỚNG SLIDER (CUỘN 5 GAME) */
        document.querySelectorAll('.slider').forEach(sliderContainer => {
            const list = sliderContainer.querySelector('.gamelist, .gamelists');
            const btnTrai = sliderContainer.querySelector('.nut.trai');
            const btnPhai = sliderContainer.querySelector('.nut.phai');

            const scrollNext = (direction) => {
                const games = list.querySelectorAll('.game-item, .games');
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

        function limitRandomGames() {
            document.querySelectorAll('.gamelist.random-games, .gamelists.random-games').forEach(list => {
                const items = Array.from(list.children);
                if (items.length <= 15) return;
                const shuffled = items
                    .map(item => ({ item, sort: Math.random() }))
                    .sort((a, b) => a.sort - b.sort)
                    .map(pair => pair.item);
                const keep = new Set(shuffled.slice(0, 15));
                items.forEach(item => {
                    item.style.display = keep.has(item) ? '' : 'none';
                });
            });
        }

        limitRandomGames();