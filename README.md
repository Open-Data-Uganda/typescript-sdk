# OpenDataUG TypeScript SDK

A TypeScript client library for accessing Uganda's administrative divisions data through the Open Data API.

## Installation

```bash
npm install @opendataug/typescript-sdk
# or
yarn add @opendataug/typescript-sdk
```

## Usage

### Initialize the Client

```typescript
import { OpenDataUGClient } from "@opendataug/typescript-sdk";

const client = new OpenDataUGClient("your-api-key");
```

### Working with Districts

```typescript
// Get all districts
const districts = await client.getDistricts();
console.log(districts);

// Get a specific district
const district = await client.getDistrict("district-123");
console.log(district);
```

### Working with Counties

```typescript
// Get all counties
const counties = await client.getCounties();
console.log(counties);

// Get counties in a specific district
const districtCounties = await client.getCountiesByDistrict("district-123");
console.log(districtCounties);
```

### Working with Subcounties

```typescript
// Get all subcounties
const subcounties = await client.getSubcounties();
console.log(subcounties);

// Get subcounties in a specific county
const countySubcounties = await client.getSubcountiesByCounty("county-123");
console.log(countySubcounties);
```

### Working with Parishes

```typescript
// Get all parishes
const parishes = await client.getParishes();
console.log(parishes);

// Get parishes in a specific subcounty
const subcountyParishes = await client.getParishesBySubcounty("subcounty-123");
console.log(subcountyParishes);
```

### Working with Villages

```typescript
// Get all villages
const villages = await client.getVillages();
console.log(villages);

// Get villages in a specific parish
const parishVillages = await client.getVillagesByParish("parish-123");
console.log(parishVillages);
```

## Error Handling

The SDK uses standard Promise-based error handling:

```typescript
try {
  const districts = await client.getDistricts();
  console.log(districts);
} catch (error) {
  if (axios.isAxiosError(error)) {
    console.error("API Error:", error.response?.data);
  } else {
    console.error("Error:", error);
  }
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
