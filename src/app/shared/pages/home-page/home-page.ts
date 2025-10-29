import { ChangeDetectionStrategy, Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {Footer} from "../../components/footer/footer";

@Component({
  selector: 'app-home-page',
  imports: [Footer],
  templateUrl: './home-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage { }
