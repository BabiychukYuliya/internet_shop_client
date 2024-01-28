import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      // { id: 1, name: "Refregerators" },
      // { id: 2, name: "Laptops" },
      // { id: 3, name: "TV-Set" },
      // { id: 4, name: "Smartphones" },
    ];
    this._brands = [
      { id: 1, name: "Sumsung" },
      { id: 2, name: "Lenovo" },
      { id: 3, name: "Asus" },
      { id: 4, name: "LG" },
    ];
    this._devices = [
      {
        id: 1,
        name: "IPhone-15",
        price: "50000",
        raiting: 5,
        img: "https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/i/p/iphone_15_pro_natural_titanium_pdp_image_position-1__ww-en_3.jpg/w_600",
      },
      {
        id: 2,
        name: "Samsung QE55Q60CAUXUA",
        price: "34999",
        raiting: 4,
        img: "https://content2.rozetka.com.ua/goods/images/big/364929635.jpg",
      },
      {
        id: 3,
        name: "IPhone-15",
        price: "50000",
        raiting: 5,
        img: "https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/i/p/iphone_15_pro_natural_titanium_pdp_image_position-1__ww-en_3.jpg/w_600",
      },
      {
        id: 4,
        name: "Samsung QE55Q60CAUXUA",
        price: "34999",
        raiting: 4,
        img: "https://content2.rozetka.com.ua/goods/images/big/364929635.jpg",
      },
      {
        id: 5,
        name: "IPhone-15",
        price: "50000",
        raiting: 5,
        img: "https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/i/p/iphone_15_pro_natural_titanium_pdp_image_position-1__ww-en_3.jpg/w_600",
      },
      {
        id: 6,
        name: "Samsung QE55Q60CAUXUA",
        price: "34999",
        raiting: 4,
        img: "https://content2.rozetka.com.ua/goods/images/big/364929635.jpg",
      },
      {
        id: 7,
        name: "IPhone-15",
        price: "50000",
        raiting: 5,
        img: "https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/i/p/iphone_15_pro_natural_titanium_pdp_image_position-1__ww-en_3.jpg/w_600",
      },
      {
        id: 8,
        name: "Samsung QE55Q60CAUXUA",
        price: "34999",
        raiting: 4,
        img: "https://content2.rozetka.com.ua/goods/images/big/364929635.jpg",
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this); //mobx слідкує за ціми змінними
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevice(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}
