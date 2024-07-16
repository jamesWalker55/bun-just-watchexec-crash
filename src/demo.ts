AddCwdToImportPaths();

import { encode } from "json";
import { OSType } from "./ffi";
import { absPath } from "./utils";
import { parseIni } from "./ini";
import { main as installedFxMain } from "./installedFx";
import { getLastTouchedFx } from "./fx";
import { inspect } from "./inspect";
import { getSelectedFx } from "./selectedFx";
import { getSelectedTracks } from "./track";
import { track as getTrackChunk } from "./chunk";
import { fromChunk } from "./arrchunk";
import { copy } from "./clipboard";

function log(msg: string) {
  reaper.ShowConsoleMsg(msg);
  reaper.ShowConsoleMsg("\n");
}

function main() {
  const tracks = getSelectedTracks();
  const result = tracks.map((x) => x.temp());

  log(inspect(result));
  copy(encode(result));
}

main();
