// TPF Cinema - Core Application Logic

// 1. High-Fidelity Cinematic Catalog (With free-to-use streaming sample sources)
const MOVIE_CATALOG = [
    {
        id: "tpf-01",
        title: "Echoes of Orion",
        genre: "Sci-Fi, Adventure",
        year: 2026,
        duration: "2h 14m",
        rating: "8.9",
        description: "In the silent expansion of the Orion Belt, an isolated surveyor discovers a dormant signal radiating a language older than gravity. As the signal grows, it alters time within the ship, forcing her to confront her past in order to save the future of human exploration.",
        backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
        portraitPoster: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=600&auto=format&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        badge: "TPF Exclusive",
        viewsCount: 1540,
        studioName: "Orion Cinematic Labs",
        studioLogo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=100&auto=format&fit=crop",
        audioTracks: "English, Spanish, Hindi",
        captionTracks: "English, French, Spanish",
        cast: [
            { name: "Jessica Chastain", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" },
            { name: "Matthew McConaughey", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" }
        ]
    },
    {
        id: "tpf-02",
        title: "The Silent Canopy",
        genre: "Drama, Mystery",
        year: 2025,
        duration: "1h 56m",
        rating: "8.4",
        description: "A reclusive botanist deep within the Pacific Northwest rainforest begins mapping strange fungal neural networks. Her research takes a dark turn when the forest mirrors her lost memories.",
        backdrop: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1600&auto=format&fit=crop",
        portraitPoster: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=600&auto=format&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        badge: "New Release",
        viewsCount: 1420,
        studioName: "Emerald Cascade Films",
        studioLogo: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=100&auto=format&fit=crop",
        audioTracks: "English, French, German",
        captionTracks: "English, Spanish",
        cast: [
            { name: "Emma Watson", avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=100&auto=format&fit=crop" },
            { name: "Timothée Chalamet", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&auto=format&fit=crop" }
        ]
    },
    {
        id: "tpf-03",
        title: "Neon Horizon: 2099",
        genre: "Sci-Fi, Action",
        year: 2026,
        duration: "2h 08m",
        rating: "9.2",
        description: "In a hyper-dense dystopian cityscape powered by biological neural networks, a data runner is tasked with delivering a code package that could rewrite the city's power hierarchy.",
        backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1600&auto=format&fit=crop",
        portraitPoster: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=600&auto=format&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        badge: "Trending #1",
        viewsCount: 1980,
        studioName: "Cyberpunk Syndicate",
        studioLogo: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=100&auto=format&fit=crop",
        audioTracks: "English, Japanese, Spanish",
        captionTracks: "English, Japanese, Spanish, Italian",
        cast: [
            { name: "Keanu Reeves", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" },
            { name: "Scarlett Johansson", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" }
        ]
    },
    {
        id: "tpf-04",
        title: "After the Storm",
        genre: "Drama, Indie",
        year: 2024,
        duration: "1h 48m",
        rating: "7.9",
        description: "A poignant study of a coastal family picking up the pieces of their lives after a historic tempest destroys their generational fishing harbor.",
        backdrop: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
        portraitPoster: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?q=80&w=600&auto=format&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        badge: "Award Winner",
        viewsCount: 1100,
        studioName: "Atlantic Tide Pictures",
        studioLogo: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=100&auto=format&fit=crop",
        audioTracks: "English, Portuguese",
        captionTracks: "English, French, Portuguese",
        cast: [
            { name: "Florence Pugh", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop" },
            { name: "Cillian Murphy", avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=100&auto=format&fit=crop" }
        ]
    },
    {
        id: "tpf-05",
        title: "Velocity",
        genre: "Action, Thriller",
        year: 2025,
        duration: "1h 52m",
        rating: "8.1",
        description: "An elite test pilot participates in an unsanctioned supersonic experiment, only to realize the auto-pilot system has been taken over by a rogue faction.",
        backdrop: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600&auto=format&fit=crop",
        portraitPoster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        badge: "Popular",
        viewsCount: 1350,
        studioName: "AeroDynamics Films",
        studioLogo: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=100&auto=format&fit=crop",
        audioTracks: "English, Hindi, German",
        captionTracks: "English, Hindi, Spanish",
        cast: [
            { name: "Tom Cruise", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" },
            { name: "Miles Teller", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100&auto=format&fit=crop" }
        ]
    },
    {
        id: "tpf-06",
        title: "Chords of Winter",
        genre: "Drama, Music",
        year: 2024,
        duration: "2h 02m",
        rating: "8.6",
        description: "An aging cellist returns to a remote village in the Swiss Alps to compose his final masterpiece. Through teaching a local prodigy, he rekindles his creative spark.",
        backdrop: "https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?q=80&w=1600&auto=format&fit=crop",
        portraitPoster: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=600&auto=format&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        badge: "Critics' Choice",
        viewsCount: 1250,
        studioName: "Alps Symphony Films",
        studioLogo: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=100&auto=format&fit=crop",
        audioTracks: "English, German, French",
        captionTracks: "English, German, French, Chinese",
        cast: [
            { name: "Anthony Hopkins", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop" },
            { name: "Saoirse Ronan", avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=100&auto=format&fit=crop" }
        ]
    },
    {
        id: "tpf-07",
        title: "Subterranean",
        genre: "Mystery, Adventure",
        year: 2025,
        duration: "2h 10m",
        rating: "8.3",
        description: "A team of explorers uncovers a massive, bioluminescent ancient cavern complex beneath the Andes mountains, holding architectural remains of an advanced civilization.",
        backdrop: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
        portraitPoster: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=600&auto=format&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        badge: "Trending #2",
        viewsCount: 1720,
        studioName: "Andean Explorers Corp",
        studioLogo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=100&auto=format&fit=crop",
        audioTracks: "English, Spanish, Portuguese",
        captionTracks: "English, Spanish",
        cast: [
            { name: "Pedro Pascal", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" },
            { name: "Zendaya", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" }
        ]
    },
    {
        id: "tpf-08",
        title: "Stardust Odyssey",
        genre: "Sci-Fi, Documentary",
        year: 2026,
        duration: "1h 35m",
        rating: "9.0",
        description: "A mesmerizing cinematic documentary charting the life cycle of interstellar dust particles, from active supernovas to the forming future solar systems.",
        backdrop: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1600&auto=format&fit=crop",
        portraitPoster: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=600&auto=format&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        badge: "Visually Stunning",
        viewsCount: 1610,
        studioName: "Deep Space Productions",
        studioLogo: "https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=100&auto=format&fit=crop",
        audioTracks: "English, Spanish, Russian, Japanese",
        captionTracks: "English, Spanish, Japanese",
        cast: [
            { name: "Neil deGrasse Tyson", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" },
            { name: "Morgan Freeman", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" }
        ]
    },
    {
        id: "tpf-09",
        title: "Shadows of the Crown",
        genre: "Drama, Mystery",
        year: 2025,
        duration: "2h 15m",
        rating: "8.7",
        description: "An elegant political thriller tracking the mysterious disappearance of a royal adviser and the dark conspiracy unspooling in the halls of parliament.",
        backdrop: "https://images.unsplash.com/photo-1543165796-5409627d09d6?q=80&w=1600&auto=format&fit=crop",
        portraitPoster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=600&auto=format&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        badge: "Highly Rated",
        viewsCount: 1810,
        studioName: "Royal Court Films",
        studioLogo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=100&auto=format&fit=crop",
        audioTracks: "English, Spanish, French",
        captionTracks: "English, French, German",
        cast: [
            { name: "Olivia Colman", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop" },
            { name: "Gary Oldman", avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=100&auto=format&fit=crop" }
        ]
    },
    {
        id: "tpf-10",
        title: "Apex Predators",
        genre: "Action, Adventure",
        year: 2026,
        duration: "2h 05m",
        rating: "8.8",
        description: "In the depths of an uncharted oceanic trench, deep sea miners trigger the awakening of a prehistoric marine predator. A nail-biting battle for survival follows.",
        backdrop: "https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=1600&auto=format&fit=crop",
        portraitPoster: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        badge: "Trending #3",
        viewsCount: 1690,
        studioName: "Deep Blue Studios",
        studioLogo: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=100&auto=format&fit=crop",
        audioTracks: "English, Spanish, Hindi",
        captionTracks: "English, Hindi, German",
        cast: [
            { name: "Jason Statham", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" },
            { name: "Zoe Saldana", avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=100&auto=format&fit=crop" }
        ]
    }
];

// 2. Mutable Dynamic Movie State Synced with LocalStorage
let movies = JSON.parse(localStorage.getItem('tpf_catalog')) || [...MOVIE_CATALOG];
let featuredMovieId = localStorage.getItem('tpf_featured_id') || "tpf-01";

// Categories Grouping (Dynamically filters the mutable list)
const CATEGORIES = [
    { title: "Trending Movies", filter: () => movies.filter(m => m.type !== 'series').slice(0, 4) },
    { title: "Sci-Fi & High Adventure", filter: () => movies.filter(m => m.type !== 'series' && m.genre.toLowerCase().includes("sci-fi")) },
    { title: "Captivating Dramas", filter: () => movies.filter(m => m.type !== 'series' && m.genre.toLowerCase().includes("drama")) },
    { title: "Independent Masterpieces & Classics", filter: () => movies.filter(m => m.type !== 'series' && (m.genre.toLowerCase().includes("indie") || m.genre.toLowerCase().includes("mystery"))) },
    { title: "TPF Exclusive Web Series", filter: () => movies.filter(m => m.type === 'series') }
];

// App State
let currentSelectedMovie = movies.find(m => m.id === featuredMovieId) || movies[0];
let watchlist = JSON.parse(localStorage.getItem('tpf_watchlist')) || [];

// DOM Elements
const siteHeader = document.getElementById('site-header');
const searchInput = document.getElementById('search-input');
const heroImage = document.getElementById('hero-image');
const heroBadge = document.getElementById('hero-badge');
const heroTitle = document.getElementById('hero-title');
const heroRating = document.getElementById('hero-rating');
const heroYear = document.getElementById('hero-year');
const heroDuration = document.getElementById('hero-duration');
const heroGenre = document.getElementById('hero-genre');
const heroDesc = document.getElementById('hero-desc');
const heroPlayBtn = document.getElementById('hero-play-btn');
const heroInfoBtn = document.getElementById('hero-info-btn');
const moviesSection = document.getElementById('movies-section');

// Watchlist Panel Elements
const watchlistPanel = document.getElementById('watchlist-panel');
const toggleWatchlistBtn = document.getElementById('toggle-watchlist');
const closeWatchlistBtn = document.getElementById('close-watchlist');
const watchlistGrid = document.getElementById('watchlist-grid');
const watchlistEmptyMsg = document.getElementById('watchlist-empty-msg');

// Details Modal Elements
const detailsModal = document.getElementById('details-modal');
const closeDetailsBtn = document.getElementById('close-details');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalRating = document.getElementById('modal-rating');
const modalYear = document.getElementById('modal-year');
const modalDuration = document.getElementById('modal-duration');
const modalGenre = document.getElementById('modal-genre');
const modalPlayBtn = document.getElementById('modal-play-btn');
const modalWatchlistBtn = document.getElementById('modal-watchlist-btn');

// Native Custom Player Elements
const videoPlayerOverlay = document.getElementById('video-player-overlay');
const playerContainer = document.getElementById('player-container');
const nativeVideo = document.getElementById('native-video');
const closePlayerBtn = document.getElementById('close-player');
const playerPlayToggle = document.getElementById('player-play-toggle');
const playerRewind = document.getElementById('player-rewind');
const playerForward = document.getElementById('player-forward');
const playerVolumeToggle = document.getElementById('player-volume-toggle');
const playerVolumeSlider = document.getElementById('player-volume-slider');
const playerCurrentTime = document.getElementById('player-current-time');
const playerDuration = document.getElementById('player-duration');
const playerProgressContainer = document.getElementById('player-progress-container');
const playerProgressFilled = document.getElementById('player-progress-filled');
const playerSpeedBtn = document.getElementById('player-speed-btn');
const playerFullscreen = document.getElementById('player-fullscreen');
const playerQualityBtn = document.getElementById('player-quality-btn');
const playerQualityDropdown = document.getElementById('player-quality-dropdown');

// 2. Authentication Gate Logic
const authGate = document.getElementById('auth-gate');
const demoLoginBtn = document.getElementById('demo-login-btn');
const userProfileTrigger = document.getElementById('user-profile-trigger');
const profileDropdown = document.getElementById('profile-dropdown');
const logoutBtn = document.getElementById('logout-btn');
const userAvatar = document.getElementById('user-avatar');
const userDisplayName = document.getElementById('user-display-name');

// Check active login state
function initAuth() {
    const storedUser = sessionStorage.getItem('tpf_active_user');
    if (storedUser) {
        try {
            const user = JSON.parse(storedUser);
            unlockPlatform(user);
        } catch (e) {
            lockPlatform();
        }
    } else {
        lockPlatform();
    }
}

// Dynamic Real-time Interest Analyzer based on active user Watchlist!
function getWatchlistInterests() {
    if (!watchlist || watchlist.length === 0) return [];
    
    const genreCounts = {};
    watchlist.forEach(movie => {
        movie.genre.split(',').forEach(g => {
            const cleanedGenre = g.trim().toLowerCase();
            genreCounts[cleanedGenre] = (genreCounts[cleanedGenre] || 0) + 1;
        });
    });
    
    // Sort genres by weight (highest occurrence first)
    return Object.keys(genreCounts).sort((a, b) => genreCounts[b] - genreCounts[a]);
}

function lockPlatform() {
    authGate.classList.remove('hidden');
    siteHeader.classList.add('locked-blur');
    moviesSection.classList.add('locked-blur');
    document.getElementById('hero-banner').classList.add('locked-blur');
}

function unlockPlatform(user) {
    authGate.classList.add('hidden');
    siteHeader.classList.remove('locked-blur');
    moviesSection.classList.remove('locked-blur');
    document.getElementById('hero-banner').classList.remove('locked-blur');
    
    // Update user visual interface
    userAvatar.src = user.picture || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop';
    userDisplayName.textContent = user.name;
    userDisplayName.style.display = 'inline';

    // Automatically analyze watchlist and build customized feed!
    renderRows(movies);
}

// Secure Keyboard Shortcut for Admin Dashboard (Ctrl + Shift + A)
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.code === 'KeyA') {
        e.preventDefault();
        window.location.href = 'admin.html';
    }
});

// Custom JWT Decoder for Google Credential base64 payload
function decodeJwt(token) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    } catch (e) {
        console.error("JWT decoding error:", e);
        return null;
    }
}

// Global Callback handler registered to window for Google OAuth Sign-In response
window.handleGoogleLogin = function(response) {
    const responsePayload = decodeJwt(response.credential);
    if (responsePayload) {
        const userData = {
            name: responsePayload.name,
            email: responsePayload.email,
            picture: responsePayload.picture
        };
        sessionStorage.setItem('tpf_active_user', JSON.stringify(userData));
        unlockPlatform(userData);
    }
};

// Demo/Quick Access login handler
demoLoginBtn.addEventListener('click', () => {
    const mockUser = {
        name: "Cinematic Fan",
        email: "guest@tpfcinema.com",
        picture: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop"
    };
    sessionStorage.setItem('tpf_active_user', JSON.stringify(mockUser));
    unlockPlatform(mockUser);
});

// Dropdown interface interaction
userProfileTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    profileDropdown.style.display = profileDropdown.style.display === 'none' ? 'block' : 'none';
});

document.addEventListener('click', () => {
    profileDropdown.style.display = 'none';
});

// Log out operation
logoutBtn.addEventListener('click', () => {
    sessionStorage.removeItem('tpf_active_user');
    lockPlatform();
});

// 3. Initialize App
window.addEventListener('DOMContentLoaded', () => {
    initAuth();
    initHero(currentSelectedMovie);
    renderRows(movies);
    syncWatchlistUI();


    // Scroll header styling
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            siteHeader.classList.add('scrolled');
        } else {
            siteHeader.classList.remove('scrolled');
        }
    });
});

// 4. Populate Hero Section
function initHero(movie) {
    currentSelectedMovie = movie;
    heroImage.src = movie.backdrop;
    heroBadge.textContent = movie.badge;
    heroTitle.textContent = movie.title;
    heroRating.innerHTML = `<i class="fa-solid fa-star"></i> ${movie.rating}`;
    heroYear.textContent = movie.year;
    heroDuration.textContent = movie.duration;
    heroGenre.textContent = movie.genre;
    heroDesc.textContent = movie.description;
}

// 4. Render Horizontal Movie Sliders
function renderRows(moviesList) {
    moviesSection.innerHTML = '';
    
    let activeCategoriesList = [...CATEGORIES];
    const watchlistGenres = getWatchlistInterests();
    
    // If the user has items in their watchlist, dynamically construct a real-time recommendation shelf!
    if (watchlistGenres.length > 0) {
        // Find movies matching their top watchlist genres, but EXCLUDE movies already on their watchlist!
        const personalizedMovies = moviesList.filter(movie => {
            const isAlreadyOnWatchlist = watchlist.some(w => w.id === movie.id);
            const matchesWatchlistGenre = watchlistGenres.some(interest => 
                movie.genre.toLowerCase().includes(interest.toLowerCase())
            );
            return matchesWatchlistGenre && !isAlreadyOnWatchlist;
        });
        
        if (personalizedMovies.length > 0) {
            // Add a special recommendation row at the very top of their home feed!
            const row = document.createElement('div');
            row.className = 'movie-row';
            row.innerHTML = `
                <div class="row-header">
                    <h2 class="row-title" style="color: #4cc9f0;"><i class="fa-solid fa-sparkles"></i> Recommended For Your Taste</h2>
                </div>
                <div class="slider-container">
                    <div class="slider-track" id="personalized-track"></div>
                </div>
            `;
            const personalizedTrack = row.querySelector('#personalized-track');
            
            personalizedMovies.forEach(movie => {
                const card = document.createElement('div');
                card.className = 'movie-card';
                card.innerHTML = `
                    <img src="${movie.backdrop}" alt="${movie.title}">
                    <div class="card-overlay">
                        <h3 class="card-title">${movie.title}</h3>
                        <div class="card-meta">
                            <span class="rating"><i class="fa-solid fa-star"></i> ${movie.rating}</span>
                            <span>${movie.year}</span>
                            <span>${movie.duration}</span>
                        </div>
                    </div>
                `;
                card.addEventListener('click', () => openDetailsModal(movie, card));
                personalizedTrack.appendChild(card);
            });
            
            moviesSection.appendChild(row);
        }
        
        // Dynamically reorganize other category rows based on their watchlist genre weights!
        activeCategoriesList.sort((a, b) => {
            const aMatch = watchlistGenres.some(interest => a.title.toLowerCase().includes(interest.toLowerCase()));
            const bMatch = watchlistGenres.some(interest => b.title.toLowerCase().includes(interest.toLowerCase()));
            if (aMatch && !bMatch) return -1;
            if (!aMatch && bMatch) return 1;
            return 0;
        });
    }

    // ==========================================
    // RENDER NETFLIX-STYLE TOP 10 RANKED ROW
    // ==========================================
    if (moviesList.length > 0) {
        // Sort catalog by viewsCount descending and take the top 10 movies!
        const sortedTop10 = [...moviesList]
            .sort((a, b) => (b.viewsCount || 0) - (a.viewsCount || 0))
            .slice(0, 10);

        const top10Row = document.createElement('div');
        top10Row.className = 'movie-row';
        top10Row.innerHTML = `
            <div class="row-header">
                <h2 class="row-title" style="color: #ffd166;"><i class="fa-solid fa-fire"></i> Top 10 Most Watched on TPF Cinema</h2>
            </div>
            <div class="slider-container" style="margin: 0 -1.5rem;">
                <div class="top10-track">
                    <!-- Top 10 items inserted dynamically -->
                </div>
            </div>
        `;
        const top10Track = top10Row.querySelector('.top10-track');

        sortedTop10.forEach((movie, index) => {
            const item = document.createElement('div');
            item.className = 'top10-item';
            item.innerHTML = `
                <div class="top10-rank">${index + 1}</div>
                <div class="top10-card">
                    <img src="${movie.backdrop}" alt="${movie.title}" style="width:100%; height:100%; object-fit:cover;">
                    <div class="card-overlay" style="opacity: 0; background: linear-gradient(to top, rgba(8,9,10,0.95) 0%, rgba(8,9,10,0.2) 60%, transparent 100%);">
                        <h3 class="card-title" style="font-size:0.9rem;">${movie.title}</h3>
                        <div class="card-meta" style="font-size:0.75rem;">
                            <span class="rating"><i class="fa-solid fa-star"></i> ${movie.rating}</span>
                            <span>${movie.year}</span>
                        </div>
                    </div>
                </div>
            `;

            // Hover overlay logic for Top 10 cards
            const card = item.querySelector('.top10-card');
            const overlay = item.querySelector('.card-overlay');
            item.addEventListener('mouseenter', () => { overlay.style.opacity = '1'; });
            item.addEventListener('mouseleave', () => { overlay.style.opacity = '0'; });

            item.addEventListener('click', () => openDetailsModal(movie, card));
            top10Track.appendChild(item);
        });

        moviesSection.appendChild(top10Row);
    }

    // Render the rest of the categorized sliders
    activeCategoriesList.forEach(category => {
        const filteredMovies = category.filter();
        if (filteredMovies.length === 0) return;

        const row = document.createElement('div');
        row.className = 'movie-row';

        const header = document.createElement('div');
        header.className = 'row-header';
        header.innerHTML = `<h2 class="row-title">${category.title}</h2>`;
        row.appendChild(header);

        const sliderContainer = document.createElement('div');
        sliderContainer.className = 'slider-container';

        const sliderTrack = document.createElement('div');
        sliderTrack.className = 'slider-track';

        filteredMovies.forEach(movie => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            card.innerHTML = `
                <img src="${movie.backdrop}" alt="${movie.title}">
                <div class="card-overlay">
                    <h3 class="card-title">${movie.title}</h3>
                    <div class="card-meta">
                        <span class="rating"><i class="fa-solid fa-star"></i> ${movie.rating}</span>
                        <span>${movie.year}</span>
                        <span>${movie.duration}</span>
                    </div>
                </div>
            `;
            
            card.addEventListener('click', () => openDetailsModal(movie, card));
            sliderTrack.appendChild(card);
        });

        sliderContainer.appendChild(sliderTrack);
        row.appendChild(sliderContainer);
        moviesSection.appendChild(row);
    });
}

// 5. Watchlist Operations
function toggleWatchlist(movie) {
    const index = watchlist.findIndex(item => item.id === movie.id);
    if (index > -1) {
        watchlist.splice(index, 1);
    } else {
        watchlist.push(movie);
    }
    localStorage.setItem('tpf_watchlist', JSON.stringify(watchlist));
    syncWatchlistUI();
    updateModalWatchlistBtnState(movie);
    
    // Automatically trigger feed restructuring in real time based on watchlist changes!
    renderRows(movies);
}

function syncWatchlistUI() {
    watchlistGrid.innerHTML = '';
    if (watchlist.length === 0) {
        watchlistEmptyMsg.style.display = 'block';
        return;
    }
    watchlistEmptyMsg.style.display = 'none';

    watchlist.forEach(movie => {
        const item = document.createElement('div');
        item.className = 'watchlist-item';
        item.innerHTML = `
            <img src="${movie.backdrop}" alt="${movie.title}">
            <div class="watchlist-item-info">
                <h3 class="watchlist-item-title">${movie.title}</h3>
                <div class="watchlist-item-meta">
                    <span style="color: #ffd166;"><i class="fa-solid fa-star"></i> ${movie.rating}</span> | <span>${movie.genre}</span>
                </div>
            </div>
            <button class="remove-watchlist-btn" aria-label="Remove from Watchlist">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        `;

        // Click to view
        item.addEventListener('click', (e) => {
            if (e.target.closest('.remove-watchlist-btn')) {
                toggleWatchlist(movie);
            } else {
                watchlistPanel.classList.remove('active');
                openDetailsModal(movie);
            }
        });

        watchlistGrid.appendChild(item);
    });
}

function updateModalWatchlistBtnState(movie) {
    const isSaved = watchlist.some(item => item.id === movie.id);
    if (isSaved) {
        modalWatchlistBtn.innerHTML = `<i class="fa-solid fa-check"></i> In Watchlist`;
        modalWatchlistBtn.style.backgroundColor = 'rgba(255,255,255,0.2)';
    } else {
        modalWatchlistBtn.innerHTML = `<i class="fa-solid fa-plus"></i> Add to Watchlist`;
        modalWatchlistBtn.style.backgroundColor = 'rgba(255,255,255,0.1)';
    }
}

// Side Panel Watchlist toggles
toggleWatchlistBtn.addEventListener('click', () => {
    watchlistPanel.classList.toggle('active');
});

closeWatchlistBtn.addEventListener('click', () => {
    watchlistPanel.classList.remove('active');
});

// 6. Movie Details Modal Interaction
function populateModalFields(movie) {
    modalBackdrop.src = movie.backdrop;
    modalTitle.textContent = movie.title;
    modalDescription.textContent = movie.description;
    modalRating.innerHTML = `<i class="fa-solid fa-star"></i> ${movie.rating}`;
    modalYear.textContent = movie.year;
    modalDuration.textContent = movie.duration;
    modalGenre.textContent = movie.genre;
    
    // Bind dynamic advanced fields
    const modalStudioBadge = document.getElementById('modal-studio-badge');
    const modalStudioLogo = document.getElementById('modal-studio-logo');
    const modalStudioName = document.getElementById('modal-studio-name');
    const modalAudio = document.getElementById('modal-audio');
    const modalSubtitles = document.getElementById('modal-subtitles');
    const modalCastTrack = document.getElementById('modal-cast-track');
    const modalTrailerBtn = document.getElementById('modal-trailer-btn');
    const modalEpisodesSection = document.getElementById('modal-episodes-section');
    const modalEpisodesList = document.getElementById('modal-episodes-list');

    if (movie.studioName) {
        modalStudioBadge.style.display = 'inline-flex';
        modalStudioName.textContent = movie.studioName;
        modalStudioLogo.src = movie.studioLogo || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=100&auto=format&fit=crop';
    } else {
        modalStudioBadge.style.display = 'none';
    }

    modalAudio.textContent = movie.audioTracks || "English, Spanish";
    modalSubtitles.textContent = movie.captionTracks || "English, Spanish, French";

    // Build Circular Cast Track dynamically
    modalCastTrack.innerHTML = '';
    if (movie.cast && movie.cast.length > 0) {
        movie.cast.forEach(actor => {
            const actorDiv = document.createElement('div');
            actorDiv.className = 'actor-item';
            actorDiv.innerHTML = `
                <img class="actor-avatar" src="${actor.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop'}" alt="${actor.name}">
                <span class="actor-name">${actor.name}</span>
            `;
            modalCastTrack.appendChild(actorDiv);
        });
    } else {
        modalCastTrack.innerHTML = '<span style="color: var(--text-dim); font-size: 0.9rem;">Cast metadata not available</span>';
    }

    // Series episodes handling
    if (movie.type === 'series') {
        modalPlayBtn.style.display = 'none';
        modalEpisodesSection.style.display = 'block';
        
        modalEpisodesList.innerHTML = '';
        if (movie.episodes && movie.episodes.length > 0) {
            movie.episodes.forEach((episode, index) => {
                const epRow = document.createElement('div');
                epRow.className = 'episode-item';
                epRow.style.cssText = 'display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 1rem; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; transition: background 0.2s; margin-bottom: 0.5rem;';
                
                epRow.innerHTML = `
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <span style="font-weight: 700; color: var(--accent); min-width: 24px;">${index + 1}</span>
                        <div>
                            <span style="font-weight: 600; color: #fff; display: block; font-size: 0.95rem;">${episode.title}</span>
                            <span style="font-size: 0.8rem; color: var(--text-dim);">${episode.duration || ''}</span>
                        </div>
                    </div>
                    <button class="btn btn-primary play-ep-btn" style="padding: 0.4rem 0.8rem; font-size: 0.8rem; height: auto;">
                        <i class="fa-solid fa-play"></i> Play
                    </button>
                `;
                
                epRow.querySelector('.play-ep-btn').addEventListener('click', () => {
                    detailsModal.classList.remove('active');
                    const epMovieObject = { ...movie, videoUrl: episode.videoUrl };
                    launchVideoPlayer(epMovieObject);
                });
                
                modalEpisodesList.appendChild(epRow);
            });
        } else {
            modalEpisodesList.innerHTML = '<span style="color: var(--text-dim); font-size: 0.9rem;">No episodes available.</span>';
        }
    } else {
        modalPlayBtn.style.display = 'inline-flex';
        modalEpisodesSection.style.display = 'none';
    }

    // Trailer click binder
    modalTrailerBtn.onclick = () => {
        detailsModal.classList.remove('active');
        launchVideoPlayer(movie, true); // True triggers trailer streaming!
    };

    updateModalWatchlistBtnState(movie);
}

function openDetailsModal(movie, clickedCard = null) {
    currentSelectedMovie = movie;
    
    // First populate all dynamic content in the modal
    populateModalFields(movie);
    
    const modalContent = detailsModal.querySelector('.modal-content');
    const modalHeroContent = modalContent.querySelector('.modal-hero-content');
    const modalBody = modalContent.querySelector('.modal-body');
    const modalCloseBtn = modalContent.querySelector('.close-btn');

    if (clickedCard) {
        // Retrieve card coordinates
        const rect = clickedCard.getBoundingClientRect();
        
        // Disable page scroll temporarily
        document.body.style.overflow = 'hidden';
        
        // Position modalContent exactly over the clicked card initially
        modalContent.style.transition = 'none';
        modalContent.style.position = 'fixed';
        modalContent.style.top = `${rect.top}px`;
        modalContent.style.left = `${rect.left}px`;
        modalContent.style.width = `${rect.width}px`;
        modalContent.style.height = `${rect.height}px`;
        modalContent.style.borderRadius = '12px';
        modalContent.style.opacity = '0';
        modalContent.style.overflow = 'hidden';
        
        // Hide details info/text elements initially to avoid stretching layout text during transition
        if (modalHeroContent) modalHeroContent.style.opacity = '0';
        if (modalBody) modalBody.style.opacity = '0';
        if (modalCloseBtn) modalCloseBtn.style.opacity = '0';
        
        // Activate overlay
        detailsModal.classList.add('active');
        
        // Force reflow
        modalContent.offsetHeight;
        
        // Morph the modal Content to cover the full viewport
        modalContent.style.transition = 'all 0.65s cubic-bezier(0.16, 1, 0.3, 1)';
        modalContent.style.opacity = '1';
        modalContent.style.top = '0px';
        modalContent.style.left = '0px';
        modalContent.style.width = '100vw';
        modalContent.style.height = '100vh';
        modalContent.style.borderRadius = '0px';
        
        // Fade in details info elements once expansion is nearly complete
        setTimeout(() => {
            if (modalHeroContent) {
                modalHeroContent.style.transition = 'opacity 0.4s ease';
                modalHeroContent.style.opacity = '1';
            }
            if (modalBody) {
                modalBody.style.transition = 'opacity 0.4s ease';
                modalBody.style.opacity = '1';
            }
            if (modalCloseBtn) {
                modalCloseBtn.style.transition = 'opacity 0.4s ease';
                modalCloseBtn.style.opacity = '1';
            }
            modalContent.style.overflowY = 'auto';
        }, 450);
    } else {
        // Fallback standard animation if no card coordinates passed
        modalContent.style.position = 'fixed';
        modalContent.style.top = '0px';
        modalContent.style.left = '0px';
        modalContent.style.width = '100vw';
        modalContent.style.height = '100vh';
        modalContent.style.borderRadius = '0px';
        if (modalHeroContent) modalHeroContent.style.opacity = '1';
        if (modalBody) modalBody.style.opacity = '1';
        if (modalCloseBtn) modalCloseBtn.style.opacity = '1';
        
        detailsModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeDetailsModal() {
    const modalContent = detailsModal.querySelector('.modal-content');
    const modalHeroContent = modalContent.querySelector('.modal-hero-content');
    const modalBody = modalContent.querySelector('.modal-body');
    const modalCloseBtn = modalContent.querySelector('.close-btn');
    
    // Fade out textual content first
    if (modalHeroContent) modalHeroContent.style.opacity = '0';
    if (modalBody) modalBody.style.opacity = '0';
    if (modalCloseBtn) modalCloseBtn.style.opacity = '0';
    
    // Fade out overlay
    detailsModal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Reset modal content styling after transitions finish
    setTimeout(() => {
        modalContent.style.transition = 'none';
        modalContent.style.position = '';
        modalContent.style.top = '';
        modalContent.style.left = '';
        modalContent.style.width = '';
        modalContent.style.height = '';
        modalContent.style.borderRadius = '';
        modalContent.style.opacity = '';
        modalContent.style.overflowY = '';
        
        if (modalHeroContent) modalHeroContent.style.opacity = '';
        if (modalBody) modalBody.style.opacity = '';
        if (modalCloseBtn) modalCloseBtn.style.opacity = '';
    }, 650);
}

closeDetailsBtn.addEventListener('click', closeDetailsModal);

modalWatchlistBtn.addEventListener('click', () => {
    toggleWatchlist(currentSelectedMovie);
});

// Search functionality
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (query === '') {
        renderRows(movies);
        return;
    }
    const filtered = movies.filter(movie => 
        movie.title.toLowerCase().includes(query) || 
        movie.genre.toLowerCase().includes(query) ||
        movie.description.toLowerCase().includes(query)
    );
    renderRows(filtered);
});

// Hero Buttons Action
heroPlayBtn.addEventListener('click', () => {
    if (currentSelectedMovie.type === 'series') {
        openDetailsModal(currentSelectedMovie);
    } else {
        launchVideoPlayer(currentSelectedMovie);
    }
});

heroInfoBtn.addEventListener('click', () => {
    openDetailsModal(currentSelectedMovie);
});

modalPlayBtn.addEventListener('click', () => {
    detailsModal.classList.remove('active');
    launchVideoPlayer(currentSelectedMovie);
});


// 7. Premium Custom Video Player Engine
let speedOptions = [1.0, 1.25, 1.5, 2.0];
let currentSpeedIndex = 0;
let controlsTimeout;
let currentMovieQualities = {};

function launchVideoPlayer(movie, isTrailer = false) {
    currentMovieQualities = {};
    playerQualityDropdown.innerHTML = '';
    
    let defaultVideoUrl = movie.videoUrl;
    
    // If movie (or episode) has multiple qualities mapped
    if (!isTrailer && movie.qualities && Object.keys(movie.qualities).length > 0) {
        currentMovieQualities = movie.qualities;
        
        // Find default starting resolution (prefer 1080p, else 720p, else first key)
        let defaultRes = '1080p';
        if (movie.qualities['1080p']) {
            defaultRes = '1080p';
        } else if (movie.qualities['720p']) {
            defaultRes = '720p';
        } else {
            const keys = Object.keys(movie.qualities);
            if (keys.length > 0) defaultRes = keys[0];
        }
        
        defaultVideoUrl = movie.qualities[defaultRes] || movie.videoUrl;
        playerQualityBtn.innerHTML = `<i class="fa-solid fa-sliders"></i> ${defaultRes}`;
        playerQualityBtn.style.display = 'flex';
        
        // Generate options inside dropdown dynamically
        Object.keys(movie.qualities).forEach(res => {
            if (movie.qualities[res]) {
                const btn = document.createElement('button');
                btn.style.cssText = 'background: transparent; border: none; color: #fff; width: 100%; text-align: left; padding: 0.5rem 1rem; font-size: 0.8rem; cursor: pointer; font-family: var(--font-sans); outline: none; box-sizing: border-box;';
                btn.textContent = res;
                btn.addEventListener('mouseenter', () => btn.style.background = 'rgba(255,255,255,0.08)');
                btn.addEventListener('mouseleave', () => btn.style.background = 'transparent');
                
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    switchVideoQuality(res, movie.qualities[res]);
                });
                playerQualityDropdown.appendChild(btn);
            }
        });
    } else {
        // Fallback for trailers or if no qualities map is provided
        playerQualityBtn.style.display = 'none';
        playerQualityDropdown.innerHTML = '';
    }

    nativeVideo.src = isTrailer ? (movie.trailerUrl || movie.videoUrl) : defaultVideoUrl;
    nativeVideo.play()
        .then(() => {
            playerPlayToggle.innerHTML = `<i class="fa-solid fa-pause" style="font-size: 1.25rem;"></i>`;
        })
        .catch(err => {
            console.log("Auto-play blocked or source issue, waiting for user trigger:", err);
            playerPlayToggle.innerHTML = `<i class="fa-solid fa-play" style="font-size: 1.25rem;"></i>`;
        });
        
    videoPlayerOverlay.classList.add('active');
    showControlsTemporarily();
}

function switchVideoQuality(res, url) {
    if (!url) return;
    
    // Save current play position & playback state
    const currentPos = nativeVideo.currentTime;
    const isPaused = nativeVideo.paused;
    
    nativeVideo.src = url;
    nativeVideo.load();
    
    // Restore timeline point
    nativeVideo.currentTime = currentPos;
    if (!isPaused) {
        nativeVideo.play()
            .then(() => {
                playerPlayToggle.innerHTML = `<i class="fa-solid fa-pause" style="font-size: 1.25rem;"></i>`;
            });
    }
    
    playerQualityBtn.innerHTML = `<i class="fa-solid fa-sliders"></i> ${res}`;
    playerQualityDropdown.style.display = 'none';
    showControlsTemporarily();
}

function closeVideoPlayer() {
    nativeVideo.pause();
    nativeVideo.src = "";
    videoPlayerOverlay.classList.remove('active');
    document.exitFullscreen().catch(() => {}); // exit fullscreen if active
}

closePlayerBtn.addEventListener('click', closeVideoPlayer);

// Play/Pause Action
function togglePlay() {
    if (nativeVideo.paused) {
        nativeVideo.play();
        playerPlayToggle.innerHTML = `<i class="fa-solid fa-pause" style="font-size: 1.25rem;"></i>`;
    } else {
        nativeVideo.pause();
        playerPlayToggle.innerHTML = `<i class="fa-solid fa-play" style="font-size: 1.25rem;"></i>`;
    }
    showControlsTemporarily();
}

playerPlayToggle.addEventListener('click', togglePlay);
nativeVideo.addEventListener('click', togglePlay);

// Key controls (Spacebar toggle play, escape exit)
document.addEventListener('keydown', (e) => {
    if (videoPlayerOverlay.classList.contains('active')) {
        if (e.code === 'Space') {
            e.preventDefault();
            togglePlay();
        } else if (e.code === 'ArrowRight') {
            nativeVideo.currentTime += 10;
        } else if (e.code === 'ArrowLeft') {
            nativeVideo.currentTime -= 10;
        }
    }
});

// Rewind and Forward
playerRewind.addEventListener('click', () => {
    nativeVideo.currentTime -= 10;
    showControlsTemporarily();
});

playerForward.addEventListener('click', () => {
    nativeVideo.currentTime += 10;
    showControlsTemporarily();
});

// Volume Operations
playerVolumeSlider.addEventListener('input', (e) => {
    const vol = e.target.value;
    nativeVideo.volume = vol;
    nativeVideo.muted = vol == 0;
    updateVolumeIcon(vol);
});

playerVolumeToggle.addEventListener('click', () => {
    nativeVideo.muted = !nativeVideo.muted;
    if (nativeVideo.muted) {
        playerVolumeToggle.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;
        playerVolumeSlider.value = 0;
    } else {
        playerVolumeToggle.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
        playerVolumeSlider.value = nativeVideo.volume;
    }
});

function updateVolumeIcon(vol) {
    if (vol == 0) {
        playerVolumeToggle.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;
    } else if (vol < 0.4) {
        playerVolumeToggle.innerHTML = `<i class="fa-solid fa-volume-low"></i>`;
    } else {
        playerVolumeToggle.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
    }
}

// Time formatting helper
function formatTime(seconds) {
    if (isNaN(seconds)) return "00:00";
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    
    let formatted = "";
    if (hrs > 0) {
        formatted += `${hrs}:${mins < 10 ? '0' : ''}`;
    }
    formatted += `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    return formatted;
}

// Time & Progress bar updating
nativeVideo.addEventListener('timeupdate', () => {
    const curTime = nativeVideo.currentTime;
    const durationTime = nativeVideo.duration || 0;
    
    playerCurrentTime.textContent = formatTime(curTime);
    playerDuration.textContent = formatTime(durationTime);
    
    const progressPercentage = (curTime / durationTime) * 100;
    playerProgressFilled.style.width = `${progressPercentage}%`;
});

nativeVideo.addEventListener('loadedmetadata', () => {
    playerDuration.textContent = formatTime(nativeVideo.duration);
});

// Click seek on custom progress bar
playerProgressContainer.addEventListener('click', (e) => {
    const rect = playerProgressContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const seekPercentage = clickX / width;
    nativeVideo.currentTime = seekPercentage * nativeVideo.duration;
});

// Speed Toggle
playerSpeedBtn.addEventListener('click', () => {
    currentSpeedIndex = (currentSpeedIndex + 1) % speedOptions.length;
    const selectedSpeed = speedOptions[currentSpeedIndex];
    nativeVideo.playbackRate = selectedSpeed;
    playerSpeedBtn.textContent = `${selectedSpeed}x`;
    showControlsTemporarily();
});

// Quality Dropdown Toggle
playerQualityBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    playerQualityDropdown.style.display = playerQualityDropdown.style.display === 'none' ? 'flex' : 'none';
    showControlsTemporarily();
});

// Close quality dropdown when clicking elsewhere
document.addEventListener('click', () => {
    playerQualityDropdown.style.display = 'none';
});

// Fullscreen API toggle
playerFullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        playerContainer.requestFullscreen()
            .then(() => {
                playerFullscreen.innerHTML = `<i class="fa-solid fa-compress" style="font-size: 1.15rem;"></i>`;
            })
            .catch(err => {
                console.log("Error launching fullscreen:", err);
            });
    } else {
        document.exitFullscreen();
        playerFullscreen.innerHTML = `<i class="fa-solid fa-expand" style="font-size: 1.15rem;"></i>`;
    }
});

// Hide controls when idle helper
function showControlsTemporarily() {
    playerContainer.classList.add('controls-active');
    clearTimeout(controlsTimeout);
    controlsTimeout = setTimeout(() => {
        if (!nativeVideo.paused) {
            playerContainer.classList.remove('controls-active');
        }
    }, 3000);
}

playerContainer.addEventListener('mousemove', showControlsTemporarily);
playerContainer.addEventListener('touchstart', showControlsTemporarily);

// Piracy prevention: prevent right-clicking to save video or image
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'VIDEO' || e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

// Piracy prevention: prevent dragging images/videos
document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
        e.preventDefault();
    }
});






