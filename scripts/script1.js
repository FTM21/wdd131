const temples = [
    {
        name: "Salt Lake Temple",
        location: "Salt Lake City, Utah",
        dedicated: "1893, April, 6",
        area: 253000,
        image: "https://assets.churchofjesuschrist.org/b0/05/b005e16c7d1fa7c2dc7d39d76a35b41c3c6ad57d/salt_lake_temple_lds.jpeg"
    },
    {
        name: "Washington D.C. Temple",
        location: "Bothell, Washington",
        dedicated: "1975, November, 19",
        area: 160000,
        image: "https://assets.churchofjesuschrist.org/a1/83/a183f18635dc2008d8fe0a6f937deac10ec840c0/washington_dc_temple.jpg"
    },
    {
        name: "Los Angeles Temple",
        location: "Los Angeles, California",
        dedicated: "2000, April, 13",
        area: 384000,
        image: "https://assets.churchofjesuschrist.org/a2/69/a26964a19238c2b0b95affe761c502a75ff8c4e8/los_angeles_temple.jpg"
    },
    {
        name: "Houston Texas Temple",
        location: "Houston, Texas",
        dedicated: "2000, June, 18",
        area: 118000,
        image: "https://assets.churchofjesuschrist.org/3f/8e/3f8e6e470b0d1305173affb47a14e8bd51a992f5/houston_texas_temple.jpg"
    },
    {
        name: "Palmyra New York Temple",
        location: "Palmyra, New York",
        dedicated: "2000, April, 6",
        area: 25000,
        image: "https://assets.churchofjesuschrist.org/6d/94/6d945f68256b1ed053d963f610b2f639f02e61ae/palmyra_new_york_temple.jpg"
    },
    {
        name: "Mesa Arizona Temple",
        location: "Mesa, Arizona",
        dedicated: "1927, November, 23",
        area: 150000,
        image: "https://assets.churchofjesuschrist.org/16/6f/166f087ff40c4488a4b32c4936bebf1ee71b46c1/mesa_arizona_temple.jpg"
    },
    {
        name: "Orlando Florida Temple",
        location: "Orlando, Florida",
        dedicated: "1994, October, 9",
        area: 26500,
        image: "https://assets.churchofjesuschrist.org/65/39/6539cc6fc7522c5c321ef5403d657cb9fcec68c2/orlando_florida_temple.jpg"
    },
    {
        name: "San Diego California Temple",
        location: "San Diego, California",
        dedicated: "1993, April, 13",
        area: 160000,
        image: "https://assets.churchofjesuschrist.org/8b/b7/8bb7e36c6e4c0036f5edc792d5c05c9cbac401b6/san_diego_california_temple.jpg"
    },
    {
        name: "Kona Hawaii Temple",
        location: "Kona, Hawaii",
        dedicated: "2000, June, 4",
        area: 26000,
        image: "https://assets.churchofjesuschrist.org/35/73/3573a33ae95cc3bb4749c6ce48b1bab37c6fbfbd/kona_hawaii_temple.jpg"
    },
    {
        name: "Vancouver Canada Temple",
        location: "Langley, British Columbia, Canada",
        dedicated: "1985, April, 20",
        area: 14700,
        image: "https://assets.churchofjesuschrist.org/24/c5/24c541c3be5ad1c688b9c3ba3e7c22e84a8eb63e/vancouver_canada_temple.jpg"
    },
    
    {
        name: "Oquirrh Mountain Utah Temple",
        location: "South Jordan, Utah",
        dedicated: "2009, December, 13",
        area: 102000,
        image: "https://assets.churchofjesuschrist.org/4b/f2/4bf203791a90948130dbe4c17158b047ee2f6fd8/oquirrh_mountain_utah_temple.jpg"
    },
    {
        name: "Saratoga Springs Utah Temple",
        location: "Saratoga Springs, Utah",
        dedicated: "2019, February, 16",
        area: 25500,
        image: "https://assets.churchofjesuschrist.org/2b/b0/2bb08758cd6b1e9f42acc5c7cde0eef0926602ca/saratoga_springs_utah_temple.jpg"
    },
    {
        name: "Pocatello Idaho Temple",
        location: "Pocatello, Idaho",
        dedicated: "2017, November, 19",
        area: 8000,
        image: "https://assets.churchofjesuschrist.org/5a/5c/5a5ca88af8f6c1b3b00b40f5c8af08f6ae001d38/pocatello_idaho_temple.jpg"
    },
];


function createTempleCard(temple) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${temple.image}" alt="${temple.name}" loading="lazy">
        <h2>${temple.name}</h2>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area} sq ft</p>
    `;
    return card;
}

// Function to render temples based on filter
function renderTemples(filter) {
    const templesContainer = document.getElementById('temples');
    templesContainer.innerHTML = '';
    
    const filteredTemples = temples.filter(temple => {
        if (filter === 'old') return new Date(temple.dedicated.split(',')[0]).getFullYear() < 1900;
        if (filter === 'new') return new Date(temple.dedicated.split(',')[0]).getFullYear() > 2000;
        if (filter === 'large') return temple.area > 90000;
        if (filter === 'small') return temple.area < 10000;
        return true; // Show all temples for Home
    });

    filteredTemples.forEach(temple => {
        const card = createTempleCard(temple);
        templesContainer.appendChild(card);
    });
}


document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = e.target.getAttribute('data-filter');
        renderTemples(filter);
    });
});


document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#modified').textContent = document.lastModified;


renderTemples('all');