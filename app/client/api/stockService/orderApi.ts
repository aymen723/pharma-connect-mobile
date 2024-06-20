import { getLocalAccessToken } from "@/Hooks/token";
import { STOCK_SERVICE_URL_V1 } from "../../config/settings";
import { Filter } from "../../types/requests";
import { OrderFilterParams } from "../../types/requests/paymentRequests";
import { Page } from "../../types/responses";
import { OrderRespData } from "../../types/responses/StockResponses";
import { prepareSearchParams } from "../../util/dataTransformation";
import axios, { AxiosRequestConfig } from "axios";

export const fetchOrdres = async (
  searchFilter?: Filter<OrderFilterParams>,
  config?: AxiosRequestConfig
) => {
  const params = prepareSearchParams(searchFilter);
  const token = await getLocalAccessToken();
  console.log(token, "here in the fetch orders func");
  return axios<Page<OrderRespData>>({
    url: STOCK_SERVICE_URL_V1 + `/orders`,
    headers: {
      Authorization: "Bearer " + token,
      ...config?.headers,
    },
    params,
    method: "GET",
    ...config,
  });
};

export const fetchOrderById = (
  orderId: OrderRespData["id"],
  config?: AxiosRequestConfig
) => {
  return axios<OrderRespData>({
    url: STOCK_SERVICE_URL_V1 + `/orders/${orderId}`,
    headers: {
      Authorization: "Bearer " + getLocalAccessToken(),
      ...config?.headers,
    },
    method: "GET",
    ...config,
  });
};
