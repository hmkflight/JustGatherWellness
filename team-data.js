// Team Data - Just Gather Wellness
// Structured by rank hierarchy

const teamData = {
    executiveLeadership: [
        {
            name: "Arolyn Burns, LMFT, LPCC",
            role: "Chief Executive Officer",
            section: "Executive Leadership",
            linkedin: "https://www.linkedin.com/in/arolynburns-lpcc-lmft/",
            imageFilename: "Arolyn-Burns.jpeg"
        }
    ],
    founders: [
        {
            name: "Michelle Highberg, CFRE",
            role: "Co-Founder & Gratitude Chief",
            section: "Founders",
            linkedin: "https://www.linkedin.com/in/michelle-highberg-cfre-/",
            imageFilename: "michelle-highberg.jpeg",
            imagePath: "/Assets/team/faces/"
        },
        {
            name: "Evelina Pentcheva",
            role: "Co-Founder & Harmony Chief",
            section: "Founders",
            linkedin: "https://www.linkedin.com/in/evelinapentcheva/",
            imageFilename: "evelina-pentcheva.jpeg"
        }
    ],
    advisoryBoard: [
        {
            name: "Sara Garske",
            role: "Philanthropy Lead & Advisory Board Chair",
            section: "Advisory Board",
            linkedin: "https://www.linkedin.com/in/sgarske/",
            imageFilename: "Sara-garske.jpeg"
        },
        {
            name: "Glen Roske",
            role: "S.A.F.E. Chief",
            section: "Advisory Board",
            linkedin: "https://www.linkedin.com/in/glen-roske-4a227724a/",
            imageFilename: null
        }
    ],
    leadershipTeam: [
        {
            name: "April Sands",
            role: "Marketing Lead",
            section: "Leadership Team",
            linkedin: "https://www.linkedin.com/in/april-a-sands/",
            imageFilename: "april-sands.jpeg"
        },
        {
            name: "Jennifer Guilfoyle",
            role: "Special Events Lead",
            section: "Leadership Team",
            linkedin: "https://www.linkedin.com/in/jennifer-guilfoyle-86663526/",
            imageFilename: "jennifer-guilfoyle.jpeg"
        },
        {
            name: "Lisa Berman",
            role: "Community Outreach Lead",
            section: "Leadership Team",
            linkedin: "https://www.linkedin.com/in/lisa-berman-b91b41b/",
            imageFilename: "lisa-berman.jpeg"
        },
        {
            name: "Michaell Magrutsche",
            role: "Human Centricity Lead",
            section: "Leadership Team",
            linkedin: "https://www.linkedin.com/in/michaellart/",
            imageFilename: "Michaell-Magrutsche.jpg"
        },
        {
            name: "Georgeana Ireland",
            role: "Art Lead",
            section: "Leadership Team",
            linkedin: "https://www.linkedin.com/in/ethosarts/",
            imageFilename: "Georgeana-Ireland.png"
        },
        {
            name: "Julie Harris",
            role: "Music & Dance Lead",
            section: "Leadership Team",
            linkedin: null,
            imageFilename: "Julie-Harris.jpg"
        },
        {
            name: "Kris Spitaleri",
            role: "Animal Therapy Lead",
            section: "Leadership Team",
            linkedin: null,
            imageFilename: "Kris-Spitaleri.jpg"
        },
        {
            name: "Michelle Broadbent Kimball",
            role: "Family Lead",
            section: "Leadership Team",
            linkedin: null,
            imageFilename: "michelle-broadbent-kimball.png"
        },
        {
            name: "Quentin Kunaka",
            role: "S.T.E.M. Lead",
            section: "Leadership Team",
            linkedin: null,
            imageFilename: "Quentin-Kunaka.jpg"
        },
        {
            name: "Margarita Stirbl",
            role: "Holistic Wellness Lead",
            section: "Leadership Team",
            linkedin: "https://www.linkedin.com/in/margarita-stirbl-78613524/",
            imageFilename: "margarita-stirbl.jpeg"
        },
        {
            name: "Carmine Magazino, LMSW",
            role: "Mentorship Lead",
            section: "Leadership Team",
            linkedin: "https://www.linkedin.com/in/cmagazino/",
            imageFilename: "carmine-magazino.jpeg"
        }
    ]
};

// Helper function to get image path
function getImagePath(member) {
    if (!member.imageFilename) return null;
    const basePath = member.imagePath || "/Assets/images/staff/";
    return basePath + member.imageFilename;
}
