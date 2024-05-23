"use client"
import { jwtDecode } from "jwt-decode";

export const VerifyStaffToken = () => {
  if (typeof window === "undefined") {
    return { valid: false };
  }

  const staffToken = localStorage.getItem("token");

  if (!staffToken) {
    return { valid: false};
  }

  try {
    const decoded = jwtDecode(staffToken);
    const now = Date.now() / 1000;

    if (decoded.exp < now) {
      return { valid: false};
    }

    return { valid: true, verifyToken:staffToken};
  } catch (error) {
    return { valid: false};
  }
};
