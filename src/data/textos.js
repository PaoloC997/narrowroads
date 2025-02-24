const projectInfo = [
    {
        id: 1,
        projectTitle: "360 Circular Screen",
        videoText: "7680 x 1080 px (or 4 screens of 1920 x 1080 px)",
        audioText: "6th-order Ambisonics decoded for onsite systems (5.1, 7.1, quadraphonic, Dolby ATMOS)",
        imageSrc: "project1.webp",
        thumbSrc: "p-sm1.webp",
        type: "fixed reproduction"
    },
    {
        id: 2,
        projectTitle: "Screen x",
        videoText: "5760 x 1080 px (or 3 screens of 1920 x 1080 px)",
        audioText: "6th-order Ambisonics decoded for onsite systems (5.1, 7.1, quadraphonic, Dolby ATMOS)",
        imageSrc: "project2.webp",
        thumbSrc: "p-sm2.webp",
        type: "fixed reproduction"

    },
    {
        id: 3,
        projectTitle: "Domemaster",
        videoText: "4096 x 4096 px (1:1 aspect ratio)",
        audioText: "6th-order Ambisonics decoded for onsite systems (5.1, 7.1, quadraphonic, Dolby ATMOS)",
        imageSrc: "project3.webp",
        thumbSrc: "p-sm3.webp",
        type: "fixed reproduction"
    },
    {
        id: 4,
        projectTitle: "Equirectangular",
        videoText: "7680 x 3840 px (2:1 aspect ratio)",
        audioText: "6th-order Ambisonics",
        imageSrc: "project4.webp",
        thumbSrc: "p-sm4.webp",
        type: "fixed reproduction"
    },
    {
        id: 5,
        projectTitle: "Regular screen",
        videoText: "3840 x 2160 px (16:9 aspect ratio)",
        audioText: "6th-order Ambisonics decoded for onsite systems (5.1, 7.1, quadraphonic, Dolby ATMOS)",
        imageSrc: "project5.webp",
        thumbSrc: "p-sm6.webp",
        type: "fixed reproduction"

    },
    {
        id: 6,
        projectTitle: "Live Performance",
        videoText: "Custom immersive projection system (to be agreed with local promoters)",
        audioText: "Custom spatial audio system (to be agreed with local promoters)",
        imageSrc: "project6.webp",
        thumbSrc: "",
        type: "performance"
    },
    {
        id: 7,
        projectTitle: "VR App",
        videoText: "Format: Windows PC VR executable\nVideo: Virtual Reality",
        audioText: "Audio: Real-time binaural decoding",
        imageSrc: "project7.webp",
        thumbSrc: "p-sm6.webp",
        type: "timeless/frameless"
    },
    {
        id: 8,
        projectTitle: "Book Publication",
        videoText: "Format: Limited Edition (100 units, created for the Barcelona Premiere)",
        audioText: "Language: Catalan\nPages: 40\n+ Download PDF",
        imageSrc: "project8.webp",
        thumbSrc: "",
        type: "timeless/frameless"
    },
    {
        id: 9,
        projectTitle: "Music Album",
        videoText: "Format: Digital Audio",
        audioText: "Composer: Hoarfrost\nAlbum: Waka\nListen here",
        imageSrc: "project9.webp",
        thumbSrc: "",
        type: "timeless/frameless"
    },
    {
        id: 10,
        projectTitle: "Art Installation",
        videoText: "Format: Digital Audio",
        audioText: "Audio: Developed in agreement with local curators and adapted to the space’s unique characteristics",
        imageSrc: "project10.webp",
        thumbSrc: "",
        type: "timeless/frameless"
    }
];

const formatData = [
    {
        id: 1,
        formatTitle: "FIXED REPRODUCTION",
        texts: [

            {
                textTitle: " 360 Circular Screen",
                projectId: 1
            },
            {
                textTitle: "Screen X",
                projectId: 2
            },
            {
                textTitle: "Domemaster",
                projectId: 3
            },
            {
                textTitle: "Equirectangular",
                projectId: 4
            },
            {
                textTitle: "Regular Screen",
                projectId: 5
            },
            
        ],
        videoText: "7680 x 1080 px (or 4 screens of 1920 x 1080 px)",
        audioText: "6th-order Ambisonics decoded for onsite systems (5.1, 7.1, quadraphonic, Dolby ATMOS)",
        imageSrc: "h1.webp",
        thumbSrc: "p-sm1.webp",
        type: "fixed reproduction"
    },
    {
        id: 2,
        formatTitle: "PERFORMANCE",
        texts: [

            {
                textTitle: "Live Performance",
                projectId: 6
            }            
        ],
        videoText: "5760 x 1080 px (or 3 screens of 1920 x 1080 px)",
        audioText: "6th-order Ambisonics decoded for onsite systems (5.1, 7.1, quadraphonic, Dolby ATMOS)",
        imageSrc: "h2.webp",
        thumbSrc: "h2.webp",
        type: "fixed reproduction"

    },
    {
        id: 3,
        formatTitle: "TIMELESS/FRAMELESS",
        texts: [

            {
                textTitle: "VR App",
                projectId: 7
            },
            {
                textTitle: "Book publication",
                projectId: 8
            },
            {
                textTitle: "Music Album",
                projectId: 9
            },
            {
                textTitle: "Art Installation",
                projectId: 10
            }
        ],
        videoText: "4096 x 4096 px (1:1 aspect ratio)",
        audioText: "6th-order Ambisonics decoded for onsite systems (5.1, 7.1, quadraphonic, Dolby ATMOS)",
        imageSrc: "h3.webp",
        thumbSrc: "h3.webp",
        type: "fixed reproduction"
    },

];


export { projectInfo, formatData };

