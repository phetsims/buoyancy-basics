// Copyright 2024, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import Sim, { SimOptions } from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import BuoyancyBasicsStrings from './BuoyancyBasicsStrings.js';
import ExploreScreen from './explore/ExploreScreen.js';
import PreferencesModel from '../../joist/js/preferences/PreferencesModel.js';
import DensityBuoyancyCommonPreferencesNode from '../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonPreferencesNode.js';
import CompareScreen from '../../buoyancy/js/compare/CompareScreen.js';

// Launch the sim. Beware that scenery Image nodes created outside simLauncher.launch() will have zero bounds
// until the images are fully loaded. See https://github.com/phetsims/coulombs-law/issues/70#issuecomment-429037461
simLauncher.launch( () => {

  const titleStringProperty = BuoyancyBasicsStrings[ 'buoyancy-basics' ].titleStringProperty;

  const screens = [
    new CompareScreen( Tandem.ROOT.createTandem( 'compareScreen' ) ),
    new ExploreScreen( Tandem.ROOT.createTandem( 'exploreScreen' ) )
  ];

  const options: SimOptions = {

    // TODO: Add credits, see https://github.com/phetsims/density-buoyancy-common/issues/171
    credits: {
      leadDesign: '',
      softwareDevelopment: '',
      team: '',
      contributors: '',
      qualityAssurance: '',
      graphicArts: '',
      soundDesign: '',
      thanks: ''
    },
    webgl: true,

    preferencesModel: new PreferencesModel( {
      simulationOptions: {
        customPreferences: [ {
          createContent: tandem => new DensityBuoyancyCommonPreferencesNode( { tandem: tandem } )
        } ]
      }
    } )
  };

  const sim = new Sim( titleStringProperty, screens, options );
  sim.start();
} );