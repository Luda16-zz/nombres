"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var lodash_1 = require("lodash");
var NameComponent = (function () {
    function NameComponent(_nameService) {
        this._nameService = _nameService;
        this.nameForm = false;
        this.editNameForm = false;
        this.newName = {};
        this.editedName = {};
    }
    NameComponent.prototype.ngOnInit = function () {
        this.getNames();
    };
    NameComponent.prototype.getNames = function () {
        this.names = this._nameService.getNamesFromData();
    };
    NameComponent.prototype.showEditNameForm = function (name) {
        if (!name) {
            this.nameForm = false;
            return;
        }
        this.editNameForm = true;
        this.editedName = lodash_1.clone(name);
    };
    NameComponent.prototype.showAddNameForm = function () {
        // resets form if edited product
        if (this.names.length) {
            this.newName = {};
        }
        this.nameForm = true;
        this.isNewForm = true;
    };
    NameComponent.prototype.saveName = function (name) {
        if (this.isNewForm) {
            // add a new product
            this._nameService.addName(name);
        }
        this.nameForm = false;
    };
    NameComponent.prototype.removeName = function (name) {
        this._nameService.deleteName(name);
    };
    NameComponent.prototype.updateName = function () {
        this._nameService.updateName(this.editedName);
        this.editNameForm = false;
        this.editedName = {};
    };
    NameComponent.prototype.cancelNewName = function () {
        this.newName = {};
        this.nameForm = false;
    };
    NameComponent.prototype.cancelEdits = function () {
        this.editedName = {};
        this.editNameForm = false;
    };
    return NameComponent;
}());
NameComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'name.template.html'
    }),
    __metadata("design:paramtypes", [Object])
], NameComponent);
exports.NameComponent = NameComponent;
//# sourceMappingURL=name.component.js.map