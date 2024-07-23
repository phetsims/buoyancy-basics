// Copyright 2024, University of Colorado Boulder

/**
 * Explore screen for Buoyancy: Basics
 *
 * @author Michael Kauzmann (PhET Interactive Simulations)
 */

import DensityBuoyancyCommonColors from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonColors.js';
import Screen from '../../../joist/js/Screen.js';
import Tandem from '../../../tandem/js/Tandem.js';
import buoyancyBasics from '../buoyancyBasics.js';
import BuoyancyBasicsExploreModel from '../../../density-buoyancy-common/js/buoyancy-basics/model/BuoyancyBasicsExploreModel.js';
import BuoyancyBasicsExploreScreenView from '../../../density-buoyancy-common/js/buoyancy-basics/view/BuoyancyBasicsExploreScreenView.js';
import BuoyancyBasicsStrings from '../BuoyancyBasicsStrings.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import DensityBuoyancyCommonKeyboardHelpNode from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonKeyboardHelpNode.js';

export default class ExploreScreen extends Screen<BuoyancyBasicsExploreModel, BuoyancyBasicsExploreScreenView> {
  public constructor( tandem: Tandem ) {
    super(
      () => new BuoyancyBasicsExploreModel( {
        fluidSelectionType: 'simple',
        tandem: tandem.createTandem( 'model' )
      } ),
      model => new BuoyancyBasicsExploreScreenView( model, {
        tandem: tandem.createTandem( 'view' )
      } ),
      {
        name: BuoyancyBasicsStrings.screen.exploreStringProperty,
        backgroundColorProperty: DensityBuoyancyCommonColors.skyBottomProperty,
        homeScreenIcon: new ScreenIcon( BuoyancyBasicsExploreScreenView.getBuoyancyBasicsExploreIcon(), {
          maxIconWidthProportion: 1,
          maxIconHeightProportion: 1
        } ),
        tandem: tandem,
        createKeyboardHelpNode: () => new DensityBuoyancyCommonKeyboardHelpNode( true, true )
      }
    );
  }
}

buoyancyBasics.register( 'ExploreScreen', ExploreScreen );