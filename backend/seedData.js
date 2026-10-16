/**
 * Reproducible SportsPro demo dataset.
 * Demo password for seeded coaches/players: Demo@1234
 * Safe reset: npm run seed:data -- --reset (only @demo.sportspro.com users and
 * clearly prefixed demo teams/tournaments/matches/stats are removed).
 */
const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const config = require('./config/config');
const User = require('./models/User');
const Team = require('./models/Team');
const Tournament = require('./models/Tournament');
const Match = require('./models/Match');
const PlayerStats = require('./models/PlayerStats');

faker.seed(20261016);
const DEMO_PASSWORD = 'Demo@1234';
const DOMAIN = '@demo.sportspro.com';
const SPORTS = [
  { sport: 'Football', positions: ['striker', 'defender', 'midfielder', 'goalkeeper', 'captain'] },
  { sport: 'Cricket', positions: ['batsman', 'bowler', 'all-rounder', 'wicket-keeper', 'captain'] },
  { sport: 'Basketball', positions: ['striker', 'defender', 'midfielder', 'captain'] },
  { sport: 'Volleyball', positions: ['striker', 'defender', 'midfielder', 'captain'] },
  { sport: 'Hockey', positions: ['striker', 'defender', 'midfielder', 'goalkeeper', 'captain'] },
  { sport: 'Badminton', positions: ['striker', 'defender', 'captain'] },
  { sport: 'Tennis', positions: ['striker', 'captain'] },
  { sport: 'Football', positions: ['striker', 'defender', 'midfielder', 'goalkeeper', 'captain'] },
  { sport: 'Cricket', positions: ['batsman', 'bowler', 'all-rounder', 'wicket-keeper', 'captain'] },
  { sport: 'Basketball', positions: ['striker', 'defender', 'midfielder', 'captain'] },
];
const TEAM_PREFIX = 'Demo ';
const TOURNAMENT_PREFIX = 'Demo ';
const dateAt = (offsetDays, hour = 16) => { const d = new Date(); d.setHours(hour, 0, 0, 0); d.setDate(d.getDate() + offsetDays); return d; };
const emailFor = (role, n) => `${role}${String(n).padStart(2, '0')}${DOMAIN}`;

async function resetDemoData() {
  const demoUsers = await User.find({ email: { $regex: /@demo\.sportspro\.com$/i } }).select('_id');
  const userIds = demoUsers.map(u => u._id);
  const demoTeams = await Team.find({ name: /^Demo / }).select('_id');
  const teamIds = demoTeams.map(t => t._id);
  const demoTournaments = await Tournament.find({ name: /^Demo / }).select('_id');
  const tournamentIds = demoTournaments.map(t => t._id);
  const demoMatches = await Match.find({ tournamentId: { $in: tournamentIds } }).select('_id');
  const matchIds = demoMatches.map(m => m._id);
  await PlayerStats.deleteMany({ $or: [{ matchId: { $in: matchIds } }, { playerId: { $in: userIds } }, { teamId: { $in: teamIds } }] });
  await Match.deleteMany({ $or: [{ tournamentId: { $in: tournamentIds } }, { homeTeam: { $in: teamIds } }, { awayTeam: { $in: teamIds } }] });
  await Tournament.deleteMany({ _id: { $in: tournamentIds } });
  await Team.deleteMany({ _id: { $in: teamIds } });
  // Never delete the super admin, even if its email matches the demo domain.
  await User.deleteMany({ _id: { $in: userIds }, role: { $ne: 'super_admin' } });
  console.log('Demo data reset complete. Existing real users and super admin were preserved.');
}

async function upsertUser(email, data) {
  let user = await User.findOne({ email });
  if (!user) user = new User({ ...data, email, password: DEMO_PASSWORD });
  else {
    Object.assign(user, data);
    if (!user.password) user.password = DEMO_PASSWORD;
  }
  // save() invokes the model's bcrypt pre-save hook; never write a plaintext password.
  await user.save();
  return user;
}

async function main() {
  await mongoose.connect(config.mongodbUri);
  console.log(`MongoDB connected: ${mongoose.connection.host}/${mongoose.connection.name}`);
  if (process.argv.includes('--reset')) await resetDemoData();

  let admin = await User.findOne({ role: 'super_admin' });
  if (!admin) {
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@sportspro.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'Admin1234';
    admin = await User.create({ name: 'Super Administrator', email: adminEmail, password: adminPassword, role: 'super_admin' });
    console.log(`Created the existing seed super-admin account: ${admin.email}`);
  } else console.log(`Reusing existing super admin: ${admin.email}`);

  const teams = [];
  const coaches = [];
  const playersByTeam = [];
  const firstNames = ['Aarav', 'Vivaan', 'Aditya', 'Arjun', 'Reyansh', 'Aanya', 'Ananya', 'Diya', 'Ishita', 'Kavya', 'Rohan', 'Kabir', 'Meera', 'Saanvi', 'Ira', 'Dev', 'Neha', 'Rahul', 'Priya', 'Karan'];
  const lastNames = ['Sharma', 'Kadyan', 'Patel', 'Singh', 'Verma', 'Mehta', 'Gupta', 'Kumar', 'Reddy', 'Malhotra', 'Chopra', 'Iyer', 'Joshi', 'Kapoor', 'Das'];
  const personName = () => `${faker.helpers.arrayElement(firstNames)} ${faker.helpers.arrayElement(lastNames)}`;
  const cities = ['Amritsar', 'Chandigarh', 'Jaipur', 'Pune', 'Indore', 'Lucknow', 'Kochi', 'Bengaluru', 'Hyderabad', 'Delhi'];

  for (let i = 0; i < 10; i++) {
    const sportConfig = SPORTS[i];
    const coach = await upsertUser(emailFor('coach', i + 1), {
      name: personName(), role: 'coach', phone: `+91${9000001000 + i}`,
      yearsOfExperience: 3 + (i % 9), isActive: true,
    });
    coaches.push(coach);
    const teamName = `${TEAM_PREFIX}${sportConfig.sport} ${['Falcons','Titans','Warriors','Strikers','Rangers','Chargers','United','Phoenix','Royals','Blazers'][i]}`;
    let team = await Team.findOne({ name: teamName });
    const teamData = {
      name: teamName, shortName: `D${sportConfig.sport.slice(0, 2).toUpperCase()}${String(i + 1).padStart(2, '0')}`,
      description: `Demo ${sportConfig.sport.toLowerCase()} squad focused on teamwork, development, and competitive play.`,
      founded: new Date(2016 + (i % 8), i % 12, 1), homeGround: `${cities[i]} Sports Complex`, sport: sportConfig.sport,
      coachId: coach._id, isApproved: true, isActive: true, maxPlayers: 25,
      contactEmail: coach.email, contactPhone: coach.phone,
      address: { city: cities[i], state: ['Punjab','Haryana','Rajasthan','Maharashtra','Madhya Pradesh','Uttar Pradesh','Kerala','Karnataka','Telangana','Delhi'][i], country: 'India' },
    };
    if (!team) team = await Team.create(teamData); else { Object.assign(team, teamData); await team.save(); }
    coach.teamId = team._id; await coach.save();
    teams.push(team);

    const players = [];
    for (let p = 0; p < 12; p++) {
      const email = `player${String(i * 12 + p + 1).padStart(3, '0')}${DOMAIN}`;
      const player = await upsertUser(email, {
        name: personName(), role: 'player', phone: `+91${9100000000 + i * 12 + p}`,
        teamId: team._id, jerseyNumber: p + 1,
        position: p === 0 ? 'captain' : faker.helpers.arrayElement(sportConfig.positions.filter(x => x !== 'captain')),
        dateOfBirth: faker.date.birthdate({ min: 17, max: 31, mode: 'age' }),
        height: faker.number.int({ min: 158, max: 201 }), weight: faker.number.int({ min: 52, max: 104 }), isActive: true,
        playingHistory: [{ season: '2024-25', team: `${cities[i]} District ${sportConfig.sport}`, matches: faker.number.int({ min: 5, max: 24 }), achievements: faker.helpers.arrayElement(['Regional league appearance', 'Team finalist', 'Best newcomer', 'District squad selection', 'Season MVP nominee']) }],
      });
      players.push(player);
    }
    team.captainId = players[0]._id;
    team.players = players.map((p, idx) => ({ playerId: p._id, isRegistered: true, name: p.name, email: p.email, phone: p.phone, position: p.position, jerseyNumber: p.jerseyNumber, status: 'active', joinDate: new Date(2023 + (idx % 3), idx % 12, 1) }));
    await team.save();
    playersByTeam.push(players);
  }

  const tournamentSpecs = [
    { sport: 'Football', name: 'City Football League', status: 'completed', start: -38, end: -29 },
    { sport: 'Cricket', name: 'Premier Cricket Cup', status: 'completed', start: -24, end: -15 },
    { sport: 'Basketball', name: 'Metro Hoops Championship', status: 'ongoing', start: 0, end: 5 },
    { sport: 'Football', name: 'Autumn Invitational', status: 'upcoming', start: 7, end: 15 },
    { sport: 'Cricket', name: 'Champions Cricket Trophy', status: 'upcoming', start: 18, end: 27 },
    { sport: 'Basketball', name: 'Autumn Hoops Invitational', status: 'upcoming', start: 30, end: 39 },
  ];
  const tournaments = [];
  for (const [idx, spec] of tournamentSpecs.entries()) {
    const sportTeams = teams.filter(t => t.sport === spec.sport).slice(0, 4);
    const startDate = dateAt(spec.start, 9); const endDate = dateAt(spec.end, 21);
    const tournamentName = `${TOURNAMENT_PREFIX}${spec.name}`;
    let tournament = await Tournament.findOne({ name: tournamentName });
    const data = { name: tournamentName, description: `A demo ${spec.sport.toLowerCase()} competition featuring regional clubs and emerging talent.`, sport: spec.sport, startDate, endDate, registrationDeadline: dateAt(spec.start - 3, 23), venue: `${cities[idx]} Multi-Sport Arena`, maxTeams: Math.max(4, sportTeams.length), teams: sportTeams.map(t => t._id), status: spec.status, format: 'round_robin', prizePool: idx % 2 ? '₹75,000' : '₹1,00,000', rules: 'Standard federation rules apply. Respect fair play and officials.', contactEmail: 'events@demo.sportspro.com', contactPhone: '+919000001999', createdBy: admin._id, isActive: true, scheduleGenerated: true, scheduleGeneratedAt: new Date(), scheduleGeneratedBy: admin._id };
    if (!tournament) tournament = await Tournament.create(data); else { Object.assign(tournament, data); await tournament.save(); }
    tournaments.push(tournament);
  }

  // Create 36 fixtures. Each team plays at most once per date; fixtures are spread across dates.
  const existingDemoTournamentIds = tournaments.map(t => t._id);
  const oldDemoMatches = await Match.find({ tournamentId: { $in: existingDemoTournamentIds } }).select('_id');
  await PlayerStats.deleteMany({ matchId: { $in: oldDemoMatches.map(m => m._id) } });
  await Match.deleteMany({ tournamentId: { $in: existingDemoTournamentIds } });
  const matchDocs = [];
  let matchNo = 1;
  const now = new Date();
  for (const [ti, tournament] of tournaments.entries()) {
    const sportTeams = teams.filter(t => t.sport === tournament.sport).slice(0, 4);
    const pairs = [];
    for (let a = 0; a < sportTeams.length; a++) for (let b = a + 1; b < sportTeams.length; b++) pairs.push([sportTeams[a], sportTeams[b]]);
    // Six unique pairings per 4-team tournament, or repeat pairings for 2-team sports.
    const fixtures = pairs.length >= 6 ? pairs.slice(0, 6) : Array.from({ length: 6 }, (_, n) => pairs[n % pairs.length]);
    fixtures.forEach(([home, away], j) => {
      const tournamentStartOffset = Math.round((new Date(tournament.startDate).setHours(0, 0, 0, 0) - dateAt(0, 0).getTime()) / 86400000);
      const scheduledDate = dateAt(tournamentStartOffset + j, [10, 12, 15, 17, 18, 20][j]);
      let status = 'scheduled'; let homeTeamScore = 0; let awayTeamScore = 0; let winner = null; let result = '';
      if (scheduledDate < now && tournament.status === 'completed') {
        status = 'completed'; homeTeamScore = 1 + ((ti + j * 2) % 4); awayTeamScore = (ti + j) % 3;
        winner = homeTeamScore === awayTeamScore ? null : (homeTeamScore > awayTeamScore ? home._id : away._id);
        result = homeTeamScore === awayTeamScore ? 'Match drawn' : `${homeTeamScore > awayTeamScore ? home.name : away.name} won`;
      } else if (tournament.status === 'ongoing' && j === 0) {
        status = 'live'; homeTeamScore = 2 + ti; awayTeamScore = 1 + j;
      }
      matchDocs.push({ tournamentId: tournament._id, matchNumber: matchNo++, round: `League Round ${Math.floor(j / 2) + 1}`, homeTeam: home._id, awayTeam: away._id, scheduledDate, scheduledTime: scheduledDate.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false }), venue: tournament.venue, status, homeTeamScore, awayTeamScore, winner, result, sport: tournament.sport, notes: 'Demo fixture generated for SportsPro showcase.' });
    });
  }
  const savedMatches = await Match.insertMany(matchDocs);
  const completedMatches = savedMatches.filter(m => m.status === 'completed');
  const statsDocs = [];
  for (const match of completedMatches) {
    for (const teamId of [match.homeTeam, match.awayTeam]) {
      const teamIndex = teams.findIndex(t => String(t._id) === String(teamId));
      if (teamIndex < 0) continue;
      const players = playersByTeam[teamIndex].slice(0, 5);
      for (const player of players) {
        const base = { playerId: player._id, teamId, matchId: match._id, sport: match.sport, season: String(new Date().getFullYear()), genericStats: { appearances: 1, wins: String(match.winner) === String(teamId) ? 1 : 0, losses: match.winner && String(match.winner) !== String(teamId) ? 1 : 0, draws: match.winner ? 0 : 1, mvpAwards: faker.number.int({ min: 0, max: 1 }), rating: faker.number.float({ min: 6.2, max: 9.8, fractionDigits: 1 }) }, notes: 'Generated demo match performance.' };
        if (match.sport === 'Cricket') base.cricketStats = { runs: faker.number.int({ min: 0, max: 78 }), ballsFaced: faker.number.int({ min: 0, max: 55 }), fours: faker.number.int({ min: 0, max: 8 }), sixes: faker.number.int({ min: 0, max: 4 }), wickets: faker.number.int({ min: 0, max: 3 }), ballsBowled: faker.number.int({ min: 0, max: 24 }), runsConceded: faker.number.int({ min: 0, max: 35 }), catches: faker.number.int({ min: 0, max: 2 }) };
        else if (match.sport === 'Basketball') base.basketballStats = { points: faker.number.int({ min: 0, max: 28 }), rebounds: faker.number.int({ min: 0, max: 12 }), assists: faker.number.int({ min: 0, max: 9 }), steals: faker.number.int({ min: 0, max: 4 }), minutesPlayed: faker.number.int({ min: 8, max: 40 }) };
        else if (match.sport === 'Football' || match.sport === 'Hockey') base.footballStats = { goals: faker.number.int({ min: 0, max: 2 }), assists: faker.number.int({ min: 0, max: 3 }), shots: faker.number.int({ min: 0, max: 6 }), passes: faker.number.int({ min: 8, max: 65 }), minutesPlayed: faker.number.int({ min: 15, max: 90 }) };
        else if (match.sport === 'Volleyball') base.volleyballStats = { spikes: faker.number.int({ min: 0, max: 12 }), blocks: faker.number.int({ min: 0, max: 5 }), aces: faker.number.int({ min: 0, max: 4 }), digs: faker.number.int({ min: 0, max: 14 }), points: faker.number.int({ min: 0, max: 18 }) };
        else base.racketStats = { matchesWon: faker.number.int({ min: 0, max: 1 }), matchesLost: faker.number.int({ min: 0, max: 1 }), setsWon: faker.number.int({ min: 0, max: 2 }), setsLost: faker.number.int({ min: 0, max: 2 }), aces: faker.number.int({ min: 0, max: 8 }), winners: faker.number.int({ min: 0, max: 15 }) };
        statsDocs.push(base);
      }
    }
  }
  await PlayerStats.insertMany(statsDocs);

  await Promise.all([
    User.collection.createIndex({ email: 1 }, { unique: true }),
    User.collection.createIndex({ teamId: 1, role: 1 }),
    Team.collection.createIndex({ coachId: 1 }),
    Team.collection.createIndex({ sport: 1, isActive: 1 }),
    Tournament.collection.createIndex({ sport: 1, status: 1, startDate: 1 }),
    Match.collection.createIndex({ scheduledDate: 1, status: 1 }),
    Match.collection.createIndex({ tournamentId: 1, scheduledDate: 1 }),
    PlayerStats.collection.createIndex({ teamId: 1, matchId: 1 }),
  ]);

  const [userCount, teamCount, tournamentCount, matchCount, statsCount] = await Promise.all([
    User.countDocuments(), Team.countDocuments(), Tournament.countDocuments(), Match.countDocuments(), PlayerStats.countDocuments(),
  ]);
  console.log('\nSportsPro seed summary');
  console.log(`Users: ${userCount} total (${await User.countDocuments({ role: 'coach', email: { $regex: /@demo\.sportspro\.com$/i } })} demo coaches, ${await User.countDocuments({ role: 'player', email: { $regex: /@demo\.sportspro\.com$/i } })} demo players)`);
  console.log(`Teams: ${teamCount} total; Tournaments: ${tournamentCount} total; Matches: ${matchCount} total; PlayerStats: ${statsCount} total`);
  console.log('\nDemo login credentials (password for all listed demo accounts: Demo@1234)');
  console.log(`Super admin: ${admin.email} / ${process.env.ADMIN_PASSWORD || 'Admin1234'} (existing seed credentials)`);
  console.log(`Coaches: ${emailFor('coach', 1)}, ${emailFor('coach', 2)}, ${emailFor('coach', 3)} / ${DEMO_PASSWORD}`);
  console.log(`Players: ${emailFor('player', 1)}, ${emailFor('player', 2)}, ${emailFor('player', 3)} / ${DEMO_PASSWORD}`);
  console.log('\nNote: Demo accounts are showcase data. Change credentials before any public deployment.');
}

main().catch(error => { console.error('SportsPro seeding failed:', error); process.exitCode = 1; }).finally(async () => { await mongoose.disconnect().catch(() => {}); });
