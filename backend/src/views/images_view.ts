import Image from '../models/Image';

export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `https://projeto-cn-gp8.s3.us-east-1.amazonaws.com/${image.path}`,
        };
    },

    renderMany(images: Image[]) {
        return images.map(image => this.render(image));
    }
};