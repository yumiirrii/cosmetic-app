import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

// すでに窓口（インスタンス）があればそれを使い、なければ新しく作る
export const prisma = globalForPrisma.prisma || new PrismaClient();

// 本番環境以外（開発環境）では、グローバルに窓口を保存して使い回す
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
