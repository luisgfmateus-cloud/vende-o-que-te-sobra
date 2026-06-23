import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    // Buscar todos os produtos ativos
    const products = await prisma.product.findMany({
      where: {
        status: 'ativo',
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        reviews: {
          select: {
            rating: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 50,
    });

    // Mapear resposta com rating médio
    const productsWithRating = products.map((product) => {
      const avgRating =
        product.reviews.length > 0
          ? product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length
          : 0;

      return {
        ...product,
        seller: {
          name: product.user.name,
          rating: avgRating,
        },
      };
    });

    return NextResponse.json(productsWithRating, { status: 200 });
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar produtos' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, description, category, type, price, location, userId } = await request.json();

    if (!title || !description || !category || !type || !location || !userId) {
      return NextResponse.json(
        { error: 'Todos os campos obrigatórios devem ser preenchidos' },
        { status: 400 }
      );
    }

    if (type === 'venda' && !price) {
      return NextResponse.json(
        { error: 'Preço é obrigatório para vendas' },
        { status: 400 }
      );
    }

    const product = await prisma.product.create({
      data: {
        title,
        description,
        category,
        type,
        price: type === 'venda' ? price : null,
        location,
        userId,
      },
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });

    return NextResponse.json(
      {
        message: 'Produto criado com sucesso',
        product,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    return NextResponse.json(
      { error: 'Erro ao criar produto' },
      { status: 500 }
    );
  }
}
