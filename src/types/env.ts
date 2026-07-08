export type Env = {
    AUTHORIZATION_DURABLE_OBJECT: DurableObjectNamespace;
    CONVERSATION_DURABLE_OBJECT: DurableObjectNamespace;
    DATABASE: D1Database;        
    SESSION_CACHE: KVNamespace;  
    FEED_CACHE: KVNamespace;     
    MESSAGE_ASSETS: R2Bucket;
}
