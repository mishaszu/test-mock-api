# test-mock-api
Simple mock express.js api

## Install
Unfortunately at the moment application requires `npm install --legacy-peer-deps` to install. Craco doesn't match with the latest CRA 5.0.0 at the moment.

## Start:
BE: `npm run start:be`
FE: `npm run start:fe`

BE runs on port 4000
FE runs on port 8080

FE configuration includes craco config to proxy `/api` requests to BE.

## Endpoints

### Get all frameworks:
Url: `/api/frameworks`
Schema:
```ts
{
  [key: string]: {
    "description": string
    "id": string,
    "imageUrl": string,
    "stars": number,
    "github": string,
    "active": boolean
  }
}
```

### Get single framework:
Url: `/api/frameworks/:framework_name`
Schema:
```ts
{
  "description": string
  "id": string,
  "imageUrl": string,
  "stars": number,
  "github": string,
  "active": boolean,
  "languages": {
    "language": string,
    "id": string,
    "imageUrl": string,
    "frameworks": string[]
  }[]
}
```

### Get all languages:
Url: `/api/languages`
```ts
{
  [key: string]: {
      "language": string,
      "id": string,
      "imageUrl": string,
      "frameworks": string[]
  }
}
```

### Get single language:
Url: `/api/languages/:language_name`
```ts
{
    "language": string,
    "id": string,
    "imageUrl": string,
    "frameworks": string[]
}
```
