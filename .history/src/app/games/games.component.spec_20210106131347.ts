import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GamesComponent} from './games.component';
import {GamesService} from './shared/games.service';
import {PlatformsService} from './shared/platforms.service';
import {BrowserModule} from '@angular/platform-browser';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {Store} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import * as gamesReducer from './store/games.reducers';
import * as platformsReducer from './store/platforms.reducers';
import {MockStore, provideMockStore} from '@ngrx/store/testing';

describe('GamesComponent', () => {
  let component: GamesComponent;
  let fixture: ComponentFixture<GamesComponent>;
  let mockStore: MockStore<{ games: gamesReducer.State, platforms: platformsReducer.State }>;
  const initialState = {
    games: {
      data: [
        {
          id: 1,
          name: 'Horizon Zero Dawn',
          releaseDate: '2017-02-28',
          platforms: [
            2
          ],
        }, {
          id: 2,
          name: 'Destiny 2',
          releaseDate: '2017-09-06',
          platforms: [
            1,
            2,
            3
          ],
        }
      ],
      selected: null,
      action: 'GET_GAMES',
      done: true
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([]),
        EffectsModule
      ],
      declarations: [
        GamesComponent
      ],
      providers: [
        GamesService,
        PlatformsService,
        {provide: APP_BASE_HREF, useValue: '/'},
        provideMockStore({initialState})
      ]
    })
      .compileComponents();

    mockStore = TestBed.get(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
