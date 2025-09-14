import { getPhotoById } from "@/lib/image-data";
import { NextResponse } from "next/server";

export async function GET(_resquest, { params }) {
  const { id } = await params;
  const photo = await getPhotoById(id);

  return NextResponse.json(photo);
}
