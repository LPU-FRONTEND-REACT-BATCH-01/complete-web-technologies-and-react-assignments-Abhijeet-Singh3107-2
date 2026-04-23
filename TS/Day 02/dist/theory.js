"use strict";
// let obj: { id: number; name: string } = {
//     id: 1,
//     name: "John",
// }
// console.log(obj.id);
// console.log(obj.name);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://dummyjson.com/products");
            const data = yield response.json();
            const products = data.products;
            const arr1 = products.filter(p => p.price > 5);
            const arr2 = products.filter(p => p.price > 10);
            const arr3 = products
                .map(p => p.title)
                .sort((a, b) => a.localeCompare(b));
            const arr4 = products
                .map(p => p.title)
                .sort((a, b) => b.localeCompare(a));
            const mensShirts = products.filter(p => p.category === "mens-shirts");
            const beauty = products.filter(p => p.category === "beauty");
            console.log("Product expensive than $5");
            console.log(arr1);
            console.log("Product expensive than $10");
            console.log(arr2);
            console.log("Sort by ascending order");
            console.log(arr3);
            console.log("Sort by descending order");
            console.log(arr4);
            console.log("Mens t-shirt");
            console.log(mensShirts);
            console.log("Beauty");
            console.log(beauty);
        }
        catch (error) {
            console.log(error);
        }
    });
}
fetchProducts();
//# sourceMappingURL=theory.js.map