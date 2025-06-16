document.addEventListener("DOMContentLoaded",() =>{
    const divisions = {
        "AFC East": ["Buffalo Bills", "Miami Dolphins", "New England Patriots", "New York Jets"],
        "AFC North": ["Baltimore Ravens", "Cincinnati Bengals", "Cleveland Browns", "Pittsburgh Steelers"],
        "AFC South": ["Houston Texans", "Indianapolis Colts", "Jacksonville Jaguars", "Tennessee Titans"],
        "AFC West": ["Denver Broncos", "Kansas City Chiefs", "Las Vegas Raiders", "Los Angeles Chargers"],
        "NFC East": ["Dallas Cowboys", "New York Giants", "Philadelphia Eagles", "Washington Commanders"],
        "NFC North": ["Chicago Bears", "Detroit Lions", "Green Bay Packers", "Minnesota Vikings"],
        "NFC South": ["Atlanta Falcons", "Carolina Panthers", "New Orleans Saints", "Tampa Bay Buccaneers"],
        "NFC West": ["Arizona Cardinals", "Los Angeles Rams", "San Francisco 49ers", "Seattle Seahawks"]
    };

    const teamlogos = {
        "Arizona Cardinals": "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/ARI",
        "Atlanta Falcons": "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/ATL",
        "Baltimore Ravens": "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/BAL",
        "Buffalo Bills": "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/BUF",
        "Carolina Panthers": "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/CAR",
        "Chicago Bears": "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/CHI",
        "Cincinnati Bengals": "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/CIN",
        "Cleveland Browns": "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/CLE",
        "Dallas Cowboys": "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/DAL",
        "Denver Broncos": "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/DEN",
        "Detroit Lions": "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/DET",
        "Green Bay Packers": "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/GB",
        "Houston Texans": "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/HOU",
        "Indianapolis Colts": "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/IND",
        "Jacksonville Jaguars": "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/JAX",
        "Kansas City Chiefs": "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/KC",
        "Las Vegas Raiders": "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/LV",
        "Los Angeles Chargers": "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/LAC",
        "Los Angeles Rams": "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/LAR",
        "Miami Dolphins": "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/MIA",
        "Minnesota Vikings": "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/MIN",
        "New England Patriots": "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/NE",
        "New Orleans Saints": "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/NO",
        "New York Giants": "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/NYG",
        "New York Jets": "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/NYJ",
        "Philadelphia Eagles": "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/PHI",
        "Pittsburgh Steelers": "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/PIT",
        "San Francisco 49ers": "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/SF",
        "Seattle Seahawks": "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/SEA",
        "Tampa Bay Buccaneers": "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/TB",
        "Tennessee Titans": "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/TEN",
        "Washington Commanders": "https://static.www.nfl.com/t_headshot_desktop_2x/f_auto/league/api/clubs/logos/WAS"
        
    };

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
                const currentTeam = teams[j];
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

                const originalBG = teamCell.style.backgroundColor|| "#f9f9f9";
                const originalColor = teamCell.style.color || "#000000";
                teamCell.addEventListener("mouseover", () => {
                    const teamColor = teamColors[currentTeam] || "#e0f00f"; 
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