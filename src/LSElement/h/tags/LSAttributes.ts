import { DefaultChildren, PickNonFunction, PickWritable, StringKeyOf } from '../../types';

export type DomInterface<E extends object> = { [K in StringKeyOf<E> as `_${K}`]: E[K] }

export type LSAttributes<T extends object, E = HTMLElement> = {
    children?: DefaultChildren;
    /**
     * An array with the names of the attributes that can change
     */
    _dynamicAttributes?: (keyof (T & DomInterface<PickNonFunction<PickWritable<E>>>))[];
    /**
     * It indicates that children never change. If you use static Children, there is no need to use staticChildren or dynamicAttributes on your children.
     */
    _staticChildren?: boolean;
} & Partial<DomInterface<PickWritable<E>>>;
