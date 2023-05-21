import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscordBotPageComponent } from './discord-bot-page.component';

describe('DiscordBotPageComponent', () => {
  let component: DiscordBotPageComponent;
  let fixture: ComponentFixture<DiscordBotPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscordBotPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscordBotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
