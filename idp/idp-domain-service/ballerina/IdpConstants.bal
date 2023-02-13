const string CLIENT_NAME_EMPTY_ERROR = "100150";
const string GRANT_TYPES_EMPTY_ERROR = "100151";
const string INTERNAL_ERROR = "100100";
const string INVALID_USERNAME_OR_PASSWORD = "100171";
const string INVALID_PERMISSION = "100172";
const string INVALID_ORGANIZATION = "100173";
const string CLIENT_ID_NOT_FOUND_ERROR = "100152";
const string UNSUPPORTED_GRANT_TYPE_ERROR = "100153";
const string CLIENT_CREDENTIALS_GRANT_TYPE = "client_credentials";
const string AUTHORIZATION_CODE_GRANT_TYPE = "authorization_code";
const string ACCESS_TOKEN_TYPE = "access_token";
const string REFRESH_TOKEN_TYPE = "refresh_token";
const string REFRESH_TOKEN_GRANT_TYPE = "refresh_token";
const string AUTHORIZATION_CODE_TYPE = "authorization_code";
const string SESSION_KEY_TYPE = "session_key";
const string ORGANIZATION_CLAIM = "organization";
const string TOKEN_TYPE_CLAIM = "token_type";
const string TOKEN_TYPE_BEARER = "Bearer";
const string REDIRECT_URI_CLAIM = "redirectUri";
const string SCOPES_CLAIM = "scopes";
const string SESSION_KEY_PREFIX = "session-";
const string STATE_KEY_QUERY_PARAM = "stateKey";
const string LOCATION_HEADER = "Location";
const string CLIENT_ID_CLAIM  = "clientId";
const string AUTHORIZATION_CODE_QUERY_PARAM = "code";
const string TYPE_CLAIM = "type";
isolated  string[] ALLOWED_GRANT_TYPES = [CLIENT_CREDENTIALS_GRANT_TYPE,REFRESH_TOKEN_GRANT_TYPE,AUTHORIZATION_CODE_GRANT_TYPE];