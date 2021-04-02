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
        items {
          email
          university_name
          university {
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
          phone_number
          name
          rewards {
            items {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            nextToken
          }
          friends {
            items {
              id
              userEmail
              friendEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingFriendRequest {
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
          outgoingFriendRequest {
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
          groups {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingGroupRequest {
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
          outgoingGroupRequest {
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
          deviceToken
          platform
          isUser
          createdAt
          updatedAt
        }
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
        items {
          email
          university_name
          university {
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
          phone_number
          name
          rewards {
            items {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            nextToken
          }
          friends {
            items {
              id
              userEmail
              friendEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingFriendRequest {
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
          outgoingFriendRequest {
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
          groups {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingGroupRequest {
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
          outgoingGroupRequest {
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
          deviceToken
          platform
          isUser
          createdAt
          updatedAt
        }
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
        items {
          email
          university_name
          university {
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
          phone_number
          name
          rewards {
            items {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            nextToken
          }
          friends {
            items {
              id
              userEmail
              friendEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingFriendRequest {
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
          outgoingFriendRequest {
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
          groups {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingGroupRequest {
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
          outgoingGroupRequest {
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
          deviceToken
          platform
          isUser
          createdAt
          updatedAt
        }
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
        students {
          items {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      phone_number
      name
      rewards {
        items {
          id
          userEmail
          owner {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          menuId
          points
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      friends {
        items {
          id
          userEmail
          friendEmail
          user {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          friend {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      incomingFriendRequest {
        items {
          id
          senderEmail
          receiverEmail
          sender {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          receiver {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          accepted
          createdAt
          updatedAt
        }
        nextToken
      }
      outgoingFriendRequest {
        items {
          id
          senderEmail
          receiverEmail
          sender {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          receiver {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          accepted
          createdAt
          updatedAt
        }
        nextToken
      }
      groups {
        items {
          id
          userEmail
          user {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          groupId
          group {
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
          createdAt
          updatedAt
        }
        nextToken
      }
      incomingGroupRequest {
        items {
          id
          senderEmail
          receiverEmail
          groupId
          group {
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
          sender {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          receiver {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          accepted
          createdAt
          updatedAt
        }
        nextToken
      }
      outgoingGroupRequest {
        items {
          id
          senderEmail
          receiverEmail
          groupId
          group {
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
          sender {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          receiver {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          accepted
          createdAt
          updatedAt
        }
        nextToken
      }
      deviceToken
      platform
      isUser
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
        students {
          items {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      phone_number
      name
      rewards {
        items {
          id
          userEmail
          owner {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          menuId
          points
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      friends {
        items {
          id
          userEmail
          friendEmail
          user {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          friend {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      incomingFriendRequest {
        items {
          id
          senderEmail
          receiverEmail
          sender {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          receiver {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          accepted
          createdAt
          updatedAt
        }
        nextToken
      }
      outgoingFriendRequest {
        items {
          id
          senderEmail
          receiverEmail
          sender {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          receiver {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          accepted
          createdAt
          updatedAt
        }
        nextToken
      }
      groups {
        items {
          id
          userEmail
          user {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          groupId
          group {
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
          createdAt
          updatedAt
        }
        nextToken
      }
      incomingGroupRequest {
        items {
          id
          senderEmail
          receiverEmail
          groupId
          group {
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
          sender {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          receiver {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          accepted
          createdAt
          updatedAt
        }
        nextToken
      }
      outgoingGroupRequest {
        items {
          id
          senderEmail
          receiverEmail
          groupId
          group {
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
          sender {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          receiver {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          accepted
          createdAt
          updatedAt
        }
        nextToken
      }
      deviceToken
      platform
      isUser
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
        students {
          items {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      phone_number
      name
      rewards {
        items {
          id
          userEmail
          owner {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          menuId
          points
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      friends {
        items {
          id
          userEmail
          friendEmail
          user {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          friend {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      incomingFriendRequest {
        items {
          id
          senderEmail
          receiverEmail
          sender {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          receiver {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          accepted
          createdAt
          updatedAt
        }
        nextToken
      }
      outgoingFriendRequest {
        items {
          id
          senderEmail
          receiverEmail
          sender {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          receiver {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          accepted
          createdAt
          updatedAt
        }
        nextToken
      }
      groups {
        items {
          id
          userEmail
          user {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          groupId
          group {
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
          createdAt
          updatedAt
        }
        nextToken
      }
      incomingGroupRequest {
        items {
          id
          senderEmail
          receiverEmail
          groupId
          group {
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
          sender {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          receiver {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          accepted
          createdAt
          updatedAt
        }
        nextToken
      }
      outgoingGroupRequest {
        items {
          id
          senderEmail
          receiverEmail
          groupId
          group {
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
          sender {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          receiver {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          accepted
          createdAt
          updatedAt
        }
        nextToken
      }
      deviceToken
      platform
      isUser
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
        items {
          id
          userEmail
          user {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          groupId
          group {
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
          createdAt
          updatedAt
        }
        nextToken
      }
      outgoingRequests {
        items {
          id
          senderEmail
          receiverEmail
          groupId
          group {
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
          sender {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          receiver {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          accepted
          createdAt
          updatedAt
        }
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
        items {
          id
          userEmail
          user {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          groupId
          group {
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
          createdAt
          updatedAt
        }
        nextToken
      }
      outgoingRequests {
        items {
          id
          senderEmail
          receiverEmail
          groupId
          group {
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
          sender {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          receiver {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          accepted
          createdAt
          updatedAt
        }
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
        items {
          id
          userEmail
          user {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          groupId
          group {
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
          createdAt
          updatedAt
        }
        nextToken
      }
      outgoingRequests {
        items {
          id
          senderEmail
          receiverEmail
          groupId
          group {
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
          sender {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          receiver {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          accepted
          createdAt
          updatedAt
        }
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
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      groupId
      group {
        id
        name
        members {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        outgoingRequests {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
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
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      groupId
      group {
        id
        name
        members {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        outgoingRequests {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
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
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      groupId
      group {
        id
        name
        members {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        outgoingRequests {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
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
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      friend {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
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
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      friend {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
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
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      friend {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
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
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      receiver {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
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
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      receiver {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
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
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      receiver {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
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
        members {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        outgoingRequests {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      sender {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      receiver {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
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
        members {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        outgoingRequests {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      sender {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      receiver {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
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
        members {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        outgoingRequests {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      sender {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      receiver {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      accepted
      createdAt
      updatedAt
    }
  }
`;
export const createRestaurant = /* GraphQL */ `
  mutation CreateRestaurant(
    $input: CreateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    createRestaurant(input: $input, condition: $condition) {
      id
      name
      menuCategories {
        items {
          id
          name
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuItems {
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
          createdAt
          updatedAt
        }
        nextToken
      }
      menuItems {
        items {
          id
          name
          description
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuCategoryName
          menuCategory {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          price
          options {
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
          createdAt
          updatedAt
        }
        nextToken
      }
      foodOptions {
        items {
          name
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuItem {
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
          options {
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
          createdAt
          updatedAt
        }
        nextToken
      }
      joinedItemsOptions {
        items {
          id
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          foodOptionName
          menuItemName
          menuItem {
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
          optionCat {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          numchoices
          createdAt
          updatedAt
        }
        nextToken
      }
      options {
        items {
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          name
          price
          foodoption {
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
          createdAt
          updatedAt
        }
        nextToken
      }
      joinedItemOptionsOptions {
        items {
          id
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          optionName
          foodOptionName
          foodOption {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          option {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          createdAt
          updatedAt
        }
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
      restaurantOwnerName
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
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          type
          url
          createdAt
          updatedAt
        }
        nextToken
      }
      isOpen
      createdAt
      updatedAt
    }
  }
`;
export const updateRestaurant = /* GraphQL */ `
  mutation UpdateRestaurant(
    $input: UpdateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    updateRestaurant(input: $input, condition: $condition) {
      id
      name
      menuCategories {
        items {
          id
          name
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuItems {
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
          createdAt
          updatedAt
        }
        nextToken
      }
      menuItems {
        items {
          id
          name
          description
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuCategoryName
          menuCategory {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          price
          options {
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
          createdAt
          updatedAt
        }
        nextToken
      }
      foodOptions {
        items {
          name
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuItem {
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
          options {
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
          createdAt
          updatedAt
        }
        nextToken
      }
      joinedItemsOptions {
        items {
          id
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          foodOptionName
          menuItemName
          menuItem {
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
          optionCat {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          numchoices
          createdAt
          updatedAt
        }
        nextToken
      }
      options {
        items {
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          name
          price
          foodoption {
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
          createdAt
          updatedAt
        }
        nextToken
      }
      joinedItemOptionsOptions {
        items {
          id
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          optionName
          foodOptionName
          foodOption {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          option {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          createdAt
          updatedAt
        }
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
      restaurantOwnerName
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
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          type
          url
          createdAt
          updatedAt
        }
        nextToken
      }
      isOpen
      createdAt
      updatedAt
    }
  }
`;
export const deleteRestaurant = /* GraphQL */ `
  mutation DeleteRestaurant(
    $input: DeleteRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    deleteRestaurant(input: $input, condition: $condition) {
      id
      name
      menuCategories {
        items {
          id
          name
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuItems {
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
          createdAt
          updatedAt
        }
        nextToken
      }
      menuItems {
        items {
          id
          name
          description
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuCategoryName
          menuCategory {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          price
          options {
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
          createdAt
          updatedAt
        }
        nextToken
      }
      foodOptions {
        items {
          name
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuItem {
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
          options {
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
          createdAt
          updatedAt
        }
        nextToken
      }
      joinedItemsOptions {
        items {
          id
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          foodOptionName
          menuItemName
          menuItem {
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
          optionCat {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          numchoices
          createdAt
          updatedAt
        }
        nextToken
      }
      options {
        items {
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          name
          price
          foodoption {
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
          createdAt
          updatedAt
        }
        nextToken
      }
      joinedItemOptionsOptions {
        items {
          id
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          optionName
          foodOptionName
          foodOption {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          option {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          createdAt
          updatedAt
        }
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
      restaurantOwnerName
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
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          type
          url
          createdAt
          updatedAt
        }
        nextToken
      }
      isOpen
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
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      menuItems {
        items {
          id
          name
          description
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuCategoryName
          menuCategory {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          price
          options {
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
          createdAt
          updatedAt
        }
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
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      menuItems {
        items {
          id
          name
          description
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuCategoryName
          menuCategory {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          price
          options {
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
          createdAt
          updatedAt
        }
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
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      menuItems {
        items {
          id
          name
          description
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuCategoryName
          menuCategory {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          price
          options {
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
          createdAt
          updatedAt
        }
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
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      menuCategoryName
      menuCategory {
        items {
          id
          name
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuItems {
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
          createdAt
          updatedAt
        }
        nextToken
      }
      price
      options {
        items {
          id
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          foodOptionName
          menuItemName
          menuItem {
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
          optionCat {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          numchoices
          createdAt
          updatedAt
        }
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
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      menuCategoryName
      menuCategory {
        items {
          id
          name
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuItems {
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
          createdAt
          updatedAt
        }
        nextToken
      }
      price
      options {
        items {
          id
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          foodOptionName
          menuItemName
          menuItem {
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
          optionCat {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          numchoices
          createdAt
          updatedAt
        }
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
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      menuCategoryName
      menuCategory {
        items {
          id
          name
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuItems {
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
          createdAt
          updatedAt
        }
        nextToken
      }
      price
      options {
        items {
          id
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          foodOptionName
          menuItemName
          menuItem {
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
          optionCat {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          numchoices
          createdAt
          updatedAt
        }
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
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      menuItem {
        items {
          id
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          foodOptionName
          menuItemName
          menuItem {
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
          optionCat {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          numchoices
          createdAt
          updatedAt
        }
        nextToken
      }
      options {
        items {
          id
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          optionName
          foodOptionName
          foodOption {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          option {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          createdAt
          updatedAt
        }
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
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      menuItem {
        items {
          id
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          foodOptionName
          menuItemName
          menuItem {
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
          optionCat {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          numchoices
          createdAt
          updatedAt
        }
        nextToken
      }
      options {
        items {
          id
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          optionName
          foodOptionName
          foodOption {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          option {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          createdAt
          updatedAt
        }
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
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      menuItem {
        items {
          id
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          foodOptionName
          menuItemName
          menuItem {
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
          optionCat {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          numchoices
          createdAt
          updatedAt
        }
        nextToken
      }
      options {
        items {
          id
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          optionName
          foodOptionName
          foodOption {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          option {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          createdAt
          updatedAt
        }
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
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      foodOptionName
      menuItemName
      menuItem {
        items {
          id
          name
          description
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuCategoryName
          menuCategory {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          price
          options {
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
          createdAt
          updatedAt
        }
        nextToken
      }
      optionCat {
        name
        menuId
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
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
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
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
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
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
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
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
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        menuItem {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
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
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      foodOptionName
      menuItemName
      menuItem {
        items {
          id
          name
          description
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuCategoryName
          menuCategory {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          price
          options {
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
          createdAt
          updatedAt
        }
        nextToken
      }
      optionCat {
        name
        menuId
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
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
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
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
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
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
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
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
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        menuItem {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
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
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      foodOptionName
      menuItemName
      menuItem {
        items {
          id
          name
          description
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuCategoryName
          menuCategory {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          price
          options {
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
          createdAt
          updatedAt
        }
        nextToken
      }
      optionCat {
        name
        menuId
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
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
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
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
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
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
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
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
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        menuItem {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
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
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      name
      price
      foodoption {
        items {
          id
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          optionName
          foodOptionName
          foodOption {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          option {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          createdAt
          updatedAt
        }
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
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      name
      price
      foodoption {
        items {
          id
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          optionName
          foodOptionName
          foodOption {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          option {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          createdAt
          updatedAt
        }
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
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      name
      price
      foodoption {
        items {
          id
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          optionName
          foodOptionName
          foodOption {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          option {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          createdAt
          updatedAt
        }
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
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      optionName
      foodOptionName
      foodOption {
        name
        menuId
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
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
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
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
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
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
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
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
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        menuItem {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        createdAt
        updatedAt
      }
      option {
        menuId
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
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
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
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
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
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
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
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
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        name
        price
        foodoption {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
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
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      optionName
      foodOptionName
      foodOption {
        name
        menuId
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
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
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
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
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
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
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
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
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        menuItem {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        createdAt
        updatedAt
      }
      option {
        menuId
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
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
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
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
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
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
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
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
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        name
        price
        foodoption {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
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
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      optionName
      foodOptionName
      foodOption {
        name
        menuId
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
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
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
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
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
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
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
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
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        menuItem {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        createdAt
        updatedAt
      }
      option {
        menuId
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
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
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
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
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
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
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
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
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        name
        price
        foodoption {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
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
      delivererId
      deliverer {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      orders {
        items {
          id
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          food_ready_time
          estimated_delivery_time
          actual_delivery_time
          delivery_address
          delivery_lat
          delivery_long
          customerId
          customer {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          comment
          orderItems {
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
              foodOptionsArray
              createdAt
              updatedAt
            }
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
            delivererId
            deliverer {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
              deviceToken
              platform
              isUser
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
            apiResponse
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            closed
            windowEndTime
            windowClosed
            createdAt
            updatedAt
          }
          status
          closed
          isPaid
          createdAt
          updatedAt
        }
        nextToken
      }
      lat
      long
      expdate
      friends {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      groups {
        id
        name
        members {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        outgoingRequests {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      transportation_type
      apiResponse
      menuId
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      closed
      windowEndTime
      windowClosed
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
      delivererId
      deliverer {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      orders {
        items {
          id
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          food_ready_time
          estimated_delivery_time
          actual_delivery_time
          delivery_address
          delivery_lat
          delivery_long
          customerId
          customer {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          comment
          orderItems {
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
              foodOptionsArray
              createdAt
              updatedAt
            }
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
            delivererId
            deliverer {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
              deviceToken
              platform
              isUser
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
            apiResponse
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            closed
            windowEndTime
            windowClosed
            createdAt
            updatedAt
          }
          status
          closed
          isPaid
          createdAt
          updatedAt
        }
        nextToken
      }
      lat
      long
      expdate
      friends {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      groups {
        id
        name
        members {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        outgoingRequests {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      transportation_type
      apiResponse
      menuId
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      closed
      windowEndTime
      windowClosed
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
      delivererId
      deliverer {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      orders {
        items {
          id
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          food_ready_time
          estimated_delivery_time
          actual_delivery_time
          delivery_address
          delivery_lat
          delivery_long
          customerId
          customer {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          comment
          orderItems {
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
              foodOptionsArray
              createdAt
              updatedAt
            }
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
            delivererId
            deliverer {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
              deviceToken
              platform
              isUser
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
            apiResponse
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            closed
            windowEndTime
            windowClosed
            createdAt
            updatedAt
          }
          status
          closed
          isPaid
          createdAt
          updatedAt
        }
        nextToken
      }
      lat
      long
      expdate
      friends {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      groups {
        id
        name
        members {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        outgoingRequests {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      transportation_type
      apiResponse
      menuId
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      closed
      windowEndTime
      windowClosed
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
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      food_ready_time
      estimated_delivery_time
      actual_delivery_time
      delivery_address
      delivery_lat
      delivery_long
      customerId
      customer {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      comment
      orderItems {
        items {
          id
          orderId
          menuId
          itemName
          order {
            id
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            food_ready_time
            estimated_delivery_time
            actual_delivery_time
            delivery_address
            delivery_lat
            delivery_long
            customerId
            customer {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
              delivererId
              lat
              long
              expdate
              transportation_type
              apiResponse
              menuId
              closed
              windowEndTime
              windowClosed
              createdAt
              updatedAt
            }
            status
            closed
            isPaid
            createdAt
            updatedAt
          }
          menuItem {
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
          price_per_item
          price_before_reward
          price_after_reward
          quantity
          reward {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          comment
          foodOptionsArray
          createdAt
          updatedAt
        }
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
        delivererId
        deliverer {
          email
          university_name
          university {
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
          phone_number
          name
          rewards {
            items {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            nextToken
          }
          friends {
            items {
              id
              userEmail
              friendEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingFriendRequest {
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
          outgoingFriendRequest {
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
          groups {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingGroupRequest {
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
          outgoingGroupRequest {
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
          deviceToken
          platform
          isUser
          createdAt
          updatedAt
        }
        orders {
          items {
            id
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            food_ready_time
            estimated_delivery_time
            actual_delivery_time
            delivery_address
            delivery_lat
            delivery_long
            customerId
            customer {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
              delivererId
              lat
              long
              expdate
              transportation_type
              apiResponse
              menuId
              closed
              windowEndTime
              windowClosed
              createdAt
              updatedAt
            }
            status
            closed
            isPaid
            createdAt
            updatedAt
          }
          nextToken
        }
        lat
        long
        expdate
        friends {
          email
          university_name
          university {
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
          phone_number
          name
          rewards {
            items {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            nextToken
          }
          friends {
            items {
              id
              userEmail
              friendEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingFriendRequest {
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
          outgoingFriendRequest {
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
          groups {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingGroupRequest {
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
          outgoingGroupRequest {
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
          deviceToken
          platform
          isUser
          createdAt
          updatedAt
        }
        groups {
          id
          name
          members {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingRequests {
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
          createdAt
          updatedAt
        }
        transportation_type
        apiResponse
        menuId
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
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
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
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
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
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
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
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
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        closed
        windowEndTime
        windowClosed
        createdAt
        updatedAt
      }
      status
      closed
      isPaid
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
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      food_ready_time
      estimated_delivery_time
      actual_delivery_time
      delivery_address
      delivery_lat
      delivery_long
      customerId
      customer {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      comment
      orderItems {
        items {
          id
          orderId
          menuId
          itemName
          order {
            id
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            food_ready_time
            estimated_delivery_time
            actual_delivery_time
            delivery_address
            delivery_lat
            delivery_long
            customerId
            customer {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
              delivererId
              lat
              long
              expdate
              transportation_type
              apiResponse
              menuId
              closed
              windowEndTime
              windowClosed
              createdAt
              updatedAt
            }
            status
            closed
            isPaid
            createdAt
            updatedAt
          }
          menuItem {
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
          price_per_item
          price_before_reward
          price_after_reward
          quantity
          reward {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          comment
          foodOptionsArray
          createdAt
          updatedAt
        }
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
        delivererId
        deliverer {
          email
          university_name
          university {
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
          phone_number
          name
          rewards {
            items {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            nextToken
          }
          friends {
            items {
              id
              userEmail
              friendEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingFriendRequest {
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
          outgoingFriendRequest {
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
          groups {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingGroupRequest {
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
          outgoingGroupRequest {
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
          deviceToken
          platform
          isUser
          createdAt
          updatedAt
        }
        orders {
          items {
            id
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            food_ready_time
            estimated_delivery_time
            actual_delivery_time
            delivery_address
            delivery_lat
            delivery_long
            customerId
            customer {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
              delivererId
              lat
              long
              expdate
              transportation_type
              apiResponse
              menuId
              closed
              windowEndTime
              windowClosed
              createdAt
              updatedAt
            }
            status
            closed
            isPaid
            createdAt
            updatedAt
          }
          nextToken
        }
        lat
        long
        expdate
        friends {
          email
          university_name
          university {
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
          phone_number
          name
          rewards {
            items {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            nextToken
          }
          friends {
            items {
              id
              userEmail
              friendEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingFriendRequest {
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
          outgoingFriendRequest {
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
          groups {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingGroupRequest {
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
          outgoingGroupRequest {
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
          deviceToken
          platform
          isUser
          createdAt
          updatedAt
        }
        groups {
          id
          name
          members {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingRequests {
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
          createdAt
          updatedAt
        }
        transportation_type
        apiResponse
        menuId
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
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
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
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
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
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
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
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
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        closed
        windowEndTime
        windowClosed
        createdAt
        updatedAt
      }
      status
      closed
      isPaid
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
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      food_ready_time
      estimated_delivery_time
      actual_delivery_time
      delivery_address
      delivery_lat
      delivery_long
      customerId
      customer {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      comment
      orderItems {
        items {
          id
          orderId
          menuId
          itemName
          order {
            id
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            food_ready_time
            estimated_delivery_time
            actual_delivery_time
            delivery_address
            delivery_lat
            delivery_long
            customerId
            customer {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
              delivererId
              lat
              long
              expdate
              transportation_type
              apiResponse
              menuId
              closed
              windowEndTime
              windowClosed
              createdAt
              updatedAt
            }
            status
            closed
            isPaid
            createdAt
            updatedAt
          }
          menuItem {
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
          price_per_item
          price_before_reward
          price_after_reward
          quantity
          reward {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          comment
          foodOptionsArray
          createdAt
          updatedAt
        }
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
        delivererId
        deliverer {
          email
          university_name
          university {
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
          phone_number
          name
          rewards {
            items {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            nextToken
          }
          friends {
            items {
              id
              userEmail
              friendEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingFriendRequest {
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
          outgoingFriendRequest {
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
          groups {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingGroupRequest {
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
          outgoingGroupRequest {
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
          deviceToken
          platform
          isUser
          createdAt
          updatedAt
        }
        orders {
          items {
            id
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            food_ready_time
            estimated_delivery_time
            actual_delivery_time
            delivery_address
            delivery_lat
            delivery_long
            customerId
            customer {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
              delivererId
              lat
              long
              expdate
              transportation_type
              apiResponse
              menuId
              closed
              windowEndTime
              windowClosed
              createdAt
              updatedAt
            }
            status
            closed
            isPaid
            createdAt
            updatedAt
          }
          nextToken
        }
        lat
        long
        expdate
        friends {
          email
          university_name
          university {
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
          phone_number
          name
          rewards {
            items {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            nextToken
          }
          friends {
            items {
              id
              userEmail
              friendEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingFriendRequest {
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
          outgoingFriendRequest {
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
          groups {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingGroupRequest {
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
          outgoingGroupRequest {
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
          deviceToken
          platform
          isUser
          createdAt
          updatedAt
        }
        groups {
          id
          name
          members {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingRequests {
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
          createdAt
          updatedAt
        }
        transportation_type
        apiResponse
        menuId
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
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
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
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
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
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
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
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
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        closed
        windowEndTime
        windowClosed
        createdAt
        updatedAt
      }
      status
      closed
      isPaid
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
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      menuId
      points
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
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
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      menuId
      points
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
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
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
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
          nextToken
        }
        incomingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
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
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      menuId
      points
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createVendorReward = /* GraphQL */ `
  mutation CreateVendorReward(
    $input: CreateVendorRewardInput!
    $condition: ModelVendorRewardConditionInput
  ) {
    createVendorReward(input: $input, condition: $condition) {
      id
      date_active_from
      date_active_to
      discountPercentage
      discountAmount
      itemName
      menuId
      points
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateVendorReward = /* GraphQL */ `
  mutation UpdateVendorReward(
    $input: UpdateVendorRewardInput!
    $condition: ModelVendorRewardConditionInput
  ) {
    updateVendorReward(input: $input, condition: $condition) {
      id
      date_active_from
      date_active_to
      discountPercentage
      discountAmount
      itemName
      menuId
      points
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteVendorReward = /* GraphQL */ `
  mutation DeleteVendorReward(
    $input: DeleteVendorRewardInput!
    $condition: ModelVendorRewardConditionInput
  ) {
    deleteVendorReward(input: $input, condition: $condition) {
      id
      date_active_from
      date_active_to
      discountPercentage
      discountAmount
      itemName
      menuId
      points
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      description
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
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
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
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
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
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
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
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
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
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        food_ready_time
        estimated_delivery_time
        actual_delivery_time
        delivery_address
        delivery_lat
        delivery_long
        customerId
        customer {
          email
          university_name
          university {
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
          phone_number
          name
          rewards {
            items {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            nextToken
          }
          friends {
            items {
              id
              userEmail
              friendEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingFriendRequest {
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
          outgoingFriendRequest {
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
          groups {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingGroupRequest {
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
          outgoingGroupRequest {
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
          deviceToken
          platform
          isUser
          createdAt
          updatedAt
        }
        comment
        orderItems {
          items {
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
              customerId
              comment
              order_price_before_discount
              order_price_after_discount
              discount
              tax
              fees
              tip
              grandTotal
              pickupId
              status
              closed
              isPaid
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
              points
              createdAt
              updatedAt
            }
            comment
            foodOptionsArray
            createdAt
            updatedAt
          }
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
          delivererId
          deliverer {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          orders {
            items {
              id
              food_ready_time
              estimated_delivery_time
              actual_delivery_time
              delivery_address
              delivery_lat
              delivery_long
              customerId
              comment
              order_price_before_discount
              order_price_after_discount
              discount
              tax
              fees
              tip
              grandTotal
              pickupId
              status
              closed
              isPaid
              createdAt
              updatedAt
            }
            nextToken
          }
          lat
          long
          expdate
          friends {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          groups {
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
          transportation_type
          apiResponse
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          closed
          windowEndTime
          windowClosed
          createdAt
          updatedAt
        }
        status
        closed
        isPaid
        createdAt
        updatedAt
      }
      menuItem {
        items {
          id
          name
          description
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuCategoryName
          menuCategory {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          price
          options {
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
          createdAt
          updatedAt
        }
        nextToken
      }
      price_per_item
      price_before_reward
      price_after_reward
      quantity
      reward {
        id
        userEmail
        owner {
          email
          university_name
          university {
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
          phone_number
          name
          rewards {
            items {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            nextToken
          }
          friends {
            items {
              id
              userEmail
              friendEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingFriendRequest {
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
          outgoingFriendRequest {
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
          groups {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingGroupRequest {
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
          outgoingGroupRequest {
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
          deviceToken
          platform
          isUser
          createdAt
          updatedAt
        }
        menuId
        points
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
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
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
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
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
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
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
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
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      comment
      foodOptionsArray
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
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
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
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
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
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
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
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
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
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        food_ready_time
        estimated_delivery_time
        actual_delivery_time
        delivery_address
        delivery_lat
        delivery_long
        customerId
        customer {
          email
          university_name
          university {
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
          phone_number
          name
          rewards {
            items {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            nextToken
          }
          friends {
            items {
              id
              userEmail
              friendEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingFriendRequest {
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
          outgoingFriendRequest {
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
          groups {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingGroupRequest {
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
          outgoingGroupRequest {
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
          deviceToken
          platform
          isUser
          createdAt
          updatedAt
        }
        comment
        orderItems {
          items {
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
              customerId
              comment
              order_price_before_discount
              order_price_after_discount
              discount
              tax
              fees
              tip
              grandTotal
              pickupId
              status
              closed
              isPaid
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
              points
              createdAt
              updatedAt
            }
            comment
            foodOptionsArray
            createdAt
            updatedAt
          }
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
          delivererId
          deliverer {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          orders {
            items {
              id
              food_ready_time
              estimated_delivery_time
              actual_delivery_time
              delivery_address
              delivery_lat
              delivery_long
              customerId
              comment
              order_price_before_discount
              order_price_after_discount
              discount
              tax
              fees
              tip
              grandTotal
              pickupId
              status
              closed
              isPaid
              createdAt
              updatedAt
            }
            nextToken
          }
          lat
          long
          expdate
          friends {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          groups {
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
          transportation_type
          apiResponse
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          closed
          windowEndTime
          windowClosed
          createdAt
          updatedAt
        }
        status
        closed
        isPaid
        createdAt
        updatedAt
      }
      menuItem {
        items {
          id
          name
          description
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuCategoryName
          menuCategory {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          price
          options {
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
          createdAt
          updatedAt
        }
        nextToken
      }
      price_per_item
      price_before_reward
      price_after_reward
      quantity
      reward {
        id
        userEmail
        owner {
          email
          university_name
          university {
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
          phone_number
          name
          rewards {
            items {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            nextToken
          }
          friends {
            items {
              id
              userEmail
              friendEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingFriendRequest {
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
          outgoingFriendRequest {
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
          groups {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingGroupRequest {
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
          outgoingGroupRequest {
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
          deviceToken
          platform
          isUser
          createdAt
          updatedAt
        }
        menuId
        points
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
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
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
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
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
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
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
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
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      comment
      foodOptionsArray
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
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
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
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
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
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
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
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
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
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        food_ready_time
        estimated_delivery_time
        actual_delivery_time
        delivery_address
        delivery_lat
        delivery_long
        customerId
        customer {
          email
          university_name
          university {
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
          phone_number
          name
          rewards {
            items {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            nextToken
          }
          friends {
            items {
              id
              userEmail
              friendEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingFriendRequest {
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
          outgoingFriendRequest {
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
          groups {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingGroupRequest {
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
          outgoingGroupRequest {
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
          deviceToken
          platform
          isUser
          createdAt
          updatedAt
        }
        comment
        orderItems {
          items {
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
              customerId
              comment
              order_price_before_discount
              order_price_after_discount
              discount
              tax
              fees
              tip
              grandTotal
              pickupId
              status
              closed
              isPaid
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
              points
              createdAt
              updatedAt
            }
            comment
            foodOptionsArray
            createdAt
            updatedAt
          }
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
          delivererId
          deliverer {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          orders {
            items {
              id
              food_ready_time
              estimated_delivery_time
              actual_delivery_time
              delivery_address
              delivery_lat
              delivery_long
              customerId
              comment
              order_price_before_discount
              order_price_after_discount
              discount
              tax
              fees
              tip
              grandTotal
              pickupId
              status
              closed
              isPaid
              createdAt
              updatedAt
            }
            nextToken
          }
          lat
          long
          expdate
          friends {
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
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          groups {
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
          transportation_type
          apiResponse
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          closed
          windowEndTime
          windowClosed
          createdAt
          updatedAt
        }
        status
        closed
        isPaid
        createdAt
        updatedAt
      }
      menuItem {
        items {
          id
          name
          description
          menuId
          restaurant {
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
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuCategoryName
          menuCategory {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          price
          options {
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
          createdAt
          updatedAt
        }
        nextToken
      }
      price_per_item
      price_before_reward
      price_after_reward
      quantity
      reward {
        id
        userEmail
        owner {
          email
          university_name
          university {
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
          phone_number
          name
          rewards {
            items {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            nextToken
          }
          friends {
            items {
              id
              userEmail
              friendEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingFriendRequest {
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
          outgoingFriendRequest {
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
          groups {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingGroupRequest {
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
          outgoingGroupRequest {
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
          deviceToken
          platform
          isUser
          createdAt
          updatedAt
        }
        menuId
        points
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
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
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
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
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
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
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
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
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      comment
      foodOptionsArray
      createdAt
      updatedAt
    }
  }
`;
export const createRestaurantImage = /* GraphQL */ `
  mutation CreateRestaurantImage(
    $input: CreateRestaurantImageInput!
    $condition: ModelRestaurantImageConditionInput
  ) {
    createRestaurantImage(input: $input, condition: $condition) {
      id
      menuId
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      type
      url
      createdAt
      updatedAt
    }
  }
`;
export const updateRestaurantImage = /* GraphQL */ `
  mutation UpdateRestaurantImage(
    $input: UpdateRestaurantImageInput!
    $condition: ModelRestaurantImageConditionInput
  ) {
    updateRestaurantImage(input: $input, condition: $condition) {
      id
      menuId
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      type
      url
      createdAt
      updatedAt
    }
  }
`;
export const deleteRestaurantImage = /* GraphQL */ `
  mutation DeleteRestaurantImage(
    $input: DeleteRestaurantImageInput!
    $condition: ModelRestaurantImageConditionInput
  ) {
    deleteRestaurantImage(input: $input, condition: $condition) {
      id
      menuId
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
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
        restaurantOwnerName
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
            restaurant {
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
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      type
      url
      createdAt
      updatedAt
    }
  }
`;
