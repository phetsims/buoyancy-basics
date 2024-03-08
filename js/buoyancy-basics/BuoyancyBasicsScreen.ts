// Copyright 2024, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Aguustin Vallejo
 */

import Screen, { ScreenOptions } from '../../../joist/js/Screen.js';
import optionize from '../../../phet-core/js/optionize.js';
import BuoyancyBasicsColors from '../common/BuoyancyBasicsColors.js';
import buoyancyBasics from '../buoyancyBasics.js';
import BuoyancyBasicsModel from './model/BuoyancyBasicsModel.js';
import BuoyancyBasicsScreenView from './view/BuoyancyBasicsScreenView.js';
import BuoyancyBasicsStrings from '../BuoyancyBasicsStrings.js';

type SelfOptions = {
  //TODO add options that are specific to BuoyancyBasicsScreen here
};

type BuoyancyBasicsScreenOptions = SelfOptions & ScreenOptions;

export default class BuoyancyBasicsScreen extends Screen<BuoyancyBasicsModel, BuoyancyBasicsScreenView> {

  public constructor( providedOptions: BuoyancyBasicsScreenOptions ) {

    const options = optionize<BuoyancyBasicsScreenOptions, SelfOptions, ScreenOptions>()( {
      name: BuoyancyBasicsStrings.screen.nameStringProperty,

      //TODO add default values for optional SelfOptions here

      //TODO add default values for optional ScreenOptions here
      backgroundColorProperty: BuoyancyBasicsColors.screenBackgroundColorProperty
    }, providedOptions );

    super(
      () => new BuoyancyBasicsModel( { tandem: options.tandem.createTandem( 'model' ) } ),
      model => new BuoyancyBasicsScreenView( model, { tandem: options.tandem.createTandem( 'view' ) } ),
      options
    );
  }
}

buoyancyBasics.register( 'BuoyancyBasicsScreen', BuoyancyBasicsScreen );