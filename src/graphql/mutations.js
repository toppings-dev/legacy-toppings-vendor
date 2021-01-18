/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUniversity = /* GraphQL */ `
  mutation CreateUniversity(
    $input: CreateUniversityInput!
    $condition: ModelUniversityConditionInput
  ) {
    createUniversity(input: $input, condition: $condition) {
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
export const updateUniversity = /* GraphQL */ `
  mutation UpdateUniversity(
    $input: UpdateUniversityInput!
    $condition: ModelUniversityConditionInput
  ) {
    updateUniversity(input: $input, condition: $condition) {
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
export const deleteUniversity = /* GraphQL */ `
  mutation DeleteUniversity(
    $input: DeleteUniversityInput!
    $condition: ModelUniversityConditionInput
  ) {
    deleteUniversity(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
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
export const createGroupMembership = /* GraphQL */ `
  mutation CreateGroupMembership(
    $input: CreateGroupMembershipInput!
    $condition: ModelGroupMembershipConditionInput
  ) {
    createGroupMembership(input: $input, condition: $condition) {
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
export const updateGroupMembership = /* GraphQL */ `
  mutation UpdateGroupMembership(
    $input: UpdateGroupMembershipInput!
    $condition: ModelGroupMembershipConditionInput
  ) {
    updateGroupMembership(input: $input, condition: $condition) {
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
export const deleteGroupMembership = /* GraphQL */ `
  mutation DeleteGroupMembership(
    $input: DeleteGroupMembershipInput!
    $condition: ModelGroupMembershipConditionInput
  ) {
    deleteGroupMembership(input: $input, condition: $condition) {
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
export const createFriendship = /* GraphQL */ `
  mutation CreateFriendship(
    $input: CreateFriendshipInput!
    $condition: ModelFriendshipConditionInput
  ) {
    createFriendship(input: $input, condition: $condition) {
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
export const updateFriendship = /* GraphQL */ `
  mutation UpdateFriendship(
    $input: UpdateFriendshipInput!
    $condition: ModelFriendshipConditionInput
  ) {
    updateFriendship(input: $input, condition: $condition) {
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
export const deleteFriendship = /* GraphQL */ `
  mutation DeleteFriendship(
    $input: DeleteFriendshipInput!
    $condition: ModelFriendshipConditionInput
  ) {
    deleteFriendship(input: $input, condition: $condition) {
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
export const createFriendRequest = /* GraphQL */ `
  mutation CreateFriendRequest(
    $input: CreateFriendRequestInput!
    $condition: ModelFriendRequestConditionInput
  ) {
    createFriendRequest(input: $input, condition: $condition) {
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
export const updateFriendRequest = /* GraphQL */ `
  mutation UpdateFriendRequest(
    $input: UpdateFriendRequestInput!
    $condition: ModelFriendRequestConditionInput
  ) {
    updateFriendRequest(input: $input, condition: $condition) {
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
export const deleteFriendRequest = /* GraphQL */ `
  mutation DeleteFriendRequest(
    $input: DeleteFriendRequestInput!
    $condition: ModelFriendRequestConditionInput
  ) {
    deleteFriendRequest(input: $input, condition: $condition) {
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
export const createGroupRequest = /* GraphQL */ `
  mutation CreateGroupRequest(
    $input: CreateGroupRequestInput!
    $condition: ModelGroupRequestConditionInput
  ) {
    createGroupRequest(input: $input, condition: $condition) {
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
export const updateGroupRequest = /* GraphQL */ `
  mutation UpdateGroupRequest(
    $input: UpdateGroupRequestInput!
    $condition: ModelGroupRequestConditionInput
  ) {
    updateGroupRequest(input: $input, condition: $condition) {
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
export const deleteGroupRequest = /* GraphQL */ `
  mutation DeleteGroupRequest(
    $input: DeleteGroupRequestInput!
    $condition: ModelGroupRequestConditionInput
  ) {
    deleteGroupRequest(input: $input, condition: $condition) {
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
export const createRestauraunt = /* GraphQL */ `
  mutation CreateRestauraunt(
    $input: CreateRestaurauntInput!
    $condition: ModelRestaurauntConditionInput
  ) {
    createRestauraunt(input: $input, condition: $condition) {
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
export const updateRestauraunt = /* GraphQL */ `
  mutation UpdateRestauraunt(
    $input: UpdateRestaurauntInput!
    $condition: ModelRestaurauntConditionInput
  ) {
    updateRestauraunt(input: $input, condition: $condition) {
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
export const deleteRestauraunt = /* GraphQL */ `
  mutation DeleteRestauraunt(
    $input: DeleteRestaurauntInput!
    $condition: ModelRestaurauntConditionInput
  ) {
    deleteRestauraunt(input: $input, condition: $condition) {
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
export const createMenuCategory = /* GraphQL */ `
  mutation CreateMenuCategory(
    $input: CreateMenuCategoryInput!
    $condition: ModelMenuCategoryConditionInput
  ) {
    createMenuCategory(input: $input, condition: $condition) {
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
export const updateMenuCategory = /* GraphQL */ `
  mutation UpdateMenuCategory(
    $input: UpdateMenuCategoryInput!
    $condition: ModelMenuCategoryConditionInput
  ) {
    updateMenuCategory(input: $input, condition: $condition) {
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
export const deleteMenuCategory = /* GraphQL */ `
  mutation DeleteMenuCategory(
    $input: DeleteMenuCategoryInput!
    $condition: ModelMenuCategoryConditionInput
  ) {
    deleteMenuCategory(input: $input, condition: $condition) {
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
export const createMenuItem = /* GraphQL */ `
  mutation CreateMenuItem(
    $input: CreateMenuItemInput!
    $condition: ModelMenuItemConditionInput
  ) {
    createMenuItem(input: $input, condition: $condition) {
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
export const updateMenuItem = /* GraphQL */ `
  mutation UpdateMenuItem(
    $input: UpdateMenuItemInput!
    $condition: ModelMenuItemConditionInput
  ) {
    updateMenuItem(input: $input, condition: $condition) {
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
export const deleteMenuItem = /* GraphQL */ `
  mutation DeleteMenuItem(
    $input: DeleteMenuItemInput!
    $condition: ModelMenuItemConditionInput
  ) {
    deleteMenuItem(input: $input, condition: $condition) {
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
export const createFoodOption = /* GraphQL */ `
  mutation CreateFoodOption(
    $input: CreateFoodOptionInput!
    $condition: ModelFoodOptionConditionInput
  ) {
    createFoodOption(input: $input, condition: $condition) {
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
export const updateFoodOption = /* GraphQL */ `
  mutation UpdateFoodOption(
    $input: UpdateFoodOptionInput!
    $condition: ModelFoodOptionConditionInput
  ) {
    updateFoodOption(input: $input, condition: $condition) {
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
export const deleteFoodOption = /* GraphQL */ `
  mutation DeleteFoodOption(
    $input: DeleteFoodOptionInput!
    $condition: ModelFoodOptionConditionInput
  ) {
    deleteFoodOption(input: $input, condition: $condition) {
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
export const createItemOptionCatJoin = /* GraphQL */ `
  mutation CreateItemOptionCatJoin(
    $input: CreateItemOptionCatJoinInput!
    $condition: ModelItemOptionCatJoinConditionInput
  ) {
    createItemOptionCatJoin(input: $input, condition: $condition) {
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
export const updateItemOptionCatJoin = /* GraphQL */ `
  mutation UpdateItemOptionCatJoin(
    $input: UpdateItemOptionCatJoinInput!
    $condition: ModelItemOptionCatJoinConditionInput
  ) {
    updateItemOptionCatJoin(input: $input, condition: $condition) {
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
export const deleteItemOptionCatJoin = /* GraphQL */ `
  mutation DeleteItemOptionCatJoin(
    $input: DeleteItemOptionCatJoinInput!
    $condition: ModelItemOptionCatJoinConditionInput
  ) {
    deleteItemOptionCatJoin(input: $input, condition: $condition) {
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
export const createOption = /* GraphQL */ `
  mutation CreateOption(
    $input: CreateOptionInput!
    $condition: ModelOptionConditionInput
  ) {
    createOption(input: $input, condition: $condition) {
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
export const updateOption = /* GraphQL */ `
  mutation UpdateOption(
    $input: UpdateOptionInput!
    $condition: ModelOptionConditionInput
  ) {
    updateOption(input: $input, condition: $condition) {
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
export const deleteOption = /* GraphQL */ `
  mutation DeleteOption(
    $input: DeleteOptionInput!
    $condition: ModelOptionConditionInput
  ) {
    deleteOption(input: $input, condition: $condition) {
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
export const createItemOptionOptionJoin = /* GraphQL */ `
  mutation CreateItemOptionOptionJoin(
    $input: CreateItemOptionOptionJoinInput!
    $condition: ModelItemOptionOptionJoinConditionInput
  ) {
    createItemOptionOptionJoin(input: $input, condition: $condition) {
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
export const updateItemOptionOptionJoin = /* GraphQL */ `
  mutation UpdateItemOptionOptionJoin(
    $input: UpdateItemOptionOptionJoinInput!
    $condition: ModelItemOptionOptionJoinConditionInput
  ) {
    updateItemOptionOptionJoin(input: $input, condition: $condition) {
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
export const deleteItemOptionOptionJoin = /* GraphQL */ `
  mutation DeleteItemOptionOptionJoin(
    $input: DeleteItemOptionOptionJoinInput!
    $condition: ModelItemOptionOptionJoinConditionInput
  ) {
    deleteItemOptionOptionJoin(input: $input, condition: $condition) {
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
export const createPickup = /* GraphQL */ `
  mutation CreatePickup(
    $input: CreatePickupInput!
    $condition: ModelPickupConditionInput
  ) {
    createPickup(input: $input, condition: $condition) {
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
export const updatePickup = /* GraphQL */ `
  mutation UpdatePickup(
    $input: UpdatePickupInput!
    $condition: ModelPickupConditionInput
  ) {
    updatePickup(input: $input, condition: $condition) {
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
export const deletePickup = /* GraphQL */ `
  mutation DeletePickup(
    $input: DeletePickupInput!
    $condition: ModelPickupConditionInput
  ) {
    deletePickup(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createReward = /* GraphQL */ `
  mutation CreateReward(
    $input: CreateRewardInput!
    $condition: ModelRewardConditionInput
  ) {
    createReward(input: $input, condition: $condition) {
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
export const updateReward = /* GraphQL */ `
  mutation UpdateReward(
    $input: UpdateRewardInput!
    $condition: ModelRewardConditionInput
  ) {
    updateReward(input: $input, condition: $condition) {
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
export const deleteReward = /* GraphQL */ `
  mutation DeleteReward(
    $input: DeleteRewardInput!
    $condition: ModelRewardConditionInput
  ) {
    deleteReward(input: $input, condition: $condition) {
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
export const createOrderItem = /* GraphQL */ `
  mutation CreateOrderItem(
    $input: CreateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    createOrderItem(input: $input, condition: $condition) {
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
export const updateOrderItem = /* GraphQL */ `
  mutation UpdateOrderItem(
    $input: UpdateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    updateOrderItem(input: $input, condition: $condition) {
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
export const deleteOrderItem = /* GraphQL */ `
  mutation DeleteOrderItem(
    $input: DeleteOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    deleteOrderItem(input: $input, condition: $condition) {
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
