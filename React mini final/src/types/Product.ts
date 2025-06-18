export interface Product {
    id: number;
    attributes: {
      name: string;
      price: number;
      image: {
        data: {
          attributes: {
            url: string;
          };
        }[];
      };
    };
  }
//   datalarintypelari


