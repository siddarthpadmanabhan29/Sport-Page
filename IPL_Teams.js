document.addEventListener("DOMContentLoaded",() =>{
    const divisions = {
        "GROUP A": ["Chennai Super Kings", "Delhi Capitals", "Gujarat Titans", "Kolkata Knight Riders", "Lucknow Super Giants", "Mumbai Indians", "Punjab Kings", "Rajasthan Royals", "Royal Challengers Bengaluru", "Sunrisers Hyderabad"],
    };

    const teamlogos = {
        "Chennai Super Kings": "https://a.espncdn.com/i/teamlogos/cricket/500/335974.png",
        "Delhi Capitals": "https://a.espncdn.com/i/teamlogos/cricket/500/335975.png",
        "Gujarat Titans": "https://a.espncdn.com/i/teamlogos/cricket/500/1298769.png",
        "Kolkata Knight Riders": "https://a.espncdn.com/i/teamlogos/cricket/500/335971.png",
        "Lucknow Super Giants": "https://a.espncdn.com/i/teamlogos/cricket/500/1298768.png",
        "Mumbai Indians": "https://a.espncdn.com/i/teamlogos/cricket/500/335978.png",
        "Punjab Kings": "https://a.espncdn.com/i/teamlogos/cricket/500/335973.png",
        "Rajasthan Royals": "https://a.espncdn.com/i/teamlogos/cricket/500/335977.png",
        "Royal Challengers Bengaluru": "https://a.espncdn.com/i/teamlogos/cricket/500/335970.png",
        "Sunrisers Hyderabad": "https://a.espncdn.com/i/teamlogos/cricket/500/628333.png",
        
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