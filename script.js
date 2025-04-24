document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const appGrid = document.getElementById('appGrid');
    const homeButton = document.getElementById('homeButton');
    const appWindow = document.getElementById('appWindow');
    const appTitle = document.getElementById('appTitle');
    const appContent = document.getElementById('appContent');
    const backButton = document.getElementById('backButton');
    const rotateBtn = document.getElementById('rotateBtn');
    const addAppBtn = document.getElementById('addAppBtn');
    const changeWallpaperBtn = document.getElementById('changeWallpaperBtn');
    const phone = document.querySelector('.phone');
    
    // Sample apps data
    const apps = [
        { name: 'Camera', icon: 'camera', app: 'camera' },
        { name: 'Photos', icon: 'images', app: 'photos' },
        { name: 'Settings', icon: 'cog', app: 'settings' },
        { name: 'Mail', icon: 'envelope', app: 'mail' },
        { name: 'Maps', icon: 'map', app: 'maps' },
        { name: 'Calculator', icon: 'calculator', app: 'calculator' }
    ];
    
    // Wallpapers
    const wallpapers = [
        'url(https://source.unsplash.com/random/300x600/?nature)',
        'url(https://source.unsplash.com/random/300x600/?abstract)',
        'url(https://source.unsplash.com/random/300x600/?city)',
        'url(https://source.unsplash.com/random/300x600/?gradient)',
        'linear-gradient(to bottom, #ff9a9e, #fad0c4)',
        'linear-gradient(to bottom, #a1c4fd, #c2e9fb)'
    ];
    
    // Initialize the phone
    function initPhone() {
        // Add apps to the home screen
        apps.forEach(app => {
            addAppToHomeScreen(app);
        });
        
        // Set random wallpaper
        changeWallpaper();
        
        // Update time
        updateTime();
        setInterval(updateTime, 60000);
    }
    
    // Add an app to the home screen
    function addAppToHomeScreen(app) {
        const appIcon = document.createElement('div');
        appIcon.className = 'app-icon';
        appIcon.setAttribute('data-app', app.app);
        
        appIcon.innerHTML = `
            <i class="fas fa-${app.icon}"></i>
            <span>${app.name}</span>
        `;
        
        appIcon.addEventListener('click', function() {
            openApp(app);
        });
        
        appGrid.appendChild(appIcon);
    }
    
    // Open an app
    function openApp(app) {
        appTitle.textContent = app.name;
        appContent.innerHTML = getAppContent(app.app);
        appWindow.style.display = 'flex';
        document.querySelector('.home-screen').style.display = 'none';
    }
    
    // Get app content based on app type
    function getAppContent(appType) {
        switch(appType) {
            case 'phone':
                return `
                    <div class="phone-app">
                        <div class="keypad">
                            <div class="number">1</div>
                            <div class="number">2 ABC</div>
                            <div class="number">3 DEF</div>
                            <div class="number">4 GHI</div>
                            <div class="number">5 JKL</div>
                            <div class="number">6 MNO</div>
                            <div class="number">7 PQRS</div>
                            <div class="number">8 TUV</div>
                            <div class="number">9 WXYZ</div>
                            <div class="number">*</div>
                            <div class="number">0 +</div>
                            <div class="number">#</div>
                        </div>
                        <div class="call-button">
                            <i class="fas fa-phone"></i>
                        </div>
                    </div>
                `;
            case 'browser':
                return `
                    <div class="browser-app">
                        <div class="address-bar">
                            <input type="text" placeholder="Search or enter website name" value="https://example.com">
                        </div>
                        <div class="browser-content">
                            <h3>Example Domain</h3>
                            <p>This domain is for use in illustrative examples in documents.</p>
                        </div>
                    </div>
                `;
            case 'messages':
                return `
                    <div class="messages-app">
                        <div class="conversation">
                            <div class="message received">
                                <p>Hey, how are you?</p>
                                <span class="time">10:30 AM</span>
                            </div>
                            <div class="message sent">
                                <p>I'm good, thanks! How about you?</p>
                                <span class="time">10:32 AM</span>
                            </div>
                        </div>
                        <div class="message-input">
                            <input type="text" placeholder="Type a message">
                            <button><i class="fas fa-paper-plane"></i></button>
                        </div>
                    </div>
                `;
            case 'music':
                return `
                    <div class="music-app">
                        <div class="album-art">
                            <img src="https://via.placeholder.com/150" alt="Album Art">
                        </div>
                        <div class="song-info">
                            <h3>Song Title</h3>
                            <p>Artist Name</p>
                        </div>
                        <div class="player-controls">
                            <button><i class="fas fa-backward"></i></button>
                            <button class="play-btn"><i class="fas fa-play"></i></button>
                            <button><i class="fas fa-forward"></i></button>
                        </div>
                    </div>
                `;
            case 'camera':
                return `
                    <div class="camera-app">
                        <div class="camera-viewfinder">
                            <div class="camera-controls">
                                <button class="shutter-button"></button>
                            </div>
                        </div>
                    </div>
                `;
            case 'photos':
                return `
                    <div class="photos-app">
                        <div class="photo-grid">
                            <img src="https://via.placeholder.com/100" alt="Photo">
                            <img src="https://via.placeholder.com/100" alt="Photo">
                            <img src="https://via.placeholder.com/100" alt="Photo">
                            <img src="https://via.placeholder.com/100" alt="Photo">
                            <img src="https://via.placeholder.com/100" alt="Photo">
                            <img src="https://via.placeholder.com/100" alt="Photo">
                        </div>
                    </div>
                `;
            case 'settings':
                return `
                    <div class="settings-app">
                        <div class="settings-item">
                            <i class="fas fa-wifi"></i>
                            <span>Wi-Fi</span>
                        </div>
                        <div class="settings-item">
                            <i class="fas fa-bluetooth"></i>
                            <span>Bluetooth</span>
                        </div>
                        <div class="settings-item">
                            <i class="fas fa-moon"></i>
                            <span>Display & Brightness</span>
                        </div>
                        <div class="settings-item">
                            <i class="fas fa-volume-up"></i>
                            <span>Sounds</span>
                        </div>
                    </div>
                `;
            default:
                return `
                    <div class="default-app">
                        <h3>Welcome to ${appTitle.textContent}</h3>
                        <p>This is a simulated app interface.</p>
                    </div>
                `;
        }
    }
    
    // Update the time in the status bar
    function updateTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        document.querySelector('.time').textContent = `${hours}:${minutes}`;
    }
    
    // Change the phone wallpaper
    function changeWallpaper() {
        const randomWallpaper = wallpapers[Math.floor(Math.random() * wallpapers.length)];
        document.querySelector('.phone-screen').style.backgroundImage = randomWallpaper;
    }
    
    // Add a random app to the home screen
    function addRandomApp() {
        const newApps = [
            { name: 'Calendar', icon: 'calendar', app: 'calendar' },
            { name: 'Notes', icon: 'sticky-note', app: 'notes' },
            { name: 'Weather', icon: 'cloud-sun', app: 'weather' },
            { name: 'Stocks', icon: 'chart-line', app: 'stocks' },
            { name: 'Health', icon: 'heartbeat', app: 'health' }
        ];
        
        const randomApp = newApps[Math.floor(Math.random() * newApps.length)];
        addAppToHomeScreen(randomApp);
    }
    
    // Event listeners
    homeButton.addEventListener('click', function() {
        if (appWindow.style.display === 'flex') {
            appWindow.style.display = 'none';
            document.querySelector('.home-screen').style.display = 'flex';
        }
    });
    
    backButton.addEventListener('click', function() {
        appWindow.style.display = 'none';
        document.querySelector('.home-screen').style.display = 'flex';
    });
    
    rotateBtn.addEventListener('click', function() {
        phone.classList.toggle('landscape');
    });
    
    addAppBtn.addEventListener('click', addRandomApp);
    
    changeWallpaperBtn.addEventListener('click', changeWallpaper);
    
    // Initialize the phone when the page loads
    initPhone();
});