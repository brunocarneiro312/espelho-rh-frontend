export class Espelho {

  private _id: number;
  private _uploadAt: string;
  private _anoMes: string;
  private _espelho: Blob;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get uploadAt(): string {
    return this._uploadAt;
  }

  set uploadAt(value: string) {
    this._uploadAt = value;
  }

  get anoMes(): string {
    return this._anoMes;
  }

  set anoMes(value: string) {
    this._anoMes = value;
  }

  get espelho(): Blob {
    return this._espelho;
  }

  set espelho(value: Blob) {
    this._espelho = value;
  }
}
