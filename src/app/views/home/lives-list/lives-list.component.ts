import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Live } from 'src/app/shared/model/live-model';
import { LiveService } from 'src/app/shared/service/live.service';

@Component({
  selector: 'app-lives-list',
  templateUrl: './lives-list.component.html',
  styleUrls: ['./lives-list.component.scss']
})
export class LivesListComponent implements OnInit {

  livesPrevius!: Live[];
  LivesNext!: Live[];

  constructor(
    public liveService: LiveService,
    public satitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getLives()
  }

  getLives() {
    this.liveService.getLiveWithFlag('previous').subscribe(data => {
      this.livesPrevius = data.content;
      console.log(this.livesPrevius)
      this.livesPrevius.forEach(live => {
        live.urlSafe = this.satitizer.bypassSecurityTrustResourceUrl(live.liveLink)
      });

    });

    this.liveService.getLiveWithFlag('next').subscribe(data => {
      this.LivesNext = data.content;
      console.log(this.LivesNext);
      this.LivesNext.forEach(live => {
        live.urlSafe = this.satitizer.bypassSecurityTrustResourceUrl(live.liveLink)
      });

    });
  }

}
