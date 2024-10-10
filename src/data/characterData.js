// Dynamically load all icons from the 'icons' folder
const icons = require.context('../images/icons', false, /\.(jpg|jpeg|png|gif|JPG)$/);
// Dynamically load all photos from the 'photos' folder
const photos = require.context('../images/photos', false, /\.(jpg|jpeg|png|gif|JPG)$/);

const characterData = [
    {
        id: 1,
        name: "Marv",
        description: "Description", //placeholder
        quote: "Quote", //placeholder
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: false, // This character is not unlockable
        howToUnlock: null
    },
    {
        id: 2,
        name: "Brad",
        description: "Description",
        quote: "Quote",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: false,
        howToUnlock: null
    },
    {
        id: 3,
        name: "Blake",
        description: "Description",
        quote: "Quote",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: false,
        howToUnlock: null
    },
    {
        id: 4,
        name: "Tim",
        description: "Description",
        quote: "I overdosed...",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: false,
        howToUnlock: null
    },
    {
        id: 5,
        name: "Kristina",
        description: "Description",
        quote: "Quote",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: false,
        howToUnlock: null
    },
    {
        id: 6,
        name: "Amy",
        description: "Description",
        quote: "Quote",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: false,
        howToUnlock: null
    },
    {
        id: 7,
        name: "Julianna",
        description: "Description",
        quote: "Quote",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: false,
        howToUnlock: null
    },
    {
        id: 8,
        name: "Sophia",
        description: "Description",
        quote: "Quote",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: false,
        howToUnlock: null
    },
    {
        id: 9,
        name: "Liya",
        description: "Description",
        quote: "Quote",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: false,
        howToUnlock: null
    },
    {
        id: 10,
        name: "Victoria",
        description: "Description",
        quote: "Quote",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: false,
        howToUnlock: null
    },
    {
        id: 11,
        name: "Dennis",
        description: "Description",
        quote: "Quote",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: false,
        howToUnlock: null
    },
    {
        id: 12,
        name: "Henry",
        description: "Description",
        quote: "Quote",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: false,
        howToUnlock: null
    },
    {
        id: 13,
        name: "Eddie",
        description: "Description",
        quote: "Quote",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: false,
        howToUnlock: null
    },
    {
        id: 14,
        name: "Gabriel",
        description: "Description",
        quote: "Quote",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: false,
        howToUnlock: null
    },
    {
        id: 15,
        name: "Nazar",
        description: "Description",
        quote: "Quote",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: true,
        howToUnlock: ''
    },
    {
        id: 16,
        name: "Alonso",
        description: "Description",
        quote: "Quote",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: true,
        howToUnlock: ''
    },
    {
        id: 17,
        name: "Ruby",
        description: "Description",
        quote: "Quote",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: true,
        howToUnlock: ''
    },
    {
        id: 18,
        name: "Alinuh",
        description: "Description",
        quote: "Quote",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: true,
        howToUnlock: ''
    },
];

export default characterData;