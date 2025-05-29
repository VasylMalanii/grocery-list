const queryKeys = {
  groceries: ['groceries'],
  grocery: (id: string) => ['groceries', id],
  groceryItems: (id: string) => ['groceryItems', id],
}

export default queryKeys
