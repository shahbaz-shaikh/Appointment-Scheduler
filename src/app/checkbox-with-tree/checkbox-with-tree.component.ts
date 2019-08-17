import { Component, OnInit } from '@angular/core';
import { CheckboxDataService, Person } from './checkbox-data.service';
import { map } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-checkbox-with-tree',
  templateUrl: './checkbox-with-tree.component.html',
  styleUrls: ['./checkbox-with-tree.component.css'],
  providers: [CheckboxDataService]
})
export class CheckboxWithTreeComponent implements OnInit {

  people: Person[] = [];
  selectedPeople = [];
  cityForm: FormGroup;

  constructor(private dataService: CheckboxDataService, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.dataService.getPeople()
      .pipe(map(x => x.filter(y => !y.disabled)))
      .subscribe((res) => {
        this.people = res;
      });

    this.cityForm = this.formBuilder.group({
      office: ['']
    })
  }

  selectOffice() {
    console.log(this.cityForm.value);
  }

  customSearch(term: string, item: any) {
    term = term.toLocaleLowerCase();
    return item.city.toLocaleLowerCase().indexOf(term) > -1 || item.office.toLocaleLowerCase().includes(term);
  }

}
