export class Role {

  private _id: string;
  private _roleName: string;

  constructor(roleName: string) {
    this._roleName = roleName;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get roleName(): string {
    return this._roleName;
  }

  set roleName(value: string) {
    this._roleName = value;
  }
}
