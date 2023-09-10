import { todayDate } from "../dates/date";

type LibraryData =
  | { type: "newProduct"; payload: FormProductValues }
  | { type: "brands"; payload: Brands[] }
  | { type: "category"; payload: Category[] }
  | { type: "productToCart"; payload: ProductToCart[] }
  | { type: "cleanCart" }
  | { type: "resetAmountCart" }
  | { type: "currentlyDate" }
  | { type: "productNotFound"; payload: string }
  | { type: "loaderToSell"; payload: boolean }
  | { type: "generateSold"; payload: boolean }
  | { type: "loaderRegisterProduct"; payload: boolean }
  | { type: "dailySale"; payload: number }
  | { type: "dailyTicket"; payload: number }
  | { type: "averageTicket"; payload: number }
  | { type: "addStockProduct"; payload: ProductToCart | string }
  | { type: "loaderChargerStock"; payload: boolean }
  | { type: "loaderChargerStockAdd"; payload: boolean }
  | { type: "marcaSocio"; payload: MarcaSocio[] }
  | { type: "dataSales"; payload: number[] }
  | { type: "dataSalesLabel"; payload: string[] }
  | { type: "dataTotalSalesPerMonth"; payload: number }
  | { type: "totalSalesYear"; payload: number }
  | { type: "productsFromFilterByStock"; payload: ProductToCart[] }
  | { type: "productToUpdate"; payload: ProductToCart }
  | { type: "showSaleModal"; payload: boolean }
  | { type: "tostifyNotificationSales"; payload: number }

export const Library = {
  newProduct: {} as FormProductValues,
  brands: [] as Brands[],
  category: [] as Category[],
  productToCart: [] as ProductToCart[],
  totalAmountToCart: 0 as number,
  currentlyDate: "" as string,
  loaderToSell: false as boolean,
  generateSold: false as boolean,
  productNotFound: "" as string,
  loaderRegisterProduct: false as boolean,
  dailySale: 0 as number,
  dailyTicket: 0 as number,
  averageTicket: 0 as number,
  addStockProduct: "" || {} as ProductToCart | string,
  loaderChargerStock: false as boolean,
  loaderChargerStockAdd: false as boolean,
  marcaSocio: [] as MarcaSocio[],
  dataSales: [] as number[],
  dataSalesLabel: [] as string[],
  dataTotalSalesPerMonth: 0 as number,
  totalSalesYear: 0 as number,
  productsFromFilterByStock: [] as ProductToCart[],
  productToUpdate: {} as ProductToCart,
  showSaleModal: false as boolean,
  tostifyNotificationSales: 0 as number
}

export const ProductsReducer = (state: LibraryAllData, action: LibraryData) => {
  switch (action.type) {
    case "tostifyNotificationSales" : {
      return {
        ...state,
        tostifyNotificationSales: action.payload
      }
    }
    case "showSaleModal" : {
      return {
        ...state,
        showSaleModal:  action.payload
      }
    }
    case "productToUpdate" : {
      return {
        ...state,
        productToUpdate:action.payload
      }
    }
    case "productsFromFilterByStock":{
      return {
        ...state,
        productsFromFilterByStock:action.payload
      }
    }
    case "totalSalesYear":{
      return {
        ...state,
        totalSalesYear:action.payload
      }
    }
    case "dataTotalSalesPerMonth":{
      return {
        ...state,
        dataTotalSalesPerMonth:action.payload
      }
    }
    case "dataSales": {
      return {
        ...state,
        dataSales: action.payload,
      }
    }
    case "dataSalesLabel": {
      return {
        ...state,
        dataSalesLabel: action.payload
      }
    }
    case "marcaSocio": {
      return {
        ...state,
        marcaSocio: action.payload
      }
    }
    case "loaderChargerStockAdd": {
      return {
        ...state,
        loaderChargerStockAdd: action.payload
      }
    }
    case "loaderChargerStock": {
      return {
        ...state,
        loaderChargerStock: action.payload
      }
    }
    case "addStockProduct": {
      return {
        ...state,
        addStockProduct: action.payload
      }
    }
    case "averageTicket": {
      return {
        ...state,
        averageTicket: action.payload
      }
    }
    case "dailyTicket": {
      return {
        ...state,
        dailyTicket: action.payload
      }
    }
    case "dailySale": {
      return {
        ...state,
        dailySale: action.payload
      }
    }
    case "loaderRegisterProduct": {
      return {
        ...state,
        loaderRegisterProduct: action.payload
      }
    }
    case "newProduct": {
      return {
        ...state,
        newProduct: action.payload
      }
    }
    case "brands": {
      return {
        ...state,
        brands: action.payload
      }
    }
    case "category": {
      return {
        ...state,
        category: action.payload
      }
    }
    case "productToCart": {
      let amountCart: number = 0
      action.payload.map(prod => {
        const getPrice = Number(prod.price)
        console.log('getPrice', getPrice)

        let amountPerProduct: number = Number(prod.amount?.toFixed(2)) * Number(getPrice.toFixed(2))
        console.log('amountPerProduct', amountPerProduct)
        amountCart = amountCart + Number(amountPerProduct.toFixed(2))
      })
      return {
        ...state,
        totalAmountToCart: amountCart,
        productToCart: action.payload
      }
    }
    case "cleanCart": {
      return {
        ...state,
        productToCart: []
      }
    }
    case "resetAmountCart": {
      return {
        ...state,
        totalAmountToCart: 0
      }
    }
    case "currentlyDate": {
      const date = todayDate()
      return {
        ...state,
        currentlyDate: date
      }
    }
    case "loaderToSell": {
      return {
        ...state,
        loaderToSell: action.payload
      }
    }
    case "productNotFound": {
      if (action.payload === "not found") {
        return {
          ...state,
          productNotFound: "no se encontro producto"
        }
      } else {
        return {
          ...state,
          productNotFound: ""
        }
      }
    }
    case "generateSold": {
      return {
        ...state,
        generateSold: action.payload
      }
    }
  }
}



