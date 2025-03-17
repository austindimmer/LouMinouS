// scripts/seed.ts

import { getPayload } from 'payload';
import config from '../payload.config'; // Adjust the import path to your actual config

async function seed() {
  // 1. Initialize Payload locally with your config
  const payload = await getPayload({ config });

  // 2. Create a sample user
  const user = await payload.create({
    collection: 'users',
    data: {
      email: 'dev@payloadcms.com',
      password: 'some-password',
      name: 'Developer Account',
      role: 'admin',
    },
  });
  console.log('Seeded user:', user);

  // 3. Create a sample tenant (if you have a Tenants collection, for example)
  const tenant = await payload.create({
    collection: 'tenants',
    data: {
      name: 'Seeded Tenant',
      slug: 'seeded-tenant',
      domain: 'example.org',
      plan: 'basic',
      status: 'active',
    },
  });
  console.log('Seeded tenant:', tenant);

  // 4. Create a sample page (if you have a Pages collection)
//   const page = await payload.create({
//     collection: 'pages',
//     data: {
//       title: 'Seeded Homepage',
//       // Fill out any other required fields for your pages
//     },
//   });
//   console.log('Seeded page:', page);

  // ...Add more create calls for other collections as needed

  console.log('✅ Seeding complete!');
}

// If you want to run it via "ts-node scripts/seed.ts" or "npm run seed",
// you can simply call the function in an IIFE (Immediately Invoked Function Expression):
(async () => {
  try {
    await seed();
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
    process.exit(1);
  }
})();
