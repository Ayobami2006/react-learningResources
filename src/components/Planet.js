//Exercise
//Looping through the planet array, and display only {name} if {isGasPlanet} are true
const Planet = () => {
    const planets = [
        { name: 'Mars', isGasPlanet: false },
        { name: 'Earth', isGasPlanet: false },
        { name: 'Jupiter', isGasPlanet: true },
        { name: 'Venus', isGasPlanet: false },
        { name: 'Neptune', isGasPlanet: true },
        { name: 'Uranus', isGasPlanet: true }
    ];

    //Solution
    return ( 
        <div>
            { planets.map((planetName, key) => {
                return planetName.isGasPlanet && <h1 key={key}>{planetName.name}</h1>;

                //OR
                // if(planetName.isGasPlanet) return <h1>{planetName.name}</h1>;
            }) }
        </div>
    );
}

export default Planet;