import {Injectable} from 'angular2/core';
import {TempData} from './tempdata.model';
import {DATAS} from './mock-tempdata';

@Injectable()
export class TempDataService {
  getTempData() {
    return Promise.resolve(DATAS);
  }

  getHeroesSlowly() {
    return new Promise<TempData[]>(resolve =>
      setTimeout(()=>resolve(DATAS), 2000) // 2 seconds
    );
  }

}