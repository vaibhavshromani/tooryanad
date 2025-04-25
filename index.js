




        document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.querySelector('.menu-toggle');
            const navLinks = document.querySelector('.nav-links');
            const dropdownBtns = document.querySelectorAll('.dropdown-btn, .nested-btn');
            
            // Toggle main menu
            menuToggle.addEventListener('click', function(e) {
                e.stopPropagation();
                navLinks.classList.toggle('active');
            });
            
            // Toggle dropdown menus
            dropdownBtns.forEach(btn => {
                btn.addEventListener('click', function(e) {
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        e.stopPropagation();
                        const menu = this.nextElementSibling;
                        const isActive = menu.classList.contains('active');
                        
                        // Close all menus first
                        document.querySelectorAll('.dropdown-menu.active, .nested-menu.active').forEach(openMenu => {
                            if (openMenu !== menu) {
                                openMenu.classList.remove('active');
                            }
                        });
                        
                        // Toggle current menu
                        menu.classList.toggle('active', !isActive);
                    }
                });
            });
            
            // Close menus when clicking outside
            document.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    document.querySelectorAll('.dropdown-menu, .nested-menu').forEach(menu => {
                        menu.classList.remove('active');
                    });
                }
            });
            
            // Prevent clicks inside menus from closing them
            document.querySelectorAll('.dropdown-menu, .nested-menu').forEach(menu => {
                menu.addEventListener('click', function(e) {
                    e.stopPropagation();
                });
            });
        });
       





        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.getElementById('hamburger');
            const navLinks = document.getElementById('navLinks');
            const dropdownBtns = document.querySelectorAll('.dropdown-btn, .nested-btn');
            
            // Toggle mobile menu
            hamburger.addEventListener('click', function() {
                this.classList.toggle('active');
                navLinks.classList.toggle('active');
                
                // Animate hamburger to X
                if (this.classList.contains('active')) {
                    this.querySelector('span:nth-child(1)').style.transform = 'rotate(45deg) translate(5px, 5px)';
                    this.querySelector('span:nth-child(2)').style.opacity = '0';
                    this.querySelector('span:nth-child(3)').style.transform = 'rotate(-45deg) translate(5px, -5px)';
                } else {
                    this.querySelector('span:nth-child(1)').style.transform = '';
                    this.querySelector('span:nth-child(2)').style.opacity = '';
                    this.querySelector('span:nth-child(3)').style.transform = '';
                }
            });
            
            // Toggle dropdown menus on mobile
            dropdownBtns.forEach(btn => {
                btn.addEventListener('click', function(e) {
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        const menu = this.nextElementSibling;
                        
                        // Close other dropdowns
                        document.querySelectorAll('.dropdown-menu, .nested-menu').forEach(otherMenu => {
                            if (otherMenu !== menu) {
                                otherMenu.classList.remove('active');
                            }
                        });
                        
                        // Toggle current dropdown
                        menu.classList.toggle('active');
                    }
                });
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', function(e) {
                if (window.innerWidth <= 768 && 
                    !e.target.closest('nav') && 
                    !e.target.classList.contains('hamburger')) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                    document.querySelectorAll('.dropdown-menu, .nested-menu').forEach(menu => {
                        menu.classList.remove('active');
                    });
                    
                    // Reset hamburger animation
                    hamburger.querySelector('span:nth-child(1)').style.transform = '';
                    hamburger.querySelector('span:nth-child(2)').style.opacity = '';
                    hamburger.querySelector('span:nth-child(3)').style.transform = '';
                }
            });
        });
    



        