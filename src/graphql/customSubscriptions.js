export const onUpdateDriverLocation = /* GraphQL */ `
  subscription OnUpdateDriverLocation {
    onUpdateDriverLocation {
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
      deliverer {
        pk
        sk
        name
        phoneNumber
        pfp
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
            pk
            sk
            name
            phoneNumber
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