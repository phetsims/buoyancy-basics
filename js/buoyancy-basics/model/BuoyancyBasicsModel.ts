// Copyright 2024, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Aguustin Vallejo
 */

import buoyancyBasics from '../../buoyancyBasics.js';
import { PhetioObjectOptions } from '../../../../tandem/js/PhetioObject.js';
import PickRequired from '../../../../phet-core/js/types/PickRequired.js';
import TModel from '../../../../joist/js/TModel.js';

type SelfOptions = {
  //TODO add options that are specific to BuoyancyBasicsModel here
};

type BuoyancyBasicsModelOptions = SelfOptions & PickRequired<PhetioObjectOptions, 'tandem'>;

export default class BuoyancyBasicsModel implements TModel {

  public constructor( providedOptions: BuoyancyBasicsModelOptions ) {
    //TODO
  }

  /**
   * Resets the model.
   */
  public reset(): void {
    //TODO
  }

  /**
   * Steps the model.
   * @param dt - time step, in seconds
   */
  public step( dt: number ): void {
    //TODO
  }
}

buoyancyBasics.register( 'BuoyancyBasicsModel', BuoyancyBasicsModel );