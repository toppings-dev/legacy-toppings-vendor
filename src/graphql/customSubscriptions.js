export const onUpdateDriverLocation = /* GraphQL */ `
  subscription OnUpdateDriverLocation {
    onUpdateDriverLocation {
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

export const onCreateNewOrder = /* GraphQL */ `
  subscription OnCreateNewOrder {
    onCreateNewOrder {
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

export const onCreateNewPickup = /* GraphQL */ `
  subscription OnCreateNewPickup {
    onCreateNewPickup {
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