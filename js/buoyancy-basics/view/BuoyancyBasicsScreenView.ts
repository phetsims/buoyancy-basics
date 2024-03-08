// Copyright 2024, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Aguustin Vallejo
 */

import ScreenView, { ScreenViewOptions } from '../../../../joist/js/ScreenView.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import BuoyancyBasicsConstants from '../../common/BuoyancyBasicsConstants.js';
import buoyancyBasics from '../../buoyancyBasics.js';
import BuoyancyBasicsModel from '../model/BuoyancyBasicsModel.js';
import optionize from '../../../../phet-core/js/optionize.js';

type SelfOptions = {
 //TODO add options that are specific to BuoyancyBasicsScreenView here
};

type BuoyancyBasicsScreenViewOptions = SelfOptions & ScreenViewOptions;

export default class BuoyancyBasicsScreenView extends ScreenView {

  public constructor( model: BuoyancyBasicsModel, providedOptions: BuoyancyBasicsScreenViewOptions ) {

    const options = optionize<BuoyancyBasicsScreenViewOptions, SelfOptions, ScreenViewOptions>()( {

      //TODO add default values for optional SelfOptions here

      //TODO add default values for optional ScreenViewOptions here
    }, providedOptions );

    super( options );

    const resetAllButton = new ResetAllButton( {
      listener: () => {
        this.interruptSubtreeInput(); // cancel interactions that may be in progress
        model.reset();
        this.reset();
      },
      right: this.layoutBounds.maxX - BuoyancyBasicsConstants.SCREEN_VIEW_X_MARGIN,
      bottom: this.layoutBounds.maxY - BuoyancyBasicsConstants.SCREEN_VIEW_Y_MARGIN,
      tandem: options.tandem.createTandem( 'resetAllButton' )
    } );
    this.addChild( resetAllButton );
  }

  /**
   * Resets the view.
   */
  public reset(): void {
    //TODO
  }

  /**
   * Steps the view.
   * @param dt - time step, in seconds
   */
  public override step( dt: number ): void {
    //TODO
  }
}

buoyancyBasics.register( 'BuoyancyBasicsScreenView', BuoyancyBasicsScreenView );