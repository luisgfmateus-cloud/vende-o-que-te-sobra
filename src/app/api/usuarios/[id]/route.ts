import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: params.id },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        bio: true,
        location: true,
        phone: true,
        createdAt: true,
        products: {
          where: { status: 'ativo' },
          select: {
            id: true,
            title: true,
          },
        },
        receivedReviews: {
          select: {
            rating: true,
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Usuário não encontrado' },
        { status: 404 }
      );
    }

    const avgRating =
      user.receivedReviews.length > 0
        ? user.receivedReviews.reduce((sum, r) => sum + r.rating, 0) / user.receivedReviews.length
        : 0;

    return NextResponse.json(
      {
        ...user,
        rating: avgRating,
        reviewCount: user.receivedReviews.length,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar usuário' },
      { status: 500 }
    );
  }
}
