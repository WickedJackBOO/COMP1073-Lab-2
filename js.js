const output = document.getElementById('Stuff');

function person(name,locat,tg,yearsEXP,edu,skills,certif,lanspeek,url,relokat,remote,soft,intern){
    this.name = name;
    this.locat =locat;
    this.tg = tg;
    this.yearsEXP = yearsEXP;
    this.edu = edu,
    this.skills = skills,
    this.certif = certif,
    this.lanspeek = lanspeek,
    this.url = url,
    this.relokat = relokat, 
    this.remote = remote,
    this.soft = soft,
    this.intern = intern
}

let app1 = new person(
    "Liam O'Reilly",
    "Halifax, NS",
    "Marine Technician",
    4,
    "Diploma in Marine Technology, Nova Scotia Community College",
    ["Sonar operation", "Engine repair", "Navigation systems"],
    ["Marine Safety Training"],
    ["English"],
    null,
    true,
    false,
    ["Teamwork", "Adaptability"],
    false
    
);
app1.bio = function(){
    return `
    ${this.name}
    Location: ${this.locat}
    Target role: ${this.tg}
    Years of exp: ${this.yearsEXP}
    Education: ${this.edu}
    Skills: ${this.skills.join(", ")}
    Certifications: ${this.certif.join(", ")}
    Languages: ${this.lanspeek.join(", ")}
    Portfolio URL: ${this.url ?? "N/A"}
    Willing to Relocate: ${this.relokat}
    Remote Work Preferred: ${this.remote}
    Soft Skills: ${this.soft.join(", ")}
    Open to Internships: ${this.intern}
    `;
}

output.innerText = app1.bio();