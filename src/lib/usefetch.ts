
import { _axios } from "./_axios";
import { QueryKey, useQuery } from "react-query";
import { AxiosError } from "axios";

export const TOKEN_STORAGE_KEY = "vin-access-token"; // Replace with your actual key

export async function getter(url: string) {
  const token = localStorage.getItem(TOKEN_STORAGE_KEY);
  const response = await _axios.get(url, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });

  return response;
}



interface FetchProps {
  url: string;
  queryKey?: QueryKey;
  query?: Record<string, unknown>;
}

export function useFetch({ url, queryKey, query = {} }: FetchProps) {
 
  return useQuery({
    queryKey: queryKey || [url, ...Object.values(query)],
    queryFn: () =>
      getter(`${url}`)
        .then((resp) => {
          return resp?.data;
        })
        .catch((error: AxiosError) => {
          // error.response?.status === 401 && signout()
          return { error: error?.message || "Error fetching data" };
        }),
    enabled: url ? true : false,
  });
}



