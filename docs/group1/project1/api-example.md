# Api Docs Example

## Get User Info: /users

Api description...

### Parameters

#### Header

| name          | description | required |
| ------------- | ----------- | -------- |
| Authorization | jwt token   | true     |

#### Path parameters

| name | description      | required |
| ---- | ---------------- | -------- |
| id   | user indentifier | false    |

#### Query parameters

| name     | description  | type   | required |
| -------- | ------------ | ------ | -------- |
| username | user account | string | false    |

### Response

| name     | description  | type   |
| -------- | ------------ | ------ |
| username | user account | string |
