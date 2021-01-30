/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUniversity = /* GraphQL */ `
  query GetUniversity($name: String!) {
    getUniversity(name: $name) {
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
export const listUniversitys = /* GraphQL */ `
  query ListUniversitys(
    $name: String
    $filter: ModelUniversityFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUniversitys(
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        name
        address
        zip_code
        city
        state
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($email: AWSEmail!) {
    getUser(email: $email) {
      email
      university {
        name
        address
        zip_code
        city
        state
        createdAt
        updatedAt
      }
      name
      restuaraunt {
        nextToken
      }
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $email: AWSEmail
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        email
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
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
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGroupMembership = /* GraphQL */ `
  query GetGroupMembership($id: ID!) {
    getGroupMembership(id: $id) {
      id
      userEmail
      user {
        email
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
export const listGroupMemberships = /* GraphQL */ `
  query ListGroupMemberships(
    $filter: ModelGroupMembershipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupMemberships(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userEmail
        groupId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFriendship = /* GraphQL */ `
  query GetFriendship($id: ID!) {
    getFriendship(id: $id) {
      id
      userEmail
      friendEmail
      user {
        email
        name
        createdAt
        updatedAt
      }
      friend {
        email
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFriendships = /* GraphQL */ `
  query ListFriendships(
    $filter: ModelFriendshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFriendships(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userEmail
        friendEmail
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFriendRequest = /* GraphQL */ `
  query GetFriendRequest($id: ID!) {
    getFriendRequest(id: $id) {
      id
      senderEmail
      receiverEmail
      sender {
        email
        name
        createdAt
        updatedAt
      }
      receiver {
        email
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
export const listFriendRequests = /* GraphQL */ `
  query ListFriendRequests(
    $filter: ModelFriendRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFriendRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        senderEmail
        receiverEmail
        accepted
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGroupRequest = /* GraphQL */ `
  query GetGroupRequest($id: ID!) {
    getGroupRequest(id: $id) {
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
        name
        createdAt
        updatedAt
      }
      receiver {
        email
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
export const listGroupRequests = /* GraphQL */ `
  query ListGroupRequests(
    $filter: ModelGroupRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        senderEmail
        receiverEmail
        groupId
        accepted
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRestauraunt = /* GraphQL */ `
  query GetRestauraunt($id: ID!) {
    getRestauraunt(id: $id) {
      id
      name
      owner {
        email
        name
        createdAt
        updatedAt
      }
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
export const listRestauraunts = /* GraphQL */ `
  query ListRestauraunts(
    $filter: ModelRestaurauntFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRestauraunts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMenuCategory = /* GraphQL */ `
  query GetMenuCategory($id: ID!) {
    getMenuCategory(id: $id) {
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
export const listMenuCategorys = /* GraphQL */ `
  query ListMenuCategorys(
    $filter: ModelMenuCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenuCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        menuId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMenuItem = /* GraphQL */ `
  query GetMenuItem($id: ID!) {
    getMenuItem(id: $id) {
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
export const listMenuItems = /* GraphQL */ `
  query ListMenuItems(
    $filter: ModelMenuItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenuItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        menuId
        menuCategoryName
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFoodOption = /* GraphQL */ `
  query GetFoodOption($menuId: ID!, $name: String!) {
    getFoodOption(menuId: $menuId, name: $name) {
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
export const listFoodOptions = /* GraphQL */ `
  query ListFoodOptions(
    $menuId: ID
    $name: ModelStringKeyConditionInput
    $filter: ModelFoodOptionFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listFoodOptions(
      menuId: $menuId
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        name
        menuId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getItemOptionCatJoin = /* GraphQL */ `
  query GetItemOptionCatJoin($id: ID!) {
    getItemOptionCatJoin(id: $id) {
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
export const listItemOptionCatJoins = /* GraphQL */ `
  query ListItemOptionCatJoins(
    $filter: ModelItemOptionCatJoinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItemOptionCatJoins(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        menuId
        foodOptionName
        menuItemName
        numchoices
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOption = /* GraphQL */ `
  query GetOption($menuId: ID!, $name: String!) {
    getOption(menuId: $menuId, name: $name) {
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
export const listOptions = /* GraphQL */ `
  query ListOptions(
    $menuId: ID
    $name: ModelStringKeyConditionInput
    $filter: ModelOptionFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOptions(
      menuId: $menuId
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        menuId
        name
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getItemOptionOptionJoin = /* GraphQL */ `
  query GetItemOptionOptionJoin($id: ID!) {
    getItemOptionOptionJoin(id: $id) {
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
export const listItemOptionOptionJoins = /* GraphQL */ `
  query ListItemOptionOptionJoins(
    $filter: ModelItemOptionOptionJoinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItemOptionOptionJoins(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        menuId
        optionName
        foodOptionName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPickup = /* GraphQL */ `
  query GetPickup($id: ID!) {
    getPickup(id: $id) {
      id
      deliverer {
        email
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
export const listPickups = /* GraphQL */ `
  query ListPickups(
    $filter: ModelPickupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPickups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lat
        long
        expdate
        transportation_type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getReward = /* GraphQL */ `
  query GetReward($id: ID!) {
    getReward(id: $id) {
      id
      userEmail
      owner {
        email
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
export const listRewards = /* GraphQL */ `
  query ListRewards(
    $filter: ModelRewardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRewards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getOrderItem = /* GraphQL */ `
  query GetOrderItem($id: ID!) {
    getOrderItem(id: $id) {
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
export const listOrderItems = /* GraphQL */ `
  query ListOrderItems(
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        orderId
        menuId
        itemName
        price_per_item
        price_before_reward
        price_after_reward
        quantity
        comment
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const categoriesByMenu = /* GraphQL */ `
  query CategoriesByMenu(
    $menuId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelMenuCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    categoriesByMenu(
      menuId: $menuId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        menuId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const itemsByCategories = /* GraphQL */ `
  query ItemsByCategories(
    $menuId: ID
    $menuCategoryName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMenuItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    itemsByCategories(
      menuId: $menuId
      menuCategoryName: $menuCategoryName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        menuId
        menuCategoryName
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
