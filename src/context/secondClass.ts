import { IData } from '../utils/types';

export class AppState {
  private _parentFolders: IData[];
  private _render: () => void;

  constructor(
    parentFolders: IData[] = [],

    render: () => void = () => {},
  ) {
    this._parentFolders = parentFolders;
    this._render = render;
  }

  set render(value: () => void) {
    this._render = value;
  }

  get parentFolders(): IData[] {
    return this._parentFolders;
  }

  set parentFolders(value: IData[]) {
    this._parentFolders = value;
    this._render();
  }
}

export const appState = new AppState();
