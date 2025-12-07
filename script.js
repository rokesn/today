// ============================================
// SportsPulse - Interactive JavaScript
// ============================================

// === NAVIGATION ===
const header = document.getElementById('header');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Active nav link on scroll
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });

                // Close mobile menu
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');

                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
});

// === LIVE MATCHES DATA ===
const liveMatchesData = [
    {
        id: 1,
        sport: 'football',
        league: 'Serie A',
        team1: { name: 'Lecce', logo: 'https://media.api-sports.io/football/teams/867.png', score: 2 },
        team2: { name: 'Torino', logo: 'https://media.api-sports.io/football/teams/503.png', score: 1 },
        time: 'LIVE',
        status: 'LIVE'
    },
    {
        id: 2,
        sport: 'football',
        league: 'Premier League',
        team1: { name: 'Crystal Palace', logo: 'https://media.api-sports.io/football/teams/52.png', score: 1 },
        team2: { name: 'Manchester United', logo: 'https://media.api-sports.io/football/teams/33.png', score: 0 },
        time: 'LIVE',
        status: 'LIVE'
    },
    {
        id: 3,
        sport: 'football',
        league: 'Scottish Premiership',
        team1: { name: 'Hibernian', logo: 'https://media.api-sports.io/football/teams/252.png', score: 0 },
        team2: { name: 'Celtic', logo: 'https://media.api-sports.io/football/teams/247.png', score: 2 },
        time: 'LIVE',
        status: 'LIVE'
    },
    {
        id: 4,
        sport: 'football',
        league: 'Czech League',
        team1: { name: 'Bohemians 1905', logo: 'https://media.api-sports.io/football/teams/607.png', score: 0 },
        team2: { name: 'Greenhouse', logo: 'https://flagcdn.com/w40/cz.png', score: 0 },
        time: 'LIVE',
        status: 'LIVE'
    },
    {
        id: 5,
        sport: 'football',
        league: 'French Regional',
        team1: { name: 'Saint-Cyr Collonges', logo: 'https://flagcdn.com/w40/fr.png', score: 2 },
        team2: { name: 'Rhone-Vallee', logo: 'https://flagcdn.com/w40/fr.png', score: 0 },
        time: 'LIVE',
        status: 'LIVE'
    },
    {
        id: 6,
        sport: 'football',
        league: 'French Regional',
        team1: { name: 'MJEP Cormontreuil', logo: 'https://flagcdn.com/w40/fr.png', score: 0 },
        team2: { name: 'Chantilly', logo: 'https://flagcdn.com/w40/fr.png', score: 0 },
        time: 'LIVE',
        status: 'LIVE'
    },
    {
        id: 7,
        sport: 'football',
        league: 'French National',
        team1: { name: 'Avranches', logo: 'https://media.api-sports.io/football/teams/2290.png', score: 1 },
        team2: { name: 'Aubervilliers', logo: 'https://flagcdn.com/w40/fr.png', score: 0 },
        time: 'LIVE',
        status: 'LIVE'
    },
    {
        id: 8,
        sport: 'football',
        league: 'International U-17',
        team1: { name: 'Thailand U-17', logo: 'https://flagcdn.com/w40/th.png', score: 0 },
        team2: { name: 'Kuwait U-17', logo: 'https://flagcdn.com/w40/kw.png', score: 2 },
        time: 'LIVE',
        status: 'LIVE'
    },
    {
        id: 9,
        sport: 'football',
        league: 'Azerbaijan League',
        team1: { name: 'Gabala', logo: 'https://media.api-sports.io/football/teams/3490.png', score: 1 },
        team2: { name: 'Araz-Nakhchivan', logo: 'https://flagcdn.com/w40/az.png', score: 2 },
        time: 'LIVE',
        status: 'LIVE'
    },
    {
        id: 10,
        sport: 'football',
        league: 'Regional League',
        team1: { name: 'Jan', logo: 'https://flagcdn.com/w40/de.png', score: 0 },
        team2: { name: 'Hansa', logo: 'https://media.api-sports.io/football/teams/182.png', score: 1 },
        time: 'LIVE',
        status: 'LIVE'
    }
];

// === UPCOMING MATCHES DATA ===
const upcomingMatchesData = [
    {
        id: 1,
        sport: 'football',
        league: 'U-20 Women',
        team1: { name: 'Australia U-20', logo: 'https://flagcdn.com/w40/au.png' },
        team2: { name: 'South Korea U-20', logo: 'https://flagcdn.com/w40/kr.png' },
        startTime: new Date(Date.now() + 2 * 60 * 60 * 1000) // 2 hours from now
    },
    {
        id: 2,
        sport: 'football',
        league: 'U-17 Friendly',
        team1: { name: 'Guam U17', logo: 'https://flagcdn.com/w40/gu.png' },
        team2: { name: 'Pakistan U17', logo: 'https://flagcdn.com/w40/pk.png' },
        startTime: new Date(Date.now() + 5 * 60 * 60 * 1000) // 5 hours from now
    },
    {
        id: 3,
        sport: 'football',
        league: 'U-17 Friendly',
        team1: { name: 'Kyrgyzstan U17', logo: 'https://flagcdn.com/w40/kg.png' },
        team2: { name: 'Cambodia U17', logo: 'https://flagcdn.com/w40/kh.png' },
        startTime: new Date(Date.now() + 5 * 60 * 60 * 1000) // 5 hours from now
    },
    {
        id: 4,
        sport: 'football',
        league: 'U-17 Friendly',
        team1: { name: 'China U-17', logo: 'https://flagcdn.com/w40/cn.png' },
        team2: { name: 'Bangladesh U17', logo: 'https://flagcdn.com/w40/bd.png' },
        startTime: new Date(Date.now() + 7.5 * 60 * 60 * 1000) // 7.5 hours from now
    },
    {
        id: 5,
        sport: 'football',
        league: 'U-17 Friendly',
        team1: { name: 'Vietnam U-17', logo: 'https://flagcdn.com/w40/vn.png' },
        team2: { name: 'Malaysia U-17', logo: 'https://flagcdn.com/w40/my.png' },
        startTime: new Date(Date.now() + 8 * 60 * 60 * 1000) // 8 hours from now
    },
    {
        id: 6,
        sport: 'football',
        league: 'U-17 Friendly',
        team1: { name: 'Singapore U17', logo: 'https://flagcdn.com/w40/sg.png' },
        team2: { name: 'Hong Kong U17', logo: 'https://flagcdn.com/w40/hk.png' },
        startTime: new Date(Date.now() + 8 * 60 * 60 * 1000) // 8 hours from now
    },
    {
        id: 7,
        sport: 'football',
        league: 'U-17 Friendly',
        team1: { name: 'Oman U-17', logo: 'https://flagcdn.com/w40/om.png' },
        team2: { name: 'Afghanistan U-17', logo: 'https://flagcdn.com/w40/af.png' },
        startTime: new Date(Date.now() + 8.5 * 60 * 60 * 1000) // 8.5 hours from now
    },
    {
        id: 8,
        sport: 'football',
        league: 'U-17 Friendly',
        team1: { name: 'Yemen U-17', logo: 'https://flagcdn.com/w40/ye.png' },
        team2: { name: 'Laos U-17', logo: 'https://flagcdn.com/w40/la.png' },
        startTime: new Date(Date.now() + 9 * 60 * 60 * 1000) // 9 hours from now
    },
    {
        id: 9,
        sport: 'football',
        league: 'Club Friendly',
        team1: { name: 'Vichy Krakow', logo: 'https://flagcdn.com/w40/pl.png' },
        team2: { name: 'Silesia', logo: 'https://flagcdn.com/w40/pl.png' },
        startTime: new Date(Date.now() + 9.5 * 60 * 60 * 1000) // 9.5 hours from now
    },
    {
        id: 10,
        sport: 'football',
        league: 'Club Friendly',
        team1: { name: 'Hartberg', logo: 'https://flagcdn.com/w40/at.png' },
        team2: { name: 'Storm', logo: 'https://flagcdn.com/w40/no.png' },
        startTime: new Date(Date.now() + 9.5 * 60 * 60 * 1000) // 9.5 hours from now
    }
];

// === RENDER LIVE MATCHES ==
function renderLiveMatches(filter = 'all') {
    const container = document.getElementById('liveMatches');

    let filteredMatches = liveMatchesData;
    if (filter !== 'all') {
        filteredMatches = liveMatchesData.filter(match => match.sport === filter);
    }

    container.innerHTML = filteredMatches.map(match => {
        return `
            <div class="match-card" data-match-id="${match.id}">
                <div class="match-header">
                    <span class="match-league">${match.league}</span>
                    <span class="match-status">
                        <span class="live-dot"></span>
                        ${match.time}
                    </span>
                </div>
                <div class="match-teams">
                    <div class="team">
                        <div class="team-info">
                            <div class="team-logo"><img src="${match.team1.logo}" alt="${match.team1.name}" /></div>
                            <span class="team-name">${match.team1.name}</span>
                        </div>
                        <span class="team-score">${match.team1.score}</span>
                    </div>
                    <div class="team">
                        <div class="team-info">
                            <div class="team-logo"><img src="${match.team2.logo}" alt="${match.team2.name}" /></div>
                            <span class="team-name">${match.team2.name}</span>
                        </div>
                        <span class="team-score">${match.team2.score}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Add click event to match cards
    document.querySelectorAll('.match-card').forEach(card => {
        card.addEventListener('click', () => {
            const matchId = card.getAttribute('data-match-id');
            // Navigate to match details page
            window.location.href = `match.html?id=${matchId}`;
        });
    });
}

// === RENDER UPCOMING MATCHES ===
function renderUpcomingMatches() {
    const container = document.getElementById('upcomingMatches');

    container.innerHTML = upcomingMatchesData.map(match => {
        const timeUntil = getTimeUntil(match.startTime);

        return `
            <div class="upcoming-match">
                <span class="upcoming-teams">
                    <span class="team-info">
                        <div class="team-logo"><img src="${match.team1.logo}" alt="${match.team1.name}" /></div>
                        <span class="team-name">${match.team1.name}</span>
                    </span>
                    <span class="upcoming-vs">VS</span>
                    <span class="team-info">
                        <div class="team-logo"><img src="${match.team2.logo}" alt="${match.team2.name}" /></div>
                        <span class="team-name">${match.team2.name}</span>
                    </span>
                </span>
                <div class="upcoming-time">
                    <span class="upcoming-date">${match.league}</span>
                    <span class="upcoming-countdown">${timeUntil}</span>
                </div>
            </div>
        `;
    }).join('');
}

// === GET TIME UNTIL MATCH ===
function getTimeUntil(targetTime) {
    const now = new Date();
    const diff = targetTime - now;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    if (hours > 0) {
        return `in ${hours}h ${minutes} m`;
    } else if (minutes > 0) {
        return `in ${minutes} m`;
    } else {
        return 'Starting soon';
    }
}

// === LEAGUE FILTERS ===
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active state
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Get filter value
        const league = btn.getAttribute('data-league');

        // Render filtered matches
        renderLiveMatches(league);
    });
});

// === SIMULATE LIVE SCORE UPDATES ===
function simulateLiveUpdates() {
    setInterval(() => {
        liveMatchesData.forEach(match => {
            // Random chance to update score
            if (Math.random() > 0.85) {
                if (match.sport === 'football' || match.sport === 'hockey') {
                    // Update football/hockey scores (0-5 range typically)
                    if (Math.random() > 0.5 && match.team1.score < 5) {
                        match.team1.score++;
                    } else if (match.team2.score < 5) {
                        match.team2.score++;
                    }
                } else if (match.sport === 'basketball') {
                    // Update basketball scores
                    const points = Math.random() > 0.5 ? 2 : 3;
                    if (Math.random() > 0.5) {
                        match.team1.score += points;
                    } else {
                        match.team2.score += points;
                    }
                }

                // Re-render matches after score update
                const activeFilter = document.querySelector('.filter-btn.active');
                const currentFilter = activeFilter ? activeFilter.getAttribute('data-league') : 'all';
                renderLiveMatches(currentFilter);
            }
        });
    }, 5000); // Update every 5 seconds
}

// === UPDATE UPCOMING MATCH TIMERS ===
function updateUpcomingTimers() {
    setInterval(() => {
        renderUpcomingMatches();
    }, 60000); // Update every minute
}

// === INITIALIZE ===
document.addEventListener('DOMContentLoaded', () => {
    // Render initial data
    renderLiveMatches('all');
    renderUpcomingMatches();

    // Start live updates
    simulateLiveUpdates();
    updateUpcomingTimers();

    // Log initialization
    console.log('SportsPulse initialized successfully!');
    console.log('Live matches:', liveMatchesData.length);
    console.log('Upcoming matches:', upcomingMatchesData.length);
});

// === SMOOTH SCROLL FOR ALL ANCHOR LINKS ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// === INTERSECTION OBSERVER FOR ANIMATIONS ===
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.card, .section').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// === UTILITY FUNCTIONS ===
function formatTime(date) {
    return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });
}

function formatDate(date) {
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
    });
}

// === SHOW ALL MATCHES BUTTON ===
const showAllBtn = document.getElementById('showAllBtn');
if (showAllBtn) {
    showAllBtn.addEventListener('click', () => {
        alert('This would show all available matches in a full-page view!');
    });
}
