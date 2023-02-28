import { IQuickview } from "~/app/core/Interfaces/iquickview";
import { Common } from "~/app/core/utilities/type.utilities";
import { IProduct } from "../iproduct";

export type IProductQuickView = Common<IProduct, IQuickview> & {
    price: number;
}

// type keys = keyof IProductQuickView;
// type Common<T, U> = Record<Extract<keyof T, keyof U>, U>;
// type IProductQuickView = Omit<IProduct, "name" | "age">;
// export type IProductQuickView = Omit<IProduct, "dummyData">;
// export interface IProductQuickView {
// }
