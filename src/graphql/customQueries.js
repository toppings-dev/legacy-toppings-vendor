import { gql } from '@apollo/client';

export const LIST_PARTIES_BY_RESTAURANT = gql`
  query ListPartiesByRestaurant($restaurantId: String!) {
    listPartiesByRestaurant(restaurantId: $restaurantId) {
      id
      windowOpenTime
      windowCloseTime
      dropoffLocations
      isPublic
      usersOpenTo {
        id
        name
        pfp
        username
        phoneNumber
      }
      groupsOpenTo {
        id
        name
        image
      }
      isClaimed
      deliverer {
        id
        name
        pfp
        username
        phoneNumber
      }
      status
      estimatedDeliveryTimeWindow {
        begin
        end
      }
      restaurantFinishedPreparingTimeWindow {
        begin
        end
      }
      restaurantFinishedPreparingMinutes
      maxOrders
      totalCost
      orders {
        id
        customer {
          id
          name
          pfp
          phoneNumber
          username
        }
        deliverer {
          id
          name
          pfp
          phoneNumber
          username
        }
        items {
          id
          menuItemId
          name
          priceBeforeDiscount
          price
          points
          boughtWithPoints
          isReward
          description
          comment
          quantity
          foodOptions {
            name
            options {
              name
            }
          }
        }
        restaurant {
          id
          name
          thumbnail
          averagePickupTime {
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
        priceBeforeDiscount
        priceAfterDiscount
        discount
        tax
        tip
        totalPrice
        isPaid
        status
        comment
        orderSentTime
        dropoffLocation
      }
      restaurant {
        id
        name
        thumbnail
        averagePickupTime {
          begin
          end
        }
      }
    }
  }
`;

export const LIST_ORDERS_BY_RESTAURANT = gql`
  query ListOrdersByRestaurant($restaurantId: String!) {
    listOrdersByRestaurant(restaurantId: $restaurantId) {
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
      items {
        name
        price
        points
        boughtWithPoints
        isReward
        description
        comment
        quantity
        foodOptions {
          name
          options {
            name
          }
        }
      }
      customer {
        id
        pfp
        name
        phoneNumber
        username
      }
      deliverer {
        id
        pfp
        name
        phoneNumber
        username
      }
      restaurant {
        id
        name
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
      priceBeforeDiscount
      priceAfterDiscount
      discount
      tax
      tip
      totalPrice
      isPaid
      status
      comment
      orderSentTime
    }
  }
`;

export const GET_RESTAURANT_BY_OWNER = gql`
  query GetRestaurantByOwner {
    getRestaurantByOwner {
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
      menu {
        name
        menuItems {
          name
          description
          price
          points
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
      rewardItems {
        name
        description
        price
        points
        numOrders
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
  query ListActiveOrdersByCustomer($customerId: String!) {
    listActiveOrdersByCustomer(customerId: $customerId) {
      id
      status
      pickupId
      pickup {
        id
        delivererId
        deliverer
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
  query ListOpenPickups($userId: String!) {
    listOpenPickups(userId: $userId) {
      id
      delivererId
      deliverer
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
        userId
        fridayHours
        id
        isOpen
        lat
        long
        mondayHours
        name
        phoneNumber
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
        deliverer
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
      customer
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
  query GetReward($menuId: ID!, $userId: String!) {
    getRewardInfo(menuId: $menuId, userId: $userId) {
      id
      menuId
      points
      userId
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

export const listRestaurantsInfo = /* GraphQL */ `
  query ListRestaurants {
    listRestaurantsInfo {
      address
      city
      description
      userId
      fridayHours
      id
      isOpen
      lat
      long
      mondayHours
      name
      phoneNumber
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
  query GetPickup($delivererId: String!) {
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
      deliverer
      usersOpenTo
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
          tip
          order_price_before_discount
          order_price_after_discount
          discount
          customer
          comment
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
        userId
        fridayHours
        id
        isOpen
        lat
        long
        mondayHours
        name
        phoneNumber
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
  query GetUserInfo($userId: String!) {
    getUserInfo(userId: $userId) {
      pk
      sk
      name
      phoneNumber
      pfp
      referralCode
      referredUsers {
        pk
        sk
        name
        phoneNumber
        pfp
      }
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
      customer
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
        deliverer
      }
      restaurant
    }
  }
`;

export const getRestaurantByOwner = /* GraphQL */ `
  query GetRestaurantByOwner($userId: String!) {
    getRestaurantByOwner(userId: $userId) {
      address
      city
      createdAt
      description
      userId
      fridayHours
      id
      isOpen
      lat
      long
      mondayHours
      name
      phoneNumber
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

export const getFeed = /* GraphQL */ gql`
  query GetFeed {
    getFeed {
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
        name
      }
      numComments
    }
  }
`;

export const listUsers = /* GraphQL */ `
  query ListUsers {
    listUsers {
      pk
      sk
      name
      phoneNumber
      pfp
      cognitoId
    }
  }
`;

export const getIncomingFriendRequests = /* GraphQL */ gql`
  query GetIncomingFriendRequests {
    getIncomingFriendRequests {
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

export const getFriendsFriends = /* GraphQL */ gql`
  query GetFriendsFriends {
    getFriendsFriends {
      pk
      sk
      name
      cognitoId
      phoneNumber
      pfp
    }
  }
`;

export const getOutgoingFriendRequests = /* GraphQL */ gql`
  query GetOutgoingFriendRequests {
    getOutgoingFriendRequests {
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

export const getFriends = /* GraphQL */ gql`
  query GetFriends {
    getFriends {
      pk
      sk
      friends {
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

export const listRestaurants = gql`
  query ListRestaurants {
    listRestaurants {
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
    }
  }
`;

export const getRestaurant = gql`
  query GetRestaurant($restaurantId: String!) {
    getRestaurant(restaurantId: $restaurantId) {
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

export const getVendor = gql`
  query GetVendor {
    getVendor {
      pk
      sk
      cognitoId
      name
      email
      phoneNumber
      restaurant {
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
  }
`;