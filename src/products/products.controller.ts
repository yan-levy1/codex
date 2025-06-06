import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiConsumes,
  ApiOperation,
  ApiTags,
  ApiBody,
} from '@nestjs/swagger';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FilesInterceptor('images', undefined, {
      storage: diskStorage({
        destination: './uploads',
        filename: (_req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
      }),
    }),
  )
  @ApiBody({ type: CreateProductDto })
  @ApiOperation({ summary: 'Create a product' })
  create(
    @UploadedFiles() files: Express.Multer.File[],
    @Body() dto: CreateProductDto,
  ) {
    const images = files.map((file, index) => ({
      url: file.path,
      description: dto.imageDescriptions[index] || '',
    }));
    return this.productsService.create(dto, images);
  }

  @Get()
  @ApiOperation({ summary: 'List products' })
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a product by id' })
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a product' })
  update(@Param('id') id: string, @Body() dto: UpdateProductDto) {
    return this.productsService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a product' })
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
