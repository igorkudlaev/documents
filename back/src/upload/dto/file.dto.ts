import { IsFile, MemoryStoredFile } from 'nestjs-form-data';

export class FileDto {
  @IsFile()
  readonly file: MemoryStoredFile;
}
