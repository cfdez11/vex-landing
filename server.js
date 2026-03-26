import express from "express";
import app from "@cfdez11/vex";

// Vercel detects Express apps from a root entry file like `server.js`.
// This no-op reference keeps the import explicit without changing runtime behavior.
void express;

export default app;
