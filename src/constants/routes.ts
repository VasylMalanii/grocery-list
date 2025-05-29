const ROUTES = {
  home: () => '/',
  groceryDetails: (id: string = ':id') => `/list/${id}`,
}

export default ROUTES
