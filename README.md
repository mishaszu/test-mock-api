# test-mock-api
Simple mock express.js api

## Install
Unfotunatelly at the moment application requires `npm install --legacy-peer-deps` to install. Craco doesn't much with the latest CRA 5.0.0 at the moment.

## Start:
BE: `npm run start:be`
FE: `npm run start:fe`

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
    k"stars": number,
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
