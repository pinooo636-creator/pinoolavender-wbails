import makeWASocket from './Socket/index.js';
import chalk from "chalk";

console.log(chalk.hex("#ff69b4")(`
█▀█ █ █▄ █ █▀█ █▀█    █▀▄ █▀█ █ █░░ █▀ █▀▀ █▀
█▀▀ █ █ ▀█ █ █ █ █    █▀▄ █▀█ █ █░░ █▀ ▀▀█ ▀▀█
▀   ▀ ▀  ▀ ▀▀▀ ▀▀▀    ▀▀▀ ▀ ▀ ▀ ▀▀▀ ▀▀ ▀▀▀ ▀▀▀
`));
console.log(chalk.hex("#ff69b4")("Baileys modified by: pinoolavender\n"));
console.log(chalk.hex("#ff69b4")("Follow t.me/pinoolavender For More Updates"));

export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export * from './Store/index.js';
export { makeWASocket };
export default makeWASocket;
//# sourceMappingURL=index.js.map
