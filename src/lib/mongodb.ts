// src/lib/mongodb.ts

import { MongoClient } from 'mongodb';

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(process.env.MONGODB_URI || '');
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(process.env.MONGODB_URI || '');
  clientPromise = client.connect();
}

export default clientPromise;
