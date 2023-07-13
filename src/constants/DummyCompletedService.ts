export const DummyCompletedService = {
  before: [
    'https://cdn.imweb.me/upload/S20221013551b2718f486d/6cab412f89e40.jpg',
    'https://cdn.imweb.me/upload/S20221013551b2718f486d/cfdef9e764b03.jpg',
  ],
  after: [
    'https://cdn.imweb.me/upload/S20221013551b2718f486d/a64f8f6b293ad.jpg',
    'https://cdn.imweb.me/upload/S20221013551b2718f486d/ed4e697dc02ca.jpg',
  ],
};

export const DummyCompletedUserList = [
  {
    reservationId: 0,
    name: '김고객',
    phoneNumber: '010-1234-1234',
    address: '서울시 중랑구 열다로 111',
    totalPrice: 219000,
    reservationDate: '2023-03-12',
    managerNames: ['박매니저, 최매니저'],
  },
  {
    reservationId: 1,
    name: '박고객',
    phoneNumber: '010-1234-1234',
    address: '서울시 강서구 열다로 111',
    totalPrice: 328000,
    reservationDate: '2023-03-12',
    managerNames: ['박매니저, 최매니저'],
  },
  {
    reservationId: 2,
    name: '최고객',
    phoneNumber: '010-1234-1234',
    address: '서울시 관악구 열다로 111',
    totalPrice: 119000,
    reservationDate: '2023-03-12',
    managerNames: ['박매니저, 최매니저'],
  },
  {
    reservationId: 3,
    name: '이고객',
    phoneNumber: '010-1234-1234',
    address: '서울시 서초구 열다로 111',
    totalPrice: 235000,
    reservationDate: '2023-03-12',
    managerNames: ['박매니저, 최매니저'],
  },
];

export const DummyCompletedUser = {
  reservationId: 3,
  name: '이고객',
  address: '서울시 서초구 열다로 111',
  reservationDate: '2023-03-12',
  before: [
    {
      id: 0,
      imgUrl: 'https://cdn.imweb.me/upload/S20221013551b2718f486d/6cab412f89e40.jpg',
    },
    {
      id: 1,
      imgUrl: 'https://cdn.imweb.me/upload/S20221013551b2718f486d/cfdef9e764b03.jpg',
    },
  ],
  after: [
    {
      id: 0,
      imgUrl: 'https://cdn.imweb.me/upload/S20221013551b2718f486d/a64f8f6b293ad.jpg',
    },
    {
      id: 1,
      imgUrl: 'https://cdn.imweb.me/upload/S20221013551b2718f486d/ed4e697dc02ca.jpg',
    },
  ],
};
