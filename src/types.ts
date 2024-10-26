// src/types.ts
export interface Order {
    _id: string;
    id: string;          // Assuming `id` is a string
    title: string;       // The title of the order
    status: string;      // The status of the order (e.g., "pending", "completed")
    // Add any other fields that your Order model includes
  }
  