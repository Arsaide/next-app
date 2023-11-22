// @ts-ignore
import Post from "@/models/Post.ts";
import connect from "@/utils/db";
import {NextRequest, NextResponse} from "next/server";

export const GET = async (request: NextRequest) => {
    const url = new URL(request.url);
    const username = url.searchParams.get("username");

    try {
        await connect();
        // @ts-ignore
        const posts = await Post.find(username && { username });

        return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        return new NextResponse("Error in response of DB", { status: 500 });
    }
};
