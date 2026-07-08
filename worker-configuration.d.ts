interface Env {
	/**
	 * Durable Object authentication, user, channel, session
	 */
	AUTHORIZATION_DURABLE_OBJECT: DurableObjectNamespace<import("./src/index").AuthorizationDurableObject>;
	
	/**
	 * Durable Object feed
	 */
	CONVERSATION_DURABLE_OBJECT: DurableObjectNamespace<import("./src/index").ConversationDurableObject>;
	
	/**
	 * R2 Bucket 
	 */
	MESSAGE_ASSETS: R2Bucket;
	
	/**
	 * D1 Database data relation (user, channel, message, session)
	 */
	DATABASE: D1Database;
	
	/**
	 * KV session cache (validasi session)
	 */
	SESSION_CACHE: KVNamespace;
	
	/**
	 * KV timeline feed (public channel)
	 */
	FEED_CACHE: KVNamespace;
}
