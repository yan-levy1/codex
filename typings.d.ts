declare module '@nestjs/common' {
  export function Module(metadata?: any): ClassDecorator;
  export function Injectable(options?: any): ClassDecorator;
  export function Controller(path?: string): ClassDecorator;
  export function Body(...args: any[]): ParameterDecorator;
  export function Delete(...args: any[]): MethodDecorator;
  export function Get(...args: any[]): MethodDecorator;
  export function Param(...args: any[]): ParameterDecorator;
  export function Post(...args: any[]): MethodDecorator;
  export function Put(...args: any[]): MethodDecorator;
  export function UploadedFiles(...args: any[]): ParameterDecorator;
  export function UseInterceptors(...args: any[]): MethodDecorator;
  export class ValidationPipe {
    constructor(options?: any);
  }
  export class NotFoundException extends Error {
    constructor(message?: string);
  }
  export interface OnModuleInit { onModuleInit(): any; }
  export interface OnModuleDestroy { onModuleDestroy(): any; }
}

declare module '@nestjs/core';
declare module '@nestjs/platform-express';
declare module '@nestjs/swagger' {
  export function ApiTags(...args: any[]): ClassDecorator;
  export function ApiConsumes(...args: any[]): MethodDecorator;
  export function ApiOperation(...args: any[]): MethodDecorator;
  export function ApiBody(...args: any[]): MethodDecorator;
  export function ApiProperty(...args: any[]): PropertyDecorator;
  export function PartialType<T>(classRef: T): any;
  export class DocumentBuilder {
    setTitle(title: string): this;
    setDescription(desc: string): this;
    setVersion(ver: string): this;
    build(): any;
  }
  export class SwaggerModule {
    static createDocument(app: any, config: any): any;
    static setup(path: string, app: any, doc: any): void;
  }
}
declare module '@nestjs/cli';
declare module 'multer';
declare module 'swagger-ui-express';
declare module 'class-validator' {
  export const IsArray: (...args: any[]) => PropertyDecorator;
  export const IsNotEmpty: (...args: any[]) => PropertyDecorator;
  export const IsNumber: (...args: any[]) => PropertyDecorator;
  export const IsPositive: (...args: any[]) => PropertyDecorator;
  export const IsString: (...args: any[]) => PropertyDecorator;
  export const ValidateNested: (...args: any[]) => PropertyDecorator;
}
declare module 'class-transformer' {
  export const Type: (...args: any[]) => PropertyDecorator;
}

declare module '@prisma/client' {
  export class PrismaClient {
    $connect(): Promise<void>;
    $disconnect(): Promise<void>;
    product: any;
  }
  export namespace Prisma {
    type InputJsonValue = any;
  }
}

declare namespace Express {
  namespace Multer {
    interface File {
      fieldname?: string;
      originalname?: string;
      encoding?: string;
      mimetype?: string;
      size?: number;
      destination?: string;
      filename?: string;
      path?: string;
      buffer?: Buffer;
    }
  }
}
