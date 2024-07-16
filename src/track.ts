import { TrackFX } from "./fx";

export class Track {
  obj: MediaTrack;

  constructor(track: MediaTrack) {
    this.obj = track;
  }

  getFxCount() {
    return reaper.TrackFX_GetCount(this.obj);
  }

  getAllFx() {
    const count = this.getFxCount();
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(new TrackFX(this.obj, i));
    }
    return result;
  }

  /**
   * Raw folder depth value from Reaper's API. Value indicates the change
   * in depth in folder structure. E.g. '1' means next track will be a folder
   * down. '-2' means next track will be 2 folders up.
   *
   * Original documentation:
   *
   * ---
   *
   * folder depth change,
   * - 0=normal,
   * - 1=track is a folder parent,
   * - -1=track is the last in the innermost folder,
   * - -2=track is the last in the innermost and next-innermost folders, etc
   */
  getRawFolderDepth() {
    return reaper.GetMediaTrackInfo_Value(this.obj, "I_FOLDERDEPTH");
  }

  temp() {
    const receives = reaper.GetTrackNumSends(this.obj, -1);
    const sends = reaper.GetTrackNumSends(this.obj, 0);
    const hwouts = reaper.GetTrackNumSends(this.obj, 1);
    return {
      receives,
      sends,
      hwouts,
    };
  }

  sendsAudioToParent() {
    return reaper.GetMediaTrackInfo_Value(this.obj, "B_MAINSEND") === 1;
  }

  getParentSendChannelOffset() {
    return reaper.GetMediaTrackInfo_Value(this.obj, "C_MAINSEND_OFFS");
  }

  getParentSendChannelCount() {
    return reaper.GetMediaTrackInfo_Value(this.obj, "C_MAINSEND_NCH");
  }
}

export function getSelectedTracks() {
  const tracks = [];
  let i = 0;
  while (true) {
    const t = reaper.GetSelectedTrack2(0, i, true);
    if (t === null) return tracks;

    tracks.push(new Track(t));
    i += 1;
  }
}
