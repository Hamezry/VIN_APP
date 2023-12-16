import { _axios } from "./_axios";
import { AxiosError, AxiosResponse } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { TOKEN_STORAGE_KEY } from "./usefetch";
import { usePostContext } from "../context/post_context";

interface PostProps {
  url: string;

  callback?: (response: AxiosResponse) => void;
  invalidateQuery?: [];
  encryptPayload?: boolean;
  handleError?: (response: AxiosResponse<unknown, any> | undefined) => void;
}

export async function poster(
  url: string,
  data: Record<string, unknown> | FormData
) {
  const token = localStorage.getItem(TOKEN_STORAGE_KEY);
  const response = await _axios.post(url, data, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });

  return response;
}

export function usePost({ url, callback, invalidateQuery }: PostProps) {
  const queryClient = useQueryClient();
  const { setResponseData } = usePostContext();
  return useMutation({
    mutationFn: (data: Record<string, unknown> | FormData) => poster(url, data),
    onSuccess: async (response: AxiosResponse) => {
      const _data = response?.data.data;
      setResponseData(_data);
      callback && callback(_data);
      invalidateQuery && (await queryClient.invalidateQueries(invalidateQuery));
      return _data;
    },

    onError: (error: AxiosError) => {
      const _error: any = error?.response?.data;
      console.log(_error, "error");
    },
  });
}

