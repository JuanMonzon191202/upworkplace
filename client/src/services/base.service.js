import { apiSliceWithRefresh } from "../api/apiSlice";

export const baseApiSlice = apiSliceWithRefresh.injectEndpoints({
  endpoints: (builder) => ({
    getCarees: builder.query({
      query: () => ({
        url: `/carees/select/`,
      }),
    }),
    getJobs: builder.query({
      query: (params) => ({
        url: `/jobs/`,
        params,
      }),
    }),
    getJobsById: builder.query({
      query: (id) => ({
        url: `/jobs/${id}/`,
      }),
    }),
    postJobs: builder.query({
      query: (body) => ({
        url: `/jobs/`,
        body,
        method: "POST",
      }),
    }),
    patchJobs: builder.query({
      query: ({ id, body }) => ({
        url: `/jobs/${id}/`,
        body,
        method: "PATCH",
      }),
    }),
    getApplications: builder.query({
      query: (params) => ({
        url: `/applications/`,
        params,
      }),
    }),
    getApplicationsById: builder.query({
      query: (id) => ({
        url: `/applications/${id}/`,
      }),
    }),
    postApplications: builder.query({
      query: (body) => ({
        url: `/applications/`,
        body,
        method: "POST",
        headers: {
          "content-type": "multipart/form-data",
        },
      }),
    }),
    patchApplications: builder.query({
      query: ({ id, body }) => ({
        url: `/applications/${id}/`,
        body,
        method: "PATCH",
      }),
    }),
  }),
});

export const baseApi = baseApiSlice.endpoints;
