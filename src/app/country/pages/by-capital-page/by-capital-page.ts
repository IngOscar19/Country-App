import { ChangeDetectionStrategy, Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MenuHead} from "../../components/menu-head/menu-head"

@Component({
  selector: 'app-by-capital-page',
  imports: [RouterLink, MenuHead],
  templateUrl: './by-capital-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapitalPage { }
