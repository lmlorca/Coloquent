import { QueryKey, UseQueryOptions } from '@tanstack/react-query'

export type UseQueryBuilderOptions<T, TData = T> = Omit<
  UseQueryOptions<T, any, TData, QueryKey>,
  'queryFn' | 'queryKey'
> & { queryKey?: QueryKey }
