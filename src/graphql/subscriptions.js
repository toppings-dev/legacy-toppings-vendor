/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUniversity = /* GraphQL */ `
  subscription OnCreateUniversity {
    onCreateUniversity {
      name
      address
      zip_code
      city
      state
      students {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUniversity = /* GraphQL */ `
  subscription OnUpdateUniversity {
    onUpdateUniversity {
      name
      address
      zip_code
      city
      state
      students {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUniversity = /* GraphQL */ `
  subscription OnDeleteUniversity {
    onDeleteUniversity {
      name
      address
      zip_code
      city
      state
      students {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      email
      university_name
      university {
        name
        address
        zip_code
        city
        state
        createdAt
        updatedAt
      }
      phone_number
      name
      rewards {
        nextToken
      }
      friends {
        nextToken
      }
      incomingFriendRequest {
        nextToken
      }
      outgoingFriendRequest {
        nextToken
      }
      groups {
        nextToken
      }
      incomingGroupRequest {
        nextToken
      }
      outgoingGroupRequest {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      email
      university_name
      university {
        name
        address
        zip_code
        city
        state
        createdAt
        updatedAt
      }
      phone_number
      name
      rewards {
        nextToken
      }
      friends {
        nextToken
      }
      incomingFriendRequest {
        nextToken
      }
      outgoingFriendRequest {
        nextToken
      }
      groups {
        nextToken
      }
      incomingGroupRequest {
        nextToken
      }
      outgoingGroupRequest {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      email
      university_name
      university {
        name
        address
        zip_code
        city
        state
        createdAt
        updatedAt
      }
      phone_number
      name
      rewards {
        nextToken
      }
      friends {
        nextToken
      }
      incomingFriendRequest {
        nextToken
      }
      outgoingFriendRequest {
        nextToken
      }
      groups {
        nextToken
      }
      incomingGroupRequest {
        nextToken
      }
      outgoingGroupRequest {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup {
    onCreateGroup {
      id
      name
      members {
        nextToken
      }
      outgoingRequests {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup {
    onUpdateGroup {
      id
      name
      members {
        nextToken
      }
      outgoingRequests {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup {
    onDeleteGroup {
      id
      name
      members {
        nextToken
      }
      outgoingRequests {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGroupMembership = /* GraphQL */ `
  subscription OnCreateGroupMembership {
    onCreateGroupMembership {
      id
      userEmail
      user {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      groupId
      group {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGroupMembership = /* GraphQL */ `
  subscription OnUpdateGroupMembership {
    onUpdateGroupMembership {
      id
      userEmail
      user {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      groupId
      group {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGroupMembership = /* GraphQL */ `
  subscription OnDeleteGroupMembership {
    onDeleteGroupMembership {
      id
      userEmail
      user {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      groupId
      group {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFriendship = /* GraphQL */ `
  subscription OnCreateFriendship {
    onCreateFriendship {
      id
      userEmail
      friendEmail
      user {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      friend {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFriendship = /* GraphQL */ `
  subscription OnUpdateFriendship {
    onUpdateFriendship {
      id
      userEmail
      friendEmail
      user {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      friend {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFriendship = /* GraphQL */ `
  subscription OnDeleteFriendship {
    onDeleteFriendship {
      id
      userEmail
      friendEmail
      user {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      friend {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFriendRequest = /* GraphQL */ `
  subscription OnCreateFriendRequest {
    onCreateFriendRequest {
      id
      senderEmail
      receiverEmail
      sender {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      receiver {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      accepted
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFriendRequest = /* GraphQL */ `
  subscription OnUpdateFriendRequest {
    onUpdateFriendRequest {
      id
      senderEmail
      receiverEmail
      sender {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      receiver {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      accepted
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFriendRequest = /* GraphQL */ `
  subscription OnDeleteFriendRequest {
    onDeleteFriendRequest {
      id
      senderEmail
      receiverEmail
      sender {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      receiver {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      accepted
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGroupRequest = /* GraphQL */ `
  subscription OnCreateGroupRequest {
    onCreateGroupRequest {
      id
      senderEmail
      receiverEmail
      groupId
      group {
        id
        name
        createdAt
        updatedAt
      }
      sender {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      receiver {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      accepted
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGroupRequest = /* GraphQL */ `
  subscription OnUpdateGroupRequest {
    onUpdateGroupRequest {
      id
      senderEmail
      receiverEmail
      groupId
      group {
        id
        name
        createdAt
        updatedAt
      }
      sender {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      receiver {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      accepted
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGroupRequest = /* GraphQL */ `
  subscription OnDeleteGroupRequest {
    onDeleteGroupRequest {
      id
      senderEmail
      receiverEmail
      groupId
      group {
        id
        name
        createdAt
        updatedAt
      }
      sender {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      receiver {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      accepted
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRestauraunt = /* GraphQL */ `
  subscription OnCreateRestauraunt {
    onCreateRestauraunt {
      id
      name
      menuCategories {
        nextToken
      }
      menuItems {
        nextToken
      }
      foodOptions {
        nextToken
      }
      joinedItemsOptions {
        nextToken
      }
      options {
        nextToken
      }
      joinedItemOptionsOptions {
        nextToken
      }
      description
      address
      zip_code
      city
      state
      lat
      long
      phone_number
      email
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRestauraunt = /* GraphQL */ `
  subscription OnUpdateRestauraunt {
    onUpdateRestauraunt {
      id
      name
      menuCategories {
        nextToken
      }
      menuItems {
        nextToken
      }
      foodOptions {
        nextToken
      }
      joinedItemsOptions {
        nextToken
      }
      options {
        nextToken
      }
      joinedItemOptionsOptions {
        nextToken
      }
      description
      address
      zip_code
      city
      state
      lat
      long
      phone_number
      email
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRestauraunt = /* GraphQL */ `
  subscription OnDeleteRestauraunt {
    onDeleteRestauraunt {
      id
      name
      menuCategories {
        nextToken
      }
      menuItems {
        nextToken
      }
      foodOptions {
        nextToken
      }
      joinedItemsOptions {
        nextToken
      }
      options {
        nextToken
      }
      joinedItemOptionsOptions {
        nextToken
      }
      description
      address
      zip_code
      city
      state
      lat
      long
      phone_number
      email
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMenuCategory = /* GraphQL */ `
  subscription OnCreateMenuCategory {
    onCreateMenuCategory {
      id
      name
      menuId
      restauraunt {
        id
        name
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        createdAt
        updatedAt
      }
      menuItems {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMenuCategory = /* GraphQL */ `
  subscription OnUpdateMenuCategory {
    onUpdateMenuCategory {
      id
      name
      menuId
      restauraunt {
        id
        name
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        createdAt
        updatedAt
      }
      menuItems {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMenuCategory = /* GraphQL */ `
  subscription OnDeleteMenuCategory {
    onDeleteMenuCategory {
      id
      name
      menuId
      restauraunt {
        id
        name
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        createdAt
        updatedAt
      }
      menuItems {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMenuItem = /* GraphQL */ `
  subscription OnCreateMenuItem {
    onCreateMenuItem {
      id
      name
      description
      menuId
      restauraunt {
        id
        name
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        createdAt
        updatedAt
      }
      menuCategoryName
      menuCategory {
        nextToken
      }
      price
      options {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMenuItem = /* GraphQL */ `
  subscription OnUpdateMenuItem {
    onUpdateMenuItem {
      id
      name
      description
      menuId
      restauraunt {
        id
        name
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        createdAt
        updatedAt
      }
      menuCategoryName
      menuCategory {
        nextToken
      }
      price
      options {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMenuItem = /* GraphQL */ `
  subscription OnDeleteMenuItem {
    onDeleteMenuItem {
      id
      name
      description
      menuId
      restauraunt {
        id
        name
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        createdAt
        updatedAt
      }
      menuCategoryName
      menuCategory {
        nextToken
      }
      price
      options {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFoodOption = /* GraphQL */ `
  subscription OnCreateFoodOption {
    onCreateFoodOption {
      name
      menuId
      restauraunt {
        id
        name
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        createdAt
        updatedAt
      }
      menuItem {
        nextToken
      }
      options {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFoodOption = /* GraphQL */ `
  subscription OnUpdateFoodOption {
    onUpdateFoodOption {
      name
      menuId
      restauraunt {
        id
        name
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        createdAt
        updatedAt
      }
      menuItem {
        nextToken
      }
      options {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFoodOption = /* GraphQL */ `
  subscription OnDeleteFoodOption {
    onDeleteFoodOption {
      name
      menuId
      restauraunt {
        id
        name
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        createdAt
        updatedAt
      }
      menuItem {
        nextToken
      }
      options {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateItemOptionCatJoin = /* GraphQL */ `
  subscription OnCreateItemOptionCatJoin {
    onCreateItemOptionCatJoin {
      id
      menuId
      restauraunt {
        id
        name
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        createdAt
        updatedAt
      }
      foodOptionName
      menuItemName
      menuItem {
        nextToken
      }
      optionCat {
        name
        menuId
        createdAt
        updatedAt
      }
      numchoices
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateItemOptionCatJoin = /* GraphQL */ `
  subscription OnUpdateItemOptionCatJoin {
    onUpdateItemOptionCatJoin {
      id
      menuId
      restauraunt {
        id
        name
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        createdAt
        updatedAt
      }
      foodOptionName
      menuItemName
      menuItem {
        nextToken
      }
      optionCat {
        name
        menuId
        createdAt
        updatedAt
      }
      numchoices
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteItemOptionCatJoin = /* GraphQL */ `
  subscription OnDeleteItemOptionCatJoin {
    onDeleteItemOptionCatJoin {
      id
      menuId
      restauraunt {
        id
        name
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        createdAt
        updatedAt
      }
      foodOptionName
      menuItemName
      menuItem {
        nextToken
      }
      optionCat {
        name
        menuId
        createdAt
        updatedAt
      }
      numchoices
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOption = /* GraphQL */ `
  subscription OnCreateOption {
    onCreateOption {
      menuId
      restauraunt {
        id
        name
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        createdAt
        updatedAt
      }
      name
      price
      foodoption {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOption = /* GraphQL */ `
  subscription OnUpdateOption {
    onUpdateOption {
      menuId
      restauraunt {
        id
        name
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        createdAt
        updatedAt
      }
      name
      price
      foodoption {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOption = /* GraphQL */ `
  subscription OnDeleteOption {
    onDeleteOption {
      menuId
      restauraunt {
        id
        name
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        createdAt
        updatedAt
      }
      name
      price
      foodoption {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateItemOptionOptionJoin = /* GraphQL */ `
  subscription OnCreateItemOptionOptionJoin {
    onCreateItemOptionOptionJoin {
      id
      menuId
      restauraunt {
        id
        name
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        createdAt
        updatedAt
      }
      optionName
      foodOptionName
      foodOption {
        name
        menuId
        createdAt
        updatedAt
      }
      option {
        menuId
        name
        price
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateItemOptionOptionJoin = /* GraphQL */ `
  subscription OnUpdateItemOptionOptionJoin {
    onUpdateItemOptionOptionJoin {
      id
      menuId
      restauraunt {
        id
        name
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        createdAt
        updatedAt
      }
      optionName
      foodOptionName
      foodOption {
        name
        menuId
        createdAt
        updatedAt
      }
      option {
        menuId
        name
        price
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteItemOptionOptionJoin = /* GraphQL */ `
  subscription OnDeleteItemOptionOptionJoin {
    onDeleteItemOptionOptionJoin {
      id
      menuId
      restauraunt {
        id
        name
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        createdAt
        updatedAt
      }
      optionName
      foodOptionName
      foodOption {
        name
        menuId
        createdAt
        updatedAt
      }
      option {
        menuId
        name
        price
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePickup = /* GraphQL */ `
  subscription OnCreatePickup {
    onCreatePickup {
      id
      deliverer {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      orders {
        nextToken
      }
      lat
      long
      expdate
      friends {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      groups {
        id
        name
        createdAt
        updatedAt
      }
      transportation_type
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePickup = /* GraphQL */ `
  subscription OnUpdatePickup {
    onUpdatePickup {
      id
      deliverer {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      orders {
        nextToken
      }
      lat
      long
      expdate
      friends {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      groups {
        id
        name
        createdAt
        updatedAt
      }
      transportation_type
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePickup = /* GraphQL */ `
  subscription OnDeletePickup {
    onDeletePickup {
      id
      deliverer {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      orders {
        nextToken
      }
      lat
      long
      expdate
      friends {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      groups {
        id
        name
        createdAt
        updatedAt
      }
      transportation_type
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      id
      restauraunt {
        id
        name
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        createdAt
        updatedAt
      }
      food_ready_time
      estimated_delivery_time
      actual_delivery_time
      delivery_address
      delivery_lat
      delivery_long
      customer {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      comment
      orderItems {
        nextToken
      }
      order_price_before_discount
      order_price_after_discount
      discount
      tax
      fees
      tip
      grandTotal
      pickupId
      pickup {
        id
        lat
        long
        expdate
        transportation_type
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      id
      restauraunt {
        id
        name
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        createdAt
        updatedAt
      }
      food_ready_time
      estimated_delivery_time
      actual_delivery_time
      delivery_address
      delivery_lat
      delivery_long
      customer {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      comment
      orderItems {
        nextToken
      }
      order_price_before_discount
      order_price_after_discount
      discount
      tax
      fees
      tip
      grandTotal
      pickupId
      pickup {
        id
        lat
        long
        expdate
        transportation_type
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      id
      restauraunt {
        id
        name
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        createdAt
        updatedAt
      }
      food_ready_time
      estimated_delivery_time
      actual_delivery_time
      delivery_address
      delivery_lat
      delivery_long
      customer {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      comment
      orderItems {
        nextToken
      }
      order_price_before_discount
      order_price_after_discount
      discount
      tax
      fees
      tip
      grandTotal
      pickupId
      pickup {
        id
        lat
        long
        expdate
        transportation_type
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateReward = /* GraphQL */ `
  subscription OnCreateReward {
    onCreateReward {
      id
      userEmail
      owner {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      menuId
      itemName
      menuItem {
        nextToken
      }
      date_active_from
      date_active_to
      discountPercentage
      discountAmount
      offer_price
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateReward = /* GraphQL */ `
  subscription OnUpdateReward {
    onUpdateReward {
      id
      userEmail
      owner {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      menuId
      itemName
      menuItem {
        nextToken
      }
      date_active_from
      date_active_to
      discountPercentage
      discountAmount
      offer_price
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteReward = /* GraphQL */ `
  subscription OnDeleteReward {
    onDeleteReward {
      id
      userEmail
      owner {
        email
        university_name
        phone_number
        name
        createdAt
        updatedAt
      }
      menuId
      itemName
      menuItem {
        nextToken
      }
      date_active_from
      date_active_to
      discountPercentage
      discountAmount
      offer_price
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrderItem = /* GraphQL */ `
  subscription OnCreateOrderItem {
    onCreateOrderItem {
      id
      orderId
      menuId
      itemName
      order {
        id
        food_ready_time
        estimated_delivery_time
        actual_delivery_time
        delivery_address
        delivery_lat
        delivery_long
        comment
        order_price_before_discount
        order_price_after_discount
        discount
        tax
        fees
        tip
        grandTotal
        pickupId
        createdAt
        updatedAt
      }
      menuItem {
        nextToken
      }
      price_per_item
      price_before_reward
      price_after_reward
      quantity
      reward {
        id
        userEmail
        menuId
        itemName
        date_active_from
        date_active_to
        discountPercentage
        discountAmount
        offer_price
        createdAt
        updatedAt
      }
      comment
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOrderItem = /* GraphQL */ `
  subscription OnUpdateOrderItem {
    onUpdateOrderItem {
      id
      orderId
      menuId
      itemName
      order {
        id
        food_ready_time
        estimated_delivery_time
        actual_delivery_time
        delivery_address
        delivery_lat
        delivery_long
        comment
        order_price_before_discount
        order_price_after_discount
        discount
        tax
        fees
        tip
        grandTotal
        pickupId
        createdAt
        updatedAt
      }
      menuItem {
        nextToken
      }
      price_per_item
      price_before_reward
      price_after_reward
      quantity
      reward {
        id
        userEmail
        menuId
        itemName
        date_active_from
        date_active_to
        discountPercentage
        discountAmount
        offer_price
        createdAt
        updatedAt
      }
      comment
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOrderItem = /* GraphQL */ `
  subscription OnDeleteOrderItem {
    onDeleteOrderItem {
      id
      orderId
      menuId
      itemName
      order {
        id
        food_ready_time
        estimated_delivery_time
        actual_delivery_time
        delivery_address
        delivery_lat
        delivery_long
        comment
        order_price_before_discount
        order_price_after_discount
        discount
        tax
        fees
        tip
        grandTotal
        pickupId
        createdAt
        updatedAt
      }
      menuItem {
        nextToken
      }
      price_per_item
      price_before_reward
      price_after_reward
      quantity
      reward {
        id
        userEmail
        menuId
        itemName
        date_active_from
        date_active_to
        discountPercentage
        discountAmount
        offer_price
        createdAt
        updatedAt
      }
      comment
      createdAt
      updatedAt
    }
  }
`;
