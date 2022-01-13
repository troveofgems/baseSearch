module.exports.mountRouterToApplication = Application => {
  const // This is the main mainRouter. It bundles all sub-routes and mounts them to the application
    apiVersion_designator = '/api/v1/',
    backend_apiRoutes = ['listings'];

  backend_apiRoutes
    .forEach(route => (
        Application.use(
          `${apiVersion_designator}${route}`,
          require(`./routes${apiVersion_designator}${route}.route`))
      )
    );

  return Application;
};