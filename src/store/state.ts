const initialState: () => any = () => ({
  user: {
    info: null,
    credential: null,
  },
  mailbox: {
    messages: [],
  },
  shop: {
    goods: [{
      id: 1,
      image: '',
      title: 'Test Goods 1',
      price: 19.99,
      up: true,
    }, {
      id: 2,
      image: '',
      title: 'Test Goods 2',
      price: 29.99,
      up: false,
    }, {
      id: 3,
      image: '',
      title: 'Test Goods 3',
      price: 39.99,
      up: true,
    }, {
      id: 4,
      image: '',
      title: 'Test Goods 4',
      price: 49.99,
      up: false,
    }],
    orders: [{
      id: 1,
      sn: 'abcdefg',
      goodsId: 1,
      originPrice: 19.99,
      purchasePrice: 19.99,
      status: 'paid',
      createdAt: new Date('2019-12-21 00:52:23'),
    }, {
      id: 2,
      sn: 'abcdefg',
      goodsId: 1,
      originPrice: 19.99,
      purchasePrice: 19.99,
      status: 'unpaid',
      createdAt: new Date('2019-12-21 00:52:23'),
    }, {
      id: 3,
      sn: 'abcdefg',
      goodsId: 1,
      originPrice: 19.99,
      purchasePrice: 19.99,
      status: 'cancelled',
      createdAt: new Date('2019-12-21 00:52:23'),
    }, {
      id: 4,
      sn: 'abcdefg',
      goodsId: 1,
      originPrice: 19.99,
      purchasePrice: 19.99,
      status: 'completed',
      createdAt: new Date('2019-12-21 00:52:23'),
    }],
  },
});

export {initialState};
