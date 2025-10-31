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
        
    };

    const teamColors = {
        "Arizona Diamondbacks": "#A71930",
        "Athletics": "#003831",
        "Atlanta Braves": "#CE1141",
        "Baltimore Orioles": "#DF4601",
        "Boston Red Sox": "#BD3039",
        "Chicago Cubs": "#0E3386",
        "Chicago White Sox": "#27251F",
        "Cincinnati Reds": "#C6011F",
        "Cleveland Guardians": "#E31937",
        "Colorado Rockies": "#33006F",
        "Detroit Tigers": "#0C2340",
        "Houston Astros": "#EB6E1F",
        "Kansas City Royals": "#004687",
        "Los Angeles Angels": "#BA0021",
        "Los Angeles Dodgers": "#005A9C",
        "Miami Marlins": "#00A3E0",
        "Milwaukee Brewers": "#12284B",
        "Minnesota Twins": "#002B5C",
        "New York Mets": "#002D72",
        "New York Yankees": "#1C2841",
        "Philadelphia Phillies": "#E81828",
        "Pittsburgh Pirates": "#FDB827",
        "San Diego Padres": "#2F241D",
        "San Francisco Giants": "#FD5A1E",
        "Seattle Mariners": "#0C2C56",
        "St. Louis Cardinals": "#C41E3A",
        "Tampa Bay Rays": "#092C5C",
        "Texas Rangers": "#003278",
        "Toronto Blue Jays": "#134A8E",
        "Washington Nationals": "#AB0003",
    };

    const teamLinks = {
        "Arizona Diamondbacks": "https://www.mlb.com/dbacks",
        "Athletics": "https://www.mlb.com/athletics",
        "Atlanta Braves": "https://www.mlb.com/braves",
        "Baltimore Orioles": "https://www.mlb.com/orioles",
        "Boston Red Sox": "https://www.mlb.com/redsox",
        "Chicago Cubs": "https://www.mlb.com/cubs",
        "Chicago White Sox": "https://www.mlb.com/whitesox",
        "Cincinnati Reds": "https://www.mlb.com/reds",
        "Cleveland Guardians": "https://www.mlb.com/guardians",
        "Colorado Rockies": "https://www.mlb.com/rockies",
        "Detroit Tigers": "https://www.mlb.com/tigers",
        "Houston Astros": "https://www.mlb.com/astros",
        "Kansas City Royals": "https://www.mlb.com/royals",
        "Los Angeles Angels": "https://www.mlb.com/angels",
        "Los Angeles Dodgers": "https://www.mlb.com/dodgers",
        "Miami Marlins": "https://www.mlb.com/marlins",
        "Milwaukee Brewers": "https://www.mlb.com/brewers",
        "Minnesota Twins": "https://www.mlb.com/twins",
        "New York Mets": "https://www.mlb.com/mets",
        "New York Yankees": "https://www.mlb.com/yankees",
        "Philadelphia Phillies": "https://www.mlb.com/phillies",
        "Pittsburgh Pirates": "https://www.mlb.com/pirates",
        "San Diego Padres": "https://www.mlb.com/padres",
        "San Francisco Giants": "https://www.mlb.com/giants",
        "Seattle Mariners": "https://www.mlb.com/mariners",
        "St. Louis Cardinals": "https://www.mlb.com/cardinals",
        "Tampa Bay Rays": "https://www.mlb.com/rays",
        "Texas Rangers": "https://www.mlb.com/rangers",
        "Toronto Blue Jays": "https://www.mlb.com/bluejays",
        "Washington Nationals": "https://www.mlb.com/nationals",
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

//Improve Search Functionality
document.getElementById("search").addEventListener("input", (e)=> {
    const query = e.target.value.toLowerCase();
    document.querySelectorAll(".team-card").forEach(card => {
        const name = card.getAttribute("data-team");
        card.style.display = name.includes(query) ? "flex" : "none";
    });
});

    
});