import ApiService from '../../utils/network';

const baseRequestApi = {
  getBaseRequest(country: string): Promise<any> {
    const url = `/search`;
    // return ApiService.get(`/search?country=United+States`);
    return ApiService.get(url, {
      params: {
        country,
      },
    });
  },
};

export default baseRequestApi;
