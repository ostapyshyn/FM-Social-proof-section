import colton from '../img/image-colton.jpg';
import anne from '../img/image-anne.jpg';
import irene from '../img/image-irene.jpg';
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    user: {
      name: 'Colton Smith',
      isVerified: true,
      photo: colton,
    },
    content: `“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”`,
  },
  {
    user: {
      name: 'Irene Roberts',
      isVerified: false,
      photo: irene,
    },
    content: `“ Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.”`,
  },
  {
    user: {
      name: 'Anne Wallace',
      isVerified: true,
      photo: anne,
    },
    content: `“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ”`,
  },
];
