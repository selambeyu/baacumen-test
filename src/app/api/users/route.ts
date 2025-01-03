import { NextRequest, NextResponse } from "next/server";
import { getUsers } from "@/lib/utils/query";

export async function GET(req: NextRequest) {
  const {
    search = "",
    page = "1",
    limit = "10",
  } = Object.fromEntries(req.nextUrl.searchParams);

  try {
    const { users, totalUsers } = await getUsers(
      search,
      parseInt(page),
      parseInt(limit)
    );
    console.log("users from prisma", users);
    const response = NextResponse.json({ users, totalUsers }, { status: 200 });
    response.headers.set(
      "Cache-Control",
      "public, s-maxage=60, stale-while-revalidate=30"
    );
    return response;
  } catch (error) {
    console.error("Failed to fetch users", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  return NextResponse.json(
    { message: "This is a post request" },
    { status: 200 }
  );
}
