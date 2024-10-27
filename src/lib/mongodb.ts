// src/lib/mongodb.ts
import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI || '';
let client: MongoClient;
let db: Db;

export async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
    db = client.db('academic-writing'); // Adjust database name as necessary
  }
  return { client, db };
}
