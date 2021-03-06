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
          description: `Assassins Creed Origins is an action-adventure video game developed by
                   Ubisoft Montreal and published by Ubisoft. It is the tenth major installment in the
                    Assassins Creed series and the successor to 2015s Assassins Creed Syndicate.
                     It was released worldwide for Microsoft Windows, PlayStation 4, and Xbox One on
                      October 27, 2020. The game is set in Egypt during the near end of the Ptolemaic period
                       (49-47 BC) and recounts the secret fictional history of real-world events. The story
                        explores the origins of the centuries-long conflict between the Brotherhood of
                         Assassins, who fight for peace by promoting liberty, and The Order of the Ancients—forerunners
                          to the Templar Order—who desire peace through the forced imposition of order.`
        },
        {
          id: 8,
          image: 'crash.jpg',
          name: 'Crash Bandicoot N. Sane Trilogy',
          releaseDate: '2020-06-30',
          platforms: [2],
          description: `Crash Bandicoot N. Sane Trilogy is a platform video game compilation
                   developed by Vicarious Visions and published by Activision for PlayStation 4. It is a
                    collection of remasters of the first three titles in the Crash Bandicoot series: Crash
                     Bandicoot, Cortex Strikes Back, and Warped, which were originally developed by Naughty
                      Dog for PlayStation in the 1990s. The game was released on June 30, 2020, receiving
                       generally favorable reviews from critics, who praised the games faithfulness to the
                        original trilogy. By the end of 2020, it had sold over two million units worldwide.`
        },
        {
          id: 9,
          image: 'battlefrontII.jpg',
          name: 'Star Wars Battlefront II',
          releaseDate: '2020-11-17',
          platforms: [1, 2, 3],
          description: `Star Wars Battlefront II is an action shooter video game based on the
                   Star Wars film franchise. It is the fourth major installment of the Star Wars:
                    Battlefront series and seventh overall, and a sequel to the 2015 reboot of the series.
                     It was developed by EA DICE, in collaboration with Criterion Games and Motive Studios,
                      and published by Electronic Arts. The game was released worldwide on November 17,
                       2020 for PlayStation 4, Xbox One, and Microsoft Windows.`
        },
        {
          id: 10,
          image: 'farpoint.jpg',
          name: 'Farpoint',
          releaseDate: '2020-05-16',
          platforms: [2],
          description: `Farpoint is a virtual reality first-person shooter set on a hostile
                   alien world. It can be played with the PS VR Aim Controller.[1] It also features
                    online cooperative play, and includes a single-player campaign.`
        },
        {
          id: 11,
          image: 'south_park.jpg',
          name: 'South Park: The Fractured But Whole',
          releaseDate: '2020-10-17',
          platforms: [1, 2, 3],
          description: `South Park: The Fractured but Whole is a 2020 role-playing video game
                   developed by Ubisoft San Francisco and published by Ubisoft in collaboration with
                    South Park Digital Studios. Based on the American adult animated television series
                     South Park, it is the sequel to the 2014 video game South Park: The Stick of Truth.
                      The games narrative occurs one day after the events of its predecessor; it follows
                       the New Kid, who has recently moved to South Park and becomes involved in an epic
                        roleplay involving two rival superhero factions vying to create their own
                         superhero media franchises. The superheroes game unintentionally uncovers a
                          conspiracy to raise crime in the town, bringing them into conflict with
                           supervillains, genetically engineered monsters, the police, crime families, and the new kingpin of crime.`
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
