import { gql } from '@apollo/client';

export const CREATE_RESTAURANT_OWNER = gql`
  mutation CreateRestaurantOwner($restaurantId: String!, $email: String!) {
    createRestaurantOwner(restaurantId: $restaurantId, email: $email) {
      id
      name
      description
      address
      city
      state
      phoneNumber
      emoji
      hours {
        open
        close
      }
      thumbnail
      averagePickupTime {
        begin
        end
      }
      menu {
        name
        menuItems {
          id
          name
          description
          price
          reward {
            points
            discount
            discountText
          }
          numOrders
          image
          foodOptions {
            name
            numChoices
            options {
              name
              price
              points
            }
          }
          itemChoices {
            id
            name
            description
            price
            reward {
              points
              discount
              discountText
            }
            numOrders
            image
            foodOptions {
              name
              numChoices
              options {
                name
                price
                points
              }
            }
          }
        }
      }
    }
  }
`;

export const UPDATE_PARTY_ETA = gql`
  mutation updatePartyETA($partyId: String!, $partyFinishedPreparingMinutes: Int!) {
    updatePartyETA(partyId: $partyId, partyFinishedPreparingMinutes: $partyFinishedPreparingMinutes) {
      id
      estimatedDeliveryTimeWindow {
        begin
        end
      }
      restaurantFinishedPreparingTimeWindow {
        begin
        end
      }
      restaurantFinishedPreparingMinutes
      orders {
        id
        estimatedDeliveryTimeWindow {
          begin
          end
        }
        restaurantFinishedPreparingTimeWindow {
          begin
          end
        }
        restaurantFinishedPreparingMinutes
      }
    }
  }
`;

export const UPDATE_ORDER_ETA = gql`
  mutation UpdateOrderETA($orderId: String!, $partyId: String!, $orderFinishedPreparingMinutes: Int!) {
    updateOrderETA(orderId: $orderId, partyId: $partyId, orderFinishedPreparingMinutes: $orderFinishedPreparingMinutes) {
      id
      party {
        id
        estimatedDeliveryTimeWindow {
          begin
          end
        }
        restaurantFinishedPreparingTimeWindow {
          begin
          end
        } 
      }
      estimatedDeliveryTimeWindow {
        begin
        end
      }
      restaurantFinishedPreparingTimeWindow {
        begin
        end
      }
      restaurantFinishedPreparingMinutes
    }
  }
`;

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
          customer
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
  mutation CreatePickup(
    $cart: AWSJSON!
    $currency: String!
    $delivererId: String!
    $description: String!
    $menuId: ID!
    $rewardsCart: AWSJSON!
    $stripeToken: String!
    $windowOpenTime: Int!
    $usersOpenTo: AWSJSON
    $isPublic: Boolean!
  ) {
    createNewPickup(
      cart: $cart
      currency: $currency
      delivererId: $delivererId
      description: $description
      menuId: $menuId
      rewardsCart: $rewardsCart
      stripeToken: $stripeToken
      windowOpenTime: $windowOpenTime
      isPublic: $isPublic
      usersOpenTo: $usersOpenTo
    ) {
      id
      delivererId
      transportation_type
      menuId
      closed
      windowEndTime
      windowClosed
      isPickedUp
      status
      deliverer
      orders {
        items {
          isPaid
          charge_id
          id
          closed
          pickupId
          customerId
          customer
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
  mutation CreateOrder(
    $cart: AWSJSON!
    $currency: String!
    $customerId: String!
    $comment: String!
    $delivery_address: String!
    $delivery_lat: Float!
    $delivery_long: Float!
    $description: String!
    $orderRestaurantId: ID!
    $pickupId: ID!
    $rewardsCart: AWSJSON!
    $stripeToken: String!
  ) {
    createNewOrder(
      cart: $cart
      currency: $currency
      customerId: $customerId
      comment: $comment
      delivery_address: $delivery_address
      delivery_lat: $delivery_lat
      delivery_long: $delivery_long
      description: $description
      orderRestaurantId: $orderRestaurantId
      pickupId: $pickupId
      rewardsCart: $rewardsCart
      stripeToken: $stripeToken
    ) {
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
      comment
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
        deliverer
      }
      customer
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
      customer
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
      pickup {
        id
        closed
      }
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
  mutation CreateReferral($referrerUserId: String!) {
    createReferral(referrerUserId: $referrerUserId) {
      code
      referrerUserId
    }
  }
`;

export const updatePfp = /* GraphQL */ `
  mutation UpdatePfp($userId: String!, $pfp: String!) {
    updatePfp(userId: $userId, pfp: $pfp) {
      pk
      sk
      name
      phoneNumber
      pfp
    }
  }
`;

export const updateDeviceToken = /* GraphQL */ `
  mutation UpdateDeviceToken($userId: String!, $deviceToken: String!) {
    updateDeviceToken(userId: $userId, deviceToken: $deviceToken) {
      pk
      sk
      name
      phoneNumber
    }
  }
`;

export const createFeedback = /* GraphQL */ `
  mutation CreateFeedback($userId: String!, $feedback: String!) {
    createFeedback(userId: $userId, feedback: $feedback) {
      userId
      feedback
    }
  }
`;

export const updatePlatform = /* GraphQL */ `
  mutation UpdateDeviceToken($userId: String!, $platform: String!) {
    updatePlatform(userId: $userId, platform: $platform) {
      pk
      sk
      name
      phoneNumber
    }
  }
`;

export const createRestaurant = /* GraphQL */ `
  mutation CreateRestaurant(
    $name: String!
    $userId: String!
    $address: String!
    $city: String!
    $description: String!
    $lat: Float!
    $long: Float!
    $phoneNumber: AWSPhone!
    $state: String!
    $zip_code: String!
  ) {
    createRestaurant(
      name: $name
      userId: $userId
      address: $address
      city: $city
      description: $description
      lat: $lat
      long: $long
      phoneNumber: $phoneNumber
      state: $state
      zip_code: $zip_code
    ) {
      id
      name
      userId
      address
      city
      description
      lat
      long
      phoneNumber
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
  mutation CreateToppings(
    $id: ID!
    $selectedMenuItemToppings: AWSJSON!
    $selectedMenuItemOptions: AWSJSON!
    $menuItem: AWSJSON!
    $selectedMenuItemExistingToppings: AWSJSON!
  ) {
    createToppings(
      id: $id
      selectedMenuItemToppings: $selectedMenuItemToppings
      selectedMenuItemOptions: $selectedMenuItemOptions
      menuItem: $menuItem
      selectedMenuItemExistingToppings: $selectedMenuItemExistingToppings
    ) {
      id
    }
  }
`;

export const createMenuItem = /* GraphQL */ `
  mutation CreateMenuItem(
    $menuId: ID!
    $menuCategoryName: String!
    $name: String!
    $description: String!
    $price: Float!
  ) {
    createMenuItem(
      menuId: $menuId
      menuCategoryName: $menuCategoryName
      name: $name
      description: $description
      price: $price
    ) {
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
  mutation UpdateMenuItem(
    $menuId: ID!
    $id: ID!
    $menuCategoryName: String!
    $name: String!
    $description: String!
    $price: Float!
  ) {
    updateMenuItem(
      menuId: $menuId
      id: $id
      menuCategoryName: $menuCategoryName
      name: $name
      description: $description
      price: $price
    ) {
      id
      menuCategoryName
      name
      menuId
      description
      price
      updatedAt
    }
  }
`;

export const createVendorReward = /* GraphQL */ `
  mutation CreateVendorReward($menuId: ID!, $itemName: String!, $points: Int!, $date_active_from: AWSDate, $date_active_to: AWSDate, $discountAmount: Float, $discountPercentage: Float, $description: $String!) {
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

export const updateRestaurant = /* GraphQL */ gql`
  mutation UpdateRestaurant($id: String!, $input: UpdateRestaurantInput!) {
    updateRestaurant(id: $id, input: $input) {
      pk
      sk
      name
      description
      address
      lat
      long
      phoneNumber
      ownerId
      ownerName
      hours
      thumbnail
      menu {
        name
        menuItems {
          name
          description
          price
          points
          foodOptions {
            name
            numChoices
            options {
              name
              price
              points
            }
          }
        }
      }
      rewardItems {
        name
        description
        price
        points
        foodOptions {
          name
          numChoices
          options {
            name
            price
            points
          }
        }
      }
    }
  }
`;

export const updateFoodReady = /* GraphQL */ `
  mutation UpdateFoodReadyTime($id: ID!, $food_ready_time: AWSTimestamp!) {
    updateFoodReadyTime(id: $id, food_ready_time: $food_ready_time) {
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

export const likeFeedItem = /* GraphQL */ gql`
  mutation LikeFeedItem($feedItemPk: String!, $feedItemSk: String!) {
    likeFeedItem(feedItemPk: $feedItemPk, feedItemSk: $feedItemSk) {
      pk
      sk
      createdAt
      content {
        ordererName
        delivererName
        delivererPfp
        restaurantName
        restaurantImage
      }
      reactions {
        reactionType
        userId
      }
      numComments
    }
  }
`;

export const acceptFriendRequest = /* GraphQL */ gql`
  mutation AcceptFriendRequest($senderId: String!) {
    acceptFriendRequest(senderId: $senderId) {
      pk
      sk
      friends {
        pk
        sk
        pfp
        name
        phoneNumber
        cognitoId
      }
    }
  }
`;

export const declineFriendRequest = /* GraphQL */ gql`
  mutation DeclineFriendRequest($senderId: String!) {
    declineFriendRequest(senderId: $senderId) {
      pk
      sk
      status
      user {
        pk
        sk
        phoneNumber
        name
        pfp
        cognitoId
      }
    }
  }
`;

export const createFriendRequest = /* GraphQL */ gql`
  mutation CreateFriendRequest($userId: String!) {
    createFriendRequest(userId: $userId) {
      pk
      sk
      status
      user {
        pk
        sk
        name
        pfp
        cognitoId
        phoneNumber
      }
    }
  }
`;

export const deleteFriend = /* GraphQL */ gql`
  mutation DeleteFriend($deleteId: String!) {
    deleteFriend(deleteId: $deleteId) {
      pk
      sk
      friends {
        pk
        sk
        pfp
        name
        phoneNumber
        cognitoId
      }
    }
  }
`;

export const updateUserAttributes = /* GraphQL */ gql`
  mutation UpdateUserAttributes($name: String!) {
    updateUserAttributes(name: $name) {
      pk
      sk
      name
    }
  }
`;

export const updateReferralCode = /* GraphQL */ gql`
  mutation UpdateReferralCode($referralCode: String!) {
    updateReferralCode(referralCode: $referralCode) {
      pk
      sk
      cognitoId
      name
      referrer {
        pk
        sk
        name
        cognitoId
      }
    }
  }
`;

export const createReferralReward = /* GraphQL */ `
  mutation CreateReferralReward($menuId: ID!, $isReferred: Boolean!) {
    createReferralReward(menuId: $menuId, isReferred: $isReferred) {
      id
      userId
      menuId
      points
    }
  }
`;