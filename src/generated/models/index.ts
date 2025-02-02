/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface ApiResponse extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The code property
     */
    code?: number | null;
    /**
     * The message property
     */
    message?: string | null;
    /**
     * The type property
     */
    type?: string | null;
}
export interface Category extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The id property
     */
    id?: number | null;
    /**
     * The name property
     */
    name?: string | null;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ApiResponse}
 */
// @ts-ignore
export function createApiResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoApiResponse;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Category}
 */
// @ts-ignore
export function createCategoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCategory;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Order}
 */
// @ts-ignore
export function createOrderFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoOrder;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Pet}
 */
// @ts-ignore
export function createPetFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoPet;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Tag}
 */
// @ts-ignore
export function createTagFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoTag;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {User}
 */
// @ts-ignore
export function createUserFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoUser;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoApiResponse(apiResponse: Partial<ApiResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { apiResponse.code = n.getNumberValue(); },
        "message": n => { apiResponse.message = n.getStringValue(); },
        "type": n => { apiResponse.type = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoCategory(category: Partial<Category> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { category.id = n.getNumberValue(); },
        "name": n => { category.name = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoOrder(order: Partial<Order> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "complete": n => { order.complete = n.getBooleanValue(); },
        "id": n => { order.id = n.getNumberValue(); },
        "petId": n => { order.petId = n.getNumberValue(); },
        "quantity": n => { order.quantity = n.getNumberValue(); },
        "shipDate": n => { order.shipDate = n.getDateValue(); },
        "status": n => { order.status = n.getEnumValue<Order_status>(Order_statusObject); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoPet(pet: Partial<Pet> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "category": n => { pet.category = n.getObjectValue<Category>(createCategoryFromDiscriminatorValue); },
        "id": n => { pet.id = n.getNumberValue(); },
        "name": n => { pet.name = n.getStringValue(); },
        "photoUrls": n => { pet.photoUrls = n.getCollectionOfPrimitiveValues<string>(); },
        "status": n => { pet.status = n.getEnumValue<Pet_status>(Pet_statusObject); },
        "tags": n => { pet.tags = n.getCollectionOfObjectValues<Tag>(createTagFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoTag(tag: Partial<Tag> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { tag.id = n.getNumberValue(); },
        "name": n => { tag.name = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoUser(user: Partial<User> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "email": n => { user.email = n.getStringValue(); },
        "firstName": n => { user.firstName = n.getStringValue(); },
        "id": n => { user.id = n.getNumberValue(); },
        "lastName": n => { user.lastName = n.getStringValue(); },
        "password": n => { user.password = n.getStringValue(); },
        "phone": n => { user.phone = n.getStringValue(); },
        "username": n => { user.username = n.getStringValue(); },
        "userStatus": n => { user.userStatus = n.getNumberValue(); },
    }
}
export interface Order extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The complete property
     */
    complete?: boolean | null;
    /**
     * The id property
     */
    id?: number | null;
    /**
     * The petId property
     */
    petId?: number | null;
    /**
     * The quantity property
     */
    quantity?: number | null;
    /**
     * The shipDate property
     */
    shipDate?: Date | null;
    /**
     * Order Status
     */
    status?: Order_status | null;
}
export type Order_status = (typeof Order_statusObject)[keyof typeof Order_statusObject];
export interface Pet extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The category property
     */
    category?: Category | null;
    /**
     * The id property
     */
    id?: number | null;
    /**
     * The name property
     */
    name?: string | null;
    /**
     * The photoUrls property
     */
    photoUrls?: string[] | null;
    /**
     * pet status in the store
     */
    status?: Pet_status | null;
    /**
     * The tags property
     */
    tags?: Tag[] | null;
}
export type Pet_status = (typeof Pet_statusObject)[keyof typeof Pet_statusObject];
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeApiResponse(writer: SerializationWriter, apiResponse: Partial<ApiResponse> | undefined | null = {}) : void {
    if (apiResponse) {
        writer.writeNumberValue("code", apiResponse.code);
        writer.writeStringValue("message", apiResponse.message);
        writer.writeStringValue("type", apiResponse.type);
        writer.writeAdditionalData(apiResponse.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeCategory(writer: SerializationWriter, category: Partial<Category> | undefined | null = {}) : void {
    if (category) {
        writer.writeNumberValue("id", category.id);
        writer.writeStringValue("name", category.name);
        writer.writeAdditionalData(category.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeOrder(writer: SerializationWriter, order: Partial<Order> | undefined | null = {}) : void {
    if (order) {
        writer.writeBooleanValue("complete", order.complete);
        writer.writeNumberValue("id", order.id);
        writer.writeNumberValue("petId", order.petId);
        writer.writeNumberValue("quantity", order.quantity);
        writer.writeDateValue("shipDate", order.shipDate);
        writer.writeEnumValue<Order_status>("status", order.status);
        writer.writeAdditionalData(order.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializePet(writer: SerializationWriter, pet: Partial<Pet> | undefined | null = {}) : void {
    if (pet) {
        writer.writeObjectValue<Category>("category", pet.category, serializeCategory);
        writer.writeNumberValue("id", pet.id);
        writer.writeStringValue("name", pet.name);
        writer.writeCollectionOfPrimitiveValues<string>("photoUrls", pet.photoUrls);
        writer.writeEnumValue<Pet_status>("status", pet.status);
        writer.writeCollectionOfObjectValues<Tag>("tags", pet.tags, serializeTag);
        writer.writeAdditionalData(pet.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeTag(writer: SerializationWriter, tag: Partial<Tag> | undefined | null = {}) : void {
    if (tag) {
        writer.writeNumberValue("id", tag.id);
        writer.writeStringValue("name", tag.name);
        writer.writeAdditionalData(tag.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeUser(writer: SerializationWriter, user: Partial<User> | undefined | null = {}) : void {
    if (user) {
        writer.writeStringValue("email", user.email);
        writer.writeStringValue("firstName", user.firstName);
        writer.writeNumberValue("id", user.id);
        writer.writeStringValue("lastName", user.lastName);
        writer.writeStringValue("password", user.password);
        writer.writeStringValue("phone", user.phone);
        writer.writeStringValue("username", user.username);
        writer.writeNumberValue("userStatus", user.userStatus);
        writer.writeAdditionalData(user.additionalData);
    }
}
export interface Tag extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The id property
     */
    id?: number | null;
    /**
     * The name property
     */
    name?: string | null;
}
export interface User extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The email property
     */
    email?: string | null;
    /**
     * The firstName property
     */
    firstName?: string | null;
    /**
     * The id property
     */
    id?: number | null;
    /**
     * The lastName property
     */
    lastName?: string | null;
    /**
     * The password property
     */
    password?: string | null;
    /**
     * The phone property
     */
    phone?: string | null;
    /**
     * The username property
     */
    username?: string | null;
    /**
     * User Status
     */
    userStatus?: number | null;
}
/**
 * Order Status
 */
export const Order_statusObject = {
    Placed: "placed",
    Approved: "approved",
    Delivered: "delivered",
} as const;
/**
 * pet status in the store
 */
export const Pet_statusObject = {
    Available: "available",
    Pending: "pending",
    Sold: "sold",
} as const;
/* tslint:enable */
/* eslint-enable */
