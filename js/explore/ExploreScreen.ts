// Copyright 2024, University of Colorado Boulder

/**
 * Explore screen for Buoyancy
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import BuoyancyExploreModel from '../../../density-buoyancy-common/js/buoyancy/model/BuoyancyExploreModel.js';
import BuoyancyExploreScreenView from '../../../density-buoyancy-common/js/buoyancy/view/BuoyancyExploreScreenView.js';
import DensityBuoyancyCommonColors from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonColors.js';
import Screen from '../../../joist/js/Screen.js';
import Tandem from '../../../tandem/js/Tandem.js';
import buoyancyBasics from '../buoyancyBasics.js';
import StringProperty from '../../../axon/js/StringProperty.js';

export default class ExploreScreen extends Screen<BuoyancyExploreModel, BuoyancyExploreScreenView> {
  public constructor( tandem: Tandem ) {
    super(
      () => new BuoyancyExploreModel( {
        tandem: tandem.createTandem( 'model' )
      } ),
      model => new BuoyancyExploreScreenView( model, {
        tandem: tandem.createTandem( 'view' )
      } ),
      {
        name: new StringProperty( 'Explore' ),
        backgroundColorProperty: DensityBuoyancyCommonColors.skyBottomProperty,
        tandem: tandem
      }
    );
  }
}

buoyancyBasics.register( 'ExploreScreen', ExploreScreen );