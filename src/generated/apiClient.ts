/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { PetRequestBuilderNavigationMetadata, PetRequestBuilderRequestsMetadata, type PetRequestBuilder } from './pet/index.js';
// @ts-ignore
import { StoreRequestBuilderNavigationMetadata, type StoreRequestBuilder } from './store/index.js';
// @ts-ignore
import { type UserRequestBuilder, UserRequestBuilderNavigationMetadata, UserRequestBuilderRequestsMetadata } from './user/index.js';
// @ts-ignore
import { apiClientProxifier, registerDefaultDeserializer, registerDefaultSerializer, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
// @ts-ignore
import { FormParseNodeFactory, FormSerializationWriterFactory } from '@microsoft/kiota-serialization-form';
// @ts-ignore
import { JsonParseNodeFactory, JsonSerializationWriterFactory } from '@microsoft/kiota-serialization-json';
// @ts-ignore
import { MultipartSerializationWriterFactory } from '@microsoft/kiota-serialization-multipart';
// @ts-ignore
import { TextParseNodeFactory, TextSerializationWriterFactory } from '@microsoft/kiota-serialization-text';

/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface ApiClient extends BaseRequestBuilder<ApiClient> {
    /**
     * The pet property
     */
    get pet(): PetRequestBuilder;
    /**
     * The store property
     */
    get store(): StoreRequestBuilder;
    /**
     * The user property
     */
    get user(): UserRequestBuilder;
}
/**
 * Instantiates a new {@link ApiClient} and sets the default values.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
// @ts-ignore
export function createApiClient(requestAdapter: RequestAdapter) {
    registerDefaultSerializer(JsonSerializationWriterFactory);
    registerDefaultSerializer(TextSerializationWriterFactory);
    registerDefaultSerializer(FormSerializationWriterFactory);
    registerDefaultSerializer(MultipartSerializationWriterFactory);
    registerDefaultDeserializer(JsonParseNodeFactory);
    registerDefaultDeserializer(TextParseNodeFactory);
    registerDefaultDeserializer(FormParseNodeFactory);
    if (requestAdapter.baseUrl === undefined || requestAdapter.baseUrl === null || requestAdapter.baseUrl === "") {
        requestAdapter.baseUrl = "https://petstore.swagger.io/v2";
    }
    const pathParameters: Record<string, unknown> = {
        "baseurl": requestAdapter.baseUrl,
    };
    return apiClientProxifier<ApiClient>(requestAdapter, pathParameters, ApiClientNavigationMetadata, undefined);
}
/**
 * Uri template for the request builder.
 */
export const ApiClientUriTemplate = "{+baseurl}";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ApiClientNavigationMetadata: Record<Exclude<keyof ApiClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    pet: {
        requestsMetadata: PetRequestBuilderRequestsMetadata,
        navigationMetadata: PetRequestBuilderNavigationMetadata,
    },
    store: {
        navigationMetadata: StoreRequestBuilderNavigationMetadata,
    },
    user: {
        requestsMetadata: UserRequestBuilderRequestsMetadata,
        navigationMetadata: UserRequestBuilderNavigationMetadata,
    },
};
/* tslint:enable */
/* eslint-enable */
