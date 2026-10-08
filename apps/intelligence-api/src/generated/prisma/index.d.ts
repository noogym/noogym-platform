
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Source
 * 
 */
export type Source = $Result.DefaultSelection<Prisma.$SourcePayload>
/**
 * Model RawContent
 * 
 */
export type RawContent = $Result.DefaultSelection<Prisma.$RawContentPayload>
/**
 * Model Content
 * 
 */
export type Content = $Result.DefaultSelection<Prisma.$ContentPayload>
/**
 * Model Entity
 * 
 */
export type Entity = $Result.DefaultSelection<Prisma.$EntityPayload>
/**
 * Model ContentEntity
 * 
 */
export type ContentEntity = $Result.DefaultSelection<Prisma.$ContentEntityPayload>
/**
 * Model EventCandidate
 * 
 */
export type EventCandidate = $Result.DefaultSelection<Prisma.$EventCandidatePayload>
/**
 * Model EditorialReview
 * 
 */
export type EditorialReview = $Result.DefaultSelection<Prisma.$EditorialReviewPayload>
/**
 * Model Publication
 * 
 */
export type Publication = $Result.DefaultSelection<Prisma.$PublicationPayload>
/**
 * Model CrawlJob
 * 
 */
export type CrawlJob = $Result.DefaultSelection<Prisma.$CrawlJobPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SourceType: {
  website: 'website',
  rss: 'rss',
  api: 'api',
  federation: 'federation',
  gym: 'gym',
  eventOrganizer: 'eventOrganizer',
  media: 'media',
  blog: 'blog',
  publicDirectory: 'publicDirectory',
  socialOfficial: 'socialOfficial',
  userSubmission: 'userSubmission',
  other: 'other'
};

export type SourceType = (typeof SourceType)[keyof typeof SourceType]


export const SourceStatus: {
  active: 'active',
  paused: 'paused',
  error: 'error',
  archived: 'archived'
};

export type SourceStatus = (typeof SourceStatus)[keyof typeof SourceStatus]


export const RawContentStatus: {
  discovered: 'discovered',
  ingested: 'ingested',
  normalized: 'normalized',
  failed: 'failed',
  duplicate: 'duplicate',
  blocked_by_robots: 'blocked_by_robots',
  timeout: 'timeout',
  parse_failed: 'parse_failed'
};

export type RawContentStatus = (typeof RawContentStatus)[keyof typeof RawContentStatus]


export const IntelligenceContentType: {
  article: 'article',
  news: 'news',
  event: 'event',
  announcement: 'announcement',
  profile: 'profile',
  promotion: 'promotion',
  unknown: 'unknown'
};

export type IntelligenceContentType = (typeof IntelligenceContentType)[keyof typeof IntelligenceContentType]


export const EditorialStatus: {
  DISCOVERED: 'DISCOVERED',
  INGESTED: 'INGESTED',
  NORMALIZED: 'NORMALIZED',
  CLASSIFIED: 'CLASSIFIED',
  REVIEW_REQUIRED: 'REVIEW_REQUIRED',
  APPROVED: 'APPROVED',
  DRAFT_GENERATED: 'DRAFT_GENERATED',
  READY_TO_PUBLISH: 'READY_TO_PUBLISH',
  SCHEDULED: 'SCHEDULED',
  PUBLISHED: 'PUBLISHED',
  REJECTED: 'REJECTED',
  DUPLICATE: 'DUPLICATE',
  ARCHIVED: 'ARCHIVED'
};

export type EditorialStatus = (typeof EditorialStatus)[keyof typeof EditorialStatus]


export const DuplicateStatus: {
  unique: 'unique',
  possible_duplicate: 'possible_duplicate',
  duplicate: 'duplicate',
  merged: 'merged'
};

export type DuplicateStatus = (typeof DuplicateStatus)[keyof typeof DuplicateStatus]


export const EntityType: {
  Gym: 'Gym',
  PersonalTrainer: 'PersonalTrainer',
  Athlete: 'Athlete',
  Nutritionist: 'Nutritionist',
  Event: 'Event',
  Brand: 'Brand',
  Store: 'Store',
  Federation: 'Federation',
  Club: 'Club',
  Organization: 'Organization',
  Location: 'Location'
};

export type EntityType = (typeof EntityType)[keyof typeof EntityType]


export const EventOrigin: {
  noogym: 'noogym',
  partner: 'partner',
  community: 'community',
  external: 'external'
};

export type EventOrigin = (typeof EventOrigin)[keyof typeof EventOrigin]


export const VerificationStatus: {
  unverified: 'unverified',
  pending_review: 'pending_review',
  verified: 'verified',
  rejected: 'rejected'
};

export type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus]


export const JobStatus: {
  pending: 'pending',
  running: 'running',
  completed: 'completed',
  failed: 'failed'
};

export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus]


export const PublicationTarget: {
  blog: 'blog',
  events: 'events',
  instagram: 'instagram',
  facebook: 'facebook'
};

export type PublicationTarget = (typeof PublicationTarget)[keyof typeof PublicationTarget]

}

export type SourceType = $Enums.SourceType

export const SourceType: typeof $Enums.SourceType

export type SourceStatus = $Enums.SourceStatus

export const SourceStatus: typeof $Enums.SourceStatus

export type RawContentStatus = $Enums.RawContentStatus

export const RawContentStatus: typeof $Enums.RawContentStatus

export type IntelligenceContentType = $Enums.IntelligenceContentType

export const IntelligenceContentType: typeof $Enums.IntelligenceContentType

export type EditorialStatus = $Enums.EditorialStatus

export const EditorialStatus: typeof $Enums.EditorialStatus

export type DuplicateStatus = $Enums.DuplicateStatus

export const DuplicateStatus: typeof $Enums.DuplicateStatus

export type EntityType = $Enums.EntityType

export const EntityType: typeof $Enums.EntityType

export type EventOrigin = $Enums.EventOrigin

export const EventOrigin: typeof $Enums.EventOrigin

export type VerificationStatus = $Enums.VerificationStatus

export const VerificationStatus: typeof $Enums.VerificationStatus

export type JobStatus = $Enums.JobStatus

export const JobStatus: typeof $Enums.JobStatus

export type PublicationTarget = $Enums.PublicationTarget

export const PublicationTarget: typeof $Enums.PublicationTarget

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sources
 * const sources = await prisma.source.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Sources
   * const sources = await prisma.source.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.source`: Exposes CRUD operations for the **Source** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sources
    * const sources = await prisma.source.findMany()
    * ```
    */
  get source(): Prisma.SourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rawContent`: Exposes CRUD operations for the **RawContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RawContents
    * const rawContents = await prisma.rawContent.findMany()
    * ```
    */
  get rawContent(): Prisma.RawContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.content`: Exposes CRUD operations for the **Content** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contents
    * const contents = await prisma.content.findMany()
    * ```
    */
  get content(): Prisma.ContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.entity`: Exposes CRUD operations for the **Entity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entities
    * const entities = await prisma.entity.findMany()
    * ```
    */
  get entity(): Prisma.EntityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contentEntity`: Exposes CRUD operations for the **ContentEntity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContentEntities
    * const contentEntities = await prisma.contentEntity.findMany()
    * ```
    */
  get contentEntity(): Prisma.ContentEntityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventCandidate`: Exposes CRUD operations for the **EventCandidate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventCandidates
    * const eventCandidates = await prisma.eventCandidate.findMany()
    * ```
    */
  get eventCandidate(): Prisma.EventCandidateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.editorialReview`: Exposes CRUD operations for the **EditorialReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EditorialReviews
    * const editorialReviews = await prisma.editorialReview.findMany()
    * ```
    */
  get editorialReview(): Prisma.EditorialReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publication`: Exposes CRUD operations for the **Publication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Publications
    * const publications = await prisma.publication.findMany()
    * ```
    */
  get publication(): Prisma.PublicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.crawlJob`: Exposes CRUD operations for the **CrawlJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CrawlJobs
    * const crawlJobs = await prisma.crawlJob.findMany()
    * ```
    */
  get crawlJob(): Prisma.CrawlJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Source: 'Source',
    RawContent: 'RawContent',
    Content: 'Content',
    Entity: 'Entity',
    ContentEntity: 'ContentEntity',
    EventCandidate: 'EventCandidate',
    EditorialReview: 'EditorialReview',
    Publication: 'Publication',
    CrawlJob: 'CrawlJob',
    AuditLog: 'AuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "source" | "rawContent" | "content" | "entity" | "contentEntity" | "eventCandidate" | "editorialReview" | "publication" | "crawlJob" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Source: {
        payload: Prisma.$SourcePayload<ExtArgs>
        fields: Prisma.SourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          findFirst: {
            args: Prisma.SourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          findMany: {
            args: Prisma.SourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>[]
          }
          create: {
            args: Prisma.SourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          createMany: {
            args: Prisma.SourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>[]
          }
          delete: {
            args: Prisma.SourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          update: {
            args: Prisma.SourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          deleteMany: {
            args: Prisma.SourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>[]
          }
          upsert: {
            args: Prisma.SourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          aggregate: {
            args: Prisma.SourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSource>
          }
          groupBy: {
            args: Prisma.SourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<SourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.SourceCountArgs<ExtArgs>
            result: $Utils.Optional<SourceCountAggregateOutputType> | number
          }
        }
      }
      RawContent: {
        payload: Prisma.$RawContentPayload<ExtArgs>
        fields: Prisma.RawContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RawContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RawContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawContentPayload>
          }
          findFirst: {
            args: Prisma.RawContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RawContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawContentPayload>
          }
          findMany: {
            args: Prisma.RawContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawContentPayload>[]
          }
          create: {
            args: Prisma.RawContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawContentPayload>
          }
          createMany: {
            args: Prisma.RawContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RawContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawContentPayload>[]
          }
          delete: {
            args: Prisma.RawContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawContentPayload>
          }
          update: {
            args: Prisma.RawContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawContentPayload>
          }
          deleteMany: {
            args: Prisma.RawContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RawContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RawContentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawContentPayload>[]
          }
          upsert: {
            args: Prisma.RawContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawContentPayload>
          }
          aggregate: {
            args: Prisma.RawContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRawContent>
          }
          groupBy: {
            args: Prisma.RawContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<RawContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.RawContentCountArgs<ExtArgs>
            result: $Utils.Optional<RawContentCountAggregateOutputType> | number
          }
        }
      }
      Content: {
        payload: Prisma.$ContentPayload<ExtArgs>
        fields: Prisma.ContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          findFirst: {
            args: Prisma.ContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          findMany: {
            args: Prisma.ContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>[]
          }
          create: {
            args: Prisma.ContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          createMany: {
            args: Prisma.ContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>[]
          }
          delete: {
            args: Prisma.ContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          update: {
            args: Prisma.ContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          deleteMany: {
            args: Prisma.ContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>[]
          }
          upsert: {
            args: Prisma.ContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          aggregate: {
            args: Prisma.ContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContent>
          }
          groupBy: {
            args: Prisma.ContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentCountArgs<ExtArgs>
            result: $Utils.Optional<ContentCountAggregateOutputType> | number
          }
        }
      }
      Entity: {
        payload: Prisma.$EntityPayload<ExtArgs>
        fields: Prisma.EntityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          findFirst: {
            args: Prisma.EntityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          findMany: {
            args: Prisma.EntityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>[]
          }
          create: {
            args: Prisma.EntityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          createMany: {
            args: Prisma.EntityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EntityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>[]
          }
          delete: {
            args: Prisma.EntityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          update: {
            args: Prisma.EntityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          deleteMany: {
            args: Prisma.EntityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EntityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>[]
          }
          upsert: {
            args: Prisma.EntityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          aggregate: {
            args: Prisma.EntityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntity>
          }
          groupBy: {
            args: Prisma.EntityGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntityGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntityCountArgs<ExtArgs>
            result: $Utils.Optional<EntityCountAggregateOutputType> | number
          }
        }
      }
      ContentEntity: {
        payload: Prisma.$ContentEntityPayload<ExtArgs>
        fields: Prisma.ContentEntityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentEntityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentEntityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentEntityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentEntityPayload>
          }
          findFirst: {
            args: Prisma.ContentEntityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentEntityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentEntityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentEntityPayload>
          }
          findMany: {
            args: Prisma.ContentEntityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentEntityPayload>[]
          }
          create: {
            args: Prisma.ContentEntityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentEntityPayload>
          }
          createMany: {
            args: Prisma.ContentEntityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContentEntityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentEntityPayload>[]
          }
          delete: {
            args: Prisma.ContentEntityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentEntityPayload>
          }
          update: {
            args: Prisma.ContentEntityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentEntityPayload>
          }
          deleteMany: {
            args: Prisma.ContentEntityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentEntityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContentEntityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentEntityPayload>[]
          }
          upsert: {
            args: Prisma.ContentEntityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentEntityPayload>
          }
          aggregate: {
            args: Prisma.ContentEntityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContentEntity>
          }
          groupBy: {
            args: Prisma.ContentEntityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentEntityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentEntityCountArgs<ExtArgs>
            result: $Utils.Optional<ContentEntityCountAggregateOutputType> | number
          }
        }
      }
      EventCandidate: {
        payload: Prisma.$EventCandidatePayload<ExtArgs>
        fields: Prisma.EventCandidateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventCandidateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCandidatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventCandidateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCandidatePayload>
          }
          findFirst: {
            args: Prisma.EventCandidateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCandidatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventCandidateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCandidatePayload>
          }
          findMany: {
            args: Prisma.EventCandidateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCandidatePayload>[]
          }
          create: {
            args: Prisma.EventCandidateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCandidatePayload>
          }
          createMany: {
            args: Prisma.EventCandidateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCandidateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCandidatePayload>[]
          }
          delete: {
            args: Prisma.EventCandidateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCandidatePayload>
          }
          update: {
            args: Prisma.EventCandidateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCandidatePayload>
          }
          deleteMany: {
            args: Prisma.EventCandidateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventCandidateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventCandidateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCandidatePayload>[]
          }
          upsert: {
            args: Prisma.EventCandidateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCandidatePayload>
          }
          aggregate: {
            args: Prisma.EventCandidateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventCandidate>
          }
          groupBy: {
            args: Prisma.EventCandidateGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventCandidateGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCandidateCountArgs<ExtArgs>
            result: $Utils.Optional<EventCandidateCountAggregateOutputType> | number
          }
        }
      }
      EditorialReview: {
        payload: Prisma.$EditorialReviewPayload<ExtArgs>
        fields: Prisma.EditorialReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EditorialReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorialReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EditorialReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorialReviewPayload>
          }
          findFirst: {
            args: Prisma.EditorialReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorialReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EditorialReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorialReviewPayload>
          }
          findMany: {
            args: Prisma.EditorialReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorialReviewPayload>[]
          }
          create: {
            args: Prisma.EditorialReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorialReviewPayload>
          }
          createMany: {
            args: Prisma.EditorialReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EditorialReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorialReviewPayload>[]
          }
          delete: {
            args: Prisma.EditorialReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorialReviewPayload>
          }
          update: {
            args: Prisma.EditorialReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorialReviewPayload>
          }
          deleteMany: {
            args: Prisma.EditorialReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EditorialReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EditorialReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorialReviewPayload>[]
          }
          upsert: {
            args: Prisma.EditorialReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorialReviewPayload>
          }
          aggregate: {
            args: Prisma.EditorialReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEditorialReview>
          }
          groupBy: {
            args: Prisma.EditorialReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<EditorialReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.EditorialReviewCountArgs<ExtArgs>
            result: $Utils.Optional<EditorialReviewCountAggregateOutputType> | number
          }
        }
      }
      Publication: {
        payload: Prisma.$PublicationPayload<ExtArgs>
        fields: Prisma.PublicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          findFirst: {
            args: Prisma.PublicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          findMany: {
            args: Prisma.PublicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>[]
          }
          create: {
            args: Prisma.PublicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          createMany: {
            args: Prisma.PublicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>[]
          }
          delete: {
            args: Prisma.PublicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          update: {
            args: Prisma.PublicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          deleteMany: {
            args: Prisma.PublicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PublicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>[]
          }
          upsert: {
            args: Prisma.PublicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          aggregate: {
            args: Prisma.PublicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublication>
          }
          groupBy: {
            args: Prisma.PublicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicationCountArgs<ExtArgs>
            result: $Utils.Optional<PublicationCountAggregateOutputType> | number
          }
        }
      }
      CrawlJob: {
        payload: Prisma.$CrawlJobPayload<ExtArgs>
        fields: Prisma.CrawlJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CrawlJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CrawlJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlJobPayload>
          }
          findFirst: {
            args: Prisma.CrawlJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CrawlJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlJobPayload>
          }
          findMany: {
            args: Prisma.CrawlJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlJobPayload>[]
          }
          create: {
            args: Prisma.CrawlJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlJobPayload>
          }
          createMany: {
            args: Prisma.CrawlJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CrawlJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlJobPayload>[]
          }
          delete: {
            args: Prisma.CrawlJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlJobPayload>
          }
          update: {
            args: Prisma.CrawlJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlJobPayload>
          }
          deleteMany: {
            args: Prisma.CrawlJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CrawlJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CrawlJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlJobPayload>[]
          }
          upsert: {
            args: Prisma.CrawlJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlJobPayload>
          }
          aggregate: {
            args: Prisma.CrawlJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCrawlJob>
          }
          groupBy: {
            args: Prisma.CrawlJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<CrawlJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.CrawlJobCountArgs<ExtArgs>
            result: $Utils.Optional<CrawlJobCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    source?: SourceOmit
    rawContent?: RawContentOmit
    content?: ContentOmit
    entity?: EntityOmit
    contentEntity?: ContentEntityOmit
    eventCandidate?: EventCandidateOmit
    editorialReview?: EditorialReviewOmit
    publication?: PublicationOmit
    crawlJob?: CrawlJobOmit
    auditLog?: AuditLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SourceCountOutputType
   */

  export type SourceCountOutputType = {
    rawContents: number
    eventCandidates: number
  }

  export type SourceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rawContents?: boolean | SourceCountOutputTypeCountRawContentsArgs
    eventCandidates?: boolean | SourceCountOutputTypeCountEventCandidatesArgs
  }

  // Custom InputTypes
  /**
   * SourceCountOutputType without action
   */
  export type SourceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceCountOutputType
     */
    select?: SourceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SourceCountOutputType without action
   */
  export type SourceCountOutputTypeCountRawContentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RawContentWhereInput
  }

  /**
   * SourceCountOutputType without action
   */
  export type SourceCountOutputTypeCountEventCandidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventCandidateWhereInput
  }


  /**
   * Count Type ContentCountOutputType
   */

  export type ContentCountOutputType = {
    entities: number
    reviews: number
    publications: number
  }

  export type ContentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entities?: boolean | ContentCountOutputTypeCountEntitiesArgs
    reviews?: boolean | ContentCountOutputTypeCountReviewsArgs
    publications?: boolean | ContentCountOutputTypeCountPublicationsArgs
  }

  // Custom InputTypes
  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentCountOutputType
     */
    select?: ContentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeCountEntitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentEntityWhereInput
  }

  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EditorialReviewWhereInput
  }

  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeCountPublicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicationWhereInput
  }


  /**
   * Count Type EntityCountOutputType
   */

  export type EntityCountOutputType = {
    contents: number
  }

  export type EntityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contents?: boolean | EntityCountOutputTypeCountContentsArgs
  }

  // Custom InputTypes
  /**
   * EntityCountOutputType without action
   */
  export type EntityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityCountOutputType
     */
    select?: EntityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EntityCountOutputType without action
   */
  export type EntityCountOutputTypeCountContentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentEntityWhereInput
  }


  /**
   * Count Type EventCandidateCountOutputType
   */

  export type EventCandidateCountOutputType = {
    reviews: number
    publications: number
  }

  export type EventCandidateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | EventCandidateCountOutputTypeCountReviewsArgs
    publications?: boolean | EventCandidateCountOutputTypeCountPublicationsArgs
  }

  // Custom InputTypes
  /**
   * EventCandidateCountOutputType without action
   */
  export type EventCandidateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCandidateCountOutputType
     */
    select?: EventCandidateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCandidateCountOutputType without action
   */
  export type EventCandidateCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EditorialReviewWhereInput
  }

  /**
   * EventCandidateCountOutputType without action
   */
  export type EventCandidateCountOutputTypeCountPublicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Source
   */

  export type AggregateSource = {
    _count: SourceCountAggregateOutputType | null
    _avg: SourceAvgAggregateOutputType | null
    _sum: SourceSumAggregateOutputType | null
    _min: SourceMinAggregateOutputType | null
    _max: SourceMaxAggregateOutputType | null
  }

  export type SourceAvgAggregateOutputType = {
    trustScore: number | null
    crawlDelayMs: number | null
  }

  export type SourceSumAggregateOutputType = {
    trustScore: number | null
    crawlDelayMs: number | null
  }

  export type SourceMinAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    sourceType: $Enums.SourceType | null
    country: string | null
    province: string | null
    city: string | null
    trustScore: number | null
    enabled: boolean | null
    scrapingAllowed: boolean | null
    requiresReview: boolean | null
    updateFrequency: string | null
    crawlDelayMs: number | null
    lastSeenHash: string | null
    contentSelector: string | null
    titleSelector: string | null
    robotsPolicy: string | null
    notes: string | null
    lastCheckedAt: Date | null
    lastSuccessfulCheckAt: Date | null
    status: $Enums.SourceStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SourceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    sourceType: $Enums.SourceType | null
    country: string | null
    province: string | null
    city: string | null
    trustScore: number | null
    enabled: boolean | null
    scrapingAllowed: boolean | null
    requiresReview: boolean | null
    updateFrequency: string | null
    crawlDelayMs: number | null
    lastSeenHash: string | null
    contentSelector: string | null
    titleSelector: string | null
    robotsPolicy: string | null
    notes: string | null
    lastCheckedAt: Date | null
    lastSuccessfulCheckAt: Date | null
    status: $Enums.SourceStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SourceCountAggregateOutputType = {
    id: number
    name: number
    url: number
    sourceType: number
    country: number
    province: number
    city: number
    trustScore: number
    enabled: number
    scrapingAllowed: number
    requiresReview: number
    updateFrequency: number
    crawlDelayMs: number
    lastSeenHash: number
    contentSelector: number
    titleSelector: number
    robotsPolicy: number
    notes: number
    lastCheckedAt: number
    lastSuccessfulCheckAt: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SourceAvgAggregateInputType = {
    trustScore?: true
    crawlDelayMs?: true
  }

  export type SourceSumAggregateInputType = {
    trustScore?: true
    crawlDelayMs?: true
  }

  export type SourceMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    sourceType?: true
    country?: true
    province?: true
    city?: true
    trustScore?: true
    enabled?: true
    scrapingAllowed?: true
    requiresReview?: true
    updateFrequency?: true
    crawlDelayMs?: true
    lastSeenHash?: true
    contentSelector?: true
    titleSelector?: true
    robotsPolicy?: true
    notes?: true
    lastCheckedAt?: true
    lastSuccessfulCheckAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SourceMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    sourceType?: true
    country?: true
    province?: true
    city?: true
    trustScore?: true
    enabled?: true
    scrapingAllowed?: true
    requiresReview?: true
    updateFrequency?: true
    crawlDelayMs?: true
    lastSeenHash?: true
    contentSelector?: true
    titleSelector?: true
    robotsPolicy?: true
    notes?: true
    lastCheckedAt?: true
    lastSuccessfulCheckAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SourceCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    sourceType?: true
    country?: true
    province?: true
    city?: true
    trustScore?: true
    enabled?: true
    scrapingAllowed?: true
    requiresReview?: true
    updateFrequency?: true
    crawlDelayMs?: true
    lastSeenHash?: true
    contentSelector?: true
    titleSelector?: true
    robotsPolicy?: true
    notes?: true
    lastCheckedAt?: true
    lastSuccessfulCheckAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Source to aggregate.
     */
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     */
    orderBy?: SourceOrderByWithRelationInput | SourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sources
    **/
    _count?: true | SourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SourceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SourceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SourceMaxAggregateInputType
  }

  export type GetSourceAggregateType<T extends SourceAggregateArgs> = {
        [P in keyof T & keyof AggregateSource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSource[P]>
      : GetScalarType<T[P], AggregateSource[P]>
  }




  export type SourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourceWhereInput
    orderBy?: SourceOrderByWithAggregationInput | SourceOrderByWithAggregationInput[]
    by: SourceScalarFieldEnum[] | SourceScalarFieldEnum
    having?: SourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SourceCountAggregateInputType | true
    _avg?: SourceAvgAggregateInputType
    _sum?: SourceSumAggregateInputType
    _min?: SourceMinAggregateInputType
    _max?: SourceMaxAggregateInputType
  }

  export type SourceGroupByOutputType = {
    id: string
    name: string
    url: string
    sourceType: $Enums.SourceType
    country: string
    province: string | null
    city: string | null
    trustScore: number
    enabled: boolean
    scrapingAllowed: boolean
    requiresReview: boolean
    updateFrequency: string
    crawlDelayMs: number
    lastSeenHash: string | null
    contentSelector: string | null
    titleSelector: string | null
    robotsPolicy: string | null
    notes: string | null
    lastCheckedAt: Date | null
    lastSuccessfulCheckAt: Date | null
    status: $Enums.SourceStatus
    createdAt: Date
    updatedAt: Date
    _count: SourceCountAggregateOutputType | null
    _avg: SourceAvgAggregateOutputType | null
    _sum: SourceSumAggregateOutputType | null
    _min: SourceMinAggregateOutputType | null
    _max: SourceMaxAggregateOutputType | null
  }

  type GetSourceGroupByPayload<T extends SourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SourceGroupByOutputType[P]>
            : GetScalarType<T[P], SourceGroupByOutputType[P]>
        }
      >
    >


  export type SourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    sourceType?: boolean
    country?: boolean
    province?: boolean
    city?: boolean
    trustScore?: boolean
    enabled?: boolean
    scrapingAllowed?: boolean
    requiresReview?: boolean
    updateFrequency?: boolean
    crawlDelayMs?: boolean
    lastSeenHash?: boolean
    contentSelector?: boolean
    titleSelector?: boolean
    robotsPolicy?: boolean
    notes?: boolean
    lastCheckedAt?: boolean
    lastSuccessfulCheckAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rawContents?: boolean | Source$rawContentsArgs<ExtArgs>
    eventCandidates?: boolean | Source$eventCandidatesArgs<ExtArgs>
    _count?: boolean | SourceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["source"]>

  export type SourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    sourceType?: boolean
    country?: boolean
    province?: boolean
    city?: boolean
    trustScore?: boolean
    enabled?: boolean
    scrapingAllowed?: boolean
    requiresReview?: boolean
    updateFrequency?: boolean
    crawlDelayMs?: boolean
    lastSeenHash?: boolean
    contentSelector?: boolean
    titleSelector?: boolean
    robotsPolicy?: boolean
    notes?: boolean
    lastCheckedAt?: boolean
    lastSuccessfulCheckAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["source"]>

  export type SourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    sourceType?: boolean
    country?: boolean
    province?: boolean
    city?: boolean
    trustScore?: boolean
    enabled?: boolean
    scrapingAllowed?: boolean
    requiresReview?: boolean
    updateFrequency?: boolean
    crawlDelayMs?: boolean
    lastSeenHash?: boolean
    contentSelector?: boolean
    titleSelector?: boolean
    robotsPolicy?: boolean
    notes?: boolean
    lastCheckedAt?: boolean
    lastSuccessfulCheckAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["source"]>

  export type SourceSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    sourceType?: boolean
    country?: boolean
    province?: boolean
    city?: boolean
    trustScore?: boolean
    enabled?: boolean
    scrapingAllowed?: boolean
    requiresReview?: boolean
    updateFrequency?: boolean
    crawlDelayMs?: boolean
    lastSeenHash?: boolean
    contentSelector?: boolean
    titleSelector?: boolean
    robotsPolicy?: boolean
    notes?: boolean
    lastCheckedAt?: boolean
    lastSuccessfulCheckAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "url" | "sourceType" | "country" | "province" | "city" | "trustScore" | "enabled" | "scrapingAllowed" | "requiresReview" | "updateFrequency" | "crawlDelayMs" | "lastSeenHash" | "contentSelector" | "titleSelector" | "robotsPolicy" | "notes" | "lastCheckedAt" | "lastSuccessfulCheckAt" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["source"]>
  export type SourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rawContents?: boolean | Source$rawContentsArgs<ExtArgs>
    eventCandidates?: boolean | Source$eventCandidatesArgs<ExtArgs>
    _count?: boolean | SourceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SourceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Source"
    objects: {
      rawContents: Prisma.$RawContentPayload<ExtArgs>[]
      eventCandidates: Prisma.$EventCandidatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      url: string
      sourceType: $Enums.SourceType
      country: string
      province: string | null
      city: string | null
      trustScore: number
      enabled: boolean
      scrapingAllowed: boolean
      requiresReview: boolean
      updateFrequency: string
      crawlDelayMs: number
      lastSeenHash: string | null
      contentSelector: string | null
      titleSelector: string | null
      robotsPolicy: string | null
      notes: string | null
      lastCheckedAt: Date | null
      lastSuccessfulCheckAt: Date | null
      status: $Enums.SourceStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["source"]>
    composites: {}
  }

  type SourceGetPayload<S extends boolean | null | undefined | SourceDefaultArgs> = $Result.GetResult<Prisma.$SourcePayload, S>

  type SourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SourceCountAggregateInputType | true
    }

  export interface SourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Source'], meta: { name: 'Source' } }
    /**
     * Find zero or one Source that matches the filter.
     * @param {SourceFindUniqueArgs} args - Arguments to find a Source
     * @example
     * // Get one Source
     * const source = await prisma.source.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SourceFindUniqueArgs>(args: SelectSubset<T, SourceFindUniqueArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Source that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SourceFindUniqueOrThrowArgs} args - Arguments to find a Source
     * @example
     * // Get one Source
     * const source = await prisma.source.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SourceFindUniqueOrThrowArgs>(args: SelectSubset<T, SourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Source that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceFindFirstArgs} args - Arguments to find a Source
     * @example
     * // Get one Source
     * const source = await prisma.source.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SourceFindFirstArgs>(args?: SelectSubset<T, SourceFindFirstArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Source that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceFindFirstOrThrowArgs} args - Arguments to find a Source
     * @example
     * // Get one Source
     * const source = await prisma.source.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SourceFindFirstOrThrowArgs>(args?: SelectSubset<T, SourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sources
     * const sources = await prisma.source.findMany()
     * 
     * // Get first 10 Sources
     * const sources = await prisma.source.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sourceWithIdOnly = await prisma.source.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SourceFindManyArgs>(args?: SelectSubset<T, SourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Source.
     * @param {SourceCreateArgs} args - Arguments to create a Source.
     * @example
     * // Create one Source
     * const Source = await prisma.source.create({
     *   data: {
     *     // ... data to create a Source
     *   }
     * })
     * 
     */
    create<T extends SourceCreateArgs>(args: SelectSubset<T, SourceCreateArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sources.
     * @param {SourceCreateManyArgs} args - Arguments to create many Sources.
     * @example
     * // Create many Sources
     * const source = await prisma.source.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SourceCreateManyArgs>(args?: SelectSubset<T, SourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sources and returns the data saved in the database.
     * @param {SourceCreateManyAndReturnArgs} args - Arguments to create many Sources.
     * @example
     * // Create many Sources
     * const source = await prisma.source.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sources and only return the `id`
     * const sourceWithIdOnly = await prisma.source.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SourceCreateManyAndReturnArgs>(args?: SelectSubset<T, SourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Source.
     * @param {SourceDeleteArgs} args - Arguments to delete one Source.
     * @example
     * // Delete one Source
     * const Source = await prisma.source.delete({
     *   where: {
     *     // ... filter to delete one Source
     *   }
     * })
     * 
     */
    delete<T extends SourceDeleteArgs>(args: SelectSubset<T, SourceDeleteArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Source.
     * @param {SourceUpdateArgs} args - Arguments to update one Source.
     * @example
     * // Update one Source
     * const source = await prisma.source.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SourceUpdateArgs>(args: SelectSubset<T, SourceUpdateArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sources.
     * @param {SourceDeleteManyArgs} args - Arguments to filter Sources to delete.
     * @example
     * // Delete a few Sources
     * const { count } = await prisma.source.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SourceDeleteManyArgs>(args?: SelectSubset<T, SourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sources
     * const source = await prisma.source.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SourceUpdateManyArgs>(args: SelectSubset<T, SourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sources and returns the data updated in the database.
     * @param {SourceUpdateManyAndReturnArgs} args - Arguments to update many Sources.
     * @example
     * // Update many Sources
     * const source = await prisma.source.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sources and only return the `id`
     * const sourceWithIdOnly = await prisma.source.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SourceUpdateManyAndReturnArgs>(args: SelectSubset<T, SourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Source.
     * @param {SourceUpsertArgs} args - Arguments to update or create a Source.
     * @example
     * // Update or create a Source
     * const source = await prisma.source.upsert({
     *   create: {
     *     // ... data to create a Source
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Source we want to update
     *   }
     * })
     */
    upsert<T extends SourceUpsertArgs>(args: SelectSubset<T, SourceUpsertArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceCountArgs} args - Arguments to filter Sources to count.
     * @example
     * // Count the number of Sources
     * const count = await prisma.source.count({
     *   where: {
     *     // ... the filter for the Sources we want to count
     *   }
     * })
    **/
    count<T extends SourceCountArgs>(
      args?: Subset<T, SourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Source.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SourceAggregateArgs>(args: Subset<T, SourceAggregateArgs>): Prisma.PrismaPromise<GetSourceAggregateType<T>>

    /**
     * Group by Source.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SourceGroupByArgs['orderBy'] }
        : { orderBy?: SourceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Source model
   */
  readonly fields: SourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Source.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rawContents<T extends Source$rawContentsArgs<ExtArgs> = {}>(args?: Subset<T, Source$rawContentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RawContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    eventCandidates<T extends Source$eventCandidatesArgs<ExtArgs> = {}>(args?: Subset<T, Source$eventCandidatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventCandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Source model
   */
  interface SourceFieldRefs {
    readonly id: FieldRef<"Source", 'String'>
    readonly name: FieldRef<"Source", 'String'>
    readonly url: FieldRef<"Source", 'String'>
    readonly sourceType: FieldRef<"Source", 'SourceType'>
    readonly country: FieldRef<"Source", 'String'>
    readonly province: FieldRef<"Source", 'String'>
    readonly city: FieldRef<"Source", 'String'>
    readonly trustScore: FieldRef<"Source", 'Int'>
    readonly enabled: FieldRef<"Source", 'Boolean'>
    readonly scrapingAllowed: FieldRef<"Source", 'Boolean'>
    readonly requiresReview: FieldRef<"Source", 'Boolean'>
    readonly updateFrequency: FieldRef<"Source", 'String'>
    readonly crawlDelayMs: FieldRef<"Source", 'Int'>
    readonly lastSeenHash: FieldRef<"Source", 'String'>
    readonly contentSelector: FieldRef<"Source", 'String'>
    readonly titleSelector: FieldRef<"Source", 'String'>
    readonly robotsPolicy: FieldRef<"Source", 'String'>
    readonly notes: FieldRef<"Source", 'String'>
    readonly lastCheckedAt: FieldRef<"Source", 'DateTime'>
    readonly lastSuccessfulCheckAt: FieldRef<"Source", 'DateTime'>
    readonly status: FieldRef<"Source", 'SourceStatus'>
    readonly createdAt: FieldRef<"Source", 'DateTime'>
    readonly updatedAt: FieldRef<"Source", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Source findUnique
   */
  export type SourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Source to fetch.
     */
    where: SourceWhereUniqueInput
  }

  /**
   * Source findUniqueOrThrow
   */
  export type SourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Source to fetch.
     */
    where: SourceWhereUniqueInput
  }

  /**
   * Source findFirst
   */
  export type SourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Source to fetch.
     */
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     */
    orderBy?: SourceOrderByWithRelationInput | SourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sources.
     */
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sources.
     */
    distinct?: SourceScalarFieldEnum | SourceScalarFieldEnum[]
  }

  /**
   * Source findFirstOrThrow
   */
  export type SourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Source to fetch.
     */
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     */
    orderBy?: SourceOrderByWithRelationInput | SourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sources.
     */
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sources.
     */
    distinct?: SourceScalarFieldEnum | SourceScalarFieldEnum[]
  }

  /**
   * Source findMany
   */
  export type SourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Sources to fetch.
     */
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     */
    orderBy?: SourceOrderByWithRelationInput | SourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sources.
     */
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     */
    skip?: number
    distinct?: SourceScalarFieldEnum | SourceScalarFieldEnum[]
  }

  /**
   * Source create
   */
  export type SourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * The data needed to create a Source.
     */
    data: XOR<SourceCreateInput, SourceUncheckedCreateInput>
  }

  /**
   * Source createMany
   */
  export type SourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sources.
     */
    data: SourceCreateManyInput | SourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Source createManyAndReturn
   */
  export type SourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * The data used to create many Sources.
     */
    data: SourceCreateManyInput | SourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Source update
   */
  export type SourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * The data needed to update a Source.
     */
    data: XOR<SourceUpdateInput, SourceUncheckedUpdateInput>
    /**
     * Choose, which Source to update.
     */
    where: SourceWhereUniqueInput
  }

  /**
   * Source updateMany
   */
  export type SourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sources.
     */
    data: XOR<SourceUpdateManyMutationInput, SourceUncheckedUpdateManyInput>
    /**
     * Filter which Sources to update
     */
    where?: SourceWhereInput
    /**
     * Limit how many Sources to update.
     */
    limit?: number
  }

  /**
   * Source updateManyAndReturn
   */
  export type SourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * The data used to update Sources.
     */
    data: XOR<SourceUpdateManyMutationInput, SourceUncheckedUpdateManyInput>
    /**
     * Filter which Sources to update
     */
    where?: SourceWhereInput
    /**
     * Limit how many Sources to update.
     */
    limit?: number
  }

  /**
   * Source upsert
   */
  export type SourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * The filter to search for the Source to update in case it exists.
     */
    where: SourceWhereUniqueInput
    /**
     * In case the Source found by the `where` argument doesn't exist, create a new Source with this data.
     */
    create: XOR<SourceCreateInput, SourceUncheckedCreateInput>
    /**
     * In case the Source was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SourceUpdateInput, SourceUncheckedUpdateInput>
  }

  /**
   * Source delete
   */
  export type SourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter which Source to delete.
     */
    where: SourceWhereUniqueInput
  }

  /**
   * Source deleteMany
   */
  export type SourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sources to delete
     */
    where?: SourceWhereInput
    /**
     * Limit how many Sources to delete.
     */
    limit?: number
  }

  /**
   * Source.rawContents
   */
  export type Source$rawContentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawContent
     */
    select?: RawContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawContent
     */
    omit?: RawContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawContentInclude<ExtArgs> | null
    where?: RawContentWhereInput
    orderBy?: RawContentOrderByWithRelationInput | RawContentOrderByWithRelationInput[]
    cursor?: RawContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RawContentScalarFieldEnum | RawContentScalarFieldEnum[]
  }

  /**
   * Source.eventCandidates
   */
  export type Source$eventCandidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCandidate
     */
    select?: EventCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCandidate
     */
    omit?: EventCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCandidateInclude<ExtArgs> | null
    where?: EventCandidateWhereInput
    orderBy?: EventCandidateOrderByWithRelationInput | EventCandidateOrderByWithRelationInput[]
    cursor?: EventCandidateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventCandidateScalarFieldEnum | EventCandidateScalarFieldEnum[]
  }

  /**
   * Source without action
   */
  export type SourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
  }


  /**
   * Model RawContent
   */

  export type AggregateRawContent = {
    _count: RawContentCountAggregateOutputType | null
    _min: RawContentMinAggregateOutputType | null
    _max: RawContentMaxAggregateOutputType | null
  }

  export type RawContentMinAggregateOutputType = {
    id: string | null
    sourceId: string | null
    externalId: string | null
    canonicalUrl: string | null
    title: string | null
    rawText: string | null
    rawHtml: string | null
    author: string | null
    publishedAt: Date | null
    discoveredAt: Date | null
    fetchedAt: Date | null
    contentHash: string | null
    status: $Enums.RawContentStatus | null
  }

  export type RawContentMaxAggregateOutputType = {
    id: string | null
    sourceId: string | null
    externalId: string | null
    canonicalUrl: string | null
    title: string | null
    rawText: string | null
    rawHtml: string | null
    author: string | null
    publishedAt: Date | null
    discoveredAt: Date | null
    fetchedAt: Date | null
    contentHash: string | null
    status: $Enums.RawContentStatus | null
  }

  export type RawContentCountAggregateOutputType = {
    id: number
    sourceId: number
    externalId: number
    canonicalUrl: number
    title: number
    rawText: number
    rawHtml: number
    author: number
    publishedAt: number
    discoveredAt: number
    fetchedAt: number
    contentHash: number
    metadata: number
    status: number
    _all: number
  }


  export type RawContentMinAggregateInputType = {
    id?: true
    sourceId?: true
    externalId?: true
    canonicalUrl?: true
    title?: true
    rawText?: true
    rawHtml?: true
    author?: true
    publishedAt?: true
    discoveredAt?: true
    fetchedAt?: true
    contentHash?: true
    status?: true
  }

  export type RawContentMaxAggregateInputType = {
    id?: true
    sourceId?: true
    externalId?: true
    canonicalUrl?: true
    title?: true
    rawText?: true
    rawHtml?: true
    author?: true
    publishedAt?: true
    discoveredAt?: true
    fetchedAt?: true
    contentHash?: true
    status?: true
  }

  export type RawContentCountAggregateInputType = {
    id?: true
    sourceId?: true
    externalId?: true
    canonicalUrl?: true
    title?: true
    rawText?: true
    rawHtml?: true
    author?: true
    publishedAt?: true
    discoveredAt?: true
    fetchedAt?: true
    contentHash?: true
    metadata?: true
    status?: true
    _all?: true
  }

  export type RawContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RawContent to aggregate.
     */
    where?: RawContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawContents to fetch.
     */
    orderBy?: RawContentOrderByWithRelationInput | RawContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RawContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RawContents
    **/
    _count?: true | RawContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RawContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RawContentMaxAggregateInputType
  }

  export type GetRawContentAggregateType<T extends RawContentAggregateArgs> = {
        [P in keyof T & keyof AggregateRawContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRawContent[P]>
      : GetScalarType<T[P], AggregateRawContent[P]>
  }




  export type RawContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RawContentWhereInput
    orderBy?: RawContentOrderByWithAggregationInput | RawContentOrderByWithAggregationInput[]
    by: RawContentScalarFieldEnum[] | RawContentScalarFieldEnum
    having?: RawContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RawContentCountAggregateInputType | true
    _min?: RawContentMinAggregateInputType
    _max?: RawContentMaxAggregateInputType
  }

  export type RawContentGroupByOutputType = {
    id: string
    sourceId: string
    externalId: string | null
    canonicalUrl: string | null
    title: string
    rawText: string
    rawHtml: string | null
    author: string | null
    publishedAt: Date | null
    discoveredAt: Date
    fetchedAt: Date
    contentHash: string
    metadata: JsonValue | null
    status: $Enums.RawContentStatus
    _count: RawContentCountAggregateOutputType | null
    _min: RawContentMinAggregateOutputType | null
    _max: RawContentMaxAggregateOutputType | null
  }

  type GetRawContentGroupByPayload<T extends RawContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RawContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RawContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RawContentGroupByOutputType[P]>
            : GetScalarType<T[P], RawContentGroupByOutputType[P]>
        }
      >
    >


  export type RawContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceId?: boolean
    externalId?: boolean
    canonicalUrl?: boolean
    title?: boolean
    rawText?: boolean
    rawHtml?: boolean
    author?: boolean
    publishedAt?: boolean
    discoveredAt?: boolean
    fetchedAt?: boolean
    contentHash?: boolean
    metadata?: boolean
    status?: boolean
    source?: boolean | SourceDefaultArgs<ExtArgs>
    content?: boolean | RawContent$contentArgs<ExtArgs>
  }, ExtArgs["result"]["rawContent"]>

  export type RawContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceId?: boolean
    externalId?: boolean
    canonicalUrl?: boolean
    title?: boolean
    rawText?: boolean
    rawHtml?: boolean
    author?: boolean
    publishedAt?: boolean
    discoveredAt?: boolean
    fetchedAt?: boolean
    contentHash?: boolean
    metadata?: boolean
    status?: boolean
    source?: boolean | SourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rawContent"]>

  export type RawContentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceId?: boolean
    externalId?: boolean
    canonicalUrl?: boolean
    title?: boolean
    rawText?: boolean
    rawHtml?: boolean
    author?: boolean
    publishedAt?: boolean
    discoveredAt?: boolean
    fetchedAt?: boolean
    contentHash?: boolean
    metadata?: boolean
    status?: boolean
    source?: boolean | SourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rawContent"]>

  export type RawContentSelectScalar = {
    id?: boolean
    sourceId?: boolean
    externalId?: boolean
    canonicalUrl?: boolean
    title?: boolean
    rawText?: boolean
    rawHtml?: boolean
    author?: boolean
    publishedAt?: boolean
    discoveredAt?: boolean
    fetchedAt?: boolean
    contentHash?: boolean
    metadata?: boolean
    status?: boolean
  }

  export type RawContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sourceId" | "externalId" | "canonicalUrl" | "title" | "rawText" | "rawHtml" | "author" | "publishedAt" | "discoveredAt" | "fetchedAt" | "contentHash" | "metadata" | "status", ExtArgs["result"]["rawContent"]>
  export type RawContentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    source?: boolean | SourceDefaultArgs<ExtArgs>
    content?: boolean | RawContent$contentArgs<ExtArgs>
  }
  export type RawContentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    source?: boolean | SourceDefaultArgs<ExtArgs>
  }
  export type RawContentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    source?: boolean | SourceDefaultArgs<ExtArgs>
  }

  export type $RawContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RawContent"
    objects: {
      source: Prisma.$SourcePayload<ExtArgs>
      content: Prisma.$ContentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sourceId: string
      externalId: string | null
      canonicalUrl: string | null
      title: string
      rawText: string
      rawHtml: string | null
      author: string | null
      publishedAt: Date | null
      discoveredAt: Date
      fetchedAt: Date
      contentHash: string
      metadata: Prisma.JsonValue | null
      status: $Enums.RawContentStatus
    }, ExtArgs["result"]["rawContent"]>
    composites: {}
  }

  type RawContentGetPayload<S extends boolean | null | undefined | RawContentDefaultArgs> = $Result.GetResult<Prisma.$RawContentPayload, S>

  type RawContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RawContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RawContentCountAggregateInputType | true
    }

  export interface RawContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RawContent'], meta: { name: 'RawContent' } }
    /**
     * Find zero or one RawContent that matches the filter.
     * @param {RawContentFindUniqueArgs} args - Arguments to find a RawContent
     * @example
     * // Get one RawContent
     * const rawContent = await prisma.rawContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RawContentFindUniqueArgs>(args: SelectSubset<T, RawContentFindUniqueArgs<ExtArgs>>): Prisma__RawContentClient<$Result.GetResult<Prisma.$RawContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RawContent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RawContentFindUniqueOrThrowArgs} args - Arguments to find a RawContent
     * @example
     * // Get one RawContent
     * const rawContent = await prisma.rawContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RawContentFindUniqueOrThrowArgs>(args: SelectSubset<T, RawContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RawContentClient<$Result.GetResult<Prisma.$RawContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RawContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawContentFindFirstArgs} args - Arguments to find a RawContent
     * @example
     * // Get one RawContent
     * const rawContent = await prisma.rawContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RawContentFindFirstArgs>(args?: SelectSubset<T, RawContentFindFirstArgs<ExtArgs>>): Prisma__RawContentClient<$Result.GetResult<Prisma.$RawContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RawContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawContentFindFirstOrThrowArgs} args - Arguments to find a RawContent
     * @example
     * // Get one RawContent
     * const rawContent = await prisma.rawContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RawContentFindFirstOrThrowArgs>(args?: SelectSubset<T, RawContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__RawContentClient<$Result.GetResult<Prisma.$RawContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RawContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RawContents
     * const rawContents = await prisma.rawContent.findMany()
     * 
     * // Get first 10 RawContents
     * const rawContents = await prisma.rawContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rawContentWithIdOnly = await prisma.rawContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RawContentFindManyArgs>(args?: SelectSubset<T, RawContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RawContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RawContent.
     * @param {RawContentCreateArgs} args - Arguments to create a RawContent.
     * @example
     * // Create one RawContent
     * const RawContent = await prisma.rawContent.create({
     *   data: {
     *     // ... data to create a RawContent
     *   }
     * })
     * 
     */
    create<T extends RawContentCreateArgs>(args: SelectSubset<T, RawContentCreateArgs<ExtArgs>>): Prisma__RawContentClient<$Result.GetResult<Prisma.$RawContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RawContents.
     * @param {RawContentCreateManyArgs} args - Arguments to create many RawContents.
     * @example
     * // Create many RawContents
     * const rawContent = await prisma.rawContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RawContentCreateManyArgs>(args?: SelectSubset<T, RawContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RawContents and returns the data saved in the database.
     * @param {RawContentCreateManyAndReturnArgs} args - Arguments to create many RawContents.
     * @example
     * // Create many RawContents
     * const rawContent = await prisma.rawContent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RawContents and only return the `id`
     * const rawContentWithIdOnly = await prisma.rawContent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RawContentCreateManyAndReturnArgs>(args?: SelectSubset<T, RawContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RawContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RawContent.
     * @param {RawContentDeleteArgs} args - Arguments to delete one RawContent.
     * @example
     * // Delete one RawContent
     * const RawContent = await prisma.rawContent.delete({
     *   where: {
     *     // ... filter to delete one RawContent
     *   }
     * })
     * 
     */
    delete<T extends RawContentDeleteArgs>(args: SelectSubset<T, RawContentDeleteArgs<ExtArgs>>): Prisma__RawContentClient<$Result.GetResult<Prisma.$RawContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RawContent.
     * @param {RawContentUpdateArgs} args - Arguments to update one RawContent.
     * @example
     * // Update one RawContent
     * const rawContent = await prisma.rawContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RawContentUpdateArgs>(args: SelectSubset<T, RawContentUpdateArgs<ExtArgs>>): Prisma__RawContentClient<$Result.GetResult<Prisma.$RawContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RawContents.
     * @param {RawContentDeleteManyArgs} args - Arguments to filter RawContents to delete.
     * @example
     * // Delete a few RawContents
     * const { count } = await prisma.rawContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RawContentDeleteManyArgs>(args?: SelectSubset<T, RawContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RawContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RawContents
     * const rawContent = await prisma.rawContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RawContentUpdateManyArgs>(args: SelectSubset<T, RawContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RawContents and returns the data updated in the database.
     * @param {RawContentUpdateManyAndReturnArgs} args - Arguments to update many RawContents.
     * @example
     * // Update many RawContents
     * const rawContent = await prisma.rawContent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RawContents and only return the `id`
     * const rawContentWithIdOnly = await prisma.rawContent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RawContentUpdateManyAndReturnArgs>(args: SelectSubset<T, RawContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RawContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RawContent.
     * @param {RawContentUpsertArgs} args - Arguments to update or create a RawContent.
     * @example
     * // Update or create a RawContent
     * const rawContent = await prisma.rawContent.upsert({
     *   create: {
     *     // ... data to create a RawContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RawContent we want to update
     *   }
     * })
     */
    upsert<T extends RawContentUpsertArgs>(args: SelectSubset<T, RawContentUpsertArgs<ExtArgs>>): Prisma__RawContentClient<$Result.GetResult<Prisma.$RawContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RawContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawContentCountArgs} args - Arguments to filter RawContents to count.
     * @example
     * // Count the number of RawContents
     * const count = await prisma.rawContent.count({
     *   where: {
     *     // ... the filter for the RawContents we want to count
     *   }
     * })
    **/
    count<T extends RawContentCountArgs>(
      args?: Subset<T, RawContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RawContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RawContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RawContentAggregateArgs>(args: Subset<T, RawContentAggregateArgs>): Prisma.PrismaPromise<GetRawContentAggregateType<T>>

    /**
     * Group by RawContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RawContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RawContentGroupByArgs['orderBy'] }
        : { orderBy?: RawContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RawContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRawContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RawContent model
   */
  readonly fields: RawContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RawContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RawContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    source<T extends SourceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SourceDefaultArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    content<T extends RawContent$contentArgs<ExtArgs> = {}>(args?: Subset<T, RawContent$contentArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RawContent model
   */
  interface RawContentFieldRefs {
    readonly id: FieldRef<"RawContent", 'String'>
    readonly sourceId: FieldRef<"RawContent", 'String'>
    readonly externalId: FieldRef<"RawContent", 'String'>
    readonly canonicalUrl: FieldRef<"RawContent", 'String'>
    readonly title: FieldRef<"RawContent", 'String'>
    readonly rawText: FieldRef<"RawContent", 'String'>
    readonly rawHtml: FieldRef<"RawContent", 'String'>
    readonly author: FieldRef<"RawContent", 'String'>
    readonly publishedAt: FieldRef<"RawContent", 'DateTime'>
    readonly discoveredAt: FieldRef<"RawContent", 'DateTime'>
    readonly fetchedAt: FieldRef<"RawContent", 'DateTime'>
    readonly contentHash: FieldRef<"RawContent", 'String'>
    readonly metadata: FieldRef<"RawContent", 'Json'>
    readonly status: FieldRef<"RawContent", 'RawContentStatus'>
  }
    

  // Custom InputTypes
  /**
   * RawContent findUnique
   */
  export type RawContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawContent
     */
    select?: RawContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawContent
     */
    omit?: RawContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawContentInclude<ExtArgs> | null
    /**
     * Filter, which RawContent to fetch.
     */
    where: RawContentWhereUniqueInput
  }

  /**
   * RawContent findUniqueOrThrow
   */
  export type RawContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawContent
     */
    select?: RawContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawContent
     */
    omit?: RawContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawContentInclude<ExtArgs> | null
    /**
     * Filter, which RawContent to fetch.
     */
    where: RawContentWhereUniqueInput
  }

  /**
   * RawContent findFirst
   */
  export type RawContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawContent
     */
    select?: RawContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawContent
     */
    omit?: RawContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawContentInclude<ExtArgs> | null
    /**
     * Filter, which RawContent to fetch.
     */
    where?: RawContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawContents to fetch.
     */
    orderBy?: RawContentOrderByWithRelationInput | RawContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RawContents.
     */
    cursor?: RawContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RawContents.
     */
    distinct?: RawContentScalarFieldEnum | RawContentScalarFieldEnum[]
  }

  /**
   * RawContent findFirstOrThrow
   */
  export type RawContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawContent
     */
    select?: RawContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawContent
     */
    omit?: RawContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawContentInclude<ExtArgs> | null
    /**
     * Filter, which RawContent to fetch.
     */
    where?: RawContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawContents to fetch.
     */
    orderBy?: RawContentOrderByWithRelationInput | RawContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RawContents.
     */
    cursor?: RawContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RawContents.
     */
    distinct?: RawContentScalarFieldEnum | RawContentScalarFieldEnum[]
  }

  /**
   * RawContent findMany
   */
  export type RawContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawContent
     */
    select?: RawContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawContent
     */
    omit?: RawContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawContentInclude<ExtArgs> | null
    /**
     * Filter, which RawContents to fetch.
     */
    where?: RawContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawContents to fetch.
     */
    orderBy?: RawContentOrderByWithRelationInput | RawContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RawContents.
     */
    cursor?: RawContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawContents.
     */
    skip?: number
    distinct?: RawContentScalarFieldEnum | RawContentScalarFieldEnum[]
  }

  /**
   * RawContent create
   */
  export type RawContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawContent
     */
    select?: RawContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawContent
     */
    omit?: RawContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawContentInclude<ExtArgs> | null
    /**
     * The data needed to create a RawContent.
     */
    data: XOR<RawContentCreateInput, RawContentUncheckedCreateInput>
  }

  /**
   * RawContent createMany
   */
  export type RawContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RawContents.
     */
    data: RawContentCreateManyInput | RawContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RawContent createManyAndReturn
   */
  export type RawContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawContent
     */
    select?: RawContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RawContent
     */
    omit?: RawContentOmit<ExtArgs> | null
    /**
     * The data used to create many RawContents.
     */
    data: RawContentCreateManyInput | RawContentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawContentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RawContent update
   */
  export type RawContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawContent
     */
    select?: RawContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawContent
     */
    omit?: RawContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawContentInclude<ExtArgs> | null
    /**
     * The data needed to update a RawContent.
     */
    data: XOR<RawContentUpdateInput, RawContentUncheckedUpdateInput>
    /**
     * Choose, which RawContent to update.
     */
    where: RawContentWhereUniqueInput
  }

  /**
   * RawContent updateMany
   */
  export type RawContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RawContents.
     */
    data: XOR<RawContentUpdateManyMutationInput, RawContentUncheckedUpdateManyInput>
    /**
     * Filter which RawContents to update
     */
    where?: RawContentWhereInput
    /**
     * Limit how many RawContents to update.
     */
    limit?: number
  }

  /**
   * RawContent updateManyAndReturn
   */
  export type RawContentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawContent
     */
    select?: RawContentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RawContent
     */
    omit?: RawContentOmit<ExtArgs> | null
    /**
     * The data used to update RawContents.
     */
    data: XOR<RawContentUpdateManyMutationInput, RawContentUncheckedUpdateManyInput>
    /**
     * Filter which RawContents to update
     */
    where?: RawContentWhereInput
    /**
     * Limit how many RawContents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawContentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RawContent upsert
   */
  export type RawContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawContent
     */
    select?: RawContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawContent
     */
    omit?: RawContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawContentInclude<ExtArgs> | null
    /**
     * The filter to search for the RawContent to update in case it exists.
     */
    where: RawContentWhereUniqueInput
    /**
     * In case the RawContent found by the `where` argument doesn't exist, create a new RawContent with this data.
     */
    create: XOR<RawContentCreateInput, RawContentUncheckedCreateInput>
    /**
     * In case the RawContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RawContentUpdateInput, RawContentUncheckedUpdateInput>
  }

  /**
   * RawContent delete
   */
  export type RawContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawContent
     */
    select?: RawContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawContent
     */
    omit?: RawContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawContentInclude<ExtArgs> | null
    /**
     * Filter which RawContent to delete.
     */
    where: RawContentWhereUniqueInput
  }

  /**
   * RawContent deleteMany
   */
  export type RawContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RawContents to delete
     */
    where?: RawContentWhereInput
    /**
     * Limit how many RawContents to delete.
     */
    limit?: number
  }

  /**
   * RawContent.content
   */
  export type RawContent$contentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    where?: ContentWhereInput
  }

  /**
   * RawContent without action
   */
  export type RawContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawContent
     */
    select?: RawContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawContent
     */
    omit?: RawContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawContentInclude<ExtArgs> | null
  }


  /**
   * Model Content
   */

  export type AggregateContent = {
    _count: ContentCountAggregateOutputType | null
    _avg: ContentAvgAggregateOutputType | null
    _sum: ContentSumAggregateOutputType | null
    _min: ContentMinAggregateOutputType | null
    _max: ContentMaxAggregateOutputType | null
  }

  export type ContentAvgAggregateOutputType = {
    confidence: number | null
    fitnessScore: number | null
    angolaScore: number | null
    relevanceScore: number | null
    trustScore: number | null
  }

  export type ContentSumAggregateOutputType = {
    confidence: number | null
    fitnessScore: number | null
    angolaScore: number | null
    relevanceScore: number | null
    trustScore: number | null
  }

  export type ContentMinAggregateOutputType = {
    id: string | null
    rawContentId: string | null
    title: string | null
    slug: string | null
    cleanText: string | null
    summary: string | null
    contentType: $Enums.IntelligenceContentType | null
    category: string | null
    country: string | null
    province: string | null
    city: string | null
    confidence: number | null
    fitnessScore: number | null
    angolaScore: number | null
    relevanceScore: number | null
    trustScore: number | null
    duplicateStatus: $Enums.DuplicateStatus | null
    duplicateOfId: string | null
    duplicateReason: string | null
    editorialStatus: $Enums.EditorialStatus | null
    scheduledFor: Date | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentMaxAggregateOutputType = {
    id: string | null
    rawContentId: string | null
    title: string | null
    slug: string | null
    cleanText: string | null
    summary: string | null
    contentType: $Enums.IntelligenceContentType | null
    category: string | null
    country: string | null
    province: string | null
    city: string | null
    confidence: number | null
    fitnessScore: number | null
    angolaScore: number | null
    relevanceScore: number | null
    trustScore: number | null
    duplicateStatus: $Enums.DuplicateStatus | null
    duplicateOfId: string | null
    duplicateReason: string | null
    editorialStatus: $Enums.EditorialStatus | null
    scheduledFor: Date | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentCountAggregateOutputType = {
    id: number
    rawContentId: number
    title: number
    slug: number
    cleanText: number
    summary: number
    contentType: number
    category: number
    country: number
    province: number
    city: number
    confidence: number
    fitnessScore: number
    angolaScore: number
    relevanceScore: number
    trustScore: number
    duplicateStatus: number
    duplicateOfId: number
    duplicateReason: number
    editorialStatus: number
    draft: number
    socialDraft: number
    scoreExplanation: number
    scheduledFor: number
    publishedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContentAvgAggregateInputType = {
    confidence?: true
    fitnessScore?: true
    angolaScore?: true
    relevanceScore?: true
    trustScore?: true
  }

  export type ContentSumAggregateInputType = {
    confidence?: true
    fitnessScore?: true
    angolaScore?: true
    relevanceScore?: true
    trustScore?: true
  }

  export type ContentMinAggregateInputType = {
    id?: true
    rawContentId?: true
    title?: true
    slug?: true
    cleanText?: true
    summary?: true
    contentType?: true
    category?: true
    country?: true
    province?: true
    city?: true
    confidence?: true
    fitnessScore?: true
    angolaScore?: true
    relevanceScore?: true
    trustScore?: true
    duplicateStatus?: true
    duplicateOfId?: true
    duplicateReason?: true
    editorialStatus?: true
    scheduledFor?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentMaxAggregateInputType = {
    id?: true
    rawContentId?: true
    title?: true
    slug?: true
    cleanText?: true
    summary?: true
    contentType?: true
    category?: true
    country?: true
    province?: true
    city?: true
    confidence?: true
    fitnessScore?: true
    angolaScore?: true
    relevanceScore?: true
    trustScore?: true
    duplicateStatus?: true
    duplicateOfId?: true
    duplicateReason?: true
    editorialStatus?: true
    scheduledFor?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentCountAggregateInputType = {
    id?: true
    rawContentId?: true
    title?: true
    slug?: true
    cleanText?: true
    summary?: true
    contentType?: true
    category?: true
    country?: true
    province?: true
    city?: true
    confidence?: true
    fitnessScore?: true
    angolaScore?: true
    relevanceScore?: true
    trustScore?: true
    duplicateStatus?: true
    duplicateOfId?: true
    duplicateReason?: true
    editorialStatus?: true
    draft?: true
    socialDraft?: true
    scoreExplanation?: true
    scheduledFor?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Content to aggregate.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contents
    **/
    _count?: true | ContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentMaxAggregateInputType
  }

  export type GetContentAggregateType<T extends ContentAggregateArgs> = {
        [P in keyof T & keyof AggregateContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContent[P]>
      : GetScalarType<T[P], AggregateContent[P]>
  }




  export type ContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentWhereInput
    orderBy?: ContentOrderByWithAggregationInput | ContentOrderByWithAggregationInput[]
    by: ContentScalarFieldEnum[] | ContentScalarFieldEnum
    having?: ContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentCountAggregateInputType | true
    _avg?: ContentAvgAggregateInputType
    _sum?: ContentSumAggregateInputType
    _min?: ContentMinAggregateInputType
    _max?: ContentMaxAggregateInputType
  }

  export type ContentGroupByOutputType = {
    id: string
    rawContentId: string
    title: string
    slug: string
    cleanText: string
    summary: string | null
    contentType: $Enums.IntelligenceContentType
    category: string | null
    country: string
    province: string | null
    city: string | null
    confidence: number
    fitnessScore: number
    angolaScore: number
    relevanceScore: number
    trustScore: number
    duplicateStatus: $Enums.DuplicateStatus
    duplicateOfId: string | null
    duplicateReason: string | null
    editorialStatus: $Enums.EditorialStatus
    draft: JsonValue | null
    socialDraft: JsonValue | null
    scoreExplanation: JsonValue | null
    scheduledFor: Date | null
    publishedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ContentCountAggregateOutputType | null
    _avg: ContentAvgAggregateOutputType | null
    _sum: ContentSumAggregateOutputType | null
    _min: ContentMinAggregateOutputType | null
    _max: ContentMaxAggregateOutputType | null
  }

  type GetContentGroupByPayload<T extends ContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentGroupByOutputType[P]>
            : GetScalarType<T[P], ContentGroupByOutputType[P]>
        }
      >
    >


  export type ContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rawContentId?: boolean
    title?: boolean
    slug?: boolean
    cleanText?: boolean
    summary?: boolean
    contentType?: boolean
    category?: boolean
    country?: boolean
    province?: boolean
    city?: boolean
    confidence?: boolean
    fitnessScore?: boolean
    angolaScore?: boolean
    relevanceScore?: boolean
    trustScore?: boolean
    duplicateStatus?: boolean
    duplicateOfId?: boolean
    duplicateReason?: boolean
    editorialStatus?: boolean
    draft?: boolean
    socialDraft?: boolean
    scoreExplanation?: boolean
    scheduledFor?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rawContent?: boolean | RawContentDefaultArgs<ExtArgs>
    entities?: boolean | Content$entitiesArgs<ExtArgs>
    eventCandidate?: boolean | Content$eventCandidateArgs<ExtArgs>
    reviews?: boolean | Content$reviewsArgs<ExtArgs>
    publications?: boolean | Content$publicationsArgs<ExtArgs>
    _count?: boolean | ContentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["content"]>

  export type ContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rawContentId?: boolean
    title?: boolean
    slug?: boolean
    cleanText?: boolean
    summary?: boolean
    contentType?: boolean
    category?: boolean
    country?: boolean
    province?: boolean
    city?: boolean
    confidence?: boolean
    fitnessScore?: boolean
    angolaScore?: boolean
    relevanceScore?: boolean
    trustScore?: boolean
    duplicateStatus?: boolean
    duplicateOfId?: boolean
    duplicateReason?: boolean
    editorialStatus?: boolean
    draft?: boolean
    socialDraft?: boolean
    scoreExplanation?: boolean
    scheduledFor?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rawContent?: boolean | RawContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["content"]>

  export type ContentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rawContentId?: boolean
    title?: boolean
    slug?: boolean
    cleanText?: boolean
    summary?: boolean
    contentType?: boolean
    category?: boolean
    country?: boolean
    province?: boolean
    city?: boolean
    confidence?: boolean
    fitnessScore?: boolean
    angolaScore?: boolean
    relevanceScore?: boolean
    trustScore?: boolean
    duplicateStatus?: boolean
    duplicateOfId?: boolean
    duplicateReason?: boolean
    editorialStatus?: boolean
    draft?: boolean
    socialDraft?: boolean
    scoreExplanation?: boolean
    scheduledFor?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rawContent?: boolean | RawContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["content"]>

  export type ContentSelectScalar = {
    id?: boolean
    rawContentId?: boolean
    title?: boolean
    slug?: boolean
    cleanText?: boolean
    summary?: boolean
    contentType?: boolean
    category?: boolean
    country?: boolean
    province?: boolean
    city?: boolean
    confidence?: boolean
    fitnessScore?: boolean
    angolaScore?: boolean
    relevanceScore?: boolean
    trustScore?: boolean
    duplicateStatus?: boolean
    duplicateOfId?: boolean
    duplicateReason?: boolean
    editorialStatus?: boolean
    draft?: boolean
    socialDraft?: boolean
    scoreExplanation?: boolean
    scheduledFor?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rawContentId" | "title" | "slug" | "cleanText" | "summary" | "contentType" | "category" | "country" | "province" | "city" | "confidence" | "fitnessScore" | "angolaScore" | "relevanceScore" | "trustScore" | "duplicateStatus" | "duplicateOfId" | "duplicateReason" | "editorialStatus" | "draft" | "socialDraft" | "scoreExplanation" | "scheduledFor" | "publishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["content"]>
  export type ContentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rawContent?: boolean | RawContentDefaultArgs<ExtArgs>
    entities?: boolean | Content$entitiesArgs<ExtArgs>
    eventCandidate?: boolean | Content$eventCandidateArgs<ExtArgs>
    reviews?: boolean | Content$reviewsArgs<ExtArgs>
    publications?: boolean | Content$publicationsArgs<ExtArgs>
    _count?: boolean | ContentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rawContent?: boolean | RawContentDefaultArgs<ExtArgs>
  }
  export type ContentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rawContent?: boolean | RawContentDefaultArgs<ExtArgs>
  }

  export type $ContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Content"
    objects: {
      rawContent: Prisma.$RawContentPayload<ExtArgs>
      entities: Prisma.$ContentEntityPayload<ExtArgs>[]
      eventCandidate: Prisma.$EventCandidatePayload<ExtArgs> | null
      reviews: Prisma.$EditorialReviewPayload<ExtArgs>[]
      publications: Prisma.$PublicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rawContentId: string
      title: string
      slug: string
      cleanText: string
      summary: string | null
      contentType: $Enums.IntelligenceContentType
      category: string | null
      country: string
      province: string | null
      city: string | null
      confidence: number
      fitnessScore: number
      angolaScore: number
      relevanceScore: number
      trustScore: number
      duplicateStatus: $Enums.DuplicateStatus
      duplicateOfId: string | null
      duplicateReason: string | null
      editorialStatus: $Enums.EditorialStatus
      draft: Prisma.JsonValue | null
      socialDraft: Prisma.JsonValue | null
      scoreExplanation: Prisma.JsonValue | null
      scheduledFor: Date | null
      publishedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["content"]>
    composites: {}
  }

  type ContentGetPayload<S extends boolean | null | undefined | ContentDefaultArgs> = $Result.GetResult<Prisma.$ContentPayload, S>

  type ContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentCountAggregateInputType | true
    }

  export interface ContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Content'], meta: { name: 'Content' } }
    /**
     * Find zero or one Content that matches the filter.
     * @param {ContentFindUniqueArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentFindUniqueArgs>(args: SelectSubset<T, ContentFindUniqueArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Content that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentFindUniqueOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Content that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindFirstArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentFindFirstArgs>(args?: SelectSubset<T, ContentFindFirstArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Content that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindFirstOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contents
     * const contents = await prisma.content.findMany()
     * 
     * // Get first 10 Contents
     * const contents = await prisma.content.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentWithIdOnly = await prisma.content.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentFindManyArgs>(args?: SelectSubset<T, ContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Content.
     * @param {ContentCreateArgs} args - Arguments to create a Content.
     * @example
     * // Create one Content
     * const Content = await prisma.content.create({
     *   data: {
     *     // ... data to create a Content
     *   }
     * })
     * 
     */
    create<T extends ContentCreateArgs>(args: SelectSubset<T, ContentCreateArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contents.
     * @param {ContentCreateManyArgs} args - Arguments to create many Contents.
     * @example
     * // Create many Contents
     * const content = await prisma.content.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentCreateManyArgs>(args?: SelectSubset<T, ContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contents and returns the data saved in the database.
     * @param {ContentCreateManyAndReturnArgs} args - Arguments to create many Contents.
     * @example
     * // Create many Contents
     * const content = await prisma.content.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contents and only return the `id`
     * const contentWithIdOnly = await prisma.content.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContentCreateManyAndReturnArgs>(args?: SelectSubset<T, ContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Content.
     * @param {ContentDeleteArgs} args - Arguments to delete one Content.
     * @example
     * // Delete one Content
     * const Content = await prisma.content.delete({
     *   where: {
     *     // ... filter to delete one Content
     *   }
     * })
     * 
     */
    delete<T extends ContentDeleteArgs>(args: SelectSubset<T, ContentDeleteArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Content.
     * @param {ContentUpdateArgs} args - Arguments to update one Content.
     * @example
     * // Update one Content
     * const content = await prisma.content.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentUpdateArgs>(args: SelectSubset<T, ContentUpdateArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contents.
     * @param {ContentDeleteManyArgs} args - Arguments to filter Contents to delete.
     * @example
     * // Delete a few Contents
     * const { count } = await prisma.content.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentDeleteManyArgs>(args?: SelectSubset<T, ContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contents
     * const content = await prisma.content.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentUpdateManyArgs>(args: SelectSubset<T, ContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contents and returns the data updated in the database.
     * @param {ContentUpdateManyAndReturnArgs} args - Arguments to update many Contents.
     * @example
     * // Update many Contents
     * const content = await prisma.content.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contents and only return the `id`
     * const contentWithIdOnly = await prisma.content.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContentUpdateManyAndReturnArgs>(args: SelectSubset<T, ContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Content.
     * @param {ContentUpsertArgs} args - Arguments to update or create a Content.
     * @example
     * // Update or create a Content
     * const content = await prisma.content.upsert({
     *   create: {
     *     // ... data to create a Content
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Content we want to update
     *   }
     * })
     */
    upsert<T extends ContentUpsertArgs>(args: SelectSubset<T, ContentUpsertArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentCountArgs} args - Arguments to filter Contents to count.
     * @example
     * // Count the number of Contents
     * const count = await prisma.content.count({
     *   where: {
     *     // ... the filter for the Contents we want to count
     *   }
     * })
    **/
    count<T extends ContentCountArgs>(
      args?: Subset<T, ContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContentAggregateArgs>(args: Subset<T, ContentAggregateArgs>): Prisma.PrismaPromise<GetContentAggregateType<T>>

    /**
     * Group by Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentGroupByArgs['orderBy'] }
        : { orderBy?: ContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Content model
   */
  readonly fields: ContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Content.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rawContent<T extends RawContentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RawContentDefaultArgs<ExtArgs>>): Prisma__RawContentClient<$Result.GetResult<Prisma.$RawContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    entities<T extends Content$entitiesArgs<ExtArgs> = {}>(args?: Subset<T, Content$entitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentEntityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    eventCandidate<T extends Content$eventCandidateArgs<ExtArgs> = {}>(args?: Subset<T, Content$eventCandidateArgs<ExtArgs>>): Prisma__EventCandidateClient<$Result.GetResult<Prisma.$EventCandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reviews<T extends Content$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Content$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EditorialReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    publications<T extends Content$publicationsArgs<ExtArgs> = {}>(args?: Subset<T, Content$publicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Content model
   */
  interface ContentFieldRefs {
    readonly id: FieldRef<"Content", 'String'>
    readonly rawContentId: FieldRef<"Content", 'String'>
    readonly title: FieldRef<"Content", 'String'>
    readonly slug: FieldRef<"Content", 'String'>
    readonly cleanText: FieldRef<"Content", 'String'>
    readonly summary: FieldRef<"Content", 'String'>
    readonly contentType: FieldRef<"Content", 'IntelligenceContentType'>
    readonly category: FieldRef<"Content", 'String'>
    readonly country: FieldRef<"Content", 'String'>
    readonly province: FieldRef<"Content", 'String'>
    readonly city: FieldRef<"Content", 'String'>
    readonly confidence: FieldRef<"Content", 'Int'>
    readonly fitnessScore: FieldRef<"Content", 'Int'>
    readonly angolaScore: FieldRef<"Content", 'Int'>
    readonly relevanceScore: FieldRef<"Content", 'Int'>
    readonly trustScore: FieldRef<"Content", 'Int'>
    readonly duplicateStatus: FieldRef<"Content", 'DuplicateStatus'>
    readonly duplicateOfId: FieldRef<"Content", 'String'>
    readonly duplicateReason: FieldRef<"Content", 'String'>
    readonly editorialStatus: FieldRef<"Content", 'EditorialStatus'>
    readonly draft: FieldRef<"Content", 'Json'>
    readonly socialDraft: FieldRef<"Content", 'Json'>
    readonly scoreExplanation: FieldRef<"Content", 'Json'>
    readonly scheduledFor: FieldRef<"Content", 'DateTime'>
    readonly publishedAt: FieldRef<"Content", 'DateTime'>
    readonly createdAt: FieldRef<"Content", 'DateTime'>
    readonly updatedAt: FieldRef<"Content", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Content findUnique
   */
  export type ContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content findUniqueOrThrow
   */
  export type ContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content findFirst
   */
  export type ContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content findFirstOrThrow
   */
  export type ContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content findMany
   */
  export type ContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Contents to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content create
   */
  export type ContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The data needed to create a Content.
     */
    data: XOR<ContentCreateInput, ContentUncheckedCreateInput>
  }

  /**
   * Content createMany
   */
  export type ContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contents.
     */
    data: ContentCreateManyInput | ContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Content createManyAndReturn
   */
  export type ContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * The data used to create many Contents.
     */
    data: ContentCreateManyInput | ContentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Content update
   */
  export type ContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The data needed to update a Content.
     */
    data: XOR<ContentUpdateInput, ContentUncheckedUpdateInput>
    /**
     * Choose, which Content to update.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content updateMany
   */
  export type ContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contents.
     */
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyInput>
    /**
     * Filter which Contents to update
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to update.
     */
    limit?: number
  }

  /**
   * Content updateManyAndReturn
   */
  export type ContentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * The data used to update Contents.
     */
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyInput>
    /**
     * Filter which Contents to update
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Content upsert
   */
  export type ContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The filter to search for the Content to update in case it exists.
     */
    where: ContentWhereUniqueInput
    /**
     * In case the Content found by the `where` argument doesn't exist, create a new Content with this data.
     */
    create: XOR<ContentCreateInput, ContentUncheckedCreateInput>
    /**
     * In case the Content was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentUpdateInput, ContentUncheckedUpdateInput>
  }

  /**
   * Content delete
   */
  export type ContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter which Content to delete.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content deleteMany
   */
  export type ContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contents to delete
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to delete.
     */
    limit?: number
  }

  /**
   * Content.entities
   */
  export type Content$entitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentEntity
     */
    select?: ContentEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentEntity
     */
    omit?: ContentEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentEntityInclude<ExtArgs> | null
    where?: ContentEntityWhereInput
    orderBy?: ContentEntityOrderByWithRelationInput | ContentEntityOrderByWithRelationInput[]
    cursor?: ContentEntityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentEntityScalarFieldEnum | ContentEntityScalarFieldEnum[]
  }

  /**
   * Content.eventCandidate
   */
  export type Content$eventCandidateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCandidate
     */
    select?: EventCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCandidate
     */
    omit?: EventCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCandidateInclude<ExtArgs> | null
    where?: EventCandidateWhereInput
  }

  /**
   * Content.reviews
   */
  export type Content$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorialReview
     */
    select?: EditorialReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorialReview
     */
    omit?: EditorialReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorialReviewInclude<ExtArgs> | null
    where?: EditorialReviewWhereInput
    orderBy?: EditorialReviewOrderByWithRelationInput | EditorialReviewOrderByWithRelationInput[]
    cursor?: EditorialReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EditorialReviewScalarFieldEnum | EditorialReviewScalarFieldEnum[]
  }

  /**
   * Content.publications
   */
  export type Content$publicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    where?: PublicationWhereInput
    orderBy?: PublicationOrderByWithRelationInput | PublicationOrderByWithRelationInput[]
    cursor?: PublicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[]
  }

  /**
   * Content without action
   */
  export type ContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
  }


  /**
   * Model Entity
   */

  export type AggregateEntity = {
    _count: EntityCountAggregateOutputType | null
    _min: EntityMinAggregateOutputType | null
    _max: EntityMaxAggregateOutputType | null
  }

  export type EntityMinAggregateOutputType = {
    id: string | null
    name: string | null
    entityType: $Enums.EntityType | null
    country: string | null
    province: string | null
    city: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EntityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    entityType: $Enums.EntityType | null
    country: string | null
    province: string | null
    city: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EntityCountAggregateOutputType = {
    id: number
    name: number
    entityType: number
    country: number
    province: number
    city: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EntityMinAggregateInputType = {
    id?: true
    name?: true
    entityType?: true
    country?: true
    province?: true
    city?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EntityMaxAggregateInputType = {
    id?: true
    name?: true
    entityType?: true
    country?: true
    province?: true
    city?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EntityCountAggregateInputType = {
    id?: true
    name?: true
    entityType?: true
    country?: true
    province?: true
    city?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EntityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entity to aggregate.
     */
    where?: EntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entities to fetch.
     */
    orderBy?: EntityOrderByWithRelationInput | EntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entities
    **/
    _count?: true | EntityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntityMaxAggregateInputType
  }

  export type GetEntityAggregateType<T extends EntityAggregateArgs> = {
        [P in keyof T & keyof AggregateEntity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntity[P]>
      : GetScalarType<T[P], AggregateEntity[P]>
  }




  export type EntityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntityWhereInput
    orderBy?: EntityOrderByWithAggregationInput | EntityOrderByWithAggregationInput[]
    by: EntityScalarFieldEnum[] | EntityScalarFieldEnum
    having?: EntityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntityCountAggregateInputType | true
    _min?: EntityMinAggregateInputType
    _max?: EntityMaxAggregateInputType
  }

  export type EntityGroupByOutputType = {
    id: string
    name: string
    entityType: $Enums.EntityType
    country: string
    province: string | null
    city: string | null
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: EntityCountAggregateOutputType | null
    _min: EntityMinAggregateOutputType | null
    _max: EntityMaxAggregateOutputType | null
  }

  type GetEntityGroupByPayload<T extends EntityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntityGroupByOutputType[P]>
            : GetScalarType<T[P], EntityGroupByOutputType[P]>
        }
      >
    >


  export type EntitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    entityType?: boolean
    country?: boolean
    province?: boolean
    city?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contents?: boolean | Entity$contentsArgs<ExtArgs>
    _count?: boolean | EntityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entity"]>

  export type EntitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    entityType?: boolean
    country?: boolean
    province?: boolean
    city?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["entity"]>

  export type EntitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    entityType?: boolean
    country?: boolean
    province?: boolean
    city?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["entity"]>

  export type EntitySelectScalar = {
    id?: boolean
    name?: boolean
    entityType?: boolean
    country?: boolean
    province?: boolean
    city?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EntityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "entityType" | "country" | "province" | "city" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["entity"]>
  export type EntityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contents?: boolean | Entity$contentsArgs<ExtArgs>
    _count?: boolean | EntityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EntityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EntityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EntityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entity"
    objects: {
      contents: Prisma.$ContentEntityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      entityType: $Enums.EntityType
      country: string
      province: string | null
      city: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["entity"]>
    composites: {}
  }

  type EntityGetPayload<S extends boolean | null | undefined | EntityDefaultArgs> = $Result.GetResult<Prisma.$EntityPayload, S>

  type EntityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EntityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntityCountAggregateInputType | true
    }

  export interface EntityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entity'], meta: { name: 'Entity' } }
    /**
     * Find zero or one Entity that matches the filter.
     * @param {EntityFindUniqueArgs} args - Arguments to find a Entity
     * @example
     * // Get one Entity
     * const entity = await prisma.entity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntityFindUniqueArgs>(args: SelectSubset<T, EntityFindUniqueArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntityFindUniqueOrThrowArgs} args - Arguments to find a Entity
     * @example
     * // Get one Entity
     * const entity = await prisma.entity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntityFindUniqueOrThrowArgs>(args: SelectSubset<T, EntityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityFindFirstArgs} args - Arguments to find a Entity
     * @example
     * // Get one Entity
     * const entity = await prisma.entity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntityFindFirstArgs>(args?: SelectSubset<T, EntityFindFirstArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityFindFirstOrThrowArgs} args - Arguments to find a Entity
     * @example
     * // Get one Entity
     * const entity = await prisma.entity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntityFindFirstOrThrowArgs>(args?: SelectSubset<T, EntityFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entities
     * const entities = await prisma.entity.findMany()
     * 
     * // Get first 10 Entities
     * const entities = await prisma.entity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entityWithIdOnly = await prisma.entity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntityFindManyArgs>(args?: SelectSubset<T, EntityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entity.
     * @param {EntityCreateArgs} args - Arguments to create a Entity.
     * @example
     * // Create one Entity
     * const Entity = await prisma.entity.create({
     *   data: {
     *     // ... data to create a Entity
     *   }
     * })
     * 
     */
    create<T extends EntityCreateArgs>(args: SelectSubset<T, EntityCreateArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entities.
     * @param {EntityCreateManyArgs} args - Arguments to create many Entities.
     * @example
     * // Create many Entities
     * const entity = await prisma.entity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntityCreateManyArgs>(args?: SelectSubset<T, EntityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Entities and returns the data saved in the database.
     * @param {EntityCreateManyAndReturnArgs} args - Arguments to create many Entities.
     * @example
     * // Create many Entities
     * const entity = await prisma.entity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Entities and only return the `id`
     * const entityWithIdOnly = await prisma.entity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EntityCreateManyAndReturnArgs>(args?: SelectSubset<T, EntityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Entity.
     * @param {EntityDeleteArgs} args - Arguments to delete one Entity.
     * @example
     * // Delete one Entity
     * const Entity = await prisma.entity.delete({
     *   where: {
     *     // ... filter to delete one Entity
     *   }
     * })
     * 
     */
    delete<T extends EntityDeleteArgs>(args: SelectSubset<T, EntityDeleteArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entity.
     * @param {EntityUpdateArgs} args - Arguments to update one Entity.
     * @example
     * // Update one Entity
     * const entity = await prisma.entity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntityUpdateArgs>(args: SelectSubset<T, EntityUpdateArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entities.
     * @param {EntityDeleteManyArgs} args - Arguments to filter Entities to delete.
     * @example
     * // Delete a few Entities
     * const { count } = await prisma.entity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntityDeleteManyArgs>(args?: SelectSubset<T, EntityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entities
     * const entity = await prisma.entity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntityUpdateManyArgs>(args: SelectSubset<T, EntityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entities and returns the data updated in the database.
     * @param {EntityUpdateManyAndReturnArgs} args - Arguments to update many Entities.
     * @example
     * // Update many Entities
     * const entity = await prisma.entity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Entities and only return the `id`
     * const entityWithIdOnly = await prisma.entity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EntityUpdateManyAndReturnArgs>(args: SelectSubset<T, EntityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Entity.
     * @param {EntityUpsertArgs} args - Arguments to update or create a Entity.
     * @example
     * // Update or create a Entity
     * const entity = await prisma.entity.upsert({
     *   create: {
     *     // ... data to create a Entity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entity we want to update
     *   }
     * })
     */
    upsert<T extends EntityUpsertArgs>(args: SelectSubset<T, EntityUpsertArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityCountArgs} args - Arguments to filter Entities to count.
     * @example
     * // Count the number of Entities
     * const count = await prisma.entity.count({
     *   where: {
     *     // ... the filter for the Entities we want to count
     *   }
     * })
    **/
    count<T extends EntityCountArgs>(
      args?: Subset<T, EntityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntityAggregateArgs>(args: Subset<T, EntityAggregateArgs>): Prisma.PrismaPromise<GetEntityAggregateType<T>>

    /**
     * Group by Entity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EntityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntityGroupByArgs['orderBy'] }
        : { orderBy?: EntityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EntityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entity model
   */
  readonly fields: EntityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contents<T extends Entity$contentsArgs<ExtArgs> = {}>(args?: Subset<T, Entity$contentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentEntityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Entity model
   */
  interface EntityFieldRefs {
    readonly id: FieldRef<"Entity", 'String'>
    readonly name: FieldRef<"Entity", 'String'>
    readonly entityType: FieldRef<"Entity", 'EntityType'>
    readonly country: FieldRef<"Entity", 'String'>
    readonly province: FieldRef<"Entity", 'String'>
    readonly city: FieldRef<"Entity", 'String'>
    readonly metadata: FieldRef<"Entity", 'Json'>
    readonly createdAt: FieldRef<"Entity", 'DateTime'>
    readonly updatedAt: FieldRef<"Entity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Entity findUnique
   */
  export type EntityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * Filter, which Entity to fetch.
     */
    where: EntityWhereUniqueInput
  }

  /**
   * Entity findUniqueOrThrow
   */
  export type EntityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * Filter, which Entity to fetch.
     */
    where: EntityWhereUniqueInput
  }

  /**
   * Entity findFirst
   */
  export type EntityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * Filter, which Entity to fetch.
     */
    where?: EntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entities to fetch.
     */
    orderBy?: EntityOrderByWithRelationInput | EntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entities.
     */
    cursor?: EntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entities.
     */
    distinct?: EntityScalarFieldEnum | EntityScalarFieldEnum[]
  }

  /**
   * Entity findFirstOrThrow
   */
  export type EntityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * Filter, which Entity to fetch.
     */
    where?: EntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entities to fetch.
     */
    orderBy?: EntityOrderByWithRelationInput | EntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entities.
     */
    cursor?: EntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entities.
     */
    distinct?: EntityScalarFieldEnum | EntityScalarFieldEnum[]
  }

  /**
   * Entity findMany
   */
  export type EntityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * Filter, which Entities to fetch.
     */
    where?: EntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entities to fetch.
     */
    orderBy?: EntityOrderByWithRelationInput | EntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entities.
     */
    cursor?: EntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entities.
     */
    skip?: number
    distinct?: EntityScalarFieldEnum | EntityScalarFieldEnum[]
  }

  /**
   * Entity create
   */
  export type EntityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * The data needed to create a Entity.
     */
    data: XOR<EntityCreateInput, EntityUncheckedCreateInput>
  }

  /**
   * Entity createMany
   */
  export type EntityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entities.
     */
    data: EntityCreateManyInput | EntityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entity createManyAndReturn
   */
  export type EntityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * The data used to create many Entities.
     */
    data: EntityCreateManyInput | EntityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entity update
   */
  export type EntityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * The data needed to update a Entity.
     */
    data: XOR<EntityUpdateInput, EntityUncheckedUpdateInput>
    /**
     * Choose, which Entity to update.
     */
    where: EntityWhereUniqueInput
  }

  /**
   * Entity updateMany
   */
  export type EntityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entities.
     */
    data: XOR<EntityUpdateManyMutationInput, EntityUncheckedUpdateManyInput>
    /**
     * Filter which Entities to update
     */
    where?: EntityWhereInput
    /**
     * Limit how many Entities to update.
     */
    limit?: number
  }

  /**
   * Entity updateManyAndReturn
   */
  export type EntityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * The data used to update Entities.
     */
    data: XOR<EntityUpdateManyMutationInput, EntityUncheckedUpdateManyInput>
    /**
     * Filter which Entities to update
     */
    where?: EntityWhereInput
    /**
     * Limit how many Entities to update.
     */
    limit?: number
  }

  /**
   * Entity upsert
   */
  export type EntityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * The filter to search for the Entity to update in case it exists.
     */
    where: EntityWhereUniqueInput
    /**
     * In case the Entity found by the `where` argument doesn't exist, create a new Entity with this data.
     */
    create: XOR<EntityCreateInput, EntityUncheckedCreateInput>
    /**
     * In case the Entity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntityUpdateInput, EntityUncheckedUpdateInput>
  }

  /**
   * Entity delete
   */
  export type EntityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * Filter which Entity to delete.
     */
    where: EntityWhereUniqueInput
  }

  /**
   * Entity deleteMany
   */
  export type EntityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entities to delete
     */
    where?: EntityWhereInput
    /**
     * Limit how many Entities to delete.
     */
    limit?: number
  }

  /**
   * Entity.contents
   */
  export type Entity$contentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentEntity
     */
    select?: ContentEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentEntity
     */
    omit?: ContentEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentEntityInclude<ExtArgs> | null
    where?: ContentEntityWhereInput
    orderBy?: ContentEntityOrderByWithRelationInput | ContentEntityOrderByWithRelationInput[]
    cursor?: ContentEntityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentEntityScalarFieldEnum | ContentEntityScalarFieldEnum[]
  }

  /**
   * Entity without action
   */
  export type EntityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
  }


  /**
   * Model ContentEntity
   */

  export type AggregateContentEntity = {
    _count: ContentEntityCountAggregateOutputType | null
    _avg: ContentEntityAvgAggregateOutputType | null
    _sum: ContentEntitySumAggregateOutputType | null
    _min: ContentEntityMinAggregateOutputType | null
    _max: ContentEntityMaxAggregateOutputType | null
  }

  export type ContentEntityAvgAggregateOutputType = {
    confidence: number | null
  }

  export type ContentEntitySumAggregateOutputType = {
    confidence: number | null
  }

  export type ContentEntityMinAggregateOutputType = {
    contentId: string | null
    entityId: string | null
    confidence: number | null
    role: string | null
  }

  export type ContentEntityMaxAggregateOutputType = {
    contentId: string | null
    entityId: string | null
    confidence: number | null
    role: string | null
  }

  export type ContentEntityCountAggregateOutputType = {
    contentId: number
    entityId: number
    confidence: number
    role: number
    _all: number
  }


  export type ContentEntityAvgAggregateInputType = {
    confidence?: true
  }

  export type ContentEntitySumAggregateInputType = {
    confidence?: true
  }

  export type ContentEntityMinAggregateInputType = {
    contentId?: true
    entityId?: true
    confidence?: true
    role?: true
  }

  export type ContentEntityMaxAggregateInputType = {
    contentId?: true
    entityId?: true
    confidence?: true
    role?: true
  }

  export type ContentEntityCountAggregateInputType = {
    contentId?: true
    entityId?: true
    confidence?: true
    role?: true
    _all?: true
  }

  export type ContentEntityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentEntity to aggregate.
     */
    where?: ContentEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentEntities to fetch.
     */
    orderBy?: ContentEntityOrderByWithRelationInput | ContentEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentEntities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContentEntities
    **/
    _count?: true | ContentEntityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContentEntityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContentEntitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentEntityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentEntityMaxAggregateInputType
  }

  export type GetContentEntityAggregateType<T extends ContentEntityAggregateArgs> = {
        [P in keyof T & keyof AggregateContentEntity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContentEntity[P]>
      : GetScalarType<T[P], AggregateContentEntity[P]>
  }




  export type ContentEntityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentEntityWhereInput
    orderBy?: ContentEntityOrderByWithAggregationInput | ContentEntityOrderByWithAggregationInput[]
    by: ContentEntityScalarFieldEnum[] | ContentEntityScalarFieldEnum
    having?: ContentEntityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentEntityCountAggregateInputType | true
    _avg?: ContentEntityAvgAggregateInputType
    _sum?: ContentEntitySumAggregateInputType
    _min?: ContentEntityMinAggregateInputType
    _max?: ContentEntityMaxAggregateInputType
  }

  export type ContentEntityGroupByOutputType = {
    contentId: string
    entityId: string
    confidence: number
    role: string | null
    _count: ContentEntityCountAggregateOutputType | null
    _avg: ContentEntityAvgAggregateOutputType | null
    _sum: ContentEntitySumAggregateOutputType | null
    _min: ContentEntityMinAggregateOutputType | null
    _max: ContentEntityMaxAggregateOutputType | null
  }

  type GetContentEntityGroupByPayload<T extends ContentEntityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentEntityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentEntityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentEntityGroupByOutputType[P]>
            : GetScalarType<T[P], ContentEntityGroupByOutputType[P]>
        }
      >
    >


  export type ContentEntitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    contentId?: boolean
    entityId?: boolean
    confidence?: boolean
    role?: boolean
    content?: boolean | ContentDefaultArgs<ExtArgs>
    entity?: boolean | EntityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentEntity"]>

  export type ContentEntitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    contentId?: boolean
    entityId?: boolean
    confidence?: boolean
    role?: boolean
    content?: boolean | ContentDefaultArgs<ExtArgs>
    entity?: boolean | EntityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentEntity"]>

  export type ContentEntitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    contentId?: boolean
    entityId?: boolean
    confidence?: boolean
    role?: boolean
    content?: boolean | ContentDefaultArgs<ExtArgs>
    entity?: boolean | EntityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentEntity"]>

  export type ContentEntitySelectScalar = {
    contentId?: boolean
    entityId?: boolean
    confidence?: boolean
    role?: boolean
  }

  export type ContentEntityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"contentId" | "entityId" | "confidence" | "role", ExtArgs["result"]["contentEntity"]>
  export type ContentEntityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | ContentDefaultArgs<ExtArgs>
    entity?: boolean | EntityDefaultArgs<ExtArgs>
  }
  export type ContentEntityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | ContentDefaultArgs<ExtArgs>
    entity?: boolean | EntityDefaultArgs<ExtArgs>
  }
  export type ContentEntityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | ContentDefaultArgs<ExtArgs>
    entity?: boolean | EntityDefaultArgs<ExtArgs>
  }

  export type $ContentEntityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContentEntity"
    objects: {
      content: Prisma.$ContentPayload<ExtArgs>
      entity: Prisma.$EntityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      contentId: string
      entityId: string
      confidence: number
      role: string | null
    }, ExtArgs["result"]["contentEntity"]>
    composites: {}
  }

  type ContentEntityGetPayload<S extends boolean | null | undefined | ContentEntityDefaultArgs> = $Result.GetResult<Prisma.$ContentEntityPayload, S>

  type ContentEntityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentEntityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentEntityCountAggregateInputType | true
    }

  export interface ContentEntityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContentEntity'], meta: { name: 'ContentEntity' } }
    /**
     * Find zero or one ContentEntity that matches the filter.
     * @param {ContentEntityFindUniqueArgs} args - Arguments to find a ContentEntity
     * @example
     * // Get one ContentEntity
     * const contentEntity = await prisma.contentEntity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentEntityFindUniqueArgs>(args: SelectSubset<T, ContentEntityFindUniqueArgs<ExtArgs>>): Prisma__ContentEntityClient<$Result.GetResult<Prisma.$ContentEntityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContentEntity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentEntityFindUniqueOrThrowArgs} args - Arguments to find a ContentEntity
     * @example
     * // Get one ContentEntity
     * const contentEntity = await prisma.contentEntity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentEntityFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentEntityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentEntityClient<$Result.GetResult<Prisma.$ContentEntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentEntity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentEntityFindFirstArgs} args - Arguments to find a ContentEntity
     * @example
     * // Get one ContentEntity
     * const contentEntity = await prisma.contentEntity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentEntityFindFirstArgs>(args?: SelectSubset<T, ContentEntityFindFirstArgs<ExtArgs>>): Prisma__ContentEntityClient<$Result.GetResult<Prisma.$ContentEntityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentEntity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentEntityFindFirstOrThrowArgs} args - Arguments to find a ContentEntity
     * @example
     * // Get one ContentEntity
     * const contentEntity = await prisma.contentEntity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentEntityFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentEntityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentEntityClient<$Result.GetResult<Prisma.$ContentEntityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContentEntities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentEntityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContentEntities
     * const contentEntities = await prisma.contentEntity.findMany()
     * 
     * // Get first 10 ContentEntities
     * const contentEntities = await prisma.contentEntity.findMany({ take: 10 })
     * 
     * // Only select the `contentId`
     * const contentEntityWithContentIdOnly = await prisma.contentEntity.findMany({ select: { contentId: true } })
     * 
     */
    findMany<T extends ContentEntityFindManyArgs>(args?: SelectSubset<T, ContentEntityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentEntityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContentEntity.
     * @param {ContentEntityCreateArgs} args - Arguments to create a ContentEntity.
     * @example
     * // Create one ContentEntity
     * const ContentEntity = await prisma.contentEntity.create({
     *   data: {
     *     // ... data to create a ContentEntity
     *   }
     * })
     * 
     */
    create<T extends ContentEntityCreateArgs>(args: SelectSubset<T, ContentEntityCreateArgs<ExtArgs>>): Prisma__ContentEntityClient<$Result.GetResult<Prisma.$ContentEntityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContentEntities.
     * @param {ContentEntityCreateManyArgs} args - Arguments to create many ContentEntities.
     * @example
     * // Create many ContentEntities
     * const contentEntity = await prisma.contentEntity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentEntityCreateManyArgs>(args?: SelectSubset<T, ContentEntityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContentEntities and returns the data saved in the database.
     * @param {ContentEntityCreateManyAndReturnArgs} args - Arguments to create many ContentEntities.
     * @example
     * // Create many ContentEntities
     * const contentEntity = await prisma.contentEntity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContentEntities and only return the `contentId`
     * const contentEntityWithContentIdOnly = await prisma.contentEntity.createManyAndReturn({
     *   select: { contentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContentEntityCreateManyAndReturnArgs>(args?: SelectSubset<T, ContentEntityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentEntityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContentEntity.
     * @param {ContentEntityDeleteArgs} args - Arguments to delete one ContentEntity.
     * @example
     * // Delete one ContentEntity
     * const ContentEntity = await prisma.contentEntity.delete({
     *   where: {
     *     // ... filter to delete one ContentEntity
     *   }
     * })
     * 
     */
    delete<T extends ContentEntityDeleteArgs>(args: SelectSubset<T, ContentEntityDeleteArgs<ExtArgs>>): Prisma__ContentEntityClient<$Result.GetResult<Prisma.$ContentEntityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContentEntity.
     * @param {ContentEntityUpdateArgs} args - Arguments to update one ContentEntity.
     * @example
     * // Update one ContentEntity
     * const contentEntity = await prisma.contentEntity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentEntityUpdateArgs>(args: SelectSubset<T, ContentEntityUpdateArgs<ExtArgs>>): Prisma__ContentEntityClient<$Result.GetResult<Prisma.$ContentEntityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContentEntities.
     * @param {ContentEntityDeleteManyArgs} args - Arguments to filter ContentEntities to delete.
     * @example
     * // Delete a few ContentEntities
     * const { count } = await prisma.contentEntity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentEntityDeleteManyArgs>(args?: SelectSubset<T, ContentEntityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentEntities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentEntityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContentEntities
     * const contentEntity = await prisma.contentEntity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentEntityUpdateManyArgs>(args: SelectSubset<T, ContentEntityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentEntities and returns the data updated in the database.
     * @param {ContentEntityUpdateManyAndReturnArgs} args - Arguments to update many ContentEntities.
     * @example
     * // Update many ContentEntities
     * const contentEntity = await prisma.contentEntity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContentEntities and only return the `contentId`
     * const contentEntityWithContentIdOnly = await prisma.contentEntity.updateManyAndReturn({
     *   select: { contentId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContentEntityUpdateManyAndReturnArgs>(args: SelectSubset<T, ContentEntityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentEntityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContentEntity.
     * @param {ContentEntityUpsertArgs} args - Arguments to update or create a ContentEntity.
     * @example
     * // Update or create a ContentEntity
     * const contentEntity = await prisma.contentEntity.upsert({
     *   create: {
     *     // ... data to create a ContentEntity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContentEntity we want to update
     *   }
     * })
     */
    upsert<T extends ContentEntityUpsertArgs>(args: SelectSubset<T, ContentEntityUpsertArgs<ExtArgs>>): Prisma__ContentEntityClient<$Result.GetResult<Prisma.$ContentEntityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContentEntities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentEntityCountArgs} args - Arguments to filter ContentEntities to count.
     * @example
     * // Count the number of ContentEntities
     * const count = await prisma.contentEntity.count({
     *   where: {
     *     // ... the filter for the ContentEntities we want to count
     *   }
     * })
    **/
    count<T extends ContentEntityCountArgs>(
      args?: Subset<T, ContentEntityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentEntityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContentEntity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentEntityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContentEntityAggregateArgs>(args: Subset<T, ContentEntityAggregateArgs>): Prisma.PrismaPromise<GetContentEntityAggregateType<T>>

    /**
     * Group by ContentEntity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentEntityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContentEntityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentEntityGroupByArgs['orderBy'] }
        : { orderBy?: ContentEntityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContentEntityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentEntityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContentEntity model
   */
  readonly fields: ContentEntityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContentEntity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentEntityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    content<T extends ContentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContentDefaultArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    entity<T extends EntityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntityDefaultArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContentEntity model
   */
  interface ContentEntityFieldRefs {
    readonly contentId: FieldRef<"ContentEntity", 'String'>
    readonly entityId: FieldRef<"ContentEntity", 'String'>
    readonly confidence: FieldRef<"ContentEntity", 'Int'>
    readonly role: FieldRef<"ContentEntity", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ContentEntity findUnique
   */
  export type ContentEntityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentEntity
     */
    select?: ContentEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentEntity
     */
    omit?: ContentEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentEntityInclude<ExtArgs> | null
    /**
     * Filter, which ContentEntity to fetch.
     */
    where: ContentEntityWhereUniqueInput
  }

  /**
   * ContentEntity findUniqueOrThrow
   */
  export type ContentEntityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentEntity
     */
    select?: ContentEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentEntity
     */
    omit?: ContentEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentEntityInclude<ExtArgs> | null
    /**
     * Filter, which ContentEntity to fetch.
     */
    where: ContentEntityWhereUniqueInput
  }

  /**
   * ContentEntity findFirst
   */
  export type ContentEntityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentEntity
     */
    select?: ContentEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentEntity
     */
    omit?: ContentEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentEntityInclude<ExtArgs> | null
    /**
     * Filter, which ContentEntity to fetch.
     */
    where?: ContentEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentEntities to fetch.
     */
    orderBy?: ContentEntityOrderByWithRelationInput | ContentEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentEntities.
     */
    cursor?: ContentEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentEntities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentEntities.
     */
    distinct?: ContentEntityScalarFieldEnum | ContentEntityScalarFieldEnum[]
  }

  /**
   * ContentEntity findFirstOrThrow
   */
  export type ContentEntityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentEntity
     */
    select?: ContentEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentEntity
     */
    omit?: ContentEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentEntityInclude<ExtArgs> | null
    /**
     * Filter, which ContentEntity to fetch.
     */
    where?: ContentEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentEntities to fetch.
     */
    orderBy?: ContentEntityOrderByWithRelationInput | ContentEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentEntities.
     */
    cursor?: ContentEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentEntities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentEntities.
     */
    distinct?: ContentEntityScalarFieldEnum | ContentEntityScalarFieldEnum[]
  }

  /**
   * ContentEntity findMany
   */
  export type ContentEntityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentEntity
     */
    select?: ContentEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentEntity
     */
    omit?: ContentEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentEntityInclude<ExtArgs> | null
    /**
     * Filter, which ContentEntities to fetch.
     */
    where?: ContentEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentEntities to fetch.
     */
    orderBy?: ContentEntityOrderByWithRelationInput | ContentEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContentEntities.
     */
    cursor?: ContentEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentEntities.
     */
    skip?: number
    distinct?: ContentEntityScalarFieldEnum | ContentEntityScalarFieldEnum[]
  }

  /**
   * ContentEntity create
   */
  export type ContentEntityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentEntity
     */
    select?: ContentEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentEntity
     */
    omit?: ContentEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentEntityInclude<ExtArgs> | null
    /**
     * The data needed to create a ContentEntity.
     */
    data: XOR<ContentEntityCreateInput, ContentEntityUncheckedCreateInput>
  }

  /**
   * ContentEntity createMany
   */
  export type ContentEntityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContentEntities.
     */
    data: ContentEntityCreateManyInput | ContentEntityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContentEntity createManyAndReturn
   */
  export type ContentEntityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentEntity
     */
    select?: ContentEntitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentEntity
     */
    omit?: ContentEntityOmit<ExtArgs> | null
    /**
     * The data used to create many ContentEntities.
     */
    data: ContentEntityCreateManyInput | ContentEntityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentEntityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContentEntity update
   */
  export type ContentEntityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentEntity
     */
    select?: ContentEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentEntity
     */
    omit?: ContentEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentEntityInclude<ExtArgs> | null
    /**
     * The data needed to update a ContentEntity.
     */
    data: XOR<ContentEntityUpdateInput, ContentEntityUncheckedUpdateInput>
    /**
     * Choose, which ContentEntity to update.
     */
    where: ContentEntityWhereUniqueInput
  }

  /**
   * ContentEntity updateMany
   */
  export type ContentEntityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContentEntities.
     */
    data: XOR<ContentEntityUpdateManyMutationInput, ContentEntityUncheckedUpdateManyInput>
    /**
     * Filter which ContentEntities to update
     */
    where?: ContentEntityWhereInput
    /**
     * Limit how many ContentEntities to update.
     */
    limit?: number
  }

  /**
   * ContentEntity updateManyAndReturn
   */
  export type ContentEntityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentEntity
     */
    select?: ContentEntitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentEntity
     */
    omit?: ContentEntityOmit<ExtArgs> | null
    /**
     * The data used to update ContentEntities.
     */
    data: XOR<ContentEntityUpdateManyMutationInput, ContentEntityUncheckedUpdateManyInput>
    /**
     * Filter which ContentEntities to update
     */
    where?: ContentEntityWhereInput
    /**
     * Limit how many ContentEntities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentEntityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContentEntity upsert
   */
  export type ContentEntityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentEntity
     */
    select?: ContentEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentEntity
     */
    omit?: ContentEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentEntityInclude<ExtArgs> | null
    /**
     * The filter to search for the ContentEntity to update in case it exists.
     */
    where: ContentEntityWhereUniqueInput
    /**
     * In case the ContentEntity found by the `where` argument doesn't exist, create a new ContentEntity with this data.
     */
    create: XOR<ContentEntityCreateInput, ContentEntityUncheckedCreateInput>
    /**
     * In case the ContentEntity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentEntityUpdateInput, ContentEntityUncheckedUpdateInput>
  }

  /**
   * ContentEntity delete
   */
  export type ContentEntityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentEntity
     */
    select?: ContentEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentEntity
     */
    omit?: ContentEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentEntityInclude<ExtArgs> | null
    /**
     * Filter which ContentEntity to delete.
     */
    where: ContentEntityWhereUniqueInput
  }

  /**
   * ContentEntity deleteMany
   */
  export type ContentEntityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentEntities to delete
     */
    where?: ContentEntityWhereInput
    /**
     * Limit how many ContentEntities to delete.
     */
    limit?: number
  }

  /**
   * ContentEntity without action
   */
  export type ContentEntityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentEntity
     */
    select?: ContentEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentEntity
     */
    omit?: ContentEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentEntityInclude<ExtArgs> | null
  }


  /**
   * Model EventCandidate
   */

  export type AggregateEventCandidate = {
    _count: EventCandidateCountAggregateOutputType | null
    _avg: EventCandidateAvgAggregateOutputType | null
    _sum: EventCandidateSumAggregateOutputType | null
    _min: EventCandidateMinAggregateOutputType | null
    _max: EventCandidateMaxAggregateOutputType | null
  }

  export type EventCandidateAvgAggregateOutputType = {
    confidence: number | null
  }

  export type EventCandidateSumAggregateOutputType = {
    confidence: number | null
  }

  export type EventCandidateMinAggregateOutputType = {
    id: string | null
    contentId: string | null
    sourceId: string | null
    name: string | null
    category: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    startTime: string | null
    location: string | null
    venue: string | null
    city: string | null
    province: string | null
    country: string | null
    organizer: string | null
    origin: $Enums.EventOrigin | null
    price: string | null
    currency: string | null
    registrationUrl: string | null
    contact: string | null
    sourceUrl: string | null
    imageUrl: string | null
    confidence: number | null
    verificationStatus: $Enums.VerificationStatus | null
    duplicateStatus: $Enums.DuplicateStatus | null
    duplicateOfId: string | null
    duplicateReason: string | null
    editorialStatus: $Enums.EditorialStatus | null
    scheduledFor: Date | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCandidateMaxAggregateOutputType = {
    id: string | null
    contentId: string | null
    sourceId: string | null
    name: string | null
    category: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    startTime: string | null
    location: string | null
    venue: string | null
    city: string | null
    province: string | null
    country: string | null
    organizer: string | null
    origin: $Enums.EventOrigin | null
    price: string | null
    currency: string | null
    registrationUrl: string | null
    contact: string | null
    sourceUrl: string | null
    imageUrl: string | null
    confidence: number | null
    verificationStatus: $Enums.VerificationStatus | null
    duplicateStatus: $Enums.DuplicateStatus | null
    duplicateOfId: string | null
    duplicateReason: string | null
    editorialStatus: $Enums.EditorialStatus | null
    scheduledFor: Date | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCandidateCountAggregateOutputType = {
    id: number
    contentId: number
    sourceId: number
    name: number
    category: number
    description: number
    startDate: number
    endDate: number
    startTime: number
    location: number
    venue: number
    city: number
    province: number
    country: number
    organizer: number
    origin: number
    price: number
    currency: number
    registrationUrl: number
    contact: number
    sourceUrl: number
    imageUrl: number
    confidence: number
    verificationStatus: number
    duplicateStatus: number
    duplicateOfId: number
    duplicateReason: number
    editorialStatus: number
    scheduledFor: number
    publishedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventCandidateAvgAggregateInputType = {
    confidence?: true
  }

  export type EventCandidateSumAggregateInputType = {
    confidence?: true
  }

  export type EventCandidateMinAggregateInputType = {
    id?: true
    contentId?: true
    sourceId?: true
    name?: true
    category?: true
    description?: true
    startDate?: true
    endDate?: true
    startTime?: true
    location?: true
    venue?: true
    city?: true
    province?: true
    country?: true
    organizer?: true
    origin?: true
    price?: true
    currency?: true
    registrationUrl?: true
    contact?: true
    sourceUrl?: true
    imageUrl?: true
    confidence?: true
    verificationStatus?: true
    duplicateStatus?: true
    duplicateOfId?: true
    duplicateReason?: true
    editorialStatus?: true
    scheduledFor?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCandidateMaxAggregateInputType = {
    id?: true
    contentId?: true
    sourceId?: true
    name?: true
    category?: true
    description?: true
    startDate?: true
    endDate?: true
    startTime?: true
    location?: true
    venue?: true
    city?: true
    province?: true
    country?: true
    organizer?: true
    origin?: true
    price?: true
    currency?: true
    registrationUrl?: true
    contact?: true
    sourceUrl?: true
    imageUrl?: true
    confidence?: true
    verificationStatus?: true
    duplicateStatus?: true
    duplicateOfId?: true
    duplicateReason?: true
    editorialStatus?: true
    scheduledFor?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCandidateCountAggregateInputType = {
    id?: true
    contentId?: true
    sourceId?: true
    name?: true
    category?: true
    description?: true
    startDate?: true
    endDate?: true
    startTime?: true
    location?: true
    venue?: true
    city?: true
    province?: true
    country?: true
    organizer?: true
    origin?: true
    price?: true
    currency?: true
    registrationUrl?: true
    contact?: true
    sourceUrl?: true
    imageUrl?: true
    confidence?: true
    verificationStatus?: true
    duplicateStatus?: true
    duplicateOfId?: true
    duplicateReason?: true
    editorialStatus?: true
    scheduledFor?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventCandidateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventCandidate to aggregate.
     */
    where?: EventCandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventCandidates to fetch.
     */
    orderBy?: EventCandidateOrderByWithRelationInput | EventCandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventCandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventCandidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventCandidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventCandidates
    **/
    _count?: true | EventCandidateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventCandidateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventCandidateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventCandidateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventCandidateMaxAggregateInputType
  }

  export type GetEventCandidateAggregateType<T extends EventCandidateAggregateArgs> = {
        [P in keyof T & keyof AggregateEventCandidate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventCandidate[P]>
      : GetScalarType<T[P], AggregateEventCandidate[P]>
  }




  export type EventCandidateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventCandidateWhereInput
    orderBy?: EventCandidateOrderByWithAggregationInput | EventCandidateOrderByWithAggregationInput[]
    by: EventCandidateScalarFieldEnum[] | EventCandidateScalarFieldEnum
    having?: EventCandidateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCandidateCountAggregateInputType | true
    _avg?: EventCandidateAvgAggregateInputType
    _sum?: EventCandidateSumAggregateInputType
    _min?: EventCandidateMinAggregateInputType
    _max?: EventCandidateMaxAggregateInputType
  }

  export type EventCandidateGroupByOutputType = {
    id: string
    contentId: string | null
    sourceId: string | null
    name: string
    category: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    startTime: string | null
    location: string | null
    venue: string | null
    city: string | null
    province: string | null
    country: string
    organizer: string | null
    origin: $Enums.EventOrigin
    price: string | null
    currency: string
    registrationUrl: string | null
    contact: string | null
    sourceUrl: string | null
    imageUrl: string | null
    confidence: number
    verificationStatus: $Enums.VerificationStatus
    duplicateStatus: $Enums.DuplicateStatus
    duplicateOfId: string | null
    duplicateReason: string | null
    editorialStatus: $Enums.EditorialStatus
    scheduledFor: Date | null
    publishedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: EventCandidateCountAggregateOutputType | null
    _avg: EventCandidateAvgAggregateOutputType | null
    _sum: EventCandidateSumAggregateOutputType | null
    _min: EventCandidateMinAggregateOutputType | null
    _max: EventCandidateMaxAggregateOutputType | null
  }

  type GetEventCandidateGroupByPayload<T extends EventCandidateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventCandidateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventCandidateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventCandidateGroupByOutputType[P]>
            : GetScalarType<T[P], EventCandidateGroupByOutputType[P]>
        }
      >
    >


  export type EventCandidateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contentId?: boolean
    sourceId?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    startTime?: boolean
    location?: boolean
    venue?: boolean
    city?: boolean
    province?: boolean
    country?: boolean
    organizer?: boolean
    origin?: boolean
    price?: boolean
    currency?: boolean
    registrationUrl?: boolean
    contact?: boolean
    sourceUrl?: boolean
    imageUrl?: boolean
    confidence?: boolean
    verificationStatus?: boolean
    duplicateStatus?: boolean
    duplicateOfId?: boolean
    duplicateReason?: boolean
    editorialStatus?: boolean
    scheduledFor?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean | EventCandidate$contentArgs<ExtArgs>
    source?: boolean | EventCandidate$sourceArgs<ExtArgs>
    reviews?: boolean | EventCandidate$reviewsArgs<ExtArgs>
    publications?: boolean | EventCandidate$publicationsArgs<ExtArgs>
    _count?: boolean | EventCandidateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventCandidate"]>

  export type EventCandidateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contentId?: boolean
    sourceId?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    startTime?: boolean
    location?: boolean
    venue?: boolean
    city?: boolean
    province?: boolean
    country?: boolean
    organizer?: boolean
    origin?: boolean
    price?: boolean
    currency?: boolean
    registrationUrl?: boolean
    contact?: boolean
    sourceUrl?: boolean
    imageUrl?: boolean
    confidence?: boolean
    verificationStatus?: boolean
    duplicateStatus?: boolean
    duplicateOfId?: boolean
    duplicateReason?: boolean
    editorialStatus?: boolean
    scheduledFor?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean | EventCandidate$contentArgs<ExtArgs>
    source?: boolean | EventCandidate$sourceArgs<ExtArgs>
  }, ExtArgs["result"]["eventCandidate"]>

  export type EventCandidateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contentId?: boolean
    sourceId?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    startTime?: boolean
    location?: boolean
    venue?: boolean
    city?: boolean
    province?: boolean
    country?: boolean
    organizer?: boolean
    origin?: boolean
    price?: boolean
    currency?: boolean
    registrationUrl?: boolean
    contact?: boolean
    sourceUrl?: boolean
    imageUrl?: boolean
    confidence?: boolean
    verificationStatus?: boolean
    duplicateStatus?: boolean
    duplicateOfId?: boolean
    duplicateReason?: boolean
    editorialStatus?: boolean
    scheduledFor?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean | EventCandidate$contentArgs<ExtArgs>
    source?: boolean | EventCandidate$sourceArgs<ExtArgs>
  }, ExtArgs["result"]["eventCandidate"]>

  export type EventCandidateSelectScalar = {
    id?: boolean
    contentId?: boolean
    sourceId?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    startTime?: boolean
    location?: boolean
    venue?: boolean
    city?: boolean
    province?: boolean
    country?: boolean
    organizer?: boolean
    origin?: boolean
    price?: boolean
    currency?: boolean
    registrationUrl?: boolean
    contact?: boolean
    sourceUrl?: boolean
    imageUrl?: boolean
    confidence?: boolean
    verificationStatus?: boolean
    duplicateStatus?: boolean
    duplicateOfId?: boolean
    duplicateReason?: boolean
    editorialStatus?: boolean
    scheduledFor?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventCandidateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contentId" | "sourceId" | "name" | "category" | "description" | "startDate" | "endDate" | "startTime" | "location" | "venue" | "city" | "province" | "country" | "organizer" | "origin" | "price" | "currency" | "registrationUrl" | "contact" | "sourceUrl" | "imageUrl" | "confidence" | "verificationStatus" | "duplicateStatus" | "duplicateOfId" | "duplicateReason" | "editorialStatus" | "scheduledFor" | "publishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["eventCandidate"]>
  export type EventCandidateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | EventCandidate$contentArgs<ExtArgs>
    source?: boolean | EventCandidate$sourceArgs<ExtArgs>
    reviews?: boolean | EventCandidate$reviewsArgs<ExtArgs>
    publications?: boolean | EventCandidate$publicationsArgs<ExtArgs>
    _count?: boolean | EventCandidateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventCandidateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | EventCandidate$contentArgs<ExtArgs>
    source?: boolean | EventCandidate$sourceArgs<ExtArgs>
  }
  export type EventCandidateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | EventCandidate$contentArgs<ExtArgs>
    source?: boolean | EventCandidate$sourceArgs<ExtArgs>
  }

  export type $EventCandidatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventCandidate"
    objects: {
      content: Prisma.$ContentPayload<ExtArgs> | null
      source: Prisma.$SourcePayload<ExtArgs> | null
      reviews: Prisma.$EditorialReviewPayload<ExtArgs>[]
      publications: Prisma.$PublicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contentId: string | null
      sourceId: string | null
      name: string
      category: string | null
      description: string | null
      startDate: Date | null
      endDate: Date | null
      startTime: string | null
      location: string | null
      venue: string | null
      city: string | null
      province: string | null
      country: string
      organizer: string | null
      origin: $Enums.EventOrigin
      price: string | null
      currency: string
      registrationUrl: string | null
      contact: string | null
      sourceUrl: string | null
      imageUrl: string | null
      confidence: number
      verificationStatus: $Enums.VerificationStatus
      duplicateStatus: $Enums.DuplicateStatus
      duplicateOfId: string | null
      duplicateReason: string | null
      editorialStatus: $Enums.EditorialStatus
      scheduledFor: Date | null
      publishedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["eventCandidate"]>
    composites: {}
  }

  type EventCandidateGetPayload<S extends boolean | null | undefined | EventCandidateDefaultArgs> = $Result.GetResult<Prisma.$EventCandidatePayload, S>

  type EventCandidateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventCandidateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCandidateCountAggregateInputType | true
    }

  export interface EventCandidateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventCandidate'], meta: { name: 'EventCandidate' } }
    /**
     * Find zero or one EventCandidate that matches the filter.
     * @param {EventCandidateFindUniqueArgs} args - Arguments to find a EventCandidate
     * @example
     * // Get one EventCandidate
     * const eventCandidate = await prisma.eventCandidate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventCandidateFindUniqueArgs>(args: SelectSubset<T, EventCandidateFindUniqueArgs<ExtArgs>>): Prisma__EventCandidateClient<$Result.GetResult<Prisma.$EventCandidatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventCandidate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventCandidateFindUniqueOrThrowArgs} args - Arguments to find a EventCandidate
     * @example
     * // Get one EventCandidate
     * const eventCandidate = await prisma.eventCandidate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventCandidateFindUniqueOrThrowArgs>(args: SelectSubset<T, EventCandidateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventCandidateClient<$Result.GetResult<Prisma.$EventCandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventCandidate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCandidateFindFirstArgs} args - Arguments to find a EventCandidate
     * @example
     * // Get one EventCandidate
     * const eventCandidate = await prisma.eventCandidate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventCandidateFindFirstArgs>(args?: SelectSubset<T, EventCandidateFindFirstArgs<ExtArgs>>): Prisma__EventCandidateClient<$Result.GetResult<Prisma.$EventCandidatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventCandidate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCandidateFindFirstOrThrowArgs} args - Arguments to find a EventCandidate
     * @example
     * // Get one EventCandidate
     * const eventCandidate = await prisma.eventCandidate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventCandidateFindFirstOrThrowArgs>(args?: SelectSubset<T, EventCandidateFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventCandidateClient<$Result.GetResult<Prisma.$EventCandidatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventCandidates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCandidateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventCandidates
     * const eventCandidates = await prisma.eventCandidate.findMany()
     * 
     * // Get first 10 EventCandidates
     * const eventCandidates = await prisma.eventCandidate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventCandidateWithIdOnly = await prisma.eventCandidate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventCandidateFindManyArgs>(args?: SelectSubset<T, EventCandidateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventCandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventCandidate.
     * @param {EventCandidateCreateArgs} args - Arguments to create a EventCandidate.
     * @example
     * // Create one EventCandidate
     * const EventCandidate = await prisma.eventCandidate.create({
     *   data: {
     *     // ... data to create a EventCandidate
     *   }
     * })
     * 
     */
    create<T extends EventCandidateCreateArgs>(args: SelectSubset<T, EventCandidateCreateArgs<ExtArgs>>): Prisma__EventCandidateClient<$Result.GetResult<Prisma.$EventCandidatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventCandidates.
     * @param {EventCandidateCreateManyArgs} args - Arguments to create many EventCandidates.
     * @example
     * // Create many EventCandidates
     * const eventCandidate = await prisma.eventCandidate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCandidateCreateManyArgs>(args?: SelectSubset<T, EventCandidateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventCandidates and returns the data saved in the database.
     * @param {EventCandidateCreateManyAndReturnArgs} args - Arguments to create many EventCandidates.
     * @example
     * // Create many EventCandidates
     * const eventCandidate = await prisma.eventCandidate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventCandidates and only return the `id`
     * const eventCandidateWithIdOnly = await prisma.eventCandidate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCandidateCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCandidateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventCandidatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventCandidate.
     * @param {EventCandidateDeleteArgs} args - Arguments to delete one EventCandidate.
     * @example
     * // Delete one EventCandidate
     * const EventCandidate = await prisma.eventCandidate.delete({
     *   where: {
     *     // ... filter to delete one EventCandidate
     *   }
     * })
     * 
     */
    delete<T extends EventCandidateDeleteArgs>(args: SelectSubset<T, EventCandidateDeleteArgs<ExtArgs>>): Prisma__EventCandidateClient<$Result.GetResult<Prisma.$EventCandidatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventCandidate.
     * @param {EventCandidateUpdateArgs} args - Arguments to update one EventCandidate.
     * @example
     * // Update one EventCandidate
     * const eventCandidate = await prisma.eventCandidate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventCandidateUpdateArgs>(args: SelectSubset<T, EventCandidateUpdateArgs<ExtArgs>>): Prisma__EventCandidateClient<$Result.GetResult<Prisma.$EventCandidatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventCandidates.
     * @param {EventCandidateDeleteManyArgs} args - Arguments to filter EventCandidates to delete.
     * @example
     * // Delete a few EventCandidates
     * const { count } = await prisma.eventCandidate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventCandidateDeleteManyArgs>(args?: SelectSubset<T, EventCandidateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventCandidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCandidateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventCandidates
     * const eventCandidate = await prisma.eventCandidate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventCandidateUpdateManyArgs>(args: SelectSubset<T, EventCandidateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventCandidates and returns the data updated in the database.
     * @param {EventCandidateUpdateManyAndReturnArgs} args - Arguments to update many EventCandidates.
     * @example
     * // Update many EventCandidates
     * const eventCandidate = await prisma.eventCandidate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventCandidates and only return the `id`
     * const eventCandidateWithIdOnly = await prisma.eventCandidate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventCandidateUpdateManyAndReturnArgs>(args: SelectSubset<T, EventCandidateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventCandidatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventCandidate.
     * @param {EventCandidateUpsertArgs} args - Arguments to update or create a EventCandidate.
     * @example
     * // Update or create a EventCandidate
     * const eventCandidate = await prisma.eventCandidate.upsert({
     *   create: {
     *     // ... data to create a EventCandidate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventCandidate we want to update
     *   }
     * })
     */
    upsert<T extends EventCandidateUpsertArgs>(args: SelectSubset<T, EventCandidateUpsertArgs<ExtArgs>>): Prisma__EventCandidateClient<$Result.GetResult<Prisma.$EventCandidatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventCandidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCandidateCountArgs} args - Arguments to filter EventCandidates to count.
     * @example
     * // Count the number of EventCandidates
     * const count = await prisma.eventCandidate.count({
     *   where: {
     *     // ... the filter for the EventCandidates we want to count
     *   }
     * })
    **/
    count<T extends EventCandidateCountArgs>(
      args?: Subset<T, EventCandidateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCandidateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventCandidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCandidateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventCandidateAggregateArgs>(args: Subset<T, EventCandidateAggregateArgs>): Prisma.PrismaPromise<GetEventCandidateAggregateType<T>>

    /**
     * Group by EventCandidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCandidateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventCandidateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventCandidateGroupByArgs['orderBy'] }
        : { orderBy?: EventCandidateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventCandidateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventCandidateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventCandidate model
   */
  readonly fields: EventCandidateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventCandidate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventCandidateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    content<T extends EventCandidate$contentArgs<ExtArgs> = {}>(args?: Subset<T, EventCandidate$contentArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    source<T extends EventCandidate$sourceArgs<ExtArgs> = {}>(args?: Subset<T, EventCandidate$sourceArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reviews<T extends EventCandidate$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, EventCandidate$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EditorialReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    publications<T extends EventCandidate$publicationsArgs<ExtArgs> = {}>(args?: Subset<T, EventCandidate$publicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventCandidate model
   */
  interface EventCandidateFieldRefs {
    readonly id: FieldRef<"EventCandidate", 'String'>
    readonly contentId: FieldRef<"EventCandidate", 'String'>
    readonly sourceId: FieldRef<"EventCandidate", 'String'>
    readonly name: FieldRef<"EventCandidate", 'String'>
    readonly category: FieldRef<"EventCandidate", 'String'>
    readonly description: FieldRef<"EventCandidate", 'String'>
    readonly startDate: FieldRef<"EventCandidate", 'DateTime'>
    readonly endDate: FieldRef<"EventCandidate", 'DateTime'>
    readonly startTime: FieldRef<"EventCandidate", 'String'>
    readonly location: FieldRef<"EventCandidate", 'String'>
    readonly venue: FieldRef<"EventCandidate", 'String'>
    readonly city: FieldRef<"EventCandidate", 'String'>
    readonly province: FieldRef<"EventCandidate", 'String'>
    readonly country: FieldRef<"EventCandidate", 'String'>
    readonly organizer: FieldRef<"EventCandidate", 'String'>
    readonly origin: FieldRef<"EventCandidate", 'EventOrigin'>
    readonly price: FieldRef<"EventCandidate", 'String'>
    readonly currency: FieldRef<"EventCandidate", 'String'>
    readonly registrationUrl: FieldRef<"EventCandidate", 'String'>
    readonly contact: FieldRef<"EventCandidate", 'String'>
    readonly sourceUrl: FieldRef<"EventCandidate", 'String'>
    readonly imageUrl: FieldRef<"EventCandidate", 'String'>
    readonly confidence: FieldRef<"EventCandidate", 'Int'>
    readonly verificationStatus: FieldRef<"EventCandidate", 'VerificationStatus'>
    readonly duplicateStatus: FieldRef<"EventCandidate", 'DuplicateStatus'>
    readonly duplicateOfId: FieldRef<"EventCandidate", 'String'>
    readonly duplicateReason: FieldRef<"EventCandidate", 'String'>
    readonly editorialStatus: FieldRef<"EventCandidate", 'EditorialStatus'>
    readonly scheduledFor: FieldRef<"EventCandidate", 'DateTime'>
    readonly publishedAt: FieldRef<"EventCandidate", 'DateTime'>
    readonly createdAt: FieldRef<"EventCandidate", 'DateTime'>
    readonly updatedAt: FieldRef<"EventCandidate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventCandidate findUnique
   */
  export type EventCandidateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCandidate
     */
    select?: EventCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCandidate
     */
    omit?: EventCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCandidateInclude<ExtArgs> | null
    /**
     * Filter, which EventCandidate to fetch.
     */
    where: EventCandidateWhereUniqueInput
  }

  /**
   * EventCandidate findUniqueOrThrow
   */
  export type EventCandidateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCandidate
     */
    select?: EventCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCandidate
     */
    omit?: EventCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCandidateInclude<ExtArgs> | null
    /**
     * Filter, which EventCandidate to fetch.
     */
    where: EventCandidateWhereUniqueInput
  }

  /**
   * EventCandidate findFirst
   */
  export type EventCandidateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCandidate
     */
    select?: EventCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCandidate
     */
    omit?: EventCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCandidateInclude<ExtArgs> | null
    /**
     * Filter, which EventCandidate to fetch.
     */
    where?: EventCandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventCandidates to fetch.
     */
    orderBy?: EventCandidateOrderByWithRelationInput | EventCandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventCandidates.
     */
    cursor?: EventCandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventCandidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventCandidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventCandidates.
     */
    distinct?: EventCandidateScalarFieldEnum | EventCandidateScalarFieldEnum[]
  }

  /**
   * EventCandidate findFirstOrThrow
   */
  export type EventCandidateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCandidate
     */
    select?: EventCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCandidate
     */
    omit?: EventCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCandidateInclude<ExtArgs> | null
    /**
     * Filter, which EventCandidate to fetch.
     */
    where?: EventCandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventCandidates to fetch.
     */
    orderBy?: EventCandidateOrderByWithRelationInput | EventCandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventCandidates.
     */
    cursor?: EventCandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventCandidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventCandidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventCandidates.
     */
    distinct?: EventCandidateScalarFieldEnum | EventCandidateScalarFieldEnum[]
  }

  /**
   * EventCandidate findMany
   */
  export type EventCandidateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCandidate
     */
    select?: EventCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCandidate
     */
    omit?: EventCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCandidateInclude<ExtArgs> | null
    /**
     * Filter, which EventCandidates to fetch.
     */
    where?: EventCandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventCandidates to fetch.
     */
    orderBy?: EventCandidateOrderByWithRelationInput | EventCandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventCandidates.
     */
    cursor?: EventCandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventCandidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventCandidates.
     */
    skip?: number
    distinct?: EventCandidateScalarFieldEnum | EventCandidateScalarFieldEnum[]
  }

  /**
   * EventCandidate create
   */
  export type EventCandidateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCandidate
     */
    select?: EventCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCandidate
     */
    omit?: EventCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCandidateInclude<ExtArgs> | null
    /**
     * The data needed to create a EventCandidate.
     */
    data: XOR<EventCandidateCreateInput, EventCandidateUncheckedCreateInput>
  }

  /**
   * EventCandidate createMany
   */
  export type EventCandidateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventCandidates.
     */
    data: EventCandidateCreateManyInput | EventCandidateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventCandidate createManyAndReturn
   */
  export type EventCandidateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCandidate
     */
    select?: EventCandidateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventCandidate
     */
    omit?: EventCandidateOmit<ExtArgs> | null
    /**
     * The data used to create many EventCandidates.
     */
    data: EventCandidateCreateManyInput | EventCandidateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCandidateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventCandidate update
   */
  export type EventCandidateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCandidate
     */
    select?: EventCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCandidate
     */
    omit?: EventCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCandidateInclude<ExtArgs> | null
    /**
     * The data needed to update a EventCandidate.
     */
    data: XOR<EventCandidateUpdateInput, EventCandidateUncheckedUpdateInput>
    /**
     * Choose, which EventCandidate to update.
     */
    where: EventCandidateWhereUniqueInput
  }

  /**
   * EventCandidate updateMany
   */
  export type EventCandidateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventCandidates.
     */
    data: XOR<EventCandidateUpdateManyMutationInput, EventCandidateUncheckedUpdateManyInput>
    /**
     * Filter which EventCandidates to update
     */
    where?: EventCandidateWhereInput
    /**
     * Limit how many EventCandidates to update.
     */
    limit?: number
  }

  /**
   * EventCandidate updateManyAndReturn
   */
  export type EventCandidateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCandidate
     */
    select?: EventCandidateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventCandidate
     */
    omit?: EventCandidateOmit<ExtArgs> | null
    /**
     * The data used to update EventCandidates.
     */
    data: XOR<EventCandidateUpdateManyMutationInput, EventCandidateUncheckedUpdateManyInput>
    /**
     * Filter which EventCandidates to update
     */
    where?: EventCandidateWhereInput
    /**
     * Limit how many EventCandidates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCandidateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventCandidate upsert
   */
  export type EventCandidateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCandidate
     */
    select?: EventCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCandidate
     */
    omit?: EventCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCandidateInclude<ExtArgs> | null
    /**
     * The filter to search for the EventCandidate to update in case it exists.
     */
    where: EventCandidateWhereUniqueInput
    /**
     * In case the EventCandidate found by the `where` argument doesn't exist, create a new EventCandidate with this data.
     */
    create: XOR<EventCandidateCreateInput, EventCandidateUncheckedCreateInput>
    /**
     * In case the EventCandidate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventCandidateUpdateInput, EventCandidateUncheckedUpdateInput>
  }

  /**
   * EventCandidate delete
   */
  export type EventCandidateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCandidate
     */
    select?: EventCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCandidate
     */
    omit?: EventCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCandidateInclude<ExtArgs> | null
    /**
     * Filter which EventCandidate to delete.
     */
    where: EventCandidateWhereUniqueInput
  }

  /**
   * EventCandidate deleteMany
   */
  export type EventCandidateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventCandidates to delete
     */
    where?: EventCandidateWhereInput
    /**
     * Limit how many EventCandidates to delete.
     */
    limit?: number
  }

  /**
   * EventCandidate.content
   */
  export type EventCandidate$contentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    where?: ContentWhereInput
  }

  /**
   * EventCandidate.source
   */
  export type EventCandidate$sourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    where?: SourceWhereInput
  }

  /**
   * EventCandidate.reviews
   */
  export type EventCandidate$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorialReview
     */
    select?: EditorialReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorialReview
     */
    omit?: EditorialReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorialReviewInclude<ExtArgs> | null
    where?: EditorialReviewWhereInput
    orderBy?: EditorialReviewOrderByWithRelationInput | EditorialReviewOrderByWithRelationInput[]
    cursor?: EditorialReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EditorialReviewScalarFieldEnum | EditorialReviewScalarFieldEnum[]
  }

  /**
   * EventCandidate.publications
   */
  export type EventCandidate$publicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    where?: PublicationWhereInput
    orderBy?: PublicationOrderByWithRelationInput | PublicationOrderByWithRelationInput[]
    cursor?: PublicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[]
  }

  /**
   * EventCandidate without action
   */
  export type EventCandidateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCandidate
     */
    select?: EventCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCandidate
     */
    omit?: EventCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCandidateInclude<ExtArgs> | null
  }


  /**
   * Model EditorialReview
   */

  export type AggregateEditorialReview = {
    _count: EditorialReviewCountAggregateOutputType | null
    _min: EditorialReviewMinAggregateOutputType | null
    _max: EditorialReviewMaxAggregateOutputType | null
  }

  export type EditorialReviewMinAggregateOutputType = {
    id: string | null
    contentId: string | null
    eventCandidateId: string | null
    reviewerId: string | null
    reviewerName: string | null
    status: $Enums.EditorialStatus | null
    notes: string | null
    createdAt: Date | null
  }

  export type EditorialReviewMaxAggregateOutputType = {
    id: string | null
    contentId: string | null
    eventCandidateId: string | null
    reviewerId: string | null
    reviewerName: string | null
    status: $Enums.EditorialStatus | null
    notes: string | null
    createdAt: Date | null
  }

  export type EditorialReviewCountAggregateOutputType = {
    id: number
    contentId: number
    eventCandidateId: number
    reviewerId: number
    reviewerName: number
    status: number
    notes: number
    createdAt: number
    _all: number
  }


  export type EditorialReviewMinAggregateInputType = {
    id?: true
    contentId?: true
    eventCandidateId?: true
    reviewerId?: true
    reviewerName?: true
    status?: true
    notes?: true
    createdAt?: true
  }

  export type EditorialReviewMaxAggregateInputType = {
    id?: true
    contentId?: true
    eventCandidateId?: true
    reviewerId?: true
    reviewerName?: true
    status?: true
    notes?: true
    createdAt?: true
  }

  export type EditorialReviewCountAggregateInputType = {
    id?: true
    contentId?: true
    eventCandidateId?: true
    reviewerId?: true
    reviewerName?: true
    status?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type EditorialReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EditorialReview to aggregate.
     */
    where?: EditorialReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EditorialReviews to fetch.
     */
    orderBy?: EditorialReviewOrderByWithRelationInput | EditorialReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EditorialReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EditorialReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EditorialReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EditorialReviews
    **/
    _count?: true | EditorialReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EditorialReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EditorialReviewMaxAggregateInputType
  }

  export type GetEditorialReviewAggregateType<T extends EditorialReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateEditorialReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEditorialReview[P]>
      : GetScalarType<T[P], AggregateEditorialReview[P]>
  }




  export type EditorialReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EditorialReviewWhereInput
    orderBy?: EditorialReviewOrderByWithAggregationInput | EditorialReviewOrderByWithAggregationInput[]
    by: EditorialReviewScalarFieldEnum[] | EditorialReviewScalarFieldEnum
    having?: EditorialReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EditorialReviewCountAggregateInputType | true
    _min?: EditorialReviewMinAggregateInputType
    _max?: EditorialReviewMaxAggregateInputType
  }

  export type EditorialReviewGroupByOutputType = {
    id: string
    contentId: string | null
    eventCandidateId: string | null
    reviewerId: string | null
    reviewerName: string | null
    status: $Enums.EditorialStatus
    notes: string | null
    createdAt: Date
    _count: EditorialReviewCountAggregateOutputType | null
    _min: EditorialReviewMinAggregateOutputType | null
    _max: EditorialReviewMaxAggregateOutputType | null
  }

  type GetEditorialReviewGroupByPayload<T extends EditorialReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EditorialReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EditorialReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EditorialReviewGroupByOutputType[P]>
            : GetScalarType<T[P], EditorialReviewGroupByOutputType[P]>
        }
      >
    >


  export type EditorialReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contentId?: boolean
    eventCandidateId?: boolean
    reviewerId?: boolean
    reviewerName?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    content?: boolean | EditorialReview$contentArgs<ExtArgs>
    eventCandidate?: boolean | EditorialReview$eventCandidateArgs<ExtArgs>
  }, ExtArgs["result"]["editorialReview"]>

  export type EditorialReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contentId?: boolean
    eventCandidateId?: boolean
    reviewerId?: boolean
    reviewerName?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    content?: boolean | EditorialReview$contentArgs<ExtArgs>
    eventCandidate?: boolean | EditorialReview$eventCandidateArgs<ExtArgs>
  }, ExtArgs["result"]["editorialReview"]>

  export type EditorialReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contentId?: boolean
    eventCandidateId?: boolean
    reviewerId?: boolean
    reviewerName?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    content?: boolean | EditorialReview$contentArgs<ExtArgs>
    eventCandidate?: boolean | EditorialReview$eventCandidateArgs<ExtArgs>
  }, ExtArgs["result"]["editorialReview"]>

  export type EditorialReviewSelectScalar = {
    id?: boolean
    contentId?: boolean
    eventCandidateId?: boolean
    reviewerId?: boolean
    reviewerName?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type EditorialReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contentId" | "eventCandidateId" | "reviewerId" | "reviewerName" | "status" | "notes" | "createdAt", ExtArgs["result"]["editorialReview"]>
  export type EditorialReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | EditorialReview$contentArgs<ExtArgs>
    eventCandidate?: boolean | EditorialReview$eventCandidateArgs<ExtArgs>
  }
  export type EditorialReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | EditorialReview$contentArgs<ExtArgs>
    eventCandidate?: boolean | EditorialReview$eventCandidateArgs<ExtArgs>
  }
  export type EditorialReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | EditorialReview$contentArgs<ExtArgs>
    eventCandidate?: boolean | EditorialReview$eventCandidateArgs<ExtArgs>
  }

  export type $EditorialReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EditorialReview"
    objects: {
      content: Prisma.$ContentPayload<ExtArgs> | null
      eventCandidate: Prisma.$EventCandidatePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contentId: string | null
      eventCandidateId: string | null
      reviewerId: string | null
      reviewerName: string | null
      status: $Enums.EditorialStatus
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["editorialReview"]>
    composites: {}
  }

  type EditorialReviewGetPayload<S extends boolean | null | undefined | EditorialReviewDefaultArgs> = $Result.GetResult<Prisma.$EditorialReviewPayload, S>

  type EditorialReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EditorialReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EditorialReviewCountAggregateInputType | true
    }

  export interface EditorialReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EditorialReview'], meta: { name: 'EditorialReview' } }
    /**
     * Find zero or one EditorialReview that matches the filter.
     * @param {EditorialReviewFindUniqueArgs} args - Arguments to find a EditorialReview
     * @example
     * // Get one EditorialReview
     * const editorialReview = await prisma.editorialReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EditorialReviewFindUniqueArgs>(args: SelectSubset<T, EditorialReviewFindUniqueArgs<ExtArgs>>): Prisma__EditorialReviewClient<$Result.GetResult<Prisma.$EditorialReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EditorialReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EditorialReviewFindUniqueOrThrowArgs} args - Arguments to find a EditorialReview
     * @example
     * // Get one EditorialReview
     * const editorialReview = await prisma.editorialReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EditorialReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, EditorialReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EditorialReviewClient<$Result.GetResult<Prisma.$EditorialReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EditorialReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditorialReviewFindFirstArgs} args - Arguments to find a EditorialReview
     * @example
     * // Get one EditorialReview
     * const editorialReview = await prisma.editorialReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EditorialReviewFindFirstArgs>(args?: SelectSubset<T, EditorialReviewFindFirstArgs<ExtArgs>>): Prisma__EditorialReviewClient<$Result.GetResult<Prisma.$EditorialReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EditorialReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditorialReviewFindFirstOrThrowArgs} args - Arguments to find a EditorialReview
     * @example
     * // Get one EditorialReview
     * const editorialReview = await prisma.editorialReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EditorialReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, EditorialReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__EditorialReviewClient<$Result.GetResult<Prisma.$EditorialReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EditorialReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditorialReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EditorialReviews
     * const editorialReviews = await prisma.editorialReview.findMany()
     * 
     * // Get first 10 EditorialReviews
     * const editorialReviews = await prisma.editorialReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const editorialReviewWithIdOnly = await prisma.editorialReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EditorialReviewFindManyArgs>(args?: SelectSubset<T, EditorialReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EditorialReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EditorialReview.
     * @param {EditorialReviewCreateArgs} args - Arguments to create a EditorialReview.
     * @example
     * // Create one EditorialReview
     * const EditorialReview = await prisma.editorialReview.create({
     *   data: {
     *     // ... data to create a EditorialReview
     *   }
     * })
     * 
     */
    create<T extends EditorialReviewCreateArgs>(args: SelectSubset<T, EditorialReviewCreateArgs<ExtArgs>>): Prisma__EditorialReviewClient<$Result.GetResult<Prisma.$EditorialReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EditorialReviews.
     * @param {EditorialReviewCreateManyArgs} args - Arguments to create many EditorialReviews.
     * @example
     * // Create many EditorialReviews
     * const editorialReview = await prisma.editorialReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EditorialReviewCreateManyArgs>(args?: SelectSubset<T, EditorialReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EditorialReviews and returns the data saved in the database.
     * @param {EditorialReviewCreateManyAndReturnArgs} args - Arguments to create many EditorialReviews.
     * @example
     * // Create many EditorialReviews
     * const editorialReview = await prisma.editorialReview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EditorialReviews and only return the `id`
     * const editorialReviewWithIdOnly = await prisma.editorialReview.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EditorialReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, EditorialReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EditorialReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EditorialReview.
     * @param {EditorialReviewDeleteArgs} args - Arguments to delete one EditorialReview.
     * @example
     * // Delete one EditorialReview
     * const EditorialReview = await prisma.editorialReview.delete({
     *   where: {
     *     // ... filter to delete one EditorialReview
     *   }
     * })
     * 
     */
    delete<T extends EditorialReviewDeleteArgs>(args: SelectSubset<T, EditorialReviewDeleteArgs<ExtArgs>>): Prisma__EditorialReviewClient<$Result.GetResult<Prisma.$EditorialReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EditorialReview.
     * @param {EditorialReviewUpdateArgs} args - Arguments to update one EditorialReview.
     * @example
     * // Update one EditorialReview
     * const editorialReview = await prisma.editorialReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EditorialReviewUpdateArgs>(args: SelectSubset<T, EditorialReviewUpdateArgs<ExtArgs>>): Prisma__EditorialReviewClient<$Result.GetResult<Prisma.$EditorialReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EditorialReviews.
     * @param {EditorialReviewDeleteManyArgs} args - Arguments to filter EditorialReviews to delete.
     * @example
     * // Delete a few EditorialReviews
     * const { count } = await prisma.editorialReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EditorialReviewDeleteManyArgs>(args?: SelectSubset<T, EditorialReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EditorialReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditorialReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EditorialReviews
     * const editorialReview = await prisma.editorialReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EditorialReviewUpdateManyArgs>(args: SelectSubset<T, EditorialReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EditorialReviews and returns the data updated in the database.
     * @param {EditorialReviewUpdateManyAndReturnArgs} args - Arguments to update many EditorialReviews.
     * @example
     * // Update many EditorialReviews
     * const editorialReview = await prisma.editorialReview.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EditorialReviews and only return the `id`
     * const editorialReviewWithIdOnly = await prisma.editorialReview.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EditorialReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, EditorialReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EditorialReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EditorialReview.
     * @param {EditorialReviewUpsertArgs} args - Arguments to update or create a EditorialReview.
     * @example
     * // Update or create a EditorialReview
     * const editorialReview = await prisma.editorialReview.upsert({
     *   create: {
     *     // ... data to create a EditorialReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EditorialReview we want to update
     *   }
     * })
     */
    upsert<T extends EditorialReviewUpsertArgs>(args: SelectSubset<T, EditorialReviewUpsertArgs<ExtArgs>>): Prisma__EditorialReviewClient<$Result.GetResult<Prisma.$EditorialReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EditorialReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditorialReviewCountArgs} args - Arguments to filter EditorialReviews to count.
     * @example
     * // Count the number of EditorialReviews
     * const count = await prisma.editorialReview.count({
     *   where: {
     *     // ... the filter for the EditorialReviews we want to count
     *   }
     * })
    **/
    count<T extends EditorialReviewCountArgs>(
      args?: Subset<T, EditorialReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EditorialReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EditorialReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditorialReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EditorialReviewAggregateArgs>(args: Subset<T, EditorialReviewAggregateArgs>): Prisma.PrismaPromise<GetEditorialReviewAggregateType<T>>

    /**
     * Group by EditorialReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditorialReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EditorialReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EditorialReviewGroupByArgs['orderBy'] }
        : { orderBy?: EditorialReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EditorialReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEditorialReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EditorialReview model
   */
  readonly fields: EditorialReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EditorialReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EditorialReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    content<T extends EditorialReview$contentArgs<ExtArgs> = {}>(args?: Subset<T, EditorialReview$contentArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    eventCandidate<T extends EditorialReview$eventCandidateArgs<ExtArgs> = {}>(args?: Subset<T, EditorialReview$eventCandidateArgs<ExtArgs>>): Prisma__EventCandidateClient<$Result.GetResult<Prisma.$EventCandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EditorialReview model
   */
  interface EditorialReviewFieldRefs {
    readonly id: FieldRef<"EditorialReview", 'String'>
    readonly contentId: FieldRef<"EditorialReview", 'String'>
    readonly eventCandidateId: FieldRef<"EditorialReview", 'String'>
    readonly reviewerId: FieldRef<"EditorialReview", 'String'>
    readonly reviewerName: FieldRef<"EditorialReview", 'String'>
    readonly status: FieldRef<"EditorialReview", 'EditorialStatus'>
    readonly notes: FieldRef<"EditorialReview", 'String'>
    readonly createdAt: FieldRef<"EditorialReview", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EditorialReview findUnique
   */
  export type EditorialReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorialReview
     */
    select?: EditorialReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorialReview
     */
    omit?: EditorialReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorialReviewInclude<ExtArgs> | null
    /**
     * Filter, which EditorialReview to fetch.
     */
    where: EditorialReviewWhereUniqueInput
  }

  /**
   * EditorialReview findUniqueOrThrow
   */
  export type EditorialReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorialReview
     */
    select?: EditorialReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorialReview
     */
    omit?: EditorialReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorialReviewInclude<ExtArgs> | null
    /**
     * Filter, which EditorialReview to fetch.
     */
    where: EditorialReviewWhereUniqueInput
  }

  /**
   * EditorialReview findFirst
   */
  export type EditorialReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorialReview
     */
    select?: EditorialReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorialReview
     */
    omit?: EditorialReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorialReviewInclude<ExtArgs> | null
    /**
     * Filter, which EditorialReview to fetch.
     */
    where?: EditorialReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EditorialReviews to fetch.
     */
    orderBy?: EditorialReviewOrderByWithRelationInput | EditorialReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EditorialReviews.
     */
    cursor?: EditorialReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EditorialReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EditorialReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EditorialReviews.
     */
    distinct?: EditorialReviewScalarFieldEnum | EditorialReviewScalarFieldEnum[]
  }

  /**
   * EditorialReview findFirstOrThrow
   */
  export type EditorialReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorialReview
     */
    select?: EditorialReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorialReview
     */
    omit?: EditorialReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorialReviewInclude<ExtArgs> | null
    /**
     * Filter, which EditorialReview to fetch.
     */
    where?: EditorialReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EditorialReviews to fetch.
     */
    orderBy?: EditorialReviewOrderByWithRelationInput | EditorialReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EditorialReviews.
     */
    cursor?: EditorialReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EditorialReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EditorialReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EditorialReviews.
     */
    distinct?: EditorialReviewScalarFieldEnum | EditorialReviewScalarFieldEnum[]
  }

  /**
   * EditorialReview findMany
   */
  export type EditorialReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorialReview
     */
    select?: EditorialReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorialReview
     */
    omit?: EditorialReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorialReviewInclude<ExtArgs> | null
    /**
     * Filter, which EditorialReviews to fetch.
     */
    where?: EditorialReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EditorialReviews to fetch.
     */
    orderBy?: EditorialReviewOrderByWithRelationInput | EditorialReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EditorialReviews.
     */
    cursor?: EditorialReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EditorialReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EditorialReviews.
     */
    skip?: number
    distinct?: EditorialReviewScalarFieldEnum | EditorialReviewScalarFieldEnum[]
  }

  /**
   * EditorialReview create
   */
  export type EditorialReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorialReview
     */
    select?: EditorialReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorialReview
     */
    omit?: EditorialReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorialReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a EditorialReview.
     */
    data: XOR<EditorialReviewCreateInput, EditorialReviewUncheckedCreateInput>
  }

  /**
   * EditorialReview createMany
   */
  export type EditorialReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EditorialReviews.
     */
    data: EditorialReviewCreateManyInput | EditorialReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EditorialReview createManyAndReturn
   */
  export type EditorialReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorialReview
     */
    select?: EditorialReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EditorialReview
     */
    omit?: EditorialReviewOmit<ExtArgs> | null
    /**
     * The data used to create many EditorialReviews.
     */
    data: EditorialReviewCreateManyInput | EditorialReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorialReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EditorialReview update
   */
  export type EditorialReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorialReview
     */
    select?: EditorialReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorialReview
     */
    omit?: EditorialReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorialReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a EditorialReview.
     */
    data: XOR<EditorialReviewUpdateInput, EditorialReviewUncheckedUpdateInput>
    /**
     * Choose, which EditorialReview to update.
     */
    where: EditorialReviewWhereUniqueInput
  }

  /**
   * EditorialReview updateMany
   */
  export type EditorialReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EditorialReviews.
     */
    data: XOR<EditorialReviewUpdateManyMutationInput, EditorialReviewUncheckedUpdateManyInput>
    /**
     * Filter which EditorialReviews to update
     */
    where?: EditorialReviewWhereInput
    /**
     * Limit how many EditorialReviews to update.
     */
    limit?: number
  }

  /**
   * EditorialReview updateManyAndReturn
   */
  export type EditorialReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorialReview
     */
    select?: EditorialReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EditorialReview
     */
    omit?: EditorialReviewOmit<ExtArgs> | null
    /**
     * The data used to update EditorialReviews.
     */
    data: XOR<EditorialReviewUpdateManyMutationInput, EditorialReviewUncheckedUpdateManyInput>
    /**
     * Filter which EditorialReviews to update
     */
    where?: EditorialReviewWhereInput
    /**
     * Limit how many EditorialReviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorialReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EditorialReview upsert
   */
  export type EditorialReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorialReview
     */
    select?: EditorialReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorialReview
     */
    omit?: EditorialReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorialReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the EditorialReview to update in case it exists.
     */
    where: EditorialReviewWhereUniqueInput
    /**
     * In case the EditorialReview found by the `where` argument doesn't exist, create a new EditorialReview with this data.
     */
    create: XOR<EditorialReviewCreateInput, EditorialReviewUncheckedCreateInput>
    /**
     * In case the EditorialReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EditorialReviewUpdateInput, EditorialReviewUncheckedUpdateInput>
  }

  /**
   * EditorialReview delete
   */
  export type EditorialReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorialReview
     */
    select?: EditorialReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorialReview
     */
    omit?: EditorialReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorialReviewInclude<ExtArgs> | null
    /**
     * Filter which EditorialReview to delete.
     */
    where: EditorialReviewWhereUniqueInput
  }

  /**
   * EditorialReview deleteMany
   */
  export type EditorialReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EditorialReviews to delete
     */
    where?: EditorialReviewWhereInput
    /**
     * Limit how many EditorialReviews to delete.
     */
    limit?: number
  }

  /**
   * EditorialReview.content
   */
  export type EditorialReview$contentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    where?: ContentWhereInput
  }

  /**
   * EditorialReview.eventCandidate
   */
  export type EditorialReview$eventCandidateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCandidate
     */
    select?: EventCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCandidate
     */
    omit?: EventCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCandidateInclude<ExtArgs> | null
    where?: EventCandidateWhereInput
  }

  /**
   * EditorialReview without action
   */
  export type EditorialReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorialReview
     */
    select?: EditorialReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorialReview
     */
    omit?: EditorialReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorialReviewInclude<ExtArgs> | null
  }


  /**
   * Model Publication
   */

  export type AggregatePublication = {
    _count: PublicationCountAggregateOutputType | null
    _min: PublicationMinAggregateOutputType | null
    _max: PublicationMaxAggregateOutputType | null
  }

  export type PublicationMinAggregateOutputType = {
    id: string | null
    contentId: string | null
    eventCandidateId: string | null
    target: $Enums.PublicationTarget | null
    status: $Enums.EditorialStatus | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PublicationMaxAggregateOutputType = {
    id: string | null
    contentId: string | null
    eventCandidateId: string | null
    target: $Enums.PublicationTarget | null
    status: $Enums.EditorialStatus | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PublicationCountAggregateOutputType = {
    id: number
    contentId: number
    eventCandidateId: number
    target: number
    payload: number
    status: number
    publishedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PublicationMinAggregateInputType = {
    id?: true
    contentId?: true
    eventCandidateId?: true
    target?: true
    status?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PublicationMaxAggregateInputType = {
    id?: true
    contentId?: true
    eventCandidateId?: true
    target?: true
    status?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PublicationCountAggregateInputType = {
    id?: true
    contentId?: true
    eventCandidateId?: true
    target?: true
    payload?: true
    status?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PublicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publication to aggregate.
     */
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     */
    orderBy?: PublicationOrderByWithRelationInput | PublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Publications
    **/
    _count?: true | PublicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicationMaxAggregateInputType
  }

  export type GetPublicationAggregateType<T extends PublicationAggregateArgs> = {
        [P in keyof T & keyof AggregatePublication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublication[P]>
      : GetScalarType<T[P], AggregatePublication[P]>
  }




  export type PublicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicationWhereInput
    orderBy?: PublicationOrderByWithAggregationInput | PublicationOrderByWithAggregationInput[]
    by: PublicationScalarFieldEnum[] | PublicationScalarFieldEnum
    having?: PublicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicationCountAggregateInputType | true
    _min?: PublicationMinAggregateInputType
    _max?: PublicationMaxAggregateInputType
  }

  export type PublicationGroupByOutputType = {
    id: string
    contentId: string | null
    eventCandidateId: string | null
    target: $Enums.PublicationTarget
    payload: JsonValue
    status: $Enums.EditorialStatus
    publishedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PublicationCountAggregateOutputType | null
    _min: PublicationMinAggregateOutputType | null
    _max: PublicationMaxAggregateOutputType | null
  }

  type GetPublicationGroupByPayload<T extends PublicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicationGroupByOutputType[P]>
            : GetScalarType<T[P], PublicationGroupByOutputType[P]>
        }
      >
    >


  export type PublicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contentId?: boolean
    eventCandidateId?: boolean
    target?: boolean
    payload?: boolean
    status?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean | Publication$contentArgs<ExtArgs>
    eventCandidate?: boolean | Publication$eventCandidateArgs<ExtArgs>
  }, ExtArgs["result"]["publication"]>

  export type PublicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contentId?: boolean
    eventCandidateId?: boolean
    target?: boolean
    payload?: boolean
    status?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean | Publication$contentArgs<ExtArgs>
    eventCandidate?: boolean | Publication$eventCandidateArgs<ExtArgs>
  }, ExtArgs["result"]["publication"]>

  export type PublicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contentId?: boolean
    eventCandidateId?: boolean
    target?: boolean
    payload?: boolean
    status?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean | Publication$contentArgs<ExtArgs>
    eventCandidate?: boolean | Publication$eventCandidateArgs<ExtArgs>
  }, ExtArgs["result"]["publication"]>

  export type PublicationSelectScalar = {
    id?: boolean
    contentId?: boolean
    eventCandidateId?: boolean
    target?: boolean
    payload?: boolean
    status?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PublicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contentId" | "eventCandidateId" | "target" | "payload" | "status" | "publishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["publication"]>
  export type PublicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | Publication$contentArgs<ExtArgs>
    eventCandidate?: boolean | Publication$eventCandidateArgs<ExtArgs>
  }
  export type PublicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | Publication$contentArgs<ExtArgs>
    eventCandidate?: boolean | Publication$eventCandidateArgs<ExtArgs>
  }
  export type PublicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | Publication$contentArgs<ExtArgs>
    eventCandidate?: boolean | Publication$eventCandidateArgs<ExtArgs>
  }

  export type $PublicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Publication"
    objects: {
      content: Prisma.$ContentPayload<ExtArgs> | null
      eventCandidate: Prisma.$EventCandidatePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contentId: string | null
      eventCandidateId: string | null
      target: $Enums.PublicationTarget
      payload: Prisma.JsonValue
      status: $Enums.EditorialStatus
      publishedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["publication"]>
    composites: {}
  }

  type PublicationGetPayload<S extends boolean | null | undefined | PublicationDefaultArgs> = $Result.GetResult<Prisma.$PublicationPayload, S>

  type PublicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PublicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublicationCountAggregateInputType | true
    }

  export interface PublicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Publication'], meta: { name: 'Publication' } }
    /**
     * Find zero or one Publication that matches the filter.
     * @param {PublicationFindUniqueArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublicationFindUniqueArgs>(args: SelectSubset<T, PublicationFindUniqueArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Publication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PublicationFindUniqueOrThrowArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublicationFindUniqueOrThrowArgs>(args: SelectSubset<T, PublicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationFindFirstArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublicationFindFirstArgs>(args?: SelectSubset<T, PublicationFindFirstArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationFindFirstOrThrowArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublicationFindFirstOrThrowArgs>(args?: SelectSubset<T, PublicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Publications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Publications
     * const publications = await prisma.publication.findMany()
     * 
     * // Get first 10 Publications
     * const publications = await prisma.publication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicationWithIdOnly = await prisma.publication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublicationFindManyArgs>(args?: SelectSubset<T, PublicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Publication.
     * @param {PublicationCreateArgs} args - Arguments to create a Publication.
     * @example
     * // Create one Publication
     * const Publication = await prisma.publication.create({
     *   data: {
     *     // ... data to create a Publication
     *   }
     * })
     * 
     */
    create<T extends PublicationCreateArgs>(args: SelectSubset<T, PublicationCreateArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Publications.
     * @param {PublicationCreateManyArgs} args - Arguments to create many Publications.
     * @example
     * // Create many Publications
     * const publication = await prisma.publication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublicationCreateManyArgs>(args?: SelectSubset<T, PublicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Publications and returns the data saved in the database.
     * @param {PublicationCreateManyAndReturnArgs} args - Arguments to create many Publications.
     * @example
     * // Create many Publications
     * const publication = await prisma.publication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Publications and only return the `id`
     * const publicationWithIdOnly = await prisma.publication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PublicationCreateManyAndReturnArgs>(args?: SelectSubset<T, PublicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Publication.
     * @param {PublicationDeleteArgs} args - Arguments to delete one Publication.
     * @example
     * // Delete one Publication
     * const Publication = await prisma.publication.delete({
     *   where: {
     *     // ... filter to delete one Publication
     *   }
     * })
     * 
     */
    delete<T extends PublicationDeleteArgs>(args: SelectSubset<T, PublicationDeleteArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Publication.
     * @param {PublicationUpdateArgs} args - Arguments to update one Publication.
     * @example
     * // Update one Publication
     * const publication = await prisma.publication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublicationUpdateArgs>(args: SelectSubset<T, PublicationUpdateArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Publications.
     * @param {PublicationDeleteManyArgs} args - Arguments to filter Publications to delete.
     * @example
     * // Delete a few Publications
     * const { count } = await prisma.publication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublicationDeleteManyArgs>(args?: SelectSubset<T, PublicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Publications
     * const publication = await prisma.publication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublicationUpdateManyArgs>(args: SelectSubset<T, PublicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publications and returns the data updated in the database.
     * @param {PublicationUpdateManyAndReturnArgs} args - Arguments to update many Publications.
     * @example
     * // Update many Publications
     * const publication = await prisma.publication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Publications and only return the `id`
     * const publicationWithIdOnly = await prisma.publication.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PublicationUpdateManyAndReturnArgs>(args: SelectSubset<T, PublicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Publication.
     * @param {PublicationUpsertArgs} args - Arguments to update or create a Publication.
     * @example
     * // Update or create a Publication
     * const publication = await prisma.publication.upsert({
     *   create: {
     *     // ... data to create a Publication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Publication we want to update
     *   }
     * })
     */
    upsert<T extends PublicationUpsertArgs>(args: SelectSubset<T, PublicationUpsertArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Publications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationCountArgs} args - Arguments to filter Publications to count.
     * @example
     * // Count the number of Publications
     * const count = await prisma.publication.count({
     *   where: {
     *     // ... the filter for the Publications we want to count
     *   }
     * })
    **/
    count<T extends PublicationCountArgs>(
      args?: Subset<T, PublicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Publication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublicationAggregateArgs>(args: Subset<T, PublicationAggregateArgs>): Prisma.PrismaPromise<GetPublicationAggregateType<T>>

    /**
     * Group by Publication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PublicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicationGroupByArgs['orderBy'] }
        : { orderBy?: PublicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Publication model
   */
  readonly fields: PublicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Publication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    content<T extends Publication$contentArgs<ExtArgs> = {}>(args?: Subset<T, Publication$contentArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    eventCandidate<T extends Publication$eventCandidateArgs<ExtArgs> = {}>(args?: Subset<T, Publication$eventCandidateArgs<ExtArgs>>): Prisma__EventCandidateClient<$Result.GetResult<Prisma.$EventCandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Publication model
   */
  interface PublicationFieldRefs {
    readonly id: FieldRef<"Publication", 'String'>
    readonly contentId: FieldRef<"Publication", 'String'>
    readonly eventCandidateId: FieldRef<"Publication", 'String'>
    readonly target: FieldRef<"Publication", 'PublicationTarget'>
    readonly payload: FieldRef<"Publication", 'Json'>
    readonly status: FieldRef<"Publication", 'EditorialStatus'>
    readonly publishedAt: FieldRef<"Publication", 'DateTime'>
    readonly createdAt: FieldRef<"Publication", 'DateTime'>
    readonly updatedAt: FieldRef<"Publication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Publication findUnique
   */
  export type PublicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * Filter, which Publication to fetch.
     */
    where: PublicationWhereUniqueInput
  }

  /**
   * Publication findUniqueOrThrow
   */
  export type PublicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * Filter, which Publication to fetch.
     */
    where: PublicationWhereUniqueInput
  }

  /**
   * Publication findFirst
   */
  export type PublicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * Filter, which Publication to fetch.
     */
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     */
    orderBy?: PublicationOrderByWithRelationInput | PublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publications.
     */
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publications.
     */
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[]
  }

  /**
   * Publication findFirstOrThrow
   */
  export type PublicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * Filter, which Publication to fetch.
     */
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     */
    orderBy?: PublicationOrderByWithRelationInput | PublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publications.
     */
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publications.
     */
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[]
  }

  /**
   * Publication findMany
   */
  export type PublicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * Filter, which Publications to fetch.
     */
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     */
    orderBy?: PublicationOrderByWithRelationInput | PublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Publications.
     */
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     */
    skip?: number
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[]
  }

  /**
   * Publication create
   */
  export type PublicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Publication.
     */
    data: XOR<PublicationCreateInput, PublicationUncheckedCreateInput>
  }

  /**
   * Publication createMany
   */
  export type PublicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Publications.
     */
    data: PublicationCreateManyInput | PublicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Publication createManyAndReturn
   */
  export type PublicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * The data used to create many Publications.
     */
    data: PublicationCreateManyInput | PublicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Publication update
   */
  export type PublicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Publication.
     */
    data: XOR<PublicationUpdateInput, PublicationUncheckedUpdateInput>
    /**
     * Choose, which Publication to update.
     */
    where: PublicationWhereUniqueInput
  }

  /**
   * Publication updateMany
   */
  export type PublicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Publications.
     */
    data: XOR<PublicationUpdateManyMutationInput, PublicationUncheckedUpdateManyInput>
    /**
     * Filter which Publications to update
     */
    where?: PublicationWhereInput
    /**
     * Limit how many Publications to update.
     */
    limit?: number
  }

  /**
   * Publication updateManyAndReturn
   */
  export type PublicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * The data used to update Publications.
     */
    data: XOR<PublicationUpdateManyMutationInput, PublicationUncheckedUpdateManyInput>
    /**
     * Filter which Publications to update
     */
    where?: PublicationWhereInput
    /**
     * Limit how many Publications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Publication upsert
   */
  export type PublicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Publication to update in case it exists.
     */
    where: PublicationWhereUniqueInput
    /**
     * In case the Publication found by the `where` argument doesn't exist, create a new Publication with this data.
     */
    create: XOR<PublicationCreateInput, PublicationUncheckedCreateInput>
    /**
     * In case the Publication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicationUpdateInput, PublicationUncheckedUpdateInput>
  }

  /**
   * Publication delete
   */
  export type PublicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * Filter which Publication to delete.
     */
    where: PublicationWhereUniqueInput
  }

  /**
   * Publication deleteMany
   */
  export type PublicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publications to delete
     */
    where?: PublicationWhereInput
    /**
     * Limit how many Publications to delete.
     */
    limit?: number
  }

  /**
   * Publication.content
   */
  export type Publication$contentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    where?: ContentWhereInput
  }

  /**
   * Publication.eventCandidate
   */
  export type Publication$eventCandidateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCandidate
     */
    select?: EventCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCandidate
     */
    omit?: EventCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCandidateInclude<ExtArgs> | null
    where?: EventCandidateWhereInput
  }

  /**
   * Publication without action
   */
  export type PublicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
  }


  /**
   * Model CrawlJob
   */

  export type AggregateCrawlJob = {
    _count: CrawlJobCountAggregateOutputType | null
    _avg: CrawlJobAvgAggregateOutputType | null
    _sum: CrawlJobSumAggregateOutputType | null
    _min: CrawlJobMinAggregateOutputType | null
    _max: CrawlJobMaxAggregateOutputType | null
  }

  export type CrawlJobAvgAggregateOutputType = {
    attempts: number | null
    maxAttempts: number | null
    backoffMs: number | null
    discoveredCount: number | null
    processedCount: number | null
  }

  export type CrawlJobSumAggregateOutputType = {
    attempts: number | null
    maxAttempts: number | null
    backoffMs: number | null
    discoveredCount: number | null
    processedCount: number | null
  }

  export type CrawlJobMinAggregateOutputType = {
    id: string | null
    name: string | null
    sourceId: string | null
    jobType: string | null
    status: $Enums.JobStatus | null
    attempts: number | null
    maxAttempts: number | null
    backoffMs: number | null
    discoveredCount: number | null
    processedCount: number | null
    error: string | null
    startedAt: Date | null
    finishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CrawlJobMaxAggregateOutputType = {
    id: string | null
    name: string | null
    sourceId: string | null
    jobType: string | null
    status: $Enums.JobStatus | null
    attempts: number | null
    maxAttempts: number | null
    backoffMs: number | null
    discoveredCount: number | null
    processedCount: number | null
    error: string | null
    startedAt: Date | null
    finishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CrawlJobCountAggregateOutputType = {
    id: number
    name: number
    sourceId: number
    jobType: number
    status: number
    attempts: number
    maxAttempts: number
    backoffMs: number
    discoveredCount: number
    processedCount: number
    logs: number
    error: number
    startedAt: number
    finishedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CrawlJobAvgAggregateInputType = {
    attempts?: true
    maxAttempts?: true
    backoffMs?: true
    discoveredCount?: true
    processedCount?: true
  }

  export type CrawlJobSumAggregateInputType = {
    attempts?: true
    maxAttempts?: true
    backoffMs?: true
    discoveredCount?: true
    processedCount?: true
  }

  export type CrawlJobMinAggregateInputType = {
    id?: true
    name?: true
    sourceId?: true
    jobType?: true
    status?: true
    attempts?: true
    maxAttempts?: true
    backoffMs?: true
    discoveredCount?: true
    processedCount?: true
    error?: true
    startedAt?: true
    finishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CrawlJobMaxAggregateInputType = {
    id?: true
    name?: true
    sourceId?: true
    jobType?: true
    status?: true
    attempts?: true
    maxAttempts?: true
    backoffMs?: true
    discoveredCount?: true
    processedCount?: true
    error?: true
    startedAt?: true
    finishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CrawlJobCountAggregateInputType = {
    id?: true
    name?: true
    sourceId?: true
    jobType?: true
    status?: true
    attempts?: true
    maxAttempts?: true
    backoffMs?: true
    discoveredCount?: true
    processedCount?: true
    logs?: true
    error?: true
    startedAt?: true
    finishedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CrawlJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CrawlJob to aggregate.
     */
    where?: CrawlJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrawlJobs to fetch.
     */
    orderBy?: CrawlJobOrderByWithRelationInput | CrawlJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CrawlJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrawlJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrawlJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CrawlJobs
    **/
    _count?: true | CrawlJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CrawlJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CrawlJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CrawlJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CrawlJobMaxAggregateInputType
  }

  export type GetCrawlJobAggregateType<T extends CrawlJobAggregateArgs> = {
        [P in keyof T & keyof AggregateCrawlJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrawlJob[P]>
      : GetScalarType<T[P], AggregateCrawlJob[P]>
  }




  export type CrawlJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrawlJobWhereInput
    orderBy?: CrawlJobOrderByWithAggregationInput | CrawlJobOrderByWithAggregationInput[]
    by: CrawlJobScalarFieldEnum[] | CrawlJobScalarFieldEnum
    having?: CrawlJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CrawlJobCountAggregateInputType | true
    _avg?: CrawlJobAvgAggregateInputType
    _sum?: CrawlJobSumAggregateInputType
    _min?: CrawlJobMinAggregateInputType
    _max?: CrawlJobMaxAggregateInputType
  }

  export type CrawlJobGroupByOutputType = {
    id: string
    name: string
    sourceId: string | null
    jobType: string
    status: $Enums.JobStatus
    attempts: number
    maxAttempts: number
    backoffMs: number
    discoveredCount: number
    processedCount: number
    logs: JsonValue | null
    error: string | null
    startedAt: Date | null
    finishedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: CrawlJobCountAggregateOutputType | null
    _avg: CrawlJobAvgAggregateOutputType | null
    _sum: CrawlJobSumAggregateOutputType | null
    _min: CrawlJobMinAggregateOutputType | null
    _max: CrawlJobMaxAggregateOutputType | null
  }

  type GetCrawlJobGroupByPayload<T extends CrawlJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CrawlJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CrawlJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CrawlJobGroupByOutputType[P]>
            : GetScalarType<T[P], CrawlJobGroupByOutputType[P]>
        }
      >
    >


  export type CrawlJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sourceId?: boolean
    jobType?: boolean
    status?: boolean
    attempts?: boolean
    maxAttempts?: boolean
    backoffMs?: boolean
    discoveredCount?: boolean
    processedCount?: boolean
    logs?: boolean
    error?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["crawlJob"]>

  export type CrawlJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sourceId?: boolean
    jobType?: boolean
    status?: boolean
    attempts?: boolean
    maxAttempts?: boolean
    backoffMs?: boolean
    discoveredCount?: boolean
    processedCount?: boolean
    logs?: boolean
    error?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["crawlJob"]>

  export type CrawlJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sourceId?: boolean
    jobType?: boolean
    status?: boolean
    attempts?: boolean
    maxAttempts?: boolean
    backoffMs?: boolean
    discoveredCount?: boolean
    processedCount?: boolean
    logs?: boolean
    error?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["crawlJob"]>

  export type CrawlJobSelectScalar = {
    id?: boolean
    name?: boolean
    sourceId?: boolean
    jobType?: boolean
    status?: boolean
    attempts?: boolean
    maxAttempts?: boolean
    backoffMs?: boolean
    discoveredCount?: boolean
    processedCount?: boolean
    logs?: boolean
    error?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CrawlJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "sourceId" | "jobType" | "status" | "attempts" | "maxAttempts" | "backoffMs" | "discoveredCount" | "processedCount" | "logs" | "error" | "startedAt" | "finishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["crawlJob"]>

  export type $CrawlJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CrawlJob"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      sourceId: string | null
      jobType: string
      status: $Enums.JobStatus
      attempts: number
      maxAttempts: number
      backoffMs: number
      discoveredCount: number
      processedCount: number
      logs: Prisma.JsonValue | null
      error: string | null
      startedAt: Date | null
      finishedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["crawlJob"]>
    composites: {}
  }

  type CrawlJobGetPayload<S extends boolean | null | undefined | CrawlJobDefaultArgs> = $Result.GetResult<Prisma.$CrawlJobPayload, S>

  type CrawlJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CrawlJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CrawlJobCountAggregateInputType | true
    }

  export interface CrawlJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CrawlJob'], meta: { name: 'CrawlJob' } }
    /**
     * Find zero or one CrawlJob that matches the filter.
     * @param {CrawlJobFindUniqueArgs} args - Arguments to find a CrawlJob
     * @example
     * // Get one CrawlJob
     * const crawlJob = await prisma.crawlJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CrawlJobFindUniqueArgs>(args: SelectSubset<T, CrawlJobFindUniqueArgs<ExtArgs>>): Prisma__CrawlJobClient<$Result.GetResult<Prisma.$CrawlJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CrawlJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CrawlJobFindUniqueOrThrowArgs} args - Arguments to find a CrawlJob
     * @example
     * // Get one CrawlJob
     * const crawlJob = await prisma.crawlJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CrawlJobFindUniqueOrThrowArgs>(args: SelectSubset<T, CrawlJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CrawlJobClient<$Result.GetResult<Prisma.$CrawlJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CrawlJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlJobFindFirstArgs} args - Arguments to find a CrawlJob
     * @example
     * // Get one CrawlJob
     * const crawlJob = await prisma.crawlJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CrawlJobFindFirstArgs>(args?: SelectSubset<T, CrawlJobFindFirstArgs<ExtArgs>>): Prisma__CrawlJobClient<$Result.GetResult<Prisma.$CrawlJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CrawlJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlJobFindFirstOrThrowArgs} args - Arguments to find a CrawlJob
     * @example
     * // Get one CrawlJob
     * const crawlJob = await prisma.crawlJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CrawlJobFindFirstOrThrowArgs>(args?: SelectSubset<T, CrawlJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__CrawlJobClient<$Result.GetResult<Prisma.$CrawlJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CrawlJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CrawlJobs
     * const crawlJobs = await prisma.crawlJob.findMany()
     * 
     * // Get first 10 CrawlJobs
     * const crawlJobs = await prisma.crawlJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const crawlJobWithIdOnly = await prisma.crawlJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CrawlJobFindManyArgs>(args?: SelectSubset<T, CrawlJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrawlJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CrawlJob.
     * @param {CrawlJobCreateArgs} args - Arguments to create a CrawlJob.
     * @example
     * // Create one CrawlJob
     * const CrawlJob = await prisma.crawlJob.create({
     *   data: {
     *     // ... data to create a CrawlJob
     *   }
     * })
     * 
     */
    create<T extends CrawlJobCreateArgs>(args: SelectSubset<T, CrawlJobCreateArgs<ExtArgs>>): Prisma__CrawlJobClient<$Result.GetResult<Prisma.$CrawlJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CrawlJobs.
     * @param {CrawlJobCreateManyArgs} args - Arguments to create many CrawlJobs.
     * @example
     * // Create many CrawlJobs
     * const crawlJob = await prisma.crawlJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CrawlJobCreateManyArgs>(args?: SelectSubset<T, CrawlJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CrawlJobs and returns the data saved in the database.
     * @param {CrawlJobCreateManyAndReturnArgs} args - Arguments to create many CrawlJobs.
     * @example
     * // Create many CrawlJobs
     * const crawlJob = await prisma.crawlJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CrawlJobs and only return the `id`
     * const crawlJobWithIdOnly = await prisma.crawlJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CrawlJobCreateManyAndReturnArgs>(args?: SelectSubset<T, CrawlJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrawlJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CrawlJob.
     * @param {CrawlJobDeleteArgs} args - Arguments to delete one CrawlJob.
     * @example
     * // Delete one CrawlJob
     * const CrawlJob = await prisma.crawlJob.delete({
     *   where: {
     *     // ... filter to delete one CrawlJob
     *   }
     * })
     * 
     */
    delete<T extends CrawlJobDeleteArgs>(args: SelectSubset<T, CrawlJobDeleteArgs<ExtArgs>>): Prisma__CrawlJobClient<$Result.GetResult<Prisma.$CrawlJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CrawlJob.
     * @param {CrawlJobUpdateArgs} args - Arguments to update one CrawlJob.
     * @example
     * // Update one CrawlJob
     * const crawlJob = await prisma.crawlJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CrawlJobUpdateArgs>(args: SelectSubset<T, CrawlJobUpdateArgs<ExtArgs>>): Prisma__CrawlJobClient<$Result.GetResult<Prisma.$CrawlJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CrawlJobs.
     * @param {CrawlJobDeleteManyArgs} args - Arguments to filter CrawlJobs to delete.
     * @example
     * // Delete a few CrawlJobs
     * const { count } = await prisma.crawlJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CrawlJobDeleteManyArgs>(args?: SelectSubset<T, CrawlJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CrawlJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CrawlJobs
     * const crawlJob = await prisma.crawlJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CrawlJobUpdateManyArgs>(args: SelectSubset<T, CrawlJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CrawlJobs and returns the data updated in the database.
     * @param {CrawlJobUpdateManyAndReturnArgs} args - Arguments to update many CrawlJobs.
     * @example
     * // Update many CrawlJobs
     * const crawlJob = await prisma.crawlJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CrawlJobs and only return the `id`
     * const crawlJobWithIdOnly = await prisma.crawlJob.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CrawlJobUpdateManyAndReturnArgs>(args: SelectSubset<T, CrawlJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrawlJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CrawlJob.
     * @param {CrawlJobUpsertArgs} args - Arguments to update or create a CrawlJob.
     * @example
     * // Update or create a CrawlJob
     * const crawlJob = await prisma.crawlJob.upsert({
     *   create: {
     *     // ... data to create a CrawlJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CrawlJob we want to update
     *   }
     * })
     */
    upsert<T extends CrawlJobUpsertArgs>(args: SelectSubset<T, CrawlJobUpsertArgs<ExtArgs>>): Prisma__CrawlJobClient<$Result.GetResult<Prisma.$CrawlJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CrawlJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlJobCountArgs} args - Arguments to filter CrawlJobs to count.
     * @example
     * // Count the number of CrawlJobs
     * const count = await prisma.crawlJob.count({
     *   where: {
     *     // ... the filter for the CrawlJobs we want to count
     *   }
     * })
    **/
    count<T extends CrawlJobCountArgs>(
      args?: Subset<T, CrawlJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CrawlJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CrawlJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CrawlJobAggregateArgs>(args: Subset<T, CrawlJobAggregateArgs>): Prisma.PrismaPromise<GetCrawlJobAggregateType<T>>

    /**
     * Group by CrawlJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlJobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CrawlJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CrawlJobGroupByArgs['orderBy'] }
        : { orderBy?: CrawlJobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CrawlJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCrawlJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CrawlJob model
   */
  readonly fields: CrawlJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CrawlJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CrawlJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CrawlJob model
   */
  interface CrawlJobFieldRefs {
    readonly id: FieldRef<"CrawlJob", 'String'>
    readonly name: FieldRef<"CrawlJob", 'String'>
    readonly sourceId: FieldRef<"CrawlJob", 'String'>
    readonly jobType: FieldRef<"CrawlJob", 'String'>
    readonly status: FieldRef<"CrawlJob", 'JobStatus'>
    readonly attempts: FieldRef<"CrawlJob", 'Int'>
    readonly maxAttempts: FieldRef<"CrawlJob", 'Int'>
    readonly backoffMs: FieldRef<"CrawlJob", 'Int'>
    readonly discoveredCount: FieldRef<"CrawlJob", 'Int'>
    readonly processedCount: FieldRef<"CrawlJob", 'Int'>
    readonly logs: FieldRef<"CrawlJob", 'Json'>
    readonly error: FieldRef<"CrawlJob", 'String'>
    readonly startedAt: FieldRef<"CrawlJob", 'DateTime'>
    readonly finishedAt: FieldRef<"CrawlJob", 'DateTime'>
    readonly createdAt: FieldRef<"CrawlJob", 'DateTime'>
    readonly updatedAt: FieldRef<"CrawlJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CrawlJob findUnique
   */
  export type CrawlJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlJob
     */
    select?: CrawlJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlJob
     */
    omit?: CrawlJobOmit<ExtArgs> | null
    /**
     * Filter, which CrawlJob to fetch.
     */
    where: CrawlJobWhereUniqueInput
  }

  /**
   * CrawlJob findUniqueOrThrow
   */
  export type CrawlJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlJob
     */
    select?: CrawlJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlJob
     */
    omit?: CrawlJobOmit<ExtArgs> | null
    /**
     * Filter, which CrawlJob to fetch.
     */
    where: CrawlJobWhereUniqueInput
  }

  /**
   * CrawlJob findFirst
   */
  export type CrawlJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlJob
     */
    select?: CrawlJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlJob
     */
    omit?: CrawlJobOmit<ExtArgs> | null
    /**
     * Filter, which CrawlJob to fetch.
     */
    where?: CrawlJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrawlJobs to fetch.
     */
    orderBy?: CrawlJobOrderByWithRelationInput | CrawlJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CrawlJobs.
     */
    cursor?: CrawlJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrawlJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrawlJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrawlJobs.
     */
    distinct?: CrawlJobScalarFieldEnum | CrawlJobScalarFieldEnum[]
  }

  /**
   * CrawlJob findFirstOrThrow
   */
  export type CrawlJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlJob
     */
    select?: CrawlJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlJob
     */
    omit?: CrawlJobOmit<ExtArgs> | null
    /**
     * Filter, which CrawlJob to fetch.
     */
    where?: CrawlJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrawlJobs to fetch.
     */
    orderBy?: CrawlJobOrderByWithRelationInput | CrawlJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CrawlJobs.
     */
    cursor?: CrawlJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrawlJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrawlJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrawlJobs.
     */
    distinct?: CrawlJobScalarFieldEnum | CrawlJobScalarFieldEnum[]
  }

  /**
   * CrawlJob findMany
   */
  export type CrawlJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlJob
     */
    select?: CrawlJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlJob
     */
    omit?: CrawlJobOmit<ExtArgs> | null
    /**
     * Filter, which CrawlJobs to fetch.
     */
    where?: CrawlJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrawlJobs to fetch.
     */
    orderBy?: CrawlJobOrderByWithRelationInput | CrawlJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CrawlJobs.
     */
    cursor?: CrawlJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrawlJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrawlJobs.
     */
    skip?: number
    distinct?: CrawlJobScalarFieldEnum | CrawlJobScalarFieldEnum[]
  }

  /**
   * CrawlJob create
   */
  export type CrawlJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlJob
     */
    select?: CrawlJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlJob
     */
    omit?: CrawlJobOmit<ExtArgs> | null
    /**
     * The data needed to create a CrawlJob.
     */
    data: XOR<CrawlJobCreateInput, CrawlJobUncheckedCreateInput>
  }

  /**
   * CrawlJob createMany
   */
  export type CrawlJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CrawlJobs.
     */
    data: CrawlJobCreateManyInput | CrawlJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CrawlJob createManyAndReturn
   */
  export type CrawlJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlJob
     */
    select?: CrawlJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlJob
     */
    omit?: CrawlJobOmit<ExtArgs> | null
    /**
     * The data used to create many CrawlJobs.
     */
    data: CrawlJobCreateManyInput | CrawlJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CrawlJob update
   */
  export type CrawlJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlJob
     */
    select?: CrawlJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlJob
     */
    omit?: CrawlJobOmit<ExtArgs> | null
    /**
     * The data needed to update a CrawlJob.
     */
    data: XOR<CrawlJobUpdateInput, CrawlJobUncheckedUpdateInput>
    /**
     * Choose, which CrawlJob to update.
     */
    where: CrawlJobWhereUniqueInput
  }

  /**
   * CrawlJob updateMany
   */
  export type CrawlJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CrawlJobs.
     */
    data: XOR<CrawlJobUpdateManyMutationInput, CrawlJobUncheckedUpdateManyInput>
    /**
     * Filter which CrawlJobs to update
     */
    where?: CrawlJobWhereInput
    /**
     * Limit how many CrawlJobs to update.
     */
    limit?: number
  }

  /**
   * CrawlJob updateManyAndReturn
   */
  export type CrawlJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlJob
     */
    select?: CrawlJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlJob
     */
    omit?: CrawlJobOmit<ExtArgs> | null
    /**
     * The data used to update CrawlJobs.
     */
    data: XOR<CrawlJobUpdateManyMutationInput, CrawlJobUncheckedUpdateManyInput>
    /**
     * Filter which CrawlJobs to update
     */
    where?: CrawlJobWhereInput
    /**
     * Limit how many CrawlJobs to update.
     */
    limit?: number
  }

  /**
   * CrawlJob upsert
   */
  export type CrawlJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlJob
     */
    select?: CrawlJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlJob
     */
    omit?: CrawlJobOmit<ExtArgs> | null
    /**
     * The filter to search for the CrawlJob to update in case it exists.
     */
    where: CrawlJobWhereUniqueInput
    /**
     * In case the CrawlJob found by the `where` argument doesn't exist, create a new CrawlJob with this data.
     */
    create: XOR<CrawlJobCreateInput, CrawlJobUncheckedCreateInput>
    /**
     * In case the CrawlJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CrawlJobUpdateInput, CrawlJobUncheckedUpdateInput>
  }

  /**
   * CrawlJob delete
   */
  export type CrawlJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlJob
     */
    select?: CrawlJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlJob
     */
    omit?: CrawlJobOmit<ExtArgs> | null
    /**
     * Filter which CrawlJob to delete.
     */
    where: CrawlJobWhereUniqueInput
  }

  /**
   * CrawlJob deleteMany
   */
  export type CrawlJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CrawlJobs to delete
     */
    where?: CrawlJobWhereInput
    /**
     * Limit how many CrawlJobs to delete.
     */
    limit?: number
  }

  /**
   * CrawlJob without action
   */
  export type CrawlJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlJob
     */
    select?: CrawlJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrawlJob
     */
    omit?: CrawlJobOmit<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    actorId: string | null
    actorName: string | null
    action: string | null
    entityType: string | null
    entityId: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    actorId: string | null
    actorName: string | null
    action: string | null
    entityType: string | null
    entityId: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    actorId: number
    actorName: number
    action: number
    entityType: number
    entityId: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    actorId?: true
    actorName?: true
    action?: true
    entityType?: true
    entityId?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    actorId?: true
    actorName?: true
    action?: true
    entityType?: true
    entityId?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    actorId?: true
    actorName?: true
    action?: true
    entityType?: true
    entityId?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    actorId: string | null
    actorName: string | null
    action: string
    entityType: string
    entityId: string | null
    metadata: JsonValue | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    actorName?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    actorName?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    actorName?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    actorId?: boolean
    actorName?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "actorId" | "actorName" | "action" | "entityType" | "entityId" | "metadata" | "createdAt", ExtArgs["result"]["auditLog"]>

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actorId: string | null
      actorName: string | null
      action: string
      entityType: string
      entityId: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly actorId: FieldRef<"AuditLog", 'String'>
    readonly actorName: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entityType: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly metadata: FieldRef<"AuditLog", 'Json'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SourceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    sourceType: 'sourceType',
    country: 'country',
    province: 'province',
    city: 'city',
    trustScore: 'trustScore',
    enabled: 'enabled',
    scrapingAllowed: 'scrapingAllowed',
    requiresReview: 'requiresReview',
    updateFrequency: 'updateFrequency',
    crawlDelayMs: 'crawlDelayMs',
    lastSeenHash: 'lastSeenHash',
    contentSelector: 'contentSelector',
    titleSelector: 'titleSelector',
    robotsPolicy: 'robotsPolicy',
    notes: 'notes',
    lastCheckedAt: 'lastCheckedAt',
    lastSuccessfulCheckAt: 'lastSuccessfulCheckAt',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SourceScalarFieldEnum = (typeof SourceScalarFieldEnum)[keyof typeof SourceScalarFieldEnum]


  export const RawContentScalarFieldEnum: {
    id: 'id',
    sourceId: 'sourceId',
    externalId: 'externalId',
    canonicalUrl: 'canonicalUrl',
    title: 'title',
    rawText: 'rawText',
    rawHtml: 'rawHtml',
    author: 'author',
    publishedAt: 'publishedAt',
    discoveredAt: 'discoveredAt',
    fetchedAt: 'fetchedAt',
    contentHash: 'contentHash',
    metadata: 'metadata',
    status: 'status'
  };

  export type RawContentScalarFieldEnum = (typeof RawContentScalarFieldEnum)[keyof typeof RawContentScalarFieldEnum]


  export const ContentScalarFieldEnum: {
    id: 'id',
    rawContentId: 'rawContentId',
    title: 'title',
    slug: 'slug',
    cleanText: 'cleanText',
    summary: 'summary',
    contentType: 'contentType',
    category: 'category',
    country: 'country',
    province: 'province',
    city: 'city',
    confidence: 'confidence',
    fitnessScore: 'fitnessScore',
    angolaScore: 'angolaScore',
    relevanceScore: 'relevanceScore',
    trustScore: 'trustScore',
    duplicateStatus: 'duplicateStatus',
    duplicateOfId: 'duplicateOfId',
    duplicateReason: 'duplicateReason',
    editorialStatus: 'editorialStatus',
    draft: 'draft',
    socialDraft: 'socialDraft',
    scoreExplanation: 'scoreExplanation',
    scheduledFor: 'scheduledFor',
    publishedAt: 'publishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContentScalarFieldEnum = (typeof ContentScalarFieldEnum)[keyof typeof ContentScalarFieldEnum]


  export const EntityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    entityType: 'entityType',
    country: 'country',
    province: 'province',
    city: 'city',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EntityScalarFieldEnum = (typeof EntityScalarFieldEnum)[keyof typeof EntityScalarFieldEnum]


  export const ContentEntityScalarFieldEnum: {
    contentId: 'contentId',
    entityId: 'entityId',
    confidence: 'confidence',
    role: 'role'
  };

  export type ContentEntityScalarFieldEnum = (typeof ContentEntityScalarFieldEnum)[keyof typeof ContentEntityScalarFieldEnum]


  export const EventCandidateScalarFieldEnum: {
    id: 'id',
    contentId: 'contentId',
    sourceId: 'sourceId',
    name: 'name',
    category: 'category',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    startTime: 'startTime',
    location: 'location',
    venue: 'venue',
    city: 'city',
    province: 'province',
    country: 'country',
    organizer: 'organizer',
    origin: 'origin',
    price: 'price',
    currency: 'currency',
    registrationUrl: 'registrationUrl',
    contact: 'contact',
    sourceUrl: 'sourceUrl',
    imageUrl: 'imageUrl',
    confidence: 'confidence',
    verificationStatus: 'verificationStatus',
    duplicateStatus: 'duplicateStatus',
    duplicateOfId: 'duplicateOfId',
    duplicateReason: 'duplicateReason',
    editorialStatus: 'editorialStatus',
    scheduledFor: 'scheduledFor',
    publishedAt: 'publishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventCandidateScalarFieldEnum = (typeof EventCandidateScalarFieldEnum)[keyof typeof EventCandidateScalarFieldEnum]


  export const EditorialReviewScalarFieldEnum: {
    id: 'id',
    contentId: 'contentId',
    eventCandidateId: 'eventCandidateId',
    reviewerId: 'reviewerId',
    reviewerName: 'reviewerName',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type EditorialReviewScalarFieldEnum = (typeof EditorialReviewScalarFieldEnum)[keyof typeof EditorialReviewScalarFieldEnum]


  export const PublicationScalarFieldEnum: {
    id: 'id',
    contentId: 'contentId',
    eventCandidateId: 'eventCandidateId',
    target: 'target',
    payload: 'payload',
    status: 'status',
    publishedAt: 'publishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PublicationScalarFieldEnum = (typeof PublicationScalarFieldEnum)[keyof typeof PublicationScalarFieldEnum]


  export const CrawlJobScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sourceId: 'sourceId',
    jobType: 'jobType',
    status: 'status',
    attempts: 'attempts',
    maxAttempts: 'maxAttempts',
    backoffMs: 'backoffMs',
    discoveredCount: 'discoveredCount',
    processedCount: 'processedCount',
    logs: 'logs',
    error: 'error',
    startedAt: 'startedAt',
    finishedAt: 'finishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CrawlJobScalarFieldEnum = (typeof CrawlJobScalarFieldEnum)[keyof typeof CrawlJobScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    actorId: 'actorId',
    actorName: 'actorName',
    action: 'action',
    entityType: 'entityType',
    entityId: 'entityId',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'SourceType'
   */
  export type EnumSourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SourceType'>
    


  /**
   * Reference to a field of type 'SourceType[]'
   */
  export type ListEnumSourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SourceType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SourceStatus'
   */
  export type EnumSourceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SourceStatus'>
    


  /**
   * Reference to a field of type 'SourceStatus[]'
   */
  export type ListEnumSourceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SourceStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'RawContentStatus'
   */
  export type EnumRawContentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RawContentStatus'>
    


  /**
   * Reference to a field of type 'RawContentStatus[]'
   */
  export type ListEnumRawContentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RawContentStatus[]'>
    


  /**
   * Reference to a field of type 'IntelligenceContentType'
   */
  export type EnumIntelligenceContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IntelligenceContentType'>
    


  /**
   * Reference to a field of type 'IntelligenceContentType[]'
   */
  export type ListEnumIntelligenceContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IntelligenceContentType[]'>
    


  /**
   * Reference to a field of type 'DuplicateStatus'
   */
  export type EnumDuplicateStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DuplicateStatus'>
    


  /**
   * Reference to a field of type 'DuplicateStatus[]'
   */
  export type ListEnumDuplicateStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DuplicateStatus[]'>
    


  /**
   * Reference to a field of type 'EditorialStatus'
   */
  export type EnumEditorialStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EditorialStatus'>
    


  /**
   * Reference to a field of type 'EditorialStatus[]'
   */
  export type ListEnumEditorialStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EditorialStatus[]'>
    


  /**
   * Reference to a field of type 'EntityType'
   */
  export type EnumEntityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EntityType'>
    


  /**
   * Reference to a field of type 'EntityType[]'
   */
  export type ListEnumEntityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EntityType[]'>
    


  /**
   * Reference to a field of type 'EventOrigin'
   */
  export type EnumEventOriginFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventOrigin'>
    


  /**
   * Reference to a field of type 'EventOrigin[]'
   */
  export type ListEnumEventOriginFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventOrigin[]'>
    


  /**
   * Reference to a field of type 'VerificationStatus'
   */
  export type EnumVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationStatus'>
    


  /**
   * Reference to a field of type 'VerificationStatus[]'
   */
  export type ListEnumVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationStatus[]'>
    


  /**
   * Reference to a field of type 'PublicationTarget'
   */
  export type EnumPublicationTargetFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PublicationTarget'>
    


  /**
   * Reference to a field of type 'PublicationTarget[]'
   */
  export type ListEnumPublicationTargetFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PublicationTarget[]'>
    


  /**
   * Reference to a field of type 'JobStatus'
   */
  export type EnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus'>
    


  /**
   * Reference to a field of type 'JobStatus[]'
   */
  export type ListEnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SourceWhereInput = {
    AND?: SourceWhereInput | SourceWhereInput[]
    OR?: SourceWhereInput[]
    NOT?: SourceWhereInput | SourceWhereInput[]
    id?: StringFilter<"Source"> | string
    name?: StringFilter<"Source"> | string
    url?: StringFilter<"Source"> | string
    sourceType?: EnumSourceTypeFilter<"Source"> | $Enums.SourceType
    country?: StringFilter<"Source"> | string
    province?: StringNullableFilter<"Source"> | string | null
    city?: StringNullableFilter<"Source"> | string | null
    trustScore?: IntFilter<"Source"> | number
    enabled?: BoolFilter<"Source"> | boolean
    scrapingAllowed?: BoolFilter<"Source"> | boolean
    requiresReview?: BoolFilter<"Source"> | boolean
    updateFrequency?: StringFilter<"Source"> | string
    crawlDelayMs?: IntFilter<"Source"> | number
    lastSeenHash?: StringNullableFilter<"Source"> | string | null
    contentSelector?: StringNullableFilter<"Source"> | string | null
    titleSelector?: StringNullableFilter<"Source"> | string | null
    robotsPolicy?: StringNullableFilter<"Source"> | string | null
    notes?: StringNullableFilter<"Source"> | string | null
    lastCheckedAt?: DateTimeNullableFilter<"Source"> | Date | string | null
    lastSuccessfulCheckAt?: DateTimeNullableFilter<"Source"> | Date | string | null
    status?: EnumSourceStatusFilter<"Source"> | $Enums.SourceStatus
    createdAt?: DateTimeFilter<"Source"> | Date | string
    updatedAt?: DateTimeFilter<"Source"> | Date | string
    rawContents?: RawContentListRelationFilter
    eventCandidates?: EventCandidateListRelationFilter
  }

  export type SourceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    sourceType?: SortOrder
    country?: SortOrder
    province?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    trustScore?: SortOrder
    enabled?: SortOrder
    scrapingAllowed?: SortOrder
    requiresReview?: SortOrder
    updateFrequency?: SortOrder
    crawlDelayMs?: SortOrder
    lastSeenHash?: SortOrderInput | SortOrder
    contentSelector?: SortOrderInput | SortOrder
    titleSelector?: SortOrderInput | SortOrder
    robotsPolicy?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    lastCheckedAt?: SortOrderInput | SortOrder
    lastSuccessfulCheckAt?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rawContents?: RawContentOrderByRelationAggregateInput
    eventCandidates?: EventCandidateOrderByRelationAggregateInput
  }

  export type SourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SourceWhereInput | SourceWhereInput[]
    OR?: SourceWhereInput[]
    NOT?: SourceWhereInput | SourceWhereInput[]
    name?: StringFilter<"Source"> | string
    url?: StringFilter<"Source"> | string
    sourceType?: EnumSourceTypeFilter<"Source"> | $Enums.SourceType
    country?: StringFilter<"Source"> | string
    province?: StringNullableFilter<"Source"> | string | null
    city?: StringNullableFilter<"Source"> | string | null
    trustScore?: IntFilter<"Source"> | number
    enabled?: BoolFilter<"Source"> | boolean
    scrapingAllowed?: BoolFilter<"Source"> | boolean
    requiresReview?: BoolFilter<"Source"> | boolean
    updateFrequency?: StringFilter<"Source"> | string
    crawlDelayMs?: IntFilter<"Source"> | number
    lastSeenHash?: StringNullableFilter<"Source"> | string | null
    contentSelector?: StringNullableFilter<"Source"> | string | null
    titleSelector?: StringNullableFilter<"Source"> | string | null
    robotsPolicy?: StringNullableFilter<"Source"> | string | null
    notes?: StringNullableFilter<"Source"> | string | null
    lastCheckedAt?: DateTimeNullableFilter<"Source"> | Date | string | null
    lastSuccessfulCheckAt?: DateTimeNullableFilter<"Source"> | Date | string | null
    status?: EnumSourceStatusFilter<"Source"> | $Enums.SourceStatus
    createdAt?: DateTimeFilter<"Source"> | Date | string
    updatedAt?: DateTimeFilter<"Source"> | Date | string
    rawContents?: RawContentListRelationFilter
    eventCandidates?: EventCandidateListRelationFilter
  }, "id">

  export type SourceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    sourceType?: SortOrder
    country?: SortOrder
    province?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    trustScore?: SortOrder
    enabled?: SortOrder
    scrapingAllowed?: SortOrder
    requiresReview?: SortOrder
    updateFrequency?: SortOrder
    crawlDelayMs?: SortOrder
    lastSeenHash?: SortOrderInput | SortOrder
    contentSelector?: SortOrderInput | SortOrder
    titleSelector?: SortOrderInput | SortOrder
    robotsPolicy?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    lastCheckedAt?: SortOrderInput | SortOrder
    lastSuccessfulCheckAt?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SourceCountOrderByAggregateInput
    _avg?: SourceAvgOrderByAggregateInput
    _max?: SourceMaxOrderByAggregateInput
    _min?: SourceMinOrderByAggregateInput
    _sum?: SourceSumOrderByAggregateInput
  }

  export type SourceScalarWhereWithAggregatesInput = {
    AND?: SourceScalarWhereWithAggregatesInput | SourceScalarWhereWithAggregatesInput[]
    OR?: SourceScalarWhereWithAggregatesInput[]
    NOT?: SourceScalarWhereWithAggregatesInput | SourceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Source"> | string
    name?: StringWithAggregatesFilter<"Source"> | string
    url?: StringWithAggregatesFilter<"Source"> | string
    sourceType?: EnumSourceTypeWithAggregatesFilter<"Source"> | $Enums.SourceType
    country?: StringWithAggregatesFilter<"Source"> | string
    province?: StringNullableWithAggregatesFilter<"Source"> | string | null
    city?: StringNullableWithAggregatesFilter<"Source"> | string | null
    trustScore?: IntWithAggregatesFilter<"Source"> | number
    enabled?: BoolWithAggregatesFilter<"Source"> | boolean
    scrapingAllowed?: BoolWithAggregatesFilter<"Source"> | boolean
    requiresReview?: BoolWithAggregatesFilter<"Source"> | boolean
    updateFrequency?: StringWithAggregatesFilter<"Source"> | string
    crawlDelayMs?: IntWithAggregatesFilter<"Source"> | number
    lastSeenHash?: StringNullableWithAggregatesFilter<"Source"> | string | null
    contentSelector?: StringNullableWithAggregatesFilter<"Source"> | string | null
    titleSelector?: StringNullableWithAggregatesFilter<"Source"> | string | null
    robotsPolicy?: StringNullableWithAggregatesFilter<"Source"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Source"> | string | null
    lastCheckedAt?: DateTimeNullableWithAggregatesFilter<"Source"> | Date | string | null
    lastSuccessfulCheckAt?: DateTimeNullableWithAggregatesFilter<"Source"> | Date | string | null
    status?: EnumSourceStatusWithAggregatesFilter<"Source"> | $Enums.SourceStatus
    createdAt?: DateTimeWithAggregatesFilter<"Source"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Source"> | Date | string
  }

  export type RawContentWhereInput = {
    AND?: RawContentWhereInput | RawContentWhereInput[]
    OR?: RawContentWhereInput[]
    NOT?: RawContentWhereInput | RawContentWhereInput[]
    id?: StringFilter<"RawContent"> | string
    sourceId?: StringFilter<"RawContent"> | string
    externalId?: StringNullableFilter<"RawContent"> | string | null
    canonicalUrl?: StringNullableFilter<"RawContent"> | string | null
    title?: StringFilter<"RawContent"> | string
    rawText?: StringFilter<"RawContent"> | string
    rawHtml?: StringNullableFilter<"RawContent"> | string | null
    author?: StringNullableFilter<"RawContent"> | string | null
    publishedAt?: DateTimeNullableFilter<"RawContent"> | Date | string | null
    discoveredAt?: DateTimeFilter<"RawContent"> | Date | string
    fetchedAt?: DateTimeFilter<"RawContent"> | Date | string
    contentHash?: StringFilter<"RawContent"> | string
    metadata?: JsonNullableFilter<"RawContent">
    status?: EnumRawContentStatusFilter<"RawContent"> | $Enums.RawContentStatus
    source?: XOR<SourceScalarRelationFilter, SourceWhereInput>
    content?: XOR<ContentNullableScalarRelationFilter, ContentWhereInput> | null
  }

  export type RawContentOrderByWithRelationInput = {
    id?: SortOrder
    sourceId?: SortOrder
    externalId?: SortOrderInput | SortOrder
    canonicalUrl?: SortOrderInput | SortOrder
    title?: SortOrder
    rawText?: SortOrder
    rawHtml?: SortOrderInput | SortOrder
    author?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    discoveredAt?: SortOrder
    fetchedAt?: SortOrder
    contentHash?: SortOrder
    metadata?: SortOrderInput | SortOrder
    status?: SortOrder
    source?: SourceOrderByWithRelationInput
    content?: ContentOrderByWithRelationInput
  }

  export type RawContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    contentHash?: string
    sourceId_externalId?: RawContentSourceIdExternalIdCompoundUniqueInput
    AND?: RawContentWhereInput | RawContentWhereInput[]
    OR?: RawContentWhereInput[]
    NOT?: RawContentWhereInput | RawContentWhereInput[]
    sourceId?: StringFilter<"RawContent"> | string
    externalId?: StringNullableFilter<"RawContent"> | string | null
    canonicalUrl?: StringNullableFilter<"RawContent"> | string | null
    title?: StringFilter<"RawContent"> | string
    rawText?: StringFilter<"RawContent"> | string
    rawHtml?: StringNullableFilter<"RawContent"> | string | null
    author?: StringNullableFilter<"RawContent"> | string | null
    publishedAt?: DateTimeNullableFilter<"RawContent"> | Date | string | null
    discoveredAt?: DateTimeFilter<"RawContent"> | Date | string
    fetchedAt?: DateTimeFilter<"RawContent"> | Date | string
    metadata?: JsonNullableFilter<"RawContent">
    status?: EnumRawContentStatusFilter<"RawContent"> | $Enums.RawContentStatus
    source?: XOR<SourceScalarRelationFilter, SourceWhereInput>
    content?: XOR<ContentNullableScalarRelationFilter, ContentWhereInput> | null
  }, "id" | "sourceId_externalId" | "contentHash">

  export type RawContentOrderByWithAggregationInput = {
    id?: SortOrder
    sourceId?: SortOrder
    externalId?: SortOrderInput | SortOrder
    canonicalUrl?: SortOrderInput | SortOrder
    title?: SortOrder
    rawText?: SortOrder
    rawHtml?: SortOrderInput | SortOrder
    author?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    discoveredAt?: SortOrder
    fetchedAt?: SortOrder
    contentHash?: SortOrder
    metadata?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: RawContentCountOrderByAggregateInput
    _max?: RawContentMaxOrderByAggregateInput
    _min?: RawContentMinOrderByAggregateInput
  }

  export type RawContentScalarWhereWithAggregatesInput = {
    AND?: RawContentScalarWhereWithAggregatesInput | RawContentScalarWhereWithAggregatesInput[]
    OR?: RawContentScalarWhereWithAggregatesInput[]
    NOT?: RawContentScalarWhereWithAggregatesInput | RawContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RawContent"> | string
    sourceId?: StringWithAggregatesFilter<"RawContent"> | string
    externalId?: StringNullableWithAggregatesFilter<"RawContent"> | string | null
    canonicalUrl?: StringNullableWithAggregatesFilter<"RawContent"> | string | null
    title?: StringWithAggregatesFilter<"RawContent"> | string
    rawText?: StringWithAggregatesFilter<"RawContent"> | string
    rawHtml?: StringNullableWithAggregatesFilter<"RawContent"> | string | null
    author?: StringNullableWithAggregatesFilter<"RawContent"> | string | null
    publishedAt?: DateTimeNullableWithAggregatesFilter<"RawContent"> | Date | string | null
    discoveredAt?: DateTimeWithAggregatesFilter<"RawContent"> | Date | string
    fetchedAt?: DateTimeWithAggregatesFilter<"RawContent"> | Date | string
    contentHash?: StringWithAggregatesFilter<"RawContent"> | string
    metadata?: JsonNullableWithAggregatesFilter<"RawContent">
    status?: EnumRawContentStatusWithAggregatesFilter<"RawContent"> | $Enums.RawContentStatus
  }

  export type ContentWhereInput = {
    AND?: ContentWhereInput | ContentWhereInput[]
    OR?: ContentWhereInput[]
    NOT?: ContentWhereInput | ContentWhereInput[]
    id?: StringFilter<"Content"> | string
    rawContentId?: StringFilter<"Content"> | string
    title?: StringFilter<"Content"> | string
    slug?: StringFilter<"Content"> | string
    cleanText?: StringFilter<"Content"> | string
    summary?: StringNullableFilter<"Content"> | string | null
    contentType?: EnumIntelligenceContentTypeFilter<"Content"> | $Enums.IntelligenceContentType
    category?: StringNullableFilter<"Content"> | string | null
    country?: StringFilter<"Content"> | string
    province?: StringNullableFilter<"Content"> | string | null
    city?: StringNullableFilter<"Content"> | string | null
    confidence?: IntFilter<"Content"> | number
    fitnessScore?: IntFilter<"Content"> | number
    angolaScore?: IntFilter<"Content"> | number
    relevanceScore?: IntFilter<"Content"> | number
    trustScore?: IntFilter<"Content"> | number
    duplicateStatus?: EnumDuplicateStatusFilter<"Content"> | $Enums.DuplicateStatus
    duplicateOfId?: StringNullableFilter<"Content"> | string | null
    duplicateReason?: StringNullableFilter<"Content"> | string | null
    editorialStatus?: EnumEditorialStatusFilter<"Content"> | $Enums.EditorialStatus
    draft?: JsonNullableFilter<"Content">
    socialDraft?: JsonNullableFilter<"Content">
    scoreExplanation?: JsonNullableFilter<"Content">
    scheduledFor?: DateTimeNullableFilter<"Content"> | Date | string | null
    publishedAt?: DateTimeNullableFilter<"Content"> | Date | string | null
    createdAt?: DateTimeFilter<"Content"> | Date | string
    updatedAt?: DateTimeFilter<"Content"> | Date | string
    rawContent?: XOR<RawContentScalarRelationFilter, RawContentWhereInput>
    entities?: ContentEntityListRelationFilter
    eventCandidate?: XOR<EventCandidateNullableScalarRelationFilter, EventCandidateWhereInput> | null
    reviews?: EditorialReviewListRelationFilter
    publications?: PublicationListRelationFilter
  }

  export type ContentOrderByWithRelationInput = {
    id?: SortOrder
    rawContentId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    cleanText?: SortOrder
    summary?: SortOrderInput | SortOrder
    contentType?: SortOrder
    category?: SortOrderInput | SortOrder
    country?: SortOrder
    province?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    confidence?: SortOrder
    fitnessScore?: SortOrder
    angolaScore?: SortOrder
    relevanceScore?: SortOrder
    trustScore?: SortOrder
    duplicateStatus?: SortOrder
    duplicateOfId?: SortOrderInput | SortOrder
    duplicateReason?: SortOrderInput | SortOrder
    editorialStatus?: SortOrder
    draft?: SortOrderInput | SortOrder
    socialDraft?: SortOrderInput | SortOrder
    scoreExplanation?: SortOrderInput | SortOrder
    scheduledFor?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rawContent?: RawContentOrderByWithRelationInput
    entities?: ContentEntityOrderByRelationAggregateInput
    eventCandidate?: EventCandidateOrderByWithRelationInput
    reviews?: EditorialReviewOrderByRelationAggregateInput
    publications?: PublicationOrderByRelationAggregateInput
  }

  export type ContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    rawContentId?: string
    AND?: ContentWhereInput | ContentWhereInput[]
    OR?: ContentWhereInput[]
    NOT?: ContentWhereInput | ContentWhereInput[]
    title?: StringFilter<"Content"> | string
    slug?: StringFilter<"Content"> | string
    cleanText?: StringFilter<"Content"> | string
    summary?: StringNullableFilter<"Content"> | string | null
    contentType?: EnumIntelligenceContentTypeFilter<"Content"> | $Enums.IntelligenceContentType
    category?: StringNullableFilter<"Content"> | string | null
    country?: StringFilter<"Content"> | string
    province?: StringNullableFilter<"Content"> | string | null
    city?: StringNullableFilter<"Content"> | string | null
    confidence?: IntFilter<"Content"> | number
    fitnessScore?: IntFilter<"Content"> | number
    angolaScore?: IntFilter<"Content"> | number
    relevanceScore?: IntFilter<"Content"> | number
    trustScore?: IntFilter<"Content"> | number
    duplicateStatus?: EnumDuplicateStatusFilter<"Content"> | $Enums.DuplicateStatus
    duplicateOfId?: StringNullableFilter<"Content"> | string | null
    duplicateReason?: StringNullableFilter<"Content"> | string | null
    editorialStatus?: EnumEditorialStatusFilter<"Content"> | $Enums.EditorialStatus
    draft?: JsonNullableFilter<"Content">
    socialDraft?: JsonNullableFilter<"Content">
    scoreExplanation?: JsonNullableFilter<"Content">
    scheduledFor?: DateTimeNullableFilter<"Content"> | Date | string | null
    publishedAt?: DateTimeNullableFilter<"Content"> | Date | string | null
    createdAt?: DateTimeFilter<"Content"> | Date | string
    updatedAt?: DateTimeFilter<"Content"> | Date | string
    rawContent?: XOR<RawContentScalarRelationFilter, RawContentWhereInput>
    entities?: ContentEntityListRelationFilter
    eventCandidate?: XOR<EventCandidateNullableScalarRelationFilter, EventCandidateWhereInput> | null
    reviews?: EditorialReviewListRelationFilter
    publications?: PublicationListRelationFilter
  }, "id" | "rawContentId">

  export type ContentOrderByWithAggregationInput = {
    id?: SortOrder
    rawContentId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    cleanText?: SortOrder
    summary?: SortOrderInput | SortOrder
    contentType?: SortOrder
    category?: SortOrderInput | SortOrder
    country?: SortOrder
    province?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    confidence?: SortOrder
    fitnessScore?: SortOrder
    angolaScore?: SortOrder
    relevanceScore?: SortOrder
    trustScore?: SortOrder
    duplicateStatus?: SortOrder
    duplicateOfId?: SortOrderInput | SortOrder
    duplicateReason?: SortOrderInput | SortOrder
    editorialStatus?: SortOrder
    draft?: SortOrderInput | SortOrder
    socialDraft?: SortOrderInput | SortOrder
    scoreExplanation?: SortOrderInput | SortOrder
    scheduledFor?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContentCountOrderByAggregateInput
    _avg?: ContentAvgOrderByAggregateInput
    _max?: ContentMaxOrderByAggregateInput
    _min?: ContentMinOrderByAggregateInput
    _sum?: ContentSumOrderByAggregateInput
  }

  export type ContentScalarWhereWithAggregatesInput = {
    AND?: ContentScalarWhereWithAggregatesInput | ContentScalarWhereWithAggregatesInput[]
    OR?: ContentScalarWhereWithAggregatesInput[]
    NOT?: ContentScalarWhereWithAggregatesInput | ContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Content"> | string
    rawContentId?: StringWithAggregatesFilter<"Content"> | string
    title?: StringWithAggregatesFilter<"Content"> | string
    slug?: StringWithAggregatesFilter<"Content"> | string
    cleanText?: StringWithAggregatesFilter<"Content"> | string
    summary?: StringNullableWithAggregatesFilter<"Content"> | string | null
    contentType?: EnumIntelligenceContentTypeWithAggregatesFilter<"Content"> | $Enums.IntelligenceContentType
    category?: StringNullableWithAggregatesFilter<"Content"> | string | null
    country?: StringWithAggregatesFilter<"Content"> | string
    province?: StringNullableWithAggregatesFilter<"Content"> | string | null
    city?: StringNullableWithAggregatesFilter<"Content"> | string | null
    confidence?: IntWithAggregatesFilter<"Content"> | number
    fitnessScore?: IntWithAggregatesFilter<"Content"> | number
    angolaScore?: IntWithAggregatesFilter<"Content"> | number
    relevanceScore?: IntWithAggregatesFilter<"Content"> | number
    trustScore?: IntWithAggregatesFilter<"Content"> | number
    duplicateStatus?: EnumDuplicateStatusWithAggregatesFilter<"Content"> | $Enums.DuplicateStatus
    duplicateOfId?: StringNullableWithAggregatesFilter<"Content"> | string | null
    duplicateReason?: StringNullableWithAggregatesFilter<"Content"> | string | null
    editorialStatus?: EnumEditorialStatusWithAggregatesFilter<"Content"> | $Enums.EditorialStatus
    draft?: JsonNullableWithAggregatesFilter<"Content">
    socialDraft?: JsonNullableWithAggregatesFilter<"Content">
    scoreExplanation?: JsonNullableWithAggregatesFilter<"Content">
    scheduledFor?: DateTimeNullableWithAggregatesFilter<"Content"> | Date | string | null
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Content"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Content"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Content"> | Date | string
  }

  export type EntityWhereInput = {
    AND?: EntityWhereInput | EntityWhereInput[]
    OR?: EntityWhereInput[]
    NOT?: EntityWhereInput | EntityWhereInput[]
    id?: StringFilter<"Entity"> | string
    name?: StringFilter<"Entity"> | string
    entityType?: EnumEntityTypeFilter<"Entity"> | $Enums.EntityType
    country?: StringFilter<"Entity"> | string
    province?: StringNullableFilter<"Entity"> | string | null
    city?: StringNullableFilter<"Entity"> | string | null
    metadata?: JsonNullableFilter<"Entity">
    createdAt?: DateTimeFilter<"Entity"> | Date | string
    updatedAt?: DateTimeFilter<"Entity"> | Date | string
    contents?: ContentEntityListRelationFilter
  }

  export type EntityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    entityType?: SortOrder
    country?: SortOrder
    province?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contents?: ContentEntityOrderByRelationAggregateInput
  }

  export type EntityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_entityType_country?: EntityNameEntityTypeCountryCompoundUniqueInput
    AND?: EntityWhereInput | EntityWhereInput[]
    OR?: EntityWhereInput[]
    NOT?: EntityWhereInput | EntityWhereInput[]
    name?: StringFilter<"Entity"> | string
    entityType?: EnumEntityTypeFilter<"Entity"> | $Enums.EntityType
    country?: StringFilter<"Entity"> | string
    province?: StringNullableFilter<"Entity"> | string | null
    city?: StringNullableFilter<"Entity"> | string | null
    metadata?: JsonNullableFilter<"Entity">
    createdAt?: DateTimeFilter<"Entity"> | Date | string
    updatedAt?: DateTimeFilter<"Entity"> | Date | string
    contents?: ContentEntityListRelationFilter
  }, "id" | "name_entityType_country">

  export type EntityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    entityType?: SortOrder
    country?: SortOrder
    province?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EntityCountOrderByAggregateInput
    _max?: EntityMaxOrderByAggregateInput
    _min?: EntityMinOrderByAggregateInput
  }

  export type EntityScalarWhereWithAggregatesInput = {
    AND?: EntityScalarWhereWithAggregatesInput | EntityScalarWhereWithAggregatesInput[]
    OR?: EntityScalarWhereWithAggregatesInput[]
    NOT?: EntityScalarWhereWithAggregatesInput | EntityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Entity"> | string
    name?: StringWithAggregatesFilter<"Entity"> | string
    entityType?: EnumEntityTypeWithAggregatesFilter<"Entity"> | $Enums.EntityType
    country?: StringWithAggregatesFilter<"Entity"> | string
    province?: StringNullableWithAggregatesFilter<"Entity"> | string | null
    city?: StringNullableWithAggregatesFilter<"Entity"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Entity">
    createdAt?: DateTimeWithAggregatesFilter<"Entity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Entity"> | Date | string
  }

  export type ContentEntityWhereInput = {
    AND?: ContentEntityWhereInput | ContentEntityWhereInput[]
    OR?: ContentEntityWhereInput[]
    NOT?: ContentEntityWhereInput | ContentEntityWhereInput[]
    contentId?: StringFilter<"ContentEntity"> | string
    entityId?: StringFilter<"ContentEntity"> | string
    confidence?: IntFilter<"ContentEntity"> | number
    role?: StringNullableFilter<"ContentEntity"> | string | null
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
    entity?: XOR<EntityScalarRelationFilter, EntityWhereInput>
  }

  export type ContentEntityOrderByWithRelationInput = {
    contentId?: SortOrder
    entityId?: SortOrder
    confidence?: SortOrder
    role?: SortOrderInput | SortOrder
    content?: ContentOrderByWithRelationInput
    entity?: EntityOrderByWithRelationInput
  }

  export type ContentEntityWhereUniqueInput = Prisma.AtLeast<{
    contentId_entityId?: ContentEntityContentIdEntityIdCompoundUniqueInput
    AND?: ContentEntityWhereInput | ContentEntityWhereInput[]
    OR?: ContentEntityWhereInput[]
    NOT?: ContentEntityWhereInput | ContentEntityWhereInput[]
    contentId?: StringFilter<"ContentEntity"> | string
    entityId?: StringFilter<"ContentEntity"> | string
    confidence?: IntFilter<"ContentEntity"> | number
    role?: StringNullableFilter<"ContentEntity"> | string | null
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
    entity?: XOR<EntityScalarRelationFilter, EntityWhereInput>
  }, "contentId_entityId">

  export type ContentEntityOrderByWithAggregationInput = {
    contentId?: SortOrder
    entityId?: SortOrder
    confidence?: SortOrder
    role?: SortOrderInput | SortOrder
    _count?: ContentEntityCountOrderByAggregateInput
    _avg?: ContentEntityAvgOrderByAggregateInput
    _max?: ContentEntityMaxOrderByAggregateInput
    _min?: ContentEntityMinOrderByAggregateInput
    _sum?: ContentEntitySumOrderByAggregateInput
  }

  export type ContentEntityScalarWhereWithAggregatesInput = {
    AND?: ContentEntityScalarWhereWithAggregatesInput | ContentEntityScalarWhereWithAggregatesInput[]
    OR?: ContentEntityScalarWhereWithAggregatesInput[]
    NOT?: ContentEntityScalarWhereWithAggregatesInput | ContentEntityScalarWhereWithAggregatesInput[]
    contentId?: StringWithAggregatesFilter<"ContentEntity"> | string
    entityId?: StringWithAggregatesFilter<"ContentEntity"> | string
    confidence?: IntWithAggregatesFilter<"ContentEntity"> | number
    role?: StringNullableWithAggregatesFilter<"ContentEntity"> | string | null
  }

  export type EventCandidateWhereInput = {
    AND?: EventCandidateWhereInput | EventCandidateWhereInput[]
    OR?: EventCandidateWhereInput[]
    NOT?: EventCandidateWhereInput | EventCandidateWhereInput[]
    id?: StringFilter<"EventCandidate"> | string
    contentId?: StringNullableFilter<"EventCandidate"> | string | null
    sourceId?: StringNullableFilter<"EventCandidate"> | string | null
    name?: StringFilter<"EventCandidate"> | string
    category?: StringNullableFilter<"EventCandidate"> | string | null
    description?: StringNullableFilter<"EventCandidate"> | string | null
    startDate?: DateTimeNullableFilter<"EventCandidate"> | Date | string | null
    endDate?: DateTimeNullableFilter<"EventCandidate"> | Date | string | null
    startTime?: StringNullableFilter<"EventCandidate"> | string | null
    location?: StringNullableFilter<"EventCandidate"> | string | null
    venue?: StringNullableFilter<"EventCandidate"> | string | null
    city?: StringNullableFilter<"EventCandidate"> | string | null
    province?: StringNullableFilter<"EventCandidate"> | string | null
    country?: StringFilter<"EventCandidate"> | string
    organizer?: StringNullableFilter<"EventCandidate"> | string | null
    origin?: EnumEventOriginFilter<"EventCandidate"> | $Enums.EventOrigin
    price?: StringNullableFilter<"EventCandidate"> | string | null
    currency?: StringFilter<"EventCandidate"> | string
    registrationUrl?: StringNullableFilter<"EventCandidate"> | string | null
    contact?: StringNullableFilter<"EventCandidate"> | string | null
    sourceUrl?: StringNullableFilter<"EventCandidate"> | string | null
    imageUrl?: StringNullableFilter<"EventCandidate"> | string | null
    confidence?: IntFilter<"EventCandidate"> | number
    verificationStatus?: EnumVerificationStatusFilter<"EventCandidate"> | $Enums.VerificationStatus
    duplicateStatus?: EnumDuplicateStatusFilter<"EventCandidate"> | $Enums.DuplicateStatus
    duplicateOfId?: StringNullableFilter<"EventCandidate"> | string | null
    duplicateReason?: StringNullableFilter<"EventCandidate"> | string | null
    editorialStatus?: EnumEditorialStatusFilter<"EventCandidate"> | $Enums.EditorialStatus
    scheduledFor?: DateTimeNullableFilter<"EventCandidate"> | Date | string | null
    publishedAt?: DateTimeNullableFilter<"EventCandidate"> | Date | string | null
    createdAt?: DateTimeFilter<"EventCandidate"> | Date | string
    updatedAt?: DateTimeFilter<"EventCandidate"> | Date | string
    content?: XOR<ContentNullableScalarRelationFilter, ContentWhereInput> | null
    source?: XOR<SourceNullableScalarRelationFilter, SourceWhereInput> | null
    reviews?: EditorialReviewListRelationFilter
    publications?: PublicationListRelationFilter
  }

  export type EventCandidateOrderByWithRelationInput = {
    id?: SortOrder
    contentId?: SortOrderInput | SortOrder
    sourceId?: SortOrderInput | SortOrder
    name?: SortOrder
    category?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    startTime?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    venue?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    country?: SortOrder
    organizer?: SortOrderInput | SortOrder
    origin?: SortOrder
    price?: SortOrderInput | SortOrder
    currency?: SortOrder
    registrationUrl?: SortOrderInput | SortOrder
    contact?: SortOrderInput | SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    confidence?: SortOrder
    verificationStatus?: SortOrder
    duplicateStatus?: SortOrder
    duplicateOfId?: SortOrderInput | SortOrder
    duplicateReason?: SortOrderInput | SortOrder
    editorialStatus?: SortOrder
    scheduledFor?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: ContentOrderByWithRelationInput
    source?: SourceOrderByWithRelationInput
    reviews?: EditorialReviewOrderByRelationAggregateInput
    publications?: PublicationOrderByRelationAggregateInput
  }

  export type EventCandidateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    contentId?: string
    AND?: EventCandidateWhereInput | EventCandidateWhereInput[]
    OR?: EventCandidateWhereInput[]
    NOT?: EventCandidateWhereInput | EventCandidateWhereInput[]
    sourceId?: StringNullableFilter<"EventCandidate"> | string | null
    name?: StringFilter<"EventCandidate"> | string
    category?: StringNullableFilter<"EventCandidate"> | string | null
    description?: StringNullableFilter<"EventCandidate"> | string | null
    startDate?: DateTimeNullableFilter<"EventCandidate"> | Date | string | null
    endDate?: DateTimeNullableFilter<"EventCandidate"> | Date | string | null
    startTime?: StringNullableFilter<"EventCandidate"> | string | null
    location?: StringNullableFilter<"EventCandidate"> | string | null
    venue?: StringNullableFilter<"EventCandidate"> | string | null
    city?: StringNullableFilter<"EventCandidate"> | string | null
    province?: StringNullableFilter<"EventCandidate"> | string | null
    country?: StringFilter<"EventCandidate"> | string
    organizer?: StringNullableFilter<"EventCandidate"> | string | null
    origin?: EnumEventOriginFilter<"EventCandidate"> | $Enums.EventOrigin
    price?: StringNullableFilter<"EventCandidate"> | string | null
    currency?: StringFilter<"EventCandidate"> | string
    registrationUrl?: StringNullableFilter<"EventCandidate"> | string | null
    contact?: StringNullableFilter<"EventCandidate"> | string | null
    sourceUrl?: StringNullableFilter<"EventCandidate"> | string | null
    imageUrl?: StringNullableFilter<"EventCandidate"> | string | null
    confidence?: IntFilter<"EventCandidate"> | number
    verificationStatus?: EnumVerificationStatusFilter<"EventCandidate"> | $Enums.VerificationStatus
    duplicateStatus?: EnumDuplicateStatusFilter<"EventCandidate"> | $Enums.DuplicateStatus
    duplicateOfId?: StringNullableFilter<"EventCandidate"> | string | null
    duplicateReason?: StringNullableFilter<"EventCandidate"> | string | null
    editorialStatus?: EnumEditorialStatusFilter<"EventCandidate"> | $Enums.EditorialStatus
    scheduledFor?: DateTimeNullableFilter<"EventCandidate"> | Date | string | null
    publishedAt?: DateTimeNullableFilter<"EventCandidate"> | Date | string | null
    createdAt?: DateTimeFilter<"EventCandidate"> | Date | string
    updatedAt?: DateTimeFilter<"EventCandidate"> | Date | string
    content?: XOR<ContentNullableScalarRelationFilter, ContentWhereInput> | null
    source?: XOR<SourceNullableScalarRelationFilter, SourceWhereInput> | null
    reviews?: EditorialReviewListRelationFilter
    publications?: PublicationListRelationFilter
  }, "id" | "contentId">

  export type EventCandidateOrderByWithAggregationInput = {
    id?: SortOrder
    contentId?: SortOrderInput | SortOrder
    sourceId?: SortOrderInput | SortOrder
    name?: SortOrder
    category?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    startTime?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    venue?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    country?: SortOrder
    organizer?: SortOrderInput | SortOrder
    origin?: SortOrder
    price?: SortOrderInput | SortOrder
    currency?: SortOrder
    registrationUrl?: SortOrderInput | SortOrder
    contact?: SortOrderInput | SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    confidence?: SortOrder
    verificationStatus?: SortOrder
    duplicateStatus?: SortOrder
    duplicateOfId?: SortOrderInput | SortOrder
    duplicateReason?: SortOrderInput | SortOrder
    editorialStatus?: SortOrder
    scheduledFor?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCandidateCountOrderByAggregateInput
    _avg?: EventCandidateAvgOrderByAggregateInput
    _max?: EventCandidateMaxOrderByAggregateInput
    _min?: EventCandidateMinOrderByAggregateInput
    _sum?: EventCandidateSumOrderByAggregateInput
  }

  export type EventCandidateScalarWhereWithAggregatesInput = {
    AND?: EventCandidateScalarWhereWithAggregatesInput | EventCandidateScalarWhereWithAggregatesInput[]
    OR?: EventCandidateScalarWhereWithAggregatesInput[]
    NOT?: EventCandidateScalarWhereWithAggregatesInput | EventCandidateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventCandidate"> | string
    contentId?: StringNullableWithAggregatesFilter<"EventCandidate"> | string | null
    sourceId?: StringNullableWithAggregatesFilter<"EventCandidate"> | string | null
    name?: StringWithAggregatesFilter<"EventCandidate"> | string
    category?: StringNullableWithAggregatesFilter<"EventCandidate"> | string | null
    description?: StringNullableWithAggregatesFilter<"EventCandidate"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"EventCandidate"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"EventCandidate"> | Date | string | null
    startTime?: StringNullableWithAggregatesFilter<"EventCandidate"> | string | null
    location?: StringNullableWithAggregatesFilter<"EventCandidate"> | string | null
    venue?: StringNullableWithAggregatesFilter<"EventCandidate"> | string | null
    city?: StringNullableWithAggregatesFilter<"EventCandidate"> | string | null
    province?: StringNullableWithAggregatesFilter<"EventCandidate"> | string | null
    country?: StringWithAggregatesFilter<"EventCandidate"> | string
    organizer?: StringNullableWithAggregatesFilter<"EventCandidate"> | string | null
    origin?: EnumEventOriginWithAggregatesFilter<"EventCandidate"> | $Enums.EventOrigin
    price?: StringNullableWithAggregatesFilter<"EventCandidate"> | string | null
    currency?: StringWithAggregatesFilter<"EventCandidate"> | string
    registrationUrl?: StringNullableWithAggregatesFilter<"EventCandidate"> | string | null
    contact?: StringNullableWithAggregatesFilter<"EventCandidate"> | string | null
    sourceUrl?: StringNullableWithAggregatesFilter<"EventCandidate"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"EventCandidate"> | string | null
    confidence?: IntWithAggregatesFilter<"EventCandidate"> | number
    verificationStatus?: EnumVerificationStatusWithAggregatesFilter<"EventCandidate"> | $Enums.VerificationStatus
    duplicateStatus?: EnumDuplicateStatusWithAggregatesFilter<"EventCandidate"> | $Enums.DuplicateStatus
    duplicateOfId?: StringNullableWithAggregatesFilter<"EventCandidate"> | string | null
    duplicateReason?: StringNullableWithAggregatesFilter<"EventCandidate"> | string | null
    editorialStatus?: EnumEditorialStatusWithAggregatesFilter<"EventCandidate"> | $Enums.EditorialStatus
    scheduledFor?: DateTimeNullableWithAggregatesFilter<"EventCandidate"> | Date | string | null
    publishedAt?: DateTimeNullableWithAggregatesFilter<"EventCandidate"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EventCandidate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EventCandidate"> | Date | string
  }

  export type EditorialReviewWhereInput = {
    AND?: EditorialReviewWhereInput | EditorialReviewWhereInput[]
    OR?: EditorialReviewWhereInput[]
    NOT?: EditorialReviewWhereInput | EditorialReviewWhereInput[]
    id?: StringFilter<"EditorialReview"> | string
    contentId?: StringNullableFilter<"EditorialReview"> | string | null
    eventCandidateId?: StringNullableFilter<"EditorialReview"> | string | null
    reviewerId?: StringNullableFilter<"EditorialReview"> | string | null
    reviewerName?: StringNullableFilter<"EditorialReview"> | string | null
    status?: EnumEditorialStatusFilter<"EditorialReview"> | $Enums.EditorialStatus
    notes?: StringNullableFilter<"EditorialReview"> | string | null
    createdAt?: DateTimeFilter<"EditorialReview"> | Date | string
    content?: XOR<ContentNullableScalarRelationFilter, ContentWhereInput> | null
    eventCandidate?: XOR<EventCandidateNullableScalarRelationFilter, EventCandidateWhereInput> | null
  }

  export type EditorialReviewOrderByWithRelationInput = {
    id?: SortOrder
    contentId?: SortOrderInput | SortOrder
    eventCandidateId?: SortOrderInput | SortOrder
    reviewerId?: SortOrderInput | SortOrder
    reviewerName?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    content?: ContentOrderByWithRelationInput
    eventCandidate?: EventCandidateOrderByWithRelationInput
  }

  export type EditorialReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EditorialReviewWhereInput | EditorialReviewWhereInput[]
    OR?: EditorialReviewWhereInput[]
    NOT?: EditorialReviewWhereInput | EditorialReviewWhereInput[]
    contentId?: StringNullableFilter<"EditorialReview"> | string | null
    eventCandidateId?: StringNullableFilter<"EditorialReview"> | string | null
    reviewerId?: StringNullableFilter<"EditorialReview"> | string | null
    reviewerName?: StringNullableFilter<"EditorialReview"> | string | null
    status?: EnumEditorialStatusFilter<"EditorialReview"> | $Enums.EditorialStatus
    notes?: StringNullableFilter<"EditorialReview"> | string | null
    createdAt?: DateTimeFilter<"EditorialReview"> | Date | string
    content?: XOR<ContentNullableScalarRelationFilter, ContentWhereInput> | null
    eventCandidate?: XOR<EventCandidateNullableScalarRelationFilter, EventCandidateWhereInput> | null
  }, "id">

  export type EditorialReviewOrderByWithAggregationInput = {
    id?: SortOrder
    contentId?: SortOrderInput | SortOrder
    eventCandidateId?: SortOrderInput | SortOrder
    reviewerId?: SortOrderInput | SortOrder
    reviewerName?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EditorialReviewCountOrderByAggregateInput
    _max?: EditorialReviewMaxOrderByAggregateInput
    _min?: EditorialReviewMinOrderByAggregateInput
  }

  export type EditorialReviewScalarWhereWithAggregatesInput = {
    AND?: EditorialReviewScalarWhereWithAggregatesInput | EditorialReviewScalarWhereWithAggregatesInput[]
    OR?: EditorialReviewScalarWhereWithAggregatesInput[]
    NOT?: EditorialReviewScalarWhereWithAggregatesInput | EditorialReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EditorialReview"> | string
    contentId?: StringNullableWithAggregatesFilter<"EditorialReview"> | string | null
    eventCandidateId?: StringNullableWithAggregatesFilter<"EditorialReview"> | string | null
    reviewerId?: StringNullableWithAggregatesFilter<"EditorialReview"> | string | null
    reviewerName?: StringNullableWithAggregatesFilter<"EditorialReview"> | string | null
    status?: EnumEditorialStatusWithAggregatesFilter<"EditorialReview"> | $Enums.EditorialStatus
    notes?: StringNullableWithAggregatesFilter<"EditorialReview"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EditorialReview"> | Date | string
  }

  export type PublicationWhereInput = {
    AND?: PublicationWhereInput | PublicationWhereInput[]
    OR?: PublicationWhereInput[]
    NOT?: PublicationWhereInput | PublicationWhereInput[]
    id?: StringFilter<"Publication"> | string
    contentId?: StringNullableFilter<"Publication"> | string | null
    eventCandidateId?: StringNullableFilter<"Publication"> | string | null
    target?: EnumPublicationTargetFilter<"Publication"> | $Enums.PublicationTarget
    payload?: JsonFilter<"Publication">
    status?: EnumEditorialStatusFilter<"Publication"> | $Enums.EditorialStatus
    publishedAt?: DateTimeNullableFilter<"Publication"> | Date | string | null
    createdAt?: DateTimeFilter<"Publication"> | Date | string
    updatedAt?: DateTimeFilter<"Publication"> | Date | string
    content?: XOR<ContentNullableScalarRelationFilter, ContentWhereInput> | null
    eventCandidate?: XOR<EventCandidateNullableScalarRelationFilter, EventCandidateWhereInput> | null
  }

  export type PublicationOrderByWithRelationInput = {
    id?: SortOrder
    contentId?: SortOrderInput | SortOrder
    eventCandidateId?: SortOrderInput | SortOrder
    target?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: ContentOrderByWithRelationInput
    eventCandidate?: EventCandidateOrderByWithRelationInput
  }

  export type PublicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PublicationWhereInput | PublicationWhereInput[]
    OR?: PublicationWhereInput[]
    NOT?: PublicationWhereInput | PublicationWhereInput[]
    contentId?: StringNullableFilter<"Publication"> | string | null
    eventCandidateId?: StringNullableFilter<"Publication"> | string | null
    target?: EnumPublicationTargetFilter<"Publication"> | $Enums.PublicationTarget
    payload?: JsonFilter<"Publication">
    status?: EnumEditorialStatusFilter<"Publication"> | $Enums.EditorialStatus
    publishedAt?: DateTimeNullableFilter<"Publication"> | Date | string | null
    createdAt?: DateTimeFilter<"Publication"> | Date | string
    updatedAt?: DateTimeFilter<"Publication"> | Date | string
    content?: XOR<ContentNullableScalarRelationFilter, ContentWhereInput> | null
    eventCandidate?: XOR<EventCandidateNullableScalarRelationFilter, EventCandidateWhereInput> | null
  }, "id">

  export type PublicationOrderByWithAggregationInput = {
    id?: SortOrder
    contentId?: SortOrderInput | SortOrder
    eventCandidateId?: SortOrderInput | SortOrder
    target?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PublicationCountOrderByAggregateInput
    _max?: PublicationMaxOrderByAggregateInput
    _min?: PublicationMinOrderByAggregateInput
  }

  export type PublicationScalarWhereWithAggregatesInput = {
    AND?: PublicationScalarWhereWithAggregatesInput | PublicationScalarWhereWithAggregatesInput[]
    OR?: PublicationScalarWhereWithAggregatesInput[]
    NOT?: PublicationScalarWhereWithAggregatesInput | PublicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Publication"> | string
    contentId?: StringNullableWithAggregatesFilter<"Publication"> | string | null
    eventCandidateId?: StringNullableWithAggregatesFilter<"Publication"> | string | null
    target?: EnumPublicationTargetWithAggregatesFilter<"Publication"> | $Enums.PublicationTarget
    payload?: JsonWithAggregatesFilter<"Publication">
    status?: EnumEditorialStatusWithAggregatesFilter<"Publication"> | $Enums.EditorialStatus
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Publication"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Publication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Publication"> | Date | string
  }

  export type CrawlJobWhereInput = {
    AND?: CrawlJobWhereInput | CrawlJobWhereInput[]
    OR?: CrawlJobWhereInput[]
    NOT?: CrawlJobWhereInput | CrawlJobWhereInput[]
    id?: StringFilter<"CrawlJob"> | string
    name?: StringFilter<"CrawlJob"> | string
    sourceId?: StringNullableFilter<"CrawlJob"> | string | null
    jobType?: StringFilter<"CrawlJob"> | string
    status?: EnumJobStatusFilter<"CrawlJob"> | $Enums.JobStatus
    attempts?: IntFilter<"CrawlJob"> | number
    maxAttempts?: IntFilter<"CrawlJob"> | number
    backoffMs?: IntFilter<"CrawlJob"> | number
    discoveredCount?: IntFilter<"CrawlJob"> | number
    processedCount?: IntFilter<"CrawlJob"> | number
    logs?: JsonNullableFilter<"CrawlJob">
    error?: StringNullableFilter<"CrawlJob"> | string | null
    startedAt?: DateTimeNullableFilter<"CrawlJob"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"CrawlJob"> | Date | string | null
    createdAt?: DateTimeFilter<"CrawlJob"> | Date | string
    updatedAt?: DateTimeFilter<"CrawlJob"> | Date | string
  }

  export type CrawlJobOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sourceId?: SortOrderInput | SortOrder
    jobType?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    backoffMs?: SortOrder
    discoveredCount?: SortOrder
    processedCount?: SortOrder
    logs?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CrawlJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CrawlJobWhereInput | CrawlJobWhereInput[]
    OR?: CrawlJobWhereInput[]
    NOT?: CrawlJobWhereInput | CrawlJobWhereInput[]
    name?: StringFilter<"CrawlJob"> | string
    sourceId?: StringNullableFilter<"CrawlJob"> | string | null
    jobType?: StringFilter<"CrawlJob"> | string
    status?: EnumJobStatusFilter<"CrawlJob"> | $Enums.JobStatus
    attempts?: IntFilter<"CrawlJob"> | number
    maxAttempts?: IntFilter<"CrawlJob"> | number
    backoffMs?: IntFilter<"CrawlJob"> | number
    discoveredCount?: IntFilter<"CrawlJob"> | number
    processedCount?: IntFilter<"CrawlJob"> | number
    logs?: JsonNullableFilter<"CrawlJob">
    error?: StringNullableFilter<"CrawlJob"> | string | null
    startedAt?: DateTimeNullableFilter<"CrawlJob"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"CrawlJob"> | Date | string | null
    createdAt?: DateTimeFilter<"CrawlJob"> | Date | string
    updatedAt?: DateTimeFilter<"CrawlJob"> | Date | string
  }, "id">

  export type CrawlJobOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sourceId?: SortOrderInput | SortOrder
    jobType?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    backoffMs?: SortOrder
    discoveredCount?: SortOrder
    processedCount?: SortOrder
    logs?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CrawlJobCountOrderByAggregateInput
    _avg?: CrawlJobAvgOrderByAggregateInput
    _max?: CrawlJobMaxOrderByAggregateInput
    _min?: CrawlJobMinOrderByAggregateInput
    _sum?: CrawlJobSumOrderByAggregateInput
  }

  export type CrawlJobScalarWhereWithAggregatesInput = {
    AND?: CrawlJobScalarWhereWithAggregatesInput | CrawlJobScalarWhereWithAggregatesInput[]
    OR?: CrawlJobScalarWhereWithAggregatesInput[]
    NOT?: CrawlJobScalarWhereWithAggregatesInput | CrawlJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CrawlJob"> | string
    name?: StringWithAggregatesFilter<"CrawlJob"> | string
    sourceId?: StringNullableWithAggregatesFilter<"CrawlJob"> | string | null
    jobType?: StringWithAggregatesFilter<"CrawlJob"> | string
    status?: EnumJobStatusWithAggregatesFilter<"CrawlJob"> | $Enums.JobStatus
    attempts?: IntWithAggregatesFilter<"CrawlJob"> | number
    maxAttempts?: IntWithAggregatesFilter<"CrawlJob"> | number
    backoffMs?: IntWithAggregatesFilter<"CrawlJob"> | number
    discoveredCount?: IntWithAggregatesFilter<"CrawlJob"> | number
    processedCount?: IntWithAggregatesFilter<"CrawlJob"> | number
    logs?: JsonNullableWithAggregatesFilter<"CrawlJob">
    error?: StringNullableWithAggregatesFilter<"CrawlJob"> | string | null
    startedAt?: DateTimeNullableWithAggregatesFilter<"CrawlJob"> | Date | string | null
    finishedAt?: DateTimeNullableWithAggregatesFilter<"CrawlJob"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CrawlJob"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CrawlJob"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    actorId?: StringNullableFilter<"AuditLog"> | string | null
    actorName?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    actorId?: SortOrderInput | SortOrder
    actorName?: SortOrderInput | SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    actorId?: StringNullableFilter<"AuditLog"> | string | null
    actorName?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    actorId?: SortOrderInput | SortOrder
    actorName?: SortOrderInput | SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    actorId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    actorName?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entityType?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"AuditLog">
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type SourceCreateInput = {
    id?: string
    name: string
    url: string
    sourceType: $Enums.SourceType
    country?: string
    province?: string | null
    city?: string | null
    trustScore?: number
    enabled?: boolean
    scrapingAllowed?: boolean
    requiresReview?: boolean
    updateFrequency?: string
    crawlDelayMs?: number
    lastSeenHash?: string | null
    contentSelector?: string | null
    titleSelector?: string | null
    robotsPolicy?: string | null
    notes?: string | null
    lastCheckedAt?: Date | string | null
    lastSuccessfulCheckAt?: Date | string | null
    status?: $Enums.SourceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    rawContents?: RawContentCreateNestedManyWithoutSourceInput
    eventCandidates?: EventCandidateCreateNestedManyWithoutSourceInput
  }

  export type SourceUncheckedCreateInput = {
    id?: string
    name: string
    url: string
    sourceType: $Enums.SourceType
    country?: string
    province?: string | null
    city?: string | null
    trustScore?: number
    enabled?: boolean
    scrapingAllowed?: boolean
    requiresReview?: boolean
    updateFrequency?: string
    crawlDelayMs?: number
    lastSeenHash?: string | null
    contentSelector?: string | null
    titleSelector?: string | null
    robotsPolicy?: string | null
    notes?: string | null
    lastCheckedAt?: Date | string | null
    lastSuccessfulCheckAt?: Date | string | null
    status?: $Enums.SourceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    rawContents?: RawContentUncheckedCreateNestedManyWithoutSourceInput
    eventCandidates?: EventCandidateUncheckedCreateNestedManyWithoutSourceInput
  }

  export type SourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    sourceType?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    country?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    scrapingAllowed?: BoolFieldUpdateOperationsInput | boolean
    requiresReview?: BoolFieldUpdateOperationsInput | boolean
    updateFrequency?: StringFieldUpdateOperationsInput | string
    crawlDelayMs?: IntFieldUpdateOperationsInput | number
    lastSeenHash?: NullableStringFieldUpdateOperationsInput | string | null
    contentSelector?: NullableStringFieldUpdateOperationsInput | string | null
    titleSelector?: NullableStringFieldUpdateOperationsInput | string | null
    robotsPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuccessfulCheckAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSourceStatusFieldUpdateOperationsInput | $Enums.SourceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rawContents?: RawContentUpdateManyWithoutSourceNestedInput
    eventCandidates?: EventCandidateUpdateManyWithoutSourceNestedInput
  }

  export type SourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    sourceType?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    country?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    scrapingAllowed?: BoolFieldUpdateOperationsInput | boolean
    requiresReview?: BoolFieldUpdateOperationsInput | boolean
    updateFrequency?: StringFieldUpdateOperationsInput | string
    crawlDelayMs?: IntFieldUpdateOperationsInput | number
    lastSeenHash?: NullableStringFieldUpdateOperationsInput | string | null
    contentSelector?: NullableStringFieldUpdateOperationsInput | string | null
    titleSelector?: NullableStringFieldUpdateOperationsInput | string | null
    robotsPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuccessfulCheckAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSourceStatusFieldUpdateOperationsInput | $Enums.SourceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rawContents?: RawContentUncheckedUpdateManyWithoutSourceNestedInput
    eventCandidates?: EventCandidateUncheckedUpdateManyWithoutSourceNestedInput
  }

  export type SourceCreateManyInput = {
    id?: string
    name: string
    url: string
    sourceType: $Enums.SourceType
    country?: string
    province?: string | null
    city?: string | null
    trustScore?: number
    enabled?: boolean
    scrapingAllowed?: boolean
    requiresReview?: boolean
    updateFrequency?: string
    crawlDelayMs?: number
    lastSeenHash?: string | null
    contentSelector?: string | null
    titleSelector?: string | null
    robotsPolicy?: string | null
    notes?: string | null
    lastCheckedAt?: Date | string | null
    lastSuccessfulCheckAt?: Date | string | null
    status?: $Enums.SourceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    sourceType?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    country?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    scrapingAllowed?: BoolFieldUpdateOperationsInput | boolean
    requiresReview?: BoolFieldUpdateOperationsInput | boolean
    updateFrequency?: StringFieldUpdateOperationsInput | string
    crawlDelayMs?: IntFieldUpdateOperationsInput | number
    lastSeenHash?: NullableStringFieldUpdateOperationsInput | string | null
    contentSelector?: NullableStringFieldUpdateOperationsInput | string | null
    titleSelector?: NullableStringFieldUpdateOperationsInput | string | null
    robotsPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuccessfulCheckAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSourceStatusFieldUpdateOperationsInput | $Enums.SourceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    sourceType?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    country?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    scrapingAllowed?: BoolFieldUpdateOperationsInput | boolean
    requiresReview?: BoolFieldUpdateOperationsInput | boolean
    updateFrequency?: StringFieldUpdateOperationsInput | string
    crawlDelayMs?: IntFieldUpdateOperationsInput | number
    lastSeenHash?: NullableStringFieldUpdateOperationsInput | string | null
    contentSelector?: NullableStringFieldUpdateOperationsInput | string | null
    titleSelector?: NullableStringFieldUpdateOperationsInput | string | null
    robotsPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuccessfulCheckAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSourceStatusFieldUpdateOperationsInput | $Enums.SourceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RawContentCreateInput = {
    id?: string
    externalId?: string | null
    canonicalUrl?: string | null
    title: string
    rawText: string
    rawHtml?: string | null
    author?: string | null
    publishedAt?: Date | string | null
    discoveredAt?: Date | string
    fetchedAt?: Date | string
    contentHash: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.RawContentStatus
    source: SourceCreateNestedOneWithoutRawContentsInput
    content?: ContentCreateNestedOneWithoutRawContentInput
  }

  export type RawContentUncheckedCreateInput = {
    id?: string
    sourceId: string
    externalId?: string | null
    canonicalUrl?: string | null
    title: string
    rawText: string
    rawHtml?: string | null
    author?: string | null
    publishedAt?: Date | string | null
    discoveredAt?: Date | string
    fetchedAt?: Date | string
    contentHash: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.RawContentStatus
    content?: ContentUncheckedCreateNestedOneWithoutRawContentInput
  }

  export type RawContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    rawText?: StringFieldUpdateOperationsInput | string
    rawHtml?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentHash?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumRawContentStatusFieldUpdateOperationsInput | $Enums.RawContentStatus
    source?: SourceUpdateOneRequiredWithoutRawContentsNestedInput
    content?: ContentUpdateOneWithoutRawContentNestedInput
  }

  export type RawContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    rawText?: StringFieldUpdateOperationsInput | string
    rawHtml?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentHash?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumRawContentStatusFieldUpdateOperationsInput | $Enums.RawContentStatus
    content?: ContentUncheckedUpdateOneWithoutRawContentNestedInput
  }

  export type RawContentCreateManyInput = {
    id?: string
    sourceId: string
    externalId?: string | null
    canonicalUrl?: string | null
    title: string
    rawText: string
    rawHtml?: string | null
    author?: string | null
    publishedAt?: Date | string | null
    discoveredAt?: Date | string
    fetchedAt?: Date | string
    contentHash: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.RawContentStatus
  }

  export type RawContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    rawText?: StringFieldUpdateOperationsInput | string
    rawHtml?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentHash?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumRawContentStatusFieldUpdateOperationsInput | $Enums.RawContentStatus
  }

  export type RawContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    rawText?: StringFieldUpdateOperationsInput | string
    rawHtml?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentHash?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumRawContentStatusFieldUpdateOperationsInput | $Enums.RawContentStatus
  }

  export type ContentCreateInput = {
    id?: string
    title: string
    slug: string
    cleanText: string
    summary?: string | null
    contentType?: $Enums.IntelligenceContentType
    category?: string | null
    country?: string
    province?: string | null
    city?: string | null
    confidence?: number
    fitnessScore?: number
    angolaScore?: number
    relevanceScore?: number
    trustScore?: number
    duplicateStatus?: $Enums.DuplicateStatus
    duplicateOfId?: string | null
    duplicateReason?: string | null
    editorialStatus?: $Enums.EditorialStatus
    draft?: NullableJsonNullValueInput | InputJsonValue
    socialDraft?: NullableJsonNullValueInput | InputJsonValue
    scoreExplanation?: NullableJsonNullValueInput | InputJsonValue
    scheduledFor?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rawContent: RawContentCreateNestedOneWithoutContentInput
    entities?: ContentEntityCreateNestedManyWithoutContentInput
    eventCandidate?: EventCandidateCreateNestedOneWithoutContentInput
    reviews?: EditorialReviewCreateNestedManyWithoutContentInput
    publications?: PublicationCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateInput = {
    id?: string
    rawContentId: string
    title: string
    slug: string
    cleanText: string
    summary?: string | null
    contentType?: $Enums.IntelligenceContentType
    category?: string | null
    country?: string
    province?: string | null
    city?: string | null
    confidence?: number
    fitnessScore?: number
    angolaScore?: number
    relevanceScore?: number
    trustScore?: number
    duplicateStatus?: $Enums.DuplicateStatus
    duplicateOfId?: string | null
    duplicateReason?: string | null
    editorialStatus?: $Enums.EditorialStatus
    draft?: NullableJsonNullValueInput | InputJsonValue
    socialDraft?: NullableJsonNullValueInput | InputJsonValue
    scoreExplanation?: NullableJsonNullValueInput | InputJsonValue
    scheduledFor?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entities?: ContentEntityUncheckedCreateNestedManyWithoutContentInput
    eventCandidate?: EventCandidateUncheckedCreateNestedOneWithoutContentInput
    reviews?: EditorialReviewUncheckedCreateNestedManyWithoutContentInput
    publications?: PublicationUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cleanText?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: EnumIntelligenceContentTypeFieldUpdateOperationsInput | $Enums.IntelligenceContentType
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: IntFieldUpdateOperationsInput | number
    fitnessScore?: IntFieldUpdateOperationsInput | number
    angolaScore?: IntFieldUpdateOperationsInput | number
    relevanceScore?: IntFieldUpdateOperationsInput | number
    trustScore?: IntFieldUpdateOperationsInput | number
    duplicateStatus?: EnumDuplicateStatusFieldUpdateOperationsInput | $Enums.DuplicateStatus
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    duplicateReason?: NullableStringFieldUpdateOperationsInput | string | null
    editorialStatus?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    draft?: NullableJsonNullValueInput | InputJsonValue
    socialDraft?: NullableJsonNullValueInput | InputJsonValue
    scoreExplanation?: NullableJsonNullValueInput | InputJsonValue
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rawContent?: RawContentUpdateOneRequiredWithoutContentNestedInput
    entities?: ContentEntityUpdateManyWithoutContentNestedInput
    eventCandidate?: EventCandidateUpdateOneWithoutContentNestedInput
    reviews?: EditorialReviewUpdateManyWithoutContentNestedInput
    publications?: PublicationUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawContentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cleanText?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: EnumIntelligenceContentTypeFieldUpdateOperationsInput | $Enums.IntelligenceContentType
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: IntFieldUpdateOperationsInput | number
    fitnessScore?: IntFieldUpdateOperationsInput | number
    angolaScore?: IntFieldUpdateOperationsInput | number
    relevanceScore?: IntFieldUpdateOperationsInput | number
    trustScore?: IntFieldUpdateOperationsInput | number
    duplicateStatus?: EnumDuplicateStatusFieldUpdateOperationsInput | $Enums.DuplicateStatus
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    duplicateReason?: NullableStringFieldUpdateOperationsInput | string | null
    editorialStatus?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    draft?: NullableJsonNullValueInput | InputJsonValue
    socialDraft?: NullableJsonNullValueInput | InputJsonValue
    scoreExplanation?: NullableJsonNullValueInput | InputJsonValue
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entities?: ContentEntityUncheckedUpdateManyWithoutContentNestedInput
    eventCandidate?: EventCandidateUncheckedUpdateOneWithoutContentNestedInput
    reviews?: EditorialReviewUncheckedUpdateManyWithoutContentNestedInput
    publications?: PublicationUncheckedUpdateManyWithoutContentNestedInput
  }

  export type ContentCreateManyInput = {
    id?: string
    rawContentId: string
    title: string
    slug: string
    cleanText: string
    summary?: string | null
    contentType?: $Enums.IntelligenceContentType
    category?: string | null
    country?: string
    province?: string | null
    city?: string | null
    confidence?: number
    fitnessScore?: number
    angolaScore?: number
    relevanceScore?: number
    trustScore?: number
    duplicateStatus?: $Enums.DuplicateStatus
    duplicateOfId?: string | null
    duplicateReason?: string | null
    editorialStatus?: $Enums.EditorialStatus
    draft?: NullableJsonNullValueInput | InputJsonValue
    socialDraft?: NullableJsonNullValueInput | InputJsonValue
    scoreExplanation?: NullableJsonNullValueInput | InputJsonValue
    scheduledFor?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cleanText?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: EnumIntelligenceContentTypeFieldUpdateOperationsInput | $Enums.IntelligenceContentType
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: IntFieldUpdateOperationsInput | number
    fitnessScore?: IntFieldUpdateOperationsInput | number
    angolaScore?: IntFieldUpdateOperationsInput | number
    relevanceScore?: IntFieldUpdateOperationsInput | number
    trustScore?: IntFieldUpdateOperationsInput | number
    duplicateStatus?: EnumDuplicateStatusFieldUpdateOperationsInput | $Enums.DuplicateStatus
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    duplicateReason?: NullableStringFieldUpdateOperationsInput | string | null
    editorialStatus?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    draft?: NullableJsonNullValueInput | InputJsonValue
    socialDraft?: NullableJsonNullValueInput | InputJsonValue
    scoreExplanation?: NullableJsonNullValueInput | InputJsonValue
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawContentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cleanText?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: EnumIntelligenceContentTypeFieldUpdateOperationsInput | $Enums.IntelligenceContentType
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: IntFieldUpdateOperationsInput | number
    fitnessScore?: IntFieldUpdateOperationsInput | number
    angolaScore?: IntFieldUpdateOperationsInput | number
    relevanceScore?: IntFieldUpdateOperationsInput | number
    trustScore?: IntFieldUpdateOperationsInput | number
    duplicateStatus?: EnumDuplicateStatusFieldUpdateOperationsInput | $Enums.DuplicateStatus
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    duplicateReason?: NullableStringFieldUpdateOperationsInput | string | null
    editorialStatus?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    draft?: NullableJsonNullValueInput | InputJsonValue
    socialDraft?: NullableJsonNullValueInput | InputJsonValue
    scoreExplanation?: NullableJsonNullValueInput | InputJsonValue
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntityCreateInput = {
    id?: string
    name: string
    entityType: $Enums.EntityType
    country?: string
    province?: string | null
    city?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    contents?: ContentEntityCreateNestedManyWithoutEntityInput
  }

  export type EntityUncheckedCreateInput = {
    id?: string
    name: string
    entityType: $Enums.EntityType
    country?: string
    province?: string | null
    city?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    contents?: ContentEntityUncheckedCreateNestedManyWithoutEntityInput
  }

  export type EntityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    country?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: ContentEntityUpdateManyWithoutEntityNestedInput
  }

  export type EntityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    country?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: ContentEntityUncheckedUpdateManyWithoutEntityNestedInput
  }

  export type EntityCreateManyInput = {
    id?: string
    name: string
    entityType: $Enums.EntityType
    country?: string
    province?: string | null
    city?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EntityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    country?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    country?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentEntityCreateInput = {
    confidence?: number
    role?: string | null
    content: ContentCreateNestedOneWithoutEntitiesInput
    entity: EntityCreateNestedOneWithoutContentsInput
  }

  export type ContentEntityUncheckedCreateInput = {
    contentId: string
    entityId: string
    confidence?: number
    role?: string | null
  }

  export type ContentEntityUpdateInput = {
    confidence?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
    content?: ContentUpdateOneRequiredWithoutEntitiesNestedInput
    entity?: EntityUpdateOneRequiredWithoutContentsNestedInput
  }

  export type ContentEntityUncheckedUpdateInput = {
    contentId?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    confidence?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContentEntityCreateManyInput = {
    contentId: string
    entityId: string
    confidence?: number
    role?: string | null
  }

  export type ContentEntityUpdateManyMutationInput = {
    confidence?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContentEntityUncheckedUpdateManyInput = {
    contentId?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    confidence?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventCandidateCreateInput = {
    id?: string
    name: string
    category?: string | null
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    startTime?: string | null
    location?: string | null
    venue?: string | null
    city?: string | null
    province?: string | null
    country?: string
    organizer?: string | null
    origin?: $Enums.EventOrigin
    price?: string | null
    currency?: string
    registrationUrl?: string | null
    contact?: string | null
    sourceUrl?: string | null
    imageUrl?: string | null
    confidence?: number
    verificationStatus?: $Enums.VerificationStatus
    duplicateStatus?: $Enums.DuplicateStatus
    duplicateOfId?: string | null
    duplicateReason?: string | null
    editorialStatus?: $Enums.EditorialStatus
    scheduledFor?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: ContentCreateNestedOneWithoutEventCandidateInput
    source?: SourceCreateNestedOneWithoutEventCandidatesInput
    reviews?: EditorialReviewCreateNestedManyWithoutEventCandidateInput
    publications?: PublicationCreateNestedManyWithoutEventCandidateInput
  }

  export type EventCandidateUncheckedCreateInput = {
    id?: string
    contentId?: string | null
    sourceId?: string | null
    name: string
    category?: string | null
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    startTime?: string | null
    location?: string | null
    venue?: string | null
    city?: string | null
    province?: string | null
    country?: string
    organizer?: string | null
    origin?: $Enums.EventOrigin
    price?: string | null
    currency?: string
    registrationUrl?: string | null
    contact?: string | null
    sourceUrl?: string | null
    imageUrl?: string | null
    confidence?: number
    verificationStatus?: $Enums.VerificationStatus
    duplicateStatus?: $Enums.DuplicateStatus
    duplicateOfId?: string | null
    duplicateReason?: string | null
    editorialStatus?: $Enums.EditorialStatus
    scheduledFor?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: EditorialReviewUncheckedCreateNestedManyWithoutEventCandidateInput
    publications?: PublicationUncheckedCreateNestedManyWithoutEventCandidateInput
  }

  export type EventCandidateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    organizer?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: EnumEventOriginFieldUpdateOperationsInput | $Enums.EventOrigin
    price?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    registrationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: IntFieldUpdateOperationsInput | number
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    duplicateStatus?: EnumDuplicateStatusFieldUpdateOperationsInput | $Enums.DuplicateStatus
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    duplicateReason?: NullableStringFieldUpdateOperationsInput | string | null
    editorialStatus?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateOneWithoutEventCandidateNestedInput
    source?: SourceUpdateOneWithoutEventCandidatesNestedInput
    reviews?: EditorialReviewUpdateManyWithoutEventCandidateNestedInput
    publications?: PublicationUpdateManyWithoutEventCandidateNestedInput
  }

  export type EventCandidateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    organizer?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: EnumEventOriginFieldUpdateOperationsInput | $Enums.EventOrigin
    price?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    registrationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: IntFieldUpdateOperationsInput | number
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    duplicateStatus?: EnumDuplicateStatusFieldUpdateOperationsInput | $Enums.DuplicateStatus
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    duplicateReason?: NullableStringFieldUpdateOperationsInput | string | null
    editorialStatus?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: EditorialReviewUncheckedUpdateManyWithoutEventCandidateNestedInput
    publications?: PublicationUncheckedUpdateManyWithoutEventCandidateNestedInput
  }

  export type EventCandidateCreateManyInput = {
    id?: string
    contentId?: string | null
    sourceId?: string | null
    name: string
    category?: string | null
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    startTime?: string | null
    location?: string | null
    venue?: string | null
    city?: string | null
    province?: string | null
    country?: string
    organizer?: string | null
    origin?: $Enums.EventOrigin
    price?: string | null
    currency?: string
    registrationUrl?: string | null
    contact?: string | null
    sourceUrl?: string | null
    imageUrl?: string | null
    confidence?: number
    verificationStatus?: $Enums.VerificationStatus
    duplicateStatus?: $Enums.DuplicateStatus
    duplicateOfId?: string | null
    duplicateReason?: string | null
    editorialStatus?: $Enums.EditorialStatus
    scheduledFor?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCandidateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    organizer?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: EnumEventOriginFieldUpdateOperationsInput | $Enums.EventOrigin
    price?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    registrationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: IntFieldUpdateOperationsInput | number
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    duplicateStatus?: EnumDuplicateStatusFieldUpdateOperationsInput | $Enums.DuplicateStatus
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    duplicateReason?: NullableStringFieldUpdateOperationsInput | string | null
    editorialStatus?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCandidateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    organizer?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: EnumEventOriginFieldUpdateOperationsInput | $Enums.EventOrigin
    price?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    registrationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: IntFieldUpdateOperationsInput | number
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    duplicateStatus?: EnumDuplicateStatusFieldUpdateOperationsInput | $Enums.DuplicateStatus
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    duplicateReason?: NullableStringFieldUpdateOperationsInput | string | null
    editorialStatus?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EditorialReviewCreateInput = {
    id?: string
    reviewerId?: string | null
    reviewerName?: string | null
    status: $Enums.EditorialStatus
    notes?: string | null
    createdAt?: Date | string
    content?: ContentCreateNestedOneWithoutReviewsInput
    eventCandidate?: EventCandidateCreateNestedOneWithoutReviewsInput
  }

  export type EditorialReviewUncheckedCreateInput = {
    id?: string
    contentId?: string | null
    eventCandidateId?: string | null
    reviewerId?: string | null
    reviewerName?: string | null
    status: $Enums.EditorialStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type EditorialReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateOneWithoutReviewsNestedInput
    eventCandidate?: EventCandidateUpdateOneWithoutReviewsNestedInput
  }

  export type EditorialReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: NullableStringFieldUpdateOperationsInput | string | null
    eventCandidateId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EditorialReviewCreateManyInput = {
    id?: string
    contentId?: string | null
    eventCandidateId?: string | null
    reviewerId?: string | null
    reviewerName?: string | null
    status: $Enums.EditorialStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type EditorialReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EditorialReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: NullableStringFieldUpdateOperationsInput | string | null
    eventCandidateId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationCreateInput = {
    id?: string
    target: $Enums.PublicationTarget
    payload: JsonNullValueInput | InputJsonValue
    status?: $Enums.EditorialStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: ContentCreateNestedOneWithoutPublicationsInput
    eventCandidate?: EventCandidateCreateNestedOneWithoutPublicationsInput
  }

  export type PublicationUncheckedCreateInput = {
    id?: string
    contentId?: string | null
    eventCandidateId?: string | null
    target: $Enums.PublicationTarget
    payload: JsonNullValueInput | InputJsonValue
    status?: $Enums.EditorialStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    target?: EnumPublicationTargetFieldUpdateOperationsInput | $Enums.PublicationTarget
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateOneWithoutPublicationsNestedInput
    eventCandidate?: EventCandidateUpdateOneWithoutPublicationsNestedInput
  }

  export type PublicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: NullableStringFieldUpdateOperationsInput | string | null
    eventCandidateId?: NullableStringFieldUpdateOperationsInput | string | null
    target?: EnumPublicationTargetFieldUpdateOperationsInput | $Enums.PublicationTarget
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationCreateManyInput = {
    id?: string
    contentId?: string | null
    eventCandidateId?: string | null
    target: $Enums.PublicationTarget
    payload: JsonNullValueInput | InputJsonValue
    status?: $Enums.EditorialStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    target?: EnumPublicationTargetFieldUpdateOperationsInput | $Enums.PublicationTarget
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: NullableStringFieldUpdateOperationsInput | string | null
    eventCandidateId?: NullableStringFieldUpdateOperationsInput | string | null
    target?: EnumPublicationTargetFieldUpdateOperationsInput | $Enums.PublicationTarget
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrawlJobCreateInput = {
    id?: string
    name: string
    sourceId?: string | null
    jobType?: string
    status?: $Enums.JobStatus
    attempts?: number
    maxAttempts?: number
    backoffMs?: number
    discoveredCount?: number
    processedCount?: number
    logs?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CrawlJobUncheckedCreateInput = {
    id?: string
    name: string
    sourceId?: string | null
    jobType?: string
    status?: $Enums.JobStatus
    attempts?: number
    maxAttempts?: number
    backoffMs?: number
    discoveredCount?: number
    processedCount?: number
    logs?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CrawlJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    backoffMs?: IntFieldUpdateOperationsInput | number
    discoveredCount?: IntFieldUpdateOperationsInput | number
    processedCount?: IntFieldUpdateOperationsInput | number
    logs?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrawlJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    backoffMs?: IntFieldUpdateOperationsInput | number
    discoveredCount?: IntFieldUpdateOperationsInput | number
    processedCount?: IntFieldUpdateOperationsInput | number
    logs?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrawlJobCreateManyInput = {
    id?: string
    name: string
    sourceId?: string | null
    jobType?: string
    status?: $Enums.JobStatus
    attempts?: number
    maxAttempts?: number
    backoffMs?: number
    discoveredCount?: number
    processedCount?: number
    logs?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CrawlJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    backoffMs?: IntFieldUpdateOperationsInput | number
    discoveredCount?: IntFieldUpdateOperationsInput | number
    processedCount?: IntFieldUpdateOperationsInput | number
    logs?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrawlJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    backoffMs?: IntFieldUpdateOperationsInput | number
    discoveredCount?: IntFieldUpdateOperationsInput | number
    processedCount?: IntFieldUpdateOperationsInput | number
    logs?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    actorId?: string | null
    actorName?: string | null
    action: string
    entityType: string
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    actorId?: string | null
    actorName?: string | null
    action: string
    entityType: string
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    actorName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    actorName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    actorId?: string | null
    actorName?: string | null
    action: string
    entityType: string
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    actorName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    actorName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumSourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SourceType | EnumSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SourceType[] | ListEnumSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SourceType[] | ListEnumSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSourceTypeFilter<$PrismaModel> | $Enums.SourceType
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumSourceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SourceStatus | EnumSourceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SourceStatus[] | ListEnumSourceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SourceStatus[] | ListEnumSourceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSourceStatusFilter<$PrismaModel> | $Enums.SourceStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RawContentListRelationFilter = {
    every?: RawContentWhereInput
    some?: RawContentWhereInput
    none?: RawContentWhereInput
  }

  export type EventCandidateListRelationFilter = {
    every?: EventCandidateWhereInput
    some?: EventCandidateWhereInput
    none?: EventCandidateWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RawContentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCandidateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SourceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    sourceType?: SortOrder
    country?: SortOrder
    province?: SortOrder
    city?: SortOrder
    trustScore?: SortOrder
    enabled?: SortOrder
    scrapingAllowed?: SortOrder
    requiresReview?: SortOrder
    updateFrequency?: SortOrder
    crawlDelayMs?: SortOrder
    lastSeenHash?: SortOrder
    contentSelector?: SortOrder
    titleSelector?: SortOrder
    robotsPolicy?: SortOrder
    notes?: SortOrder
    lastCheckedAt?: SortOrder
    lastSuccessfulCheckAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SourceAvgOrderByAggregateInput = {
    trustScore?: SortOrder
    crawlDelayMs?: SortOrder
  }

  export type SourceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    sourceType?: SortOrder
    country?: SortOrder
    province?: SortOrder
    city?: SortOrder
    trustScore?: SortOrder
    enabled?: SortOrder
    scrapingAllowed?: SortOrder
    requiresReview?: SortOrder
    updateFrequency?: SortOrder
    crawlDelayMs?: SortOrder
    lastSeenHash?: SortOrder
    contentSelector?: SortOrder
    titleSelector?: SortOrder
    robotsPolicy?: SortOrder
    notes?: SortOrder
    lastCheckedAt?: SortOrder
    lastSuccessfulCheckAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SourceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    sourceType?: SortOrder
    country?: SortOrder
    province?: SortOrder
    city?: SortOrder
    trustScore?: SortOrder
    enabled?: SortOrder
    scrapingAllowed?: SortOrder
    requiresReview?: SortOrder
    updateFrequency?: SortOrder
    crawlDelayMs?: SortOrder
    lastSeenHash?: SortOrder
    contentSelector?: SortOrder
    titleSelector?: SortOrder
    robotsPolicy?: SortOrder
    notes?: SortOrder
    lastCheckedAt?: SortOrder
    lastSuccessfulCheckAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SourceSumOrderByAggregateInput = {
    trustScore?: SortOrder
    crawlDelayMs?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumSourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SourceType | EnumSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SourceType[] | ListEnumSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SourceType[] | ListEnumSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.SourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSourceTypeFilter<$PrismaModel>
    _max?: NestedEnumSourceTypeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumSourceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SourceStatus | EnumSourceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SourceStatus[] | ListEnumSourceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SourceStatus[] | ListEnumSourceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSourceStatusWithAggregatesFilter<$PrismaModel> | $Enums.SourceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSourceStatusFilter<$PrismaModel>
    _max?: NestedEnumSourceStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumRawContentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RawContentStatus | EnumRawContentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RawContentStatus[] | ListEnumRawContentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RawContentStatus[] | ListEnumRawContentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRawContentStatusFilter<$PrismaModel> | $Enums.RawContentStatus
  }

  export type SourceScalarRelationFilter = {
    is?: SourceWhereInput
    isNot?: SourceWhereInput
  }

  export type ContentNullableScalarRelationFilter = {
    is?: ContentWhereInput | null
    isNot?: ContentWhereInput | null
  }

  export type RawContentSourceIdExternalIdCompoundUniqueInput = {
    sourceId: string
    externalId: string
  }

  export type RawContentCountOrderByAggregateInput = {
    id?: SortOrder
    sourceId?: SortOrder
    externalId?: SortOrder
    canonicalUrl?: SortOrder
    title?: SortOrder
    rawText?: SortOrder
    rawHtml?: SortOrder
    author?: SortOrder
    publishedAt?: SortOrder
    discoveredAt?: SortOrder
    fetchedAt?: SortOrder
    contentHash?: SortOrder
    metadata?: SortOrder
    status?: SortOrder
  }

  export type RawContentMaxOrderByAggregateInput = {
    id?: SortOrder
    sourceId?: SortOrder
    externalId?: SortOrder
    canonicalUrl?: SortOrder
    title?: SortOrder
    rawText?: SortOrder
    rawHtml?: SortOrder
    author?: SortOrder
    publishedAt?: SortOrder
    discoveredAt?: SortOrder
    fetchedAt?: SortOrder
    contentHash?: SortOrder
    status?: SortOrder
  }

  export type RawContentMinOrderByAggregateInput = {
    id?: SortOrder
    sourceId?: SortOrder
    externalId?: SortOrder
    canonicalUrl?: SortOrder
    title?: SortOrder
    rawText?: SortOrder
    rawHtml?: SortOrder
    author?: SortOrder
    publishedAt?: SortOrder
    discoveredAt?: SortOrder
    fetchedAt?: SortOrder
    contentHash?: SortOrder
    status?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumRawContentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RawContentStatus | EnumRawContentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RawContentStatus[] | ListEnumRawContentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RawContentStatus[] | ListEnumRawContentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRawContentStatusWithAggregatesFilter<$PrismaModel> | $Enums.RawContentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRawContentStatusFilter<$PrismaModel>
    _max?: NestedEnumRawContentStatusFilter<$PrismaModel>
  }

  export type EnumIntelligenceContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.IntelligenceContentType | EnumIntelligenceContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IntelligenceContentType[] | ListEnumIntelligenceContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntelligenceContentType[] | ListEnumIntelligenceContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIntelligenceContentTypeFilter<$PrismaModel> | $Enums.IntelligenceContentType
  }

  export type EnumDuplicateStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DuplicateStatus | EnumDuplicateStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DuplicateStatus[] | ListEnumDuplicateStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DuplicateStatus[] | ListEnumDuplicateStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDuplicateStatusFilter<$PrismaModel> | $Enums.DuplicateStatus
  }

  export type EnumEditorialStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EditorialStatus | EnumEditorialStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EditorialStatus[] | ListEnumEditorialStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EditorialStatus[] | ListEnumEditorialStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEditorialStatusFilter<$PrismaModel> | $Enums.EditorialStatus
  }

  export type RawContentScalarRelationFilter = {
    is?: RawContentWhereInput
    isNot?: RawContentWhereInput
  }

  export type ContentEntityListRelationFilter = {
    every?: ContentEntityWhereInput
    some?: ContentEntityWhereInput
    none?: ContentEntityWhereInput
  }

  export type EventCandidateNullableScalarRelationFilter = {
    is?: EventCandidateWhereInput | null
    isNot?: EventCandidateWhereInput | null
  }

  export type EditorialReviewListRelationFilter = {
    every?: EditorialReviewWhereInput
    some?: EditorialReviewWhereInput
    none?: EditorialReviewWhereInput
  }

  export type PublicationListRelationFilter = {
    every?: PublicationWhereInput
    some?: PublicationWhereInput
    none?: PublicationWhereInput
  }

  export type ContentEntityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EditorialReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PublicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContentCountOrderByAggregateInput = {
    id?: SortOrder
    rawContentId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    cleanText?: SortOrder
    summary?: SortOrder
    contentType?: SortOrder
    category?: SortOrder
    country?: SortOrder
    province?: SortOrder
    city?: SortOrder
    confidence?: SortOrder
    fitnessScore?: SortOrder
    angolaScore?: SortOrder
    relevanceScore?: SortOrder
    trustScore?: SortOrder
    duplicateStatus?: SortOrder
    duplicateOfId?: SortOrder
    duplicateReason?: SortOrder
    editorialStatus?: SortOrder
    draft?: SortOrder
    socialDraft?: SortOrder
    scoreExplanation?: SortOrder
    scheduledFor?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentAvgOrderByAggregateInput = {
    confidence?: SortOrder
    fitnessScore?: SortOrder
    angolaScore?: SortOrder
    relevanceScore?: SortOrder
    trustScore?: SortOrder
  }

  export type ContentMaxOrderByAggregateInput = {
    id?: SortOrder
    rawContentId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    cleanText?: SortOrder
    summary?: SortOrder
    contentType?: SortOrder
    category?: SortOrder
    country?: SortOrder
    province?: SortOrder
    city?: SortOrder
    confidence?: SortOrder
    fitnessScore?: SortOrder
    angolaScore?: SortOrder
    relevanceScore?: SortOrder
    trustScore?: SortOrder
    duplicateStatus?: SortOrder
    duplicateOfId?: SortOrder
    duplicateReason?: SortOrder
    editorialStatus?: SortOrder
    scheduledFor?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentMinOrderByAggregateInput = {
    id?: SortOrder
    rawContentId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    cleanText?: SortOrder
    summary?: SortOrder
    contentType?: SortOrder
    category?: SortOrder
    country?: SortOrder
    province?: SortOrder
    city?: SortOrder
    confidence?: SortOrder
    fitnessScore?: SortOrder
    angolaScore?: SortOrder
    relevanceScore?: SortOrder
    trustScore?: SortOrder
    duplicateStatus?: SortOrder
    duplicateOfId?: SortOrder
    duplicateReason?: SortOrder
    editorialStatus?: SortOrder
    scheduledFor?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentSumOrderByAggregateInput = {
    confidence?: SortOrder
    fitnessScore?: SortOrder
    angolaScore?: SortOrder
    relevanceScore?: SortOrder
    trustScore?: SortOrder
  }

  export type EnumIntelligenceContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IntelligenceContentType | EnumIntelligenceContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IntelligenceContentType[] | ListEnumIntelligenceContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntelligenceContentType[] | ListEnumIntelligenceContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIntelligenceContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.IntelligenceContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIntelligenceContentTypeFilter<$PrismaModel>
    _max?: NestedEnumIntelligenceContentTypeFilter<$PrismaModel>
  }

  export type EnumDuplicateStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DuplicateStatus | EnumDuplicateStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DuplicateStatus[] | ListEnumDuplicateStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DuplicateStatus[] | ListEnumDuplicateStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDuplicateStatusWithAggregatesFilter<$PrismaModel> | $Enums.DuplicateStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDuplicateStatusFilter<$PrismaModel>
    _max?: NestedEnumDuplicateStatusFilter<$PrismaModel>
  }

  export type EnumEditorialStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EditorialStatus | EnumEditorialStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EditorialStatus[] | ListEnumEditorialStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EditorialStatus[] | ListEnumEditorialStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEditorialStatusWithAggregatesFilter<$PrismaModel> | $Enums.EditorialStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEditorialStatusFilter<$PrismaModel>
    _max?: NestedEnumEditorialStatusFilter<$PrismaModel>
  }

  export type EnumEntityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityType | EnumEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEntityTypeFilter<$PrismaModel> | $Enums.EntityType
  }

  export type EntityNameEntityTypeCountryCompoundUniqueInput = {
    name: string
    entityType: $Enums.EntityType
    country: string
  }

  export type EntityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    entityType?: SortOrder
    country?: SortOrder
    province?: SortOrder
    city?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EntityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    entityType?: SortOrder
    country?: SortOrder
    province?: SortOrder
    city?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EntityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    entityType?: SortOrder
    country?: SortOrder
    province?: SortOrder
    city?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumEntityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityType | EnumEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEntityTypeWithAggregatesFilter<$PrismaModel> | $Enums.EntityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEntityTypeFilter<$PrismaModel>
    _max?: NestedEnumEntityTypeFilter<$PrismaModel>
  }

  export type ContentScalarRelationFilter = {
    is?: ContentWhereInput
    isNot?: ContentWhereInput
  }

  export type EntityScalarRelationFilter = {
    is?: EntityWhereInput
    isNot?: EntityWhereInput
  }

  export type ContentEntityContentIdEntityIdCompoundUniqueInput = {
    contentId: string
    entityId: string
  }

  export type ContentEntityCountOrderByAggregateInput = {
    contentId?: SortOrder
    entityId?: SortOrder
    confidence?: SortOrder
    role?: SortOrder
  }

  export type ContentEntityAvgOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type ContentEntityMaxOrderByAggregateInput = {
    contentId?: SortOrder
    entityId?: SortOrder
    confidence?: SortOrder
    role?: SortOrder
  }

  export type ContentEntityMinOrderByAggregateInput = {
    contentId?: SortOrder
    entityId?: SortOrder
    confidence?: SortOrder
    role?: SortOrder
  }

  export type ContentEntitySumOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type EnumEventOriginFilter<$PrismaModel = never> = {
    equals?: $Enums.EventOrigin | EnumEventOriginFieldRefInput<$PrismaModel>
    in?: $Enums.EventOrigin[] | ListEnumEventOriginFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventOrigin[] | ListEnumEventOriginFieldRefInput<$PrismaModel>
    not?: NestedEnumEventOriginFilter<$PrismaModel> | $Enums.EventOrigin
  }

  export type EnumVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusFilter<$PrismaModel> | $Enums.VerificationStatus
  }

  export type SourceNullableScalarRelationFilter = {
    is?: SourceWhereInput | null
    isNot?: SourceWhereInput | null
  }

  export type EventCandidateCountOrderByAggregateInput = {
    id?: SortOrder
    contentId?: SortOrder
    sourceId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    startTime?: SortOrder
    location?: SortOrder
    venue?: SortOrder
    city?: SortOrder
    province?: SortOrder
    country?: SortOrder
    organizer?: SortOrder
    origin?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    registrationUrl?: SortOrder
    contact?: SortOrder
    sourceUrl?: SortOrder
    imageUrl?: SortOrder
    confidence?: SortOrder
    verificationStatus?: SortOrder
    duplicateStatus?: SortOrder
    duplicateOfId?: SortOrder
    duplicateReason?: SortOrder
    editorialStatus?: SortOrder
    scheduledFor?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventCandidateAvgOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type EventCandidateMaxOrderByAggregateInput = {
    id?: SortOrder
    contentId?: SortOrder
    sourceId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    startTime?: SortOrder
    location?: SortOrder
    venue?: SortOrder
    city?: SortOrder
    province?: SortOrder
    country?: SortOrder
    organizer?: SortOrder
    origin?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    registrationUrl?: SortOrder
    contact?: SortOrder
    sourceUrl?: SortOrder
    imageUrl?: SortOrder
    confidence?: SortOrder
    verificationStatus?: SortOrder
    duplicateStatus?: SortOrder
    duplicateOfId?: SortOrder
    duplicateReason?: SortOrder
    editorialStatus?: SortOrder
    scheduledFor?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventCandidateMinOrderByAggregateInput = {
    id?: SortOrder
    contentId?: SortOrder
    sourceId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    startTime?: SortOrder
    location?: SortOrder
    venue?: SortOrder
    city?: SortOrder
    province?: SortOrder
    country?: SortOrder
    organizer?: SortOrder
    origin?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    registrationUrl?: SortOrder
    contact?: SortOrder
    sourceUrl?: SortOrder
    imageUrl?: SortOrder
    confidence?: SortOrder
    verificationStatus?: SortOrder
    duplicateStatus?: SortOrder
    duplicateOfId?: SortOrder
    duplicateReason?: SortOrder
    editorialStatus?: SortOrder
    scheduledFor?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventCandidateSumOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type EnumEventOriginWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventOrigin | EnumEventOriginFieldRefInput<$PrismaModel>
    in?: $Enums.EventOrigin[] | ListEnumEventOriginFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventOrigin[] | ListEnumEventOriginFieldRefInput<$PrismaModel>
    not?: NestedEnumEventOriginWithAggregatesFilter<$PrismaModel> | $Enums.EventOrigin
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventOriginFilter<$PrismaModel>
    _max?: NestedEnumEventOriginFilter<$PrismaModel>
  }

  export type EnumVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.VerificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationStatusFilter<$PrismaModel>
    _max?: NestedEnumVerificationStatusFilter<$PrismaModel>
  }

  export type EditorialReviewCountOrderByAggregateInput = {
    id?: SortOrder
    contentId?: SortOrder
    eventCandidateId?: SortOrder
    reviewerId?: SortOrder
    reviewerName?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type EditorialReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    contentId?: SortOrder
    eventCandidateId?: SortOrder
    reviewerId?: SortOrder
    reviewerName?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type EditorialReviewMinOrderByAggregateInput = {
    id?: SortOrder
    contentId?: SortOrder
    eventCandidateId?: SortOrder
    reviewerId?: SortOrder
    reviewerName?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumPublicationTargetFilter<$PrismaModel = never> = {
    equals?: $Enums.PublicationTarget | EnumPublicationTargetFieldRefInput<$PrismaModel>
    in?: $Enums.PublicationTarget[] | ListEnumPublicationTargetFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublicationTarget[] | ListEnumPublicationTargetFieldRefInput<$PrismaModel>
    not?: NestedEnumPublicationTargetFilter<$PrismaModel> | $Enums.PublicationTarget
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PublicationCountOrderByAggregateInput = {
    id?: SortOrder
    contentId?: SortOrder
    eventCandidateId?: SortOrder
    target?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublicationMaxOrderByAggregateInput = {
    id?: SortOrder
    contentId?: SortOrder
    eventCandidateId?: SortOrder
    target?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublicationMinOrderByAggregateInput = {
    id?: SortOrder
    contentId?: SortOrder
    eventCandidateId?: SortOrder
    target?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPublicationTargetWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PublicationTarget | EnumPublicationTargetFieldRefInput<$PrismaModel>
    in?: $Enums.PublicationTarget[] | ListEnumPublicationTargetFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublicationTarget[] | ListEnumPublicationTargetFieldRefInput<$PrismaModel>
    not?: NestedEnumPublicationTargetWithAggregatesFilter<$PrismaModel> | $Enums.PublicationTarget
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPublicationTargetFilter<$PrismaModel>
    _max?: NestedEnumPublicationTargetFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type CrawlJobCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sourceId?: SortOrder
    jobType?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    backoffMs?: SortOrder
    discoveredCount?: SortOrder
    processedCount?: SortOrder
    logs?: SortOrder
    error?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CrawlJobAvgOrderByAggregateInput = {
    attempts?: SortOrder
    maxAttempts?: SortOrder
    backoffMs?: SortOrder
    discoveredCount?: SortOrder
    processedCount?: SortOrder
  }

  export type CrawlJobMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sourceId?: SortOrder
    jobType?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    backoffMs?: SortOrder
    discoveredCount?: SortOrder
    processedCount?: SortOrder
    error?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CrawlJobMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sourceId?: SortOrder
    jobType?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    backoffMs?: SortOrder
    discoveredCount?: SortOrder
    processedCount?: SortOrder
    error?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CrawlJobSumOrderByAggregateInput = {
    attempts?: SortOrder
    maxAttempts?: SortOrder
    backoffMs?: SortOrder
    discoveredCount?: SortOrder
    processedCount?: SortOrder
  }

  export type EnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    actorName?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    actorName?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    actorName?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
  }

  export type RawContentCreateNestedManyWithoutSourceInput = {
    create?: XOR<RawContentCreateWithoutSourceInput, RawContentUncheckedCreateWithoutSourceInput> | RawContentCreateWithoutSourceInput[] | RawContentUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: RawContentCreateOrConnectWithoutSourceInput | RawContentCreateOrConnectWithoutSourceInput[]
    createMany?: RawContentCreateManySourceInputEnvelope
    connect?: RawContentWhereUniqueInput | RawContentWhereUniqueInput[]
  }

  export type EventCandidateCreateNestedManyWithoutSourceInput = {
    create?: XOR<EventCandidateCreateWithoutSourceInput, EventCandidateUncheckedCreateWithoutSourceInput> | EventCandidateCreateWithoutSourceInput[] | EventCandidateUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: EventCandidateCreateOrConnectWithoutSourceInput | EventCandidateCreateOrConnectWithoutSourceInput[]
    createMany?: EventCandidateCreateManySourceInputEnvelope
    connect?: EventCandidateWhereUniqueInput | EventCandidateWhereUniqueInput[]
  }

  export type RawContentUncheckedCreateNestedManyWithoutSourceInput = {
    create?: XOR<RawContentCreateWithoutSourceInput, RawContentUncheckedCreateWithoutSourceInput> | RawContentCreateWithoutSourceInput[] | RawContentUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: RawContentCreateOrConnectWithoutSourceInput | RawContentCreateOrConnectWithoutSourceInput[]
    createMany?: RawContentCreateManySourceInputEnvelope
    connect?: RawContentWhereUniqueInput | RawContentWhereUniqueInput[]
  }

  export type EventCandidateUncheckedCreateNestedManyWithoutSourceInput = {
    create?: XOR<EventCandidateCreateWithoutSourceInput, EventCandidateUncheckedCreateWithoutSourceInput> | EventCandidateCreateWithoutSourceInput[] | EventCandidateUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: EventCandidateCreateOrConnectWithoutSourceInput | EventCandidateCreateOrConnectWithoutSourceInput[]
    createMany?: EventCandidateCreateManySourceInputEnvelope
    connect?: EventCandidateWhereUniqueInput | EventCandidateWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumSourceTypeFieldUpdateOperationsInput = {
    set?: $Enums.SourceType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumSourceStatusFieldUpdateOperationsInput = {
    set?: $Enums.SourceStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RawContentUpdateManyWithoutSourceNestedInput = {
    create?: XOR<RawContentCreateWithoutSourceInput, RawContentUncheckedCreateWithoutSourceInput> | RawContentCreateWithoutSourceInput[] | RawContentUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: RawContentCreateOrConnectWithoutSourceInput | RawContentCreateOrConnectWithoutSourceInput[]
    upsert?: RawContentUpsertWithWhereUniqueWithoutSourceInput | RawContentUpsertWithWhereUniqueWithoutSourceInput[]
    createMany?: RawContentCreateManySourceInputEnvelope
    set?: RawContentWhereUniqueInput | RawContentWhereUniqueInput[]
    disconnect?: RawContentWhereUniqueInput | RawContentWhereUniqueInput[]
    delete?: RawContentWhereUniqueInput | RawContentWhereUniqueInput[]
    connect?: RawContentWhereUniqueInput | RawContentWhereUniqueInput[]
    update?: RawContentUpdateWithWhereUniqueWithoutSourceInput | RawContentUpdateWithWhereUniqueWithoutSourceInput[]
    updateMany?: RawContentUpdateManyWithWhereWithoutSourceInput | RawContentUpdateManyWithWhereWithoutSourceInput[]
    deleteMany?: RawContentScalarWhereInput | RawContentScalarWhereInput[]
  }

  export type EventCandidateUpdateManyWithoutSourceNestedInput = {
    create?: XOR<EventCandidateCreateWithoutSourceInput, EventCandidateUncheckedCreateWithoutSourceInput> | EventCandidateCreateWithoutSourceInput[] | EventCandidateUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: EventCandidateCreateOrConnectWithoutSourceInput | EventCandidateCreateOrConnectWithoutSourceInput[]
    upsert?: EventCandidateUpsertWithWhereUniqueWithoutSourceInput | EventCandidateUpsertWithWhereUniqueWithoutSourceInput[]
    createMany?: EventCandidateCreateManySourceInputEnvelope
    set?: EventCandidateWhereUniqueInput | EventCandidateWhereUniqueInput[]
    disconnect?: EventCandidateWhereUniqueInput | EventCandidateWhereUniqueInput[]
    delete?: EventCandidateWhereUniqueInput | EventCandidateWhereUniqueInput[]
    connect?: EventCandidateWhereUniqueInput | EventCandidateWhereUniqueInput[]
    update?: EventCandidateUpdateWithWhereUniqueWithoutSourceInput | EventCandidateUpdateWithWhereUniqueWithoutSourceInput[]
    updateMany?: EventCandidateUpdateManyWithWhereWithoutSourceInput | EventCandidateUpdateManyWithWhereWithoutSourceInput[]
    deleteMany?: EventCandidateScalarWhereInput | EventCandidateScalarWhereInput[]
  }

  export type RawContentUncheckedUpdateManyWithoutSourceNestedInput = {
    create?: XOR<RawContentCreateWithoutSourceInput, RawContentUncheckedCreateWithoutSourceInput> | RawContentCreateWithoutSourceInput[] | RawContentUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: RawContentCreateOrConnectWithoutSourceInput | RawContentCreateOrConnectWithoutSourceInput[]
    upsert?: RawContentUpsertWithWhereUniqueWithoutSourceInput | RawContentUpsertWithWhereUniqueWithoutSourceInput[]
    createMany?: RawContentCreateManySourceInputEnvelope
    set?: RawContentWhereUniqueInput | RawContentWhereUniqueInput[]
    disconnect?: RawContentWhereUniqueInput | RawContentWhereUniqueInput[]
    delete?: RawContentWhereUniqueInput | RawContentWhereUniqueInput[]
    connect?: RawContentWhereUniqueInput | RawContentWhereUniqueInput[]
    update?: RawContentUpdateWithWhereUniqueWithoutSourceInput | RawContentUpdateWithWhereUniqueWithoutSourceInput[]
    updateMany?: RawContentUpdateManyWithWhereWithoutSourceInput | RawContentUpdateManyWithWhereWithoutSourceInput[]
    deleteMany?: RawContentScalarWhereInput | RawContentScalarWhereInput[]
  }

  export type EventCandidateUncheckedUpdateManyWithoutSourceNestedInput = {
    create?: XOR<EventCandidateCreateWithoutSourceInput, EventCandidateUncheckedCreateWithoutSourceInput> | EventCandidateCreateWithoutSourceInput[] | EventCandidateUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: EventCandidateCreateOrConnectWithoutSourceInput | EventCandidateCreateOrConnectWithoutSourceInput[]
    upsert?: EventCandidateUpsertWithWhereUniqueWithoutSourceInput | EventCandidateUpsertWithWhereUniqueWithoutSourceInput[]
    createMany?: EventCandidateCreateManySourceInputEnvelope
    set?: EventCandidateWhereUniqueInput | EventCandidateWhereUniqueInput[]
    disconnect?: EventCandidateWhereUniqueInput | EventCandidateWhereUniqueInput[]
    delete?: EventCandidateWhereUniqueInput | EventCandidateWhereUniqueInput[]
    connect?: EventCandidateWhereUniqueInput | EventCandidateWhereUniqueInput[]
    update?: EventCandidateUpdateWithWhereUniqueWithoutSourceInput | EventCandidateUpdateWithWhereUniqueWithoutSourceInput[]
    updateMany?: EventCandidateUpdateManyWithWhereWithoutSourceInput | EventCandidateUpdateManyWithWhereWithoutSourceInput[]
    deleteMany?: EventCandidateScalarWhereInput | EventCandidateScalarWhereInput[]
  }

  export type SourceCreateNestedOneWithoutRawContentsInput = {
    create?: XOR<SourceCreateWithoutRawContentsInput, SourceUncheckedCreateWithoutRawContentsInput>
    connectOrCreate?: SourceCreateOrConnectWithoutRawContentsInput
    connect?: SourceWhereUniqueInput
  }

  export type ContentCreateNestedOneWithoutRawContentInput = {
    create?: XOR<ContentCreateWithoutRawContentInput, ContentUncheckedCreateWithoutRawContentInput>
    connectOrCreate?: ContentCreateOrConnectWithoutRawContentInput
    connect?: ContentWhereUniqueInput
  }

  export type ContentUncheckedCreateNestedOneWithoutRawContentInput = {
    create?: XOR<ContentCreateWithoutRawContentInput, ContentUncheckedCreateWithoutRawContentInput>
    connectOrCreate?: ContentCreateOrConnectWithoutRawContentInput
    connect?: ContentWhereUniqueInput
  }

  export type EnumRawContentStatusFieldUpdateOperationsInput = {
    set?: $Enums.RawContentStatus
  }

  export type SourceUpdateOneRequiredWithoutRawContentsNestedInput = {
    create?: XOR<SourceCreateWithoutRawContentsInput, SourceUncheckedCreateWithoutRawContentsInput>
    connectOrCreate?: SourceCreateOrConnectWithoutRawContentsInput
    upsert?: SourceUpsertWithoutRawContentsInput
    connect?: SourceWhereUniqueInput
    update?: XOR<XOR<SourceUpdateToOneWithWhereWithoutRawContentsInput, SourceUpdateWithoutRawContentsInput>, SourceUncheckedUpdateWithoutRawContentsInput>
  }

  export type ContentUpdateOneWithoutRawContentNestedInput = {
    create?: XOR<ContentCreateWithoutRawContentInput, ContentUncheckedCreateWithoutRawContentInput>
    connectOrCreate?: ContentCreateOrConnectWithoutRawContentInput
    upsert?: ContentUpsertWithoutRawContentInput
    disconnect?: ContentWhereInput | boolean
    delete?: ContentWhereInput | boolean
    connect?: ContentWhereUniqueInput
    update?: XOR<XOR<ContentUpdateToOneWithWhereWithoutRawContentInput, ContentUpdateWithoutRawContentInput>, ContentUncheckedUpdateWithoutRawContentInput>
  }

  export type ContentUncheckedUpdateOneWithoutRawContentNestedInput = {
    create?: XOR<ContentCreateWithoutRawContentInput, ContentUncheckedCreateWithoutRawContentInput>
    connectOrCreate?: ContentCreateOrConnectWithoutRawContentInput
    upsert?: ContentUpsertWithoutRawContentInput
    disconnect?: ContentWhereInput | boolean
    delete?: ContentWhereInput | boolean
    connect?: ContentWhereUniqueInput
    update?: XOR<XOR<ContentUpdateToOneWithWhereWithoutRawContentInput, ContentUpdateWithoutRawContentInput>, ContentUncheckedUpdateWithoutRawContentInput>
  }

  export type RawContentCreateNestedOneWithoutContentInput = {
    create?: XOR<RawContentCreateWithoutContentInput, RawContentUncheckedCreateWithoutContentInput>
    connectOrCreate?: RawContentCreateOrConnectWithoutContentInput
    connect?: RawContentWhereUniqueInput
  }

  export type ContentEntityCreateNestedManyWithoutContentInput = {
    create?: XOR<ContentEntityCreateWithoutContentInput, ContentEntityUncheckedCreateWithoutContentInput> | ContentEntityCreateWithoutContentInput[] | ContentEntityUncheckedCreateWithoutContentInput[]
    connectOrCreate?: ContentEntityCreateOrConnectWithoutContentInput | ContentEntityCreateOrConnectWithoutContentInput[]
    createMany?: ContentEntityCreateManyContentInputEnvelope
    connect?: ContentEntityWhereUniqueInput | ContentEntityWhereUniqueInput[]
  }

  export type EventCandidateCreateNestedOneWithoutContentInput = {
    create?: XOR<EventCandidateCreateWithoutContentInput, EventCandidateUncheckedCreateWithoutContentInput>
    connectOrCreate?: EventCandidateCreateOrConnectWithoutContentInput
    connect?: EventCandidateWhereUniqueInput
  }

  export type EditorialReviewCreateNestedManyWithoutContentInput = {
    create?: XOR<EditorialReviewCreateWithoutContentInput, EditorialReviewUncheckedCreateWithoutContentInput> | EditorialReviewCreateWithoutContentInput[] | EditorialReviewUncheckedCreateWithoutContentInput[]
    connectOrCreate?: EditorialReviewCreateOrConnectWithoutContentInput | EditorialReviewCreateOrConnectWithoutContentInput[]
    createMany?: EditorialReviewCreateManyContentInputEnvelope
    connect?: EditorialReviewWhereUniqueInput | EditorialReviewWhereUniqueInput[]
  }

  export type PublicationCreateNestedManyWithoutContentInput = {
    create?: XOR<PublicationCreateWithoutContentInput, PublicationUncheckedCreateWithoutContentInput> | PublicationCreateWithoutContentInput[] | PublicationUncheckedCreateWithoutContentInput[]
    connectOrCreate?: PublicationCreateOrConnectWithoutContentInput | PublicationCreateOrConnectWithoutContentInput[]
    createMany?: PublicationCreateManyContentInputEnvelope
    connect?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
  }

  export type ContentEntityUncheckedCreateNestedManyWithoutContentInput = {
    create?: XOR<ContentEntityCreateWithoutContentInput, ContentEntityUncheckedCreateWithoutContentInput> | ContentEntityCreateWithoutContentInput[] | ContentEntityUncheckedCreateWithoutContentInput[]
    connectOrCreate?: ContentEntityCreateOrConnectWithoutContentInput | ContentEntityCreateOrConnectWithoutContentInput[]
    createMany?: ContentEntityCreateManyContentInputEnvelope
    connect?: ContentEntityWhereUniqueInput | ContentEntityWhereUniqueInput[]
  }

  export type EventCandidateUncheckedCreateNestedOneWithoutContentInput = {
    create?: XOR<EventCandidateCreateWithoutContentInput, EventCandidateUncheckedCreateWithoutContentInput>
    connectOrCreate?: EventCandidateCreateOrConnectWithoutContentInput
    connect?: EventCandidateWhereUniqueInput
  }

  export type EditorialReviewUncheckedCreateNestedManyWithoutContentInput = {
    create?: XOR<EditorialReviewCreateWithoutContentInput, EditorialReviewUncheckedCreateWithoutContentInput> | EditorialReviewCreateWithoutContentInput[] | EditorialReviewUncheckedCreateWithoutContentInput[]
    connectOrCreate?: EditorialReviewCreateOrConnectWithoutContentInput | EditorialReviewCreateOrConnectWithoutContentInput[]
    createMany?: EditorialReviewCreateManyContentInputEnvelope
    connect?: EditorialReviewWhereUniqueInput | EditorialReviewWhereUniqueInput[]
  }

  export type PublicationUncheckedCreateNestedManyWithoutContentInput = {
    create?: XOR<PublicationCreateWithoutContentInput, PublicationUncheckedCreateWithoutContentInput> | PublicationCreateWithoutContentInput[] | PublicationUncheckedCreateWithoutContentInput[]
    connectOrCreate?: PublicationCreateOrConnectWithoutContentInput | PublicationCreateOrConnectWithoutContentInput[]
    createMany?: PublicationCreateManyContentInputEnvelope
    connect?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
  }

  export type EnumIntelligenceContentTypeFieldUpdateOperationsInput = {
    set?: $Enums.IntelligenceContentType
  }

  export type EnumDuplicateStatusFieldUpdateOperationsInput = {
    set?: $Enums.DuplicateStatus
  }

  export type EnumEditorialStatusFieldUpdateOperationsInput = {
    set?: $Enums.EditorialStatus
  }

  export type RawContentUpdateOneRequiredWithoutContentNestedInput = {
    create?: XOR<RawContentCreateWithoutContentInput, RawContentUncheckedCreateWithoutContentInput>
    connectOrCreate?: RawContentCreateOrConnectWithoutContentInput
    upsert?: RawContentUpsertWithoutContentInput
    connect?: RawContentWhereUniqueInput
    update?: XOR<XOR<RawContentUpdateToOneWithWhereWithoutContentInput, RawContentUpdateWithoutContentInput>, RawContentUncheckedUpdateWithoutContentInput>
  }

  export type ContentEntityUpdateManyWithoutContentNestedInput = {
    create?: XOR<ContentEntityCreateWithoutContentInput, ContentEntityUncheckedCreateWithoutContentInput> | ContentEntityCreateWithoutContentInput[] | ContentEntityUncheckedCreateWithoutContentInput[]
    connectOrCreate?: ContentEntityCreateOrConnectWithoutContentInput | ContentEntityCreateOrConnectWithoutContentInput[]
    upsert?: ContentEntityUpsertWithWhereUniqueWithoutContentInput | ContentEntityUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: ContentEntityCreateManyContentInputEnvelope
    set?: ContentEntityWhereUniqueInput | ContentEntityWhereUniqueInput[]
    disconnect?: ContentEntityWhereUniqueInput | ContentEntityWhereUniqueInput[]
    delete?: ContentEntityWhereUniqueInput | ContentEntityWhereUniqueInput[]
    connect?: ContentEntityWhereUniqueInput | ContentEntityWhereUniqueInput[]
    update?: ContentEntityUpdateWithWhereUniqueWithoutContentInput | ContentEntityUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: ContentEntityUpdateManyWithWhereWithoutContentInput | ContentEntityUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: ContentEntityScalarWhereInput | ContentEntityScalarWhereInput[]
  }

  export type EventCandidateUpdateOneWithoutContentNestedInput = {
    create?: XOR<EventCandidateCreateWithoutContentInput, EventCandidateUncheckedCreateWithoutContentInput>
    connectOrCreate?: EventCandidateCreateOrConnectWithoutContentInput
    upsert?: EventCandidateUpsertWithoutContentInput
    disconnect?: EventCandidateWhereInput | boolean
    delete?: EventCandidateWhereInput | boolean
    connect?: EventCandidateWhereUniqueInput
    update?: XOR<XOR<EventCandidateUpdateToOneWithWhereWithoutContentInput, EventCandidateUpdateWithoutContentInput>, EventCandidateUncheckedUpdateWithoutContentInput>
  }

  export type EditorialReviewUpdateManyWithoutContentNestedInput = {
    create?: XOR<EditorialReviewCreateWithoutContentInput, EditorialReviewUncheckedCreateWithoutContentInput> | EditorialReviewCreateWithoutContentInput[] | EditorialReviewUncheckedCreateWithoutContentInput[]
    connectOrCreate?: EditorialReviewCreateOrConnectWithoutContentInput | EditorialReviewCreateOrConnectWithoutContentInput[]
    upsert?: EditorialReviewUpsertWithWhereUniqueWithoutContentInput | EditorialReviewUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: EditorialReviewCreateManyContentInputEnvelope
    set?: EditorialReviewWhereUniqueInput | EditorialReviewWhereUniqueInput[]
    disconnect?: EditorialReviewWhereUniqueInput | EditorialReviewWhereUniqueInput[]
    delete?: EditorialReviewWhereUniqueInput | EditorialReviewWhereUniqueInput[]
    connect?: EditorialReviewWhereUniqueInput | EditorialReviewWhereUniqueInput[]
    update?: EditorialReviewUpdateWithWhereUniqueWithoutContentInput | EditorialReviewUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: EditorialReviewUpdateManyWithWhereWithoutContentInput | EditorialReviewUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: EditorialReviewScalarWhereInput | EditorialReviewScalarWhereInput[]
  }

  export type PublicationUpdateManyWithoutContentNestedInput = {
    create?: XOR<PublicationCreateWithoutContentInput, PublicationUncheckedCreateWithoutContentInput> | PublicationCreateWithoutContentInput[] | PublicationUncheckedCreateWithoutContentInput[]
    connectOrCreate?: PublicationCreateOrConnectWithoutContentInput | PublicationCreateOrConnectWithoutContentInput[]
    upsert?: PublicationUpsertWithWhereUniqueWithoutContentInput | PublicationUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: PublicationCreateManyContentInputEnvelope
    set?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
    disconnect?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
    delete?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
    connect?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
    update?: PublicationUpdateWithWhereUniqueWithoutContentInput | PublicationUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: PublicationUpdateManyWithWhereWithoutContentInput | PublicationUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: PublicationScalarWhereInput | PublicationScalarWhereInput[]
  }

  export type ContentEntityUncheckedUpdateManyWithoutContentNestedInput = {
    create?: XOR<ContentEntityCreateWithoutContentInput, ContentEntityUncheckedCreateWithoutContentInput> | ContentEntityCreateWithoutContentInput[] | ContentEntityUncheckedCreateWithoutContentInput[]
    connectOrCreate?: ContentEntityCreateOrConnectWithoutContentInput | ContentEntityCreateOrConnectWithoutContentInput[]
    upsert?: ContentEntityUpsertWithWhereUniqueWithoutContentInput | ContentEntityUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: ContentEntityCreateManyContentInputEnvelope
    set?: ContentEntityWhereUniqueInput | ContentEntityWhereUniqueInput[]
    disconnect?: ContentEntityWhereUniqueInput | ContentEntityWhereUniqueInput[]
    delete?: ContentEntityWhereUniqueInput | ContentEntityWhereUniqueInput[]
    connect?: ContentEntityWhereUniqueInput | ContentEntityWhereUniqueInput[]
    update?: ContentEntityUpdateWithWhereUniqueWithoutContentInput | ContentEntityUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: ContentEntityUpdateManyWithWhereWithoutContentInput | ContentEntityUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: ContentEntityScalarWhereInput | ContentEntityScalarWhereInput[]
  }

  export type EventCandidateUncheckedUpdateOneWithoutContentNestedInput = {
    create?: XOR<EventCandidateCreateWithoutContentInput, EventCandidateUncheckedCreateWithoutContentInput>
    connectOrCreate?: EventCandidateCreateOrConnectWithoutContentInput
    upsert?: EventCandidateUpsertWithoutContentInput
    disconnect?: EventCandidateWhereInput | boolean
    delete?: EventCandidateWhereInput | boolean
    connect?: EventCandidateWhereUniqueInput
    update?: XOR<XOR<EventCandidateUpdateToOneWithWhereWithoutContentInput, EventCandidateUpdateWithoutContentInput>, EventCandidateUncheckedUpdateWithoutContentInput>
  }

  export type EditorialReviewUncheckedUpdateManyWithoutContentNestedInput = {
    create?: XOR<EditorialReviewCreateWithoutContentInput, EditorialReviewUncheckedCreateWithoutContentInput> | EditorialReviewCreateWithoutContentInput[] | EditorialReviewUncheckedCreateWithoutContentInput[]
    connectOrCreate?: EditorialReviewCreateOrConnectWithoutContentInput | EditorialReviewCreateOrConnectWithoutContentInput[]
    upsert?: EditorialReviewUpsertWithWhereUniqueWithoutContentInput | EditorialReviewUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: EditorialReviewCreateManyContentInputEnvelope
    set?: EditorialReviewWhereUniqueInput | EditorialReviewWhereUniqueInput[]
    disconnect?: EditorialReviewWhereUniqueInput | EditorialReviewWhereUniqueInput[]
    delete?: EditorialReviewWhereUniqueInput | EditorialReviewWhereUniqueInput[]
    connect?: EditorialReviewWhereUniqueInput | EditorialReviewWhereUniqueInput[]
    update?: EditorialReviewUpdateWithWhereUniqueWithoutContentInput | EditorialReviewUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: EditorialReviewUpdateManyWithWhereWithoutContentInput | EditorialReviewUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: EditorialReviewScalarWhereInput | EditorialReviewScalarWhereInput[]
  }

  export type PublicationUncheckedUpdateManyWithoutContentNestedInput = {
    create?: XOR<PublicationCreateWithoutContentInput, PublicationUncheckedCreateWithoutContentInput> | PublicationCreateWithoutContentInput[] | PublicationUncheckedCreateWithoutContentInput[]
    connectOrCreate?: PublicationCreateOrConnectWithoutContentInput | PublicationCreateOrConnectWithoutContentInput[]
    upsert?: PublicationUpsertWithWhereUniqueWithoutContentInput | PublicationUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: PublicationCreateManyContentInputEnvelope
    set?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
    disconnect?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
    delete?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
    connect?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
    update?: PublicationUpdateWithWhereUniqueWithoutContentInput | PublicationUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: PublicationUpdateManyWithWhereWithoutContentInput | PublicationUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: PublicationScalarWhereInput | PublicationScalarWhereInput[]
  }

  export type ContentEntityCreateNestedManyWithoutEntityInput = {
    create?: XOR<ContentEntityCreateWithoutEntityInput, ContentEntityUncheckedCreateWithoutEntityInput> | ContentEntityCreateWithoutEntityInput[] | ContentEntityUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: ContentEntityCreateOrConnectWithoutEntityInput | ContentEntityCreateOrConnectWithoutEntityInput[]
    createMany?: ContentEntityCreateManyEntityInputEnvelope
    connect?: ContentEntityWhereUniqueInput | ContentEntityWhereUniqueInput[]
  }

  export type ContentEntityUncheckedCreateNestedManyWithoutEntityInput = {
    create?: XOR<ContentEntityCreateWithoutEntityInput, ContentEntityUncheckedCreateWithoutEntityInput> | ContentEntityCreateWithoutEntityInput[] | ContentEntityUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: ContentEntityCreateOrConnectWithoutEntityInput | ContentEntityCreateOrConnectWithoutEntityInput[]
    createMany?: ContentEntityCreateManyEntityInputEnvelope
    connect?: ContentEntityWhereUniqueInput | ContentEntityWhereUniqueInput[]
  }

  export type EnumEntityTypeFieldUpdateOperationsInput = {
    set?: $Enums.EntityType
  }

  export type ContentEntityUpdateManyWithoutEntityNestedInput = {
    create?: XOR<ContentEntityCreateWithoutEntityInput, ContentEntityUncheckedCreateWithoutEntityInput> | ContentEntityCreateWithoutEntityInput[] | ContentEntityUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: ContentEntityCreateOrConnectWithoutEntityInput | ContentEntityCreateOrConnectWithoutEntityInput[]
    upsert?: ContentEntityUpsertWithWhereUniqueWithoutEntityInput | ContentEntityUpsertWithWhereUniqueWithoutEntityInput[]
    createMany?: ContentEntityCreateManyEntityInputEnvelope
    set?: ContentEntityWhereUniqueInput | ContentEntityWhereUniqueInput[]
    disconnect?: ContentEntityWhereUniqueInput | ContentEntityWhereUniqueInput[]
    delete?: ContentEntityWhereUniqueInput | ContentEntityWhereUniqueInput[]
    connect?: ContentEntityWhereUniqueInput | ContentEntityWhereUniqueInput[]
    update?: ContentEntityUpdateWithWhereUniqueWithoutEntityInput | ContentEntityUpdateWithWhereUniqueWithoutEntityInput[]
    updateMany?: ContentEntityUpdateManyWithWhereWithoutEntityInput | ContentEntityUpdateManyWithWhereWithoutEntityInput[]
    deleteMany?: ContentEntityScalarWhereInput | ContentEntityScalarWhereInput[]
  }

  export type ContentEntityUncheckedUpdateManyWithoutEntityNestedInput = {
    create?: XOR<ContentEntityCreateWithoutEntityInput, ContentEntityUncheckedCreateWithoutEntityInput> | ContentEntityCreateWithoutEntityInput[] | ContentEntityUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: ContentEntityCreateOrConnectWithoutEntityInput | ContentEntityCreateOrConnectWithoutEntityInput[]
    upsert?: ContentEntityUpsertWithWhereUniqueWithoutEntityInput | ContentEntityUpsertWithWhereUniqueWithoutEntityInput[]
    createMany?: ContentEntityCreateManyEntityInputEnvelope
    set?: ContentEntityWhereUniqueInput | ContentEntityWhereUniqueInput[]
    disconnect?: ContentEntityWhereUniqueInput | ContentEntityWhereUniqueInput[]
    delete?: ContentEntityWhereUniqueInput | ContentEntityWhereUniqueInput[]
    connect?: ContentEntityWhereUniqueInput | ContentEntityWhereUniqueInput[]
    update?: ContentEntityUpdateWithWhereUniqueWithoutEntityInput | ContentEntityUpdateWithWhereUniqueWithoutEntityInput[]
    updateMany?: ContentEntityUpdateManyWithWhereWithoutEntityInput | ContentEntityUpdateManyWithWhereWithoutEntityInput[]
    deleteMany?: ContentEntityScalarWhereInput | ContentEntityScalarWhereInput[]
  }

  export type ContentCreateNestedOneWithoutEntitiesInput = {
    create?: XOR<ContentCreateWithoutEntitiesInput, ContentUncheckedCreateWithoutEntitiesInput>
    connectOrCreate?: ContentCreateOrConnectWithoutEntitiesInput
    connect?: ContentWhereUniqueInput
  }

  export type EntityCreateNestedOneWithoutContentsInput = {
    create?: XOR<EntityCreateWithoutContentsInput, EntityUncheckedCreateWithoutContentsInput>
    connectOrCreate?: EntityCreateOrConnectWithoutContentsInput
    connect?: EntityWhereUniqueInput
  }

  export type ContentUpdateOneRequiredWithoutEntitiesNestedInput = {
    create?: XOR<ContentCreateWithoutEntitiesInput, ContentUncheckedCreateWithoutEntitiesInput>
    connectOrCreate?: ContentCreateOrConnectWithoutEntitiesInput
    upsert?: ContentUpsertWithoutEntitiesInput
    connect?: ContentWhereUniqueInput
    update?: XOR<XOR<ContentUpdateToOneWithWhereWithoutEntitiesInput, ContentUpdateWithoutEntitiesInput>, ContentUncheckedUpdateWithoutEntitiesInput>
  }

  export type EntityUpdateOneRequiredWithoutContentsNestedInput = {
    create?: XOR<EntityCreateWithoutContentsInput, EntityUncheckedCreateWithoutContentsInput>
    connectOrCreate?: EntityCreateOrConnectWithoutContentsInput
    upsert?: EntityUpsertWithoutContentsInput
    connect?: EntityWhereUniqueInput
    update?: XOR<XOR<EntityUpdateToOneWithWhereWithoutContentsInput, EntityUpdateWithoutContentsInput>, EntityUncheckedUpdateWithoutContentsInput>
  }

  export type ContentCreateNestedOneWithoutEventCandidateInput = {
    create?: XOR<ContentCreateWithoutEventCandidateInput, ContentUncheckedCreateWithoutEventCandidateInput>
    connectOrCreate?: ContentCreateOrConnectWithoutEventCandidateInput
    connect?: ContentWhereUniqueInput
  }

  export type SourceCreateNestedOneWithoutEventCandidatesInput = {
    create?: XOR<SourceCreateWithoutEventCandidatesInput, SourceUncheckedCreateWithoutEventCandidatesInput>
    connectOrCreate?: SourceCreateOrConnectWithoutEventCandidatesInput
    connect?: SourceWhereUniqueInput
  }

  export type EditorialReviewCreateNestedManyWithoutEventCandidateInput = {
    create?: XOR<EditorialReviewCreateWithoutEventCandidateInput, EditorialReviewUncheckedCreateWithoutEventCandidateInput> | EditorialReviewCreateWithoutEventCandidateInput[] | EditorialReviewUncheckedCreateWithoutEventCandidateInput[]
    connectOrCreate?: EditorialReviewCreateOrConnectWithoutEventCandidateInput | EditorialReviewCreateOrConnectWithoutEventCandidateInput[]
    createMany?: EditorialReviewCreateManyEventCandidateInputEnvelope
    connect?: EditorialReviewWhereUniqueInput | EditorialReviewWhereUniqueInput[]
  }

  export type PublicationCreateNestedManyWithoutEventCandidateInput = {
    create?: XOR<PublicationCreateWithoutEventCandidateInput, PublicationUncheckedCreateWithoutEventCandidateInput> | PublicationCreateWithoutEventCandidateInput[] | PublicationUncheckedCreateWithoutEventCandidateInput[]
    connectOrCreate?: PublicationCreateOrConnectWithoutEventCandidateInput | PublicationCreateOrConnectWithoutEventCandidateInput[]
    createMany?: PublicationCreateManyEventCandidateInputEnvelope
    connect?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
  }

  export type EditorialReviewUncheckedCreateNestedManyWithoutEventCandidateInput = {
    create?: XOR<EditorialReviewCreateWithoutEventCandidateInput, EditorialReviewUncheckedCreateWithoutEventCandidateInput> | EditorialReviewCreateWithoutEventCandidateInput[] | EditorialReviewUncheckedCreateWithoutEventCandidateInput[]
    connectOrCreate?: EditorialReviewCreateOrConnectWithoutEventCandidateInput | EditorialReviewCreateOrConnectWithoutEventCandidateInput[]
    createMany?: EditorialReviewCreateManyEventCandidateInputEnvelope
    connect?: EditorialReviewWhereUniqueInput | EditorialReviewWhereUniqueInput[]
  }

  export type PublicationUncheckedCreateNestedManyWithoutEventCandidateInput = {
    create?: XOR<PublicationCreateWithoutEventCandidateInput, PublicationUncheckedCreateWithoutEventCandidateInput> | PublicationCreateWithoutEventCandidateInput[] | PublicationUncheckedCreateWithoutEventCandidateInput[]
    connectOrCreate?: PublicationCreateOrConnectWithoutEventCandidateInput | PublicationCreateOrConnectWithoutEventCandidateInput[]
    createMany?: PublicationCreateManyEventCandidateInputEnvelope
    connect?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
  }

  export type EnumEventOriginFieldUpdateOperationsInput = {
    set?: $Enums.EventOrigin
  }

  export type EnumVerificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.VerificationStatus
  }

  export type ContentUpdateOneWithoutEventCandidateNestedInput = {
    create?: XOR<ContentCreateWithoutEventCandidateInput, ContentUncheckedCreateWithoutEventCandidateInput>
    connectOrCreate?: ContentCreateOrConnectWithoutEventCandidateInput
    upsert?: ContentUpsertWithoutEventCandidateInput
    disconnect?: ContentWhereInput | boolean
    delete?: ContentWhereInput | boolean
    connect?: ContentWhereUniqueInput
    update?: XOR<XOR<ContentUpdateToOneWithWhereWithoutEventCandidateInput, ContentUpdateWithoutEventCandidateInput>, ContentUncheckedUpdateWithoutEventCandidateInput>
  }

  export type SourceUpdateOneWithoutEventCandidatesNestedInput = {
    create?: XOR<SourceCreateWithoutEventCandidatesInput, SourceUncheckedCreateWithoutEventCandidatesInput>
    connectOrCreate?: SourceCreateOrConnectWithoutEventCandidatesInput
    upsert?: SourceUpsertWithoutEventCandidatesInput
    disconnect?: SourceWhereInput | boolean
    delete?: SourceWhereInput | boolean
    connect?: SourceWhereUniqueInput
    update?: XOR<XOR<SourceUpdateToOneWithWhereWithoutEventCandidatesInput, SourceUpdateWithoutEventCandidatesInput>, SourceUncheckedUpdateWithoutEventCandidatesInput>
  }

  export type EditorialReviewUpdateManyWithoutEventCandidateNestedInput = {
    create?: XOR<EditorialReviewCreateWithoutEventCandidateInput, EditorialReviewUncheckedCreateWithoutEventCandidateInput> | EditorialReviewCreateWithoutEventCandidateInput[] | EditorialReviewUncheckedCreateWithoutEventCandidateInput[]
    connectOrCreate?: EditorialReviewCreateOrConnectWithoutEventCandidateInput | EditorialReviewCreateOrConnectWithoutEventCandidateInput[]
    upsert?: EditorialReviewUpsertWithWhereUniqueWithoutEventCandidateInput | EditorialReviewUpsertWithWhereUniqueWithoutEventCandidateInput[]
    createMany?: EditorialReviewCreateManyEventCandidateInputEnvelope
    set?: EditorialReviewWhereUniqueInput | EditorialReviewWhereUniqueInput[]
    disconnect?: EditorialReviewWhereUniqueInput | EditorialReviewWhereUniqueInput[]
    delete?: EditorialReviewWhereUniqueInput | EditorialReviewWhereUniqueInput[]
    connect?: EditorialReviewWhereUniqueInput | EditorialReviewWhereUniqueInput[]
    update?: EditorialReviewUpdateWithWhereUniqueWithoutEventCandidateInput | EditorialReviewUpdateWithWhereUniqueWithoutEventCandidateInput[]
    updateMany?: EditorialReviewUpdateManyWithWhereWithoutEventCandidateInput | EditorialReviewUpdateManyWithWhereWithoutEventCandidateInput[]
    deleteMany?: EditorialReviewScalarWhereInput | EditorialReviewScalarWhereInput[]
  }

  export type PublicationUpdateManyWithoutEventCandidateNestedInput = {
    create?: XOR<PublicationCreateWithoutEventCandidateInput, PublicationUncheckedCreateWithoutEventCandidateInput> | PublicationCreateWithoutEventCandidateInput[] | PublicationUncheckedCreateWithoutEventCandidateInput[]
    connectOrCreate?: PublicationCreateOrConnectWithoutEventCandidateInput | PublicationCreateOrConnectWithoutEventCandidateInput[]
    upsert?: PublicationUpsertWithWhereUniqueWithoutEventCandidateInput | PublicationUpsertWithWhereUniqueWithoutEventCandidateInput[]
    createMany?: PublicationCreateManyEventCandidateInputEnvelope
    set?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
    disconnect?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
    delete?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
    connect?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
    update?: PublicationUpdateWithWhereUniqueWithoutEventCandidateInput | PublicationUpdateWithWhereUniqueWithoutEventCandidateInput[]
    updateMany?: PublicationUpdateManyWithWhereWithoutEventCandidateInput | PublicationUpdateManyWithWhereWithoutEventCandidateInput[]
    deleteMany?: PublicationScalarWhereInput | PublicationScalarWhereInput[]
  }

  export type EditorialReviewUncheckedUpdateManyWithoutEventCandidateNestedInput = {
    create?: XOR<EditorialReviewCreateWithoutEventCandidateInput, EditorialReviewUncheckedCreateWithoutEventCandidateInput> | EditorialReviewCreateWithoutEventCandidateInput[] | EditorialReviewUncheckedCreateWithoutEventCandidateInput[]
    connectOrCreate?: EditorialReviewCreateOrConnectWithoutEventCandidateInput | EditorialReviewCreateOrConnectWithoutEventCandidateInput[]
    upsert?: EditorialReviewUpsertWithWhereUniqueWithoutEventCandidateInput | EditorialReviewUpsertWithWhereUniqueWithoutEventCandidateInput[]
    createMany?: EditorialReviewCreateManyEventCandidateInputEnvelope
    set?: EditorialReviewWhereUniqueInput | EditorialReviewWhereUniqueInput[]
    disconnect?: EditorialReviewWhereUniqueInput | EditorialReviewWhereUniqueInput[]
    delete?: EditorialReviewWhereUniqueInput | EditorialReviewWhereUniqueInput[]
    connect?: EditorialReviewWhereUniqueInput | EditorialReviewWhereUniqueInput[]
    update?: EditorialReviewUpdateWithWhereUniqueWithoutEventCandidateInput | EditorialReviewUpdateWithWhereUniqueWithoutEventCandidateInput[]
    updateMany?: EditorialReviewUpdateManyWithWhereWithoutEventCandidateInput | EditorialReviewUpdateManyWithWhereWithoutEventCandidateInput[]
    deleteMany?: EditorialReviewScalarWhereInput | EditorialReviewScalarWhereInput[]
  }

  export type PublicationUncheckedUpdateManyWithoutEventCandidateNestedInput = {
    create?: XOR<PublicationCreateWithoutEventCandidateInput, PublicationUncheckedCreateWithoutEventCandidateInput> | PublicationCreateWithoutEventCandidateInput[] | PublicationUncheckedCreateWithoutEventCandidateInput[]
    connectOrCreate?: PublicationCreateOrConnectWithoutEventCandidateInput | PublicationCreateOrConnectWithoutEventCandidateInput[]
    upsert?: PublicationUpsertWithWhereUniqueWithoutEventCandidateInput | PublicationUpsertWithWhereUniqueWithoutEventCandidateInput[]
    createMany?: PublicationCreateManyEventCandidateInputEnvelope
    set?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
    disconnect?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
    delete?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
    connect?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
    update?: PublicationUpdateWithWhereUniqueWithoutEventCandidateInput | PublicationUpdateWithWhereUniqueWithoutEventCandidateInput[]
    updateMany?: PublicationUpdateManyWithWhereWithoutEventCandidateInput | PublicationUpdateManyWithWhereWithoutEventCandidateInput[]
    deleteMany?: PublicationScalarWhereInput | PublicationScalarWhereInput[]
  }

  export type ContentCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ContentCreateWithoutReviewsInput, ContentUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ContentCreateOrConnectWithoutReviewsInput
    connect?: ContentWhereUniqueInput
  }

  export type EventCandidateCreateNestedOneWithoutReviewsInput = {
    create?: XOR<EventCandidateCreateWithoutReviewsInput, EventCandidateUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: EventCandidateCreateOrConnectWithoutReviewsInput
    connect?: EventCandidateWhereUniqueInput
  }

  export type ContentUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<ContentCreateWithoutReviewsInput, ContentUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ContentCreateOrConnectWithoutReviewsInput
    upsert?: ContentUpsertWithoutReviewsInput
    disconnect?: ContentWhereInput | boolean
    delete?: ContentWhereInput | boolean
    connect?: ContentWhereUniqueInput
    update?: XOR<XOR<ContentUpdateToOneWithWhereWithoutReviewsInput, ContentUpdateWithoutReviewsInput>, ContentUncheckedUpdateWithoutReviewsInput>
  }

  export type EventCandidateUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<EventCandidateCreateWithoutReviewsInput, EventCandidateUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: EventCandidateCreateOrConnectWithoutReviewsInput
    upsert?: EventCandidateUpsertWithoutReviewsInput
    disconnect?: EventCandidateWhereInput | boolean
    delete?: EventCandidateWhereInput | boolean
    connect?: EventCandidateWhereUniqueInput
    update?: XOR<XOR<EventCandidateUpdateToOneWithWhereWithoutReviewsInput, EventCandidateUpdateWithoutReviewsInput>, EventCandidateUncheckedUpdateWithoutReviewsInput>
  }

  export type ContentCreateNestedOneWithoutPublicationsInput = {
    create?: XOR<ContentCreateWithoutPublicationsInput, ContentUncheckedCreateWithoutPublicationsInput>
    connectOrCreate?: ContentCreateOrConnectWithoutPublicationsInput
    connect?: ContentWhereUniqueInput
  }

  export type EventCandidateCreateNestedOneWithoutPublicationsInput = {
    create?: XOR<EventCandidateCreateWithoutPublicationsInput, EventCandidateUncheckedCreateWithoutPublicationsInput>
    connectOrCreate?: EventCandidateCreateOrConnectWithoutPublicationsInput
    connect?: EventCandidateWhereUniqueInput
  }

  export type EnumPublicationTargetFieldUpdateOperationsInput = {
    set?: $Enums.PublicationTarget
  }

  export type ContentUpdateOneWithoutPublicationsNestedInput = {
    create?: XOR<ContentCreateWithoutPublicationsInput, ContentUncheckedCreateWithoutPublicationsInput>
    connectOrCreate?: ContentCreateOrConnectWithoutPublicationsInput
    upsert?: ContentUpsertWithoutPublicationsInput
    disconnect?: ContentWhereInput | boolean
    delete?: ContentWhereInput | boolean
    connect?: ContentWhereUniqueInput
    update?: XOR<XOR<ContentUpdateToOneWithWhereWithoutPublicationsInput, ContentUpdateWithoutPublicationsInput>, ContentUncheckedUpdateWithoutPublicationsInput>
  }

  export type EventCandidateUpdateOneWithoutPublicationsNestedInput = {
    create?: XOR<EventCandidateCreateWithoutPublicationsInput, EventCandidateUncheckedCreateWithoutPublicationsInput>
    connectOrCreate?: EventCandidateCreateOrConnectWithoutPublicationsInput
    upsert?: EventCandidateUpsertWithoutPublicationsInput
    disconnect?: EventCandidateWhereInput | boolean
    delete?: EventCandidateWhereInput | boolean
    connect?: EventCandidateWhereUniqueInput
    update?: XOR<XOR<EventCandidateUpdateToOneWithWhereWithoutPublicationsInput, EventCandidateUpdateWithoutPublicationsInput>, EventCandidateUncheckedUpdateWithoutPublicationsInput>
  }

  export type EnumJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobStatus
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumSourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SourceType | EnumSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SourceType[] | ListEnumSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SourceType[] | ListEnumSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSourceTypeFilter<$PrismaModel> | $Enums.SourceType
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumSourceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SourceStatus | EnumSourceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SourceStatus[] | ListEnumSourceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SourceStatus[] | ListEnumSourceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSourceStatusFilter<$PrismaModel> | $Enums.SourceStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumSourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SourceType | EnumSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SourceType[] | ListEnumSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SourceType[] | ListEnumSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.SourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSourceTypeFilter<$PrismaModel>
    _max?: NestedEnumSourceTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumSourceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SourceStatus | EnumSourceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SourceStatus[] | ListEnumSourceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SourceStatus[] | ListEnumSourceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSourceStatusWithAggregatesFilter<$PrismaModel> | $Enums.SourceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSourceStatusFilter<$PrismaModel>
    _max?: NestedEnumSourceStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRawContentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RawContentStatus | EnumRawContentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RawContentStatus[] | ListEnumRawContentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RawContentStatus[] | ListEnumRawContentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRawContentStatusFilter<$PrismaModel> | $Enums.RawContentStatus
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumRawContentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RawContentStatus | EnumRawContentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RawContentStatus[] | ListEnumRawContentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RawContentStatus[] | ListEnumRawContentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRawContentStatusWithAggregatesFilter<$PrismaModel> | $Enums.RawContentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRawContentStatusFilter<$PrismaModel>
    _max?: NestedEnumRawContentStatusFilter<$PrismaModel>
  }

  export type NestedEnumIntelligenceContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.IntelligenceContentType | EnumIntelligenceContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IntelligenceContentType[] | ListEnumIntelligenceContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntelligenceContentType[] | ListEnumIntelligenceContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIntelligenceContentTypeFilter<$PrismaModel> | $Enums.IntelligenceContentType
  }

  export type NestedEnumDuplicateStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DuplicateStatus | EnumDuplicateStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DuplicateStatus[] | ListEnumDuplicateStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DuplicateStatus[] | ListEnumDuplicateStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDuplicateStatusFilter<$PrismaModel> | $Enums.DuplicateStatus
  }

  export type NestedEnumEditorialStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EditorialStatus | EnumEditorialStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EditorialStatus[] | ListEnumEditorialStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EditorialStatus[] | ListEnumEditorialStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEditorialStatusFilter<$PrismaModel> | $Enums.EditorialStatus
  }

  export type NestedEnumIntelligenceContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IntelligenceContentType | EnumIntelligenceContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IntelligenceContentType[] | ListEnumIntelligenceContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntelligenceContentType[] | ListEnumIntelligenceContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIntelligenceContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.IntelligenceContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIntelligenceContentTypeFilter<$PrismaModel>
    _max?: NestedEnumIntelligenceContentTypeFilter<$PrismaModel>
  }

  export type NestedEnumDuplicateStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DuplicateStatus | EnumDuplicateStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DuplicateStatus[] | ListEnumDuplicateStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DuplicateStatus[] | ListEnumDuplicateStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDuplicateStatusWithAggregatesFilter<$PrismaModel> | $Enums.DuplicateStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDuplicateStatusFilter<$PrismaModel>
    _max?: NestedEnumDuplicateStatusFilter<$PrismaModel>
  }

  export type NestedEnumEditorialStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EditorialStatus | EnumEditorialStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EditorialStatus[] | ListEnumEditorialStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EditorialStatus[] | ListEnumEditorialStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEditorialStatusWithAggregatesFilter<$PrismaModel> | $Enums.EditorialStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEditorialStatusFilter<$PrismaModel>
    _max?: NestedEnumEditorialStatusFilter<$PrismaModel>
  }

  export type NestedEnumEntityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityType | EnumEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEntityTypeFilter<$PrismaModel> | $Enums.EntityType
  }

  export type NestedEnumEntityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityType | EnumEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEntityTypeWithAggregatesFilter<$PrismaModel> | $Enums.EntityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEntityTypeFilter<$PrismaModel>
    _max?: NestedEnumEntityTypeFilter<$PrismaModel>
  }

  export type NestedEnumEventOriginFilter<$PrismaModel = never> = {
    equals?: $Enums.EventOrigin | EnumEventOriginFieldRefInput<$PrismaModel>
    in?: $Enums.EventOrigin[] | ListEnumEventOriginFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventOrigin[] | ListEnumEventOriginFieldRefInput<$PrismaModel>
    not?: NestedEnumEventOriginFilter<$PrismaModel> | $Enums.EventOrigin
  }

  export type NestedEnumVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusFilter<$PrismaModel> | $Enums.VerificationStatus
  }

  export type NestedEnumEventOriginWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventOrigin | EnumEventOriginFieldRefInput<$PrismaModel>
    in?: $Enums.EventOrigin[] | ListEnumEventOriginFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventOrigin[] | ListEnumEventOriginFieldRefInput<$PrismaModel>
    not?: NestedEnumEventOriginWithAggregatesFilter<$PrismaModel> | $Enums.EventOrigin
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventOriginFilter<$PrismaModel>
    _max?: NestedEnumEventOriginFilter<$PrismaModel>
  }

  export type NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.VerificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationStatusFilter<$PrismaModel>
    _max?: NestedEnumVerificationStatusFilter<$PrismaModel>
  }

  export type NestedEnumPublicationTargetFilter<$PrismaModel = never> = {
    equals?: $Enums.PublicationTarget | EnumPublicationTargetFieldRefInput<$PrismaModel>
    in?: $Enums.PublicationTarget[] | ListEnumPublicationTargetFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublicationTarget[] | ListEnumPublicationTargetFieldRefInput<$PrismaModel>
    not?: NestedEnumPublicationTargetFilter<$PrismaModel> | $Enums.PublicationTarget
  }

  export type NestedEnumPublicationTargetWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PublicationTarget | EnumPublicationTargetFieldRefInput<$PrismaModel>
    in?: $Enums.PublicationTarget[] | ListEnumPublicationTargetFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublicationTarget[] | ListEnumPublicationTargetFieldRefInput<$PrismaModel>
    not?: NestedEnumPublicationTargetWithAggregatesFilter<$PrismaModel> | $Enums.PublicationTarget
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPublicationTargetFilter<$PrismaModel>
    _max?: NestedEnumPublicationTargetFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type NestedEnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type RawContentCreateWithoutSourceInput = {
    id?: string
    externalId?: string | null
    canonicalUrl?: string | null
    title: string
    rawText: string
    rawHtml?: string | null
    author?: string | null
    publishedAt?: Date | string | null
    discoveredAt?: Date | string
    fetchedAt?: Date | string
    contentHash: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.RawContentStatus
    content?: ContentCreateNestedOneWithoutRawContentInput
  }

  export type RawContentUncheckedCreateWithoutSourceInput = {
    id?: string
    externalId?: string | null
    canonicalUrl?: string | null
    title: string
    rawText: string
    rawHtml?: string | null
    author?: string | null
    publishedAt?: Date | string | null
    discoveredAt?: Date | string
    fetchedAt?: Date | string
    contentHash: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.RawContentStatus
    content?: ContentUncheckedCreateNestedOneWithoutRawContentInput
  }

  export type RawContentCreateOrConnectWithoutSourceInput = {
    where: RawContentWhereUniqueInput
    create: XOR<RawContentCreateWithoutSourceInput, RawContentUncheckedCreateWithoutSourceInput>
  }

  export type RawContentCreateManySourceInputEnvelope = {
    data: RawContentCreateManySourceInput | RawContentCreateManySourceInput[]
    skipDuplicates?: boolean
  }

  export type EventCandidateCreateWithoutSourceInput = {
    id?: string
    name: string
    category?: string | null
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    startTime?: string | null
    location?: string | null
    venue?: string | null
    city?: string | null
    province?: string | null
    country?: string
    organizer?: string | null
    origin?: $Enums.EventOrigin
    price?: string | null
    currency?: string
    registrationUrl?: string | null
    contact?: string | null
    sourceUrl?: string | null
    imageUrl?: string | null
    confidence?: number
    verificationStatus?: $Enums.VerificationStatus
    duplicateStatus?: $Enums.DuplicateStatus
    duplicateOfId?: string | null
    duplicateReason?: string | null
    editorialStatus?: $Enums.EditorialStatus
    scheduledFor?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: ContentCreateNestedOneWithoutEventCandidateInput
    reviews?: EditorialReviewCreateNestedManyWithoutEventCandidateInput
    publications?: PublicationCreateNestedManyWithoutEventCandidateInput
  }

  export type EventCandidateUncheckedCreateWithoutSourceInput = {
    id?: string
    contentId?: string | null
    name: string
    category?: string | null
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    startTime?: string | null
    location?: string | null
    venue?: string | null
    city?: string | null
    province?: string | null
    country?: string
    organizer?: string | null
    origin?: $Enums.EventOrigin
    price?: string | null
    currency?: string
    registrationUrl?: string | null
    contact?: string | null
    sourceUrl?: string | null
    imageUrl?: string | null
    confidence?: number
    verificationStatus?: $Enums.VerificationStatus
    duplicateStatus?: $Enums.DuplicateStatus
    duplicateOfId?: string | null
    duplicateReason?: string | null
    editorialStatus?: $Enums.EditorialStatus
    scheduledFor?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: EditorialReviewUncheckedCreateNestedManyWithoutEventCandidateInput
    publications?: PublicationUncheckedCreateNestedManyWithoutEventCandidateInput
  }

  export type EventCandidateCreateOrConnectWithoutSourceInput = {
    where: EventCandidateWhereUniqueInput
    create: XOR<EventCandidateCreateWithoutSourceInput, EventCandidateUncheckedCreateWithoutSourceInput>
  }

  export type EventCandidateCreateManySourceInputEnvelope = {
    data: EventCandidateCreateManySourceInput | EventCandidateCreateManySourceInput[]
    skipDuplicates?: boolean
  }

  export type RawContentUpsertWithWhereUniqueWithoutSourceInput = {
    where: RawContentWhereUniqueInput
    update: XOR<RawContentUpdateWithoutSourceInput, RawContentUncheckedUpdateWithoutSourceInput>
    create: XOR<RawContentCreateWithoutSourceInput, RawContentUncheckedCreateWithoutSourceInput>
  }

  export type RawContentUpdateWithWhereUniqueWithoutSourceInput = {
    where: RawContentWhereUniqueInput
    data: XOR<RawContentUpdateWithoutSourceInput, RawContentUncheckedUpdateWithoutSourceInput>
  }

  export type RawContentUpdateManyWithWhereWithoutSourceInput = {
    where: RawContentScalarWhereInput
    data: XOR<RawContentUpdateManyMutationInput, RawContentUncheckedUpdateManyWithoutSourceInput>
  }

  export type RawContentScalarWhereInput = {
    AND?: RawContentScalarWhereInput | RawContentScalarWhereInput[]
    OR?: RawContentScalarWhereInput[]
    NOT?: RawContentScalarWhereInput | RawContentScalarWhereInput[]
    id?: StringFilter<"RawContent"> | string
    sourceId?: StringFilter<"RawContent"> | string
    externalId?: StringNullableFilter<"RawContent"> | string | null
    canonicalUrl?: StringNullableFilter<"RawContent"> | string | null
    title?: StringFilter<"RawContent"> | string
    rawText?: StringFilter<"RawContent"> | string
    rawHtml?: StringNullableFilter<"RawContent"> | string | null
    author?: StringNullableFilter<"RawContent"> | string | null
    publishedAt?: DateTimeNullableFilter<"RawContent"> | Date | string | null
    discoveredAt?: DateTimeFilter<"RawContent"> | Date | string
    fetchedAt?: DateTimeFilter<"RawContent"> | Date | string
    contentHash?: StringFilter<"RawContent"> | string
    metadata?: JsonNullableFilter<"RawContent">
    status?: EnumRawContentStatusFilter<"RawContent"> | $Enums.RawContentStatus
  }

  export type EventCandidateUpsertWithWhereUniqueWithoutSourceInput = {
    where: EventCandidateWhereUniqueInput
    update: XOR<EventCandidateUpdateWithoutSourceInput, EventCandidateUncheckedUpdateWithoutSourceInput>
    create: XOR<EventCandidateCreateWithoutSourceInput, EventCandidateUncheckedCreateWithoutSourceInput>
  }

  export type EventCandidateUpdateWithWhereUniqueWithoutSourceInput = {
    where: EventCandidateWhereUniqueInput
    data: XOR<EventCandidateUpdateWithoutSourceInput, EventCandidateUncheckedUpdateWithoutSourceInput>
  }

  export type EventCandidateUpdateManyWithWhereWithoutSourceInput = {
    where: EventCandidateScalarWhereInput
    data: XOR<EventCandidateUpdateManyMutationInput, EventCandidateUncheckedUpdateManyWithoutSourceInput>
  }

  export type EventCandidateScalarWhereInput = {
    AND?: EventCandidateScalarWhereInput | EventCandidateScalarWhereInput[]
    OR?: EventCandidateScalarWhereInput[]
    NOT?: EventCandidateScalarWhereInput | EventCandidateScalarWhereInput[]
    id?: StringFilter<"EventCandidate"> | string
    contentId?: StringNullableFilter<"EventCandidate"> | string | null
    sourceId?: StringNullableFilter<"EventCandidate"> | string | null
    name?: StringFilter<"EventCandidate"> | string
    category?: StringNullableFilter<"EventCandidate"> | string | null
    description?: StringNullableFilter<"EventCandidate"> | string | null
    startDate?: DateTimeNullableFilter<"EventCandidate"> | Date | string | null
    endDate?: DateTimeNullableFilter<"EventCandidate"> | Date | string | null
    startTime?: StringNullableFilter<"EventCandidate"> | string | null
    location?: StringNullableFilter<"EventCandidate"> | string | null
    venue?: StringNullableFilter<"EventCandidate"> | string | null
    city?: StringNullableFilter<"EventCandidate"> | string | null
    province?: StringNullableFilter<"EventCandidate"> | string | null
    country?: StringFilter<"EventCandidate"> | string
    organizer?: StringNullableFilter<"EventCandidate"> | string | null
    origin?: EnumEventOriginFilter<"EventCandidate"> | $Enums.EventOrigin
    price?: StringNullableFilter<"EventCandidate"> | string | null
    currency?: StringFilter<"EventCandidate"> | string
    registrationUrl?: StringNullableFilter<"EventCandidate"> | string | null
    contact?: StringNullableFilter<"EventCandidate"> | string | null
    sourceUrl?: StringNullableFilter<"EventCandidate"> | string | null
    imageUrl?: StringNullableFilter<"EventCandidate"> | string | null
    confidence?: IntFilter<"EventCandidate"> | number
    verificationStatus?: EnumVerificationStatusFilter<"EventCandidate"> | $Enums.VerificationStatus
    duplicateStatus?: EnumDuplicateStatusFilter<"EventCandidate"> | $Enums.DuplicateStatus
    duplicateOfId?: StringNullableFilter<"EventCandidate"> | string | null
    duplicateReason?: StringNullableFilter<"EventCandidate"> | string | null
    editorialStatus?: EnumEditorialStatusFilter<"EventCandidate"> | $Enums.EditorialStatus
    scheduledFor?: DateTimeNullableFilter<"EventCandidate"> | Date | string | null
    publishedAt?: DateTimeNullableFilter<"EventCandidate"> | Date | string | null
    createdAt?: DateTimeFilter<"EventCandidate"> | Date | string
    updatedAt?: DateTimeFilter<"EventCandidate"> | Date | string
  }

  export type SourceCreateWithoutRawContentsInput = {
    id?: string
    name: string
    url: string
    sourceType: $Enums.SourceType
    country?: string
    province?: string | null
    city?: string | null
    trustScore?: number
    enabled?: boolean
    scrapingAllowed?: boolean
    requiresReview?: boolean
    updateFrequency?: string
    crawlDelayMs?: number
    lastSeenHash?: string | null
    contentSelector?: string | null
    titleSelector?: string | null
    robotsPolicy?: string | null
    notes?: string | null
    lastCheckedAt?: Date | string | null
    lastSuccessfulCheckAt?: Date | string | null
    status?: $Enums.SourceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    eventCandidates?: EventCandidateCreateNestedManyWithoutSourceInput
  }

  export type SourceUncheckedCreateWithoutRawContentsInput = {
    id?: string
    name: string
    url: string
    sourceType: $Enums.SourceType
    country?: string
    province?: string | null
    city?: string | null
    trustScore?: number
    enabled?: boolean
    scrapingAllowed?: boolean
    requiresReview?: boolean
    updateFrequency?: string
    crawlDelayMs?: number
    lastSeenHash?: string | null
    contentSelector?: string | null
    titleSelector?: string | null
    robotsPolicy?: string | null
    notes?: string | null
    lastCheckedAt?: Date | string | null
    lastSuccessfulCheckAt?: Date | string | null
    status?: $Enums.SourceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    eventCandidates?: EventCandidateUncheckedCreateNestedManyWithoutSourceInput
  }

  export type SourceCreateOrConnectWithoutRawContentsInput = {
    where: SourceWhereUniqueInput
    create: XOR<SourceCreateWithoutRawContentsInput, SourceUncheckedCreateWithoutRawContentsInput>
  }

  export type ContentCreateWithoutRawContentInput = {
    id?: string
    title: string
    slug: string
    cleanText: string
    summary?: string | null
    contentType?: $Enums.IntelligenceContentType
    category?: string | null
    country?: string
    province?: string | null
    city?: string | null
    confidence?: number
    fitnessScore?: number
    angolaScore?: number
    relevanceScore?: number
    trustScore?: number
    duplicateStatus?: $Enums.DuplicateStatus
    duplicateOfId?: string | null
    duplicateReason?: string | null
    editorialStatus?: $Enums.EditorialStatus
    draft?: NullableJsonNullValueInput | InputJsonValue
    socialDraft?: NullableJsonNullValueInput | InputJsonValue
    scoreExplanation?: NullableJsonNullValueInput | InputJsonValue
    scheduledFor?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entities?: ContentEntityCreateNestedManyWithoutContentInput
    eventCandidate?: EventCandidateCreateNestedOneWithoutContentInput
    reviews?: EditorialReviewCreateNestedManyWithoutContentInput
    publications?: PublicationCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateWithoutRawContentInput = {
    id?: string
    title: string
    slug: string
    cleanText: string
    summary?: string | null
    contentType?: $Enums.IntelligenceContentType
    category?: string | null
    country?: string
    province?: string | null
    city?: string | null
    confidence?: number
    fitnessScore?: number
    angolaScore?: number
    relevanceScore?: number
    trustScore?: number
    duplicateStatus?: $Enums.DuplicateStatus
    duplicateOfId?: string | null
    duplicateReason?: string | null
    editorialStatus?: $Enums.EditorialStatus
    draft?: NullableJsonNullValueInput | InputJsonValue
    socialDraft?: NullableJsonNullValueInput | InputJsonValue
    scoreExplanation?: NullableJsonNullValueInput | InputJsonValue
    scheduledFor?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entities?: ContentEntityUncheckedCreateNestedManyWithoutContentInput
    eventCandidate?: EventCandidateUncheckedCreateNestedOneWithoutContentInput
    reviews?: EditorialReviewUncheckedCreateNestedManyWithoutContentInput
    publications?: PublicationUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentCreateOrConnectWithoutRawContentInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutRawContentInput, ContentUncheckedCreateWithoutRawContentInput>
  }

  export type SourceUpsertWithoutRawContentsInput = {
    update: XOR<SourceUpdateWithoutRawContentsInput, SourceUncheckedUpdateWithoutRawContentsInput>
    create: XOR<SourceCreateWithoutRawContentsInput, SourceUncheckedCreateWithoutRawContentsInput>
    where?: SourceWhereInput
  }

  export type SourceUpdateToOneWithWhereWithoutRawContentsInput = {
    where?: SourceWhereInput
    data: XOR<SourceUpdateWithoutRawContentsInput, SourceUncheckedUpdateWithoutRawContentsInput>
  }

  export type SourceUpdateWithoutRawContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    sourceType?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    country?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    scrapingAllowed?: BoolFieldUpdateOperationsInput | boolean
    requiresReview?: BoolFieldUpdateOperationsInput | boolean
    updateFrequency?: StringFieldUpdateOperationsInput | string
    crawlDelayMs?: IntFieldUpdateOperationsInput | number
    lastSeenHash?: NullableStringFieldUpdateOperationsInput | string | null
    contentSelector?: NullableStringFieldUpdateOperationsInput | string | null
    titleSelector?: NullableStringFieldUpdateOperationsInput | string | null
    robotsPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuccessfulCheckAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSourceStatusFieldUpdateOperationsInput | $Enums.SourceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventCandidates?: EventCandidateUpdateManyWithoutSourceNestedInput
  }

  export type SourceUncheckedUpdateWithoutRawContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    sourceType?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    country?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    scrapingAllowed?: BoolFieldUpdateOperationsInput | boolean
    requiresReview?: BoolFieldUpdateOperationsInput | boolean
    updateFrequency?: StringFieldUpdateOperationsInput | string
    crawlDelayMs?: IntFieldUpdateOperationsInput | number
    lastSeenHash?: NullableStringFieldUpdateOperationsInput | string | null
    contentSelector?: NullableStringFieldUpdateOperationsInput | string | null
    titleSelector?: NullableStringFieldUpdateOperationsInput | string | null
    robotsPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuccessfulCheckAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSourceStatusFieldUpdateOperationsInput | $Enums.SourceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventCandidates?: EventCandidateUncheckedUpdateManyWithoutSourceNestedInput
  }

  export type ContentUpsertWithoutRawContentInput = {
    update: XOR<ContentUpdateWithoutRawContentInput, ContentUncheckedUpdateWithoutRawContentInput>
    create: XOR<ContentCreateWithoutRawContentInput, ContentUncheckedCreateWithoutRawContentInput>
    where?: ContentWhereInput
  }

  export type ContentUpdateToOneWithWhereWithoutRawContentInput = {
    where?: ContentWhereInput
    data: XOR<ContentUpdateWithoutRawContentInput, ContentUncheckedUpdateWithoutRawContentInput>
  }

  export type ContentUpdateWithoutRawContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cleanText?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: EnumIntelligenceContentTypeFieldUpdateOperationsInput | $Enums.IntelligenceContentType
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: IntFieldUpdateOperationsInput | number
    fitnessScore?: IntFieldUpdateOperationsInput | number
    angolaScore?: IntFieldUpdateOperationsInput | number
    relevanceScore?: IntFieldUpdateOperationsInput | number
    trustScore?: IntFieldUpdateOperationsInput | number
    duplicateStatus?: EnumDuplicateStatusFieldUpdateOperationsInput | $Enums.DuplicateStatus
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    duplicateReason?: NullableStringFieldUpdateOperationsInput | string | null
    editorialStatus?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    draft?: NullableJsonNullValueInput | InputJsonValue
    socialDraft?: NullableJsonNullValueInput | InputJsonValue
    scoreExplanation?: NullableJsonNullValueInput | InputJsonValue
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entities?: ContentEntityUpdateManyWithoutContentNestedInput
    eventCandidate?: EventCandidateUpdateOneWithoutContentNestedInput
    reviews?: EditorialReviewUpdateManyWithoutContentNestedInput
    publications?: PublicationUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutRawContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cleanText?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: EnumIntelligenceContentTypeFieldUpdateOperationsInput | $Enums.IntelligenceContentType
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: IntFieldUpdateOperationsInput | number
    fitnessScore?: IntFieldUpdateOperationsInput | number
    angolaScore?: IntFieldUpdateOperationsInput | number
    relevanceScore?: IntFieldUpdateOperationsInput | number
    trustScore?: IntFieldUpdateOperationsInput | number
    duplicateStatus?: EnumDuplicateStatusFieldUpdateOperationsInput | $Enums.DuplicateStatus
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    duplicateReason?: NullableStringFieldUpdateOperationsInput | string | null
    editorialStatus?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    draft?: NullableJsonNullValueInput | InputJsonValue
    socialDraft?: NullableJsonNullValueInput | InputJsonValue
    scoreExplanation?: NullableJsonNullValueInput | InputJsonValue
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entities?: ContentEntityUncheckedUpdateManyWithoutContentNestedInput
    eventCandidate?: EventCandidateUncheckedUpdateOneWithoutContentNestedInput
    reviews?: EditorialReviewUncheckedUpdateManyWithoutContentNestedInput
    publications?: PublicationUncheckedUpdateManyWithoutContentNestedInput
  }

  export type RawContentCreateWithoutContentInput = {
    id?: string
    externalId?: string | null
    canonicalUrl?: string | null
    title: string
    rawText: string
    rawHtml?: string | null
    author?: string | null
    publishedAt?: Date | string | null
    discoveredAt?: Date | string
    fetchedAt?: Date | string
    contentHash: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.RawContentStatus
    source: SourceCreateNestedOneWithoutRawContentsInput
  }

  export type RawContentUncheckedCreateWithoutContentInput = {
    id?: string
    sourceId: string
    externalId?: string | null
    canonicalUrl?: string | null
    title: string
    rawText: string
    rawHtml?: string | null
    author?: string | null
    publishedAt?: Date | string | null
    discoveredAt?: Date | string
    fetchedAt?: Date | string
    contentHash: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.RawContentStatus
  }

  export type RawContentCreateOrConnectWithoutContentInput = {
    where: RawContentWhereUniqueInput
    create: XOR<RawContentCreateWithoutContentInput, RawContentUncheckedCreateWithoutContentInput>
  }

  export type ContentEntityCreateWithoutContentInput = {
    confidence?: number
    role?: string | null
    entity: EntityCreateNestedOneWithoutContentsInput
  }

  export type ContentEntityUncheckedCreateWithoutContentInput = {
    entityId: string
    confidence?: number
    role?: string | null
  }

  export type ContentEntityCreateOrConnectWithoutContentInput = {
    where: ContentEntityWhereUniqueInput
    create: XOR<ContentEntityCreateWithoutContentInput, ContentEntityUncheckedCreateWithoutContentInput>
  }

  export type ContentEntityCreateManyContentInputEnvelope = {
    data: ContentEntityCreateManyContentInput | ContentEntityCreateManyContentInput[]
    skipDuplicates?: boolean
  }

  export type EventCandidateCreateWithoutContentInput = {
    id?: string
    name: string
    category?: string | null
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    startTime?: string | null
    location?: string | null
    venue?: string | null
    city?: string | null
    province?: string | null
    country?: string
    organizer?: string | null
    origin?: $Enums.EventOrigin
    price?: string | null
    currency?: string
    registrationUrl?: string | null
    contact?: string | null
    sourceUrl?: string | null
    imageUrl?: string | null
    confidence?: number
    verificationStatus?: $Enums.VerificationStatus
    duplicateStatus?: $Enums.DuplicateStatus
    duplicateOfId?: string | null
    duplicateReason?: string | null
    editorialStatus?: $Enums.EditorialStatus
    scheduledFor?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    source?: SourceCreateNestedOneWithoutEventCandidatesInput
    reviews?: EditorialReviewCreateNestedManyWithoutEventCandidateInput
    publications?: PublicationCreateNestedManyWithoutEventCandidateInput
  }

  export type EventCandidateUncheckedCreateWithoutContentInput = {
    id?: string
    sourceId?: string | null
    name: string
    category?: string | null
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    startTime?: string | null
    location?: string | null
    venue?: string | null
    city?: string | null
    province?: string | null
    country?: string
    organizer?: string | null
    origin?: $Enums.EventOrigin
    price?: string | null
    currency?: string
    registrationUrl?: string | null
    contact?: string | null
    sourceUrl?: string | null
    imageUrl?: string | null
    confidence?: number
    verificationStatus?: $Enums.VerificationStatus
    duplicateStatus?: $Enums.DuplicateStatus
    duplicateOfId?: string | null
    duplicateReason?: string | null
    editorialStatus?: $Enums.EditorialStatus
    scheduledFor?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: EditorialReviewUncheckedCreateNestedManyWithoutEventCandidateInput
    publications?: PublicationUncheckedCreateNestedManyWithoutEventCandidateInput
  }

  export type EventCandidateCreateOrConnectWithoutContentInput = {
    where: EventCandidateWhereUniqueInput
    create: XOR<EventCandidateCreateWithoutContentInput, EventCandidateUncheckedCreateWithoutContentInput>
  }

  export type EditorialReviewCreateWithoutContentInput = {
    id?: string
    reviewerId?: string | null
    reviewerName?: string | null
    status: $Enums.EditorialStatus
    notes?: string | null
    createdAt?: Date | string
    eventCandidate?: EventCandidateCreateNestedOneWithoutReviewsInput
  }

  export type EditorialReviewUncheckedCreateWithoutContentInput = {
    id?: string
    eventCandidateId?: string | null
    reviewerId?: string | null
    reviewerName?: string | null
    status: $Enums.EditorialStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type EditorialReviewCreateOrConnectWithoutContentInput = {
    where: EditorialReviewWhereUniqueInput
    create: XOR<EditorialReviewCreateWithoutContentInput, EditorialReviewUncheckedCreateWithoutContentInput>
  }

  export type EditorialReviewCreateManyContentInputEnvelope = {
    data: EditorialReviewCreateManyContentInput | EditorialReviewCreateManyContentInput[]
    skipDuplicates?: boolean
  }

  export type PublicationCreateWithoutContentInput = {
    id?: string
    target: $Enums.PublicationTarget
    payload: JsonNullValueInput | InputJsonValue
    status?: $Enums.EditorialStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eventCandidate?: EventCandidateCreateNestedOneWithoutPublicationsInput
  }

  export type PublicationUncheckedCreateWithoutContentInput = {
    id?: string
    eventCandidateId?: string | null
    target: $Enums.PublicationTarget
    payload: JsonNullValueInput | InputJsonValue
    status?: $Enums.EditorialStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicationCreateOrConnectWithoutContentInput = {
    where: PublicationWhereUniqueInput
    create: XOR<PublicationCreateWithoutContentInput, PublicationUncheckedCreateWithoutContentInput>
  }

  export type PublicationCreateManyContentInputEnvelope = {
    data: PublicationCreateManyContentInput | PublicationCreateManyContentInput[]
    skipDuplicates?: boolean
  }

  export type RawContentUpsertWithoutContentInput = {
    update: XOR<RawContentUpdateWithoutContentInput, RawContentUncheckedUpdateWithoutContentInput>
    create: XOR<RawContentCreateWithoutContentInput, RawContentUncheckedCreateWithoutContentInput>
    where?: RawContentWhereInput
  }

  export type RawContentUpdateToOneWithWhereWithoutContentInput = {
    where?: RawContentWhereInput
    data: XOR<RawContentUpdateWithoutContentInput, RawContentUncheckedUpdateWithoutContentInput>
  }

  export type RawContentUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    rawText?: StringFieldUpdateOperationsInput | string
    rawHtml?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentHash?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumRawContentStatusFieldUpdateOperationsInput | $Enums.RawContentStatus
    source?: SourceUpdateOneRequiredWithoutRawContentsNestedInput
  }

  export type RawContentUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    rawText?: StringFieldUpdateOperationsInput | string
    rawHtml?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentHash?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumRawContentStatusFieldUpdateOperationsInput | $Enums.RawContentStatus
  }

  export type ContentEntityUpsertWithWhereUniqueWithoutContentInput = {
    where: ContentEntityWhereUniqueInput
    update: XOR<ContentEntityUpdateWithoutContentInput, ContentEntityUncheckedUpdateWithoutContentInput>
    create: XOR<ContentEntityCreateWithoutContentInput, ContentEntityUncheckedCreateWithoutContentInput>
  }

  export type ContentEntityUpdateWithWhereUniqueWithoutContentInput = {
    where: ContentEntityWhereUniqueInput
    data: XOR<ContentEntityUpdateWithoutContentInput, ContentEntityUncheckedUpdateWithoutContentInput>
  }

  export type ContentEntityUpdateManyWithWhereWithoutContentInput = {
    where: ContentEntityScalarWhereInput
    data: XOR<ContentEntityUpdateManyMutationInput, ContentEntityUncheckedUpdateManyWithoutContentInput>
  }

  export type ContentEntityScalarWhereInput = {
    AND?: ContentEntityScalarWhereInput | ContentEntityScalarWhereInput[]
    OR?: ContentEntityScalarWhereInput[]
    NOT?: ContentEntityScalarWhereInput | ContentEntityScalarWhereInput[]
    contentId?: StringFilter<"ContentEntity"> | string
    entityId?: StringFilter<"ContentEntity"> | string
    confidence?: IntFilter<"ContentEntity"> | number
    role?: StringNullableFilter<"ContentEntity"> | string | null
  }

  export type EventCandidateUpsertWithoutContentInput = {
    update: XOR<EventCandidateUpdateWithoutContentInput, EventCandidateUncheckedUpdateWithoutContentInput>
    create: XOR<EventCandidateCreateWithoutContentInput, EventCandidateUncheckedCreateWithoutContentInput>
    where?: EventCandidateWhereInput
  }

  export type EventCandidateUpdateToOneWithWhereWithoutContentInput = {
    where?: EventCandidateWhereInput
    data: XOR<EventCandidateUpdateWithoutContentInput, EventCandidateUncheckedUpdateWithoutContentInput>
  }

  export type EventCandidateUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    organizer?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: EnumEventOriginFieldUpdateOperationsInput | $Enums.EventOrigin
    price?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    registrationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: IntFieldUpdateOperationsInput | number
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    duplicateStatus?: EnumDuplicateStatusFieldUpdateOperationsInput | $Enums.DuplicateStatus
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    duplicateReason?: NullableStringFieldUpdateOperationsInput | string | null
    editorialStatus?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: SourceUpdateOneWithoutEventCandidatesNestedInput
    reviews?: EditorialReviewUpdateManyWithoutEventCandidateNestedInput
    publications?: PublicationUpdateManyWithoutEventCandidateNestedInput
  }

  export type EventCandidateUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    organizer?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: EnumEventOriginFieldUpdateOperationsInput | $Enums.EventOrigin
    price?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    registrationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: IntFieldUpdateOperationsInput | number
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    duplicateStatus?: EnumDuplicateStatusFieldUpdateOperationsInput | $Enums.DuplicateStatus
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    duplicateReason?: NullableStringFieldUpdateOperationsInput | string | null
    editorialStatus?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: EditorialReviewUncheckedUpdateManyWithoutEventCandidateNestedInput
    publications?: PublicationUncheckedUpdateManyWithoutEventCandidateNestedInput
  }

  export type EditorialReviewUpsertWithWhereUniqueWithoutContentInput = {
    where: EditorialReviewWhereUniqueInput
    update: XOR<EditorialReviewUpdateWithoutContentInput, EditorialReviewUncheckedUpdateWithoutContentInput>
    create: XOR<EditorialReviewCreateWithoutContentInput, EditorialReviewUncheckedCreateWithoutContentInput>
  }

  export type EditorialReviewUpdateWithWhereUniqueWithoutContentInput = {
    where: EditorialReviewWhereUniqueInput
    data: XOR<EditorialReviewUpdateWithoutContentInput, EditorialReviewUncheckedUpdateWithoutContentInput>
  }

  export type EditorialReviewUpdateManyWithWhereWithoutContentInput = {
    where: EditorialReviewScalarWhereInput
    data: XOR<EditorialReviewUpdateManyMutationInput, EditorialReviewUncheckedUpdateManyWithoutContentInput>
  }

  export type EditorialReviewScalarWhereInput = {
    AND?: EditorialReviewScalarWhereInput | EditorialReviewScalarWhereInput[]
    OR?: EditorialReviewScalarWhereInput[]
    NOT?: EditorialReviewScalarWhereInput | EditorialReviewScalarWhereInput[]
    id?: StringFilter<"EditorialReview"> | string
    contentId?: StringNullableFilter<"EditorialReview"> | string | null
    eventCandidateId?: StringNullableFilter<"EditorialReview"> | string | null
    reviewerId?: StringNullableFilter<"EditorialReview"> | string | null
    reviewerName?: StringNullableFilter<"EditorialReview"> | string | null
    status?: EnumEditorialStatusFilter<"EditorialReview"> | $Enums.EditorialStatus
    notes?: StringNullableFilter<"EditorialReview"> | string | null
    createdAt?: DateTimeFilter<"EditorialReview"> | Date | string
  }

  export type PublicationUpsertWithWhereUniqueWithoutContentInput = {
    where: PublicationWhereUniqueInput
    update: XOR<PublicationUpdateWithoutContentInput, PublicationUncheckedUpdateWithoutContentInput>
    create: XOR<PublicationCreateWithoutContentInput, PublicationUncheckedCreateWithoutContentInput>
  }

  export type PublicationUpdateWithWhereUniqueWithoutContentInput = {
    where: PublicationWhereUniqueInput
    data: XOR<PublicationUpdateWithoutContentInput, PublicationUncheckedUpdateWithoutContentInput>
  }

  export type PublicationUpdateManyWithWhereWithoutContentInput = {
    where: PublicationScalarWhereInput
    data: XOR<PublicationUpdateManyMutationInput, PublicationUncheckedUpdateManyWithoutContentInput>
  }

  export type PublicationScalarWhereInput = {
    AND?: PublicationScalarWhereInput | PublicationScalarWhereInput[]
    OR?: PublicationScalarWhereInput[]
    NOT?: PublicationScalarWhereInput | PublicationScalarWhereInput[]
    id?: StringFilter<"Publication"> | string
    contentId?: StringNullableFilter<"Publication"> | string | null
    eventCandidateId?: StringNullableFilter<"Publication"> | string | null
    target?: EnumPublicationTargetFilter<"Publication"> | $Enums.PublicationTarget
    payload?: JsonFilter<"Publication">
    status?: EnumEditorialStatusFilter<"Publication"> | $Enums.EditorialStatus
    publishedAt?: DateTimeNullableFilter<"Publication"> | Date | string | null
    createdAt?: DateTimeFilter<"Publication"> | Date | string
    updatedAt?: DateTimeFilter<"Publication"> | Date | string
  }

  export type ContentEntityCreateWithoutEntityInput = {
    confidence?: number
    role?: string | null
    content: ContentCreateNestedOneWithoutEntitiesInput
  }

  export type ContentEntityUncheckedCreateWithoutEntityInput = {
    contentId: string
    confidence?: number
    role?: string | null
  }

  export type ContentEntityCreateOrConnectWithoutEntityInput = {
    where: ContentEntityWhereUniqueInput
    create: XOR<ContentEntityCreateWithoutEntityInput, ContentEntityUncheckedCreateWithoutEntityInput>
  }

  export type ContentEntityCreateManyEntityInputEnvelope = {
    data: ContentEntityCreateManyEntityInput | ContentEntityCreateManyEntityInput[]
    skipDuplicates?: boolean
  }

  export type ContentEntityUpsertWithWhereUniqueWithoutEntityInput = {
    where: ContentEntityWhereUniqueInput
    update: XOR<ContentEntityUpdateWithoutEntityInput, ContentEntityUncheckedUpdateWithoutEntityInput>
    create: XOR<ContentEntityCreateWithoutEntityInput, ContentEntityUncheckedCreateWithoutEntityInput>
  }

  export type ContentEntityUpdateWithWhereUniqueWithoutEntityInput = {
    where: ContentEntityWhereUniqueInput
    data: XOR<ContentEntityUpdateWithoutEntityInput, ContentEntityUncheckedUpdateWithoutEntityInput>
  }

  export type ContentEntityUpdateManyWithWhereWithoutEntityInput = {
    where: ContentEntityScalarWhereInput
    data: XOR<ContentEntityUpdateManyMutationInput, ContentEntityUncheckedUpdateManyWithoutEntityInput>
  }

  export type ContentCreateWithoutEntitiesInput = {
    id?: string
    title: string
    slug: string
    cleanText: string
    summary?: string | null
    contentType?: $Enums.IntelligenceContentType
    category?: string | null
    country?: string
    province?: string | null
    city?: string | null
    confidence?: number
    fitnessScore?: number
    angolaScore?: number
    relevanceScore?: number
    trustScore?: number
    duplicateStatus?: $Enums.DuplicateStatus
    duplicateOfId?: string | null
    duplicateReason?: string | null
    editorialStatus?: $Enums.EditorialStatus
    draft?: NullableJsonNullValueInput | InputJsonValue
    socialDraft?: NullableJsonNullValueInput | InputJsonValue
    scoreExplanation?: NullableJsonNullValueInput | InputJsonValue
    scheduledFor?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rawContent: RawContentCreateNestedOneWithoutContentInput
    eventCandidate?: EventCandidateCreateNestedOneWithoutContentInput
    reviews?: EditorialReviewCreateNestedManyWithoutContentInput
    publications?: PublicationCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateWithoutEntitiesInput = {
    id?: string
    rawContentId: string
    title: string
    slug: string
    cleanText: string
    summary?: string | null
    contentType?: $Enums.IntelligenceContentType
    category?: string | null
    country?: string
    province?: string | null
    city?: string | null
    confidence?: number
    fitnessScore?: number
    angolaScore?: number
    relevanceScore?: number
    trustScore?: number
    duplicateStatus?: $Enums.DuplicateStatus
    duplicateOfId?: string | null
    duplicateReason?: string | null
    editorialStatus?: $Enums.EditorialStatus
    draft?: NullableJsonNullValueInput | InputJsonValue
    socialDraft?: NullableJsonNullValueInput | InputJsonValue
    scoreExplanation?: NullableJsonNullValueInput | InputJsonValue
    scheduledFor?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eventCandidate?: EventCandidateUncheckedCreateNestedOneWithoutContentInput
    reviews?: EditorialReviewUncheckedCreateNestedManyWithoutContentInput
    publications?: PublicationUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentCreateOrConnectWithoutEntitiesInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutEntitiesInput, ContentUncheckedCreateWithoutEntitiesInput>
  }

  export type EntityCreateWithoutContentsInput = {
    id?: string
    name: string
    entityType: $Enums.EntityType
    country?: string
    province?: string | null
    city?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EntityUncheckedCreateWithoutContentsInput = {
    id?: string
    name: string
    entityType: $Enums.EntityType
    country?: string
    province?: string | null
    city?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EntityCreateOrConnectWithoutContentsInput = {
    where: EntityWhereUniqueInput
    create: XOR<EntityCreateWithoutContentsInput, EntityUncheckedCreateWithoutContentsInput>
  }

  export type ContentUpsertWithoutEntitiesInput = {
    update: XOR<ContentUpdateWithoutEntitiesInput, ContentUncheckedUpdateWithoutEntitiesInput>
    create: XOR<ContentCreateWithoutEntitiesInput, ContentUncheckedCreateWithoutEntitiesInput>
    where?: ContentWhereInput
  }

  export type ContentUpdateToOneWithWhereWithoutEntitiesInput = {
    where?: ContentWhereInput
    data: XOR<ContentUpdateWithoutEntitiesInput, ContentUncheckedUpdateWithoutEntitiesInput>
  }

  export type ContentUpdateWithoutEntitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cleanText?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: EnumIntelligenceContentTypeFieldUpdateOperationsInput | $Enums.IntelligenceContentType
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: IntFieldUpdateOperationsInput | number
    fitnessScore?: IntFieldUpdateOperationsInput | number
    angolaScore?: IntFieldUpdateOperationsInput | number
    relevanceScore?: IntFieldUpdateOperationsInput | number
    trustScore?: IntFieldUpdateOperationsInput | number
    duplicateStatus?: EnumDuplicateStatusFieldUpdateOperationsInput | $Enums.DuplicateStatus
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    duplicateReason?: NullableStringFieldUpdateOperationsInput | string | null
    editorialStatus?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    draft?: NullableJsonNullValueInput | InputJsonValue
    socialDraft?: NullableJsonNullValueInput | InputJsonValue
    scoreExplanation?: NullableJsonNullValueInput | InputJsonValue
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rawContent?: RawContentUpdateOneRequiredWithoutContentNestedInput
    eventCandidate?: EventCandidateUpdateOneWithoutContentNestedInput
    reviews?: EditorialReviewUpdateManyWithoutContentNestedInput
    publications?: PublicationUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutEntitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawContentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cleanText?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: EnumIntelligenceContentTypeFieldUpdateOperationsInput | $Enums.IntelligenceContentType
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: IntFieldUpdateOperationsInput | number
    fitnessScore?: IntFieldUpdateOperationsInput | number
    angolaScore?: IntFieldUpdateOperationsInput | number
    relevanceScore?: IntFieldUpdateOperationsInput | number
    trustScore?: IntFieldUpdateOperationsInput | number
    duplicateStatus?: EnumDuplicateStatusFieldUpdateOperationsInput | $Enums.DuplicateStatus
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    duplicateReason?: NullableStringFieldUpdateOperationsInput | string | null
    editorialStatus?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    draft?: NullableJsonNullValueInput | InputJsonValue
    socialDraft?: NullableJsonNullValueInput | InputJsonValue
    scoreExplanation?: NullableJsonNullValueInput | InputJsonValue
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventCandidate?: EventCandidateUncheckedUpdateOneWithoutContentNestedInput
    reviews?: EditorialReviewUncheckedUpdateManyWithoutContentNestedInput
    publications?: PublicationUncheckedUpdateManyWithoutContentNestedInput
  }

  export type EntityUpsertWithoutContentsInput = {
    update: XOR<EntityUpdateWithoutContentsInput, EntityUncheckedUpdateWithoutContentsInput>
    create: XOR<EntityCreateWithoutContentsInput, EntityUncheckedCreateWithoutContentsInput>
    where?: EntityWhereInput
  }

  export type EntityUpdateToOneWithWhereWithoutContentsInput = {
    where?: EntityWhereInput
    data: XOR<EntityUpdateWithoutContentsInput, EntityUncheckedUpdateWithoutContentsInput>
  }

  export type EntityUpdateWithoutContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    country?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntityUncheckedUpdateWithoutContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    country?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentCreateWithoutEventCandidateInput = {
    id?: string
    title: string
    slug: string
    cleanText: string
    summary?: string | null
    contentType?: $Enums.IntelligenceContentType
    category?: string | null
    country?: string
    province?: string | null
    city?: string | null
    confidence?: number
    fitnessScore?: number
    angolaScore?: number
    relevanceScore?: number
    trustScore?: number
    duplicateStatus?: $Enums.DuplicateStatus
    duplicateOfId?: string | null
    duplicateReason?: string | null
    editorialStatus?: $Enums.EditorialStatus
    draft?: NullableJsonNullValueInput | InputJsonValue
    socialDraft?: NullableJsonNullValueInput | InputJsonValue
    scoreExplanation?: NullableJsonNullValueInput | InputJsonValue
    scheduledFor?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rawContent: RawContentCreateNestedOneWithoutContentInput
    entities?: ContentEntityCreateNestedManyWithoutContentInput
    reviews?: EditorialReviewCreateNestedManyWithoutContentInput
    publications?: PublicationCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateWithoutEventCandidateInput = {
    id?: string
    rawContentId: string
    title: string
    slug: string
    cleanText: string
    summary?: string | null
    contentType?: $Enums.IntelligenceContentType
    category?: string | null
    country?: string
    province?: string | null
    city?: string | null
    confidence?: number
    fitnessScore?: number
    angolaScore?: number
    relevanceScore?: number
    trustScore?: number
    duplicateStatus?: $Enums.DuplicateStatus
    duplicateOfId?: string | null
    duplicateReason?: string | null
    editorialStatus?: $Enums.EditorialStatus
    draft?: NullableJsonNullValueInput | InputJsonValue
    socialDraft?: NullableJsonNullValueInput | InputJsonValue
    scoreExplanation?: NullableJsonNullValueInput | InputJsonValue
    scheduledFor?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entities?: ContentEntityUncheckedCreateNestedManyWithoutContentInput
    reviews?: EditorialReviewUncheckedCreateNestedManyWithoutContentInput
    publications?: PublicationUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentCreateOrConnectWithoutEventCandidateInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutEventCandidateInput, ContentUncheckedCreateWithoutEventCandidateInput>
  }

  export type SourceCreateWithoutEventCandidatesInput = {
    id?: string
    name: string
    url: string
    sourceType: $Enums.SourceType
    country?: string
    province?: string | null
    city?: string | null
    trustScore?: number
    enabled?: boolean
    scrapingAllowed?: boolean
    requiresReview?: boolean
    updateFrequency?: string
    crawlDelayMs?: number
    lastSeenHash?: string | null
    contentSelector?: string | null
    titleSelector?: string | null
    robotsPolicy?: string | null
    notes?: string | null
    lastCheckedAt?: Date | string | null
    lastSuccessfulCheckAt?: Date | string | null
    status?: $Enums.SourceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    rawContents?: RawContentCreateNestedManyWithoutSourceInput
  }

  export type SourceUncheckedCreateWithoutEventCandidatesInput = {
    id?: string
    name: string
    url: string
    sourceType: $Enums.SourceType
    country?: string
    province?: string | null
    city?: string | null
    trustScore?: number
    enabled?: boolean
    scrapingAllowed?: boolean
    requiresReview?: boolean
    updateFrequency?: string
    crawlDelayMs?: number
    lastSeenHash?: string | null
    contentSelector?: string | null
    titleSelector?: string | null
    robotsPolicy?: string | null
    notes?: string | null
    lastCheckedAt?: Date | string | null
    lastSuccessfulCheckAt?: Date | string | null
    status?: $Enums.SourceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    rawContents?: RawContentUncheckedCreateNestedManyWithoutSourceInput
  }

  export type SourceCreateOrConnectWithoutEventCandidatesInput = {
    where: SourceWhereUniqueInput
    create: XOR<SourceCreateWithoutEventCandidatesInput, SourceUncheckedCreateWithoutEventCandidatesInput>
  }

  export type EditorialReviewCreateWithoutEventCandidateInput = {
    id?: string
    reviewerId?: string | null
    reviewerName?: string | null
    status: $Enums.EditorialStatus
    notes?: string | null
    createdAt?: Date | string
    content?: ContentCreateNestedOneWithoutReviewsInput
  }

  export type EditorialReviewUncheckedCreateWithoutEventCandidateInput = {
    id?: string
    contentId?: string | null
    reviewerId?: string | null
    reviewerName?: string | null
    status: $Enums.EditorialStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type EditorialReviewCreateOrConnectWithoutEventCandidateInput = {
    where: EditorialReviewWhereUniqueInput
    create: XOR<EditorialReviewCreateWithoutEventCandidateInput, EditorialReviewUncheckedCreateWithoutEventCandidateInput>
  }

  export type EditorialReviewCreateManyEventCandidateInputEnvelope = {
    data: EditorialReviewCreateManyEventCandidateInput | EditorialReviewCreateManyEventCandidateInput[]
    skipDuplicates?: boolean
  }

  export type PublicationCreateWithoutEventCandidateInput = {
    id?: string
    target: $Enums.PublicationTarget
    payload: JsonNullValueInput | InputJsonValue
    status?: $Enums.EditorialStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: ContentCreateNestedOneWithoutPublicationsInput
  }

  export type PublicationUncheckedCreateWithoutEventCandidateInput = {
    id?: string
    contentId?: string | null
    target: $Enums.PublicationTarget
    payload: JsonNullValueInput | InputJsonValue
    status?: $Enums.EditorialStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicationCreateOrConnectWithoutEventCandidateInput = {
    where: PublicationWhereUniqueInput
    create: XOR<PublicationCreateWithoutEventCandidateInput, PublicationUncheckedCreateWithoutEventCandidateInput>
  }

  export type PublicationCreateManyEventCandidateInputEnvelope = {
    data: PublicationCreateManyEventCandidateInput | PublicationCreateManyEventCandidateInput[]
    skipDuplicates?: boolean
  }

  export type ContentUpsertWithoutEventCandidateInput = {
    update: XOR<ContentUpdateWithoutEventCandidateInput, ContentUncheckedUpdateWithoutEventCandidateInput>
    create: XOR<ContentCreateWithoutEventCandidateInput, ContentUncheckedCreateWithoutEventCandidateInput>
    where?: ContentWhereInput
  }

  export type ContentUpdateToOneWithWhereWithoutEventCandidateInput = {
    where?: ContentWhereInput
    data: XOR<ContentUpdateWithoutEventCandidateInput, ContentUncheckedUpdateWithoutEventCandidateInput>
  }

  export type ContentUpdateWithoutEventCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cleanText?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: EnumIntelligenceContentTypeFieldUpdateOperationsInput | $Enums.IntelligenceContentType
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: IntFieldUpdateOperationsInput | number
    fitnessScore?: IntFieldUpdateOperationsInput | number
    angolaScore?: IntFieldUpdateOperationsInput | number
    relevanceScore?: IntFieldUpdateOperationsInput | number
    trustScore?: IntFieldUpdateOperationsInput | number
    duplicateStatus?: EnumDuplicateStatusFieldUpdateOperationsInput | $Enums.DuplicateStatus
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    duplicateReason?: NullableStringFieldUpdateOperationsInput | string | null
    editorialStatus?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    draft?: NullableJsonNullValueInput | InputJsonValue
    socialDraft?: NullableJsonNullValueInput | InputJsonValue
    scoreExplanation?: NullableJsonNullValueInput | InputJsonValue
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rawContent?: RawContentUpdateOneRequiredWithoutContentNestedInput
    entities?: ContentEntityUpdateManyWithoutContentNestedInput
    reviews?: EditorialReviewUpdateManyWithoutContentNestedInput
    publications?: PublicationUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutEventCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawContentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cleanText?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: EnumIntelligenceContentTypeFieldUpdateOperationsInput | $Enums.IntelligenceContentType
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: IntFieldUpdateOperationsInput | number
    fitnessScore?: IntFieldUpdateOperationsInput | number
    angolaScore?: IntFieldUpdateOperationsInput | number
    relevanceScore?: IntFieldUpdateOperationsInput | number
    trustScore?: IntFieldUpdateOperationsInput | number
    duplicateStatus?: EnumDuplicateStatusFieldUpdateOperationsInput | $Enums.DuplicateStatus
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    duplicateReason?: NullableStringFieldUpdateOperationsInput | string | null
    editorialStatus?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    draft?: NullableJsonNullValueInput | InputJsonValue
    socialDraft?: NullableJsonNullValueInput | InputJsonValue
    scoreExplanation?: NullableJsonNullValueInput | InputJsonValue
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entities?: ContentEntityUncheckedUpdateManyWithoutContentNestedInput
    reviews?: EditorialReviewUncheckedUpdateManyWithoutContentNestedInput
    publications?: PublicationUncheckedUpdateManyWithoutContentNestedInput
  }

  export type SourceUpsertWithoutEventCandidatesInput = {
    update: XOR<SourceUpdateWithoutEventCandidatesInput, SourceUncheckedUpdateWithoutEventCandidatesInput>
    create: XOR<SourceCreateWithoutEventCandidatesInput, SourceUncheckedCreateWithoutEventCandidatesInput>
    where?: SourceWhereInput
  }

  export type SourceUpdateToOneWithWhereWithoutEventCandidatesInput = {
    where?: SourceWhereInput
    data: XOR<SourceUpdateWithoutEventCandidatesInput, SourceUncheckedUpdateWithoutEventCandidatesInput>
  }

  export type SourceUpdateWithoutEventCandidatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    sourceType?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    country?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    scrapingAllowed?: BoolFieldUpdateOperationsInput | boolean
    requiresReview?: BoolFieldUpdateOperationsInput | boolean
    updateFrequency?: StringFieldUpdateOperationsInput | string
    crawlDelayMs?: IntFieldUpdateOperationsInput | number
    lastSeenHash?: NullableStringFieldUpdateOperationsInput | string | null
    contentSelector?: NullableStringFieldUpdateOperationsInput | string | null
    titleSelector?: NullableStringFieldUpdateOperationsInput | string | null
    robotsPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuccessfulCheckAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSourceStatusFieldUpdateOperationsInput | $Enums.SourceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rawContents?: RawContentUpdateManyWithoutSourceNestedInput
  }

  export type SourceUncheckedUpdateWithoutEventCandidatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    sourceType?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    country?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    scrapingAllowed?: BoolFieldUpdateOperationsInput | boolean
    requiresReview?: BoolFieldUpdateOperationsInput | boolean
    updateFrequency?: StringFieldUpdateOperationsInput | string
    crawlDelayMs?: IntFieldUpdateOperationsInput | number
    lastSeenHash?: NullableStringFieldUpdateOperationsInput | string | null
    contentSelector?: NullableStringFieldUpdateOperationsInput | string | null
    titleSelector?: NullableStringFieldUpdateOperationsInput | string | null
    robotsPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuccessfulCheckAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSourceStatusFieldUpdateOperationsInput | $Enums.SourceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rawContents?: RawContentUncheckedUpdateManyWithoutSourceNestedInput
  }

  export type EditorialReviewUpsertWithWhereUniqueWithoutEventCandidateInput = {
    where: EditorialReviewWhereUniqueInput
    update: XOR<EditorialReviewUpdateWithoutEventCandidateInput, EditorialReviewUncheckedUpdateWithoutEventCandidateInput>
    create: XOR<EditorialReviewCreateWithoutEventCandidateInput, EditorialReviewUncheckedCreateWithoutEventCandidateInput>
  }

  export type EditorialReviewUpdateWithWhereUniqueWithoutEventCandidateInput = {
    where: EditorialReviewWhereUniqueInput
    data: XOR<EditorialReviewUpdateWithoutEventCandidateInput, EditorialReviewUncheckedUpdateWithoutEventCandidateInput>
  }

  export type EditorialReviewUpdateManyWithWhereWithoutEventCandidateInput = {
    where: EditorialReviewScalarWhereInput
    data: XOR<EditorialReviewUpdateManyMutationInput, EditorialReviewUncheckedUpdateManyWithoutEventCandidateInput>
  }

  export type PublicationUpsertWithWhereUniqueWithoutEventCandidateInput = {
    where: PublicationWhereUniqueInput
    update: XOR<PublicationUpdateWithoutEventCandidateInput, PublicationUncheckedUpdateWithoutEventCandidateInput>
    create: XOR<PublicationCreateWithoutEventCandidateInput, PublicationUncheckedCreateWithoutEventCandidateInput>
  }

  export type PublicationUpdateWithWhereUniqueWithoutEventCandidateInput = {
    where: PublicationWhereUniqueInput
    data: XOR<PublicationUpdateWithoutEventCandidateInput, PublicationUncheckedUpdateWithoutEventCandidateInput>
  }

  export type PublicationUpdateManyWithWhereWithoutEventCandidateInput = {
    where: PublicationScalarWhereInput
    data: XOR<PublicationUpdateManyMutationInput, PublicationUncheckedUpdateManyWithoutEventCandidateInput>
  }

  export type ContentCreateWithoutReviewsInput = {
    id?: string
    title: string
    slug: string
    cleanText: string
    summary?: string | null
    contentType?: $Enums.IntelligenceContentType
    category?: string | null
    country?: string
    province?: string | null
    city?: string | null
    confidence?: number
    fitnessScore?: number
    angolaScore?: number
    relevanceScore?: number
    trustScore?: number
    duplicateStatus?: $Enums.DuplicateStatus
    duplicateOfId?: string | null
    duplicateReason?: string | null
    editorialStatus?: $Enums.EditorialStatus
    draft?: NullableJsonNullValueInput | InputJsonValue
    socialDraft?: NullableJsonNullValueInput | InputJsonValue
    scoreExplanation?: NullableJsonNullValueInput | InputJsonValue
    scheduledFor?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rawContent: RawContentCreateNestedOneWithoutContentInput
    entities?: ContentEntityCreateNestedManyWithoutContentInput
    eventCandidate?: EventCandidateCreateNestedOneWithoutContentInput
    publications?: PublicationCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateWithoutReviewsInput = {
    id?: string
    rawContentId: string
    title: string
    slug: string
    cleanText: string
    summary?: string | null
    contentType?: $Enums.IntelligenceContentType
    category?: string | null
    country?: string
    province?: string | null
    city?: string | null
    confidence?: number
    fitnessScore?: number
    angolaScore?: number
    relevanceScore?: number
    trustScore?: number
    duplicateStatus?: $Enums.DuplicateStatus
    duplicateOfId?: string | null
    duplicateReason?: string | null
    editorialStatus?: $Enums.EditorialStatus
    draft?: NullableJsonNullValueInput | InputJsonValue
    socialDraft?: NullableJsonNullValueInput | InputJsonValue
    scoreExplanation?: NullableJsonNullValueInput | InputJsonValue
    scheduledFor?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entities?: ContentEntityUncheckedCreateNestedManyWithoutContentInput
    eventCandidate?: EventCandidateUncheckedCreateNestedOneWithoutContentInput
    publications?: PublicationUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentCreateOrConnectWithoutReviewsInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutReviewsInput, ContentUncheckedCreateWithoutReviewsInput>
  }

  export type EventCandidateCreateWithoutReviewsInput = {
    id?: string
    name: string
    category?: string | null
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    startTime?: string | null
    location?: string | null
    venue?: string | null
    city?: string | null
    province?: string | null
    country?: string
    organizer?: string | null
    origin?: $Enums.EventOrigin
    price?: string | null
    currency?: string
    registrationUrl?: string | null
    contact?: string | null
    sourceUrl?: string | null
    imageUrl?: string | null
    confidence?: number
    verificationStatus?: $Enums.VerificationStatus
    duplicateStatus?: $Enums.DuplicateStatus
    duplicateOfId?: string | null
    duplicateReason?: string | null
    editorialStatus?: $Enums.EditorialStatus
    scheduledFor?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: ContentCreateNestedOneWithoutEventCandidateInput
    source?: SourceCreateNestedOneWithoutEventCandidatesInput
    publications?: PublicationCreateNestedManyWithoutEventCandidateInput
  }

  export type EventCandidateUncheckedCreateWithoutReviewsInput = {
    id?: string
    contentId?: string | null
    sourceId?: string | null
    name: string
    category?: string | null
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    startTime?: string | null
    location?: string | null
    venue?: string | null
    city?: string | null
    province?: string | null
    country?: string
    organizer?: string | null
    origin?: $Enums.EventOrigin
    price?: string | null
    currency?: string
    registrationUrl?: string | null
    contact?: string | null
    sourceUrl?: string | null
    imageUrl?: string | null
    confidence?: number
    verificationStatus?: $Enums.VerificationStatus
    duplicateStatus?: $Enums.DuplicateStatus
    duplicateOfId?: string | null
    duplicateReason?: string | null
    editorialStatus?: $Enums.EditorialStatus
    scheduledFor?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    publications?: PublicationUncheckedCreateNestedManyWithoutEventCandidateInput
  }

  export type EventCandidateCreateOrConnectWithoutReviewsInput = {
    where: EventCandidateWhereUniqueInput
    create: XOR<EventCandidateCreateWithoutReviewsInput, EventCandidateUncheckedCreateWithoutReviewsInput>
  }

  export type ContentUpsertWithoutReviewsInput = {
    update: XOR<ContentUpdateWithoutReviewsInput, ContentUncheckedUpdateWithoutReviewsInput>
    create: XOR<ContentCreateWithoutReviewsInput, ContentUncheckedCreateWithoutReviewsInput>
    where?: ContentWhereInput
  }

  export type ContentUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ContentWhereInput
    data: XOR<ContentUpdateWithoutReviewsInput, ContentUncheckedUpdateWithoutReviewsInput>
  }

  export type ContentUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cleanText?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: EnumIntelligenceContentTypeFieldUpdateOperationsInput | $Enums.IntelligenceContentType
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: IntFieldUpdateOperationsInput | number
    fitnessScore?: IntFieldUpdateOperationsInput | number
    angolaScore?: IntFieldUpdateOperationsInput | number
    relevanceScore?: IntFieldUpdateOperationsInput | number
    trustScore?: IntFieldUpdateOperationsInput | number
    duplicateStatus?: EnumDuplicateStatusFieldUpdateOperationsInput | $Enums.DuplicateStatus
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    duplicateReason?: NullableStringFieldUpdateOperationsInput | string | null
    editorialStatus?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    draft?: NullableJsonNullValueInput | InputJsonValue
    socialDraft?: NullableJsonNullValueInput | InputJsonValue
    scoreExplanation?: NullableJsonNullValueInput | InputJsonValue
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rawContent?: RawContentUpdateOneRequiredWithoutContentNestedInput
    entities?: ContentEntityUpdateManyWithoutContentNestedInput
    eventCandidate?: EventCandidateUpdateOneWithoutContentNestedInput
    publications?: PublicationUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawContentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cleanText?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: EnumIntelligenceContentTypeFieldUpdateOperationsInput | $Enums.IntelligenceContentType
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: IntFieldUpdateOperationsInput | number
    fitnessScore?: IntFieldUpdateOperationsInput | number
    angolaScore?: IntFieldUpdateOperationsInput | number
    relevanceScore?: IntFieldUpdateOperationsInput | number
    trustScore?: IntFieldUpdateOperationsInput | number
    duplicateStatus?: EnumDuplicateStatusFieldUpdateOperationsInput | $Enums.DuplicateStatus
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    duplicateReason?: NullableStringFieldUpdateOperationsInput | string | null
    editorialStatus?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    draft?: NullableJsonNullValueInput | InputJsonValue
    socialDraft?: NullableJsonNullValueInput | InputJsonValue
    scoreExplanation?: NullableJsonNullValueInput | InputJsonValue
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entities?: ContentEntityUncheckedUpdateManyWithoutContentNestedInput
    eventCandidate?: EventCandidateUncheckedUpdateOneWithoutContentNestedInput
    publications?: PublicationUncheckedUpdateManyWithoutContentNestedInput
  }

  export type EventCandidateUpsertWithoutReviewsInput = {
    update: XOR<EventCandidateUpdateWithoutReviewsInput, EventCandidateUncheckedUpdateWithoutReviewsInput>
    create: XOR<EventCandidateCreateWithoutReviewsInput, EventCandidateUncheckedCreateWithoutReviewsInput>
    where?: EventCandidateWhereInput
  }

  export type EventCandidateUpdateToOneWithWhereWithoutReviewsInput = {
    where?: EventCandidateWhereInput
    data: XOR<EventCandidateUpdateWithoutReviewsInput, EventCandidateUncheckedUpdateWithoutReviewsInput>
  }

  export type EventCandidateUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    organizer?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: EnumEventOriginFieldUpdateOperationsInput | $Enums.EventOrigin
    price?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    registrationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: IntFieldUpdateOperationsInput | number
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    duplicateStatus?: EnumDuplicateStatusFieldUpdateOperationsInput | $Enums.DuplicateStatus
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    duplicateReason?: NullableStringFieldUpdateOperationsInput | string | null
    editorialStatus?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateOneWithoutEventCandidateNestedInput
    source?: SourceUpdateOneWithoutEventCandidatesNestedInput
    publications?: PublicationUpdateManyWithoutEventCandidateNestedInput
  }

  export type EventCandidateUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    organizer?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: EnumEventOriginFieldUpdateOperationsInput | $Enums.EventOrigin
    price?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    registrationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: IntFieldUpdateOperationsInput | number
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    duplicateStatus?: EnumDuplicateStatusFieldUpdateOperationsInput | $Enums.DuplicateStatus
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    duplicateReason?: NullableStringFieldUpdateOperationsInput | string | null
    editorialStatus?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publications?: PublicationUncheckedUpdateManyWithoutEventCandidateNestedInput
  }

  export type ContentCreateWithoutPublicationsInput = {
    id?: string
    title: string
    slug: string
    cleanText: string
    summary?: string | null
    contentType?: $Enums.IntelligenceContentType
    category?: string | null
    country?: string
    province?: string | null
    city?: string | null
    confidence?: number
    fitnessScore?: number
    angolaScore?: number
    relevanceScore?: number
    trustScore?: number
    duplicateStatus?: $Enums.DuplicateStatus
    duplicateOfId?: string | null
    duplicateReason?: string | null
    editorialStatus?: $Enums.EditorialStatus
    draft?: NullableJsonNullValueInput | InputJsonValue
    socialDraft?: NullableJsonNullValueInput | InputJsonValue
    scoreExplanation?: NullableJsonNullValueInput | InputJsonValue
    scheduledFor?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rawContent: RawContentCreateNestedOneWithoutContentInput
    entities?: ContentEntityCreateNestedManyWithoutContentInput
    eventCandidate?: EventCandidateCreateNestedOneWithoutContentInput
    reviews?: EditorialReviewCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateWithoutPublicationsInput = {
    id?: string
    rawContentId: string
    title: string
    slug: string
    cleanText: string
    summary?: string | null
    contentType?: $Enums.IntelligenceContentType
    category?: string | null
    country?: string
    province?: string | null
    city?: string | null
    confidence?: number
    fitnessScore?: number
    angolaScore?: number
    relevanceScore?: number
    trustScore?: number
    duplicateStatus?: $Enums.DuplicateStatus
    duplicateOfId?: string | null
    duplicateReason?: string | null
    editorialStatus?: $Enums.EditorialStatus
    draft?: NullableJsonNullValueInput | InputJsonValue
    socialDraft?: NullableJsonNullValueInput | InputJsonValue
    scoreExplanation?: NullableJsonNullValueInput | InputJsonValue
    scheduledFor?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entities?: ContentEntityUncheckedCreateNestedManyWithoutContentInput
    eventCandidate?: EventCandidateUncheckedCreateNestedOneWithoutContentInput
    reviews?: EditorialReviewUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentCreateOrConnectWithoutPublicationsInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutPublicationsInput, ContentUncheckedCreateWithoutPublicationsInput>
  }

  export type EventCandidateCreateWithoutPublicationsInput = {
    id?: string
    name: string
    category?: string | null
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    startTime?: string | null
    location?: string | null
    venue?: string | null
    city?: string | null
    province?: string | null
    country?: string
    organizer?: string | null
    origin?: $Enums.EventOrigin
    price?: string | null
    currency?: string
    registrationUrl?: string | null
    contact?: string | null
    sourceUrl?: string | null
    imageUrl?: string | null
    confidence?: number
    verificationStatus?: $Enums.VerificationStatus
    duplicateStatus?: $Enums.DuplicateStatus
    duplicateOfId?: string | null
    duplicateReason?: string | null
    editorialStatus?: $Enums.EditorialStatus
    scheduledFor?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: ContentCreateNestedOneWithoutEventCandidateInput
    source?: SourceCreateNestedOneWithoutEventCandidatesInput
    reviews?: EditorialReviewCreateNestedManyWithoutEventCandidateInput
  }

  export type EventCandidateUncheckedCreateWithoutPublicationsInput = {
    id?: string
    contentId?: string | null
    sourceId?: string | null
    name: string
    category?: string | null
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    startTime?: string | null
    location?: string | null
    venue?: string | null
    city?: string | null
    province?: string | null
    country?: string
    organizer?: string | null
    origin?: $Enums.EventOrigin
    price?: string | null
    currency?: string
    registrationUrl?: string | null
    contact?: string | null
    sourceUrl?: string | null
    imageUrl?: string | null
    confidence?: number
    verificationStatus?: $Enums.VerificationStatus
    duplicateStatus?: $Enums.DuplicateStatus
    duplicateOfId?: string | null
    duplicateReason?: string | null
    editorialStatus?: $Enums.EditorialStatus
    scheduledFor?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: EditorialReviewUncheckedCreateNestedManyWithoutEventCandidateInput
  }

  export type EventCandidateCreateOrConnectWithoutPublicationsInput = {
    where: EventCandidateWhereUniqueInput
    create: XOR<EventCandidateCreateWithoutPublicationsInput, EventCandidateUncheckedCreateWithoutPublicationsInput>
  }

  export type ContentUpsertWithoutPublicationsInput = {
    update: XOR<ContentUpdateWithoutPublicationsInput, ContentUncheckedUpdateWithoutPublicationsInput>
    create: XOR<ContentCreateWithoutPublicationsInput, ContentUncheckedCreateWithoutPublicationsInput>
    where?: ContentWhereInput
  }

  export type ContentUpdateToOneWithWhereWithoutPublicationsInput = {
    where?: ContentWhereInput
    data: XOR<ContentUpdateWithoutPublicationsInput, ContentUncheckedUpdateWithoutPublicationsInput>
  }

  export type ContentUpdateWithoutPublicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cleanText?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: EnumIntelligenceContentTypeFieldUpdateOperationsInput | $Enums.IntelligenceContentType
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: IntFieldUpdateOperationsInput | number
    fitnessScore?: IntFieldUpdateOperationsInput | number
    angolaScore?: IntFieldUpdateOperationsInput | number
    relevanceScore?: IntFieldUpdateOperationsInput | number
    trustScore?: IntFieldUpdateOperationsInput | number
    duplicateStatus?: EnumDuplicateStatusFieldUpdateOperationsInput | $Enums.DuplicateStatus
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    duplicateReason?: NullableStringFieldUpdateOperationsInput | string | null
    editorialStatus?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    draft?: NullableJsonNullValueInput | InputJsonValue
    socialDraft?: NullableJsonNullValueInput | InputJsonValue
    scoreExplanation?: NullableJsonNullValueInput | InputJsonValue
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rawContent?: RawContentUpdateOneRequiredWithoutContentNestedInput
    entities?: ContentEntityUpdateManyWithoutContentNestedInput
    eventCandidate?: EventCandidateUpdateOneWithoutContentNestedInput
    reviews?: EditorialReviewUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutPublicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawContentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cleanText?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: EnumIntelligenceContentTypeFieldUpdateOperationsInput | $Enums.IntelligenceContentType
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: IntFieldUpdateOperationsInput | number
    fitnessScore?: IntFieldUpdateOperationsInput | number
    angolaScore?: IntFieldUpdateOperationsInput | number
    relevanceScore?: IntFieldUpdateOperationsInput | number
    trustScore?: IntFieldUpdateOperationsInput | number
    duplicateStatus?: EnumDuplicateStatusFieldUpdateOperationsInput | $Enums.DuplicateStatus
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    duplicateReason?: NullableStringFieldUpdateOperationsInput | string | null
    editorialStatus?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    draft?: NullableJsonNullValueInput | InputJsonValue
    socialDraft?: NullableJsonNullValueInput | InputJsonValue
    scoreExplanation?: NullableJsonNullValueInput | InputJsonValue
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entities?: ContentEntityUncheckedUpdateManyWithoutContentNestedInput
    eventCandidate?: EventCandidateUncheckedUpdateOneWithoutContentNestedInput
    reviews?: EditorialReviewUncheckedUpdateManyWithoutContentNestedInput
  }

  export type EventCandidateUpsertWithoutPublicationsInput = {
    update: XOR<EventCandidateUpdateWithoutPublicationsInput, EventCandidateUncheckedUpdateWithoutPublicationsInput>
    create: XOR<EventCandidateCreateWithoutPublicationsInput, EventCandidateUncheckedCreateWithoutPublicationsInput>
    where?: EventCandidateWhereInput
  }

  export type EventCandidateUpdateToOneWithWhereWithoutPublicationsInput = {
    where?: EventCandidateWhereInput
    data: XOR<EventCandidateUpdateWithoutPublicationsInput, EventCandidateUncheckedUpdateWithoutPublicationsInput>
  }

  export type EventCandidateUpdateWithoutPublicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    organizer?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: EnumEventOriginFieldUpdateOperationsInput | $Enums.EventOrigin
    price?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    registrationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: IntFieldUpdateOperationsInput | number
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    duplicateStatus?: EnumDuplicateStatusFieldUpdateOperationsInput | $Enums.DuplicateStatus
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    duplicateReason?: NullableStringFieldUpdateOperationsInput | string | null
    editorialStatus?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateOneWithoutEventCandidateNestedInput
    source?: SourceUpdateOneWithoutEventCandidatesNestedInput
    reviews?: EditorialReviewUpdateManyWithoutEventCandidateNestedInput
  }

  export type EventCandidateUncheckedUpdateWithoutPublicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    organizer?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: EnumEventOriginFieldUpdateOperationsInput | $Enums.EventOrigin
    price?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    registrationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: IntFieldUpdateOperationsInput | number
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    duplicateStatus?: EnumDuplicateStatusFieldUpdateOperationsInput | $Enums.DuplicateStatus
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    duplicateReason?: NullableStringFieldUpdateOperationsInput | string | null
    editorialStatus?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: EditorialReviewUncheckedUpdateManyWithoutEventCandidateNestedInput
  }

  export type RawContentCreateManySourceInput = {
    id?: string
    externalId?: string | null
    canonicalUrl?: string | null
    title: string
    rawText: string
    rawHtml?: string | null
    author?: string | null
    publishedAt?: Date | string | null
    discoveredAt?: Date | string
    fetchedAt?: Date | string
    contentHash: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.RawContentStatus
  }

  export type EventCandidateCreateManySourceInput = {
    id?: string
    contentId?: string | null
    name: string
    category?: string | null
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    startTime?: string | null
    location?: string | null
    venue?: string | null
    city?: string | null
    province?: string | null
    country?: string
    organizer?: string | null
    origin?: $Enums.EventOrigin
    price?: string | null
    currency?: string
    registrationUrl?: string | null
    contact?: string | null
    sourceUrl?: string | null
    imageUrl?: string | null
    confidence?: number
    verificationStatus?: $Enums.VerificationStatus
    duplicateStatus?: $Enums.DuplicateStatus
    duplicateOfId?: string | null
    duplicateReason?: string | null
    editorialStatus?: $Enums.EditorialStatus
    scheduledFor?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RawContentUpdateWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    rawText?: StringFieldUpdateOperationsInput | string
    rawHtml?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentHash?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumRawContentStatusFieldUpdateOperationsInput | $Enums.RawContentStatus
    content?: ContentUpdateOneWithoutRawContentNestedInput
  }

  export type RawContentUncheckedUpdateWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    rawText?: StringFieldUpdateOperationsInput | string
    rawHtml?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentHash?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumRawContentStatusFieldUpdateOperationsInput | $Enums.RawContentStatus
    content?: ContentUncheckedUpdateOneWithoutRawContentNestedInput
  }

  export type RawContentUncheckedUpdateManyWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    rawText?: StringFieldUpdateOperationsInput | string
    rawHtml?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentHash?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumRawContentStatusFieldUpdateOperationsInput | $Enums.RawContentStatus
  }

  export type EventCandidateUpdateWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    organizer?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: EnumEventOriginFieldUpdateOperationsInput | $Enums.EventOrigin
    price?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    registrationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: IntFieldUpdateOperationsInput | number
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    duplicateStatus?: EnumDuplicateStatusFieldUpdateOperationsInput | $Enums.DuplicateStatus
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    duplicateReason?: NullableStringFieldUpdateOperationsInput | string | null
    editorialStatus?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateOneWithoutEventCandidateNestedInput
    reviews?: EditorialReviewUpdateManyWithoutEventCandidateNestedInput
    publications?: PublicationUpdateManyWithoutEventCandidateNestedInput
  }

  export type EventCandidateUncheckedUpdateWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    organizer?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: EnumEventOriginFieldUpdateOperationsInput | $Enums.EventOrigin
    price?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    registrationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: IntFieldUpdateOperationsInput | number
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    duplicateStatus?: EnumDuplicateStatusFieldUpdateOperationsInput | $Enums.DuplicateStatus
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    duplicateReason?: NullableStringFieldUpdateOperationsInput | string | null
    editorialStatus?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: EditorialReviewUncheckedUpdateManyWithoutEventCandidateNestedInput
    publications?: PublicationUncheckedUpdateManyWithoutEventCandidateNestedInput
  }

  export type EventCandidateUncheckedUpdateManyWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    organizer?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: EnumEventOriginFieldUpdateOperationsInput | $Enums.EventOrigin
    price?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    registrationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: IntFieldUpdateOperationsInput | number
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    duplicateStatus?: EnumDuplicateStatusFieldUpdateOperationsInput | $Enums.DuplicateStatus
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    duplicateReason?: NullableStringFieldUpdateOperationsInput | string | null
    editorialStatus?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentEntityCreateManyContentInput = {
    entityId: string
    confidence?: number
    role?: string | null
  }

  export type EditorialReviewCreateManyContentInput = {
    id?: string
    eventCandidateId?: string | null
    reviewerId?: string | null
    reviewerName?: string | null
    status: $Enums.EditorialStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type PublicationCreateManyContentInput = {
    id?: string
    eventCandidateId?: string | null
    target: $Enums.PublicationTarget
    payload: JsonNullValueInput | InputJsonValue
    status?: $Enums.EditorialStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentEntityUpdateWithoutContentInput = {
    confidence?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
    entity?: EntityUpdateOneRequiredWithoutContentsNestedInput
  }

  export type ContentEntityUncheckedUpdateWithoutContentInput = {
    entityId?: StringFieldUpdateOperationsInput | string
    confidence?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContentEntityUncheckedUpdateManyWithoutContentInput = {
    entityId?: StringFieldUpdateOperationsInput | string
    confidence?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EditorialReviewUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventCandidate?: EventCandidateUpdateOneWithoutReviewsNestedInput
  }

  export type EditorialReviewUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventCandidateId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EditorialReviewUncheckedUpdateManyWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventCandidateId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    target?: EnumPublicationTargetFieldUpdateOperationsInput | $Enums.PublicationTarget
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventCandidate?: EventCandidateUpdateOneWithoutPublicationsNestedInput
  }

  export type PublicationUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventCandidateId?: NullableStringFieldUpdateOperationsInput | string | null
    target?: EnumPublicationTargetFieldUpdateOperationsInput | $Enums.PublicationTarget
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationUncheckedUpdateManyWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventCandidateId?: NullableStringFieldUpdateOperationsInput | string | null
    target?: EnumPublicationTargetFieldUpdateOperationsInput | $Enums.PublicationTarget
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentEntityCreateManyEntityInput = {
    contentId: string
    confidence?: number
    role?: string | null
  }

  export type ContentEntityUpdateWithoutEntityInput = {
    confidence?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
    content?: ContentUpdateOneRequiredWithoutEntitiesNestedInput
  }

  export type ContentEntityUncheckedUpdateWithoutEntityInput = {
    contentId?: StringFieldUpdateOperationsInput | string
    confidence?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContentEntityUncheckedUpdateManyWithoutEntityInput = {
    contentId?: StringFieldUpdateOperationsInput | string
    confidence?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EditorialReviewCreateManyEventCandidateInput = {
    id?: string
    contentId?: string | null
    reviewerId?: string | null
    reviewerName?: string | null
    status: $Enums.EditorialStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type PublicationCreateManyEventCandidateInput = {
    id?: string
    contentId?: string | null
    target: $Enums.PublicationTarget
    payload: JsonNullValueInput | InputJsonValue
    status?: $Enums.EditorialStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EditorialReviewUpdateWithoutEventCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateOneWithoutReviewsNestedInput
  }

  export type EditorialReviewUncheckedUpdateWithoutEventCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EditorialReviewUncheckedUpdateManyWithoutEventCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationUpdateWithoutEventCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    target?: EnumPublicationTargetFieldUpdateOperationsInput | $Enums.PublicationTarget
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateOneWithoutPublicationsNestedInput
  }

  export type PublicationUncheckedUpdateWithoutEventCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: NullableStringFieldUpdateOperationsInput | string | null
    target?: EnumPublicationTargetFieldUpdateOperationsInput | $Enums.PublicationTarget
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationUncheckedUpdateManyWithoutEventCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: NullableStringFieldUpdateOperationsInput | string | null
    target?: EnumPublicationTargetFieldUpdateOperationsInput | $Enums.PublicationTarget
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumEditorialStatusFieldUpdateOperationsInput | $Enums.EditorialStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}