// Dynamically load all icons from the 'icons' folder
const icons = require.context('./images/icons', false, /\.(png|jpe?g|svg)$/);

// Dynamically load all photos from the 'photos' folder
const photos = require.context('./images/photos', false, /\.(png|jpe?g|svg)$/);

const characterData = [
    {
        id: 1,
        name: "Marv",
        description: "Description", //placeholder
        quote: "Quote", //placeholder
        icon: ruby - icon, //placeholder
        photo: "path/to/marv-photo.jpg", //placeholder
        unlockable: false, // This character is not unlockable
    },
    {
        id: ,
        name: "Marv",
        description: "Description", //placeholder
        quote: "Quote", //placeholder
        icon: "path/to/marv-icon.jpg", //placeholder
        photo: "path/to/marv-photo.jpg", //placeholder
        unlockable: false, // This character is not unlockable
    }
];

export default characterData;