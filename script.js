 function showSection(sectionId) {
            const sections = document.querySelectorAll('.activity-section');
            const links = document.querySelectorAll('.nav-link');
            
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            links.forEach(link => {
                link.classList.remove('active');
            });
            
            document.getElementById(sectionId).classList.add('active');
            event.target.classList.add('active');
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }