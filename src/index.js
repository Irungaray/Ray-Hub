import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducers';
import App from './routes/App';

// Inyectando a la Store de Redux la API
const initialState = {
    "user": {},
    "playing": {},
    "myList": [],
    "trends": [
    {
        "id": 2,
        "title": "Faro del fin del Uruguay",
        "type": "Scripted",
        "language": "ES",
        "year": 2021,
        "contentRating": "+12",
        "duration": 164,
        "cover": "",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
    },
    {
        "id": 3,
        "title": "Serpientes gigantes de fierro",
        "type": "Adventure",
        "language": "ES",
        "year": 2002,
        "contentRating": "+21",
        "duration": 137,
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
    },
    {
        "id": 4,
        "title": "Post CoronaVirus",
        "type": "Comedy",
        "language": "ES",
        "year": 2014,
        "contentRating": "+16",
        "duration": 163,
        "cover": "http://dummyimage.com/800x600.png/5472FF/ffffff",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
    },
    {
        "id": 5,
        "title": "Ciudad Radioactiva",
        "type": "Scripted",
        "language": "ES",
        "year": 2022,
        "contentRating": "+18",
        "duration": 194,
        "cover": "http://dummyimage.com/800x600.png/B36F20/ffffff",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
    },
    {
        "id": 6,
        "title": "Plenilunio",
        "type": "Scripted",
        "language": "ES",
        "year": 1990,
        "contentRating": "ATP",
        "duration": 124,
        "cover": "http://dummyimage.com/800x600.png/CCC539/ffffff",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
    }
    ],
    "originals": [
    {
        "id": 8,
        "title": "Expreso Seineldin",
        "type": "Action",
        "language": "ES",
        "year": 1987,
        "contentRating": "+12",
        "duration": 148,
        "cover": "http://dummyimage.com/800x600.png/306880/ffffff",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
    },
    {
        "id": 9,
        "title": "El ataque de las Sativa Macho",
        "type": "Action",
        "language": "ES",
        "year": 2017,
        "contentRating": "+16",
        "duration": 128,
        "cover": "http://dummyimage.com/800x600.png/604180/ffffff",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
    },
    {
        "id": 10,
        "title": "Virgen Sepia",
        "type": "Animation",
        "language": "ES",
        "year": 1945,
        "contentRating": "+21",
        "duration": 346,
        "cover": "http://dummyimage.com/800x600.png/FF91BA/ffffff",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
    },
    {
        "id": 11,
        "title": "Wazza",
        "type": "War",
        "language": "ES",
        "year": 2015,
        "contentRating": "+3",
        "duration": 80,
        "cover": "http://dummyimage.com/800x600.png/45807C/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
    },
    {
        "id": 12,
        "title": "Bajo la cruz del Odio",
        "type": "Comedy",
        "language": "ES",
        "year": 2018,
        "contentRating": "+21",
        "duration": 190,
        "cover": "http://dummyimage.com/800x600.png/577380/ffffff",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
    },
    {
        "id": 13,
        "title": "Great Times",
        "type": "Drama",
        "language": "EN",
        "year": 2010,
        "contentRating": "+12",
        "duration": 160,
        "cover": "http://dummyimage.com/800x600.png/5472FF/ffffff",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
    },
    {
        "id": 14,
        "title": "Perro Rabioso",
        "type": "Action",
        "language": "ES",
        "year": 2010,
        "contentRating": "+21",
        "duration": 180,
        "cover": "http://dummyimage.com/800x600.png/5472FF/ffffff",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
        "id": 15,
        "title": "El Galpon",
        "type": "Romance",
        "language": "ES",
        "year": 2020,
        "contentRating": "+18",
        "duration": 120,
        "cover": "http://dummyimage.com/800x600.png/5472FF/ffffff",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        }
    ]
};

// Nuevo Store para pasarle al Provider
const store =  createStore(reducer, initialState);

// Inyectando los componentes importados al index.html
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('app')
);