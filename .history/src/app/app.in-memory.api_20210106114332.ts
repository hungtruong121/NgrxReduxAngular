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
          image: 'drawn_to_death.jpg',
          name: 'Drawn to Death',
          releaseDate: '2020-04-04',
          platforms: [2],
          description: `Drawn to Death is a third-person shooter combined with a brawler
                   arena multiplayer video game for PlayStation 4, developed by David Jaffes studio
                    The Bartlet Jones Supernatural Detective Agency and SIE San Diego Studio, and
                     released on April 4, 2020. It allows four-player multiplayer in an arena shooter
                      type setting and is reported to be set inside the pages of a teenagers notebook,
                       as such, it features a hand-drawn-looking visual style.`
        },
        {
          id: 13,
          image: 'ark_survival_evolved.jpg',
          name: 'Ark: Survival Evolved',
          releaseDate: '2020-08-29',
          platforms: [1, 2, 3],
          description: `Ark: Survival Evolved (stylized as ΛRK) is an action-adventure
                   survival video game developed by Studio Wildcard in collaboration with Instinct
                    Games, Efecto Studios, and Virtual Basement. It was released in August 2020
                     for PlayStation 4, Xbox One, Microsoft Windows, OS X and Linux. In the game,
                      players must survive being stranded on an island filled with roaming dinosaurs
                       and other prehistoric animals, natural hazards, and potentially hostile human players.`
        },
        {
          id: 14,
          image: 'WolfensteinII.jpg',
          name: 'Wolfenstein II: The New Colossus',
          releaseDate: '2020-10-27',
          platforms: [1, 2, 3],
          description: `Wolfenstein II: The New Colossus is an action-adventure
                   first-person shooter video game developed by MachineGames and published
                    by Bethesda Softworks. It was released on 27 October 2020 for Microsoft
                     Windows, PlayStation 4, and Xbox One, and is scheduled for release in 2018
                      for Nintendo Switch. The game is the eighth main entry in the Wolfenstein
                       series and the sequel to 2014s Wolfenstein: The New Order, set in an
                        alternate history 1961 following the Nazi victory of the Second World
                         War. The story follows war veteran William B.J. Blazkowicz and his
                          efforts to fight against the Nazi regime in America.`
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
