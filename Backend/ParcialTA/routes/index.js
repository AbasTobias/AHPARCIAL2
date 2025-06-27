import cafesRouter from './cafesRouter.js';  
import usersRouter from './usersRouter.js';
import companiesRouter from './companiesRouter.js';

function routerAPI(app) {
  console.log('Rutas');
  app.use('/api/cafes', cafesRouter);
  app.use('/api/users', usersRouter);
  app.use('/api/companies', companiesRouter);
}

export default routerAPI;