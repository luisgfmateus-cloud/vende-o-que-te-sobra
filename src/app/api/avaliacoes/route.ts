import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const { productId, reviewerId, revieweeId, rating, comment } = await request.json();

    if (!productId || !reviewerId || !revieweeId || !rating) {
      return NextResponse.json(
        { error: 'Campos obrigatórios faltando' },
        { status: 400 }
      );
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Rating deve estar entre 1 e 5' },
        { status: 400 }
      );
    }

    const review = await prisma.review.create({
      data: {
        rating,
        comment,
        productId,
        reviewerId,
        revieweeId,
      },
      include: {
        reviewer: {
          select: {
            name: true,
            image: true,
          },
        },
      },
    });

    return NextResponse.json(
      {
        message: 'Avaliação criada com sucesso',
        review,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Erro ao criar avaliação:', error);
    return NextResponse.json(
      { error: 'Erro ao criar avaliação' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const userId = request.nextUrl.searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'userId é obrigatório' },
        { status: 400 }
      );
    }

    const reviews = await prisma.review.findMany({
      where: {
        revieweeId: userId,
      },
      include: {
        reviewer: {
          select: {
            name: true,
            image: true,
          },
        },
        product: {
          select: {
            title: true,
          },
        },
      },
    });

    return NextResponse.json(reviews, { status: 200 });
  } catch (error) {
    console.error('Erro ao buscar avaliações:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar avaliações' },
      { status: 500 }
    );
  }
}
