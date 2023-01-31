import GameSavingLoader from './module/GameSavingLoader';
import GameSaving from './module/GameSaving';
import read from './module/reader';
import json from './module/parser';

// GameSavingLoader.load()
//   .then((saving) => new GameSaving(JSON.parse(saving)));

// function createSave() {
//   return (async () => {
//     try {
//       const readFile = await read();
//       const result = await json(readFile);
//       return result;
//     } catch (e) { return 'oops'; }
//   })();
// }
