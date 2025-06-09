import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    dto: CreateProductDto,
    images: { url: string; description: string }[],
  ) {
    return this.prisma.product.create({
      data: {
        name: dto.name,
        description: dto.description,
        price: dto.price,
        details: dto.details as unknown as Prisma.InputJsonValue,
        images: {
          create: images.map((img) => ({
            url: img.url,
            description: img.description,
          })),
        },
      },
      include: { images: true },
    });
  }

  async findAll() {
    return this.prisma.product.findMany({ include: { images: true } });
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: { images: true },
    });
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  async update(id: string, dto: UpdateProductDto) {
    try {
      return await this.prisma.product.update({
        where: { id },
        data: {
          ...dto,
          details: dto.details as unknown as Prisma.InputJsonValue,
        },
        include: { images: true },
      });
    } catch (e) {
      throw new NotFoundException('Product not found');
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.product.delete({ where: { id } });
    } catch (e) {
      throw new NotFoundException('Product not found');
    }
  }
}
