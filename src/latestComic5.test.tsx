import React from 'react';
import { render, screen } from '@testing-library/react';
import { LatestComic5 } from './latestComic5';
import { XKCDComic } from './types'
import { XkcdServiceContext } from './xkcdContext';

const mockGetXkcd = (): Promise<XKCDComic> => Promise.resolve({
  "month": "9",
  "num": 2828,
  "link": "",
  "year": "2023",
  "news": "",
  "safe_title": "Exoplanet Observation",
  "transcript": "",
  "alt": "NASA prefers to say that their rovers are 'looking for signs of past life on Mars' and not 'ghost hunting.'",
  "img": "https://imgs.xkcd.com/comics/exoplanet_observation.png",
  "title": "Exoplanet Observation",
  "day": "13",
  "imgRetina": "https://imgs.xkcd.com/comics/exoplanet_observation_2x.png"
})

test('renders learn react link', () => {
  render(
    <XkcdServiceContext.Provider value={mockGetXkcd}>
      <LatestComic5 />
    </XkcdServiceContext.Provider>
  );
  const linkElement = screen.getByText(/loading.../i);
  expect(linkElement).toBeInTheDocument();
});

