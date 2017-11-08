import { Component, OnInit } from '@angular/core';
import { NameService } from './name.service';
import { Name } from './name';
import { clone } from 'lodash';

@Component({
    moduleId: module.id,
    templateUrl: 'name.template.html'
})

export class NameComponent implements OnInit {
  names: Name[];
  nameForm: boolean = false;
  editNameForm: boolean = false;
  isNewForm: boolean;
  newName: any = {};
  editedName: any = {};

  constructor(private _nameService: ProductService) { }

  ngOnInit() {
    this.getNames();
  }

  getNames() {
    this.names = this._nameService.getNamesFromData();
  }

  showEditNameForm(name: Name) {
    if(!name) {
      this.nameForm = false;
      return;
    }
    this.editNameForm = true;
    this.editedName = clone(name);
  }

  showAddNameForm() {
    // resets form if edited product
    if(this.names.length) {
      this.newName = {};
    }
    this.nameForm = true;
    this.isNewForm = true;
  }

  saveName(name: Name) {
    if(this.isNewForm) {
      // add a new product
      this._nameService.addName(name);
    }
    this.nameForm = false;
  }

  removeName(name: Product) {
    this._nameService.deleteName(name);
  }

  updateName() {
    this._nameService.updateName(this.editedName);
    this.editNameForm = false;
    this.editedName = {};
  }

  cancelNewName() {
    this.newName = {};
    this.nameForm = false;
  }

  cancelEdits() {
    this.editedName = {};
    this.editNameForm = false;
  }

}
