export default function handler(req, res) {
  const { category } = req.query;
  let result = [];
  switch (category) {
    case 't1': {
      result = [
        {
          id: '1',
          title: '거래물건금전',
          desc: '거래물건금전',
        },
        {
          id: '2',
          title: '거래물건금전',
          desc: '거래물건금전',
        },
        {
          id: '3',
          title: '거래물건금전',
          desc: '거래물건금전',
        },
        {
          id: '41414',
          title: '거래물건금전',
          desc: '거래물건금전',
        },
      ];
      break;
    }
    case 't2': {
      result = [
        {
          id: '2',
          title: '취업고용',
          desc: '취업고용',
        },
        {
          id: '123123',
          title: '취업고용',
          desc: '취업고용',
        },
        {
          id: '124124',
          title: '취업고용',
          desc: '취업고용',
        },
      ];
      break;
    }
    case 't3': {
      result = [
        {
          id: '3',
          title: '회사운영',
          desc: '회사운영',
        },
        {
          id: '123',
          title: '회사운영',
          desc: '회사운영',
        },
        {
          id: '1256',
          title: '회사운영',
          desc: '회사운영',
        },
      ];
      break;
    }
    case 't4': {
      result = [
        {
          id: '114',
          title: '부동산거래',
          desc: '부동산거래',
        },
      ];
      break;
    }
    case 't5': {
      result = [
        {
          id: '5123',
          title: '세무회계',
          desc: '세무회계',
        },
        {
          id: '567567',
          title: '세무회계',
          desc: '세무회계',
        },
      ];
      break;
    }
    case 't6': {
      result = [
        {
          id: '1116',
          title: '하청용역',
          desc: '하청용역',
        },
        {
          id: '6333',
          title: '하청용역',
          desc: '하청용역',
        },
      ];
      break;
    }
    case 't7': {
      result = [
        {
          id: '1257',
          title: '투자주식',
          desc: '투자주식',
        },
        {
          id: '7777',
          title: '투자주식',
          desc: '투자주식',
        },
        {
          id: '6667',
          title: '투자주식',
          desc: '투자주식',
        },
        {
          id: '557',
          title: '투자주식',
          desc: '투자주식',
        },
        {
          id: '799',
          title: '투자주식',
          desc: '투자주식',
        },
      ];
      break;
    }
  }

  res.status(200).json(result);
}
