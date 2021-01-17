import {
  CityRegistry,
  instance as cityRegistryInstance,
} from '@civ-clone/core-city/CityRegistry';
import City from '@civ-clone/core-city/City';
import Move from '@civ-clone/base-unit-action-move/Move';

export class CaptureCity extends Move {
  perform(cityRegistry: CityRegistry = cityRegistryInstance): boolean {
    if (super.perform()) {
      cityRegistry
        .getByTile(this.to())
        .forEach((city: City): void => city.capture(this.unit().player()));

      return true;
    }

    return false;
  }
}

export default CaptureCity;
