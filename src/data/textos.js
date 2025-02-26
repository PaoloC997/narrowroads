const projectInfo = [
    {
        id: 1,
        projectTitle: "360 Circular Screen",
        texts: [

            {
                textTitle: "Video:",
                textContent: "7680 x 1080 px (or 4 screens of 1920 x 1080 px)"
            },
            {
                textTitle: "Audio:",
                textContent: "6th-order Ambisonics decoded for onsite systems (5.1, 7.1, quadraphonic, Dolby ATMOS)"
            }           
        ],
        imageSrc: "project1.webp",
        thumbSrc: "p-sm1.webp",
        type: "fixed reproduction"
    },
    {
        id: 2,
        projectTitle: "Screen x",
        texts: [

            {
                textTitle: "Video:",
                textContent: "5760 x 1080 px (or 3 screens of 1920 x 1080 px)"
            },
            {
                textTitle: "Audio:",
                textContent: "6th-order Ambisonics decoded for onsite systems (5.1, 7.1, quadraphonic, Dolby ATMOS)"
            }           
        ],
        imageSrc: "project2.webp",
        thumbSrc: "p-sm2.webp",
        type: "fixed reproduction"

    },
    {
        id: 3,
        projectTitle: "Domemaster",
        texts: [

            {
                textTitle: "Video:",
                textContent: "4096 x 4096 px (1:1 aspect ratio)"
            },
            {
                textTitle: "Audio:",
                textContent: "6th-order Ambisonics decoded for onsite systems (5.1, 7.1, quadraphonic, Dolby ATMOS)"
            }           
        ],
        imageSrc: "project3.webp",
        thumbSrc: "p-sm3.webp",
        type: "fixed reproduction"
    },
    {
        id: 4,
        projectTitle: "Equirectangular",
        texts: [

            {
                textTitle: "Video:",
                textContent: "7680 x 3840 px (2:1 aspect ratio)"
            },
            {
                textTitle: "Audio:",
                textContent: "6th-order Ambisonics"
            }           
        ],
        imageSrc: "project4.webp",
        thumbSrc: "p-sm4.webp",
        type: "fixed reproduction"
    },
    {
        id: 5,
        projectTitle: "Regular screen",
        texts: [

            {
                textTitle: "Video:",
                textContent: "3840 x 2160 px (16:9 aspect ratio)"
            },
            {
                textTitle: "Audio:",
                textContent: "6th-order Ambisonics decoded for onsite systems (5.1, 7.1, quadraphonic, Dolby ATMOS)"
            }           
        ],
        imageSrc: "project5.webp",
        thumbSrc: "p-sm6.webp",
        type: "fixed reproduction"

    },
    {
        id: 6,
        projectTitle: "Live Performance",
        texts: [

            {
                textTitle: "Video:",
                textContent: "Custom immersive projection system (to be agreed with local promoters)"
            },
            {
                textTitle: "Audio:",
                textContent: "Custom spatial audio system (to be agreed with local promoters)"
            },
            {
                textTitle: "+ TECH RIDER DOWNLOAD",
                textContent: "https://drive.google.com/file/d/1JDiRTHvPTG-CUjaJbyowoZjj79QZAk85/view?usp=drive_link",
                isLink: true
            },

        ],
        imageSrc: "project6.webp",
        thumbSrc: "",
        type: "performance"
    },
    {
        id: 7,
        projectTitle: "VR App",
        texts: [

            {
                textTitle: "Format:",
                textContent: "Windows PC VR executable"
            },
            {
                textTitle: "Video:",
                textContent: "Virtual Reality"
            },
            {
                textTitle: "Audio:",
                textContent: "Real-time binaural decoding"
            },
            {
                textTitle: "Links:",
                textContent: ""
            },
            {
                textTitle: "Trailer PCVR",
                textContent: "https://youtu.be/ruzSNvxtN7A",
                isLink: true
            },
            {
                textTitle: "Download PCVR win exe Beta Version (28 GB)",
                textContent: "https://drive.google.com/drive/folders/18WDQizAFeEM4eKp0mDigLVQUe0jsQ3k-?usp=sharing",
                isLink: true
            },


        ],
        imageSrc: "project7.webp",
        thumbSrc: "p-sm7.webp",
        type: "timeless/frameless"
    },
    {
        id: 8,
        projectTitle: "Book Publication",
        texts: [

            {
                textTitle: "Format:",
                textContent: "Limited Edition (100 units, created for the Barcelona Premiere)"
            },
            {
                textTitle: "Language:",
                textContent: "Catalan"
            },
            {
                textTitle: "Pages:",
                textContent: "40"
            },
            {
                textTitle: "+DOWNLOAD PDF",
                textContent: "https://drive.google.com/file/d/1IkbLHUN6c5hDX5AkZM1bnkQx0Sm6_tGy/view?usp=drive_link",
                isLink: true
            },
        ],
        imageSrc: "project8.webp",
        thumbSrc: "",
        type: "timeless/frameless"
    },
    {
        id: 9,
        projectTitle: "Music Album",
        texts: [

            {
                textTitle: "Format:",
                textContent: "Digital Audio"
            },
            {
                textTitle: "Composer:",
                textContent: "Hoarfrost"
            },
            {
                textTitle: "Album:",
                textContent: "Waka"
            },
            {
                textTitle: "Listen here",
                textContent: "https://hoarfrost2022.bandcamp.com/album/waka",
                isLink: true
            },
        ],
        imageSrc: "project9.webp",
        thumbSrc: "",
        type: "timeless/frameless"
    },
    {
        id: 10,
        projectTitle: "Art Installation",
        texts: [

            {
                textTitle: "Format:",
                textContent: "Digital Audio"
            },
            {
                textTitle: "Audio:",
                textContent: "Developed in agreement with local curators and adapted to the space’s unique characteristics"
            },
        ],
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

