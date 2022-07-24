import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IMaterial, IMaterialCategory} from "../../types/types";

export const materialsAPI = createApi({
  reducerPath: "materialsAPI",
  baseQuery: fetchBaseQuery({baseUrl: "http://192.168.100.103:8010/"}),
  endpoints: builder => ({
    getCategories: builder.query<IMaterialCategory[], void>({
      query: () => `get_categories`,
    }),
    getMaterials: builder.query<IMaterial[], string>({
      query: id => `get_materials/${id}`,
    }),
  }),
});

export const {useGetCategoriesQuery, useGetMaterialsQuery} = materialsAPI;
