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

    const teamLinks = {
        "Arizona Cardinals": "https://www.azcardinals.com/",
        "Atlanta Falcons": "https://www.atlantafalcons.com/",
        "Baltimore Ravens": "https://www.baltimoreravens.com/",
        "Buffalo Bills": "https://www.buffalobills.com/",
        "Carolina Panthers": "https://www.panthers.com/",
        "Chicago Bears": "https://www.chicagobears.com/",
        "Cincinnati Bengals": "https://www.bengals.com/",
        "Cleveland Browns": "https://www.clevelandbrowns.com/",
        "Dallas Cowboys": "https://www.dallascowboys.com/",
        "Denver Broncos": "https://www.denverbroncos.com/",
        "Detroit Lions": "https://www.detroitlions.com/",
        "Green Bay Packers": "https://www.packers.com/",    
        "Houston Texans": "https://www.houstontexans.com/",
        "Indianapolis Colts": "https://www.colts.com/",
        "Jacksonville Jaguars": "https://www.jaguars.com/",
        "Kansas City Chiefs": "https://www.chiefs.com/",
        "Las Vegas Raiders": "https://www.raiders.com/",
        "Los Angeles Chargers": "https://www.chargers.com/",
        "Los Angeles Rams": "https://www.therams.com/",
        "Miami Dolphins": "https://www.miamidolphins.com/",
        "Minnesota Vikings": "https://www.vikings.com/",
        "New England Patriots": "https://www.patriots.com/",
        "New Orleans Saints": "https://www.neworleanssaints.com/",
        "New York Giants": "https://www.giants.com/",
        "New York Jets": "https://www.newyorkjets.com/",
        "Philadelphia Eagles": "https://www.philadelphiaeagles.com/",
        "Pittsburgh Steelers": "https://www.steelers.com/",
        "San Francisco 49ers": "https://www.49ers.com/",
        "Seattle Seahawks": "https://www.seahawks.com/",
        "Tampa Bay Buccaneers": "https://www.buccaneers.com/",
        "Tennessee Titans": "https://www.tennesseetitans.com/",
        "Washington Commanders": "https://www.commanders.com/"
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

       