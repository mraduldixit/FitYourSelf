export const exerciseOptions = {
  // method: 'GET',
  // headers: {
  //   'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  //   'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  // },
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '0090245fc2msh3ca4c4ac0a22502p17da30jsn1cee832669f4',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
