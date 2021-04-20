export class IdGenerator {
	private ids: Map<string, string>;

	constructor() {
	  this.ids = new Map<string, string>();
	}

	generateId() {//TODO: Check a way to standardize this method
	  // @ts-ignore
	  const cryptoObj: Crypto = window.crypto || window.msCrypto; // for IE 11 https://developer.mozilla.org/en-US/docs/Web/API/Window/crypto
	  // let bytes = cryptoObj.getRandomValues(new Uint8Array(32));
	  // const randomBytes = () => (bytes = bytes.slice(1)) && bytes[0];

	  // // @ts-ignore
	  // return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
	  // 	(c ^ randomBytes() & 15 >> c / 4).toString(16)
	  // );

	  const uint32 = cryptoObj.getRandomValues(new Uint32Array(4)).join('-');
	  return uint32;
	}

	public getId(key: string) {
	  if (this.ids.has(key)) {
	    return this.ids.get(key);
	  } 
	  const newId = this.generateId();
	  this.ids.set(key, newId);
	  return newId;
	}

	public get(key: string) {
	  return { id: this.getId(key) };
	}
}