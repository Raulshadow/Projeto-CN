import multerS3 from 'multer-s3';
import { S3Client } from '@aws-sdk/client-s3';

// Configuração da instância do S3 com suas credenciais
const s3 = new S3Client({
    region: process.env.AWS_REGION
});

export default {
    storage: multerS3({
        s3: s3,
        bucket: 'projeto-cn-gp8', // Nome do seu bucket S3
        contentType: multerS3.AUTO_CONTENT_TYPE, // Define o tipo de conteúdo automaticamente
        key: (request, file, cb) => {
            const fileName = `${Date.now()}-${file.originalname}`;
            cb(null, fileName);
        }
    })
};
