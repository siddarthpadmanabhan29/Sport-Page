// ===== NFL_Playoffs.js (Dynamic Version) =====

// Team colors lookup
const teamColors = {
    "Arizona Cardinals": "#97233F",
    "Atlanta Falcons": "#A71930",
    "Baltimore Ravens": "#241773",
    "Buffalo Bills": "#00338D",
    "Carolina Panthers": "#0085CA",
    "Chicago Bears": "#0B162A",
    "Cincinnati Bengals": "#FB4F14",
    "Cleveland Browns": "#311D00",
    "Dallas Cowboys": "#002244",
    "Denver Broncos": "#002244",
    "Detroit Lions": "#0076B6",
    "Green Bay Packers": "#203731",
    "Houston Texans": "#03202F",
    "Indianapolis Colts": "#002C5F",
    "Jacksonville Jaguars": "#006778",
    "Kansas City Chiefs": "#E31837",
    "Las Vegas Raiders": "#000000",
    "Los Angeles Chargers": "#0080FF",
    "Los Angeles Rams": "#003594",
    "Miami Dolphins": "#008E97",
    "Minnesota Vikings": "#4F2683",
    "New England Patriots": "#002244",
    "New Orleans Saints": "#D3BC8D",
    "New York Giants": "#0B2265",
    "New York Jets": "#2C9A2C",
    "Philadelphia Eagles": "#004C54",
    "Pittsburgh Steelers": "#FFB612",
    "San Francisco 49ers": "#AA0000",
    "Seattle Seahawks": "#002244",
    "Tampa Bay Buccaneers": "#D50A0A",
    "Tennessee Titans": "#4B92DB",
    "Washington Commanders": "#773141"
};

// Utility: calculate win percentage
function calcPct(w, l, t = 0) {
    const total = w + l + t;
    return total === 0 ? 0 : (w + 0.5 * t) / total;
}

// Utility: contrast color for hover text
function getContrastYIQ(hexcolor) {
    const hex = hexcolor.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    return luminance >= 150 ? "#000000" : "#FFFFFF";
}

// Get all teams in a conference
function getConferenceTeams(conferencePrefix) {
    const divisions = Object.keys(nflData["2025-26"]).filter(div => div.startsWith(conferencePrefix));
    const teams = divisions.flatMap(div => {
        const divTeams = nflData["2025-26"][div].map(team => ({ ...team, divisionName: div }));
        return divTeams;
    });
    return teams;
}

// Sort teams according to simplified NFL tie-breakers
function sortTeamsNFL(teams) {
    return teams.slice().sort((a, b) => {
        const pctA = calcPct(a.w, a.l, a.t);
        const pctB = calcPct(b.w, b.l, b.t);
        if (pctA !== pctB) return pctB - pctA;

        const diffA = a.pf - a.pa;
        const diffB = b.pf - b.pa;
        if (diffA !== diffB) return diffB - diffA;

        return b.pf - a.pf;
    });
}

// ===== Get seeded teams (1 per division for top 4 seeds) =====
function getSeededTeams(teams) {
    const divisions = [...new Set(teams.map(t => t.divisionName))];

    // Top team from each division
    const divisionWinners = divisions.map(div => {
        const divTeams = teams.filter(t => t.divisionName === div);
        return sortTeamsNFL(divTeams)[0];
    });

    // Sort division winners for seeds 1-4
    const topSeeds = sortTeamsNFL(divisionWinners);

    // Remaining teams for wildcards
    const remainingTeams = teams.filter(t => !topSeeds.includes(t));
    const wildcards = sortTeamsNFL(remainingTeams);

    return [...topSeeds, ...wildcards];
}

// ===== Render playoff section dynamically =====
function renderPlayoffSection(conference, containerId) {
    const teams = getConferenceTeams(conference);
    const seededTeams = getSeededTeams(teams);

    // Determine sections dynamically based on seed
    const sections = {
        "Clinched a Playoff Spot": seededTeams.slice(0, 0),
        "In the Hunt": seededTeams.slice(0, 7),
        "On the Bubble": seededTeams.slice(7, 16),
        "Eliminated": seededTeams.slice(16)
    };

    const container = document.getElementById(containerId);
    container.innerHTML = "";

    for (const [title, group] of Object.entries(sections)) {
        if (!group.length) continue;

        const section = document.createElement("div");
        section.classList.add("section");

        const header = document.createElement("h3");
        header.textContent = title;
        section.appendChild(header);

        const grid = document.createElement("div");
        grid.className = "team-grid";

        group.forEach(team => {
            const seed = seededTeams.indexOf(team) + 1;

            const card = document.createElement("div");
            card.className = "team-card";

            const color = teamColors[team.team] || "#ccc";

            const logo = document.createElement("img");
            logo.src = team.logo;
            logo.alt = team.team;

            const name = document.createElement("div");
            name.className = "team-name";
            name.textContent = `#${seed} ${team.team} (${team.w}-${team.l}${team.t ? `-${team.t}` : ""})`;

            card.appendChild(logo);
            card.appendChild(name);
            grid.appendChild(card);

            // Hover effect
            card.addEventListener("mouseover", () => {
                card.style.backgroundColor = color;
                card.style.color = getContrastYIQ(color);
            });
            card.addEventListener("mouseout", () => {
                card.style.backgroundColor = "";
                card.style.color = "";
            });
        });

        section.appendChild(grid);
        container.appendChild(section);
    }
}

// ===== Dynamic record update helper =====
function updateTeamRecord(teamName, w, l, t = 0) {
    for (const conf of ["AFC", "NFC"]) {
        const teams = getConferenceTeams(conf);
        const team = teams.find(t => t.team === teamName);
        if (team) {
            team.w = w;
            team.l = l;
            team.t = t;

            // Re-render playoffs dynamically
            renderPlayoffSection(conf, conf.toLowerCase() + "-playoffs");
            break;
        }
    }
}

// Initialize playoff rendering
document.addEventListener("DOMContentLoaded", () => {
    if (typeof nflData === "undefined") {
        console.error("nflData not found! Make sure NFL_Standings.js is loaded first.");
        return;
    }

    renderPlayoffSection("AFC", "afc-playoffs");
    renderPlayoffSection("NFC", "nfc-playoffs");
});
