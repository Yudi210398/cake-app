import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import * as stremifer from 'streamifier';

@Injectable()
export class CloudinaryService {
  uploadFile(
    file: Express.Multer.File,
  ): Promise<UploadApiErrorResponse | UploadApiResponse> {
    return new Promise<UploadApiErrorResponse | UploadApiResponse>(
      (resoleve, reject) => {
        const upload = v2.uploader.upload_stream(
          { folder: 'dummy' },
          (err, result) => {
            if (err) reject(err);
            resoleve(result);
          },
        );
        stremifer.createReadStream(file.buffer).pipe(upload);
      },
    );
  }
}
