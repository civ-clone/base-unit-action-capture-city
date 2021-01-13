import { CityRegistry } from '@civ-clone/core-city/CityRegistry';
import Move from '@civ-clone/base-unit-action-move/Move';
export declare class CaptureCity extends Move {
  perform(cityRegistry?: CityRegistry): boolean;
}
export default CaptureCity;
