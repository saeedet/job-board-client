import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Applicant = {
  __typename?: 'Applicant';
  age: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  jobs: Array<Job>;
  lastName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CreateApplicantInput = {
  age: Scalars['Int'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type CreateJobInput = {
  date: Scalars['String'];
  description: Scalars['String'];
  location: Scalars['String'];
  title: Scalars['String'];
};

export type Job = {
  __typename?: 'Job';
  applicants: Array<Applicant>;
  createdAt: Scalars['DateTime'];
  date: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  location: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createApplicant: Applicant;
  createApplicantforJob: Job;
  createJob: Job;
  deleteApplicant: Scalars['String'];
  deleteJob: Scalars['String'];
  updateApplicant: Applicant;
  updateJob: Job;
};


export type MutationCreateApplicantArgs = {
  input: CreateApplicantInput;
};


export type MutationCreateApplicantforJobArgs = {
  applicant: CreateApplicantInput;
  jobId: Scalars['Float'];
};


export type MutationCreateJobArgs = {
  input: CreateJobInput;
};


export type MutationDeleteApplicantArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteJobArgs = {
  id: Scalars['Float'];
};


export type MutationUpdateApplicantArgs = {
  input: UpdateApplicantInput;
};


export type MutationUpdateJobArgs = {
  input: UpdateJobInput;
};

export type Query = {
  __typename?: 'Query';
  getApplicant: Applicant;
  getApplicants: Array<Applicant>;
  getJob?: Maybe<Job>;
  getJobs: Array<Job>;
};


export type QueryGetApplicantArgs = {
  id: Scalars['Float'];
};


export type QueryGetJobArgs = {
  id: Scalars['Float'];
};

export type UpdateApplicantInput = {
  age?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  lastName?: InputMaybe<Scalars['String']>;
};

export type UpdateJobInput = {
  date?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  location?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type GetJobsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetJobsQuery = { __typename?: 'Query', getJobs: Array<{ __typename?: 'Job', title: string }> };


export const GetJobsDocument = gql`
    query getJobs {
  getJobs {
    title
  }
}
    `;

/**
 * __useGetJobsQuery__
 *
 * To run a query within a React component, call `useGetJobsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetJobsQuery(baseOptions?: Apollo.QueryHookOptions<GetJobsQuery, GetJobsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobsQuery, GetJobsQueryVariables>(GetJobsDocument, options);
      }
export function useGetJobsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobsQuery, GetJobsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobsQuery, GetJobsQueryVariables>(GetJobsDocument, options);
        }
export type GetJobsQueryHookResult = ReturnType<typeof useGetJobsQuery>;
export type GetJobsLazyQueryHookResult = ReturnType<typeof useGetJobsLazyQuery>;
export type GetJobsQueryResult = Apollo.QueryResult<GetJobsQuery, GetJobsQueryVariables>;