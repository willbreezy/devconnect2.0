/**
        Le fichier reducteurRoot est le point central où tous les réducteurs de l'application Redux sont combinés. Il sert à combiner les différents réducteurs en un seul réducteur principal que Redux utilise pour gérer l'état global de l'application.
 */
        import { combineReducers } from 'redux';
        import reducteurAlerte from './reducteurAlerte'
        import reducteurAuth from './reducteurAuth'
        import reducteurProfil from './reducteurProfil'
        import reducteurPost from './reducteurPost'
        
        // combine tous les reducteurs en un seul reducteur à racine
        const reducteurRoot = combineReducers({
          alert: reducteurAlerte,
          auth: reducteurAuth,
          profile: reducteurProfil,
          post: reducteurPost
        });
        
        export default reducteurRoot;
        