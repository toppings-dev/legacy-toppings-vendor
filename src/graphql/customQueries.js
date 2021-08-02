export const getMenu = /* GraphQL */ `
  query GetMenu($id: ID!) {
    getMenu(id: $id) {
      description
      id
      name
      address
      sundayHours
      mondayHours
      tuesdayHours
      wednesdayHours
      thursdayHours
      fridayHours
      saturdayHours
      images {
        items {
          id
          menuId
          type
          url
        }
      }
      menuCategories {
        items {
          id
          name
          menuId
          menuItems {
            items {
              id
              name
              menuCategoryName
              description
              price
              options {
                items {
                  id
                  foodOptionName
                  menuItemName
                  numchoices
                  optionCat {
                    name
                    options {
                      items {
                        id
                        optionName
                        foodOptionName
                        option {
                          name
                          price
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const listActiveOrdersByCustomer = /* GraphQL */ `
  query ListActiveOrdersByCustomer($customerId: AWSEmail!) {
    listActiveOrdersByCustomer(customerId: $customerId) {
      id
      status
      pickupId
      pickup {
        id
        delivererId
        deliverer {
          email
          name
        }
      }
      restaurant {
        id
        name
        images {
          items {
            url
          }
        }
      }
    }
  }
`;

export const listOpenPickups = /* GraphQL */ `
  query ListOpenPickups($email: AWSEmail!) {
    listOpenPickups(email: $email) {
      id
      delivererId
      deliverer {
        email
        name
      }
      windowEndTime
      menuId
      restaurant {
        id
        name
        images {
          items {
            url
          }
        }
      }
    }
  }
`;

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrderInfo(id: $id) {
      actual_delivery_time
      charge_id
      closed
      comment
      createdAt
      customerId
      delivery_address
      delivery_lat
      delivery_long
      discount
      estimated_delivery_time
      fees
      food_ready_time
      grandTotal
      id
      isPaid
      order_price_after_discount
      order_price_before_discount
      pickupId
      status
      tax
      tip
      restaurant {
        address
        city
        description
        email
        fridayHours
        id
        isOpen
        lat
        long
        mondayHours
        name
        phone_number
        restaurantOwnerName
        saturdayHours
        state
        sundayHours
        thursdayHours
        tuesdayHours
        wednesdayHours
        zip_code
        images {
          items {
            id
            menuId
            type
            url
          }
        }
      }
      pickup {
        apiResponse
        closed
        delivererId
        deliverer {
          cognitoId
          name
          phone_number
        }
        expdate
        id
        isPickedUp
        lat
        long
        menuId
        status
        transportation_type
        windowClosed
        windowEndTime
      }
      customer {
        deviceToken
        email
        name
        isUser
        phone_number
        platform
      }
      orderItems {
        items {
          comment
          foodOptionsArray
          id
          itemName
          menuId
          orderId
          price_after_reward
          price_before_reward
          price_per_item
          quantity
        }
      }
    }
  }
`;

export const getReward = /* GraphQL */ `
  query GetReward($menuId: ID!, $userEmail: AWSEmail!) {
    getRewardInfo(menuId: $menuId, userEmail: $userEmail) {
      id
      menuId
      points
      userEmail
    }
  }
`;

export const getVendorRewards = /* GraphQL */ `
  query GetVendorRewards($menuId: ID!) {
    getVendorRewards(menuId: $menuId) {
      date_active_from
      date_active_to
      description
      discountAmount
      discountPercentage
      id
      itemName
      menuId
      points
    }
  }
`;

export const listRestaurants = /* GraphQL */ `
  query ListRestaurants {
    listRestaurantsInfo {
      address
      city
      description
      email
      fridayHours
      id
      isOpen
      lat
      long
      mondayHours
      name
      phone_number
      restaurantOwnerName
      saturdayHours
      state
      sundayHours
      thursdayHours
      tuesdayHours
      wednesdayHours
      zip_code
      images {
        items {
          url
        }
      }
    }
  }
`;

export const getPickup = /* GraphQL */ `
  query GetPickup($delivererId: AWSEmail!) {
    getPickupInfo(delivererId: $delivererId) {
      closed
      createdAt
      delivererId
      id
      isPickedUp
      lat
      long
      menuId
      status
      transportation_type
      windowClosed
      windowEndTime
      deliverer {
        email
        name
        phone_number
      }
      orders {
        items {
          actual_delivery_time
          comment
          closed
          customerId
          delivery_address
          delivery_lat
          delivery_long
          estimated_delivery_time
          food_ready_time
          grandTotal
          id
          status
          tax
          customer {
            email
            name
            phone_number
            pfp
          }
          orderItems {
            items {
              comment
              foodOptionsArray
              id
              itemName
              price_after_reward
              price_before_reward
              price_per_item
              quantity
            }
          }
        }
      }
      restaurant {
        address
        city
        description
        email
        fridayHours
        id
        isOpen
        lat
        long
        mondayHours
        name
        phone_number
        restaurantOwnerName
        saturdayHours
        state
        sundayHours
        thursdayHours
        tuesdayHours
        wednesdayHours
        zip_code
        images {
          items {
            url
          }
        }
      }
    }
  }
`;

export const getUserInfo = /* GraphQL */ `
  query GetUserInfo($email: AWSEmail!) {
    getUserInfo(email: $email) {
      email
      name
      phone_number
      pfp
    }
  }
`;

export const getPickupPublicInfo = /* GraphQL */ `
  query GetPickupPublicInfo($id: ID!) {
    getPickupPublicInfo(id: $id) {
      id
      delivererId
      closed
    }
  }
`;

export const listOrdersByRestaurant = /* GraphQL */ `
  query ListOrdersByRestaurant($restaurantId: ID!) {
    listOrdersByRestaurant(restaurantId: $restaurantId) {
      actual_delivery_time
      closed
      comment
      createdAt
      customerId
      delivery_address
      delivery_lat
      delivery_long
      discount
      estimated_delivery_time
      fees
      food_ready_time
      grandTotal
      id
      isPaid
      order_price_after_discount
      order_price_before_discount
      pickupId
      status
      tax
      tip
      updatedAt
      customer {
        email
        name
        pfp
        phone_number
      }
      orderItems {
        items {
          comment
          createdAt
          foodOptionsArray
          itemName
          id
          menuId
          orderId
          price_after_reward
          price_before_reward
          price_per_item
          quantity
          updatedAt
        }
      }
      pickup {
        apiResponse
        closed
        createdAt
        delivererId
        expdate
        id
        isPickedUp
        lat
        long
        menuId
        status
        transportation_type
        updatedAt
        windowClosed
        windowEndTime
        deliverer {
          email
          name
          pfp
          phone_number
        }
      }
      restaurant {
        address
        city
        createdAt
        description
        email
        fridayHours
        id
        isOpen
        lat
        long
        mondayHours
        name
        phone_number
        restaurantOwnerName
        saturdayHours
        state
        sundayHours
        thursdayHours
        tuesdayHours
        updatedAt
        wednesdayHours
        zip_code
      }
    }
  }
`;

export const getRestaurantByOwner = /* GraphQL */ `
  query GetRestaurantByOwner($email: AWSEmail!) {
    getRestaurantByOwner(email: $email) {
      address
        city
        createdAt
        description
        email
        fridayHours
        id
        isOpen
        lat
        long
        mondayHours
        name
        phone_number
        restaurantOwnerName
        saturdayHours
        state
        sundayHours
        thursdayHours
        tuesdayHours
        updatedAt
        wednesdayHours
        zip_code
    }
  }
`;