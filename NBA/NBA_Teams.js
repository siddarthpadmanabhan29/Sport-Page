document.addEventListener("DOMContentLoaded", () => {
    const divisions = {
        "Atlantic": ["Boston Celtics", "Brooklyn Nets", "New York Knicks", "Philadelphia 76ers", "Toronto Raptors"],
        "Central": ["Chicago Bulls", "Cleveland Cavaliers", "Detroit Pistons", "Indiana Pacers", "Milwaukee Bucks"],
        "Southeast": ["Atlanta Hawks", "Charlotte Hornets", "Miami Heat", "Orlando Magic", "Washington Wizards"],
        "Northwest": ["Denver Nuggets", "Minnesota Timberwolves", "Oklahoma City Thunder", "Portland Trail Blazers", "Utah Jazz"],
        "Pacific": ["Golden State Warriors", "LA Clippers", "Los Angeles Lakers", "Phoenix Suns", "Sacramento Kings"],
        "Southwest": ["Dallas Mavericks", "Houston Rockets", "Memphis Grizzlies", "New Orleans Pelicans", "San Antonio Spurs"],
    };

    const teamlogos = {
        "Atlanta Hawks": "https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg",
        "Boston Celtics": "https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg",
        "Brooklyn Nets": "https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg",
        "Charlotte Hornets": "https://cdn.nba.com/logos/nba/1610612766/primary/L/logo.svg",
        "Chicago Bulls": "https://cdn.nba.com/logos/nba/1610612741/primary/L/logo.svg",
        "Cleveland Cavaliers": "https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg",
        "Dallas Mavericks": "https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg",
        "Denver Nuggets": "https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg",
        "Detroit Pistons": "https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg",
        "Golden State Warriors": "https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg",
        "Houston Rockets": "https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg",
        "Indiana Pacers": "https://cdn.nba.com/logos/nba/1610612754/primary/L/logo.svg",
        "LA Clippers": "https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg",
        "Los Angeles Lakers": "https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg",
        "Memphis Grizzlies": "https://cdn.nba.com/logos/nba/1610612763/primary/L/logo.svg",
        "Miami Heat": "https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg",
        "Milwaukee Bucks": "https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg",
        "Minnesota Timberwolves": "https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg",
        "New Orleans Pelicans": "https://cdn.nba.com/logos/nba/1610612740/primary/L/logo.svg",
        "New York Knicks": "https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg",
        "Oklahoma City Thunder": "https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg",
        "Orlando Magic": "https://cdn.nba.com/logos/nba/1610612753/primary/L/logo.svg",
        "Philadelphia 76ers": "https://cdn.nba.com/logos/nba/1610612755/primary/L/logo.svg",
        "Phoenix Suns": "https://cdn.nba.com/logos/nba/1610612756/primary/L/logo.svg",
        "Portland Trail Blazers": "https://cdn.nba.com/logos/nba/1610612757/primary/L/logo.svg",
        "Sacramento Kings": "https://cdn.nba.com/logos/nba/1610612758/primary/L/logo.svg",
        "San Antonio Spurs": "https://cdn.nba.com/logos/nba/1610612759/primary/L/logo.svg",
        "Toronto Raptors": "https://cdn.nba.com/logos/nba/1610612761/primary/L/logo.svg",
        "Utah Jazz": "https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.svg",
        "Washington Wizards": "https://cdn.nba.com/logos/nba/1610612764/primary/L/logo.svg",
    };

    const teamColors = {
        "Atlanta Hawks": "#E03A3E",
        "Boston Celtics": "#007A33",
        "Brooklyn Nets": "#000000",
        "Charlotte Hornets": "#00788C",
        "Chicago Bulls": "#CE1141",
        "Cleveland Cavaliers": "#6F263D",
        "Dallas Mavericks": "#00538C",
        "Denver Nuggets": "#4B92DB",
        "Detroit Pistons": "#006BB6",
        "Golden State Warriors": "#1D428A",
        "Houston Rockets": "#CE1141",
        "Indiana Pacers": "#002D62",
        "LA Clippers": "#C8102E",
        "Los Angeles Lakers": "#552583",
        "Memphis Grizzlies": "#5D76A9",
        "Miami Heat": "#98002E",
        "Milwaukee Bucks": "#00471B",
        "Minnesota Timberwolves": "#0C2340",
        "New Orleans Pelicans": "#004B87",
        "New York Knicks": "#006BB6",
        "Oklahoma City Thunder": "#007AC1",
        "Orlando Magic": "#0077C8",
        "Philadelphia 76ers": "#006BB6",
        "Phoenix Suns": "#1D1160",
        "Portland Trail Blazers": "#E03A3E",
        "Sacramento Kings": "#5A2D81",
        "San Antonio Spurs": "#C4CED4",
        "Toronto Raptors": "#CE1141",
        "Utah Jazz": "#002B5C",
        "Washington Wizards": "#002B5C"
    };

    const teamLinks = {
        "Atlanta Hawks": "https://www.nba.com/hawks/",
        "Boston Celtics": "https://www.nba.com/celtics/",
        "Brooklyn Nets": "https://www.nba.com/nets/",
        "Charlotte Hornets": "https://www.nba.com/hornets/",
        "Chicago Bulls": "https://www.nba.com/bulls/",
        "Cleveland Cavaliers": "https://www.nba.com/cavaliers/",
        "Dallas Mavericks": "https://www.nba.com/mavericks/",
        "Denver Nuggets": "https://www.nba.com/nuggets/",
        "Detroit Pistons": "https://www.nba.com/pistons/",
        "Golden State Warriors": "https://www.nba.com/warriors/",
        "Houston Rockets": "https://www.nba.com/rockets/",
        "Indiana Pacers": "https://www.nba.com/pacers/",
        "LA Clippers": "https://www.nba.com/clippers/",
        "Los Angeles Lakers": "https://www.nba.com/lakers/",
        "Memphis Grizzlies": "https://www.nba.com/grizzlies/",
        "Miami Heat": "https://www.nba.com/heat/",
        "Milwaukee Bucks": "https://www.nba.com/bucks/",
        "Minnesota Timberwolves": "https://www.nba.com/timberwolves/",
        "New Orleans Pelicans": "https://www.nba.com/pelicans/",
        "New York Knicks": "https://www.nba.com/knicks/",
        "Oklahoma City Thunder": "https://www.nba.com/thunder/",
        "Orlando Magic": "https://www.nba.com/magic/",
        "Philadelphia 76ers": "https://www.nba.com/sixers/",
        "Phoenix Suns": "https://www.nba.com/suns/",
        "Portland Trail Blazers": "https://www.nba.com/blazers/",
        "Sacramento Kings": "https://www.nba.com/kings/",
        "San Antonio Spurs": "https://www.nba.com/spurs/",
        "Toronto Raptors": "https://www.nba.com/raptors/",
        "Utah Jazz": "https://www.nba.com/jazz/",
        "Washington Wizards": "https://www.nba.com/wizards/"
    };

    function getContrastYIQ(hexcolor) {
        const hex = hexcolor.replace("#", "");
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b);
        return luminance >= 150 ? "#000000" : "#FFFFFF";
    }

    const container = document.getElementById("nba-container"); 

    for (const [division, teams] of Object.entries(divisions)) {
        // Creates a table for each division
        const divisionTitle = document.createElement("div");
        divisionTitle.className = "division-header";
        divisionTitle.textContent = division;
        container.appendChild(divisionTitle);

        const grid = document.createElement("div");
        grid.className = "team-grid";

        teams.forEach(team => {
            const link = document.createElement("a");
            link.href = teamLinks[team];
            link.target = "_blank"; 
            link.className = "team-link";

            const card = document.createElement("div");
            card.className = "team-card";
            card.setAttribute("data-team", team.toLowerCase());

            const logo = document.createElement("img");
            logo.src = teamlogos[team];
            logo.alt = team;

            const name = document.createElement("div");
            name.className = "team-name";
            name.textContent = team;

            card.appendChild(logo);
            card.appendChild(name);
            link.appendChild(card);
            grid.appendChild(link);

            
            card.addEventListener("mouseover", () => {
                const color = teamColors[team] || "#ccc";
                card.style.backgroundColor = color;
                card.style.color = getContrastYIQ(color); 
            });

            card.addEventListener("mouseout", () => {
                card.style.backgroundColor = "";
                card.style.color = "";
            });
        }); 

        container.appendChild(grid);
    } 
    const searchInput = document.getElementById("search");

    document.getElementById("search").addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    document.querySelectorAll(".team-card").forEach(card => {
        const name = card.getAttribute("data-team");
        card.style.display = name.includes(query) ? "flex" : "none";
    });
});

    
});
