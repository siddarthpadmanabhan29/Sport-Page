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
        
    };

    const teamColors = {
        "Chennai Super Kings": "#F7E03D",
        "Delhi Capitals": "#17449B",
        "Gujarat Titans": "#0C2340",
        "Kolkata Knight Riders": "#512888",
        "Lucknow Super Giants": "#F7E03D",
        "Mumbai Indians": "#005DAA",
        "Punjab Kings": "#E30613",
        "Rajasthan Royals": "#1E90FF",
        "Royal Challengers Bengaluru": "#C8102E",
        "Sunrisers Hyderabad": "#FF9800"
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
                logo.src = teamlogos[teams[j]] || "";
                logo.alt = teams[j];
                logo.classList.add("team-logo");

                const name = document.createElement("span");
                name.textContent = teams[j];


                teamCell.appendChild(logo);
                teamCell.appendChild(name);
                teamRow.appendChild(teamCell);

                // Hover effect to change background color to team color
                const originalBG = teamCell.style.backgroundColor|| "#f9f9f9";
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