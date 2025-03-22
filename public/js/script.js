document.addEventListener('alpine:init', () => {
    Alpine.data('carousel', () => ({
        activeSlide: 0,
        // Test projects
        projects: [
            { name: 'Project Name 1', description: 'This is a brief description of the project. It highlights the purpose and features of the project.', language: 'PHP, JavaScript', database: 'MySQL', status: 'Up', statusColor: 'text-green-400' },
            { name: 'Project Name 2', description: 'This is a brief description of the project. It highlights the purpose and features of the project.', language: 'Python, Django', database: 'PostgreSQL', status: 'On Development', statusColor: 'text-yellow-400' },
            { name: 'Project Name 2', description: 'This is a brief description of the project. It highlights the purpose and features of the project.', language: 'Python, Django', database: 'PostgreSQL', status: 'On Development', statusColor: 'text-yellow-400' },
            { name: 'Project Name 2', description: 'This is a brief description of the project. It highlights the purpose and features of the project.', language: 'Python, Django', database: 'PostgreSQL', status: 'On Development', statusColor: 'text-yellow-400' },
            { name: 'Project Name 2', description: 'This is a brief description of the project. It highlights the purpose and features of the project.', language: 'Python, Django', database: 'PostgreSQL', status: 'On Development', statusColor: 'text-yellow-400' },
            { name: 'Project Name 2', description: 'This is a brief description of the project. It highlights the purpose and features of the project.', language: 'Python, Django', database: 'PostgreSQL', status: 'On Development', statusColor: 'text-yellow-400' },
            { name: 'Project Name 2', description: 'This is a brief description of the project. It highlights the purpose and features of the project.', language: 'Python, Django', database: 'PostgreSQL', status: 'On Development', statusColor: 'text-yellow-400' },
            { name: 'Project Name 2', description: 'This is a brief description of the project. It highlights the purpose and features of the project.', language: 'Python, Django', database: 'PostgreSQL', status: 'On Development', statusColor: 'text-yellow-400' },
            { name: 'Project Name 3', description: 'This is a brief description of the project. It highlights the purpose and features of the project.', language: 'Java, Spring Boot', database: 'MongoDB', status: 'Down', statusColor: 'text-[var(--theme-color-400)] ' }
        ],

        
        scrollToSlide(index) {
            this.activeSlide = index;
            const carousel = this.$refs.carousel;
            const itemWidth = carousel.children[index].offsetWidth; // Width of each slide
            const containerWidth = carousel.offsetWidth; // Container width

            // Scroll to the calculated position 
            const scrollLeft = itemWidth * index - (containerWidth / 2) + (itemWidth / 2);
            
            // If last item
            const xscrollLeft = (index == this.projects.length - 1) ? scrollLeft  + itemWidth : scrollLeft

            // Scroll to the calculated position
            carousel.scrollTo({
                left: xscrollLeft,
                behavior: 'smooth'
            });
        }
    }));
});


document.addEventListener('alpine:init', () => {
    Alpine.data('themeSwitcher', () => ({
        darkMode: localStorage.getItem('darkMode') || 'dark', // Default

        theme: 'red', // Default theme
        themes:[
            { name: 'Rose', value: 'rose', color: '#9f1239' },
            { name: 'Pink', value: 'pink', color: '#9d174d' },
            { name: 'Fuchsia', value: 'fuchsia', color: '#86198f' },
            { name: 'Purple', value: 'purple', color: '#6b21a8' },
            { name: 'Violet', value: 'violet', color: '#5b21b6' },
            { name: 'Indigo', value: 'indigo', color: '#3730a3' },
            { name: 'Blue', value: 'blue', color: '#1e40af' },
            { name: 'Cyan', value: 'cyan', color: '#155e75' },
            { name: 'Teal', value: 'teal', color: '#115e59' },
            { name: 'Emerald', value: 'emerald', color: '#065f46' },
            { name: 'Green', value: 'green', color: '#166534' },
            { name: 'Lime', value: 'lime', color: '#3f6212' },
            { name: 'Yellow', value: 'yellow', color: '#854d0e' },
            { name: 'Amber', value: 'amber', color: '#92400e' },
            { name: 'Orange', value: 'orange', color: '#9a3412' },
            { name: 'Red', value: 'red', color: '#991b1b' },
            { name: 'Neutral', value: 'neutral', color: '#262626' },
            { name: 'Gray', value: 'gray', color: '#1f2937' },
            { name: 'Slate', value: 'slate', color: '#1e293b' }
        ],

        dropdownOpen: false,

        toggleDropdown() {
            this.dropdownOpen = !this.dropdownOpen;
        },

        setTheme(color) {
            this.theme = color;
            document.documentElement.setAttribute('data-theme', color);
            localStorage.setItem('theme', color);
        },

        getTheme (){
            const settedTheme = localStorage.getItem('theme') ? this.theme = localStorage.getItem('theme') : this.theme ;

            this.themes.map((theme) => {
                if(theme.value == settedTheme){
                    document.documentElement.setAttribute('data-theme', settedTheme);
                }
            })
        },

        toggleDarkMode() {
            this.darkMode = this.darkMode === 'light' ? 'dark' : 'light';
            localStorage.setItem('darkMode', this.darkMode); // Save to localStorage
            document.documentElement.classList.toggle('dark');
        },

        getMode(){
            const settedMode = localStorage.getItem('darkMode') ? this.darkMode = localStorage.getItem('darkMode') : this.darkMode = 'dark';
            if (settedMode == 'dark') {
                document.documentElement.classList.add('dark');
            }else{
                document.documentElement.classList.remove('dark');
            }
        }

        
    }));
});
