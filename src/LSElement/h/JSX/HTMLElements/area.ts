import { GetAttributes } from "../DOMAttributes/Utils";
import { GlobalAttributes } from "../DOMAttributes/GlobalAttributes";

export type area = Partial<GlobalAttributes & GetAttributes<
    'alt'
    | 'coords'
    | 'download'
    | 'href'
    | 'hreflang'
    | 'ping'
    | 'rel'
    | 'shape'
    | 'target'
>>