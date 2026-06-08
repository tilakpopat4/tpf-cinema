// TPF Cinema - Standalone Admin Portal Logic

// Fallback initial dataset if local catalog is empty
const INITIAL_FALLBACK = [
    {
        id: "tpf-01",
        title: "Echoes of Orion",
        genre: "Sci-Fi, Adventure",
        year: 2026,
        duration: "2h 14m",
        rating: "8.9",
        description: "In the silent expansion of the Orion Belt, an isolated surveyor discovers a dormant signal radiating a language older than gravity.",
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
    }
];

// 1. Dynamic Catalog Load
let movies = JSON.parse(localStorage.getItem('tpf_catalog')) || INITIAL_FALLBACK;
let featuredMovieId = localStorage.getItem('tpf_featured_id') || "tpf-01";

// 2. DOM Elements Mapping
const tabCatalog = document.getElementById('admin-tab-catalog');
const tabHero = document.getElementById('admin-tab-hero');
const tabFirebase = document.getElementById('admin-tab-firebase');
const panelCatalog = document.getElementById('panel-catalog');
const panelHero = document.getElementById('panel-hero');
const panelFirebase = document.getElementById('panel-firebase');

// Catalog list elements
const catalogTableBody = document.getElementById('catalog-table-body');
const addMovieTrigger = document.getElementById('add-movie-trigger');
const movieFormModal = document.getElementById('movie-form-modal');
const closeMovieFormModal = document.getElementById('close-movie-form-modal');
const movieEditorForm = document.getElementById('movie-editor-form');
const formCancelBtn = document.getElementById('form-cancel-btn');

// Form Inputs
const formMovieId = document.getElementById('form-movie-id');
const formType = document.getElementById('form-type');
const formTitle = document.getElementById('form-title');
const formGenre = document.getElementById('form-genre');
const formYear = document.getElementById('form-year');
const formDuration = document.getElementById('form-duration');
const formRating = document.getElementById('form-rating');
const formBackdrop = document.getElementById('form-backdrop');
const formPortrait = document.getElementById('form-portrait');
const formVideo = document.getElementById('form-video');
const formVideo720 = document.getElementById('form-video-720');
const formVideo360 = document.getElementById('form-video-360');
const formVideo4k = document.getElementById('form-video-4k');
const formTrailer = document.getElementById('form-trailer');
const formStudioName = document.getElementById('form-studio-name');
const formStudioLogo = document.getElementById('form-studio-logo');
const formAudio = document.getElementById('form-audio');
const formSubtitles = document.getElementById('form-subtitles');
const castMembersContainer = document.getElementById('cast-members-container');
const addCastMemberBtn = document.getElementById('add-cast-member-btn');

// Series specific elements
const movieMediaFieldsGroup = document.getElementById('movie-media-fields-group');
const seriesEpisodesGroup = document.getElementById('series-episodes-group');
const episodesContainer = document.getElementById('episodes-container');
const addEpisodeBtn = document.getElementById('add-episode-btn');

const formCategory = document.getElementById('form-category');
const formBadge = document.getElementById('form-badge');
const formDesc = document.getElementById('form-desc');
const formModalTitle = document.getElementById('form-modal-title');

// Hero Banner Manager
const heroSelectionDropdown = document.getElementById('hero-selection-dropdown');
const saveHeroSelection = document.getElementById('save-hero-selection');

// Stats Widgets
const statTotalMovies = document.getElementById('stat-total-movies');
const statTotalGenres = document.getElementById('stat-total-genres');

// 3. Tab switching mechanisms
tabCatalog.addEventListener('click', () => {
    tabCatalog.classList.add('active');
    tabHero.classList.remove('active');
    tabFirebase.classList.remove('active');
    panelCatalog.style.display = 'block';
    panelHero.style.display = 'none';
    panelFirebase.style.display = 'none';
});

tabHero.addEventListener('click', () => {
    tabHero.classList.add('active');
    tabCatalog.classList.remove('active');
    tabFirebase.classList.remove('active');
    panelHero.style.display = 'block';
    panelCatalog.style.display = 'none';
    panelFirebase.style.display = 'none';
    syncHeroDropdown();
});

tabFirebase.addEventListener('click', () => {
    tabFirebase.classList.add('active');
    tabCatalog.classList.remove('active');
    tabHero.classList.remove('active');
    panelFirebase.style.display = 'block';
    panelCatalog.style.display = 'none';
    panelHero.style.display = 'none';
    loadFirebaseConfigFields();
});

// 4. Initialize dashboard elements & handlers
window.addEventListener('DOMContentLoaded', () => {
    initFirebaseCloud();
    syncCatalogTable();
    initLocalFilePickers();
});

// Helper to route file upload to Firebase Cloud Storage or fallback local URL
let firebaseStorage = null;

function handleCloudOrLocalUpload(file, targetInput) {
    if (!file) return;
    
    // Check if Firebase Cloud Storage is configured and initialized
    if (firebaseStorage) {
        targetInput.disabled = true;
        targetInput.value = "Uploading to Cloud (0%)...";
        
        const storageRef = firebaseStorage.ref();
        const folder = file.type.startsWith('video/') ? 'videos' : 'images';
        const fileRef = storageRef.child(`tpf-cinema/${folder}/${Date.now()}_${file.name}`);
        const uploadTask = fileRef.put(file);
        
        uploadTask.on('state_changed', 
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                targetInput.value = `Uploading to Cloud (${progress}%)...`;
            }, 
            (error) => {
                console.error("Firebase upload error:", error);
                alert("Cloud Upload Failed: " + error.message);
                targetInput.value = "";
                targetInput.disabled = false;
            }, 
            () => {
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    targetInput.value = downloadURL;
                    targetInput.disabled = false;
                });
            }
        );
    } else {
        // Revert to Local / Offline mode
        if (file.type.startsWith('video/')) {
            const videoUrl = URL.createObjectURL(file);
            targetInput.value = videoUrl;
        } else if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (event) => {
                targetInput.value = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    }
}

// Setup File Pickers to load base64/object URLs or upload to Firebase
function initLocalFilePickers() {
    document.querySelectorAll('.local-file-picker').forEach(picker => {
        picker.addEventListener('change', (e) => {
            const file = e.target.files[0];
            const targetId = picker.getAttribute('data-target');
            const targetInput = document.getElementById(targetId);
            handleCloudOrLocalUpload(file, targetInput);
        });
    });

    // Attach auto Drive URL converter to static inputs
    const driveInputs = ['form-backdrop', 'form-portrait', 'form-video', 'form-video-720', 'form-video-360', 'form-video-4k', 'form-trailer', 'form-studio-logo'];
    driveInputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) setupDriveAutoConverter(el);
    });
}

// Convert shareable Google Drive URLs to Direct streaming URLs
function convertGoogleDriveLink(url) {
    if (!url) return '';
    const trimmed = url.trim();
    
    // Matches standard file/d/FILE_ID/view
    const reg1 = /\/file\/d\/([a-zA-Z0-9_-]+)/;
    // Matches queries ?id=FILE_ID
    const reg2 = /[?&]id=([a-zA-Z0-9_-]+)/;
    // Matches short share links /open?id=FILE_ID
    const reg3 = /drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/;
    
    let fileId = '';
    if (reg1.test(trimmed)) {
        fileId = trimmed.match(reg1)[1];
    } else if (reg3.test(trimmed)) {
        fileId = trimmed.match(reg3)[1];
    } else if (reg2.test(trimmed)) {
        fileId = trimmed.match(reg2)[1];
    }
    
    if (fileId) {
        return `https://docs.google.com/uc?export=download&id=${fileId}`;
    }
    return trimmed;
}

function setupDriveAutoConverter(input) {
    input.addEventListener('blur', () => {
        input.value = convertGoogleDriveLink(input.value);
    });
    input.addEventListener('paste', () => {
        setTimeout(() => {
            input.value = convertGoogleDriveLink(input.value);
        }, 50);
    });
}

// Dynamic Cast Builder functions
function addCastRow(name = '', avatar = '') {
    const row = document.createElement('div');
    row.className = 'cast-row';
    row.style.cssText = 'display: flex; gap: 0.5rem; align-items: center;';
    
    row.innerHTML = `
        <input type="text" placeholder="Actor Name" class="cast-name" value="${name}" required style="flex: 1; padding: 0.6rem;">
        <div style="display: flex; gap: 0.4rem; align-items: center; flex: 1.5;">
            <input type="text" placeholder="Avatar URL or upload..." class="cast-avatar" value="${avatar}" required style="flex: 1; padding: 0.6rem;">
            <label class="file-upload-btn" style="background: rgba(255,255,255,0.06); padding: 0.6rem 0.8rem; border-radius: 8px; border: 1px dashed var(--border-glass); cursor: pointer; color: var(--text-main); font-size: 0.8rem; display: flex; align-items: center; gap: 0.3rem;">
                <i class="fa-solid fa-cloud-arrow-up"></i>
                <input type="file" accept="image/*" class="local-cast-avatar-picker" style="display: none;">
            </label>
        </div>
        <button type="button" class="btn btn-secondary remove-cast-row-btn" style="padding: 0.6rem; background: rgba(239, 71, 111, 0.15); border-color: rgba(239, 71, 111, 0.2); color: #ef476f; font-size: 0.85rem;" aria-label="Remove Cast Member">
            <i class="fa-solid fa-trash-can"></i>
        </button>
    `;
    
    // File upload handler inside cast avatar row
    const fileInput = row.querySelector('.local-cast-avatar-picker');
    const avatarInput = row.querySelector('.cast-avatar');
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        handleCloudOrLocalUpload(file, avatarInput);
    });
    
    // Remove button handler
    row.querySelector('.remove-cast-row-btn').addEventListener('click', () => {
        row.remove();
    });
    
    castMembersContainer.appendChild(row);
}

addCastMemberBtn.addEventListener('click', () => {
    addCastRow();
});

// Setup Content Type Fields toggling (Movie vs Series)
formType.addEventListener('change', () => {
    toggleTypeFields(formType.value);
});

function toggleTypeFields(type) {
    if (type === 'series') {
        movieMediaFieldsGroup.style.display = 'none';
        seriesEpisodesGroup.style.display = 'block';
        formVideo.required = false;
        formTrailer.required = false;
        
        // Enable required validation on episode inputs
        episodesContainer.querySelectorAll('.episode-title, .episode-duration, .episode-video').forEach(input => {
            input.required = true;
        });
    } else {
        movieMediaFieldsGroup.style.display = 'grid';
        seriesEpisodesGroup.style.display = 'none';
        formVideo.required = true;
        formTrailer.required = true;
        
        // Disable required validation on episode inputs
        episodesContainer.querySelectorAll('.episode-title, .episode-duration, .episode-video').forEach(input => {
            input.required = false;
        });
    }
}

// Dynamic Episode Row Builder
function addEpisodeRow(title = '', videoUrl = '', duration = '') {
    const row = document.createElement('div');
    row.className = 'episode-row';
    row.style.cssText = 'display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;';
    
    const isRequired = formType.value === 'series' ? 'required' : '';
    
    row.innerHTML = `
        <input type="text" placeholder="Episode Title" class="episode-title" value="${title}" ${isRequired} style="flex: 1; padding: 0.6rem;">
        <input type="text" placeholder="Duration (e.g. 45m)" class="episode-duration" value="${duration}" ${isRequired} style="width: 100px; padding: 0.6rem;">
        <div style="display: flex; gap: 0.4rem; align-items: center; flex: 1.5;">
            <input type="text" placeholder="Video Link or upload..." class="episode-video" value="${videoUrl}" ${isRequired} style="flex: 1; padding: 0.6rem;">
            <label class="file-upload-btn" style="background: rgba(255,255,255,0.06); padding: 0.6rem 0.8rem; border-radius: 8px; border: 1px dashed var(--border-glass); cursor: pointer; color: var(--text-main); font-size: 0.8rem; display: flex; align-items: center; gap: 0.3rem;">
                <i class="fa-solid fa-cloud-arrow-up"></i>
                <input type="file" accept="video/*" class="local-episode-video-picker" style="display: none;">
            </label>
        </div>
        <button type="button" class="btn btn-secondary remove-episode-row-btn" style="padding: 0.6rem; background: rgba(239, 71, 111, 0.15); border-color: rgba(239, 71, 111, 0.2); color: #ef476f; font-size: 0.85rem;" aria-label="Remove Episode">
            <i class="fa-solid fa-trash-can"></i>
        </button>
    `;
    
    // File upload handler inside episode video row
    const fileInput = row.querySelector('.local-episode-video-picker');
    const videoInput = row.querySelector('.episode-video');
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        handleCloudOrLocalUpload(file, videoInput);
    });
    setupDriveAutoConverter(videoInput);
    
    // Remove button handler
    row.querySelector('.remove-episode-row-btn').addEventListener('click', () => {
        row.remove();
    });
    
    episodesContainer.appendChild(row);
}

addEpisodeBtn.addEventListener('click', () => {
    addEpisodeRow();
});

// 5. Sync Catalog Table Grid & Stats
function syncCatalogTable() {
    catalogTableBody.innerHTML = '';
    
    // Update stats counters
    statTotalMovies.textContent = movies.length;
    const genresSet = new Set();
    movies.forEach(m => m.genre.split(',').forEach(g => genresSet.add(g.trim().toLowerCase())));
    statTotalGenres.textContent = genresSet.size;

    movies.forEach(movie => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><img src="${movie.backdrop}" alt="${movie.title}" style="width:64px; aspect-ratio:16/9; object-fit:cover; border-radius:4px;"></td>
            <td style="font-weight: 700; color: #fff;">${movie.title}</td>
            <td style="color: var(--text-muted);">${movie.genre} <span style="background: rgba(255,255,255,0.06); padding: 0.15rem 0.4rem; border-radius: 4px; font-size: 0.7rem; border: 1px solid var(--border-glass); text-transform: capitalize; margin-left: 0.5rem; color: #4cc9f0;">${movie.type || 'movie'}</span></td>
            <td style="color: #fff;">${movie.year}</td>
            <td><span style="color: #ffd166;"><i class="fa-solid fa-star"></i> ${movie.rating}</span></td>
            <td style="text-align: right;">
                <div class="action-btn-group">
                    <button class="action-edit-btn" data-id="${movie.id}"><i class="fa-solid fa-pen"></i> Edit</button>
                    <button class="action-delete-btn" data-id="${movie.id}"><i class="fa-solid fa-trash"></i> Delete</button>
                </div>
            </td>
        `;

        // Bind Action event listeners
        tr.querySelector('.action-edit-btn').addEventListener('click', () => editMoviePrompt(movie));
        tr.querySelector('.action-delete-btn').addEventListener('click', () => deleteMoviePrompt(movie.id));
        
        catalogTableBody.appendChild(tr);
    });
}

// 6. Add Movie modal triggers
addMovieTrigger.addEventListener('click', () => {
    formModalTitle.textContent = "Add New Item";
    movieEditorForm.reset();
    formMovieId.value = '';
    formType.value = 'movie';
    toggleTypeFields('movie');
    
    // Reset cast members container and add one empty row
    castMembersContainer.innerHTML = '';
    addCastRow();

    // Reset episodes container and add one empty row
    episodesContainer.innerHTML = '';
    addEpisodeRow();
    
    movieFormModal.classList.add('active');
});

closeMovieFormModal.addEventListener('click', () => movieFormModal.classList.remove('active'));
formCancelBtn.addEventListener('click', () => movieFormModal.classList.remove('active'));

// 7. Edit movie loader
function editMoviePrompt(movie) {
    formModalTitle.textContent = "Edit Catalog Details";
    formMovieId.value = movie.id;
    formType.value = movie.type || 'movie';
    toggleTypeFields(formType.value);

    formTitle.value = movie.title;
    formGenre.value = movie.genre;
    formYear.value = movie.year;
    formDuration.value = movie.duration;
    formRating.value = movie.rating;
    formBackdrop.value = movie.backdrop;
    formDesc.value = movie.description;
    formBadge.value = movie.badge || '';
    
    // Populate advanced fields
    formPortrait.value = movie.portraitPoster || '';
    formVideo.value = (movie.qualities && movie.qualities['1080p']) || movie.videoUrl || '';
    formVideo720.value = (movie.qualities && movie.qualities['720p']) || '';
    formVideo360.value = (movie.qualities && movie.qualities['360p']) || '';
    formVideo4k.value = (movie.qualities && movie.qualities['4k']) || '';
    formTrailer.value = movie.trailerUrl || '';
    formStudioName.value = movie.studioName || '';
    formStudioLogo.value = movie.studioLogo || '';
    formAudio.value = movie.audioTracks || '';
    formSubtitles.value = movie.captionTracks || '';
    
    // Format cast array into dynamic inputs
    castMembersContainer.innerHTML = '';
    if (movie.cast && movie.cast.length > 0) {
        movie.cast.forEach(c => addCastRow(c.name, c.avatar));
    } else {
        addCastRow();
    }

    // Format episodes into dynamic inputs (if Series type)
    episodesContainer.innerHTML = '';
    if (movie.type === 'series' && movie.episodes && movie.episodes.length > 0) {
        movie.episodes.forEach(ep => addEpisodeRow(ep.title, ep.videoUrl, ep.duration));
    } else {
        addEpisodeRow();
    }
    
    // Map category select back
    if (movie.genre.toLowerCase().includes("sci-fi")) {
        formCategory.value = "scifi";
    } else if (movie.genre.toLowerCase().includes("drama")) {
        formCategory.value = "drama";
    } else if (movie.genre.toLowerCase().includes("indie")) {
        formCategory.value = "indie";
    } else {
        formCategory.value = "trending";
    }

    movieFormModal.classList.add('active');
}

// 8. Form submit handler (Save / Update local database catalog)
movieEditorForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const id = formMovieId.value;
    const type = formType.value;
    
    // Parse Cast rows dynamically
    const castRows = castMembersContainer.querySelectorAll('.cast-row');
    const parsedCast = Array.from(castRows).map(row => {
        const name = row.querySelector('.cast-name').value.trim();
        const avatar = row.querySelector('.cast-avatar').value.trim();
        return { name, avatar };
    }).filter(c => c.name !== '');

    // Parse Episode rows dynamically (only for Series)
    let parsedEpisodes = [];
    if (type === 'series') {
        const epRows = episodesContainer.querySelectorAll('.episode-row');
        parsedEpisodes = Array.from(epRows).map((row, idx) => {
            const epTitle = row.querySelector('.episode-title').value.trim();
            const epDuration = row.querySelector('.episode-duration').value.trim();
            const epVideo = row.querySelector('.episode-video').value.trim();
            return {
                id: `ep-${Date.now()}-${idx}`,
                title: epTitle,
                duration: epDuration,
                videoUrl: epVideo
            };
        }).filter(ep => ep.title !== '');
    }

    const qualities = {
        '1080p': formVideo.value.trim(),
        '720p': formVideo720.value.trim(),
        '360p': formVideo360.value.trim(),
        '4k': formVideo4k.value.trim()
    };

    const details = {
        type: type,
        title: formTitle.value.trim(),
        genre: formGenre.value.trim(),
        year: parseInt(formYear.value),
        duration: formDuration.value.trim(),
        rating: formRating.value.trim(),
        backdrop: formBackdrop.value.trim(),
        portraitPoster: formPortrait.value.trim(),
        videoUrl: type === 'series' ? '' : (qualities['1080p'] || formVideo.value.trim()),
        qualities: type === 'series' ? {} : qualities,
        trailerUrl: formTrailer.value.trim(),
        badge: formBadge.value.trim(),
        description: formDesc.value.trim(),
        studioName: formStudioName.value.trim(),
        studioLogo: formStudioLogo.value.trim(),
        audioTracks: formAudio.value.trim(),
        captionTracks: formSubtitles.value.trim(),
        cast: parsedCast,
        episodes: parsedEpisodes
    };

    if (id) {
        // Edit existing item
        const index = movies.findIndex(m => m.id === id);
        if (index > -1) {
            const originalViews = movies[index].viewsCount || 100;
            movies[index] = { id, viewsCount: originalViews, ...details };
        }
    } else {
        // Add new item
        const newId = 'tpf-' + Date.now();
        movies.push({ id: newId, viewsCount: 800, ...details });
    }

    // Save modifications to localStorage database catalog
    localStorage.setItem('tpf_catalog', JSON.stringify(movies));
    syncCatalogToFirebaseCloud();
    
    movieFormModal.classList.remove('active');
    syncCatalogTable();
});

// Helper to write complete database catalog JSON to Firebase Cloud Storage
function syncCatalogToFirebaseCloud() {
    if (!firebaseStorage) {
        console.log("Local database saved. Cloud Sync is disabled.");
        return;
    }
    
    try {
        const json = JSON.stringify(movies);
        const blob = new Blob([json], { type: 'application/json' });
        
        const storageRef = firebaseStorage.ref();
        const catalogRef = storageRef.child('tpf-cinema/database/catalog.json');
        
        catalogRef.put(blob).then(() => {
            console.log("Database catalog JSON synced to Firebase Storage successfully.");
        }).catch(err => {
            console.error("Firebase Storage database sync failure:", err);
        });
    } catch (error) {
        console.error("JSON serialization failed:", error);
    }
}

// 9. Delete movie handler
function deleteMoviePrompt(id) {
    if (confirm("Are you sure you want to delete this movie item from the TPF Cinema catalog?")) {
        movies = movies.filter(m => m.id !== id);
        localStorage.setItem('tpf_catalog', JSON.stringify(movies));
        syncCatalogToFirebaseCloud();
        
        syncCatalogTable();
        
        // If deleted movie was featured, reset to first available
        if (id === featuredMovieId) {
            featuredMovieId = movies.length > 0 ? movies[0].id : '';
            localStorage.setItem('tpf_featured_id', featuredMovieId);
        }
    }
}

// 10. Hero dropdown builder
function syncHeroDropdown() {
    heroSelectionDropdown.innerHTML = '';
    movies.forEach(movie => {
        const option = document.createElement('option');
        option.value = movie.id;
        option.textContent = movie.title;
        if (movie.id === featuredMovieId) {
            option.selected = true;
        }
        heroSelectionDropdown.appendChild(option);
    });
}

// Apply Featured Banner Selection
saveHeroSelection.addEventListener('click', () => {
    const selectedId = heroSelectionDropdown.value;
    if (selectedId) {
        featuredMovieId = selectedId;
        localStorage.setItem('tpf_featured_id', selectedId);
        syncCatalogToFirebaseCloud();
        
        const selectedMovie = movies.find(m => m.id === selectedId);
        if (selectedMovie) {
            alert(`"${selectedMovie.title}" is now set as the featured homepage Hero banner!`);
        }
    }
});

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

// ==========================================
// FIREBASE CLOUD STORAGE CONTROLLER LOGIC
// ==========================================

const firebaseConfigForm = document.getElementById('firebase-config-form');
const fbClearConfig = document.getElementById('fb-clear-config');

if (firebaseConfigForm) {
    firebaseConfigForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const config = {
            apiKey: document.getElementById('fb-api-key').value.trim(),
            authDomain: document.getElementById('fb-auth-domain').value.trim(),
            projectId: document.getElementById('fb-project-id').value.trim(),
            storageBucket: document.getElementById('fb-storage-bucket').value.trim(),
            appId: document.getElementById('fb-app-id').value.trim()
        };
        localStorage.setItem('tpf_firebase_config', JSON.stringify(config));
        alert("Firebase Cloud configuration saved successfully! Re-initializing...");
        initFirebaseCloud();
        
        // Return to Catalog View
        tabCatalog.click();
    });
}

if (fbClearConfig) {
    fbClearConfig.addEventListener('click', () => {
        if (confirm("Are you sure you want to clear your Firebase cloud settings and revert to Local storage?")) {
            localStorage.removeItem('tpf_firebase_config');
            document.getElementById('fb-api-key').value = '';
            document.getElementById('fb-auth-domain').value = '';
            document.getElementById('fb-project-id').value = '';
            document.getElementById('fb-storage-bucket').value = '';
            document.getElementById('fb-app-id').value = '';
            alert("Firebase settings cleared. Direct file picker is now reverted to Local mode.");
            initFirebaseCloud();
        }
    });
}

const DEFAULT_FIREBASE_CONFIG = {
    apiKey: "AIzaSyCm_d7Sp5HZ3UIx9oFW5sp82QGWVSPljBw",
    authDomain: "tpf-cinema-d0c81.firebaseapp.com",
    projectId: "tpf-cinema-d0c81",
    storageBucket: "tpf-cinema-d0c81.firebasestorage.app",
    appId: "1:93228732295:web:b6464fb44229541ba68d22"
};

function loadFirebaseConfigFields() {
    const configStr = localStorage.getItem('tpf_firebase_config');
    let config = DEFAULT_FIREBASE_CONFIG;
    if (configStr) {
        try {
            config = JSON.parse(configStr);
        } catch (e) {
            console.error("Failed to parse config from localStorage:", e);
        }
    }
    document.getElementById('fb-api-key').value = config.apiKey || '';
    document.getElementById('fb-auth-domain').value = config.authDomain || '';
    document.getElementById('fb-project-id').value = config.projectId || '';
    document.getElementById('fb-storage-bucket').value = config.storageBucket || '';
    document.getElementById('fb-app-id').value = config.appId || '';
}

function initFirebaseCloud() {
    const statStorageSync = document.getElementById('stat-storage-sync');
    const configStr = localStorage.getItem('tpf_firebase_config');
    let config = null;
    
    if (configStr) {
        try {
            config = JSON.parse(configStr);
        } catch (e) {
            console.error("Failed to parse config from localStorage:", e);
        }
    }
    
    // Fall back to default hardcoded config if none is stored
    if (!config) {
        config = DEFAULT_FIREBASE_CONFIG;
    }
    
    if (config) {
        try {
            // Re-initialize only if Firebase isn't already active
            if (firebase.apps.length === 0) {
                firebase.initializeApp(config);
            }
            firebaseStorage = firebase.storage();
            if (statStorageSync) {
                statStorageSync.textContent = "Cloud Sync";
                statStorageSync.style.color = "#4cc9f0";
            }
        } catch (error) {
            console.error("Firebase init failed:", error);
            if (statStorageSync) {
                statStorageSync.textContent = "Sync Error";
                statStorageSync.style.color = "#ef476f";
            }
            firebaseStorage = null;
        }
    } else {
        firebaseStorage = null;
        if (statStorageSync) {
            statStorageSync.textContent = "Local";
            statStorageSync.style.color = "#a2a2b0";
        }
    }
}
