import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    const response = await read();
    const data = await json(response);

    const gameSaving = new GameSaving(JSON.parse(data));
    return gameSaving;
  }
}
