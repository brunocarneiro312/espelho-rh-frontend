export class Notificacao {

  private _id: number;
  private _text: string;
  private _dataInicio: string;
  private _dataFim: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get dataInicio(): string {
    return this._dataInicio;
  }

  set dataInicio(value: string) {
    this._dataInicio = value;
  }

  get dataFim(): string {
    return this._dataFim;
  }

  set dataFim(value: string) {
    this._dataFim = value;
  }
}
