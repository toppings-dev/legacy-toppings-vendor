export const updateDriverLocation = /* GraphQL */ `
  mutation UpdateDriverLocation($id: ID!, $lat: Float!, $long: Float!) {
    updateDriverLocation(id: $id, lat: $lat, long: $long) {
      id
      lat
      long
      apiResponse
      orders {
        items {
          id
          closed
          customerId
          delivery_lat
          delivery_long
          pickupId
          status
          delivery_address
          customer {
            email
            name
            phone_number
            pfp
          }
          restaurant {
            id
            name
          }
        }
      }
    }
  }
`;

export const updateEta = /* GraphQL */ `
  mutation UpdateEta($id: ID!, $estimated_delivery_time: AWSTimestamp!) {
    updateEta(estimated_delivery_time: $estimated_delivery_time, id: $id) {
      id
      estimated_delivery_time
    }
  }
`;

export const createPickup = /* GraphQL */ `
  mutation CreatePickup($cart: AWSJSON!, $currency: String!, $delivererId: AWSEmail!, $description: String!, $menuId: ID!, $rewardsCart: AWSJSON!, $stripeToken: String!, $windowOpenTime: Int!) {
    createNewPickup(cart: $cart, currency: $currency, delivererId: $delivererId, description: $description, menuId: $menuId, rewardsCart: $rewardsCart, stripeToken: $stripeToken, windowOpenTime: $windowOpenTime) {
      id
      delivererId
      transportation_type
      menuId
      closed
      windowEndTime
      windowClosed
      isPickedUp
      status
      deliverer {
        email
        name
        phone_number
      }
      orders {
        items {
          isPaid
          charge_id
          id
          closed
          pickupId
          customerId
          customer {
            email
            name
            phone_number
            pfp
          }
          orderItems {
            items {
              id
              itemName
              menuId
              orderId
              quantity
              price_per_item
              price_before_reward
              foodOptionsArray
            }
          }
        }
      }
    }
  }
`;

export const createOrder = /* GraphQL */ `
  mutation CreateOrder($cart: AWSJSON!, $currency: String!, $customerId: AWSEmail!, $delivery_address: String!, $delivery_lat: Float!, $delivery_long: Float!, $description: String!, $orderRestaurantId: ID!, $pickupId: ID!, $rewardsCart: AWSJSON!, $stripeToken: String!) {
    createNewOrder(cart: $cart, currency: $currency, customerId: $customerId, delivery_address: $delivery_address, delivery_lat: $delivery_lat, delivery_long: $delivery_long, description: $description, orderRestaurantId: $orderRestaurantId, pickupId: $pickupId, rewardsCart: $rewardsCart, stripeToken: $stripeToken) {
      id
      isPaid
      closed
      pickupId
      delivery_address
      delivery_lat
      delivery_long
      customerId
      status
      charge_id
      orderItems {
        items {
          itemName
          menuId
          orderId
          quantity
          price_per_item
          price_before_reward
          foodOptionsArray
        }
      }
      pickup {
        id
        delivererId
        transportation_type
        menuId
        closed
        windowEndTime
        windowClosed
        isPickedUp
        status
        deliverer {
          email
          name
          phone_number
        }
      }
      customer {
        email
        name
        phone_number
      }
    }
  }
`;

export const closeOrder = /* GraphQL */ `
  mutation CloseOrder($id: ID!) {
    closeOrder(id: $id) {
      id
      actual_delivery_time
      charge_id
      closed
      comment
      customerId
      delivery_address
      delivery_lat
      delivery_long
      discount
      estimated_delivery_time
      fees
      food_ready_time
      grandTotal
      isPaid
      order_price_after_discount
      order_price_before_discount
      pickupId
      status
      tax
      tip
      restaurant {
        name
      }
    }
  }
`;

export const acceptOrder = /* GraphQL */ `
  mutation AcceptOrder($id: ID!) {
    acceptOrder(id: $id) {
      actual_delivery_time
      closed
      comment
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
    }
  }
`;

export const declineOrder = /* GraphQL */ `
  mutation DeclineOrder($id: ID!) {
    declineOrder(id: $id) {
      actual_delivery_time
      closed
      comment
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
    }
  }
`;

export const markPickupPickedUp = /* GraphQL */ `
  mutation MarkPickupPickedUp($id: ID!) {
    markPickupPickedUp(id: $id) {
      apiResponse
      closed
      delivererId
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
  }
`;

export const markOrderDelivered = /* GraphQL */ `
  mutation MarkOrderDelivered($id: ID!) {
    markOrderDelivered(id: $id) {
      actual_delivery_time
      closed
      comment
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
    }
  }
`;

export const cancelOrder = /* GraphQL */ `
  mutation CancelOrder($id: ID!) {
    cancelOrder(id: $id) {
      actual_delivery_time
      closed
      comment
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
    }
  }
`;

export const createReferral = /* GraphQL */ `
  mutation CreateReferral($referrerUserId: AWSEmail!) {
    createReferral(referrerUserId: $referrerUserId) {
      code
      referrerUserId
    }
  }
`;

export const updatePfp = /* GraphQL */ `
  mutation UpdatePfp($email: AWSEmail!, $pfp: String!) {
    updatePfp(email: $email, pfp: $pfp) {
      name
      email
      phone_number
      pfp
    }
  }
`;

export const updateDeviceToken = /* GraphQL */ `
  mutation UpdateDeviceToken($email: AWSEmail!, $deviceToken: String!) {
    updateDeviceToken(email: $email, deviceToken: $deviceToken) {
      name
      email
      phone_number
    }
  }
`;

export const createFeedback = /* GraphQL */ `
  mutation CreateFeedback($userEmail: AWSEmail!, $feedback: String!) {
    createFeedback(userEmail: $userEmail, feedback: $feedback) {
      userEmail
      feedback
    }
  }
`;

export const updatePlatform = /* GraphQL */ `
  mutation UpdateDeviceToken($email: AWSEmail!, $platform: String!) {
    updatePlatform(email: $email, platform: $platform) {
      name
      email
      phone_number
    }
  }
`;

export const createRestaurant = /* GraphQL */ `
  mutation CreateRestaurant($name: String!, $email: AWSEmail!, $address: String, $city: String, $description: String, $lat: Float, $long: Float, $phone_number: AWSPhone, $state: String, $zip_code: String) {
    createRestaurant(name: $name, email: $email, address: $address, city: $city, description: $description, lat: $lat, long: $long, phone_number: $phone_number, state: $state, zip_code: $zip_code) {
      id
      name
      email
      address
      city
      description
      lat
      long
      phone_number
      state
      zip_code
      createdAt
      updatedAt
    }
  }
`;

export const createMenuCategory = /* GraphQL */ `
  mutation CreateMenuCategory($name: String!, $menuId: ID!) {
    createMenuCategory(name: $name, menuId: $menuId) {
      id
      name
      menuId
      createdAt
      updatedAt
    }
  }
`;

export const createToppings = /* GraphQL */ `
  mutation CreateToppings($id: ID!, $selectedMenuItemToppings: AWSJSON!, $selectedMenuItemOptions: AWSJSON!, $menuItem: AWSJSON!, $selectedMenuItemExistingToppings: AWSJSON!) {
    createToppings(id: $id, selectedMenuItemToppings: $selectedMenuItemToppings, selectedMenuItemOptions: $selectedMenuItemOptions, menuItem: $menuItem, selectedMenuItemExistingToppings: $selectedMenuItemExistingToppings) {
      id
    }
  }
`;

export const createMenuItem = /* GraphQL */ `
  mutation CreateMenuItem($menuId: ID!, $menuCategoryName: String!, $name: String!, $description: String!, $price: Float!) {
    createMenuItem(menuId: $menuId, menuCategoryName: $menuCategoryName, name: $name, description: $description, price: $price) {
      id
      menuId
      menuCategoryName
      name
      description
      price
      createdAt
      updatedAt
    }
  }
`;

export const updateMenuItem = /* GraphQL */ `
  mutation UpdateMenuItem($menuId: ID!, $id: ID!, $itemName: String!, $name: String!, $description: String!, $price: Float!) {
    updateMenuItem(menuId: $menuId, id: $id, itemName: $itemName, name: $name, description: $description, price: $price) {
      id
      itemName
      menuId
      points
      description
      price
      updatedAt
    }
  }
`;

export const createVendorReward = /* GraphQL */ `
  mutation CreateVendorReward($menuId: ID!, $itemName: String!, $points: Int!, $date_active_from: AWSDate, $date_active_to: AWSDate, $discountAmount: Float, $discountPercentage: Float, description: $String!) {
    createVendorReward(menuId: $menuId, itemName: $itemName, points: $points, date_active_from: $date_active_from, date_active_to: $date_active_to, discountAmount: $discountAmount, discountPercentage: $discountPercentage, description: $description) {
      id
      itemName
      menuId
      points
      date_active_from
      date_active_to
      discountAmount
      discountPercentage
      description
      createdAt
      updatedAt
    }
  }
`;

export const updateVendorReward = /* GraphQL */ `
  mutation UpdateVendorReward($menuId: ID!, $id: ID!, $itemName: String!, $points: Int!, $description: String!) {
    updateVendorReward(menuId: $menuId, id: $id, itemName: $itemName, points: $points, description: $description) {
      id
      menuId
      itemName
      points
      description
      updatedAt
    }
  }
`;

export const deleteVendorReward = /* GraphQL */ `
  mutation DeleteVendorReward($id: ID!) {
    deleteVendorReward(id: $id) {
      id
    }
  }
`;

export const updateRestaurant = /* GraphQL */ `
  mutation UpdateRestaurant($id: ID!, $input: UpdateRestaurantInput!) {
    updateRestaurant(id: $id, input: $input) {
      id
      name
      description
      email
      address
      city
      state
      zip_code
      restaurantOwnerName
      sundayHours
      mondayHours
      tuesdayHours
      wednesdayHours
      thursdayHours
      fridayHours
      saturdayHours
      sundayHours
      isOpen
    }
  }
`;

export const updateFoodReady = /* GraphQL */ `
  mutation UpdateFoodReady($id: ID!, $food_ready_time: AWSTimestamp!) {
    updateFoodReady(id: $id, food_ready_time: $food_ready_time) {
      id
      food_ready_time
    }
  }
`;

export const deleteMenuItem = /* GraphQL */ `
  mutation DeleteMenuItem($id: ID!) {
    deleteMenuItem(id: $id) {
      id
    }
  }
`;