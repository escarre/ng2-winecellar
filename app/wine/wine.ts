export class Wine {
  id: number;
  _name: String;

  get name() {
    return this._name;
  }
  set name(value) {
    this._name = name;
  }

  constructor(name: String) {
    this._name = name;
  }
}
