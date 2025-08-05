document.addEventListener("DOMContentLoaded",() =>{
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
        "Golden State Warriors": "#006BB6",
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

    function getContrastYIQ(hexcolor) {
        const hex = hexcolor.replace("#", "");
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 2), 16);
        const b = parseInt(hex.substring(4, 2), 16);
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b);
        return luminance >= 150 ? "#000000" : "#FFFFFF";
        
    }

    const container = document.getElementById("nfl-container");

    for (const [division, teams] of Object.entries(divisions)) {
        //Creates a table for each division
        const table = document.createElement("table");
        table.classList.add("nfl-table");

        // Creates a header row for the division name
        const headerRow = document.createElement("tr");
        const header = document.createElement("th");
        header.colSpan = "4";
        header.textContent = division;
        header.classList.add("nfl-header");
        headerRow.appendChild(header);
        table.appendChild(headerRow);

        // Creates a row for each team in the division
        for (let i = 0; i< teams.length; i+=2){
            const teamRow = document.createElement("tr");
            for (let j = i; j < i+2 && j<teams.length; j++) {
                const teamCell = document.createElement("td");
                teamCell.classList.add("nfl-cell");

                const logo = document.createElement("img");
                logo.src = teamlogos[teams[j]] || ""; // Placeholder if logo not found
                logo.alt = teams[j];
                logo.classList.add("team-logo");

                const name = document.createElement("span");
                name.textContent = teams[j];


                teamCell.appendChild(logo);
                teamCell.appendChild(name);
                teamRow.appendChild(teamCell);

                const originalBG = teamCell.style.backgroundColor || "#f9f9f9";
                const originalColor = teamCell.style.color || "#000000";
                teamCell.addEventListener("mouseover", () => {
                    const teamColor = teamColors[teams[j]] || "#e0f00f"; 
                    teamCell.style.backgroundColor = teamColor;
                    teamCell.style.color = getContrastYIQ(teamColor);
                });

                teamCell.addEventListener("mouseout", () => {
                    teamCell.style.backgroundColor = "";
                    teamCell.style.color = "";
                });
            }
            table.appendChild(teamRow);
        }
        container.appendChild(table);
        
    }

});