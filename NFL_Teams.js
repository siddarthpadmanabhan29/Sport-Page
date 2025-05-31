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
        "Arizona Cardinals": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
        "Atlanta Falcons": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
        "Baltimore Ravens": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
        "Buffalo Bills": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
        "Carolina Panthers": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
        "Chicago Bears": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
        "Cincinnati Bengals": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
        "Cleveland Browns": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
        "Dallas Cowboys": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
        "Denver Broncos": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
        "Detroit Lions": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
        "Green Bay Packers": "https://a.espncdn.com/i/teamlogos/nfl/500/gnb.png",
        "Houston Texans": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
        "Indianapolis Colts": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
        "Jacksonville Jaguars": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
        "Kansas City Chiefs": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
        "Las Vegas Raiders": "https://a.espncdn.com/i/teamlogos/nfl/500/lvr.png",
        "Los Angeles Chargers": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
        "Los Angeles Rams": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
        "Miami Dolphins": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
        "Minnesota Vikings": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
        "New England Patriots": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
        "New Orleans Saints": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
        "New York Giants": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
        "New York Jets": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
        "Philadelphia Eagles": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
        "Pittsburgh Steelers": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
        "San Francisco 49ers": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
        "Seattle Seahawks": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
        "Tampa Bay Buccaneers": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
        "Tennessee Titans": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
        "Washington Commanders": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png"
        
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
            }
            table.appendChild(teamRow);
        }
        container.appendChild(table);
        //const teamRow = document.createElement("tr");
        //teams.forEach(team => {
            //const teamCell = document.createElement("td");
            //teamCell.textContent = team;
            //teamCell.style.padding = "10px";
            //teamCell.style.border = "1px solid #ccc";
            //teamRow.appendChild(teamCell);
        //});
        


    }

});