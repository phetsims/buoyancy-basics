// Copyright 2024, University of Colorado Boulder

/**
 * Compare screen for Buoyancy: Basics
 *
 * @author Michael Kauzmann (PhET Interactive Simulations)
 */

import DensityBuoyancyCommonColors from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonColors.js';
import Screen from '../../../joist/js/Screen.js';
import Tandem from '../../../tandem/js/Tandem.js';
import buoyancyBasics from '../buoyancyBasics.js';
import BuoyancyBasicsCompareModel from '../../../density-buoyancy-common/js/buoyancy-basics/model/BuoyancyBasicsCompareModel.js';
import BuoyancyBasicsCompareScreenView from '../../../density-buoyancy-common/js/buoyancy-basics/view/BuoyancyBasicsCompareScreenView.js';
import BuoyancyBasicsStrings from '../BuoyancyBasicsStrings.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import BuoyancyBasicsExploreScreenView from '../../../density-buoyancy-common/js/buoyancy-basics/view/BuoyancyBasicsExploreScreenView.js';

export default class CompareScreen extends Screen<BuoyancyBasicsCompareModel, BuoyancyBasicsCompareScreenView> {
  public constructor( tandem: Tandem ) {
    super(
      () => new BuoyancyBasicsCompareModel( {
        tandem: tandem.createTandem( 'model' )
      } ),
      model => new BuoyancyBasicsCompareScreenView( model, {
        tandem: tandem.createTandem( 'view' )
      } ),
      {
        name: BuoyancyBasicsStrings.screen.compareStringProperty,
        backgroundColorProperty: DensityBuoyancyCommonColors.skyBottomProperty,
        homeScreenIcon: new ScreenIcon( BuoyancyBasicsExploreScreenView.getBuoyancyBasicsExploreIcon(), {
          maxIconWidthProportion: 1,
          maxIconHeightProportion: 1
        } ),
        tandem: tandem
      }
    );
  }
}

buoyancyBasics.register( 'CompareScreen', CompareScreen );