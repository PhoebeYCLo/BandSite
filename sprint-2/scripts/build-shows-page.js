/* <div class="shows__info shows__row--divider">
        <div class="shows__container shows__container-date">
            <div class="shows__subtitle shows__subtitle--info">Date</div>
            <div class="shows__date">Mon Dec 17 2018</div>
        </div>
        <div class="shows__container shows__container-venue">
            <div class="shows__subtitle shows__subtitle--info">venue</div>
            <div class="shows__venue">Ronald Lane</div>
        </div>
        <div class="shows__container shows__container-location">
            <div class="shows__subtitle shows__subtitle--info">location</div>
            <div class="shows__location">location</div>
        </div>
        <button class="shows__buy-btn">buy ticket</button>
    </div> */
    
// array contain shows information
let showsArray =[
    {
        'date': 'Mon Dec 17 2018',
        'venue': 'Ronald Lane',
        'location': 'San Fancisco, CA',
        'link': ''
    },
    {
        'date': 'Tue Jul 18 2019',
        'venue': 'Pier 3 East',
        'location': 'San Fancisco, CA',
        'link': ''
    },
    {
        'date': 'Fri Jul 22 2019',
        'venue': 'View Loungue',
        'location': 'San Fancisco, CA',
        'link': ''
    },
    {
        'date': 'Sat Aug 12 2019',
        'venue': 'Hyatt Agency',
        'location': 'San Fancisco, CA',
        'link': ''
    },
    {
        'date': 'Fri Sep 05 2019',
        'venue': 'Moscow Center',
        'location': 'San Fancisco, CA',
        'link': ''
    },
    {
        'date': 'Wed Aug 11 2019',
        'venue': 'Pres Club',
        'location': 'San Fancisco, CA',
        'link': ''
    }
];

// create the structure container for shows - include date, venue & location
let showsStructure = () => {
    const showsList = document.querySelector('#showsList');
    const showsInfo = document.createElement('div');
    const showsContainer = document.createElement('div');
    const showsDateContainer = document.createElement('div');
    const showsVenueContainer = document.createElement('div');
    const showsLocationContainer = document.createElement('div');
    const showsDateSubtitle = document.createElement('div');
    const showsDate = document.createElement('div');
    const showsVenueSubtitle = document.createElement('div');
    const showsVenue = document.createElement('div');
    const showsLocationSubtitle = document.createElement('div');
    const showsLocation = document.createElement('div');
    const showsbtn = document.createElement('button');

    // showsList.appendChild(showsDivider).classList.add('shows__row--divider');

    showsList.appendChild(showsInfo).classList.add('shows__info', 'shows__row--divider');

    showsInfo.appendChild(showsContainer).classList.add('shows__container');
    showsContainer.appendChild(showsDateContainer).classList.add('shows__container--date');
    showsDateContainer.appendChild(showsDateSubtitle).classList.add('shows__subtitle--date');
    showsDateContainer.appendChild(showsDate).classList.add('shows__date');

    showsInfo.appendChild(showsVenueContainer).classList.add('shows__container--venue');
    showsVenueContainer.appendChild(showsVenueSubtitle).classList.add('shows__subtitle--venue');
    showsVenueContainer.appendChild(showsVenue).classList.add('shows__venue');

    showsInfo.appendChild(showsLocationContainer).classList.add('shows__container--location');
    showsLocationContainer.appendChild(showsLocationSubtitle).classList.add('shows__subtitle--location');
    showsLocationContainer.appendChild(showsLocation).classList.add('shows__location');

    showsInfo.appendChild(showsbtn).classList.add('shows__buy-btn');
};

// fetch shows info from showsArray
let fetchShows = () => {
    for(let i = 0; i < showsArray.length; i++){
        const showsDate = document.querySelectorAll('.shows__date');
        const showsDateTitle = document.querySelectorAll('.shows__subtitle--date');
        const showsVenue = document.querySelectorAll('.shows__venue');
        const showsVenueTitle = document.querySelectorAll('.shows__subtitle--venue');
        const showsLocation = document.querySelectorAll('.shows__location');
        const showsLocationTitle = document.querySelectorAll('.shows__subtitle--location');
        const showsbtn = document.querySelectorAll('.shows__buy-btn');

        showsDate[i].innerText = showsArray[i].date;
        showsDateTitle[i].innerText = 'date';
        showsVenue[i].innerText = showsArray[i].venue;
        showsVenueTitle[i].innerText = 'venue';
        showsLocation[i].innerText = showsArray[i].location;
        showsLocationTitle[i].innerText = 'location';
        showsbtn[i].innerText = 'buy ticket';
    }
};

// load(fetch) & display existing shows
let displayShows = () =>{
    showsArray.forEach(() => {
        showsStructure();
    });
    fetchShows();
};

displayShows();