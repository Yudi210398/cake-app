import { v2 as cloudinary } from 'cloudinary';

export const CloudinaryProvider = {
  provide: 'CLOUDINARY',
  useFactory: () => {
    return cloudinary.config({
      cloud_name: process.env.CLOUDNAME,
      api_key: process.env.API,
      api_secret: process.env.APISECRET,
    });
  },
};
