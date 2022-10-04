/** @module Types:base */

import { DmState } from '@brightsign/bsdatamodel';
import { BaContextModelState } from '@brightsign/ba-context-model';

import { BsUiModelTemplateState } from './template';
import { HsmState } from './hsm';
import { PresentationDataState } from './presentation';
import { PlaybackState } from './playback';

export class RuntimeEnvironment {
  static BrightSign = 'BrightSign';
  static BaconPreview = 'BaconPreview';
  static Dev = 'Dev';
}
Object.freeze(RuntimeEnvironment);

export interface AutorunState {
  bsdm: DmState;
  bacdm: BaContextModelState;
  bsPlayer: AutorunPlayerState;
}

export interface AutorunPlayerState {
  hsmState: HsmState;
  presentationData: PresentationDataState;
  playback: PlaybackState;
  // arDataFeeds: ArDataFeedMap;
}

/** @internal */
/** @private */
export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

/** @internal */
/** @private */
export interface BsUiModelState {
  template: BsUiModelTemplateState;
}

/** @internal */
/** @private */
export const createModel = (template: BsUiModelTemplateState): BsUiModelState => {
  return {
    template
  };
};

export interface LUT { [key: string]: any; }

export interface AutorunBaseObject {
  id: string;
}

export interface AutorunMap<T extends AutorunBaseObject> {
  [id: string]: T;    // really '[id:BsDmId]: T;' -- but Typescript doesn't like that, even though BsDmId = string
}

export interface FileLUT { [fileName: string]: string; }

export interface Dimensions {
  width: number;
  height: number;
}

