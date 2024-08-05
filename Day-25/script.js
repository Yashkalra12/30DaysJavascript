document.addEventListener('DOMContentLoaded', () => {
    const countriesData = [
        { name: 'China', population: 1444216107 },
        { name: 'India', population: 1393409038 },
        { name: 'United States', population: 332915073 },
        { name: 'Indonesia', population: 276361783 },
        { name: 'Pakistan', population: 225199937 },
        { name: 'Brazil', population: 213993437 },
        { name: 'Nigeria', population: 211400708 },
        { name: 'Bangladesh', population: 166303498 },
        { name: 'Russia', population: 145912025 },
        { name: 'Mexico', population: 130262216 }
    ];

    const languagesData = [
        { name: 'English', speakers: 1132000000 },
        { name: 'Mandarin Chinese', speakers: 1117000000 },
        { name: 'Hindi', speakers: 615000000 },
        { name: 'Spanish', speakers: 534300000 },
        { name: 'French', speakers: 280000000 },
        { name: 'Standard Arabic', speakers: 274000000 },
        { name: 'Bengali', speakers: 273000000 },
        { name: 'Portuguese', speakers: 265000000 },
        { name: 'Russian', speakers: 258000000 },
        { name: 'Japanese', speakers: 125000000 }
    ];

    const countriesContainer = document.getElementById('countries');
    const languagesContainer = document.getElementById('languages');

    function createBar(name, value, maxValue) {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.width = `${(value / maxValue) * 100}%`;
        bar.textContent = `${name} (${value.toLocaleString()})`;
        return bar;
    }

    const maxCountryPopulation = Math.max(...countriesData.map(c => c.population));
    const maxLanguageSpeakers = Math.max(...languagesData.map(l => l.speakers));

    countriesData.forEach(country => {
        countriesContainer.appendChild(createBar(country.name, country.population, maxCountryPopulation));
    });

    languagesData.forEach(language => {
        languagesContainer.appendChild(createBar(language.name, language.speakers, maxLanguageSpeakers));
    });
});
