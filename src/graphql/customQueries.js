export const listMenuCategories = `
  query ListMenuCategorys(
    $filter: ModelMenuCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenuCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        menuId
        name
        menuItems {
          items {
            id
            menuId
            menuCategoryName
            name
            description
            price
            updatedAt
            createdAt
            options {
              items {
                numchoices
                menuItemName
                id
                foodOptionName
                createdAt
                updatedAt
                menuId
                optionCat {
                  updatedAt
                  name
                  menuId
                  createdAt
                  options {
                    items {
                      updatedAt
                      optionName
                      menuId
                      id
                      foodOptionName
                      option {
                        price
                        name
                        menuId
                        createdAt
                        updatedAt
                      }
                    }
                  }
                }
              }
            }
          }
        }
        updatedAt
        createdAt
      }
    }
  }
`;