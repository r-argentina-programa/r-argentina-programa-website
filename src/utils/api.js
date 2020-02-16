import { useReducer, useEffect } from 'react';
import clasesFetchReducer, {FETCH_INIT, FETCH_ERROR, FETCH_SUCCESS} from '../reducers/clasesFetchReducer';

/**** Nunca pero nunca commit de la api key. Esta es la peor practica ***/
/**** Esta key esta restringida solo a argentinaprograma.com ***/
/**** Solo estara publicada hasta que tenga mas tiempo en investigar .env variables para github pages ***/
const KEY = 'AIzaSyBg-nJbFqrxa0IxUenQxf9CV0KCbYRKRhQ';
      
const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/';
const CHANNEL_ID = 'UCXfQLgiBQPIzBp8-nRsG0KA';

export function useFetchJavascriptClases () {
  const [state, dispatch] = useReducer(clasesFetchReducer, {
    loading: true,
    error: false,
    clases: null
  })

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: FETCH_INIT });

      try {
        const response = await fetch(javascriptPlaylistUrl());
        const responseJson = await response.json();

        dispatch({
          type: FETCH_SUCCESS,
          payload: generateClases(responseJson)
        });
      } catch (error) {
        dispatch({ type: FETCH_ERROR })
      }
    };

    fetchData();  
  }, []);

  return state;
}

function generateClases ({items}) {
  return items.map(({id, snippet}) => {
    return {
      id: id,
      title: snippet.title,
      videoId: snippet.resourceId.videoId,
      thumbnail: snippet.thumbnails.high.url
    }
  })
}

function javascriptPlaylistUrl() {
  const playlistId = 'PLs73pLtDNXD893LSF8fP-EfZbGWMECmnc';
  const data = {
    part: 'snippet',
    maxResults: 25
  }

  return `${YOUTUBE_URL}playlistItems?${params(data)}&playlistId=${playlistId}&key=${KEY}`
}

const params = (data) => {
  return Object.keys(data)
          .map(key => `${key}=${encodeURIComponent(data[key])}`)
          .join('&');
}