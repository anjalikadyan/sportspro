// Image imports (use these sample URLs or replace with your own)
export const images = {
  hero: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  stadium: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  football: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  basketball: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  tennis: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  cricket: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  team1: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  trophy: 'https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
};

// Sports data
export const sports = [
  {
    id: 'football',
    name: 'Football',
    icon: '⚽',
    description: 'Professional football leagues and tournaments',
    matches: 45,
    teams: 12
  },
  {
    id: 'basketball',
    name: 'Basketball',
    icon: '🏀',
    description: 'Fast-paced basketball competitions',
    matches: 32,
    teams: 8
  },
  {
    id: 'cricket',
    name: 'Cricket',
    icon: '🏏',
    description: 'T20, ODI, and Test cricket matches',
    matches: 28,
    teams: 10
  },
  {
    id: 'tennis',
    name: 'Tennis',
    icon: '🎾',
    description: 'Singles and doubles tournaments',
    matches: 20,
    teams: 16
  }
];

// Upcoming matches for slider
export const upcomingMatches = [
  {
    id: 1,
    sport: 'Football',
    league: 'Premier League',
    team1: { name: 'Red Lions', logo: '🦁' },
    team2: { name: 'Blue Tigers', logo: '🐯' },
    date: 'Jan 15, 2024',
    time: '19:30',
    venue: 'National Stadium',
    status: 'Upcoming'
  },
  {
    id: 2,
    sport: 'Basketball',
    league: 'NBA Championship',
    team1: { name: 'City Hawks', logo: '🦅' },
    team2: { name: 'Mountain Eagles', logo: '🦅' },
    date: 'Jan 18, 2024',
    time: '20:00',
    venue: 'City Arena',
    status: 'Upcoming'
  },
  {
    id: 3,
    sport: 'Cricket',
    league: 'T20 Tournament',
    team1: { name: 'Sun Risers', logo: '☀️' },
    team2: { name: 'Night Riders', logo: '🌙' },
    date: 'Jan 20, 2024',
    time: '14:00',
    venue: 'Cricket Ground',
    status: 'Upcoming'
  },
  {
    id: 4,
    sport: 'Tennis',
    league: 'Grand Slam',
    team1: { name: 'Ace Masters', logo: '🎾' },
    team2: { name: 'Net Kings', logo: '👑' },
    date: 'Jan 22, 2024',
    time: '16:30',
    venue: 'Tennis Complex',
    status: 'Upcoming'
  }
];

// Tournament highlights
export const tournamentHighlights = [
  {
    id: 1,
    name: 'Champions Cup 2024',
    sport: 'Football',
    prize: '$100,000',
    teams: 16,
    startDate: 'Feb 1, 2024',
    endDate: 'Mar 15, 2024',
    status: 'Registration Open'
  },
  {
    id: 2,
    name: 'National Basketball League',
    sport: 'Basketball',
    prize: '$75,000',
    teams: 12,
    startDate: 'Feb 10, 2024',
    endDate: 'Apr 5, 2024',
    status: 'Registration Open'
  },
  {
    id: 3,
    name: 'Summer Tennis Open',
    sport: 'Tennis',
    prize: '$50,000',
    teams: 32,
    startDate: 'Mar 1, 2024',
    endDate: 'Mar 30, 2024',
    status: 'Coming Soon'
  }
];

// Counter targets
export const targetCounters = {
  players: 1250,
  matches: 320,
  tournaments: 45,
  coaches: 60
};
