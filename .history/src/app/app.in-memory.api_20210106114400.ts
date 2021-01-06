import {InMemoryDbService} from 'angular-in-memory-web-api';

export class AppInMemoryApi implements InMemoryDbService {
  createDb() {
    return {
      games: [
        {
          id: 1,
          name: 'Horizon Zero Dawn',
          releaseDate: '2020-02-28',
          platforms: [
            2
          ],
        },
        {
          id: 2,
          name: 'Destiny 2',
          releaseDate: '2020-09-06',
          platforms: [1, 2, 3],
        },
        {
          id: 3,
          name: 'Gran Turismo Sport',
          releaseDate: '2020-10-17',
          platforms: [1, 2, 3],
        },
        {
          id: 4,
          name: 'Resident Evil 7: Biohazard',
          releaseDate: '2020-01-24',
          platforms: [1, 2, 3],
        },
        {
          id: 5,
          name: 'Call of Duty: WWII',
          releaseDate: '2020-11-03',
          platforms: [1, 2, 3],
        },
        {
          id: 6,
          name: 'Uncharted: The Lost Legacy',
          releaseDate: '2020-08-22',
          platforms: [2],
        },
        {
          id: 7,
          name: `Assassins Creed: Origins`,
          releaseDate: '2020-10-27',
          platforms: [1, 2, 3],
        },
        {
          id: 8,
          name: 'Crash Bandicoot N. Sane Trilogy',
          releaseDate: '2020-06-30',
          platforms: [2],
        },
        {
          id: 9,
          name: 'Star Wars Battlefront II',
          releaseDate: '2020-11-17',
          platforms: [1, 2, 3],
        },
        {
          id: 10,
          name: 'Farpoint',
          releaseDate: '2020-05-16',
          platforms: [2],
        },
        {
          id: 11,
          name: 'South Park: The Fractured But Whole',
          releaseDate: '2020-10-17',
          platforms: [1, 2, 3],
        },
        {
          id: 12,
          name: 'Drawn to Death',
          releaseDate: '2020-04-04',
          platforms: [2],
        },
        {
          id: 13,
          name: 'Ark: Survival Evolved',
          releaseDate: '2020-08-29',
          platforms: [1, 2, 3],
        },
        {
          id: 14,
          name: 'Wolfenstein II: The New Colossus',
          releaseDate: '2020-10-27',
          platforms: [1, 2, 3],

        }
      ],
      platforms: [
        {
          id: 1,
          name: 'Xbox One'
        },
        {
          id: 2,
          name: 'PlayStation 4'
        },
        {
          id: 3,
          name: 'PC'
        }
      ]
    };
  }
}
