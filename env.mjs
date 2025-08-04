import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production", "test"]),
    VERCEL_URL: z.string().url().optional(),
    // Real estate API keys and tokens
    REALSCOUT_API_TOKEN: z.string().optional(),
    HOMEBOT_API_TOKEN: z.string().optional(),
    CLOUDCMA_API_KEY: z.string().optional(),
    PERCY_API_KEY: z.string().optional(),
    // Analytics and tracking
    GOOGLE_ANALYTICS_ID: z.string().optional(),
    FACEBOOK_PIXEL_ID: z.string().optional(),
    // A/B testing
    OPTIMIZELY_PROJECT_ID: z.string().optional(),
    // Email marketing
    MAILCHIMP_API_KEY: z.string().optional(),
    SENDGRID_API_KEY: z.string().optional(),
    // CRM integration
    FOLLOW_UP_BOSS_API_KEY: z.string().optional(),
    KVCORE_API_KEY: z.string().optional(),
    // Database and storage
    DATABASE_URL: z.string().url().optional(),
    REDIS_URL: z.string().url().optional(),
    // Maps and geolocation
    GOOGLE_MAPS_API_KEY: z.string().optional(),
    MAPBOX_API_KEY: z.string().optional(),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url().optional(),
    // Public API keys (safe for client-side)
    NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: z.string().optional(),
    NEXT_PUBLIC_FACEBOOK_PIXEL_ID: z.string().optional(),
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: z.string().optional(),
    NEXT_PUBLIC_MAPBOX_API_KEY: z.string().optional(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    VERCEL_URL: process.env.VERCEL_URL,
    // Real estate API keys and tokens
    REALSCOUT_API_TOKEN: process.env.REALSCOUT_API_TOKEN,
    HOMEBOT_API_TOKEN: process.env.HOMEBOT_API_TOKEN,
    CLOUDCMA_API_KEY: process.env.CLOUDCMA_API_KEY,
    PERCY_API_KEY: process.env.PERCY_API_KEY,
    // Analytics and tracking
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    FACEBOOK_PIXEL_ID: process.env.FACEBOOK_PIXEL_ID,
    // A/B testing
    OPTIMIZELY_PROJECT_ID: process.env.OPTIMIZELY_PROJECT_ID,
    // Email marketing
    MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    // CRM integration
    FOLLOW_UP_BOSS_API_KEY: process.env.FOLLOW_UP_BOSS_API_KEY,
    KVCORE_API_KEY: process.env.KVCORE_API_KEY,
    // Database and storage
    DATABASE_URL: process.env.DATABASE_URL,
    REDIS_URL: process.env.REDIS_URL,
    // Maps and geolocation
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
    MAPBOX_API_KEY: process.env.MAPBOX_API_KEY,
    // Public environment variables
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
    NEXT_PUBLIC_FACEBOOK_PIXEL_ID: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID,
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    NEXT_PUBLIC_MAPBOX_API_KEY: process.env.NEXT_PUBLIC_MAPBOX_API_KEY,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
})
