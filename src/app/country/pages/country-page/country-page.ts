import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MenuHead} from "../../components/menu-head/menu-head"
import { RouterOutlet } from '@angular/router';
import {CountryList} from '../../components/country-list/country-list';
import {SearchInput} from "../../components/search-input/search-input";
import {Footer} from "../../../shared/components/footer/footer";

@Component({
  selector: 'app-country-page',
  imports: [MenuHead,RouterOutlet,CountryList,SearchInput,Footer],
  templateUrl: './country-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryPage { }
