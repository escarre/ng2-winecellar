export class Wine {
  rating: Number;
  _name: String;
  _varietal: String;

  get name() {
    return this._name;
  }
  set name(value) {
    this._name = name;
  }

  get varietal() {
    return this._varietal;
  }

  set varietal(value) {
    this._name = name;
  }

  constructor(wineName: String) {
    this._name = wineName;
  }
}
