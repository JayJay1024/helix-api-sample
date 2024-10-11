/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values.BigInt can represent values between -(2^63) + 1 and 2^63 - 1. */
  BigInt: { input: any; output: any; }
};

export type HealthInfo = {
  __typename?: 'HealthInfo';
  callTimes?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type HistoryRecord = {
  __typename?: 'HistoryRecord';
  bridge: Scalars['String']['output'];
  confirmedBlocks?: Maybe<Scalars['String']['output']>;
  endTime?: Maybe<Scalars['Int']['output']>;
  endTxHash?: Maybe<Scalars['String']['output']>;
  extData?: Maybe<Scalars['String']['output']>;
  fee: Scalars['String']['output'];
  feeToken: Scalars['String']['output'];
  fromChain: Scalars['String']['output'];
  guardSignatures?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lastRequestWithdraw?: Maybe<Scalars['BigInt']['output']>;
  messageNonce?: Maybe<Scalars['String']['output']>;
  needWithdrawLiquidity?: Maybe<Scalars['Boolean']['output']>;
  nonce: Scalars['BigInt']['output'];
  reason?: Maybe<Scalars['String']['output']>;
  recipient: Scalars['String']['output'];
  recvAmount?: Maybe<Scalars['String']['output']>;
  recvOuterTokenAddress?: Maybe<Scalars['String']['output']>;
  recvToken: Scalars['String']['output'];
  recvTokenAddress?: Maybe<Scalars['String']['output']>;
  relayer?: Maybe<Scalars['String']['output']>;
  requestTxHash: Scalars['String']['output'];
  responseTxHash?: Maybe<Scalars['String']['output']>;
  result: Scalars['Int']['output'];
  sendAmount: Scalars['String']['output'];
  sendOuterTokenAddress?: Maybe<Scalars['String']['output']>;
  sendToken: Scalars['String']['output'];
  sendTokenAddress?: Maybe<Scalars['String']['output']>;
  sender: Scalars['String']['output'];
  startTime: Scalars['Int']['output'];
  toChain: Scalars['String']['output'];
};

export type HistoryRecords = {
  __typename?: 'HistoryRecords';
  records?: Maybe<Array<Maybe<HistoryRecord>>>;
  total: Scalars['Int']['output'];
};

export type LnBridgeRelayInfo = {
  __typename?: 'LnBridgeRelayInfo';
  baseFee?: Maybe<Scalars['String']['output']>;
  bridge: Scalars['String']['output'];
  cost?: Maybe<Scalars['String']['output']>;
  dynamicFee?: Maybe<Scalars['String']['output']>;
  dynamicFeeExpire?: Maybe<Scalars['String']['output']>;
  dynamicFeeSignature?: Maybe<Scalars['String']['output']>;
  fromChain: Scalars['String']['output'];
  heartbeatTimestamp?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  lastTransferId?: Maybe<Scalars['String']['output']>;
  liquidityFeeRate?: Maybe<Scalars['Int']['output']>;
  margin?: Maybe<Scalars['String']['output']>;
  messageChannel?: Maybe<Scalars['String']['output']>;
  nonce: Scalars['BigInt']['output'];
  paused?: Maybe<Scalars['Boolean']['output']>;
  profit?: Maybe<Scalars['String']['output']>;
  protocolFee?: Maybe<Scalars['String']['output']>;
  relayer: Scalars['String']['output'];
  sendToken?: Maybe<Scalars['String']['output']>;
  signers?: Maybe<Scalars['String']['output']>;
  slashCount?: Maybe<Scalars['Int']['output']>;
  softTransferLimit?: Maybe<Scalars['String']['output']>;
  targetNonce?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['Int']['output'];
  toChain: Scalars['String']['output'];
  tokenKey?: Maybe<Scalars['String']['output']>;
  transactionHash: Scalars['String']['output'];
  transferLimit?: Maybe<Scalars['String']['output']>;
  version: Scalars['String']['output'];
  withdrawNonce?: Maybe<Scalars['BigInt']['output']>;
};

export type LnBridgeRelayInfos = {
  __typename?: 'LnBridgeRelayInfos';
  records?: Maybe<Array<Maybe<LnBridgeRelayInfo>>>;
  total: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  signConfirmedBlock?: Maybe<Scalars['String']['output']>;
  signDynamicFee?: Maybe<Scalars['String']['output']>;
  signHeartBeat?: Maybe<Scalars['String']['output']>;
};


export type MutationSignConfirmedBlockArgs = {
  block?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  relayer?: InputMaybe<Scalars['String']['input']>;
  signature?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationSignDynamicFeeArgs = {
  dynamicFee?: InputMaybe<Scalars['String']['input']>;
  dynamicFeeExpire?: InputMaybe<Scalars['String']['input']>;
  dynamicFeeSignature?: InputMaybe<Scalars['String']['input']>;
  fromChainId?: InputMaybe<Scalars['String']['input']>;
  relayer?: InputMaybe<Scalars['String']['input']>;
  signature?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  toChainId?: InputMaybe<Scalars['String']['input']>;
  tokenAddress?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSignHeartBeatArgs = {
  fromChainId?: InputMaybe<Scalars['String']['input']>;
  relayer?: InputMaybe<Scalars['String']['input']>;
  signature?: InputMaybe<Scalars['String']['input']>;
  softTransferLimit?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  toChainId?: InputMaybe<Scalars['String']['input']>;
  tokenAddress?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  checkLnBridgeExist?: Maybe<Scalars['Boolean']['output']>;
  firstHistoryRecord?: Maybe<HistoryRecord>;
  historyRecordById?: Maybe<HistoryRecord>;
  historyRecordByTxHash?: Maybe<HistoryRecord>;
  historyRecords?: Maybe<HistoryRecords>;
  previousHistoryRecord?: Maybe<HistoryRecord>;
  queryLnBridgeRelayInfos?: Maybe<LnBridgeRelayInfos>;
  queryLnBridgeSupportChains?: Maybe<Array<Maybe<SupportChains>>>;
  queryLnBridgeSupportedChains?: Maybe<Array<Maybe<TokenInfo>>>;
  queryMaxTransfer?: Maybe<Scalars['BigInt']['output']>;
  queryRelayRecords?: Maybe<HistoryRecords>;
  sortedLnBridgeRelayInfos?: Maybe<SortedLnBridgeRelayInfos>;
  tasksHealthCheck?: Maybe<Array<Maybe<HealthInfo>>>;
};


export type QueryCheckLnBridgeExistArgs = {
  fromChainId?: InputMaybe<Scalars['Int']['input']>;
  fromToken?: InputMaybe<Scalars['String']['input']>;
  toChainId?: InputMaybe<Scalars['Int']['input']>;
  toToken?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFirstHistoryRecordArgs = {
  bridge?: InputMaybe<Scalars['String']['input']>;
  fromChain?: InputMaybe<Scalars['String']['input']>;
  notsubmited?: InputMaybe<Scalars['Boolean']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  relayer?: InputMaybe<Scalars['String']['input']>;
  results?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  toChain?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type QueryHistoryRecordByIdArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryHistoryRecordByTxHashArgs = {
  txHash?: InputMaybe<Scalars['String']['input']>;
};


export type QueryHistoryRecordsArgs = {
  bridges?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fromChains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  needWithdrawLiquidity?: InputMaybe<Scalars['Boolean']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  recipient?: InputMaybe<Scalars['String']['input']>;
  recvTokenAddress?: InputMaybe<Scalars['String']['input']>;
  relayer?: InputMaybe<Scalars['String']['input']>;
  results?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  row?: InputMaybe<Scalars['Int']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  toChains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPreviousHistoryRecordArgs = {
  bridge?: InputMaybe<Scalars['String']['input']>;
  fromChain?: InputMaybe<Scalars['String']['input']>;
  nonce?: InputMaybe<Scalars['Int']['input']>;
  relayer?: InputMaybe<Scalars['String']['input']>;
  toChain?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQueryLnBridgeRelayInfosArgs = {
  bridge?: InputMaybe<Scalars['String']['input']>;
  fromChain?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  relayer?: InputMaybe<Scalars['String']['input']>;
  row?: InputMaybe<Scalars['Int']['input']>;
  toChain?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQueryLnBridgeSupportChainsArgs = {
  tokenKey?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQueryLnBridgeSupportedChainsArgs = {
  tokenKey?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQueryMaxTransferArgs = {
  balance?: InputMaybe<Scalars['String']['input']>;
  bridge?: InputMaybe<Scalars['String']['input']>;
  fromChain?: InputMaybe<Scalars['String']['input']>;
  toChain?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQueryRelayRecordsArgs = {
  bridge?: InputMaybe<Scalars['String']['input']>;
  fromChain?: InputMaybe<Scalars['String']['input']>;
  relayer?: InputMaybe<Scalars['String']['input']>;
  row?: InputMaybe<Scalars['Int']['input']>;
  toChain?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySortedLnBridgeRelayInfosArgs = {
  amount?: InputMaybe<Scalars['String']['input']>;
  bridge?: InputMaybe<Scalars['String']['input']>;
  decimals?: InputMaybe<Scalars['Int']['input']>;
  fromChain?: InputMaybe<Scalars['String']['input']>;
  row?: InputMaybe<Scalars['Int']['input']>;
  toChain?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTasksHealthCheckArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SortedLnBridgeRelayInfos = {
  __typename?: 'SortedLnBridgeRelayInfos';
  records?: Maybe<Array<Maybe<LnBridgeRelayInfo>>>;
  transferLimit: Scalars['BigInt']['output'];
};

export type SupportChains = {
  __typename?: 'SupportChains';
  fromChain: Scalars['String']['output'];
  toChains?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type TokenInfo = {
  __typename?: 'TokenInfo';
  chains?: Maybe<Array<Maybe<SupportChains>>>;
  tokenKey: Scalars['String']['output'];
};

export type QueryAvailableCrossChainsQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryAvailableCrossChainsQuery = { __typename?: 'Query', queryLnBridgeSupportedChains?: Array<{ __typename?: 'TokenInfo', tokenKey: string, chains?: Array<{ __typename?: 'SupportChains', fromChain: string, toChains?: Array<string | null> | null } | null> | null } | null> | null };

export type QuerySortedRelayersQueryVariables = Exact<{
  amount: Scalars['String']['input'];
  decimals: Scalars['Int']['input'];
  token: Scalars['String']['input'];
  fromChain: Scalars['String']['input'];
  toChain: Scalars['String']['input'];
}>;


export type QuerySortedRelayersQuery = { __typename?: 'Query', sortedLnBridgeRelayInfos?: { __typename?: 'SortedLnBridgeRelayInfos', transferLimit: any, records?: Array<{ __typename?: 'LnBridgeRelayInfo', sendToken?: string | null, relayer: string, margin?: string | null, baseFee?: string | null, protocolFee?: string | null, liquidityFeeRate?: number | null, lastTransferId?: string | null, withdrawNonce?: any | null, bridge: string } | null> | null } | null };


export const QueryAvailableCrossChainsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryAvailableCrossChains"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"queryLnBridgeSupportedChains"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tokenKey"},"value":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenKey"}},{"kind":"Field","name":{"kind":"Name","value":"chains"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fromChain"}},{"kind":"Field","name":{"kind":"Name","value":"toChains"}}]}}]}}]}}]} as unknown as DocumentNode<QueryAvailableCrossChainsQuery, QueryAvailableCrossChainsQueryVariables>;
export const QuerySortedRelayersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QuerySortedRelayers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amount"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"decimals"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fromChain"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"toChain"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sortedLnBridgeRelayInfos"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"amount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amount"}}},{"kind":"Argument","name":{"kind":"Name","value":"decimals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"decimals"}}},{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}},{"kind":"Argument","name":{"kind":"Name","value":"fromChain"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fromChain"}}},{"kind":"Argument","name":{"kind":"Name","value":"toChain"},"value":{"kind":"Variable","name":{"kind":"Name","value":"toChain"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transferLimit"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendToken"}},{"kind":"Field","name":{"kind":"Name","value":"relayer"}},{"kind":"Field","name":{"kind":"Name","value":"margin"}},{"kind":"Field","name":{"kind":"Name","value":"baseFee"}},{"kind":"Field","name":{"kind":"Name","value":"protocolFee"}},{"kind":"Field","name":{"kind":"Name","value":"liquidityFeeRate"}},{"kind":"Field","name":{"kind":"Name","value":"lastTransferId"}},{"kind":"Field","name":{"kind":"Name","value":"withdrawNonce"}},{"kind":"Field","name":{"kind":"Name","value":"bridge"}}]}}]}}]}}]} as unknown as DocumentNode<QuerySortedRelayersQuery, QuerySortedRelayersQueryVariables>;