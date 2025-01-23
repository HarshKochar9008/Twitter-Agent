import {Character ,ModelProviderName,defaultCharacter, Clients,} from "@elizaos/core";
import * as defaultCharacters from "../characters/a2a.character.json";
import { twitterPlugin } from "@elizaos/plugin-twitter";

export const mainCharacter : Character= {
    ...defaultCharacter,
    clients :[Clients.TWITTER],
    plugins: [twitterPlugin],
    modelProvider:ModelProviderName.OPENAI
}

