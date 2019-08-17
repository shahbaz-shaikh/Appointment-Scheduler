import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export interface Person {
  id: string;
  office: string;
  city: string;
  company: string;
  email: string;
  phone: string;
  disabled?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CheckboxDataService {
  constructor(private http: HttpClient) { }

  getPeople(term: string = null): Observable<Person[]> {
    let items = getMockPeople();
    if (term) {
      items = items.filter(x => x.office.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }
    return of(items).pipe(delay(500));
  }
}

function getMockPeople() {
  return [
    {
      'id': '1',
      'office': 'Andheri',
      'city': 'Mumbai',
      'company': 'ZOLAR',
      'email': 'karynwright@zolar.com',
      'phone': '+1 (851) 583-2547'
    },
    {
      'id': '2',
      'office': 'Borivali',
      'city': 'Mumbai',
      'company': 'EXTRAWEAR',
      'email': 'rochelleestes@extrawear.com',
      'phone': '+1 (849) 408-2029'
    },
    {
      'id': '3',
      'office': 'Ashram road',
      'city': 'ahmedabad',
      'company': 'ZYTRAX',
      'email': 'mendozaruiz@zytrax.com',
      'phone': '+1 (904) 536-2020'
    },
    {
      'id': '4',
      'office': 'C G Road',
      'city': 'ahmedabad',
      'company': 'ELEMANTRA',
      'email': 'rosalesrussell@elemantra.com',
      'phone': '+1 (868) 473-3073'
    },
    {
      'id': '5',
      'office': 'Kalupur',
      'city': 'ahmedabad',
      'company': 'MIRACLIS',
      'email': 'marqueznolan@miraclis.com',
      'phone': '+1 (853) 571-3921'
    },
    {
      'id': '6',
      'office': 'Shahpur',
      'city': 'ahmedabad',
      'company': 'CAXT',
      'email': 'franklinjames@caxt.com',
      'phone': '+1 (868) 539-2984'
    },
    {
      'id': '7',
      'office': 'Thane',
      'city': 'Mumbai',
      'company': 'MATRIXITY',
      'email': 'elsabradley@matrixity.com',
      'phone': '+1 (994) 583-3850'
    },
    {
      'id': '8',
      'office': 'Kothrud',
      'city': 'Pune',
      'company': 'EZENT',
      'email': 'pearsonthompson@ezent.com',
      'phone': '+1 (917) 537-2178'
    },
    {
      'id': '9',
      'office': 'Mira Road',
      'city': 'Mumbai',
      'company': 'MANTRIX',
      'email': 'inapugh@mantrix.com',
      'phone': '+1 (917) 450-2372'
    },
    {
      'id': '10',
      'office': 'Viman Nagar',
      'city': 'Pune',
      'company': 'PORTALINE',
      'email': 'nguyenelliott@portaline.com',
      'phone': '+1 (905) 491-3377'
    },
    {
      'id': '11',
      'office': 'Swargate',
      'city': 'Pune',
      'company': 'FARMEX',
      'email': 'millsbarnett@farmex.com',
      'phone': '+1 (882) 462-3986'
    }
  ]
}
