import * as identity from "@iota/identity-wasm";

export const LINK_REGEX = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;

/**
 * Loads the identity wasm library.
 *
 * @returns {Promise<void>}
 */
export async function initIdentity(path = "./identity_wasm_bg.wasm") {
    console.log("Initialization started...");
    await identity.init(path);
    console.log("Initialization success!");
}

/**
 * Returns the default client configuration to connect to the IOTA mainnet.
 *
 * N.B. initIdentity() must be called prior to this function.
 *
 * @returns {{defaultNodeURL: string, explorerURL: string, network: Network}}
 */
export function defaultClientConfig() {
    const mainNet = identity.Network.mainnet();
    return {
        network: mainNet,
        defaultNodeURL: mainNet.defaultNodeURL,
        explorerURL: mainNet.explorerURL,
    }
}