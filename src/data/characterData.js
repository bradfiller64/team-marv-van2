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
    },
    {
        id: 2,
        name: "Brad",
        description: "Description",
        quote: "Quote",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: false,
    },
    {
        id: 3,
        name: "Blake",
        description: "Description",
        quote: "Quote",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: false,
    },
    {
        id: 4,
        name: "Tim",
        description: "Description",
        quote: "I overdosed...",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: false,
    },
    {
        id: 5,
        name: "Kristina",
        description: "Description",
        quote: "Quote",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: false,
    },
    {
        id: 6,
        name: "Amy",
        description: "Description",
        quote: "Quote",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: false,
    },
    {
        id: 7,
        name: "Julianna",
        description: "Description",
        quote: "Quote",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: false,
    },
    {
        id: 8,
        name: "Sophia",
        description: "Description",
        quote: "Quote",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: false,
    },
    {
        id: 9,
        name: "Liya",
        description: "Description",
        quote: "Quote",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: false,
    },
    {
        id: 10,
        name: "Victoria",
        description: "Description",
        quote: "Quote",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: false,
    },
    {
        id: 11,
        name: "Dennis",
        description: "Description",
        quote: "Quote",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: false,
    },
    {
        id: 12,
        name: "Henry",
        description: "Description",
        quote: "Quote",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: false,
    },
    {
        id: 13,
        name: "Eddie",
        description: "Description",
        quote: "Quote",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: false,
    },
    {
        id: 14,
        name: "Gabriel",
        description: "Description",
        quote: "Quote",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: false,
    },
    {
        id: 15,
        name: "Nazar",
        description: "Description",
        quote: "Quote",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: true,
    },
    {
        id: 16,
        name: "Alonso",
        description: "Description",
        quote: "Quote",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: true,
    },
    {
        id: 17,
        name: "Ruby",
        description: "Description",
        quote: "Quote",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: true,
    },
    {
        id: 18,
        name: "Alinuh",
        description: "Description",
        quote: "Quote",
        icon: icons('./ruby-icon.jpg'),
        photo: photos('./dennis-photo.JPG'),
        unlockable: true,
    },
];

export default characterData;