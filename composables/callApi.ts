export async function callApi(endPoint: string, opts?: {} | undefined) {
  const config = useRuntimeConfig();

  return $fetch(endPoint, {
    baseURL: config.public.apiBaseUrl,
    ...opts,
  });
}
