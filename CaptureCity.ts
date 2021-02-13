import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import City from '@civ-clone/core-city/City';
import Move from '@civ-clone/base-unit-action-move/Move';
import Tile from '@civ-clone/core-world/Tile';
import Unit from '@civ-clone/core-unit/Unit';

export class CaptureCity extends Move {
  #city: City;

  constructor(
    from: Tile,
    to: Tile,
    unit: Unit,
    city: City,
    ruleRegistry: RuleRegistry = ruleRegistryInstance
  ) {
    super(from, to, unit, ruleRegistry);

    this.#city = city;
  }
  perform(): boolean {
    if (super.perform()) {
      this.#city.capture(this.unit().player());

      return true;
    }

    return false;
  }
}

export default CaptureCity;
