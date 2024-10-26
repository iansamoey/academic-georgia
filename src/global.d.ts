// src/global.d.ts

import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';

declare global {
  var mongoose: {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Connection> | null;
  };

  var _mongoClientPromise: Promise<MongoClient> | undefined;
}
