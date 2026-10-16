## Player Module – Complete Explanation in Simple Words

---

## 🎯 **SIMPLE EXPLANATION - What is the Player Module?**

Imagine you're a **football player** (or cricket, basketball, etc.). You need a place where you can:

1. **See which team you're on** - Who's your coach? Who are your teammates?
2. **Check your match schedule** - When are you playing? Who are you playing against?
3. **View your performance stats** - How many goals did you score? How many matches did you play?
4. **Leave a team** - If you want to switch teams or take a break

**That's what the Player Module does!** It's like a personal dashboard for athletes.

---

## 📚 **How It Works - Step by Step (In Simple Words)**

### **Step 1: You Log In**
- You enter your email and password
- The system checks: "Is this person a player?"
- If yes, you get access to your Player Dashboard
- Your login token is saved (like a temporary ID card)

### **Step 2: The System Finds Your Team**
- When you open the dashboard, it asks: "Which team does this player belong to?"
- It looks through all teams and finds the one where your name appears in the player list
- It shows you: "You're on Team ABC!" or "You're not on any team yet"

### **Step 3: You See Three Main Sections**

#### **📋 Profile Tab**
- Shows your team name, coach name, and all your teammates
- Displays your position (like "Forward" or "Goalkeeper") and jersey number
- Has a "Leave Team" button if you want to quit

#### **📅 My Matches Tab**
- Shows all upcoming matches your team will play
- Displays past match results (who won, what was the score)
- Shows match date, time, and location
- Highlights which team is "YOUR TEAM" in each match

#### **📊 My Stats Tab**
- Shows your total performance numbers (like total goals scored this season)
- Displays a chart showing your performance over time
- Lists each match you played and your stats for that match
- Shows coach notes/comments about your performance

---

## 🗄️ **How Data is Stored (Simple Version)**

Think of the database like **four filing cabinets**:

### **Cabinet 1: User Files** 📁
- Contains information about **everyone** (players, coaches, admins)
- For players: name, email, password, which team they're on, jersey number, position
- Like a phone book entry for each person

### **Cabinet 2: Team Files** 📁
- Contains information about **each team**
- Team name, sport type, coach name
- **Most importantly**: A list of all players in that team
- Like a team roster sheet

### **Cabinet 3: Match Files** 📁
- Contains information about **every match**
- Which teams played, when, where, what was the score
- Like a match schedule and results book

### **Cabinet 4: Player Stats Files** 📁
- Contains **performance data** for each player in each match
- For football: goals, assists, passes
- For cricket: runs, wickets, catches
- For basketball: points, rebounds, assists
- Like a detailed report card for each game

---

## 🔄 **How Everything Connects (Simple Flow)**

```
1. Player logs in
   ↓
2. System checks: "What team is this player on?"
   ↓
3. System finds team from Team Cabinet
   ↓
4. System shows: Team name, teammates, coach
   ↓
5. Player clicks "My Matches"
   ↓
6. System finds all matches for that team from Match Cabinet
   ↓
7. System shows: Schedule, results, dates
   ↓
8. Player clicks "My Stats"
   ↓
9. System finds all stats for this player from Stats Cabinet
   ↓
10. System calculates totals and shows: Charts, numbers, match history
```

---

## 💻 **Frontend vs Backend (Simple Explanation)**

### **Frontend (What You See)**
- The **pretty website** you look at
- Made with **React** (a tool for building websites)
- Shows buttons, cards, charts, colors
- Like the **dashboard of a car** - you see it and click buttons

### **Backend (What You Don't See)**
- The **server** that does all the work behind the scenes
- Made with **Express** (a tool for handling requests)
- Stores data in **MongoDB** (a database, like a digital filing cabinet)
- Like the **engine of a car** - you don't see it, but it makes everything work

**How they talk:**
- Frontend asks: "Give me my team info"
- Backend responds: "Here's your team info"
- Frontend displays it nicely on screen

---

## 🎨 **What Each Screen Does (Simple Explanation)**

### **Player Dashboard (Main Screen)**
- **Header**: Shows your name and has logout button
- **Tabs**: Three buttons - Profile, My Matches, My Stats
- **Content Area**: Changes based on which tab you click

### **Profile Screen**
- Shows welcome message with your name
- Displays team card with team name, sport, coach
- Lists all teammates in a grid
- Has "Leave Team" button

### **Matches Screen**
- Shows list of matches (like a calendar)
- Each match card shows: Teams playing, date, time, venue
- If match is completed: Shows final score
- Highlights "YOUR TEAM" badge

### **Stats Screen**
- Shows big numbers at top: Total matches, top stats
- Shows progress bars for each stat
- Shows a small bar chart of recent performance
- Lists last 10 matches with your stats for each

---

## 🔐 **Security & Permissions (Simple Explanation)**

- **Only logged-in players** can see their dashboard
- **Only you** can see your own stats
- **Only coaches** can add/edit stats (not players themselves)
- **Only you** can leave your own team
- Like having a **lock on your personal diary**

---

## 📱 **Real-World Example**

**Imagine you're John, a football player:**

1. **John logs in** → System says "Welcome John!"

2. **System finds John's team** → "You're on Manchester United"

3. **John sees Profile tab**:
   - "Welcome, John"
   - "Active Roster: Manchester United"
   - Coach: Coach Smith
   - Teammates: 25 players listed

4. **John clicks "My Matches"**:
   - Upcoming: vs Liverpool (Dec 25, 3 PM)
   - Past: vs Arsenal (Won 2-1)

5. **John clicks "My Stats"**:
   - Total Matches: 15
   - Total Goals: 8
   - Total Assists: 5
   - Chart showing goals per match
   - List of last 10 matches with goals scored

---

## 🎓 **Key Terms Explained Simply**

- **API**: A way for frontend to ask backend for data (like ordering food at a restaurant)
- **Database**: Where all information is stored (like a library)
- **Model**: A blueprint for how data is organized (like a form template)
- **Component**: A reusable piece of website (like a LEGO block)
- **State**: Data that can change (like your current score in a game)
- **Route**: A URL path that triggers an action (like `/api/teams` means "get teams")
- **Token**: A temporary password that proves you're logged in
- **Populate**: Filling in details (like showing coach name instead of just coach ID)

---

## ✅ **Summary**

The Player Module is like a **personal sports app** where:
- ✅ You see your team and teammates
- ✅ You check your match schedule
- ✅ You view your performance stats
- ✅ You can leave a team if needed

**Everything is connected:**
- Database stores the information
- Backend provides the information
- Frontend displays the information beautifully

---

## 🎯 **Technical Details (For Developers)**

### 1. Goal
- **Purpose**: Give a logged-in **player** a full view of:
  - Their **team** and roster
  - Their team's **matches/schedule**
  - Their own **performance statistics**
  - Ability to **leave** a team

The player experience is built by connecting **React JSX components** (frontend) to **Express APIs** and **MongoDB models** (backend).

---

### 2. Database Design (MongoDB Models)

**In Simple Words:** These are like **templates** that define what information we store for each type of thing (user, team, match, stats).

- **`User`** – `backend/models/User.js`
  - **What it is:** A template for storing information about every person in the system
  - **Simple explanation:** Like a contact card that stores:
    - Who they are: name, email, password
    - What role: player, coach, or admin
    - If player: which team they're on, jersey number, position
    - Personal details: date of birth, height, weight
    - History: past teams, matches played, achievements
  
  **Example:** 
  ```json
  {
    "name": "John Doe",
    "role": "player",
    "teamId": "team123",
    "jerseyNumber": 10,
    "position": "Forward"
  }
  ```

- **`Team`** – `backend/models/Team.js`
  - **What it is:** A template for storing information about each team
  - **Simple explanation:** Like a team roster sheet that stores:
    - Team info: name, sport type, home ground
    - Who's in charge: coach ID, captain ID (optional)
    - **Most important:** A list of all players (like a roster)
    - Team performance: wins, losses, draws, total points
  
  **Example:**
  ```json
  {
    "name": "Manchester United",
    "sport": "Football",
    "coachId": "coach456",
    "players": [
      {"playerId": "player1", "position": "Forward", "jerseyNumber": 10},
      {"playerId": "player2", "position": "Goalkeeper", "jerseyNumber": 1}
    ]
  }
  ```

- **`Match`** – `backend/models/Match.js`
  - **What it is:** A template for storing information about each match/game
  - **Simple explanation:** Like a match schedule card that stores:
    - Which tournament it's part of
    - Which teams are playing (home team vs away team)
    - When and where: date, time, venue
    - What happened: scores, who won, match status
  
  **Example:**
  ```json
  {
    "homeTeam": "Team A",
    "awayTeam": "Team B",
    "scheduledDate": "2024-12-25",
    "homeTeamScore": 2,
    "awayTeamScore": 1,
    "status": "completed"
  }
  ```

- **`PlayerStats`** – `backend/models/PlayerStats.js`
  - **What it is:** A template for storing performance data for each player in each match
  - **Simple explanation:** Like a detailed report card that stores:
    - Which player, which team, which match
    - What sport and which season
    - **Performance numbers** (different for each sport):
      - Football: goals, assists, passes, tackles
      - Cricket: runs, wickets, catches
      - Basketball: points, rebounds, assists
    - Coach notes/comments
  
  **Example (Football):**
  ```json
  {
    "playerId": "player1",
    "teamId": "team123",
    "matchId": "match789",
    "sport": "Football",
    "footballStats": {
      "goals": 2,
      "assists": 1,
      "passes": 45
    }
  }
  ```

---

### 3. Backend APIs Used by Player Dashboard

**In Simple Words:** APIs are like **waiters at a restaurant**. The frontend (you) asks for something, and the backend (waiter) brings it from the kitchen (database).

#### 3.1 Team Endpoints – `backend/routes/teamRoutes.js`

- **GET `/api/teams`** – `getTeams`
  - **What it does:** Gets a list of all teams
  - **Simple explanation:** 
    - Frontend asks: "Give me all teams"
    - Backend responds: "Here are all teams with coach names and player lists"
    - Frontend then searches through this list to find which team contains the current player
  - **Returns:** List of teams with coach info and player details filled in
  
  **Example Request:**
  ```
  GET /api/teams
  Headers: Authorization: Bearer <token>
  ```
  
  **Example Response:**
  ```json
  {
    "success": true,
    "data": [
      {
        "name": "Team A",
        "coachId": {"name": "Coach Smith"},
        "players": [
          {"playerId": {"name": "John"}, "position": "Forward"}
        ]
      }
    ]
  }
  ```

- **POST `/api/teams/leave`** – `leaveTeam`
  - **What it does:** Removes a player from their team
  - **Simple explanation:**
    - Frontend asks: "Remove me from my team"
    - Backend checks: "Is this person a player? Do they have a team?"
    - Backend removes player from team's player list
    - Backend clears player's teamId (sets it to null)
    - Backend responds: "Done! You've left the team"
  - **Only players can use this** (not coaches or admins)
  
  **Example Request:**
  ```
  POST /api/teams/leave
  Headers: Authorization: Bearer <token>
  ```
  
  **What happens behind the scenes:**
  1. Find player in database
  2. Find their team
  3. Remove player from team.players array
  4. Set player.teamId = null
  5. Save both

#### 3.2 Match Endpoints – `backend/routes/matchRoutes.js`

- **GET `/api/matches/team/:teamId`** – `getTeamMatches`
  - **What it does:** Gets all matches for a specific team
  - **Simple explanation:**
    - Frontend asks: "Show me all matches for Team A"
    - Backend searches: "Find all matches where Team A is home team OR away team"
    - Backend fills in details: tournament name, opponent names, scores
    - Backend responds: "Here are all Team A's matches"
  - **Used by:** "My Matches" tab in Player Dashboard
  
  **Example Request:**
  ```
  GET /api/matches/team/team123
  ```
  
  **Example Response:**
  ```json
  {
    "success": true,
    "data": [
      {
        "homeTeam": {"name": "Team A"},
        "awayTeam": {"name": "Team B"},
        "scheduledDate": "2024-12-25",
        "homeTeamScore": 2,
        "awayTeamScore": 1,
        "status": "completed"
      }
    ]
  }
  ```

#### 3.3 Stats Endpoints – `backend/routes/statsRoutes.js`

- **POST `/api/stats`** – `addPlayerStats` (coach only)
  - **What it does:** Adds performance stats for a player (coaches only)
  - **Simple explanation:**
    - Coach enters stats after a match: "John scored 2 goals, 1 assist"
    - Backend checks: "Is this coach allowed to add stats for this team?"
    - Backend saves stats in the correct format (football stats, cricket stats, etc.)
    - Backend responds: "Stats saved!"
  - **Players cannot add their own stats** - only coaches can
  
  **Example Request:**
  ```json
  {
    "playerId": "player1",
    "teamId": "team123",
    "matchId": "match789",
    "sport": "Football",
    "stats": {
      "goals": 2,
      "assists": 1,
      "passes": 45
    }
  }
  ```

- **GET `/api/stats/player/:playerId`** – `getPlayerStats`
  - **What it does:** Gets all individual match stats for a player
  - **Simple explanation:**
    - Frontend asks: "Show me all stats for John"
    - Backend finds: All PlayerStats documents where playerId = John
    - Backend fills in: Match details, team details
    - Backend responds: "Here's John's stats for each match"
  - **Used by:** Match log section in Stats View
  
  **Example Response:**
  ```json
  {
    "success": true,
    "data": [
      {
        "matchId": {"scheduledDate": "2024-12-25"},
        "footballStats": {"goals": 2, "assists": 1},
        "season": "2024"
      }
    ]
  }
  ```

- **GET `/api/stats/player/:playerId/aggregated`** – `getAggregatedPlayerStats`
  - **What it does:** Gets total/combined stats for a player
  - **Simple explanation:**
    - Frontend asks: "Show me John's total stats"
    - Backend finds: All PlayerStats for John
    - Backend calculates: Adds up all goals, assists, etc. from all matches
    - Backend responds: "John's totals: 15 matches, 20 goals, 10 assists"
  - **Used by:** Key metrics cards and charts in Stats View
  
  **Example Response:**
  ```json
  {
    "success": true,
    "data": {
      "totalMatches": 15,
      "stats": {
        "goals": 20,
        "assists": 10,
        "passes": 450
      }
    }
  }
  ```

---

### 4. Frontend – Player React Components

**In Simple Words:** These are the **visual parts** of the website that players see and interact with. Each component is like a **building block** that does a specific job.

> All components live under `frontend/src/components/Dashboard/Player` (and shared/coach utils).

#### 4.1 `PlayerDashboard.jsx`

**In Simple Words:** This is the **main controller** - like the brain of the Player Dashboard. It manages all the data and decides what to show.

**What it does:**
- **Manages state:** Keeps track of team info, matches, stats, which tab is active
- **Fetches data:** Calls APIs to get information from backend
- **Controls views:** Shows different screens based on which tab you click
- **Handles actions:** Processes "Leave Team" button clicks

**Key Functions Explained Simply:**

1. **`fetchTeamData()`**
   - **What:** Gets team information
   - **How:** Calls `/api/teams`, searches through teams to find the one containing current player
   - **Result:** Sets `team` state (or null if no team)

2. **`fetchMatches()`**
   - **What:** Gets match schedule
   - **How:** Calls `/api/matches/team/:teamId` only if player has a team
   - **Result:** Sets `matches` state with sorted list

3. **`fetchPlayerStats()`**
   - **What:** Gets player performance stats
   - **How:** Calls two APIs:
     - Individual stats: `/api/stats/player/:playerId`
     - Total stats: `/api/stats/player/:playerId/aggregated`
   - **Result:** Sets both `playerStats` and `aggregatedStats`

4. **`handleLeaveTeam()`**
   - **What:** Removes player from team
   - **How:** Calls `/api/teams/leave`
   - **Result:** Clears team state, shows success message

**State Variables Explained:**
- `team` - Current team object (or null)
- `activeView` - Which tab is showing ('profile', 'matches', or 'stats')
- `matches` - Array of match objects
- `playerStats` - Array of individual match stats
- `aggregatedStats` - Single object with total stats
- `loading` - Whether data is being fetched (shows spinner)

- **Imports**:
  - `Header`, `NavigationTabs`
  - `ProfileView`, `MatchesView`, `StatsView`
  - `ProfileEditModal`
  - `API_BASE_URL` from `frontend/src/config/api.js`
- **State**:
  - `team`, `loading`
  - `activeView` → `'profile' | 'matches' | 'stats'`
  - `matches`, `matchesLoading`
  - `playerStats`, `aggregatedStats`, `statsLoading`
  - `notification`, `showProfileEditModal`
- **Key functions**:
  - `fetchTeamData()`
    - `GET /api/teams` with auth token.
    - From returned teams, finds the one where `team.players` contains `user.id`.
    - Sets `team` state.
  - `fetchMatches()`
    - Requires `team`.
    - `GET /api/matches/team/${team._id}`.
    - Sorts by `scheduledDate` and stores in `matches`.
  - `fetchPlayerStats()`
    - `GET /api/stats/player/${user.id}` → `playerStats`.
    - `GET /api/stats/player/${user.id}/aggregated` → `aggregatedStats`.
  - `handleLeaveTeam()`
    - `POST /api/teams/leave`.
    - On success: clears `team` and shows a notification.
- **Rendering**:
  - Always shows `Header` and `NavigationTabs`.
  - Chooses one view based on `activeView`:
    - `'profile'` → `ProfileView`
    - `'matches'` → `MatchesView`
    - `'stats'` → `StatsView`

#### 4.2 `Header.jsx`

**In Simple Words:** The top bar of the Player Dashboard - like a website header.

- **Shows:** "Player Portal" title, player's name, profile icon
- **Has buttons:**
  - **Profile Edit:** Opens modal to edit profile
  - **Logout:** Signs out the player
- **Doesn't do API calls itself** - just displays info and triggers actions passed from parent

**Visual Example:**
```
┌─────────────────────────────────────────┐
│ 🏆 Player Portal    👤 John Doe  ⚙️ 🚪 │
└─────────────────────────────────────────┘
```

#### 4.3 `NavigationTabs.jsx`

**In Simple Words:** The three tabs at the top - like menu buttons.

- **Three tabs:**
  - **Profile** - Shows team info
  - **My Matches** - Shows schedule
  - **My Stats** - Shows performance stats
- **What happens:** When you click a tab, it tells `PlayerDashboard` to switch views and fetch data for that tab

**Visual Example:**
```
┌──────────┬──────────────┬──────────┐
│ Profile  │ My Matches   │ My Stats │
└──────────┴──────────────┴──────────┘
```

#### 4.4 `ProfileView.jsx`

**In Simple Words:** The screen that shows your team and teammates.

**What it receives (Props):**
- `team` - Your team object (or null)
- `user` - Your user info
- `loading` - Whether data is loading
- `onLeaveTeam` - Function to call when leaving team

**What it shows:**

1. **If loading:** Shows spinner ⏳

2. **If you have a team:**
   - Welcome message: "Welcome, John!"
   - Status badge: "Active Roster: Team A" (green) or "No Active Team" (yellow)
   - Team card showing:
     - Sport type (Football, Cricket, etc.)
     - Coach name
     - Squad size (number of players)
   - **Team roster grid:** Shows all teammates with:
     - Player name
     - Position (Forward, Goalkeeper, etc.)
     - Jersey number
   - "Leave Team" button (opens confirmation modal)

3. **If no team:**
   - Shows "Free Agent" message
   - Explains you're not on any team yet

**Visual Example:**
```
┌─────────────────────────────────┐
│ Welcome, John!                  │
│ ✅ Active Roster: Team A        │
├─────────────────────────────────┤
│ Sport: Football                 │
│ Coach: Coach Smith              │
│ Squad: 25 Players               │
├─────────────────────────────────┤
│ Team Roster:                    │
│ [Player 1] [Player 2] [Player 3]│
│ [Player 4] [Player 5] ...      │
├─────────────────────────────────┤
│        [Leave Team]             │
└─────────────────────────────────┘
```

#### 4.5 `LeaveTeamModal.jsx`

**In Simple Words:** A popup confirmation box when you want to leave a team.

- **Shows:** Warning message asking "Are you sure?"
- **Has two buttons:**
  - **Cancel:** Closes the modal (does nothing)
  - **Confirm Leave:** Actually leaves the team (calls API)
- **Only handles the UI** - the actual API call happens in `PlayerDashboard`

**Visual Example:**
```
┌─────────────────────────────┐
│     ⚠️                      │
│   Leave Team?                │
│                             │
│ Are you sure you want to    │
│ leave your current team?    │
│                             │
│  [Cancel]  [Confirm Leave]  │
└─────────────────────────────┘
```

#### 4.6 `MatchesView.jsx`

**In Simple Words:** The screen that shows your team's match schedule and results.

**What it receives (Props):**
- `matches` - Array of match objects
- `loading` - Whether matches are loading
- `onRefresh` - Function to reload matches
- `teamId` - Your team's ID (to highlight "YOUR TEAM")

**What it shows:**

1. **If loading:** Shows spinner ⏳

2. **If no matches:** Shows "No Matches Scheduled" message

3. **If matches exist:** Shows a card for each match with:
   - **Status badge:** Scheduled (blue), Live (red), Completed (gray)
   - **Tournament name:** Which tournament this match belongs to
   - **Round:** Quarter Final, Semi Final, Final, etc.
   - **Teams:** Home team vs Away team
   - **Date & Time:** When the match is/was
   - **Venue:** Where the match is/was
   - **Score:** If completed, shows final score
   - **"YOUR TEAM" badge:** Highlights which side is your team

**Visual Example:**
```
┌─────────────────────────────────────┐
│ [SCHEDULED] Tournament Name         │
│                                     │
│ Team A (YOUR TEAM)  VS  Team B     │
│                                     │
│ 📅 Dec 25, 2024  🕐 3:00 PM        │
│ 📍 Stadium Name                     │
└─────────────────────────────────────┘
```

#### 4.7 `StatsView.jsx`

**In Simple Words:** The screen that shows your performance statistics with charts and numbers.

**What it receives (Props):**
- `playerStats` - Array of individual match stats
- `aggregatedStats` - Total/combined stats object
- `loading` - Whether stats are loading

**What it shows:**

1. **If loading:** Shows "Loading analytics..." spinner ⏳

2. **If no stats:** Shows "No Statistics Available" (coach hasn't entered any yet)

3. **If stats exist:**

   **a) Key Metrics Cards (Top Row):**
   - Big number cards showing:
     - Total Matches
     - Top 3 stats (e.g., Goals, Assists, Passes)
   - Each card has a colored background and icon

   **b) Metric Breakdown (Left Side):**
   - List of all stats with:
     - Stat name (Goals, Assists, etc.)
     - Number value
     - Progress bar showing relative performance

   **c) Recent Trend Chart (Right Side):**
   - Bar chart showing performance over last 10 matches
   - Each bar represents one match
   - Height shows performance level

   **d) Match Log (Bottom):**
   - List of last 10 matches with:
     - Match date
     - Season
     - Sport type
     - All stats for that match (goals, assists, etc.)
     - Coach notes (if any)

**Visual Example:**
```
┌─────────┬─────────┬─────────┬─────────┐
│ Matches │  Goals  │ Assists │  Passes │
│   15    │   20    │   10    │   450   │
└─────────┴─────────┴─────────┴─────────┘

┌──────────────────┬──────────────────┐
│ Metric Breakdown │  Recent Trend    │
│ Goals: ████████  │     ▁▂▃▅▆▇█      │
│ Assists: ████    │  Match 1-10      │
└──────────────────┴──────────────────┘

┌─────────────────────────────────────┐
│ Match Log:                          │
│ • Dec 25: 2 goals, 1 assist        │
│ • Dec 20: 1 goal, 2 assists        │
│ • Dec 15: 0 goals, 1 assist        │
└─────────────────────────────────────┘
```

---

### 5. End‑to‑End Player Flow (Quick Recap)

**In Simple Words:** Here's what happens from start to finish when a player uses the dashboard.

#### **Step-by-Step Flow:**

1. **Player Logs In**
   - Enters email and password
   - Backend checks credentials
   - Backend sends back a token (like a temporary ID card)
   - Token saved in browser's `sessionStorage`
   - Player redirected to Player Dashboard

2. **Player Dashboard Loads**
   - Dashboard component starts up
   - Calls `/api/teams` to get all teams
   - Searches through teams to find which one contains this player
   - Sets `team` state (or null if no team found)
   - Shows Profile tab by default

3. **Player Views Profile Tab**
   - Shows welcome message with player name
   - If team exists: Shows team name, coach, roster
   - If no team: Shows "Free Agent" message
   - Player can click "Leave Team" button
   - If confirmed: Calls `/api/teams/leave`
   - Backend removes player from team and clears teamId
   - Dashboard updates to show "No Active Team"

4. **Player Clicks "My Matches" Tab**
   - Dashboard calls `fetchMatches()` function
   - Calls `/api/matches/team/:teamId` API
   - Backend finds all matches where team is home or away
   - Backend returns match list with details
   - Dashboard displays matches in cards
   - Shows upcoming matches and past results
   - Highlights "YOUR TEAM" badge

5. **Player Clicks "My Stats" Tab**
   - Dashboard calls `fetchPlayerStats()` function
   - Calls TWO APIs:
     - `/api/stats/player/:playerId` → Gets individual match stats
     - `/api/stats/player/:playerId/aggregated` → Gets total stats
   - Backend calculates totals (adds up all goals, assists, etc.)
   - Dashboard displays:
     - Key metrics cards (big numbers)
     - Progress bars for each stat
     - Bar chart showing recent performance
     - Match log with detailed stats per match

#### **Complete Flow Diagram:**

```
Player Login
    ↓
Get Token (stored in browser)
    ↓
PlayerDashboard Component Loads
    ↓
Call /api/teams → Find Player's Team
    ↓
┌─────────────────────────────────────┐
│         Profile Tab (Default)       │
│  - Shows team info                  │
│  - Shows roster                     │
│  - "Leave Team" button              │
└─────────────────────────────────────┘
    ↓
Player Clicks "My Matches"
    ↓
Call /api/matches/team/:teamId
    ↓
┌─────────────────────────────────────┐
│         Matches Tab                 │
│  - Shows schedule                   │
│  - Shows results                    │
│  - Highlights YOUR TEAM            │
└─────────────────────────────────────┘
    ↓
Player Clicks "My Stats"
    ↓
Call /api/stats/player/:playerId
Call /api/stats/player/:playerId/aggregated
    ↓
┌─────────────────────────────────────┐
│         Stats Tab                   │
│  - Shows totals                     │
│  - Shows charts                     │
│  - Shows match log                  │
└─────────────────────────────────────┘
```

#### **Architecture Summary:**

This design follows a **clean separation**:

- **Data Storage (MongoDB Models):** 
  - Stores all information in database
  - Like a filing cabinet

- **Business Logic (Express Controllers):**
  - Handles all the work and calculations
  - Like a worker processing requests

- **Presentation (React JSX):**
  - Shows everything beautifully to the user
  - Like a display screen

**Benefits:**
- ✅ Easy to understand
- ✅ Easy to maintain
- ✅ Easy to add new features
- ✅ Each part does one job well


