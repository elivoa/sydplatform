
export class User {
	id: number;
	name: string;
	roles: string; // TODO a big int?
}

export class UserToken {
	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
	}

	id: number;
	name: string;
	roles: string; // the same with User

	user: User
	token: Token
}

// OAuth2 token.
export class Token {

	// AccessToken is the token that authorizes and authenticates
	// the requests.
	access_token: string

	// TokenType is the type of token.
	// The Type method returns either this or "Bearer", the default.
	token_type: string

	// RefreshToken is a token that's used by the application
	// (as opposed to the user) to refresh the access token
	// if it expires.
	refresh_token: string

	// Expiry is the optional expiration time of the access token.
	//
	// If zero, TokenSource implementations will reuse the same
	// token forever and RefreshToken or equivalent
	// mechanisms for that TokenSource will not be used.
	expiry: string // Expiry time.Time`json:"expiry,omitempty"`

}