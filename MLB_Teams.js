document.addEventListener("DOMContentLoaded",() =>{
    const divisions = {
        "AL East": ["Baltimore Orioles", "Boston Red Sox", "New York Yankees", "Tampa Bay Rays", "Toronto Blue Jays"],
        "AL Central": ["Chicago White Sox", "Cleveland Guardians", "Detroit Tigers", "Kansas City Royals", "Minnesota Twins"],
        "AL West": ["Athletics", "Houston Astros", "Los Angeles Angels", "Seattle Mariners", "Texas Rangers"],
        "NL East": ["Atlanta Braves", "Miami Marlins", "New York Mets", "Philadelphia Phillies", "Washington Nationals"],
        "NL Central": ["Chicago Cubs", "Cincinnati Reds", "Milwaukee Brewers", "Pittsburgh Pirates", "St. Louis Cardinals"],
        "NL West": ["Arizona Diamondbacks", "Colorado Rockies", "Los Angeles Dodgers", "San Diego Padres", "San Francisco Giants"],
    };

    const teamlogos = {
        "Arizona Diamondbacks": "https://www.mlbstatic.com/team-logos/team-cap-on-light/109.svg",
        "Athletics": "https://www.mlbstatic.com/team-logos/team-cap-on-light/133.svg",
        "Atlanta Braves": "https://www.mlbstatic.com/team-logos/team-cap-on-light/144.svg",
        "Baltimore Orioles": "https://www.mlbstatic.com/team-logos/team-cap-on-light/110.svg",
        "Boston Red Sox": "https://www.mlbstatic.com/team-logos/team-cap-on-light/111.svg",
        "Chicago Cubs": "https://www.mlbstatic.com/team-logos/team-cap-on-light/112.svg",
        "Chicago White Sox": "https://www.mlbstatic.com/team-logos/team-cap-on-light/145.svg",
        "Cincinnati Reds": "https://www.mlbstatic.com/team-logos/team-cap-on-light/113.svg",
        "Cleveland Guardians": "https://www.mlbstatic.com/team-logos/team-cap-on-light/114.svg",
        "Colorado Rockies": "https://www.mlbstatic.com/team-logos/team-cap-on-light/115.svg",
        "Detroit Tigers": "https://www.mlbstatic.com/team-logos/team-cap-on-light/116.svg",
        "Houston Astros": "https://www.mlbstatic.com/team-logos/team-primary-on-light/117.svg",
        "Kansas City Royals": "https://www.mlbstatic.com/team-logos/team-cap-on-light/118.svg",
        "Los Angeles Angels": "https://www.mlbstatic.com/team-logos/team-cap-on-light/108.svg",
        "Los Angeles Dodgers": "https://www.mlbstatic.com/team-logos/team-cap-on-light/119.svg",
        "Miami Marlins": "https://www.mlbstatic.com/team-logos/team-cap-on-light/146.svg",
        "Milwaukee Brewers": "https://www.mlbstatic.com/team-logos/team-cap-on-light/158.svg",
        "Minnesota Twins": "https://www.mlbstatic.com/team-logos/team-cap-on-light/142.svg",
        "New York Mets": "https://www.mlbstatic.com/team-logos/team-cap-on-light/121.svg",
        "New York Yankees": "https://www.mlbstatic.com/team-logos/team-cap-on-light/147.svg",
        "Philadelphia Phillies": "https://www.mlbstatic.com/team-logos/team-cap-on-light/143.svg",
        "Pittsburgh Pirates": "https://www.mlbstatic.com/team-logos/team-cap-on-light/134.svg",
        "San Diego Padres": "https://www.mlbstatic.com/team-logos/team-cap-on-light/135.svg",
        "San Francisco Giants": "https://www.mlbstatic.com/team-logos/team-cap-on-light/137.svg",
        "Seattle Mariners": "https://www.mlbstatic.com/team-logos/team-primary-on-light/136.svg",
        "St. Louis Cardinals": "https://www.mlbstatic.com/team-logos/team-cap-on-light/138.svg",
        "Tampa Bay Rays": "https://www.mlbstatic.com/team-logos/team-cap-on-light/139.svg",
        "Texas Rangers": "https://www.mlbstatic.com/team-logos/team-cap-on-light/140.svg",
        "Toronto Blue Jays": "https://www.mlbstatic.com/team-logos/team-cap-on-light/141.svg",
        "Washington Nationals": "https://www.mlbstatic.com/team-logos/team-cap-on-light/120.svg",
        
    }

    const container = document.getElementById("mlb-container");

    for (const [division, teams] of Object.entries(divisions)) {
        //Creates a table for each division
        const table = document.createElement("table");
        table.classList.add("mlb-table");

        // Creates a header row for the division name
        const headerRow = document.createElement("tr");
        const header = document.createElement("th");
        header.colSpan = "4";
        header.textContent = division;
        header.classList.add("mlb-header");
        headerRow.appendChild(header);
        table.appendChild(headerRow);

        // Creates a row for each team in the division
        for (let i = 0; i< teams.length; i+=2){
            const teamRow = document.createElement("tr");
            for (let j = i; j < i+2 && j<teams.length; j++) {
                const teamCell = document.createElement("td");
                teamCell.classList.add("mlb-cell");

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