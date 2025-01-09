"use server";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export async function CreateOnRampTransaction(
  amount: number,
  provider: string
) {
  const session = await getServerSession(authOptions);
  const token = Math.random().toString(); // we don't have real banking api, so we are just taking a random number as a string
  const userId = session.user.id;

  if (!userId) {
    return {
      message: "User not logged in",
    };
  }
  prisma.onRampTransaction.create({
    data: {
      userId: Number(userId),
      amount: amount,
      status: "Processing",
      provider,
      token,
      startTime: new Date(),
    },
  });
}
