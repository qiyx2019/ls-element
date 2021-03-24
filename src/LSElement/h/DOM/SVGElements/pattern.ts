import { AllAttributes } from "../DOMAttributes/AllAttributes";
import { SVGAnimationTargetElementAttributes, SVGConditionalProcessingAttributes, SVGGenericAttributes, SVGPresentationAttributes } from "../DOMAttributes/SVG";
import { GetXY } from "../DOMAttributes/Utils";

export interface pattern extends Partial<
    Pick<AllAttributes,
        'height'
        | 'patternContentUnits'
        | 'patternTransform'
        | 'patternUnits'
        | 'preserveAspectRatio'
        | 'viewBox'
        | 'width'
    >
    & GetXY
    & SVGAnimationTargetElementAttributes
    & SVGGenericAttributes
    & SVGConditionalProcessingAttributes
    & SVGPresentationAttributes
>{}