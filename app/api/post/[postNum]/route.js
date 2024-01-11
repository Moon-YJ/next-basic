// Delete, 상세페이지는 dynamic routing으로 처리

import { NextResponse } from 'next/server';
import { posts } from '@/DB/postData';

export async function GET(_, res) {
	const { postNum } = await res.params;
	return NextResponse.json({ result: posts[parseInt(postNum)] });
}
