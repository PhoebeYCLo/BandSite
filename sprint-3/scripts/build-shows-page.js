// API
const apiURL = 'https://project-1-api.herokuapp.com';
const apiKEY = '585cf9ca-a905-4809-99e7-3f9706a5dd2e';

// get shows from api
const getShows = () => {
    axios.get(`${apiURL}/showdates?api_key=${apiKEY}`)
    .then((response) => {
        // console.log(response);
        response.data.forEach((item) => {
            createShow(item);
        })
    })
    .catch((err) => console.error(err));
};

getShows();

const createShow = (arr) => {
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
    showsbtn.innerText = 'buy ticket';

    showsDateSubtitle.innerText = 'date';
    showsDate.innerText = arr.date;

    showsVenueSubtitle.innerText = 'venue';
    showsVenue.innerText = arr.place;

    showsLocationSubtitle.innerText = 'location';
    showsLocation.innerText = arr.location;
};