import { NgFor, AsyncPipe } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Cities } from '../../cities';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-bike-search-form',
  standalone: true,
  imports: [
    NgFor,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatButtonModule,
  ],
  templateUrl: './bike-search-form.component.html',
})
export class BikeSearchFormComponent {
  @Output() search = new EventEmitter<string>();

  cityControl = new FormControl('', [Validators.minLength(3)]);
  options: string[] = Cities;
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.cityControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  onSubmit() {
    const city = this.cityControl.value || '';
    this.search.emit(city);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
