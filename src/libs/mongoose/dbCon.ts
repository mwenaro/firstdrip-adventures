import mongoose from "mongoose";



let cached: any = null;

if (!cached) {
  cached = { conn: null, promise: null };
}

function getDbURI(dbname: string) {
  const user = encodeURIComponent(process.env.NEXT_PUBLIC_MONGODB_USER || "");
  const pwd = encodeURIComponent(process.env.NEXT_PUBLIC_MONGODB_PWD || "");
  const MONGO_DB_URI_DEV = `mongodb://127.0.0.1:27017/${dbname}?retryWrites=true&w=majority`;
  const LIVE_URI = `mongodb+srv://${user}:${pwd}@cluster0.2f29nts.mongodb.net/${dbname}?retryWrites=true&w=majority`;
  const ENV = process.env.NODE_ENV || "development";

  if (1 !== 1) return ENV === "production" ? LIVE_URI : MONGO_DB_URI_DEV;
  return LIVE_URI;
}

export async function dbCon() {
  const dbName =
    process.env.APP_NAME || process.env.DARAJA_API_APP_NAME || "test-db";
  const MONGO_DB_URI = getDbURI(dbName);

  try {
    await mongoose.connect(MONGO_DB_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

// db connect
export async function dbConnect() {
  const dbName =
    process.env.APP_NAME || process.env.DARAJA_API_APP_NAME || "test-db";
  const MONGO_DB_URI = getDbURI(dbName);
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGO_DB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}
