import { SVGDOMAttributes } from "../h/JSX/SVGDOMAttributes";

type allAttributes = SVGDOMAttributes & { id: string };

class AuxiliarAllDomAttributes implements allAttributes {
    id: string = '';
    accentHeight: string | number = '';
    accumulate: "none" | "sum" = 'none';
    additive: "sum" | "replace" = 'sum';
    alignmentBaseline: "alphabetic" | "hanging" | "ideographic" | "mathematical" | "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" | "text-after-edge" | "inherit" = 'alphabetic';
    allowReorder: "no" | "yes" = 'yes';
    alphabetic: string | number = '';
    amplitude: string | number = '';
    arabicForm: "initial" | "medial" | "terminal" | "isolated" = 'initial';
    ascent: string | number = '';
    attributeName: string = '';
    attributeType: string = '';
    autoReverse: string | number = '';
    azimuth: string | number = '';
    baseFrequency: string | number = '';
    baselineShift: string | number = '';
    baseProfile: string | number = '';
    bbox: string | number = '';
    begin: string | number = '';
    bias: string | number = '';
    by: string | number = '';
    calcMode: string | number = '';
    capHeight: string | number = '';
    clip: string | number = '';
    clipPath: string = '';
    clipPathUnits: string | number = '';
    clipRule: string | number = '';
    colorInterpolation: string | number = '';
    colorInterpolationFilters: "auto" | "inherit" | "sRGB" | "linearRGB" = 'auto';
    colorProfile: string | number = '';
    colorRendering: string | number = '';
    contentScriptType: string | number = '';
    contentStyleType: string | number = '';
    cursor: string | number = '';
    cx: string | number = '';
    cy: string | number = '';
    d: string = '';
    decelerate: string | number = '';
    descent: string | number = '';
    diffuseConstant: string | number = '';
    direction: string | number = '';
    display: string | number = '';
    divisor: string | number = '';
    dominantBaseline: string | number = '';
    dur: string | number = '';
    dx: string | number = '';
    dy: string | number = '';
    edgeMode: string | number = '';
    elevation: string | number = '';
    enableBackground: string | number = '';
    end: string | number = '';
    exponent: string | number = '';
    externalResourcesRequired: string | number = '';
    fill: string = '';
    fillOpacity: string | number = '';
    fillRule: "inherit" | "nonzero" | "evenodd" = 'inherit';
    filter: string = '';
    filterRes: string | number = '';
    filterUnits: string | number = '';
    floodColor: string | number = '';
    floodOpacity: string | number = '';
    focusable: string | number = '';
    fontFamily: string = '';
    fontSize: string | number = '';
    fontSizeAdjust: string | number = '';
    fontStretch: string | number = '';
    fontStyle: string | number = '';
    fontVariant: string | number = '';
    fontWeight: string | number = '';
    format: string | number = '';
    from: string | number = '';
    fx: string | number = '';
    fy: string | number = '';
    g1: string | number = '';
    g2: string | number = '';
    glyphName: string | number = '';
    glyphOrientationHorizontal: string | number = '';
    glyphOrientationVertical: string | number = '';
    glyphRef: string | number = '';
    gradientTransform: string = '';
    gradientUnits: string = '';
    hanging: string | number = '';
    horizAdvX: string | number = '';
    horizOriginX: string | number = '';
    ideographic: string | number = '';
    imageRendering: string | number = '';
    in2: string | number = '';
    in: string = '';
    intercept: string | number = '';
    k1: string | number = '';
    k2: string | number = '';
    k3: string | number = '';
    k4: string | number = '';
    k: string | number = '';
    kernelMatrix: string | number = '';
    kernelUnitLength: string | number = '';
    kerning: string | number = '';
    keyPoints: string | number = '';
    keySplines: string | number = '';
    keyTimes: string | number = '';
    lengthAdjust: string | number = '';
    letterSpacing: string | number = '';
    lightingColor: string | number = '';
    limitingConeAngle: string | number = '';
    local: string | number = '';
    markerEnd: string = '';
    markerHeight: string | number = '';
    markerMid: string = '';
    markerStart: string = '';
    markerUnits: string | number = '';
    markerWidth: string | number = '';
    mask: string = '';
    maskContentUnits: string | number = '';
    maskUnits: string | number = '';
    mathematical: string | number = '';
    mode: string | number = '';
    numOctaves: string | number = '';
    offset: string | number = '';
    opacity: string | number = '';
    operator: string | number = '';
    order: string | number = '';
    orient: string | number = '';
    orientation: string | number = '';
    origin: string | number = '';
    overflow: string | number = '';
    overlinePosition: string | number = '';
    overlineThickness: string | number = '';
    paintOrder: string | number = '';
    panose1: string | number = '';
    pathLength: string | number = '';
    patternContentUnits: string = '';
    patternTransform: string | number = '';
    patternUnits: string = '';
    pointerEvents: string | number = '';
    points: string = '';
    pointsAtX: string | number = '';
    pointsAtY: string | number = '';
    pointsAtZ: string | number = '';
    preserveAlpha: string | number = '';
    preserveAspectRatio: string = '';
    primitiveUnits: string | number = '';
    r: string | number = '';
    radius: string | number = '';
    refX: string | number = '';
    refY: string | number = '';
    renderingIntent: string | number = '';
    repeatCount: string | number = '';
    repeatDur: string | number = '';
    requiredExtensions: string | number = '';
    requiredFeatures: string | number = '';
    restart: string | number = '';
    result: string = '';
    rotate: string | number = '';
    rx: string | number = '';
    ry: string | number = '';
    scale: string | number = '';
    seed: string | number = '';
    shapeRendering: string | number = '';
    slope: string | number = '';
    spacing: string | number = '';
    specularConstant: string | number = '';
    specularExponent: string | number = '';
    speed: string | number = '';
    spreadMethod: string = '';
    startOffset: string | number = '';
    stdDeviation: string | number = '';
    stemh: string | number = '';
    stemv: string | number = '';
    stitchTiles: string | number = '';
    stopColor: string = '';
    stopOpacity: string | number = '';
    strikethroughPosition: string | number = '';
    strikethroughThickness: string | number = '';
    string: string | number = '';
    stroke: string = '';
    strokeDasharray: string | number = '';
    strokeDashoffset: string | number = '';
    strokeLinecap: "inherit" | "butt" | "round" | "square" = 'inherit';
    strokeLinejoin: "inherit" | "round" | "miter" | "bevel" = 'inherit';
    strokeMiterlimit: string = '';
    strokeOpacity: string | number = '';
    strokeWidth: string | number = '';
    surfaceScale: string | number = '';
    systemLanguage: string | number = '';
    tableValues: string | number = '';
    targetX: string | number = '';
    targetY: string | number = '';
    textAnchor: string = '';
    textDecoration: string | number = '';
    textLength: string | number = '';
    textRendering: string | number = '';
    to: string | number = '';
    transform: string = '';
    u1: string | number = '';
    u2: string | number = '';
    underlinePosition: string | number = '';
    underlineThickness: string | number = '';
    unicode: string | number = '';
    unicodeBidi: string | number = '';
    unicodeRange: string | number = '';
    unitsPerEm: string | number = '';
    vAlphabetic: string | number = '';
    values: string = '';
    vectorEffect: string | number = '';
    version: string = '';
    vertAdvY: string | number = '';
    vertOriginX: string | number = '';
    vertOriginY: string | number = '';
    vHanging: string | number = '';
    vIdeographic: string | number = '';
    viewBox: string = '';
    viewTarget: string | number = '';
    visibility: string | number = '';
    vMathematical: string | number = '';
    widths: string | number = '';
    wordSpacing: string | number = '';
    writingMode: string | number = '';
    x1: string | number = '';
    x2: string | number = '';
    x: string | number = '';
    xChannelSelector: string = '';
    xHeight: string | number = '';
    xlinkActuate: string = '';
    xlinkArcrole: string = '';
    xlinkHref: string = '';
    xlinkRole: string = '';
    xlinkShow: string = '';
    xlinkTitle: string = '';
    xlinkType: string = '';
    xmlBase: string = '';
    xmlLang: string = '';
    xmlns: string = '';
    xmlnsXlink: string = '';
    xmlSpace: string = '';
    y1: string | number = '';
    y2: string | number = '';
    y: string | number = '';
    yChannelSelector: string = '';
    z: string | number = '';
    zoomAndPan: string = '';
    accept: string = '';
    acceptCharset: string = '';
    accessKey: string = '';
    action: string = '';
    allowFullScreen: boolean = false;
    allowTransparency: boolean = false;
    alt: string = '';
    as: string = '';
    async: boolean = false;
    autocomplete: string = '';
    autoComplete: string = '';
    autocorrect: string = '';
    autoCorrect: string = '';
    autofocus: boolean = false;
    autoFocus: boolean = false;
    autoPlay: boolean = false;
    capture: boolean = false;
    cellPadding: string | number = '';
    cellSpacing: string | number = '';
    charSet: string = '';
    challenge: string = '';
    checked: boolean = false;
    class: string = '';
    cols: number = 0;
    colSpan: number = 0;
    content: string = '';
    contentEditable: boolean = false;
    contextMenu: string = '';
    controls: boolean = false;
    controlsList: string = '';
    coords: string = '';
    crossOrigin: string = '';
    data: string = '';
    dateTime: string = '';
    default: boolean = false;
    defer: boolean = false;
    dir: "auto" | "rtl" | "ltr" = 'auto';
    disabled: boolean = false;
    disableRemotePlayback: boolean = false;
    download: any = '';
    draggable: boolean = false;
    encType: string = '';
    form: string = '';
    formAction: string = '';
    formEncType: string = '';
    formMethod: string = '';
    formNoValidate: boolean = false;
    formTarget: string = '';
    frameBorder: string | number = '';
    headers: string = '';
    height: string | number = '';
    hidden: boolean = false;
    high: number = 0;
    href: string = '';
    hrefLang: string = '';
    for: string = '';
    httpEquiv: string = '';
    icon: string = '';
    inputMode: string = '';
    integrity: string = '';
    is: string = '';
    keyParams: string = '';
    keyType: string = '';
    kind: string = '';
    label: string = '';
    lang: string = '';
    list: string = '';
    loop: boolean = false;
    low: number = 0;
    manifest: string = '';
    marginHeight: number = 0;
    marginWidth: number = 0;
    max: string | number = '';
    maxLength: number = 0;
    media: string = '';
    mediaGroup: string = '';
    method: string = '';
    min: string | number = '';
    minLength: number = 0;
    multiple: boolean = false;
    muted: boolean = false;
    name: string = '';
    nonce: string = '';
    noValidate: boolean = false;
    open: boolean = false;
    optimum: number = 0;
    pattern: string = '';
    placeholder: string = '';
    playsInline: boolean = false;
    poster: string = '';
    preload: string = '';
    radioGroup: string = '';
    readOnly: boolean = false;
    rel: string = '';
    required: boolean = false;
    role: string = '';
    rows: number = 0;
    rowSpan: number = 0;
    sandbox: string = '';
    scope: string = '';
    scrolling: string = '';
    seamless: boolean = false;
    selected: boolean = false;
    shape: string = '';
    size: number = 0;
    sizes: string = '';
    slot: string = '';
    span: number = 0;
    spellcheck: boolean = false;
    src: string = '';
    srcset: string = '';
    srcDoc: string = '';
    srcLang: string = '';
    srcSet: string = '';
    start: number = 0;
    step: string | number = '';
    style: Partial<CSSStyleDeclaration> = '';
    summary: string = '';
    tabIndex: number = 0;
    target: string = '';
    title: string = '';
    type: string = '';
    useMap: string = '';
    value: string | number | string[] = '';
    volume: string | number = '';
    width: string | number = '';
    wmode: string = '';
    wrap: string = '';
    about: string = '';
    datatype: string = '';
    inlist: any = '';
    prefix: string = '';
    property: string = '';
    resource: string = '';
    typeof: string = '';
    vocab: string = '';
    itemProp: string = '';
    itemScope: boolean = false;
    itemType: string = '';
    itemID: string = '';
    itemRef: string = '';
}

export const AllDomAttributes = Object.keys(new AuxiliarAllDomAttributes())