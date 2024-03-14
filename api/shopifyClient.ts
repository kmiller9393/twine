import { createStorefrontApiClient } from "@shopify/storefront-api-client";

export const client = createStorefrontApiClient({
  storeDomain: "http://your-shop-name.myshopify.com",
  apiVersion: "2023-10",
  publicAccessToken: "your-storefront-public-access-token",
});
