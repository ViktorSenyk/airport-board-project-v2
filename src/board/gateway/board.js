const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/airport';

export const getFlightsData = () =>
  fetch(`${baseUrl}`)
    .then(res => {
      if (!res.ok) {
        throw new Error('ERROR');
      }
      return res.json();
    })
    .catch(() => alert('Server ERROR!'));
